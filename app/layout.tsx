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
        BackButton: {
          close: () => void;
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
        };
        close: () => void; // Closes the WebApp
        [key: string]: any; // Include other methods/properties for flexibility
      };
    };
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const handleBack = () => {
    history.back(); // Go back to the previous page
  };


  useEffect(() => {
    const addHapticFeedback = () => {
      // Ensure the Telegram WebApp API and HapticFeedback are available
      if (window.Telegram?.WebApp.HapticFeedback) {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            window.Telegram?.WebApp.HapticFeedback.impactOccurred("light");
          });
        });
      }
    };

    // Call the function on component mount
    addHapticFeedback();

    // Cleanup function to remove event listeners
    return () => {
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {
          if (window.Telegram?.WebApp.HapticFeedback) {
            window.Telegram.WebApp.HapticFeedback.impactOccurred("light");
          }
        });
      });
    };
  }, [pathname]);

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
            // Implement custom back navigation logic
            handleBack();
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

  }, [pathname]); // Dependency array with pathname to rerun on route change

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