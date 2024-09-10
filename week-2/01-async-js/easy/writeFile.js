const fs = require('fs');

fs.writeFile("write.txt","hi there","utf-8",(err)=>{
    if(err) throw err;
})