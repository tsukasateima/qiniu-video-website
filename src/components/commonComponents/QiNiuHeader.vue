<script setup lang="ts">
import QiNiuSearch from './QiNiuSearch.vue'
import QiNiuAvatar from './QiNiuAvatar.vue'
</script>

<template>
  <div class="qiniu-header-bg-container">
    <div class="qiniu-header-container">
      <nav class="start-container"></nav>
      <div class="middle-container">
        <QiNiuSearch />
      </div>
      <div class="end-container">
        <QiNiuAvatar />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.qiniu-header-bg-container {
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)),
    url('@/assets/img/banner/top-banner.jpg');
  background-size: cover;
  background-position: 0 95%;
  .qiniu-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background: linear-gradient(90deg, rgba(82, 49, 180, 0.4), rgba(176, 95, 174, 0.4));
    padding: 0 40px;
    .start-container {
      span {
        text-shadow: 3px 7px 10px #ccc;
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
}
</style>
