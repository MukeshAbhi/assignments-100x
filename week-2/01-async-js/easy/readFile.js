const fs = require('fs');

fs.readFile("read.txt","utf-8",(err,data) =>{
    if(err){
        console.error("Error loading file");
        
    }
    console.log(data);
})


function sum (n){
    let a = 0;
    for (let i = 0; i < n; i++){
        a += i;
    };
    console.log(a);
}

sum(1000000002);