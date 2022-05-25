setTimeout(welcome, 3000);
// setInterval(hell, 1000);
setTimeout(() => {
    hell();
}, 5000);

function welcome() {
    console.log('welcome to callback hell');
}

function hell() {
    console.log('this is hell');
}

function display(val, callback) {
    console.log(val);
    callback('nested callback');
}

function nestedDisplay(val){
    console.log(val);
}

function calc(a, b, callback){
    setTimeout(() => {
        callback(a + b, nestedDisplay);       
    }, 1000); 
}

calc(5, 7, display, display);
