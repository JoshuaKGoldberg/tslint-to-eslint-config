import { describe, expect, test } from "@jest/globals";

import { convertReactNoDangerousHtml } from "../react-no-dangerous-html.js";

describe("convertReactNoDangerousHtml", () => {
    test("conversion without arguments", () => {
        const result = convertReactNoDangerousHtml({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-react"],
            rules: [
                {
                    ruleName: "react/no-danger",
                },
            ],
        });
    });
});
