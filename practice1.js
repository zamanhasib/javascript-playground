var removeDuplicates = function (nums) {
  const result = new Set(nums);
  return Array.from(result);
};
//console.log(removeDuplicates([1,1,2]));

var rotate = function (nums, k) {
  let i = 0;
  while (i < k) {
    let item = nums.pop();
    nums.unshift(item);
    i++;
  }
  return nums;
};

// console.log(rotate([1,2,3,4,5,6,7],3));

// reverse string
const s = "abc def; g hi";
//console.log([...s].reverse().join(''));

// find sum
const arr = [1, 2, 3, 4, 50];
//console.log(arr.reduce((sum, item) => sum + item, 0));

// reverse each word in the sentence
// Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
const str = "Welcome to this Javascript Guide!";
const revStr = str
  .split(" ")
  .map((x) => {
    return x.split("").reverse().join("");
  })
  .join(" ");
//console.log(revStr);

// merge two sorted arrays
const a = [1, 3, 5, 6, 7, 9, 12];
const b = [2, 4, 6, 8, 10];
const c = [...new Set([...a, ...b].sort())]; //one line solution
const d = [];
const a1 = a.length;
const b1 = b.length;
let i = 0,
  j = 0;
while (i < a1 && j < b1) {
  if (a[i] === b[j]) {
    d.push(a[i]);
    i++;
    j++;
  } else if (a[i] < b[j]) {
    d.push(a[i]);
    i++;
  } else {
    d.push(b[j]);
    j++;
  }
}
if (i < a1) {
  while (i < a1) {
    d.push(a[i]);
    i++;
  }
}
if (j < b1) {
  while (j < b1) {
    d.push(b[j]);
    j++;
  }
}
//console.log(d);

//Sort it first on the basis of age then on the basis of salary.
const emps = [
  { name: "a", salary: 20000, age: 25 },
  { name: "b", salary: 25000, age: 23 },
  { name: "c", salary: 34000, age: 25 },
  { name: "d", salary: 13000, age: 30 },
];

emps.sort((a, b) => a.age - b.age || b.salary - a.salary);
//console.log(emps);

// find duplicates between two arrays
const arr1 = [2, 4, 6];
const arr2 = [1, 2, 3, 4, 5];
let result = [];
let i1 = 0,
  j1 = 0;
while (i1 < arr1.length && j1 < arr2.length) {
  if (arr1[i1] === arr2[j1]) {
    result.push(arr1[i1]);
    i1++;
    j1++;
  } else if (arr1[i1] < arr2[j1]) i1++;
  else j1++;
}
//console.log(result);

//result = arr1.filter(x => arr2.includes(x));
result = arr1.filter((x) => {
  return arr2.indexOf(x) !== -1;
});
//console.log(result);

function findFirstUniqueChar(str){
  const hash = {};
  for(let i = 0; i< str.length; i++){
    if(hash[str[i]] !== undefined) hash[str[i]]++;
    else hash[str[i]] = 1;
  }
  for(const key in hash){
    if(hash[key] === 1) return key;
  }
  
}

console.log(findFirstUniqueChar('1 1 2 3 3 4 5'));