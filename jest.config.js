module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.m?js$': 'babel-jest',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    extensionsToTreatAsEsm: ['.js', 'jsx', 'ts', 'tsx'],
};
  