<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.fullPath"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

<style lang="scss" scoped>
$navHeight: 50px;

.app-main {
  height: calc(100vh - #{$navHeight});
  background-color: #fff;
}
</style>
