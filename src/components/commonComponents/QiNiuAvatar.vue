<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="end-container">
    <div class="personal-info-container">
      <img src="@/assets/img/user/icon-user.png" alt="" />
      <div class="person-info">
        <img src="@/assets/img/user/icon-user.png" alt="" />
        <div class="social-infos">
          <span>关注人数</span>
          <span>粉丝人数</span>
        </div>
        <div>退出登录</div>
      </div>
    </div>
    <span>
      <RouterLink target="_blank" to="/message">消息</RouterLink>
    </span>
    <span>
      <RouterLink target="_blank" to="/collections">收藏</RouterLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.end-container {
  display: flex;
  .personal-info-container {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .person-info {
      z-index: 999;
      display: flex;
      flex-direction: column;
      justify-items: center;
      width: 400px;
      background-color: #fff;
      border: 1px solid #000;
      height: 300px;
      position: absolute;
      top: 50px;
      margin-left: -250px;
      img {
        width: 80px;
        height: 80px;
      }
      .social-infos {
        span {
          color: #000;
        }
      }
    }
  }
  span {
    margin-left: 30px;
    line-height: 50px;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
