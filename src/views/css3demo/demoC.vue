<template>
  <div class="warpper">
    <p>一个简单的MORE按钮效果</p>
    <span class="more"> more </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.warpper {
  flex-direction: column;
  p {
    margin-bottom: 40px;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-style: wavy;
  }
  .more {
    text-transform: uppercase;
    cursor: pointer;
    color: deeppink;
    transition: 0.6s;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 1px;
    text-decoration-color: deeppink;
    position: relative;
    &::before {
      transition: 0.6s;
      content: '⇒';
      color: deeppink;
      position: absolute;
      right: -20px;
      opacity: 0;
    }
    &:hover {
      text-decoration-color: transparent;
      padding-right: 16px;
      &::before {
        opacity: 1;
        right: -4px;
      }
    }
  }
}
</style>
