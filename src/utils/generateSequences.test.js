// generateSequences.test.js
import { generateSequences } from './generateSequences';

describe('generateSequences', () => {
    it('should return all 7-character sequences from the input string', () => {
        const input = '1234567890';
        const expectedOutput = ['1234567', '2345678', '3456789', '4567890'];
        expect(generateSequences(input)).toEqual(expectedOutput);
    });

    it('should return an empty array if the input string is less than 7 characters', () => {
        const input = '123456';
        expect(generateSequences(input)).toEqual([]);
    });

    it('should return a single sequence if the input string is exactly 7 characters', () => {
        const input = '1234567';
        const expectedOutput = ['1234567'];
        expect(generateSequences(input)).toEqual(expectedOutput);
    });
});