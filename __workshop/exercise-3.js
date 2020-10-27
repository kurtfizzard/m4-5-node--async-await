// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

// 3. handleSum function (async/await)

const handleSum = async (num) => {
  let sum = 0;
  try {
    // first
    const a = await doublesLater(num);
    // assign the sum a value of the doubled number
    sum += a;
    // second
    const b = await doublesLater(a);
    sum += b;
    // third
    const c = await doublesLater(b);
    sum += c;
    // return the sum
    return sum;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
