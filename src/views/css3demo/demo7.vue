<template>
  <div class="warpper">
    <ul class="items">
      <li
        v-for="item in itemList"
        :key="item.id"
        class="item"
        :class="{ active: acitveId === item.id }"
        @mouseenter="onHover(item.id)"
      >
        <span class="title">{{ item.name }}</span>
        <div class="desc" v-show="acitveId === item.id">{{ item.desc }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const itemList = [
  {
    name: '三国演义',
    desc: '青山依旧在，几度夕阳红。白发渔樵江渚上，惯瞧秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。',
    id: 0,
  },
  {
    name: '西游记',
    desc: '功完八九还加九，行满三千及大千。',
    id: 1,
  },
  {
    name: '红楼梦',
    desc: '风月情长，终究梦一场。红楼梦一场，又如人生一出戏。梦迷梦醒，戏里戏外，梦里就是荒唐，戏外就是荒凉。',
    id: 2,
  },
  {
    name: '水浒传',
    desc: '天地显罡煞之精，人境合杰灵之美。',
    id: 3,
  },
];

let acitveId = ref(null);

onMounted(() => {
  setTimeout(() => {
    acitveId.value = 0;
  }, 600);
});

const onHover = (idx) => {
  acitveId.value = idx;
};
</script>

<style lang="scss" scoped>
.warpper {
  .items {
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    .item {
      list-style: none;
      background-color: deepskyblue;
      cursor: pointer;
      border-radius: 8px;
      width: 100px;
      height: 240px;
      transition: 0.6s ease-in;
      display: flex;
      padding: 16px;
      position: relative;
      opacity: 0.5;
      &.active {
        opacity: 1;
        width: 400px;
        .desc {
          width: 200px;
        }
      }
      .title {
        writing-mode: vertical-rl;
        margin-right: 16px;
        font-weight: 600;
        font-size: 18px;
        color: #fff;
        letter-spacing: 0.2em;
      }
      .desc {
        margin: 16px 20px 24px;
        writing-mode: vertical-rl;
        position: absolute;
        right: 40px;
        font-family: '宋体';
        letter-spacing: 0.1em;
        width: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
