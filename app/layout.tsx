"use client";
import { useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";

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
      MainButton: any;
      WebApp: {
        expand: () => void;
        disableVerticalSwipes: () => void;
        enableVerticalSwipes: () => void;
        HapticFeedback: {
          impactOccurred: (style: "light" | "medium" | "heavy") => void;
          notificationOccurred: (type: "error" | "success" | "warning") => void;
          selectionChanged: () => void;
        };
        BackButton: {
          close: () => void;
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
        };
        close: () => void;
        [key: string]: any;
      };
    };
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const handleBack = () => {
    // Trigger haptic feedback for a back action
    if (window.Telegram?.WebApp.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred("medium");
    }
    history.back(); // Go back to the previous page
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      try {
        console.log("Initializing Telegram WebApp...");

        window.Telegram.WebApp.expand();
        console.log("Telegram WebApp expanded to full height.");

        // Disable vertical swipes
        window.Telegram.WebApp.disableVerticalSwipes();
        console.log("Vertical swipes disabled.");

        // When on the home page ("/"), show the "close" button
        if (pathname === '/') {
          window.Telegram.MainButton.text = "Close";
          window.Telegram.MainButton.color = "#FF0000"; // Optional: Change button color to red
          window.Telegram.MainButton.show();

          // Add an event listener to close the app when the MainButton is clicked
          window.Telegram.MainButton.onClick(() => {
            if (window.Telegram?.WebApp.HapticFeedback) {
              window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");
            }
            window.Telegram?.WebApp.close();
          });

          // Hide the back button on the root page
          window.Telegram.WebApp.BackButton.hide();
          console.log("Close button shown, back button hidden.");
        } else {
          // Show back button on all other pages
          window.Telegram.WebApp.BackButton.show();
          console.log("Back button enabled.");

          // Handle back button click
          window.Telegram.WebApp.BackButton.onClick(() => {
            console.log("Back button clicked!");
            handleBack(); // Trigger haptic feedback and navigate back
          });
        }

        console.log("Telegram WebApp API is ready.");
      } catch (error) {
        console.error("Error initializing Telegram WebApp API:", error);
      }
    } else {
      console.warn("Telegram WebApp API is not available.");
    }

    // Cleanup function to hide buttons when leaving the page
    return () => {
      if (window.Telegram?.MainButton) {
        window.Telegram.MainButton.hide();
      }
      if (window.Telegram?.WebApp.BackButton) {
        window.Telegram.WebApp.BackButton.hide();
      }
    };
  }, [pathname]);


  return (
    <html lang="en">
      <head>
        {/* Add Telegram SDK script */}
        <script async src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}