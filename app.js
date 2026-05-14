

console.log("Hello this is ME!");

console.log("start");
setTimeout(()=>{
    console.log("Inside Timeout");
},2000);

console.log("End");



const math = require('./math');
console.log(math.add(4,6));
console.log(math.sub(4,6));



// const fs = require('fs');
// fs.readFile('data.txt', 'utf-8', (err, data)=>{
//     console.log(data);
// });



// const fs = require('fs');
// fs.writeFile('data.txt', 'Hello Duniya!!! bhad me jao apna ganda muh le kar!',(err)=>{
//     console.log("!file created");
// } );


const fs = require('fs');
fs.appendFile('data.txt', '\nhello world',(err)=>{
    console.log("!data added");
});