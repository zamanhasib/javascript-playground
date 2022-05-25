const first = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("times up first");
      resolve(100);
    }, 5000);
    console.log("first function");
  });
};

const second = (val) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`times up second ${val}`);
      resolve();
    }, 3000);
    console.log("second function");
  });
};

const third = () => {
  setTimeout(() => console.log("times up third"), 1000);
  console.log("third function");
};

//first().then((res) => second(res).then(() => third()));

const myPromise = new Promise((resolve, reject) => {
  try {
    const val = 100/0;
    resolve(val);
  } catch(error){
    reject(error);
  }
});


myPromise.then((resolve) => {
  console.log(resolve);
}).catch((reject) => {
  console.log(reject);
});