<template>
  <div class="warpper">
    <div class="heart-outer">
      <div class="heart"></div>
    </div>
    <div class="heart-outer">
      <div class="heart"></div>
    </div>
    <div class="heart-outer">
      <div class="heart"></div>
    </div>
    <div class="heart-outer">
      <div class="heart"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.warpper {
  width: 100%;
  height: 100%;

  background-color: #080c1e;

  display: flex;
  justify-content: center;
  align-items: center;

  .heart-outer {
    width: 80px;
    height: 80px;
    position: relative;
  }
  .heart-outer::after {
    z-index: 10;
    content: '';
    bottom: 10px;
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    height: 10%;
    width: 50%;
    border-radius: 50%;
    background-color: #df8787;
  }

  .heart {
    z-index: 99;
    display: block;
    width: 80px;
    height: 80px;
    background-color: transparent;
    position: relative;
    transition: 1s;
    transform-origin: bottom;
    animation: hd 3s ease infinite;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      background-color: rgb(240, 62, 62);
      height: 80%;
      border-radius: 50px 50px 0 0;
      transition: 1s;
    }
    &::before {
      transform-origin: right bottom;
      transform: rotate(45deg);
    }
    &::after {
      left: 50%;
      transform-origin: bottom left;
      transform: rotate(-45deg);
    }
  }

  @keyframes hd {
    0%,
    100% {
      transform: rotate(-22.5deg);
    }
    50% {
      transform: rotate(22.5deg);
    }
  }
}
</style>
