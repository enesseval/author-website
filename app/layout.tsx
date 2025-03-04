import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Ahmet Yılmaz - Resmi Web Sayfası",
   description: "Ödüllü yazar Ahmet Yılmaz'ın resmi web sayfası. Kitapları, projeleri ve daha fazlası hakkında bilgi edinin.",
   keywords: ["yazar", "kitap", "roman", "edebiyat", "Ahmet Yılmaz"],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="tr">
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
