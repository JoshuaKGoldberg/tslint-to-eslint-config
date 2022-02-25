import { RuleConverter } from "../ruleConverter.js";

export const convertNoAlphabeticalSort: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [{ ignoreStringArrays: true }],
                ruleName: "@typescript-eslint/require-array-sort-compare",
            },
        ],
    };
};
