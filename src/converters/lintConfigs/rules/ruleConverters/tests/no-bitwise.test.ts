import { describe, expect, test } from "@jest/globals";

import { convertNoBitwise } from "../no-bitwise.js";

describe("convertNoBitwise", () => {
    test("conversion without arguments", () => {
        const result = convertNoBitwise({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-bitwise",
                },
            ],
        });
    });
});
