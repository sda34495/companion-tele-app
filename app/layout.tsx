"use client";
import { useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";

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

// Declare the Telegram WebApp API globally
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        disableVerticalSwipes: () => void;
        enableVerticalSwipes: () => void;
        BackButton: {
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
        };
        [key: string]: any; // Include other methods/properties for flexibility
      };
    };
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      try {
        console.log("Initializing Telegram WebApp...");

        // Disable vertical swipes
        window.Telegram.WebApp.disableVerticalSwipes();
        console.log("Vertical swipes disabled.");

        // Enable the back button
        window.Telegram.WebApp.BackButton.show();
        console.log("Back button enabled.");

        // Handle back button click
        window.Telegram.WebApp.BackButton.onClick(() => {
          console.log("Back button clicked!");
          // Implement custom back navigation logic
          alert("Navigating back!");
        });

        console.log("Telegram WebApp API is ready.");
      } catch (error) {
        console.error("Error initializing Telegram WebApp API:", error);
      }
    } else {
      console.warn("Telegram WebApp API is not available.");
    }
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
