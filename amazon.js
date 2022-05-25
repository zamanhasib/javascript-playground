/**
 * 1. Load balancing of Amazon Data Center
 * 2. Light Candle and Buy Candle
 * 3. Lower the Stock
 * 
 */

function getMinimumDifference(job, k) {
    // Write your code here
    let minPosition = 0;
    for(let i=0; i<k; i++){
        minPosition = findMinimumPosition(job);
        job[minPosition]++;
    }
    let min = 0;
    let max = 0;
    for(let j=0; j<job.length; j++){
        if(job[j] < min) min = job[j];
        if(job[j] > max) max = job[j];
    }
    return max-min;
}

function findMinimumPosition(job){
    let min = 0;
    for(let i=1; i<job.length; i++){
        if(job[i] < job[min]) min = i;
    }
    return min;
}

console.log(findMinimumPosition([4, 3, 2, 5]));