const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog2.txt", "utf8");
readStream.on("data", (chunk) => {
  console.log("---------- NEW CHUNK ----------");
  console.log(chunk);
});
