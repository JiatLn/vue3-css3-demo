<template>
  <div class="warpper">
    <div class="box"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@property --colorA {
  syntax: '<color>';
  inherits: false;
  initial-value: fuchsia;
}
@property --colorC {
  syntax: '<color>';
  inherits: false;
  initial-value: #f79188;
}
@property --colorF {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}

.warpper {
  .box {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    // background: linear-gradient(0, var(--colorA), var(--colorC), var(--colorF));
    background: conic-gradient(var(--colorA), var(--colorC));
    animation: change 6s infinite linear;
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      border: 1px solid #fff;
      width: 0;
      height: 0;
      transform: translate(-50%, -50%);
      animation: bd 2s infinite linear;
    }
    &::after {
      animation-delay: 1s;
    }
  }
}

@keyframes change {
  25% {
    --colorA: red;
    --colorC: #a93ee0;
    --colorF: fuchsia;
  }
  50% {
    --colorA: #ff3c41;
    --colorC: #e228a0;
    --colorF: #2e4c96;
  }

  75% {
    --colorA: #ae63e4;
    --colorC: #0ebeff;
    --colorF: #efc371;
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bd {
  100% {
    width: 100%;
    height: 100%;
    opacity: 0;
    border-width: 0;
  }
}
</style>
