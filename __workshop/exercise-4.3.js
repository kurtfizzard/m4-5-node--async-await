const request = require("request-promise");

const getGeekJoke = async () => {
  const options = {
    url: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    json: true,
  };
  try {
    const response = await request(options);
    return response.joke;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };
