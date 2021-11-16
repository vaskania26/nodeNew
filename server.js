const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set header content-type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // Send a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.end(data);
    }
  });

  // Send a html file
  /*  if (req.url === "/" || req.url === "/home") {
    fs.readFile("./views/index.html", (err, data) => {
      if (err) {
        console.error(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./views/about.html", (err, data) => {
      if (err) {
        console.error(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  } else {
    fs.readFile("./views/404.html", (err, data) => {
      if (err) {
        console.error(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  } */
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
