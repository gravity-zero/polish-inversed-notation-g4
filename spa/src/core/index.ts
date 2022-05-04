import { isNumber } from "lodash";
import { parse } from "path";

type Operator = "*" | "/" | "+" | "-";
const operators = ["*", "/", "+", "-", "NEGATE"];

export function resolveReversePolishExpression(
  expression: string
): Number | null {
  const formatedExp = parseExpression(expression);

  const firstOperatorIndex: number = formatedExp?.findIndex(
    (el) => typeof el === "string" && operators?.includes(el)
  );

  const number1 = formatedExp[firstOperatorIndex - 2];
  const number2 = formatedExp[firstOperatorIndex - 1];
  const operator = formatedExp[firstOperatorIndex];

  if (isNumber(number1) && isNumber(number2) && typeof operator === "string") {
    return calculate(number1, number2, operator);
  }

  return null;
}

export function parseExpression(expression: string): (number | string)[] {
  const negateIndexes: number[] = [];
  const parsedExpression: (number | string)[] = expression
    ?.split(" ")
    ?.map((el) => (isNaN(parseInt(el)) ? el : parseInt(el)))
    ?.map((element, i) => {
      if (element === "NEGATE") {
        negateIndexes.push(i);
        return "";
      }
      return element;
    })
    ?.filter(
      (el) =>
        (typeof el === "string" && operators?.includes(el)) || isNumber(el)
    );

  if (negateIndexes?.length > 0 && parse) {
    negateIndexes?.forEach((index) => {
      if (typeof parsedExpression[index - 1] === "number") {
        parsedExpression.splice(index - 1, 1, parsedExpression[index - 1] * -1);
      }
    });
  }

  return parsedExpression;
}

export function calculate(
  number1: number,
  number2: number,
  operator: string
): Number | null {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "/":
      return number1 / number2;
    case "*":
      return number1 * number2;
    default:
      return null;
  }
}
