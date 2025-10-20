import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TicTacToe • Ocean Professional",
  description: "A modern TicTacToe game built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
