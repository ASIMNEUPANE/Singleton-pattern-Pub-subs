"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(gameId, move) {
        const game = this.games.find(g => g.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId, whitePlayerName, blackPlayerName) {
        const game = {
            id: gameId,
            whitePlayerName: whitePlayerName,
            blackPlayerName: blackPlayerName,
            moves: []
        };
        this.games.push(game);
    }
    listGames() {
        return this.games;
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager();
