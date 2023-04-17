<template>
  <div class="finish-container">
    <div class="finish-cube">
      <h1>遊戲結束</h1>
      <div
        class="result"
       
      >
        {{ props.GameState.winner }}為贏家
      </div>

      <button @click="restartGame">再玩一次</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["GameState"]);
const restartGame = () => {
  window.location.reload();
};
</script>

<style scoped>
.finish-container {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.finish-cube {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px dotted rgb(255, 255, 255);
  padding: 10%;
  border-radius: 20px;
}
h1 {
  font-size: 2.3rem;
  color: #fff;
}
.result {
  font-size: 2.8rem;
  color: #fff;
  margin-top: 30px;
  font-weight: 600;
}
button {
  width: 120px;
  margin-top: 50px;
  min-height: 50px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  background-color: #f87475;
  color: #fff;
  border: 3px solid #fff;
  transition: 0.3s;
}
button:hover {
  transform: scale(1.1);
  background-color: #fff;
  color: #f87475;
  border: 3px solid #fff;
}
</style>
