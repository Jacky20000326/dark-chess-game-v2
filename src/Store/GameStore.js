export class GameStore {
    constructor() {
        this.preChooseChess = null;
        this.occupiedState = null;
        this.count = 0;
        this.winner = null;
    }
    SetpreChooseChess(preChooseChess) {
        this.preChooseChess = preChooseChess;
    }
    SetOccupiedState(occupiedState) {
        this.occupiedState = occupiedState;
    }
    ResetpreChooseChess() {
        this.preChooseChess = null;
    }
    MoveCount(state) {
        if (this.count == 5) {
            this.winner = "平局";
        }
        if (state == 1) {
            this.count += 1;
            return;
        }
        this.count = 0;
    }
}

export class Request {
    constructor(currPlayer, currChess, gameState) {
        this.currPlayer = currPlayer;
        this.currChess = currChess;
        this.gameState = gameState;
    }
}

export class Handler {
    SetCondition(condition) {
        this.condition = condition;
    }
    HandleRequest() {}
}

export class ChoseSameCampChess extends Handler {
    HandleRequest(request) {
        if (request.currPlayer.camp != request.currChess.belong) {
            alert(`please pick ${request.currPlayer.camp} color chess,thanks.`);
        } else {
            // 互叫選取狀態
            request.currChess.ConCreteSetChoose();
            request.gameState.SetpreChooseChess(request.currChess);
            //  儲存選取棋子
            this.condition.HandleRequest(request);
        }
    }
}

export class EatChess extends Handler {
    HandleRequest() {
        console.log("吃吃吃");
    }
}

export class isCannon extends Handler {
    HandleRequest() {
        if (this.preChooseChess.value == "砲" || this.preChooseChess.value == "炮") {
            // 執行砲的規則
        }
        this.condition.HandleRequest();
    }
}

class MoveRule extends Handler {
    HandleRequest() {
        if (this.occupiedState == null) {
            // 移動
        }
        this.condition.HandleRequest();
    }
}
