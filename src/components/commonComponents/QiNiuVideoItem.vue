<script setup lang="ts"></script>

<template>
  <div class="video-item-container">
    <div class="video">
      <RouterLink
        target="_blank"
        :to="{
          path: '/videoInfo/1'
        }"
      >
        <img src="@/assets/img/user/banner.png" alt="" />
      </RouterLink>
      <i>视频时间</i>
    </div>
    <span>标题</span>
    <span>作者</span>
  </div>
</template>

<style lang="scss" scoped>
.video-item-container {
  height: 100%;
  width: 100%;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .video {
    position: relative;
    flex: 1;
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    i {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
