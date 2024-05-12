import { gameManager } from "./store";
import { startLogger } from "./logger";

startLogger();
setInterval(() => {

    gameManager.addGame(
       Math.random().toString(),
      "Alice",
       "Bob",
    );
}, 5000);