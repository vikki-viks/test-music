var fs = require("fs");
const arr = [
  "PORT=3001",
  "DB_NAME=music",
  "DB_USER=postgres",
  "DB_PASSWORD=postgres",
  "DB_HOST=localhost",
  "DB_PORT=5432",
];
try {
  fs.accessSync(".env");
  console.log("Файл найден");
} catch (error) {
  fs.writeFileSync(".env", arr.join("\n"));
}
