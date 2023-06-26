const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Send a request"); // localhost:3000'e istek gittiğinde (açıldığında) burası tetiklenir.

  const url = req.url; // isteğin hangi url'e gönderildiği bilgisini verir.

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" }); // head olarak göndereceğimizi ve başarılı olacağı 200 status kodu döneceğini belirttik.

    res.write("<h1>INDEX PAGE | HELLO HUMAN!</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" }); // head olarak göndereceğimizi ve başarılı olacağı 200 status kodu döneceğini belirttik.
    res.write("ABOUT PAGE | HELLO HUMAN!");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" }); // head olarak göndereceğimizi ve hatalı olacağı 404 status kodu döneceğini belirttik.
    res.write("404 ERROR | SORRY!");
  }

  res.write("\n\nIt's DONE!!!");
  res.end();
});

const port = 3000 || process.env.PORT;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
