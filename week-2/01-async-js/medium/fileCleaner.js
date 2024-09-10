const fs = require('fs');

fs.readFile("old.txt","utf-8",(err,data) => {
    if(err) throw err;
    let newq = data.replace(/\s+/g,' ');
    fs.writeFile("new.txt",newq,"utf-8",(err) => {
        if(err) throw err;
    })
})