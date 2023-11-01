<script setup lang="ts">
import { nanoid } from 'nanoid'
import { onMounted, ref } from 'vue'
const viewportHeight = ref(0)
const msgListHeight = ref(0)
onMounted(() => {
  viewportHeight.value = window.innerHeight
  msgListHeight.value = Math.floor(
    window.innerHeight -
      (document.querySelector('.message-list') as HTMLElement).getBoundingClientRect().top -
      10
  )
})
const count = ref(15)
const loadResponse = () => {
  count.value += 5
}
const msgCategory = [
  { id: nanoid(), name: '回复我的' },
  { id: nanoid(), name: '收到的赞' },
  { id: nanoid(), name: '系统消息' }
]
const activeCate = ref(msgCategory[0])
</script>

<template>
  <div class="message-container" :style="{ height: viewportHeight + 'px' }">
    <div class="content-container" :style="{ height: viewportHeight + 'px' }">
      <div class="left-container">
        <div class="left-header-title">消息中心</div>
        <ul>
          <li
            v-for="cate in msgCategory"
            :key="cate.id"
            :class="{ active: cate.id === activeCate.id }"
          >
            {{ cate.name }}
          </li>
        </ul>
      </div>
      <div class="message-response-container">
        <el-card class="response-header" shadow="always">{{ activeCate.name }} </el-card>
        <div
          class="message-list"
          :style="{ height: msgListHeight + 'px' }"
          v-infinite-scroll="loadResponse"
          infinite-scroll-distance="250"
        >
          <div class="message-item" v-for="i in count" :key="i">
            <div class="response-person-start">
              <img src="@/assets/img/user/icon-user.png" alt="" />
            </div>
            <div class="response-person-end">
              <span>回复人姓名 回复了我的评论</span>
              <span>回复内容</span>
              <footer>
                <span>回复时间</span><span>回复（我再回他）</span><span>给他点赞</span>
              </footer>
              <div class="my-comment-context">我的评论内容</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-container {
  overflow-y: hidden;
  background: url('@/assets/img/banner/message-banner.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  background-color: pink;
  .content-container {
    height: 200px;
    display: flex;
    width: 80%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(13, 61, 185, 0.85));
    height: 80%;
    margin: 0 auto;
  }
  .left-container {
    width: 20%;
    max-width: 280px;
    .left-header-title {
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      margin: 20px 0;
      font-weight: 600;
    }
    ul {
      li {
        font-size: 16px;
        margin: 20px 0;
        &:hover {
          color: $main-color;
        }
      }
      .active {
        color: $main-color;
      }
    }
  }
  .message-response-container {
    flex: 1;
    .response-header {
      margin: 10px 0 20px;
      color: $main-color;
      font-weight: 800;
    }
    .message-list {
      overflow-y: scroll;
      height: 500px;
    }
    .message-item {
      display: flex;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(13, 61, 185, 0.55));
      border-bottom: 1px solid #ccc;
      padding: 15px 5px;
      .response-person-start {
        height: 50px;
        width: 50px;
        margin-right: 50px;
        img {
          width: 100%;
          margin-left: 20px;
          margin-top: 10px;
        }
      }
      .response-person-end {
        position: relative;
        width: 80%;
        display: flex;
        flex-direction: column;
        .my-comment-context {
          position: absolute;
          right: 0;
          color: #999;
        }
        span {
          margin: 5px 0;
        }
        footer {
          span {
            margin-right: 30px;
          }
        }
      }
    }
  }
}
</style>
