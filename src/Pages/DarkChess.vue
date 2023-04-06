<script setup>
import Chessboard from "../components/Chessboard.vue";
</script>

<template>
  <div class="game-container">
    <Chessboard />
  </div>
</template>

<style scoped>
.game-container {
  width: 100vw;
  height: 100vh;
  background-image: url("../../public/table.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5%;
}
</style>
