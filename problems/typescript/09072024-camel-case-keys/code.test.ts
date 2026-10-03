import { describe, expect, it } from "vitest";

import camelCaseKeys from "./code";

describe("camelCaseKeys", () => {
  it("converts top-level snake_case keys", () => {
    expect(camelCaseKeys({ foo_bar: true, hello_world: "value" })).toEqual({
      fooBar: true,
      helloWorld: "value",
    });
  });

  it("recursively converts nested objects and arrays", () => {
    expect(
      camelCaseKeys({
        user_profile: {
          first_name: "Ada",
          contact_methods: [{ phone_number: "123" }],
        },
      }),
    ).toEqual({
      userProfile: {
        firstName: "Ada",
        contactMethods: [{ phoneNumber: "123" }],
      },
    });
  });

  it("does not mutate the input", () => {
    const input = { original_key: { nested_key: 1 } };

    camelCaseKeys(input);

    expect(input).toEqual({ original_key: { nested_key: 1 } });
  });
});
