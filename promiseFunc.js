async function retryRequest(promiseFunc, nrOfRetries) {
    // Write your code here
    return new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < nrOfRetries; i++){
                let output = promiseFunc();
                if (output) {
                    resolve(); 
                    break;
                }
            }
            
        } catch(ex){
            reject(ex);
        }
    });
  }
       
  let hasFailed = false;
  function getUserInfo() {
    return new Promise((resolve, reject) => {
      if(!hasFailed) {
        hasFailed = true;
        reject("Exception!");
      } else {
        resolve("Fetched user!");
      }
    });
  }
  let promise = retryRequest(getUserInfo, 3);
  if(promise) {
    promise.then((result) => console.log(result))
    .catch((error) => console.log("Error!"));
  }
  
  module.exports.retryRequest = retryRequest;