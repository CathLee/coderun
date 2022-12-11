<template>
  <div class="editContainer">
    <Header v-if="!embed"></Header>
    <div class="content" v-if="showContent">
      <component :is="activeLayout" :key="layout" :layout="layout"></component>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // 是否是嵌入模式
  embed: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped></style>
