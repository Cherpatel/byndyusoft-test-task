import { getLastNumber } from "./getLastNumber";

export function isLastNumberFloat(expression: string): boolean {
    const lastNumber = getLastNumber(expression);

    return lastNumber.includes(".");
}