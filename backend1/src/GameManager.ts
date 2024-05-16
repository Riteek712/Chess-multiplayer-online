import WebSocket from "ws";
// User, Game
export class GameManager {
    private games: Game();
    private pendingUser: WebSocket;
    private users: WebSocket[];
    constructor() {
        this.games = [];
    }

    addUser(socket: WebSocket) {
        this.users.push(socket)
    }
    removeUser(socket: WebSocket) {

    }

    private handleMessage () {

    }

}