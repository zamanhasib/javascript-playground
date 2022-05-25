// console.log(1);
// const p = () => {
//     return new Promise((resolve) => {
//         console.log(3);
//         resolve(4);
//     });
// }
// p().then((val) => console.log(val));
// console.log(2);

var plusOne = function(digits) {
    let carryOnHand = 1;
    for(let i=digits.length - 1; i>=0; i--){
        let sum = carryOnHand + digits[i]
        if (sum >= 10){
            digits[i] = sum - 10;
            carryOnHand = 1;
        } else {
            digits[i] = sum;
            carryOnHand = 0;
        }
    }
    if (carryOnHand === 1) digits.unshift(1);
    return digits;
};

//console.log(plusOne([9,8,7,6,5,4,3,2,1,0]));

var firstUniqChar = function(s) {
    let hs = [];

    for(let i=0; i<s.length; i++){
        if (hs[s[i]] !== undefined) hs[s[i]]++;
        else hs[s[i]] = 1;
    }
    
    for(let j=0; j<s.length; j++){
        if(hs[s[j]] === 1) {
            return j;
        }
    }
     return -1;
};

console.log(firstUniqChar('aaa'));
