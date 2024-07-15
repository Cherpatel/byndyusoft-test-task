export const operators = ["+", "-", "*", "/", "%"];

export function isLastCharOperator(expression: string): boolean {
    return operators.includes(expression.at(-1));
}