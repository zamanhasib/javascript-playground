const dict = {
  Key1: "1",
  Key2: {
    a: "2",
    b: 3,
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};
let arr = [
    ['Javascript', 1, 1],
    ['Java', 2, 3],
    ['C#', 3, 4],
    ['Golang', 4, 5],
    ['Python', 5, 2]
]

//arr = arr.flat(1);
const arrF = [];
arr.forEach((row,i) => {
    row.forEach((col,j) => {
        arrF.push(arr[i][j]);
    });
});
console.log(arrF);
//console.table(arr);
//flattenDictionary(dict);

function flattenDictionary(dic) {
  let result = {};
  flatten(dic, "", result);
  console.log(result);
}

function flatten(obj, prefix, result) {
  for (const key in obj) {
    const value = obj[key];
    let _key = "";
    if (prefix === "") _key = key;
    else {
      _key = key === "" ? prefix : prefix + "." + key;
    }
    if (typeof value !== "object") {
      result[_key] = value;
    } else {
      flatten(value, _key, result);
    }
  }
}


let arr1 = [1, 2, [3,[4]]];
arr1 = arr1.flat(Infinity);
arr2 = [].concat(...arr1);
arr3 = arr1.reduce((prev, flat) => prev.concat(flat),[]);
console.log(arr1);
console.log(arr2);
console.log(arr3);

