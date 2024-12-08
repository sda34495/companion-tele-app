// /app/context/hapticContext.tsx
"use client";
import React, { createContext, useContext, ReactNode } from "react";

// Declare the global window type with HapticFeedback
declare global {
  interface Window {
    HapticFeedback?: {
      impactOccurred: (style: 'light' | 'medium' | 'heavy') => void;
    };
  }
}

// Define the type for the context
type HapticContextType = {
  triggerHapticFeedback: (style: 'light' | 'medium' | 'heavy') => void;
};

// Create the context with undefined as the default value
const HapticContext = createContext<HapticContextType | undefined>(undefined);

// Define the props for the HapticProvider component
interface HapticProviderProps {
  children: ReactNode;
}

// HapticProvider component
export const HapticProvider: React.FC<HapticProviderProps> = ({ children }) => {
  const triggerHapticFeedback = (style: 'light' | 'medium' | 'heavy') => {
    if (window.HapticFeedback) {
      window.HapticFeedback.impactOccurred(style);
    }
  };

  return (
    <HapticContext.Provider value={{ triggerHapticFeedback }}>
      {children}
    </HapticContext.Provider>
  );
};

// Custom hook to access haptic feedback function
export const useHaptic = () => {
  const context = useContext(HapticContext);
  if (!context) {
    throw new Error("useHaptic must be used within a HapticProvider");
  }
  return context;
};
