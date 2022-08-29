//Reading the text file
const fs = require("fs");

fs.readFile("Campus.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})