.
<template>
    <div class="player-container">
        <div
            class="player"
            :class="[{ play1Flag: Play1State.state }]"
            
        >
            Play1 : {{ Play1State.score }}
            <div class="player1-cube" :style="{ backgroundColor: Play1State.camp }"></div>
        </div>

        <div
            class="player"
            :class="[{ play2Flag: Play2State.state }]"
            
        >
        {{ Play2State.score }} : Play2
            <div class="player2-cube" :style="{ backgroundColor: Play2State.camp }"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["Play1State", "Play2State"]);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap");
h1 {
    color: #ffffff;
    font-size: 50px;
}
.player-container {
    width: 80%;
    display: flex;

    justify-content: space-between;
    margin: 30px auto;
}
.player-container > *:nth-child(2) {
    text-align: right;
}
.player {
    width: 18%;
    font-size: 32px;
    font-family: "Tilt Warp", cursive;
    font-weight: 200;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgb(45, 45, 45);
    position: relative;
}
.player1-cube{
    position: absolute;
    width: 25px;
    height: 25px;
    top: 0px;
    left: -25%;
    border-radius: 50% ;
    border: 2px solid #ffffff;
}
.player2-cube{
    position: absolute;
    width: 25px;
    height: 25px;
    border: 2px solid #ffffff;
    top: 0px;
    right: -25%;
    border-radius: 50% ;
}
.play1Flag {
    background-image: url("../../public/flag.png");
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
}
.play2Flag {
    background-image: url("../../public/flag.png");
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
}
.count {
    width: 18%;
    font-size: 32px;
    font-family: "Tilt Warp", cursive;
    font-weight: 200;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgb(45, 45, 45);
}
</style>
