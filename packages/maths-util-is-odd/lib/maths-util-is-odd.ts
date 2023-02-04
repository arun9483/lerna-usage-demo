import { isEven } from 'maths-util-is-even';

export function isOdd(num: number): boolean {
  return !isEven(num);
}
