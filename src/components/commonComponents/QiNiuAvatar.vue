<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const showSmall = ref(true)
const mouseoverSmall = () => {
  showSmall.value = false
}
const mousemoveLarge = () => {
  showSmall.value = true
}
</script>

<template>
  <div class="end-container">
    <transition name="fade">
      <div class="personal-info-container" @mouseover="mouseoverSmall" v-show="showSmall">
        <img src="@/assets/img/user/icon-user.png" alt="" />
      </div>
    </transition>
    <transition name="fade">
      <div class="personal-info-focus-container" @mouseleave="mousemoveLarge" v-show="!showSmall">
        <img src="@/assets/img/user/icon-user.png" alt="" />
        <div class="person-info">
          <span style="font-size: 20px">姓名</span>
          <div class="social-infos">
            <div class="attention-num">
              <span>151</span>
              <span style="margin-right: 15px">关注人数</span>
            </div>
            <div class="fans-num">
              <span>999</span>
              <span>粉丝人数</span>
            </div>
          </div>
          <div class="logout">退出登录</div>
        </div>
      </div>
    </transition>

    <span>
      <RouterLink target="_blank" to="/message" style="z-index: 4">消息</RouterLink>
    </span>
    <span>
      <RouterLink target="_blank" to="/collections">收藏</RouterLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.end-container {
  display: flex;
  position: relative;
  .personal-info-container {
    position: absolute;
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
  .personal-info-focus-container {
    position: absolute;
    z-index: 2;
    left: -90px;
    top: 20px;
    img {
      z-index: 2;
      position: absolute;
      left: 0;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .person-info {
      position: relative;
      margin-left: -100px;
      padding-top: 60px;
      margin-top: 50px;
      border-radius: 10px;
      height: 200px;
      width: 300px;
      background-color: #fff;
      border: 1px solid #e7c1c1;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 5px 5px 25px #e7c1c1;
      span {
        margin-left: 0;
      }
      .social-infos {
        display: flex;
        margin-bottom: 20px;
        .attention-num,
        .fans-num {
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            font-size: 18px;
            height: 18px;
            line-height: 18px;
            &:nth-of-type(1) {
              color: #999;
              margin-bottom: 10px;
              margin-top: 15px;
              font-size: 20px;
            }
            &:nth-of-type(2) {
              font-size: 14px;
            }
            &:hover {
              color: $main-deep-pink;
            }
          }
        }
        .attention-num {
          margin-right: 15px;
        }
      }
      .logout {
        padding: 10px 0;
        height: 30px;
        background: linear-gradient(90deg, rgba(255, 192, 203, 0.8), rgba(255, 255, 255, 0.7));
        width: 100%;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        color: #999;
        &:hover {
          color: #ecbdd4;
          background-color: #d3d6d9;
        }
      }
    }
  }
  span {
    margin-left: 30px;
    line-height: 50px;
    &:nth-of-type(1) {
      margin-left: 60px;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out; /* 过渡效果设置为0.8秒的渐入渐出 */
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
