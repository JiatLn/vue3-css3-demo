<template>
  <div class="warpper">
    <div class="paint">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.warpper {
  background-color: #000;
  filter: contrast(30);
  .paint {
    width: 200px;
    height: 400px;
    display: flex;
    position: relative;
    // overflow: hidden;
    .circle {
      border-radius: 50%;
      background-color: white;
      position: absolute;
      left: 50%;
      top: 0;
      filter: blur(10px);
      &:nth-child(1) {
        width: 60px;
        height: 60px;
        animation: drop 1s ease-in infinite;
      }
      &:nth-child(2) {
        width: 160px;
        height: 160px;
        transform: translate(-50%, -50%);
      }
    }
  }
}

@keyframes drop {
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, 400px) scale(0.5);
  }
}
</style>
