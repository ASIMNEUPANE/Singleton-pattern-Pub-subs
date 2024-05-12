
import { gameManager } from "./store";

export function startLogger(){
setInterval(() => {
    console.log(gameManager.listGames());
},5000);
}