const fs = require("fs");

/* 
fs.writeFile("message.txt", "Hello from node.js o7 me again", (err) => {
    if(err) throw err;
    console.log("the file has been saved.");
});
*/

fs.readFile("./message.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
});

// same as above 
/* 
const fs = require("fs");

fs.promises.readFile("./message.txt", { encoding: "utf8" })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

*/