import { describe, expect, test } from "@jest/globals";

import { convertRxjsBanObservables } from "../rxjs-ban-observables.js";

describe("convertRxjsBanObservables", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsBanObservables({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/ban-observables",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with options", () => {
        const result = convertRxjsBanObservables({
            ruleArguments: [{ merge: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/ban-observables",
                    ruleArguments: [{ merge: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
