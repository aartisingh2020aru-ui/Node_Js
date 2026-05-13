

console.log("Hello this is ME!");

console.log("start");
setTimeout(()=>{
    console.log("Inside Timeout");
},2000);

console.log("End");



const math = require('./math');
console.log(math.add(4,6));
console.log(math.sub(4,6));



const fs = require('fs');
fs.readFile('data.txt', 'utf-8', (err, data)=>{
    console.log(data);
});