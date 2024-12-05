"use client"; // Enables client-side functionality like useEffect

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";

// Define Telegram WebApp API types
interface TelegramWebApp {
  preventClosing: () => void;
  close: () => void;
  expand: () => void;
  BackButton: {
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
  };
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}

declare const window: Window;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Telegram Web App",
  description: "Customized Telegram Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check if Telegram WebApp API is available
    const tg = window.Telegram?.WebApp;
    if (tg) {
      // Prevent closing on scroll
      tg.preventClosing();

      // Show the back button and set up its behavior
      tg.BackButton.show();
      tg.BackButton.onClick(() => {
        tg.close(); // Close the app when the back button is pressed
      });

      // Expand the app to full height
      tg.expand();
    }

    // Cleanup function to hide back button
    return () => {
      tg?.BackButton.hide();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Add Telegram SDK script */}
        <script
          async
          src="https://telegram.org/js/telegram-web-app.js"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
