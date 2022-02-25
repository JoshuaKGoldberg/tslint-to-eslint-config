import { describe, expect, test } from "@jest/globals";

import { convertPreferInlineDecorator } from "../prefer-inline-decorator.js";

describe("convertPreferInlineDecorator", () => {
    test("conversion without arguments", () => {
        const result = convertPreferInlineDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
