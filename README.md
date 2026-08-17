# BeeSocial — Creative Social Media & Digital Marketing Agency

Official Website: **[https://thebeesocial.in](https://thebeesocial.in)**

BeeSocial is a creative social media and digital marketing agency specializing in scroll-stopping content creation, data-driven performance marketing, high-retention video production (reels), and omnichannel growth architectures.

---

## 🌐 Brand Overview & Contact Information

| Detail | Information |
| :--- | :--- |
| **Official Domain** | [https://thebeesocial.in](https://thebeesocial.in) |
| **Founder** | **Siddhi** |
| **Contact Phone / WhatsApp** | [+91 70208 00621](https://wa.me/917020800621) |
| **Primary Email** | [hello.thebeesocial@gmail.com](mailto:hello.thebeesocial@gmail.com) |
| **Official Instagram** | [@beesocial._](https://www.instagram.com/beesocial._) |
| **Headquarters** | India |

---

## ⚡ Tech Stack & Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Modern Vanilla CSS Design System with dark mode accents and responsive layout
- **Icons**: Lucide React
- **Markdown & Blogs**: `react-markdown` + `remark-gfm` powering 500+ optimized industry playbooks
- **Email Dispatch Service**: [Resend](https://resend.com) via Serverless Edge/API Functions
- **Hosting & Deployment**: Vercel

---

## ✉️ Resend Email Service Integration

The contact form and strategy consultation booking modal use **Resend** to deliver client leads in real time.

### How It Works:
1. **Production (Vercel Serverless Function)**: `/api/send-email` (`api/send-email.ts`) receives the form submission, generates a branded HTML email, and dispatches it via the Resend API to `hello.thebeesocial@gmail.com`.
2. **Local Development (Vite Dev Middleware)**: Custom Vite plugin in `vite.config.ts` intercepts `/api/send-email` so you can test real email sending or simulated submissions locally without deploying to Vercel.

### Environment Variables Setup:

Create a `.env` file in the root directory (refer to `.env.example`):

```bash
# Resend API Key (Obtain from https://resend.com/api-keys)
RESEND_API_KEY=re_your_api_key_here

# Destination email where lead notifications are sent
RECEIVER_EMAIL=hello.thebeesocial@gmail.com

# Verified sender address on your custom domain
SENDER_EMAIL=BeeSocial <contact@thebeesocial.in>

# Website Public URL
VITE_SITE_URL=https://thebeesocial.in
```

### Domain Verification on Resend:
To send emails from `contact@thebeesocial.in`:
1. Log in to [Resend Dashboard](https://resend.com/domains).
2. Add your domain: `thebeesocial.in`.
3. Add the provided **DKIM**, **SPF**, and **DMARC** DNS records at your domain registrar.
4. Once verified, all outbound notifications will dispatch seamlessly from `contact@thebeesocial.in`.
*(Note: If the custom domain is pending verification, the handler automatically falls back to `onboarding@resend.dev` to prevent failed submissions).*

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will start at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Regenerate Dynamic Sitemap
```bash
node generate_sitemap.js
```
Generates `public/sitemap.xml` with canonical URLs for `https://thebeesocial.in`.

---

## 📁 Project Structure

```
├── api/
│   └── send-email.ts          # Vercel serverless function for Resend email dispatch
├── public/
│   ├── bee_social_logo.png    # Standalone transparent logo
│   ├── Siddhi.png             # Founder profile image
│   ├── blogs/                 # 500+ markdown blog playbooks
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # XML Sitemap for https://thebeesocial.in
├── src/
│   ├── components/            # Header, Footer, Hero, ServicesGrid, ContactSection, etc.
│   ├── pages/                 # Home, Services, Portfolio, Industries, Blogs, SMM, etc.
│   ├── data/                  # blogData.ts, portfolioData.ts, industriesData.ts
│   ├── utils/                 # Routing, SEO helpers, formatters
│   ├── types.ts               # Core TypeScript definitions
│   └── App.tsx                # Application root with dynamic SEO router
├── index.html                 # HTML shell with OpenGraph and JSON-LD schema
├── vite.config.ts             # Vite configuration with local Resend plugin
└── vercel.json                # Vercel routing & SPA fallback configuration
```

---

## 📄 License & Ownership

© 2026 **BeeSocial** ([thebeesocial.in](https://thebeesocial.in)). All rights reserved.
