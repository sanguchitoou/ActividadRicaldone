//IMPORTS
import app from "./app.js";
import "./database.js";

async function main() {
  (app.listen(3000), console.log("Puerto encendido en el 3000"));
}

main();
