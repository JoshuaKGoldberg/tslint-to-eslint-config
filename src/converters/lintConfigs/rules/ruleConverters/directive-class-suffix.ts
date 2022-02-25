import { RuleConverter } from "../ruleConverter.js";

export const convertDirectiveClassSuffix: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            suffixes: tslintRule.ruleArguments,
                        },
                    ],
                }),
                ruleName: "@angular-eslint/directive-class-suffix",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
