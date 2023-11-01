<script setup lang="ts">
import QiNiuVideoItem from '@/components/commonComponents/QiNiuVideoItem.vue'
</script>

<template>
  <div class="collections-bg-container">
    <div class="collections-container">
      <div class="my-info-container">
        <div class="avatar"><img src="@/assets/img/user/icon-user.png" alt="" /></div>
        <span>姓名</span>
        <span>个性签名</span>
      </div>
      <div class="collections-list-container">
        <nav>
          <div class="user-collections-title">默认收藏夹</div>
          <div class="user-collection-list">
            <div v-for="i in 10" :key="i" class="user-collection-item">用户文件夹名</div>
          </div>
        </nav>
        <div class="collections-list">
          <div class="collection-item" v-for="i in 4" :key="i"><QiNiuVideoItem /></div>
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
    box-shadow: 10px 10px 200px rgba(246, 230, 179, 0.6);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    nav {
      width: 30%;
      margin-right: 40px;
      max-width: 280px;
      background-color: #fff;
      border: 1px solid #ccc;
      .user-collections-title {
        font-size: 20px;
        line-height: 20px;
        padding: 10px 5px;
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
        }
        .active {
          background: linear-gradient(90deg, rgba(65, 49, 48, 0.9), rgba(156, 25, 30, 0.9));
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
        background-color: pink;
      }
    }
  }
}
</style>
