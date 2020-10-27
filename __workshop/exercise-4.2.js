const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  const options = {
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await request(options);
    const parsedResponse = JSON.parse(response);
    const quote = parsedResponse.value;
    return quote;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
