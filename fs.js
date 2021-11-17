const fs = require("fs");

/* Reading files */

fs.readFile("./docs/blog1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

console.log("last line");

/* Writing files */

fs.writeFile("./docs/blog2.txt", "hello world", () => {
  console.log("file was written");
});

/* Rename file */

fs.rename("./docs/blog2.txt", "./docs/blog10.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File successfully renamed");
  }
});

/* Append file, insert text  */

fs.appendFile("./docs/blog1.txt", "insert some data", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Text inserted");
  }
});

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

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log("file deleted");
}
