<template>
  <div class="warpper">
    <div class="box">
      <div class="side" @click="clickHandle"></div>
      <div class="side"></div>
      <div class="side"></div>
      <div class="side"></div>
      <div class="side"></div>
      <div class="side" @click="clickHandle"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const rotateDeg = ref(180);

const clickHandle = () => {
  if (rotateDeg.value === 180) {
    rotateDeg.value += 90;
  } else {
    rotateDeg.value -= 90;
  }
};

onMounted(() => {
  setTimeout(() => {
    clickHandle();
  }, 1000);
});
</script>

<style lang="scss" scoped>
// 长宽高
$long: 200px;
$wide: 150px;
$pretty: 100px;

.warpper {
  .box {
    position: relative;
    transform-style: preserve-3d;
    perspective: 80vmin;
    transition: 0.6s;
    transform: rotateX(15deg);

    .side {
      position: absolute;
      top: 0;
      left: 0;
      transform-style: preserve-3d;
      backface-visibility: visible;
      border: 1px solid #bc9d77;
      // background: linear-gradient(to top, #af957d, #e9cfb9 50%);
      &:nth-child(1),
      &:nth-child(6) {
        width: $long;
        height: $wide;
      }
      &:nth-child(2),
      &:nth-child(3) {
        width: $pretty;
        height: $wide;
      }
      &:nth-child(4),
      &:nth-child(5) {
        width: $long;
        height: $pretty;
      }
      &:nth-child(1) {
        transform: translate(-50%, -50%);
        transform-origin: right center;
        background: radial-gradient(#af957d 30%, #e9cfb9);
      }
      &:nth-child(2) {
        transform: translate(-200%, -50%) rotateY(90deg);
        transform-origin: right center;
        background: linear-gradient(to left, #af957d, #e9cfb9 50%);
      }
      &:nth-child(3) {
        transform: translate(100%, -50%) rotateY(-90deg);
        transform-origin: left center;
        background: linear-gradient(to right, #af957d, #e9cfb9 50%);
      }
      &:nth-child(4) {
        transform: translate(-50%, -175%) rotateX(-90deg);
        transform-origin: bottom center;
        background: linear-gradient(to top, #af957d, #e9cfb9 50%);
      }
      &:nth-child(5) {
        transform: translate(-50%, 75%) rotateX(90deg);
        transform-origin: top center;
        // background: linear-gradient(to bottom, #af957d, #e9cfb9 50%);
        background-color: rgb(219, 198, 152);
      }
      &:nth-child(6) {
        background-color: rgb(219, 198, 152);
        // background: linear-gradient(to bottom, #af957d, #e9cfb9 50%);
        transform: translate3d(-50%, -150%, $pretty) rotateX(calc(v-bind(rotateDeg) * 1deg));
        transform-origin: bottom center;
        transition: 1s;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #af957d, #e9cfb9 50%);
          backface-visibility: hidden;
        }
      }
    }
  }
}
</style>
