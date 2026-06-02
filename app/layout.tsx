import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Esha Bargate · Global Keynote Speaker, Filmmaker & Founder",
  description:
    "Esha Bargate — filmmaker, co-producer, Telly Awards judge, and founder bridging Hollywood storytelling with Silicon Valley innovation. Available for keynotes, panels, fireside chats, and juries worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} h-full antialiased`}
    >
      <body className={`${rubik.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
