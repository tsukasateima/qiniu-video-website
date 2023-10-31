<script setup lang="ts">
import QiNiuVideoItem from '@/components/commonComponents/QiNiuVideoItem.vue'
</script>

<template>
  <div class="collections-container">
    <div class="my-info-container">
      <div class="avatar"><img src="@/assets/img/user/icon-user.png" alt="" /></div>
      <span>姓名</span>
      <span>个性签名</span>
    </div>
    <div class="collections-list-container">
      <nav>
        <div class="">默认收藏夹</div>
        <ul>
          <li>默认收藏酒</li>
          <li>用户收藏夹1</li>
          <li>用户收藏夹2（rename/delete）</li>
        </ul>
      </nav>
      <div class="collections-list">
        <div class="collection-item" v-for="i in 4" :key="i"><QiNiuVideoItem /></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collections-container {
  background-color: pink;
  width: 80%;
  margin: 0 auto;
  .my-info-container {
    display: flex;
    align-items: flex-end;
    justify-self: end;
    padding-top: 50px;
    border: 1px solid #000;
    .avatar {
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 1px solid #000;
      }
    }
    span {
      height: 25px;
      line-height: 25px;
      margin-right: 30px;
    }
  }
  .collections-list-container {
    display: flex;
    justify-content: space-between;
    .collections-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 70%;
      .collection-item {
        height: 150px;
        width: 30%;
        background-color: #fff;
        margin-bottom: 150px;
      }
    }
  }
}
</style>
