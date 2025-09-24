import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Mr.Shawarma - The Taste of Grill',
  description:
    'Crafted in charcoal and grilled to perfection by KingpiN Vision Forge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="preload" as="image" href="/assets/images/hero-slider-1.jpg" />
        <link rel="preload" as="image" href="/assets/images/hero-slider-2.jpg" />
        <link rel="preload" as="image" href="/assets/images/hero-slider-3.jpg" />
      </head>
      <body id="top">
        {children}
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
