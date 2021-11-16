const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello vaska");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
