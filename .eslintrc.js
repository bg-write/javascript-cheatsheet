module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['google', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
    parser: '@babel/eslint-parser',
};
