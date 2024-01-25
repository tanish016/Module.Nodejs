const fs = require("fs");
const path = require('path');
const der='node_modules';

fs.readdir("node_modules",(err,Data)=>{
    if(err) console.log("!error Contain");
    else console.log(Data);
    Data.forEach((file)=>{
        const filePath = path.join(der, file);
        fs.stat(filePath,(err,force)=>{
            if(err){
                console.log(err);
            }
           else if(force.isFile()){
                console.log(`File: ${file}`);
            }
            else if(force.isDirectory()){
                console.log(`Directory: ${file}`);
            }
        })
        
    })
})