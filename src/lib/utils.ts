import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }
  return phone;
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export function calculateBathPrice(
  width: number,
  height: number,
  material: string,
  foundation: string,
  options: string[]
): number {
  const area = width * height;

  const materialPrices: Record<string, number> = {
    brus: 15000,
    log: 18000,
    frame: 12000,
    brick: 20000,
  };

  const foundationPrices: Record<string, number> = {
    strip: 80000,
    pile: 60000,
    slab: 100000,
  };

  const optionPrices: Record<string, number> = {
    stove: 50000,
    interior: 80000,
    terrace: 120000,
    font: 150000,
  };

  let totalPrice = area * (materialPrices[material] || 15000);
  totalPrice += foundationPrices[foundation] || 60000;

  options.forEach((option) => {
    totalPrice += optionPrices[option] || 0;
  });

  return Math.round(totalPrice);
}
