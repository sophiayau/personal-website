import "./globals.css";
import Navbar from "@/components/Navbar";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"], // Pixelify Sans only supports 400
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
