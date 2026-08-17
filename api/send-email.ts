import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const MAIN_RECEIVER_EMAIL = 'hello.thebeesocial@gmail.com';
const DEFAULT_SENDER_EMAIL = 'BeeSocial <contact@thebeesocial.in>';
const FALLBACK_SENDER_EMAIL = 'BeeSocial <onboarding@resend.dev>';
const WEBSITE_DOMAIN = 'https://thebeesocial.in';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, phone, message, planName, growthGoal, website, formType } = body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required fields.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.RECEIVER_EMAIL || MAIN_RECEIVER_EMAIL;
    const senderEmail = process.env.SENDER_EMAIL || DEFAULT_SENDER_EMAIL;

    const isStrategy = formType === 'strategy' || !!planName || !!growthGoal;
    const subject = isStrategy
      ? `🚀 New Strategy Booking: ${name} (${planName || 'General Strategy'}) — BeeSocial`
      : `📩 New Contact Inquiry from ${name} — BeeSocial`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #0f172a; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 6px 0 0 0; font-size: 14px; color: #94a3b8; }
          .badge { display: inline-block; background: #d97706; color: #ffffff; padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; }
          .content { padding: 30px 24px; }
          .data-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          .data-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .data-table tr:last-child td { border-bottom: none; }
          .label { font-weight: 700; color: #475569; width: 140px; }
          .value { color: #0f172a; font-weight: 500; }
          .message-box { background: #f8fafc; border-left: 4px solid #d97706; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 24px; text-align: center; font-size: 12px; color: #64748b; }
          .footer a { color: #d97706; text-decoration: none; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">${isStrategy ? 'Strategy Session' : 'Lead Inquiry'}</div>
            <h1>BeeSocial Website Lead</h1>
            <p>${isStrategy ? 'New consultation request submitted' : 'New lead received via website contact form'}</p>
          </div>
          
          <div class="content">
            <table class="data-table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #d97706; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a></td>
              </tr>
              ` : ''}
              ${website ? `
              <tr>
                <td class="label">Website / Handle</td>
                <td class="value">${website}</td>
              </tr>
              ` : ''}
              ${planName ? `
              <tr>
                <td class="label">Interested Scope</td>
                <td class="value"><span style="background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px; font-weight: 600;">${planName}</span></td>
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
            Delivered to <strong>${receiverEmail}</strong> via Resend | <a href="${WEBSITE_DOMAIN}" target="_blank">thebeesocial.in</a>
          </div>
        </div>
      </body>
      </html>
    `;

    if (!apiKey) {
      console.warn('RESEND_API_KEY is not set in environment variables. Simulating email send to:', receiverEmail);
      return res.status(200).json({
        success: true,
        simulated: true,
        message: 'Form submission received! (Simulated mode: RESEND_API_KEY environment variable is missing).'
      });
    }

    const resend = new Resend(apiKey);
    
    // Attempt sending from custom domain sender, falling back to onboarding@resend.dev if custom domain is not yet verified on Resend
    let response = await resend.emails.send({
      from: senderEmail,
      to: [receiverEmail],
      replyTo: email,
      subject: subject,
      html: htmlContent,
    });

    if (response.error && senderEmail !== FALLBACK_SENDER_EMAIL) {
      console.warn(`Sending from ${senderEmail} failed (${response.error.message}), attempting fallback sender ${FALLBACK_SENDER_EMAIL}...`);
      response = await resend.emails.send({
        from: FALLBACK_SENDER_EMAIL,
        to: [receiverEmail],
        replyTo: email,
        subject: subject,
        html: htmlContent,
      });
    }

    if (response.error) {
      console.error('Resend API returned an error:', response.error);
      return res.status(500).json({
        error: response.error.message || 'Resend failed to send email.'
      });
    }

    return res.status(200).json({
      success: true,
      id: response.data?.id,
      message: 'Email dispatched successfully via Resend.'
    });
  } catch (err: any) {
    console.error('Error in send-email API endpoint:', err);
    return res.status(500).json({
      error: err.message || 'An unexpected error occurred on the server.'
    });
  }
}
