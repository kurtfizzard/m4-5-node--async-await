// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (type) => {
  // create a variable for the result
  let result;
  //   if the type is dad (url params) it's a dad joke
  if (type === "dad") {
    result = await getDadJoke();
    //   if the type is donald (url params) it's a donald joke
  } else if (type === "donald") {
    result = await getTronaldDumpQuote();
    //   if the type is geek (url params) it's a geek joke
  } else if (type === "geek") {
    result = await getGeekJoke();
  }
  return result;
};

module.exports = { handleJoke };
