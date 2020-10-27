// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject("Error: Not all items in the array are strings!");
  });
};

const sortWords = async (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.sort())
      : reject("Error: Something went wrong with sorting words.");
  });
};

const textTransform = async (array) => {
  try {
    // first we run makeAllCaps with a given array
    const allCaps = await makeAllCaps(array);
    // then we run sortWords using the result of makeAllCaps
    const allSorted = await sortWords(allCaps);
    // then we create a variable to represent the sorted, capitalized array of words
    const result = await allSorted;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

textTransform(["cucumber", "tomatos", "avocado"]);
textTransform(["cucumber", 44, true]);
