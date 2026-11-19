const http = require("http");

const rawPort = process.env.PORT;
const parsedPort = Number(rawPort);
const port = Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : 8080;

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
