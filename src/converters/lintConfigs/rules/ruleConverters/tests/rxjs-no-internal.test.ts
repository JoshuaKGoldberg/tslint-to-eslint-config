import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoInternal } from "../rxjs-no-internal.js";

describe("convertRxjsNoInternal", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoInternal({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-internal",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
