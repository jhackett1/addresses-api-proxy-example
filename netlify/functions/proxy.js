const fetch = require("node-fetch");

const API_ENDPOINT =
  "https://6kb2p9kgb0.execute-api.eu-west-2.amazonaws.com/production/api/v1/addresses";

exports.handler = async (event, context) => {
  let response;
  let { postcode } = event.queryStringParameters;

  try {
    response = await fetch(`${API_ENDPOINT}?postcode=${postcode}`, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: await response.json(),
    }),
  };
};
