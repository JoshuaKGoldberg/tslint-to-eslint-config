import { describe, expect, test } from "@jest/globals";

import { convertReactA11yRole } from "../react-a11y-role.js";

describe("convertReactA11yRole", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yRole({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/aria-role",
                },
            ],
        });
    });
});
