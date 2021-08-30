import { RuleConverter } from "../../ruleConverter";

export const convertNoIgnoredTakewhileValue: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-takewhile-value",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
