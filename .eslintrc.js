module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: ['prettier'],
    plugins: ['prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'prettier/prettier': 'warning',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-unused-vars': ['warning', { argsIgnorePattern: 'next' }]
    }
};