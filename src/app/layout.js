
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./assets/css/style.css";
import "./assets/css/fonts.css";
import "./assets/css/font-awesome/css/all.css";
import "./assets/css/font-awesome/css/all.css";
import "./assets/js/main.js";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Himanshu Pratap | Webdev MrMoon",
  description: "Looking for expert web development, UI/UX design, logo design, graphic design, and branding? As a freelancer, I offer affordable and professional services to help your business grow. Whether you need a stunning website, a unique logo, or a complete brand makeover, I’m here to bring your ideas to life with creativity and quality.",
  keywords: "freelance web development, UI/UX design, logo design, graphic design, branding services, custom website design, professional logo designer, affordable web development, creative branding, graphic design freelancer, UI/UX freelancer, responsive web design, branding expert, logo design freelancer, custom logos, website redesign services, creative web design, professional branding solutions",
  other: {
    "gtag": `
      <Script asyncsrc="https://www.googletagmanager.com/gtag/js?id=G-YNFYFS75Y3"/>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YNFYFS75Y3');
      </script>
    `,
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        
      </body>
    </html>
  );
}
