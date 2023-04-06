.
<template>
    <div class="player-container">
        <div
            class="player"
            :class="[{ play1Flag: Play1State.state }]"
            :style="{ color: Play1State.camp }"
        >
            Play1 : 0
        </div>

        <div
            class="player"
            :class="[{ play2Flag: Play2State.state }]"
            :style="{ color: Play2State.camp }"
        >
            0: Play2
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
