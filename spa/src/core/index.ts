import { isNumber } from "lodash";

const operators = ["*", "/", "+", "-", "^", "NEGATE"];

enum Operators {
  Product = "*",
  Fraction = "/",
  Sum = "+",
  Difference = "-",
  Power = "^",
  Negative = "NEGATE",
}

enum Errors {
  InvalidOperator = "Cet opérateur n'existe pas",
  CalculError = "Erreur lors du calcul",
}

type Error = Errors;
type Operator = Operators;
interface Result {
  status: "error" | "success";
  content: Error | number;
}

export default function formatedResolveReversePolishExpression(
  expression: string
): Result {
  const result = resolveReversePolishExpression(expression);
  const formatedResult = { content: result };
  return {
    status: isNumber(formatedResult?.content) ? "success" : "error",
    ...formatedResult,
  };
}

export function resolveReversePolishExpression(
  expression: string
): number | Error {
  const formatedExp = parseExpression(expression);
  return recursiveCalcul(formatedExp);
}

export function parseExpression(expression: string): (number | string)[] {
  const splitedExpression: string[] = expression?.split(" ");
  const parsedOperandsExpresssion: (string | number)[] =
    parseOperandsToNumber(splitedExpression);
  const parsedExpression: (string | number)[] = switchNegateToNegativeNumber(
    parsedOperandsExpresssion
  );

  const filteredExpression = parsedExpression?.filter(
    (el) => (typeof el === "string" && operators?.includes(el)) || isNumber(el)
  );

  return filteredExpression;
}

export function calculate(
  number1: number,
  number2: number,
  operator: Operator | string
): number | Error {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "/":
      return number1 / number2;
    case "*":
      return number1 * number2;
    case "^":
      return number1 ** number2;
    default:
      return Errors?.InvalidOperator;
  }
}

function parseOperandsToNumber(array: string[]): (string | number)[] {
  return array?.map((el) => (isNaN(parseInt(el)) ? el : parseInt(el)));
}

function switchNegateToNegativeNumber(
  array: (string | number)[]
): (string | number)[] {
  // return array ET negateIndexes

  const negateIndexes: number[] = [];

  const parsedExpression = array?.map((element, i) => {
    if (element === "NEGATE") {
      negateIndexes.push(i);
      return "";
    }
    return element;
  });

  if (negateIndexes?.length > 0) {
    negateIndexes?.forEach((index) => {
      if (typeof parsedExpression[index - 1] === "number") {
        //@ts-ignore
        parsedExpression.splice(index - 1, 1, parsedExpression[index - 1] * -1);
      }
    });
  }

  return parsedExpression;
}

function recursiveCalcul(formatedExp: (number | string)[]): number | Error {
  const array = [...formatedExp];

  if (array?.length > 1) {
    const firstOperatorIndex: number = array?.findIndex(
      (el) => typeof el === "string" && operators?.includes(el)
    );

    const number1 = array[firstOperatorIndex - 2];
    const number2 = array[firstOperatorIndex - 1];
    const operator = array[firstOperatorIndex];

    if (
      isNumber(number1) &&
      isNumber(number2) &&
      typeof operator === "string"
    ) {
      console.log(operator);
      let result = calculate(number1, number2, operator);

      if (isNumber(result)) {
        array.splice(firstOperatorIndex - 2, 2);
        array.splice(firstOperatorIndex - 2, 1, result);
        return recursiveCalcul(array);
      }

      return result;
    } else {
      return Errors?.CalculError;
    }
  } else {
    return isNumber(array[0]) ? array[0] : Errors?.CalculError;
  }
}
