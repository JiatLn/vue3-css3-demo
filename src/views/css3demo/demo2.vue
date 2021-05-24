<template>
  <div class="warpper">
    <div class="window">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="cloud c1"></div>
      <div class="cloud c2"></div>
      <div class="cloud c3"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$bgc: #fff4e8;
$windowColor: #d4e8f9;

.warpper {
  height: 100%;
  width: 100%;
  background-color: $bgc;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 窗户 */
  .window {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 1px;
      background-color: #000;
      top: 55%;
      transform: translateY(-50%);
      z-index: 99;
    }
    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 500px;
      background-color: #000;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
    }
    .top {
      position: relative;
      border-radius: 50% 50% 0 0;
      background-color: $windowColor;
      width: 300px;
      height: 300px;
      /* 横 */
      &::before {
        content: '';
        position: absolute;
        width: 300px;
        height: 1px;
        background-color: #000;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .bottom {
      background-color: $windowColor;
      width: 300px;
      height: 200px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 300px;
        height: 1px;
        background-color: #000;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .cloud {
      background-color: #fff;
      height: 32px;
      width: 90px;
      position: absolute;
      border-radius: 50% / 100% 100% 0 0;
      &::before {
        content: '';
        position: absolute;
        top: -4px;
        left: 12px;
        background-color: #fff;
        border-radius: 50%;
        height: 32px;
        width: 32px;
      }
      &::after {
        content: '';
        position: absolute;
        top: -10px;
        right: 12px;
        background-color: #fff;
        border-radius: 50%;
        height: 36px;
        width: 36px;
      }
      &.c1 {
        top: 200px;
        left: 30px;
      }
      &.c2 {
        top: 280px;
        left: 180px;
      }
      &.c3 {
        top: 50px;
        left: 90px;
      }
    }
  }
}
</style>
