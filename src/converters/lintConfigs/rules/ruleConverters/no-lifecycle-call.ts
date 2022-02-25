import { RuleConverter } from "../ruleConverter.js";

export const convertNoLifecycleCall: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-lifecycle-call",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
