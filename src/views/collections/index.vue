<script setup lang="ts">
import QiNiuVideoItem from '@/components/commonComponents/QiNiuVideoItem.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { getCollectionTree, getCollectionVideos } from '@/api/collection'
const userStore = useUserStore()
const tree = ref([]) as any // 收藏夹
const videos = ref([]) as any // 视频
const videoPage = ref(1) // 视频页数
const videoSize = ref(10) // 视频每页数量
const videoTotal = ref(0) // 视频总数
// 获取收藏夹
const collectionTree = async () => {
  tree.value = (await getCollectionTree()) as any
}
const activeTreeId = ref('')
// 获取收藏夹下面的视频
const collectionVideos = async () => {
  const params = {
    collectTreeId: activeTreeId.value,
    pageSize: videoSize.value,
    pageNum: videoPage.value
  }
  const { total, rows } = (await getCollectionVideos(params)) as any
  videos.value.push(...rows)
  videoTotal.value = Number(total)
}
// 切换收藏夹
const handelActiveTree = (id: any) => {
  activeTreeId.value = id
  videos.value = []
  videoPage.value = 1
  videoTotal.value = 0
  collectionVideos()
}
const loadNewPage = async () => {
  if (videoPage.value * videoSize.value > videoTotal.value) {
    return
  } else {
    videoPage.value++
    collectionVideos()
  }
}
collectionTree().then(() => {
  activeTreeId.value = tree.value[0].collectTreeId
  collectionVideos()
})
collectionVideos()
</script>

<template>
  <div class="collections-bg-container">
    <div class="collections-container">
      <div class="my-info-container">
        <div class="avatar"><img :src="userStore.userInfo.avatar" alt="" /></div>
        <span>{{ userStore.userInfo.nickName }}</span>
      </div>
      <div class="collections-list-container">
        <nav>
          <div class="user-collections-title">用户文件夹</div>
          <div class="user-collection-list">
            <div
              v-for="item in tree"
              :key="item.collectTreeId"
              class="user-collection-item"
              @click="handelActiveTree(item.collectTreeId)"
              :class="{ active: item.collectTreeId === activeTreeId }"
            >
              {{ item.collectTreeName }}
            </div>
          </div>
        </nav>
        <div
          class="collections-list"
          v-infinite-scroll="loadNewPage"
          :infinite-scroll-distance="400"
        >
          <div class="collection-item" v-for="item in videos" :key="item.id">
            <QiNiuVideoItem :video="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collections-bg-container {
  width: 100%;
  background-color: #f4f5f7;
}
.collections-container {
  width: 80%;
  margin: 0 auto;
  .my-info-container {
    padding-bottom: 15px;
    margin-bottom: 30px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
      url('@/assets/img/banner/collection-card.jpg');
    background-size: cover;
    background-position: 0 50%;
    display: flex;
    align-items: flex-end;
    justify-self: end;
    padding-top: 50px;
    border: 1px solid #999;
    border-radius: 5px;
    .avatar {
      margin-left: 20px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
    span {
      height: 25px;
      line-height: 25px;
      margin-right: 30px;
    }
  }
  .collections-list-container {
    overflow: hidden;
    margin-top: 50px;
    padding: 0px 15px 40px 0;
    border: 1px solid #999;
    border-radius: 10px;
    box-shadow: 10px 10px 200px rgba(246, 230, 179, 0.6);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30px 20px;
    nav {
      width: 30%;
      margin-right: 40px;
      max-width: 280px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      .user-collections-title {
        font-size: 20px;
        line-height: 20px;
        padding: 15px 8px;
        color: #999;
      }
      .user-collection-list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        .user-collection-item {
          flex: 1;
          font-size: 16px;
          line-height: 16px;
          padding: 8px 10px;
          line-height: 30px;
          &:hover {
            color: rgba(156, 25, 30, 0.9);
            background-color: #f7f7f7;
          }
        }
        .active {
          transition: all 1.3s ease-in-out;
          background: linear-gradient(90deg, rgba(65, 49, 48, 0.3), rgba(156, 25, 30, 0.6));
          color: #fff;
        }
      }
    }
    .collections-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      width: 70%;
      .collection-item {
        height: 150px;
        width: 100%;
        margin-bottom: 150px;
      }
    }
  }
}
</style>
