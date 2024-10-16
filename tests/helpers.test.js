const { add, subtract, multiply, divide, customError} = require("../helpers/")


test('this adds two numbers', () => {
	expect(add(10, 5)).toBe(15);
})

test('subtracts two numbers', () => {
    expect(subtract(2, 1)).toBe(1);
});

test('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('divides two numbers', () => {
    expect(divide(6, 3)).toBe('2.00');
    expect(divide(-6, 3)).toBe('-2.00');
});

test('throws error when dividing by zero', () => {
    expect(() => divide(1, 0)).toThrow('Denominator must not be 0');
});

test('throws custom error with status code', () => {
    expect(customError("throws custom error", 400)).toThrow("throws custom error");
})