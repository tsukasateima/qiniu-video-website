<script setup lang="ts"></script>

<template>
  <div class="video-item-container">
    <div class="video">
      <div class="video-skelton-start" animated />
      <div class="video-end">
        <el-skeleton :rows="1" animated />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-item-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .video {
    flex: 1;
    .video-skelton-start {
      width: 100%;
      aspect-ratio: 16/9;
      margin-bottom: 10px;
      border-radius: 6px;
      background-color: #f0f2f5;
      background: linear-gradient(90deg, #f0f2f5 25%, #e6e6e6 37%, #f2f2f2 63%);
      background-size: 400% 100%;
      display: inline-block;
      border-radius: 4px;
      width: 100%;
      animation: el-skeleton-loading 1.5s ease infinite;
    }
    @keyframes el-skeleton-loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }

    .video-end {
      padding: 4px 2px;
      span {
        &:nth-of-type(1) {
          // 超过两行的部分就是省略号
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-bottom: 5px;
        }
        &:nth-of-type(2) {
          color: #999;
          font-size: 14px;
        }
        &:hover {
          color: $main-deep-pink;
        }
      }
    }
  }
}
</style>
