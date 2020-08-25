// let files = require("fs");
// let callback = function(err, data){
//     console.log("File is read");
//     console.log(data);
//     return data;
// }

// //let jsonfile = files.readFileSync(__dirname+"/testing.json","utf-8");
// let jsonfile = files.readFile(__dirname+"/file.txt","utf8",callback);
// console.log(jsonfile);

let files = require("fs");
function printData(data){
    console.log(data);
}

let readFileinBuffer = files.createReadStream(__dirname+"/file.txt");
console.log(readFileinBuffer);
readFileinBuffer.on("data",printData(chunk));