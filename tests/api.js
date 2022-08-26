import fetch from "node-fetch";

async function testCounter() {
  let response = await fetch(
    "https://ig4fgtqyx2.execute-api.eu-west-1.amazonaws.com/Prod"
  );
  let data = await response.json();
  return data;
}
