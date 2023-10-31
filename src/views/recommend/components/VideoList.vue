<script setup lang="ts">
import QiNiuVideoItem from '@/components/commonComponents/QiNiuVideoItem.vue'
</script>

<template>
  <div class="video-list-container">
    <div class="list-item" v-for="i in 20" :key="i"><QiNiuVideoItem /></div>
  </div>
</template>

<style lang="scss" scoped>
.video-list-container {
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: pink;
  width: 80%;
  margin: 0 auto;
  .list-item {
    width: 23%;
    height: 250px;
    border: 1px solid #000;
    margin-bottom: 50px;
  }
}
</style>
