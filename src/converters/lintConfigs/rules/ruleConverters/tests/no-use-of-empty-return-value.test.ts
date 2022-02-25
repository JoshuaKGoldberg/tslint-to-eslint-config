import { describe, expect, test } from "@jest/globals";

import { convertNoUseOfEmptyReturnValue } from "../no-use-of-empty-return-value.js";

describe("convertNoUseOfEmptyReturnValue", () => {
    test("conversion without arguments", () => {
        const result = convertNoUseOfEmptyReturnValue({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-use-of-empty-return-value",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
