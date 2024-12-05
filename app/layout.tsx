"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook
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
        MainButton: {
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
          setParams: (params: { text: string }) => void;
        };
        [key: string]: any;
      };
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      try {
        console.log("Initializing Telegram WebApp...");

        // Disable vertical swipes
        window.Telegram.WebApp.disableVerticalSwipes();

        // Handle button behavior based on the page
        if (pathname === "/") {
          console.log("On main page, showing 'Close' button.");
          window.Telegram.WebApp.MainButton.setParams({ text: "Close" });
          window.Telegram.WebApp.MainButton.show();
          window.Telegram.WebApp.MainButton.onClick(() => {
            console.log("Close button clicked!");
            window.Telegram.WebApp.close();
          });
          window.Telegram.WebApp.BackButton.hide();
        } else {
          console.log("On another page, showing 'Back' button.");
          window.Telegram.WebApp.MainButton.hide();
          window.Telegram.WebApp.BackButton.show();
          window.Telegram.WebApp.BackButton.onClick(() => {
            console.log("Back button clicked!");
            history.back();
          });
        }

        console.log("Telegram WebApp API is ready.");
      } catch (error) {
        console.error("Error initializing Telegram WebApp API:", error);
      }
    } else {
      console.warn("Telegram WebApp API is not available.");
    }
  }, [pathname]); // Re-run the effect whenever the pathname changes

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
