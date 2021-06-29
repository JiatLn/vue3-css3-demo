<template>
  <div class="warpper">
    <div class="btns">
      <div class="btn btn-left" :class="{ active: isActiveL }" @click="onClick('L')"></div>
      <div class="btn btn-right" :class="{ active: isActiveR }" @click="onClick('R')"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const isActiveL = ref(false);
const isActiveR = ref(false);
const onClick = (flag) => {
  if (flag === 'L') {
    if (isActiveL.value) {
      return;
    }
    isActiveL.value = true;
    setTimeout(() => {
      isActiveL.value = false;
    }, 600);
  } else {
    if (isActiveR.value) {
      return;
    }
    isActiveR.value = true;
    setTimeout(() => {
      isActiveR.value = false;
    }, 600);
  }
};
</script>

<style lang="scss" scoped>
@keyframes click-left-before {
  to {
    opacity: 0;
    transform: translate(-150%, -50%) scale(0);
  }
}
@keyframes click-left-after {
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    left: 50%;
  }
}

@keyframes click-right-before {
  to {
    opacity: 0;
    transform: translate(100%, -50%) scale(0);
  }
}
@keyframes click-right-after {
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    left: 50%;
  }
}

.btns {
  display: flex;
  gap: 48px;
  .btn {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: deeppink;
    cursor: pointer;
    position: relative;
    &:hover {
      &::before,
      &::after {
        color: deeppink;
      }
      background-color: #fff;
      border: 2px solid deeppink;
    }

    &.btn-left.active {
      &::before {
        animation: click-left-before 0.6s;
      }
      &::after {
        animation: click-left-after 0.6s;
      }
    }
    &.btn-right.active {
      &::before {
        animation: click-right-before 0.6s;
      }
      &::after {
        animation: click-right-after 0.6s;
      }
    }

    &::before,
    &::after {
      color: #fff;
      font-size: 24px;
      position: absolute;
      top: 50%;
      // content: '❮';
      content: '🡠';
    }
    &::before {
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
    &.btn-left::after {
      left: calc(50% + 30%);
    }
    &.btn-right::after {
      left: calc(50% - 30%);
    }

    &.btn-right::before,
    &.btn-right::after {
      // content: '❯';
      content: '🡢';
    }
  }
}
</style>
