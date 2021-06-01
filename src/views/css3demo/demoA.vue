<template>
  <div class="warpper">
    <div class="heart-btn" @click="hearted = !hearted" :class="{ hearted }">
      <div class="heart heart-out"></div>
      <div class="heart heart-in"></div>
      <div class="circle"></div>
      <div class="points">
        <div class="point" v-for="i in 8" :key="'point' + i"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hearted = ref(false);
</script>

<style lang="scss" scoped>
.warpper {
  background-color: #fff4e8;
  .heart-btn {
    cursor: pointer;
    background-color: deeppink;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: relative;
    .heart {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -25%) rotateZ(-45deg);
      &::before,
      &::after {
        content: '';
        border-radius: 50%;
        position: absolute;
        background-color: inherit;
      }
      &::before {
        top: -50%;
        left: 0;
      }
      &::after {
        top: 0;
        left: 50%;
      }
    }
    .heart-in {
      $heartInSize: 16px;
      width: $heartInSize;
      height: $heartInSize;
      background-color: deeppink;
      &::before {
        width: $heartInSize;
        height: $heartInSize;
      }
      &::after {
        width: $heartInSize;
        height: $heartInSize;
      }
    }
    .heart-out {
      $heartOutSize: 20px;
      width: $heartOutSize;
      height: $heartOutSize;
      background-color: #fff;
      &::before {
        width: $heartOutSize;
        height: $heartOutSize;
      }
      &::after {
        width: $heartOutSize;
        height: $heartOutSize;
      }
    }
    .circle {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border: 2px solid deeppink;
      border-radius: 50%;
    }
    .points {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .point {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        background-color: deeppink;
        &:nth-child(1) {
          top: -36px;
        }
        &:nth-child(2) {
          top: 36px;
        }
        &:nth-child(3) {
          top: -20px;
          left: -20px;
        }
        &:nth-child(4) {
          top: 20px;
          left: 20px;
        }
        &:nth-child(5) {
          top: 20px;
          left: -20px;
        }
        &:nth-child(6) {
          top: -20px;
          left: 20px;
        }
        &:nth-child(7) {
          left: -36px;
        }
        &:nth-child(8) {
          left: 36px;
        }
      }
    }

    &.hearted .heart-in {
      opacity: 0;
    }
    &.hearted .heart-out {
      animation: scale-heart 0.4s ease-in-out forwards;
    }
    &.hearted .circle {
      animation: circle 0.6s ease-in-out forwards;
    }
    &.hearted .point {
      transition: 0.3s 0.3s ease-out;
      opacity: 0;
      &:nth-child(1) {
        top: -36px * 3;
      }
      &:nth-child(2) {
        top: 36px * 3;
      }
      &:nth-child(3) {
        top: -20px * 4;
        left: -20px * 4;
      }
      &:nth-child(4) {
        top: 20px * 4;
        left: 20px * 4;
      }
      &:nth-child(5) {
        top: 20px * 4;
        left: -20px * 4;
      }
      &:nth-child(6) {
        top: -20px * 4;
        left: 20px * 4;
      }
      &:nth-child(7) {
        left: -36px * 3;
      }
      &:nth-child(8) {
        left: 36px * 3;
      }
    }
  }
}

@keyframes scale-heart {
  0% {
    transform: translate(-50%, -25%) rotateZ(-45deg) scale(0);
  }
  75% {
    transform: translate(-50%, -25%) rotateZ(-45deg) scale(1.2);
  }
  100% {
    transform: translate(-50%, -25%) rotateZ(-45deg) scale(1);
  }
}

@keyframes circle {
  100% {
    width: 160px;
    height: 160px;
    opacity: 0;
  }
}
</style>
