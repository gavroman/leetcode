module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true,
        'node': true,
        'amd': true,
    },
    'extends': ['eslint:recommended', 'google'],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'rules': {
        'indent': ['error', 4],
    },
};
