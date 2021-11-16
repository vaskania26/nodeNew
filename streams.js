const fs = require("fs");

/* const readStream = fs.createReadStream("./docs/blog2.txt", "utf8");
readStream.on("data", (chunk) => {
  console.log("---------- NEW CHUNK ----------");
  console.log(chunk);
}); */

const readStream = fs.createReadStream("./docs/blog2.txt", "utf8");
const writeStream = fs.createWriteStream("./docs/blog3.txt");

readStream.on("data", (chunk) => {
  console.log("---------- NEW CHUNK ----------");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
