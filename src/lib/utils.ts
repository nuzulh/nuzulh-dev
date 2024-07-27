import { type ClassValue, clsx } from 'clsx';
import { differenceInMonths, differenceInYears, subYears } from 'date-fns';
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

export function getDiffMonths(a: Date, b: Date) {
  const diffYears = differenceInYears(b, a);
  const diffMonths = differenceInMonths(subYears(b, diffYears), a);

  const yearsResult = diffYears < 1 ? '' :
    diffYears > 1
      ? `${diffYears} Years, `
      : `${diffYears} Year, `;
  const monthsResult = diffMonths < 1 ? '' :
    diffMonths > 1
      ? `${diffMonths} Months`
      : `${diffMonths} Month`;

  return yearsResult + monthsResult;
}
