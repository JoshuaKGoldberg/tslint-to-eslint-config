module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ["airbnb-base", "eslint-config-prettier", "plugin:@typescript-eslint/all"],
    overrides: [
        {
            files: ["*.stubs.ts", "*.test.ts"],
            rules: {
                "@typescript-eslint/promise-function-async": 0,
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/generic-type-naming": 0,
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-extra-parens": 0,
        "@typescript-eslint/no-magic-numbers": 0,
        "@typescript-eslint/no-parameter-properties": 0,
        "@typescript-eslint/no-type-alias": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/prefer-for-of": 1,
        "@typescript-eslint/prefer-interface": 0,
        "default-case": 0,
        "guard-for-in": 0,
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: ["**/*.stubs.ts", "**/*.test.*"] },
        ],
        "import/first": 0,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "no-console": 0,
        "no-continue": 0,
        "no-empty-function": 0,
        "no-restricted-syntax": 0,
        "no-param-reassign": 0,
        "no-return-await": 0,
        "no-shadow": 0,
        "no-undef": 0,
        "no-useless-constructor": 0,
    },
};
