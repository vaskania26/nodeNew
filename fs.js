const fs = require("fs");

/* Reading files */

/* fs.readFile("./docs/blog1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

console.log("last line"); */

/* Writing files */

fs.writeFile("./docs/blog1.txt", "hello world", () => {
  console.log("file was written");
});

/* Directories */

/* Deleting files */
