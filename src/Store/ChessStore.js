import { v4 as RandomId } from "uuid";

// 方法工廠
export class ChessInfo {
    constructor(value, quantity, rank, belong, imageIndex) {
        this.id = RandomId();
        this.state = "close";
        this.stage = new ChessCloseStage(this);
        this.value = value;
        this.quantity = quantity;
        this.rank = rank;
        this.imageIndex = imageIndex;
        this.belong = belong;
        this.isChoose = false;
    }

    ConcreteSetStage(context) {
        this.stage.SetStage(context);
    }
    ConcreteOpen() {
        this.stage.Open();
    }
    ConcreteMove(getAllChess) {
        this.stage.Move(getAllChess);
    }
    ConcreteBeingInvaded() {
        this.stage.BeingInvaded();
    }
    ConcreteAggressive(preChess, getAllChess) {
        this.stage.Aggressive(preChess, getAllChess);
    }
    ConCreteSetChoose() {
        this.stage.SetChoose();
    }
    ConCreteResetChoose() {
        this.stage.ResetChoose();
    }
}

export class ChessList {
    constructor() {
        this.List = [];
    }

    AddChessToList(Chess) {
        let quantity = Chess.CreateBlueChessInfo().quantity;
        for (var i = 1; i <= quantity; i++) {
            this.List.push(Chess.CreateBlueChessInfo());
            this.List.push(Chess.CreateRedChessInfo());
        }
    }

    ShuffleArray() {
        this.List.sort(() => Math.random() - 0.5);
    }
}

export class createChessInfoFactory {
    CreateChessInfo() {}
}

export class KingChessInfo extends createChessInfoFactory {
    CreateBlueChessInfo() {
        return new ChessInfo("將", 1, 1, "blue", 1);
    }
    CreateRedChessInfo() {
        return new ChessInfo("帥", 1, 1, "red", 8);
    }
}

export class SoldierChessInfo extends createChessInfoFactory {
    CreateBlueChessInfo() {
        return new ChessInfo("士", 2, 2, "blue", 2);
    }
    CreateRedChessInfo() {
        return new ChessInfo("仕", 2, 2, "red", 9);
    }
}

export class ElephantChessInfo extends createChessInfoFactory {
    CreateBlueChessInfo() {
        return new ChessInfo("象", 2, 3, "blue", 3);
    }
    CreateRedChessInfo() {
        return new ChessInfo("相", 2, 3, "red", 10);
    }
}

export class CarChessInfo extends createChessInfoFactory {
    CreateBlueChessInfo() {
        return new ChessInfo("車", 2, 4, "blue", 4);
    }
    CreateRedChessInfo() {
        return new ChessInfo("俥", 2, 4, "red", 11);
    }
}

export class HorseChessInfo extends createChessInfoFactory {
    CreateBlueChessInfo() {
        return new ChessInfo("馬", 2, 5, "blue", 5);
    }
    CreateRedChessInfo() {
        return new ChessInfo("傌", 2, 5, "red", 12);
    }
}

export class CannonChessInfo extends createChessInfoFactory {
    CreateBlueChessInfo() {
        return new ChessInfo("炮", 2, 6, "blue", 6);
    }
    CreateRedChessInfo() {
        return new ChessInfo("砲", 4, 7, "red", 13);
    }
}

export class PawnChessInfo extends createChessInfoFactory {
    CreateBlueChessInfo() {
        return new ChessInfo("卒", 5, 7, "blue", 7);
    }
    CreateRedChessInfo() {
        return new ChessInfo("兵", 5, 7, "red", 14);
    }
}

// 跟改棋子狀態要用狀態模式來寫/open/close/none

class Stage {
    Open() {}
    Move() {}
    BeingInvaded() {}
    Aggressive() {}
    SetStage() {}
    SetChoose() {}
    ResetChoose() {}
}

// close
export class ChessCloseStage extends Stage {
    constructor(chess) {
        super();
        this.chess = chess;
    }
    Open() {
        this.chess.state = "open";
        this.chess.ConcreteSetStage(new ChessOpenStage(this.chess));
    }
    Move() {
        console.log("不能移動");
    }
    BeingInvaded() {
        console.log("不會被佔領");
    }
    Aggressive() {
        console.log("不能佔領別人");
    }
    SetStage(context) {
        this.chess.stage = context;
    }
    SetChoose() {
        console.log("還不能選取");
    }
}
// open
export class ChessOpenStage extends Stage {
    constructor(chess) {
        super();
        this.chess = chess;
    }
    Open() {
        console.log("已經打開了");
    }
    Move(targetChess, compareChess) {
        let temp = this.imageIndexArr[compareChess];
        this.imageIndexArr[compareChess] = this.imageIndexArr[targetChess];
        this.imageIndexArr[targetChess] = temp;
    }
    BeingInvaded() {
        console.log("被佔領");
    }
    Aggressive(preChess, getAllChess) {
        if (this.chess.rank > preChess.rank) {
            let PreChessIndex = getAllChess.findIndex((item) => item.id == preChess.id);
            let CurrChessResultIndex = getAllChess.findIndex((item) => item.id == this.chess.id);
            console.log(getAllChess[PreChessIndex]);
            console.log(getAllChess[CurrChessResultIndex]);
            let temp = getAllChess[PreChessIndex];
            getAllChess[PreChessIndex] = getAllChess[CurrChessResultIndex];
            getAllChess[CurrChessResultIndex] = temp;
            this.chess.state = "none";
            this.chess.ConcreteSetStage(new ChessNoneStage(this.chess));
        } else {
            alert("Cannot eat a chess piece bigger than oneself");
        }
    }
    SetChoose() {
        this.chess.isChoose = true;
    }
    ResetChoose() {
        this.chess.isChoose = false;
    }
}
// none
export class ChessNoneStage extends Stage {
    Open() {
        console.log("none");
    }
    Move() {
        console.log("none");
    }
    BeingInvaded() {
        console.log("none");
    }
    Aggressive() {
        console.log("none");
    }
}
