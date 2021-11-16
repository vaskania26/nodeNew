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

/* fs.writeFile("./docs/blog2.txt", "hello world", () => {
  console.log("file was written");
}); */

/* Directories */

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("folder deleted");
  });
}

/* Deleting files */
