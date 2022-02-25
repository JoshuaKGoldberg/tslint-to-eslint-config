import { RuleConverter } from "../ruleConverter.js";

export const convertUseDefaultTypeParameter: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/no-unnecessary-type-arguments",
            },
        ],
    };
};
