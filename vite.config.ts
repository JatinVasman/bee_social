import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { Resend } from 'resend';

// Custom Vite plugin to handle /api/send-email locally during development
function resendDevPlugin() {
  return {
    name: 'resend-dev-server',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url === '/api/send-email' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk.toString();
          });
          req.on('end', async () => {
            try {
              const env = loadEnv('development', process.cwd(), '');
              const parsedBody = body ? JSON.parse(body) : {};
              const { name, email, phone, message, planName, growthGoal, website, formType } = parsedBody;

              if (!name || !email) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: 'Name and email are required fields.' }));
              }

              const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
              const receiverEmail = env.RECEIVER_EMAIL || process.env.RECEIVER_EMAIL || 'hello.thebeesocial@gmail.com';

              const isStrategy = formType === 'strategy' || !!planName || !!growthGoal;
              const subject = isStrategy
                ? `🚀 New Strategy Booking: ${name} (${planName || 'General Strategy'})`
                : `📩 New Contact Inquiry from ${name} - BeeSocial`;

              const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #1e293b; }
                    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
                    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
                    .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
                    .header p { margin: 6px 0 0 0; font-size: 14px; color: #94a3b8; }
                    .badge { display: inline-block; background: #ff4e27; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; }
                    .content { padding: 30px 24px; }
                    .data-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                    .data-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
                    .data-table tr:last-child td { border-bottom: none; }
                    .label { font-weight: 700; color: #475569; width: 140px; }
                    .value { color: #0f172a; font-weight: 500; }
                    .message-box { background: #f8fafc; border-left: 4px solid #ff4e27; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
                    .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <div class="badge">${isStrategy ? 'Strategy Session' : 'Contact Lead'}</div>
                      <h1>BeeSocial Website Inquiry</h1>
                      <p>${isStrategy ? 'New consultation request submitted' : 'New lead received via contact form'}</p>
                    </div>
                    
                    <div class="content">
                      <table class="data-table">
                        <tr>
                          <td class="label">Full Name</td>
                          <td class="value"><strong>${name}</strong></td>
                        </tr>
                        <tr>
                          <td class="label">Email Address</td>
                          <td class="value"><a href="mailto:${email}" style="color: #ff4e27; text-decoration: none; font-weight: 600;">${email}</a></td>
                        </tr>
                        ${phone ? `
                        <tr>
                          <td class="label">Phone Number</td>
                          <td class="value"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a></td>
                        </tr>
                        ` : ''}
                        ${website ? `
                        <tr>
                          <td class="label">Website / Phone</td>
                          <td class="value">${website}</td>
                        </tr>
                        ` : ''}
                        ${planName ? `
                        <tr>
                          <td class="label">Interested Plan</td>
                          <td class="value"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-weight: 600;">${planName}</span></td>
                        </tr>
                        ` : ''}
                        ${growthGoal ? `
                        <tr>
                          <td class="label">Growth Goal</td>
                          <td class="value">${growthGoal}</td>
                        </tr>
                        ` : ''}
                        <tr>
                          <td class="label">Submitted At</td>
                          <td class="value">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)</td>
                        </tr>
                      </table>

                      ${message ? `
                      <div style="margin-top: 24px;">
                        <div class="label" style="margin-bottom: 6px;">Client Message:</div>
                        <div class="message-box">${message}</div>
                      </div>
                      ` : ''}
                    </div>

                    <div class="footer">
                      Delivered directly to <strong>${receiverEmail}</strong> via Resend Email Service.
                    </div>
                  </div>
                </body>
                </html>
              `;

              res.setHeader('Content-Type', 'application/json');

              if (!apiKey || apiKey === 'your_resend_api_key_here') {
                console.warn('[Resend Dev Server] RESEND_API_KEY is not configured in .env. Simulating email send to:', receiverEmail);
                res.statusCode = 200;
                return res.end(JSON.stringify({
                  success: true,
                  simulated: true,
                  message: 'Form submitted successfully! (Simulated mode: Set RESEND_API_KEY in .env to send real emails).'
                }));
              }

              const resend = new Resend(apiKey);
              const senderEmail = env.SENDER_EMAIL || process.env.SENDER_EMAIL || 'BeeSocial <contact@thebeesocial.in>';
              let response = await resend.emails.send({
                from: senderEmail,
                to: [receiverEmail],
                replyTo: email,
                subject: subject,
                html: htmlContent,
              });

              if (response.error && senderEmail !== 'BeeSocial <onboarding@resend.dev>') {
                console.warn('[Resend Dev Server] Custom sender failed, falling back to onboarding@resend.dev...');
                response = await resend.emails.send({
                  from: 'BeeSocial <onboarding@resend.dev>',
                  to: [receiverEmail],
                  replyTo: email,
                  subject: subject,
                  html: htmlContent,
                });
              }

              if (response.error) {
                console.error('[Resend Dev Server] API Error:', response.error);
                res.statusCode = 500;
                return res.end(JSON.stringify({ error: response.error.message || 'Resend error' }));
              }

              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true, id: response.data?.id, message: 'Email sent via Resend!' }));
            } catch (err: any) {
              console.error('[Resend Dev Server] Server error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ error: err.message || 'Internal dev server error' }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), resendDevPlugin()],
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-markdown/')) {
            return 'vendor-markdown';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-icons';
          }
        }
      }
    }
  }
});
