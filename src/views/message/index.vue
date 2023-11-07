<script setup lang="ts">
import { nanoid } from 'nanoid'
import { onMounted, ref } from 'vue'
import { responseMyMessage, viewMyLike } from '@/api/message'
const viewportHeight = ref(0)
const msgListHeight = ref(0)
const responseList = ref([] as any)
const likeList = ref([] as any)
onMounted(() => {
  viewportHeight.value = window.innerHeight
  msgListHeight.value = Math.floor(
    window.innerHeight -
      (document.querySelector('.message-list') as HTMLElement).getBoundingClientRect().top -
      10
  )
})
const msgCategory = [
  { id: nanoid(), name: '回复我的' },
  { id: nanoid(), name: '收到的赞' }
]
const activeCate = ref(msgCategory[0])
const changeCate = (cate: any) => {
  activeCate.value = cate
}
const getResponseMsg = async () => {
  const res = await responseMyMessage()
  responseList.value = res as any
}
const getLikeMsg = async () => {
  const res = await viewMyLike()
  likeList.value = res as any
}
getResponseMsg()
getLikeMsg()
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
            @click="changeCate(cate)"
          >
            {{ cate.name }}
          </li>
        </ul>
      </div>
      <div class="message-response-container" v-if="activeCate.name === '回复我的'">
        <el-card class="response-header" shadow="always">{{ activeCate.name }} </el-card>
        <div class="message-list" :style="{ height: msgListHeight + 'px' }">
          <div class="message-item" v-for="(item, i) in responseList" :key="i">
            <div class="response-person-start">
              <img :src="item.backUserPng" alt="" />
            </div>
            <div class="response-person-end">
              <span>
                <span class="hover" style="margin-right: 5px"> {{ item.backNickName }}</span
                >回复了我的评论</span
              >
              <span class="hover">{{ item.content }}</span>
              <footer>
                <span class="hover">{{ item.backTime }}</span>
                <span class="comment-icon hover"
                  ><svg-icon name="comment" class="svg"></svg-icon>回复</span
                >
                <span class="like-icon hover"><svg-icon name="like" class="svg" />点赞</span>
              </footer>
              <div class="my-comment-context">{{ item.myContent }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="message-like-container" v-else>
        <el-card class="like-header" shadow="always">{{ activeCate.name }} </el-card>
        <div class="like-list" :style="{ height: msgListHeight + 'px' }">
          <div class="like-item" v-for="(item, i) in likeList" :key="i">
            <div class="like-person-start">
              <img :src="item.userPng" alt="" />
            </div>
            <div class="like-person-end">
              <span class="hover">{{ item.nickName }} 点赞了我的评论 </span>
              <footer>
                <span class="hover">{{ item.backTime }}</span>
              </footer>
              <div class="my-comment-context">{{ item.likedContent }}</div>
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
          height: 100%;
          margin-left: 20px;
          border-radius: 50%;
        }
      }
      .response-person-end {
        position: relative;
        width: 80%;
        display: flex;
        flex-direction: column;
        .my-comment-context {
          width: 120px;
          // 超出三行之外的部分是省略号
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
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
  .message-like-container {
    flex: 1;
    .like-header {
      margin: 10px 0 20px;
      color: $main-color;
      font-weight: 800;
    }
    .like-list {
      overflow-y: scroll;
      height: 500px;
    }
    .like-item {
      display: flex;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(13, 61, 185, 0.55));
      border-bottom: 1px solid #ccc;
      padding: 15px 5px;
      .like-person-start {
        height: 50px;
        width: 50px;
        margin-right: 50px;
        img {
          width: 100%;
          height: 100%;
          margin-left: 20px;
          border-radius: 50%;
        }
      }
      .like-person-end {
        position: relative;
        width: 80%;
        display: flex;
        flex-direction: column;
        .my-comment-context {
          width: 120px;
          // 超出三行之外的部分是省略号
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
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
.comment-icon,
.like-icon {
  color: #6b6a6a;
  margin-right: 3px;

  .svg {
    height: 13px;
  }
}
.hover {
  &:hover {
    color: $main-color;
  }
}
</style>
