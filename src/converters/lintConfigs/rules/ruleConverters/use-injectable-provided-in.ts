import { RuleConverter } from "../ruleConverter.js";

export const convertUseInjectableProvidedIn: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/use-injectable-provided-in",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
