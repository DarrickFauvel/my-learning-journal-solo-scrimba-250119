import type { Metadata } from "next";
import { Roboto, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const source = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Learning Journal",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${source.variable}`}>
      <body
        className="antialiased bg-slate-900"
      >
        <div className="w-full max-w-[414px] m-auto bg-white">
          <Header />
          
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
