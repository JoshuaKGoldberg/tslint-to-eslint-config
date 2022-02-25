import { describe, expect, test } from "@jest/globals";

import { convertNoUnnecessaryFieldInitialization } from "../no-unnecessary-field-initialization.js";

describe("convertNoUnnecessaryFieldInitialization", () => {
    test("conversion without arguments", () => {
        const result = convertNoUnnecessaryFieldInitialization({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
