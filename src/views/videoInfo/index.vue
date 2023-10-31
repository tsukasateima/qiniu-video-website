<script setup lang="ts">
// import QiNiuHeader from '@/components/commonComponents/QiNiuHeader.vue'
import QiNiuVideoItem from '@/components/commonComponents/QiNiuVideoItem.vue'
import { ref } from 'vue'
const commentVal = ref('')
</script>

<template>
  <!-- <QiNiuHeader /> -->
  <div class="video-container">
    <div class="start-container">
      <div class="video-container">
        <div class="video-info">
          <h2>视频题目</h2>
          <span>评论数目</span>
          <span>视频发布时间</span>
        </div>
        <div class="video"></div>
        <div class="tools-container">
          <span>点赞</span>
          <span>收藏</span>
        </div>
      </div>
      <div class="comment-list">
        <div class="my-comment-container">
          <img src="@/assets/img/user/icon-user.png" alt="" />
          <el-input rows="1" v-model="commentVal" aria-placeholder="填写评论"></el-input>
          <el-button type="primary">发布</el-button>
        </div>
        <div class="video-comment-list">
          <div class="video-comment-list-item">
            <img src="@/assets/img/user/icon-user.png" alt="" />
            <div class="video-comment-list-item-info">
              <span>用户名</span>
              <span>评论内容</span>
              <span>时间 赞数目 点踩 回复</span>
              <ul>
                <li>寄 这种评论是个树形结构</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="end-container">
      <span>推荐视频</span>
      <div class="video" v-for="i in 5" :key="i">
        <QiNiuVideoItem />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  display: flex;
  width: 80%;
  background-color: pink;
  margin: 0 auto;
  .start-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    .video-container {
      display: flex;
      flex-direction: column;
      .video-info {
      }
      .video {
        width: 100%;
        height: 300px;
        background-color: #fff;
      }
    }
    .comment-list {
      width: 80%;
      margin: 0 auto;
      margin-top: 100px;
      .my-comment-container {
        display: flex;
        margin-bottom: 50px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      .video-comment-list {
        display: flex;
        flex-direction: column;
        .video-comment-list-item {
          display: flex;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .video-comment-list-item-info {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
          }
        }
      }
    }
  }
  .end-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-items: center;
    background-color: #fff;
    flex: 1;
    .video {
      width: 90%;
      height: 200px;
      margin-bottom: 20px;
    }
  }
}
</style>
