export const generateSequences = number => {
    const sequences = [];
    for (let i = 0; i <= number.length - 7; i++) {
        sequences.push(number.slice(i, i + 7));
    }
    return sequences;
};