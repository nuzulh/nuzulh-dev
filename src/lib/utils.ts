import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sliceToThreeArrays<T>(items: T[]) {
  const itemsLength = items.length;
  const [a, b] = [Math.ceil(itemsLength / 3), Math.ceil(2 * itemsLength / 3)];

  return [
    items.slice(0, a),
    items.slice(a, b),
    items.slice(b, itemsLength),
  ];
}
