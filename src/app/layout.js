
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./assets/css/style.css";
import "./assets/css/fonts.css";
import "./assets/css/font-awesome/css/all.css";
import "./assets/css/font-awesome/css/all.css";
import "./assets/js/main.js";
import Head from 'next/head';
import Script from 'next/script';
// import Script from "next/script";

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
  keywords: "freelance web development, UI/UX design, logo design, graphic design, branding services, custom website design, professional logo designer, affordable web development, creative branding, graphic design freelancer, UI/UX freelancer, responsive web design, branding expert, logo design freelancer, custom logos, website redesign services, creative web design, professional branding solutions"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">

<Head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Himanshu Pratap | Webdev MrMoon</title>

        {/* Corrected CSS Paths */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/fonts.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome/css/all.css" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script asyncsrc="https://www.googletagmanager.com/gtag/js?id=G-YNFYFS75Y3"/>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-YNFYFS75Y3');
            `,
          }}
        />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        
      </body>
    </html>
  );
}
