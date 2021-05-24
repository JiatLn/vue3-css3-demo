<template>
  <div class="warpper">
    <div class="button">
      <span @click="onClickHandle('purple background')">button</span>
      <span @click="onClickHandle('white background')">button</span>
    </div>
  </div>
</template>

<script setup>
const onClickHandle = (arg) => {
  alert(arg + ' clicked!');
};
</script>

<style lang="scss" scoped>
.warpper {
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 200px;
    height: 48px;
    font-size: 24px;
    border-radius: 8px;
    overflow: hidden;
    text-transform: uppercase;
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      &:nth-child(1) {
        background-color: #6d4ba6;
        color: #fff;
        &:hover ~ span {
          clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%);
        }
      }
      &:nth-child(2) {
        background-color: #fff;
        color: #6d4ba6;
        clip-path: polygon(45% 0, 100% 0%, 100% 100%, 45% 100%, 55% 50%);
        &:hover {
          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0% 50%);
        }
      }
    }
  }
}
</style>
