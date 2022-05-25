//var result, result2;
function test() {
    var inputs = '3 4'.split(' ');
    var result = square(inputs[0]);
    var result2 = square(inputs[1]);
    var subtracted = Math.abs(result - result2);
    console.log(subtracted);   
};

function square(num) {
    result = num * num;
    return result;
}

//test();

//console.log(['12341234','5678901234','10','7890','123456a'].map(parseInt));
//console.log(parseInt('10'));

var containsDuplicate = function(nums) {
    const arr = [];
    let found = false;
    nums.forEach(item => {
        if(!arr.includes(item)) 
        { 
            arr.push(item);
                                
        }
        else found = true;
    });
    return found;
};

//console.log(containsDuplicate([1,2,3,1]));

var twoSum = function(nums, target) {
    const hm = {};
    const result = [];
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i];
        if(hm[diff] === undefined) hm[diff] = i;
        else {
            result.push(hm[diff]);
            result.push(i);
            break;
        }
    }
    return result;
};
//console.log(twoSum([3,2,4], 6));

let a = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
let b = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];
a.sort();
b.sort();
console.log(a);
console.log(b);

var intersect = function(nums1, nums2) {
    const l1 = nums1.length;
    const l2 = nums2.length;
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);
    let i = 0;
    let j = 0;
    const result = [];
    while (i<l1 && j<l2){
        if(nums1[i] === nums2[j]){
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) i++;
        else j++;
    }
    return result;
};

console.log(intersect(a,b));
let c = [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61];
c.sort((a,b) => a-b);
console.log(c);