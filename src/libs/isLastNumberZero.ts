import { getLastNumber } from "./getLastNumber";

export function isLastNumberZero(expression: string): boolean {
    const lastNumber = getLastNumber(expression);

    return lastNumber === "0";
}