import { getLastNumber } from "./getLastNumber";

export function isZeroInsertable(expression: string): boolean {
    const lastNumber = parseFloat(getLastNumber(expression)).toString();

    return lastNumber !== "0";
}