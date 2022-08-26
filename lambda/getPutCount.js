"use strict";
const AWS = require("aws-sdk");

let responseBody = "";
let statusCode = 0;

async function getCounter() {
  //exports.handler = async function (event, context, callback) {
  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-west-1",
  });
  try {
    const getParams = {
      Key: { ID: "1" },
      TableName: "gabor-havasi-cv",
    };
    const getData = await documentClient.get(getParams).promise();
    let currentCount = Number(getData.Item.counter);
    currentCount++;
    console.log(currentCount);

    const putParams = {
      Item: {
        ID: "1",
        counter: currentCount.toString(),
      },
      TableName: "gabor-havasi-cv",
    };
    await documentClient.put(putParams).promise();
    responseBody = currentCount.toString();
    statusCode = 200;
    console.log(responseBody);
  } catch (error) {
    responseBody = "Unable to get counter";
    statusCode = 403;
  }
  let response = {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body: responseBody,
  };
  console.log(response);
  return response;
}

//getCounter();

module.exports = {
  getCounter,
};
