import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });

export const metadata: Metadata = {
  title: "Product landing Page | Mardelito",
  description: "A modern and responsive landing page designed for showcasing a marketing app",
  keywords: "landing page, web development, responsive design, UI/UX, modern website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
