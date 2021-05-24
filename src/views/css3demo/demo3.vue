<template>
  <div class="warpper">
    <div class="logo">
      <div class="part"></div>
      <div class="part"></div>
      <div class="part"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$color1: #41b883;
$color2: #35495e;
$color3: #fff;
$logoSize: 300px;
$scaleX: 0.6;

.warpper {
  width: 100%;
  height: 100%;

  background-color: #080c1e;

  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    position: relative;
    width: $logoSize * $scaleX;
    height: $logoSize * $scaleX;
    background-color: transparent;
    overflow: hidden;
    .part {
      position: absolute;
      top: ($logoSize * $scaleX - $logoSize / 2) / 2;
      left: 50%;
      transform: translateX(-50%) scaleX($scaleX);
      &:nth-child(1) {
        width: $logoSize;
        height: $logoSize;
        border: $logoSize * 0.5 transparent solid;
        border-top-color: $color1;
      }
      &:nth-child(2) {
        width: $logoSize / 3 * 2;
        height: $logoSize / 3 * 2;
        border: $logoSize / 3 transparent solid;
        border-top-color: $color2;
      }
      &:nth-child(3) {
        width: $logoSize / 3;
        height: $logoSize / 3;
        border: $logoSize / 3 / 2 transparent solid;
        border-top-color: $color3;
      }
    }
  }
}
</style>
