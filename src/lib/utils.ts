import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format price/currency in Qatar Riyal (QAR)
export function formatCurrency(amount: number): string {
  return `QAR ${amount.toFixed(2)}`;
}
