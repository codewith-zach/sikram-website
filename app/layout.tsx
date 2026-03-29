import { Footer, Navbar } from "@/components/shared";
import type { Metadata } from "next";
import { Sora, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sikram Africa",
  description: "Sikram Africa website",
  icons: {
    icon: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", spaceGrotesk.variable, sora.variable, "font-sans", geist.variable)}>
      <body className="min-h-full">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
