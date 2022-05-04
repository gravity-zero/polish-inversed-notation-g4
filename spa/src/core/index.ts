import { isNumber } from "lodash";
import { parse } from "path";
import { createTypeOperatorNode } from "typescript";

type Operator = "*" | "/" | "+" | "-";
const operators = ["*", "/", "+", "-", "NEGATE"];

export function resolveReversePolishExpression(
  expression: string
): Number | null {
  const formatedExp = parseExpression(expression);

  return recursiveCalcul(formatedExp);
}

export function parseExpression(expression: string): (number | string)[] {

  const splitedExpression: string[] = expression?.split(" ")
  const parsedOperandsExpresssion: (string | number)[] = parseOperandsToNumber(splitedExpression)
  const parsedExpression: (string | number)[] = switchNegateToNegativeNumber(parsedOperandsExpresssion)

  const filteredExpression = parsedExpression?.filter(
    (el) =>
      (typeof el === "string" && operators?.includes(el)) || isNumber(el)
  );

  return filteredExpression
}

export function calculate(
  number1: number,
  number2: number,
  operator: string
): number {
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
      return 0;
  }
}

function parseOperandsToNumber(array: string[]): (string | number)[]  {
  return array?.map((el) => (isNaN(parseInt(el)) ? el : parseInt(el)))
}

function switchNegateToNegativeNumber(array: (string | number)[]): (string | number)[] {
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

  return parsedExpression
}

function recursiveCalcul(formatedExp: (number | string)[] ): number | null {

  const array = [...formatedExp]
  
  if(array?.length > 1) {
    const firstOperatorIndex: number = array?.findIndex(
      (el) => typeof el === "string" && operators?.includes(el)
    );
  
    const number1 = array[firstOperatorIndex - 2];
    const number2 = array[firstOperatorIndex - 1];
    const operator = array[firstOperatorIndex];
  
    if (isNumber(number1) && isNumber(number2) && typeof operator === "string") {
      let result = calculate(number1, number2, operator);
  
      array.splice(firstOperatorIndex - 2, 2)
      array.splice(firstOperatorIndex - 2, 1, result)

      recursiveCalcul(array)
    } else {
      return null
    }


  } else {
    return isNumber(array[0]) ? array[0] : null
  }
  
}