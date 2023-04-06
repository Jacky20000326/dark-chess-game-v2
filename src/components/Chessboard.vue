<template>
    <div>
        <div class="dark-chess-game">
            <h1>Dark Chess Game</h1>
            <div class="chessboard-container">
                <div
                    v-for="(item, index) in AllChess"
                    :id="'chess-' + index"
                    class="chessboard-block"
                    :key="index"
                    @click="chessHandler(item)"
                >
                    <img
                        :src="getChessUrl(item.imageIndex, item.state)"
                        :class="{ isActive: item.isChoose }"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <Player />
        <div class="stepCount" @click="switchPlayer">{{ 0 }}</div>
        <FinishGame :Play1State="Play1State" :Play2State="Play2State" />
    </div>
</template>

<script setup>
import FinishGame from "./Player.vue";
import { initChessInfo } from "../Store/initChess";
import { ChessFlyweightFactory } from "../Store/ChessImageStore.js";
// import { ChessCloseState } from "../Store/ChessStore";
import { onBeforeMount, ref } from "vue";
import { PlayerStore, Context, Player1, Player2 } from "../Store/PlayerState";
let AllChess = ref(null);

// 取得play1、play2 的狀態
let Play1State = ref(new Player1());
let Play2State = ref(new Player2());

// 取得圖片
let ConcreteChessFlyweightFactory = new ChessFlyweightFactory();
let BackImageChess =
    ConcreteChessFlyweightFactory.GetResultChessImage("backImageChess");
let FrontImageChess =
    ConcreteChessFlyweightFactory.GetResultChessImage("frontImageChess");
// 取得玩家store、Context

let ConcreteContextPlayer1 = new Context(Play1State.value);
let ConcreteContextPlayer2 = new Context(Play2State.value);
// 取得棋子狀態

// 玩家交換

const getChessUrl = (index, isOpenState) => {
    if (isOpenState == "close") {
        return BackImageChess.operation();
    } else {
        return FrontImageChess.operation(index);
    }
};
// 玩家交換
const switchPlayer = () => {
    ConcreteContextPlayer1.ConcreteSwitchPlayer();
    ConcreteContextPlayer2.ConcreteSwitchPlayer();
};

// 點選棋子
const chessHandler = (chess) => {
    // 取得玩家camp
    SetCamp(chess);

    // --- test ---

    compareCamp(chess);
    // ---test ---
    chess.ConcreteOpen();
    chess.ConCreteSetChoose(Play1State);
    switchPlayer();
};

// 玩家選陣營(camp)
const SetCamp = (chess) => {
    if (chess.belong == "red") {
        Play1State.value.SetCamp("red");
        Play2State.value.SetCamp("blue");
    } else {
        Play1State.value.SetCamp("blue");
        Play2State.value.SetCamp("red");
    }
};
// 判斷玩家的陣營與所選是否相同
const compareCamp = (camp) => {
    if (Play1State.value.state == true && camp.state == "open") {
        if (Play1State.value.camp != camp.belong) {
            alert(`要選${Play1State.value.camp}的棋`);
            return;
        }
    }
    if (Play2State.value.state == true && camp.state == "open") {
        if (Play2State.value.camp != camp.belong) {
            alert(`要選${Play2State.value.camp}的棋`);
            return;
        }
    }
};

onBeforeMount(() => {
    let result = initChessInfo();
    AllChess.value = result;
});
</script>

<style scoped>
/* Roboto font */
@import url("https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap");
.dark-chess-game {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
h1 {
    font-family: "Tilt Warp", cursive;
    font-weight: 700;
    font-size: 4.2rem;
    color: rgb(251, 251, 251);
    text-shadow: 1px 1px 2px rgb(45, 45, 45);
}
img {
    width: 80%;
    transition: 0.3s;
    border-radius: 50%;
}
img:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 35px -5px rgba(26, 26, 26, 0.75);
}
/* chessboard-container */
.chessboard-container {
    width: 1004px;
    height: 504px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    background-image: url("../../public/playground.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 0px 103px 16px rgba(0, 0, 0, 0.75);
    border: 2px solid #000;
}
.chessboard-block {
    width: 125px;
    height: 125px;
    border-right: 2px solid #333;
    border-bottom: 2px solid #333;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.stepCount {
    position: fixed;
    font-family: "Tilt Warp", cursive;
    font-weight: 700;
    font-size: 3.5rem;
    color: rgb(251, 251, 251);
    text-shadow: 1px 1px 2px rgb(45, 45, 45);
    right: 30px;
    top: 20px;
}
/* active class */
.isActive {
    border: 5px solid rgb(255, 255, 255);
    border-radius: 50%;
    box-shadow: 0px 0px 35px -5px rgba(190, 190, 190, 0.75);
    transform: scale(1.2);
}
</style>
