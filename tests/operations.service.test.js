const { handleCalculations } = require("../services/operations.service.js");

// const mockOperation = require("../models/operations.model.js")

jest.mock("../models/operations.model.js");


describe("calculator service tests", () => {

    test('adds two numbers', async () => {
        const result = await handleCalculations(1, 2, '+', 'test@example.com');
        expect(result).toBe(3);
    });

    test('subtracts two numbers', async () => {
        const result = await handleCalculations(2, 1, '-', 'test@example.com');
        expect(result).toBe(1);
    });

    test('multiplies two numbers', async () => {
        const result = await handleCalculations(2, 3, '*', 'test@example.com');
        expect(result).toBe(6);
    });

    test('divides two numbers', async () => {
        const result = await handleCalculations(6, 3, '/', 'test@example.com');
        expect(result).toBe('2.00');
    });
})