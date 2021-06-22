export default {
    testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
    setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
    moduleNameMapper: {
        '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
    },
    transform: {
        '/^.\\.(js|jsx|ts|tsx)$/': '<rootDir>/node_modules/babel-jest',
        '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
        process: () => {
            return '<rootDir>';
        }
    },
};