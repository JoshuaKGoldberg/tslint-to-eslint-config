import { RuleConverter } from "../ruleConverter.js";

export const convertReactA11yRole: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/aria-role",
            },
        ],
    };
};
