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

fs.writeFile("./docs/blog2.txt", "hello world", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("file was written");
  }
});

/* Rename file */

fs.rename("./docs/blog2.txt", "./docs/blog10.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File successfully renamed");
  }
});

/* Append file, insert text  */

fs.appendFile("./docs/blog1.txt", "insert some data", (err) => {
  if (err) {
    console.error(err);
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

/* Deleting file */

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log("file deleted");
}

/* Delete more than 1 file and Directory */

fs.readdir("./docs", (err, files) => {
  if (err) {
    console.error(err);
  } else {
    for (let file of files) {
      fs.unlink(`./docs/${file}`, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("File removed");
        }
      });
    }
  }
});
