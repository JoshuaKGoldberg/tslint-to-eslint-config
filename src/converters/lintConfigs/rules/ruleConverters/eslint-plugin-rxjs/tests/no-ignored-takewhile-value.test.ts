import { convertNoIgnoredTakewhileValue } from "../no-ignored-takewhile-value";

describe(convertNoIgnoredTakewhileValue, () => {
    test("conversion without arguments", () => {
        const result = convertNoIgnoredTakewhileValue({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-takewhile-value",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
