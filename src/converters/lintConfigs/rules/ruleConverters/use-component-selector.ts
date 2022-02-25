import { RuleConverter } from "../ruleConverter.js";

export const convertUseComponentSelector: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/use-component-selector",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
