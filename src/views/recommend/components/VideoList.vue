<script setup lang="ts">
import QiNiuVideoItem from '@/components/commonComponents/QiNiuVideoItem.vue'
import QINiuVideoSkeleton from '@/components/commonComponents/QINiuVideoSkeleton.vue'
import QiNiuLogin from '@/components/login/QiNiuLogin.vue'
import { ref } from 'vue'
const count = ref(1)
const loadVideo = () => {
  count.value += 3
}
</script>

<template>
  <QiNiuLogin />
  <div
    class="video-list-container"
    v-infinite-scroll="loadVideo"
    infinite-scroll-distance="650"
    infinite-scroll-delay="100"
  >
    <div class="list-item" v-for="i in 10" :key="i"><QiNiuVideoItem /></div>
  </div>
</template>

<style lang="scss" scoped>
.video-list-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 每行四个元素，每个元素平均分配剩余空间 */
  gap: 15px; /* 列之间的间距 */
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;

  .list-item {
    width: 100%;
    aspect-ratio: 10/8;
    max-height: 270px;
    margin-bottom: 50px;
  }
}
</style>
