const Eris = require("eris");
const keepAlive = require("./keep_alive.js");

const token = process.env.token;

if (!token || typeof token !== "string" || token.trim() === "") {
  console.error(
    "Błąd: brak zmiennej środowiskowej 'token' lub jest ona pusta. Ustaw 'token' w zmiennych środowiskowych przed uruchomieniem."
  );
  process.exit(1);
}

const bot = new Eris(token.trim());

bot.on("ready", () => {
  console.log(`Połączono pomyślnie jako ${bot.user.username}#${bot.user.discriminator}`);
});

bot.on("error", (err) => {
  console.error("Błąd klienta Eris:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("Nieobsłużone odrzucenie Promise:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Nieobsłużony wyjątek:", err);
});

bot.connect().catch((err) => {
  console.error("Nie udało się połączyć z Discordem:", err);
  process.exit(1);
});
