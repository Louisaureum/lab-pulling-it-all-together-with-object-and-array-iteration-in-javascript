module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        mocha: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'script',
    },
    globals: {
        expect: 'readonly',
        numPointsScored: 'readonly',
        shoeSize: 'readonly',
        teamColors: 'readonly',
        teamNames: 'readonly',
        playerNumbers: 'readonly',
        playerStats: 'readonly',
        bigShoeRebounds: 'readonly',
    },
    rules: {
        'no-unused-vars': 'off',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'no-trailing-spaces': 'error',
        'eol-last': ['error', 'always'],
    },
};
