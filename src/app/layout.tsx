import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Portfolio Rodrigo Lucero",
  description: "Portfolio personal y proyectos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
