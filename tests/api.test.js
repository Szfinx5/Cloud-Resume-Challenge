import { expect } from "@jest/globals";
import fetch from "node-fetch";

async function testCounter() {
  let response = await fetch(
    "https://ig4fgtqyx2.execute-api.eu-west-1.amazonaws.com/Prod"
  );
  let data = await response.json();
  return data;
}

describe("Testing the API", () => {
  it("API test", async () => {
    const firstResponse = await testCounter();
    console.log(firstResponse);
    const secondResponse = await testCounter();
    console.log(secondResponse);

    const expected = 1;
    expect(secondResponse - firstResponse).toEqual(expected);
  });
});
