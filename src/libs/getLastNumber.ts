const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export function getLastNumber(expression: string): string {
    let result = "";

    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression[i];

        if (numbers.includes(char) || char === ".") {
            result = expression[i] + result;
        } else {
            break;
        }
    }

    return result;
}