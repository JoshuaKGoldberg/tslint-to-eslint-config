import { RuleConverter } from "../ruleConverter.js";

export const convertReactA11yEventHasRole: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/no-static-element-interactions",
            },
        ],
    };
};
