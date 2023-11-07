<script setup lang="ts">
import QiNiuVideoItem from '@/components/commonComponents/QiNiuVideoItem.vue'
import QINiuVideoSkeleton from '@/components/commonComponents/QINiuVideoSkeleton.vue'
import { ref, defineProps, watch } from 'vue'
import { getHotVideoList, getVideoListByCate } from '@/api/home'
const props = defineProps({
  cateId: {
    type: String,
    default: ''
  }
})
const pageSize = ref(20) // 每页数量
const pageNum = ref(1) // 页数
const total = ref(0) // 总数
const listData = ref([]) as any // 列表数据
// 获取列表数据
const getList = async () => {
  if (props.cateId === '') {
    // 热门视频
    const params = {
      pageSize: pageSize.value,
      pageNum: pageNum.value
    }
    const { total, rows } = (await getHotVideoList(params)) as any
    listData.value.push(...rows)
    total.value = Number(total)
  } else {
    // 分类视频
    const params = {
      id: props.cateId,
      pageSize: pageSize.value,
      pageNum: pageNum.value
    }
    const { total, rows } = (await getVideoListByCate(params)) as any
    listData.value.push(...rows)
    total.value = Number(total)
  }
}
// 获取新的页的数据
const loadNewPage = async () => {
  if (pageNum.value * pageSize.value > total.value) {
    return
  } else {
    pageNum.value++
    getList()
  }
}
// 当cateId变化时，重新获取数据
watch(
  () => props.cateId,
  () => {
    listData.value = []
    pageNum.value = 1
    total.value = 0
    getList()
  }
)
getList()
</script>

<template>
  <div
    class="video-list-container"
    v-infinite-scroll="loadNewPage"
    :infinite-scroll-distance="650"
    infinite-scroll-delay="100"
  >
    <div class="list-item" v-for="item in listData" :key="item.id">
      <QiNiuVideoItem :video="item" />
    </div>
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
