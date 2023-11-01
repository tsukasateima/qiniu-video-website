<script setup lang="ts"></script>

<template>
  <div class="video-item-container">
    <div class="video">
      <div class="video-start">
        <RouterLink
          target="_blank"
          :to="{
            path: '/videoInfo/1'
          }"
        >
          <img class="video-img" src="@/assets/img/user/banner.png" alt="" />
          <div class="video-back-info">
            <span>播放数据</span>
            <span>播放时间</span>
          </div>
          <div class="mask"><img src="@/assets/img/icons/play.png" alt="" /></div>
        </RouterLink>
      </div>
      <div class="video-end">
        <span
          >标题 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et enim saepe officiis sed
          repudiandae architecto atque expedita ipsam! Quibusdam aspernatur omnis vero iusto
          officiis rerum assumenda facere voluptates, sit aliquam?</span
        >
        <span>作者</span>
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
        }
        .video-back-info {
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
          background: linear-gradient(180deg, rgba(247, 155, 28, 0.2), rgba(255, 255, 255, 0.4));
          z-index: 99;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
          }
        }
        &:hover {
          .mask {
            display: block;
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
