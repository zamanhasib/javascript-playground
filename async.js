function display(value) {
  console.log(value);
}

const first = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('i m the first');
    }, 2000);
  });
};

async function second() {
  return new Promise((resolve, reject) => {
    if (1 == 2) {
      resolve('i m the second');
    } else {
      reject('forcode error from second');
    }
  });
}

async function execute() {
  try {
    const output = await first();
    display(output);
    const output2 = await second();
    display(output2);
  } catch (error) {
    display(error);
  }
}

execute();
