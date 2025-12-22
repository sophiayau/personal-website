import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://kit.fontawesome.com/517892e4af.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
