import { getCounter } from "../lambda/getPutCount.js";
import { test, expect } from "@jest/globals";

describe("Testing the API", () => {
  it("API test", async () => {
    const firstResponse = await getCounter();
    const secondResponse = await getCounter();

    const expected = 1;
    expect(secondResponse.body - firstResponse.body).toEqual(expected);
  });
});
