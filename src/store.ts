
interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}

export class GameManager{
  

    private games : Game[]=[];
    private static instance: GameManager;
    private constructor(){
        this.games = [];    

    }
    static getInstance(){
        if(!GameManager.instance){
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    addMove(gameId: string, move: string){
        const game = this.games.find(g => g.id === gameId);
       game?.moves.push(move);

    }

    addGame(gameId:string, whitePlayerName: string, blackPlayerName: string){
        const game: Game = {
            id: gameId,
            whitePlayerName: whitePlayerName,
            blackPlayerName: blackPlayerName,
            moves: []
        };
        this.games.push(game)
    }
    listGames(){
return this.games;
    }
}

