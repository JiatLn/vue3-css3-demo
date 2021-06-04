<template>
  <div class="warpper">
    <div class="box" :style="randomShadow()" v-for="i in 10" :key="i"></div>
  </div>
</template>

<script setup>
const randomShadow = () => {
  const randPix = (i = false) => {
    const pixList = [0, 0, 20, -20, 40, -40, 80, -80];
    if (i) {
      return pixList[i - 1];
    }
    return pixList[Math.round(Math.random() * (pixList.length - 1))];
  };
  const randColor = (i = false) => {
    const colorList = ['#333', '#666', '#999', '#ccc'];
    if (i) {
      return colorList[i - 1];
    }
    return colorList[Math.round(Math.random() * (colorList.length - 1))];
  };
  return {
    filter: `
    drop-shadow(${randPix()}px ${randPix() / 2}px  0 ${randColor(1)})
    drop-shadow(${randPix()}px ${randPix() / 2}px  0 ${randColor(2)})
    drop-shadow(${randPix()}px ${randPix() / 2}px  0 ${randColor(3)})
    drop-shadow(${randPix()}px ${randPix() / 2}px  0 ${randColor(4)})
    `,
  };
};
</script>

<style lang="scss" scoped>
.warpper {
  overflow: hidden;
  gap: 300px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 160px 200px;
  .box {
    width: 10px;
    height: 20px;
    background: #000;
  }
}
</style>
