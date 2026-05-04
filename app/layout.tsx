import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coding Challenges",
  description: "A collection of coding challenges organized by language.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="bg-(--color-background-canvas) text-(--color-text-primary)">
        <div className="flex min-h-screen flex-col px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex-1">{children}</div>
          <footer className="mx-auto mt-10 w-full max-w-7xl border-t border-(--color-border-default) pt-5 text-sm font-semibold text-(--color-text-warm-muted)">
            Built by Nhan Luong - @ {currentYear}
          </footer>
        </div>
      </body>
    </html>
  );
}
