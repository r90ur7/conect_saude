"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import { ChakraProvider } from "@chakra-ui/react";
import './styles/globals.css'
import { system } from "./styles/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ChakraProvider value={system}>
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}

