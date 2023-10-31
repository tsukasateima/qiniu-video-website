<script setup lang="ts">
import QiNiuSearch from './QiNiuSearch.vue'
import QiNiuAvatar from './QiNiuAvatar.vue'
</script>

<template>
  <div class="qiniu-header-container">
    <nav class="start-container">
      <span style="position: absolute; top: 20px">这个点击之后传id给你们 你们给我内容</span>
      <span>首页（推荐）</span>
      <span>热门视频</span>
      <span>体育视频</span>
    </nav>
    <div class="middle-container">
      <QiNiuSearch />
    </div>
    <div class="end-container">
      <QiNiuAvatar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.qiniu-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: $main-color;
  padding: 0 40px;
  .start-container {
    span {
      color: #fff;
      line-height: 50px;
      margin-right: 30px;
    }
  }
  .middle-container {
    flex: 0.4;
  }
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
    }
    span {
      margin-left: 30px;
      line-height: 50px;
      color: #fff;
    }
  }
}
</style>
