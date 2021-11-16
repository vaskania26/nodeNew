const fs = require("fs");

/* Reading files */

fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

/* Writing files */

/* Directories */

/* Deleting files */
