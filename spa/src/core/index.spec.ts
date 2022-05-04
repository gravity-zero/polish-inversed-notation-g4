import {
  resolveReversePolishExpression,
  parseExpression,
  calculate,
} from "./index";

describe("Calculate / Main test", function () {
  it("Simple addition:  1 2 + = 3", function () {
    //GIVEN
    const expression = "1 2 +";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 3;

    expect(actual).toEqual(expected);
  });
  it("Simple subtraction:  1 2 - = -1", function () {
    //GIVEN
    const expression = "1 2 -";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = -1;

    expect(actual).toEqual(expected);
  });
  it("Simple multiplication:  3 5 * = 15", function () {
    //GIVEN
    const expression = "3 5 *";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 15;

    expect(actual).toEqual(expected);
  });
  it("Simple division: 10 5 / = 2", function () {
    //GIVEN
    const expression = "10 5 /";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 2;

    expect(actual).toEqual(expected);
  });
  it("multiplication with negative number: 10 5 NEGATE * = 50", function () {
    //GIVEN
    const expression = "10 5 NEGATE *";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = -50;

    expect(actual).toEqual(expected);
  });
  it("Complexe addition: 10 5 + 5 + = 20", function () {
    //GIVEN
    const expression = "10 5 + 5 +";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 20;

    expect(actual).toEqual(expected);
  });
  it("Complexe addition: 5 10 5 + + = 20", function () {
    //GIVEN
    const expression = "5 10 5 + +";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 20;

    expect(actual).toEqual(expected);
  });
  it("Complexe multiplication and addition: 15 10 * 5 + = 155", function () {
    //GIVEN
    const expression = "15 10 * 5 +";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 155;

    expect(actual).toEqual(expected);
  });
  it("Complexe multiplication and addition: 5 10 15 * + = 155", function () {
    //GIVEN
    const expression = "5 10 15 * +";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 155;

    expect(actual).toEqual(expected);
  });
  it("Complexe multiplication and division: 0 2 / 11 * = 55", function () {
    //GIVEN
    const expression = "10 2 / 11 *";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 55;

    expect(actual).toEqual(expected);
  });
  it("Complexe multiplication and division: 11 10 2 / * = 55", function () {
    //GIVEN
    const expression = "11 10 2 / *";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 55;

    expect(actual).toEqual(expected);
  });
  it("Complexe with NEGATE: 11 10 NEGATE 2 / * = -55", function () {
    //GIVEN
    const expression = "11 10 NEGATE 2 / *";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = -55;

    expect(actual).toEqual(expected);
  });
  it("Complexe with power: 9 5 3 + 2 4 ^ - + = 1", function () {
    //GIVEN
    const expression = "9 5 3 + 2 4 ^ - +";

    //WHEN
    const actual = resolveReversePolishExpression(expression);

    //THEN
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});

describe("utils", function () {
  it("Transform expression in exploitable array", function () {
    //GIVEN
    const expression = "1 2 +";

    //WHEN
    const actual = parseExpression(expression);

    //THEN
    const expected = [1, 2, "+"];

    expect(actual).toEqual(expected);
  });
  it("Calculate  1 + 3", function () {
    //GIVEN
    const number1 = 1;
    const number2 = 3;
    const operator = "+";

    //WHEN
    const actual = calculate(number1, number2, operator);

    //THEN
    const expected = 4;

    expect(actual).toEqual(expected);
  });
  it("Calculate  1 ~ 3", function () {
    //GIVEN
    const number1 = 1;
    const number2 = 3;
    const operator = "~";

    //WHEN
    //@ts-ignore
    const actual = calculate(number1, number2, operator);

    //THEN
    const expected = "Cet opérateur n'existe pas";

    expect(actual).toEqual(expected);
  });
  it("Transform expression in exploitable array", function () {
    //GIVEN
    const expression = "1 2 NEGATE +";

    //WHEN
    const actual = parseExpression(expression);

    //THEN
    const expected = [1, -2, "+"];

    expect(actual).toEqual(expected);
  });
  it("Transform expression in exploitable array", function () {
    //GIVEN
    const expression = "1 + 4 NEGATE - 6 NEGATE +";

    //WHEN
    const actual = parseExpression(expression);

    //THEN
    const expected = [1, "+", -4, "-", -6, "+"];

    expect(actual).toEqual(expected);
  });
});
