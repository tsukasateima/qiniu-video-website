<script setup lang="ts">
import QiNiuHeader from '@/components/commonComponents/QiNiuHeader.vue'
import QiNiuFooter from '@/components/commonComponents/QiNiuFooter.vue'
import VideoList from './components/VideoList.vue'
import { ref } from 'vue'
import { getVideoCateList } from '@/api/home'
const categoryList = ref([]) as any
const activeCateId = ref('')
const getCate = async () => {
  const { list } = (await getVideoCateList()) as any
  categoryList.value = list
}
const handleActiveCate = (id: string) => {
  if (id === activeCateId.value) {
    activeCateId.value = ''
  } else {
    activeCateId.value = id
  }
}
getCate()
</script>

<template>
  <QiNiuHeader />
  <div class="category-nav">
    <div
      class="cate-item"
      v-for="item in categoryList"
      :key="item.categoryId"
      :class="item.categoryId === activeCateId ? 'active' : ''"
      @click="handleActiveCate(item.categoryId)"
    >
      {{ item.categoryName }}
    </div>
  </div>
  <VideoList :cateId="activeCateId" />
  <QiNiuFooter />
</template>

<style lang="scss" scoped>
.category-nav {
  display: grid;
  grid-template-columns: repeat(8, 1fr); /* 每行四个元素，每个元素平均分配剩余空间 */
  gap: 15px; /* 列之间的间距 */
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  .cate-item {
    transition: all 0.3s ease-in-out;
    border: 1px solid #f39ede;
    border-radius: 5px;
    font-size: 18px;
    line-height: 18px;
    padding: 10px 0;
    text-align: center;
    color: #999;
    box-shadow: 5px 5px 10px #ccc;
    &:hover {
      background-color: #f7f7f7;
    }
  }
  .active {
    background: linear-gradient(90deg, rgba(135, 107, 203, 1), rgba(249, 211, 243, 0.8));
    box-shadow: 5px 5px 10px #ccc;
    color: #fff;
    &:hover {
      background: linear-gradient(90deg, rgba(135, 107, 203, 1), rgba(249, 211, 243, 0.8));
      color: #fff;
    }
  }
}
</style>
@/api/home
