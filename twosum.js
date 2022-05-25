console.log(twoSum([2, 9, 7, 6, 5, 3], 9));

function twoSum(arr, target){
    let hash = [];
    for(let i=0; i<arr.length; i++){
        if(hash.includes(arr[i])) return true;
        else hash.push(target - arr[i]);
    }
    return false;
}