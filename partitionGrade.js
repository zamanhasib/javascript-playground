const arr = [70, 80, 4, 55, 20, 77];
function partitionGrades(arr){
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 50){
            let item = arr[i];
            arr.splice(i, 1);
            arr.push(item);
        }
    }
    
    arr.forEach(element => {
        console.log(element);
    });
}
partitionGrades(arr);