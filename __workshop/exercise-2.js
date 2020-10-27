// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async () => {
  try {
    // first we request information from the api server
    const response = await request("http://api.open-notify.org/iss-now.json");
    // then we parse the data that we receive
    const issLocation = JSON.parse(response);
    // then we return the data we need, referencing the particular values within the parsed data object
    return {
      lat: issLocation.iss_position.latitude,
      lng: issLocation.iss_position.longitude,
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};

getIssPosition().then((result) => {
  console.log(result);
});
