"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import './styles/globals.css'
import { theme } from "./styles/theme";

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
        <ChakraProvider value={theme}>
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
