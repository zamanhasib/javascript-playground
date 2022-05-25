const first = new Promise((resolve) => {
  setTimeout(resolve("first is resolved"), 3000);
});

const second = new Promise((resolve, reject) => {
  if (1 === 1) resolve("second is resolved");
  else reject("second is rejected");
});

// Promise.all([first, second]).then((results) => {
//     console.log('all promise completed!');
//     results.forEach(x => {
//         console.log(x);
//     });
// }).catch((error) => {
//     console.log(error);
// });

async function firstA() {
  return new Promise((resolve) => {
    console.log("firstA is running");
    setTimeout(resolve("firstA is resolved"), 5000);
  });
}
async function secondA() {
  return new Promise((resolve, reject) => {
    console.log("secondA is running");
    setTimeout(reject("secondA is rejected"), 1000);
  });
}

async function displayAll() {
  try {
    const results = await Promise.all([firstA(), secondA()]);
    results.forEach((x) => {
      console.log(x);
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("i have displayed every possible thing");
  }
}

displayAll();
