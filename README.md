# East Wind Myanmar - Official Website

This is the official enterprise website for **East Wind Myanmar Company Limited**, designed to showcase our comprehensive solutions in Equipment Supply, Information Technology, and seamless Telecommunication Implementation across Myanmar.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Email Service:** [Resend](https://resend.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **DNS/Security:** [Cloudflare](https://www.cloudflare.com/)

## ✨ Key Features

- **Enterprise UI/UX:** Clean, modern, and highly responsive design with ultra-white space.
- **Dynamic Contact Form:** Integrated with Resend API for secure and automated email delivery.
- **SEO Optimized:** Full Open Graph metadata, dynamically generated `sitemap.xml`, and `robots.txt`.
- **Custom Error Handling:** Beautiful bespoke `404 Not Found` and `500 Server Error` boundaries.
- **Type-Safe:** 100% strict TypeScript implementation.

## 🛠️ Getting Started

Follow these instructions to set up the project locally.

### 1. Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/en/) (v18.17 or later)
- npm, yarn, or pnpm

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd east-wind-myanmar
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add the necessary API keys:

```env
# Resend API key for contact form emails
RESEND_API_KEY=your_resend_api_key_here
```

### 4. Running the Development Server
Start the local development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
east-wind-myanmar/
├── app/
│   ├── (pages)/        # Public pages (Home, About, Contact, etc.)
│   ├── privacy/        # Privacy Policy page
│   ├── terms/          # Terms of Service page
│   ├── layout.tsx      # Root layout and metadata
│   ├── error.tsx       # Global error boundary
│   ├── not-found.tsx   # Custom 404 page
│   ├── sitemap.ts      # Dynamic sitemap generation
│   └── robots.ts       # Robots.txt configuration
├── components/         # Reusable UI components
├── hook/               # Custom React hooks (e.g., useCursorHover)
├── public/             # Static assets (Images, Icons, etc.)
└── ...configuration files
```

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). 
1. Push the code to GitHub/GitLab.
2. Import the project in Vercel.
3. Add the `RESEND_API_KEY` in the Vercel Environment Variables settings.
4. Deploy.

---
*Developed for East Wind Myanmar's Digital Future.*