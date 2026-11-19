const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("I'm alive");
});

server.on("error", (err) => {
  console.error("Błąd serwera keep_alive:", err);
});

server.listen(port, () => {
  console.log(`Serwer keep_alive nasłuchuje na porcie ${port}`);
});
