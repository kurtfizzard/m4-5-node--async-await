const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
  const options = {
    uri: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
  };
  try {
    // request the information from the api
    const response = await request(options);
    // parse it so that we can use it
    const parsedResponse = JSON.parse(response);
    // create a variable to represent the joke that we reference using the key "joke" in the parsed object
    const joke = parsedResponse.joke;
    // return the joke
    return joke;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

// 4.1
getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
