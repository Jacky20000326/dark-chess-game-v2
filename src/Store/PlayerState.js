export class PlayerStore {
    constructor(camp = null) {
        this.camp = camp;
        this.score = 0;
    }
    SetCamp(camp) {
        if (this.camp != null) return;
        this.camp = camp;
    }
    SetScore() {
        this.score += 1;
    }
    SwitchPlayer() {
        this.state = !this.state;
    }
    // 判斷玩家是否選擇與自己相同camp的棋子
    // DistinguishSameCampChess(chessCamp){
    //     if(this.camp == chessCamp) return
    // }
}

export class Player1 extends PlayerStore {
    constructor() {
        super();
        this.state = true;
    }
}

export class Player2 extends PlayerStore {
    constructor() {
        super();
        this.state = false;
    }
    // 切換玩家
}

export let player1 = new Player1();
export let player2 = new Player2();
