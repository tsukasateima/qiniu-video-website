<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  video: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="video-item-container">
    <div class="video">
      <div class="video-start">
        <RouterLink
          target="_blank"
          :to="{
            path: `/videoInfo/${video.id}`
          }"
        >
          <img class="video-img" :src="video.thumbnail" alt="" />
          <div class="video-back-info">
            <span><svg-icon name="smallVideo" class="video-icon" />{{ video.viewCount }}</span>
            <span style="margin-right: 5px">{{ video.length }}</span>
          </div>
          <div class="mask"><svg-icon name="play" class="play-icon" /></div>
          <div class="default-mask"></div>
        </RouterLink>
      </div>
      <div class="video-end">
        <a>{{ video.title }}</a>
        <span>作者: {{ video.createUserNickName }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-item-container {
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .video {
    flex: 1;
    // background-color: #fff;
    .video-start {
      border-radius: 6px;
      position: relative;
      overflow: hidden;
      a {
        img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.9));
        }
        .default-mask {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30px;
          background: linear-gradient(0deg, rgba(54, 53, 53, 0.7), rgba(255, 255, 255, 0.9));
        }
        .video-back-info {
          z-index: 999;
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 6px;
          font-size: 14px;
          line-height: 14px;
          color: #fff;
          text-shadow: 10px 10px 10px #ccc;
        }
        .mask {
          display: none;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, rgba(49, 49, 48, 0.5), rgba(255, 255, 255, 0.4));
          z-index: 99;
          .play-icon {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            color: rgba(#3f3d3d, 0.9);
          }
        }
        &:hover {
          .mask {
            display: block;
          }
          .default-mask {
            display: none;
          }
          .video-img {
            transform: scale(1.2);
            transition: transform 0.3s ease-in-out;
          }
        }
      }
    }
    .video-end {
      padding: 4px 2px;
      a {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-bottom: 5px;
        color: #000;
        font-size: 16px;
        text-decoration: none;
        &:hover {
          color: $main-deep-pink;
        }
      }
      span {
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
.video-icon {
  width: 15px;
  height: 15px;
  margin: 0 5px -2px 5px;
}
</style>
