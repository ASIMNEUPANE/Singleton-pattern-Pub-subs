
import { GameManager } from "./store";

export function startLogger(){
setInterval(() => {
    console.log(GameManager.getInstance().listGames());
},5000);
}