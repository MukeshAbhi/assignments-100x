/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
// asynchronous function
function wait(n) {
    return new Promise ((resolve)=> {
        setTimeout(() => resolve(n),n*1000)
    });
}

function onDone (n){
    console.log("JS thread halts for " + n + " seconds")
}

wait(3).then(onDone);

module.exports = wait;
