<script setup lang="ts"></script>

<template>
  <div class="message-container">
    <div class="content-container">
      <div class="left-container">
        <div class="">消息中心</div>
        <ul>
          <li>回复我的</li>
          <li>@我的</li>
          <li>收到的赞</li>
          <li>系统消息</li>
          <li>我的私信</li>
        </ul>
      </div>
      <div class="message-response-container">
        <div class="message-item">
          <div class="response-person-start">
            <img src="@/assets/img/user/icon-user.png" alt="" />
          </div>
          <div class="response-person-end">
            <span>回复人姓名 回复了我的评论</span>
            <span>回复内容</span>
            <footer><span>回复时间</span><span>回复（我再回他）</span><span>给他点赞</span></footer>
            <div class="my-comment-context">我的评论内容</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-container {
  background-color: pink;
  .content-container {
    height: 200px;
    display: flex;
    width: 80%;
    background-color: #fff;
    height: 80%;
    margin: 0 auto;
  }
  .left-container {
    width: 200px;
  }
  .message-response-container {
    flex: 1;
    .message-item {
      display: flex;
      background-color: aqua;
      .response-person-start {
        height: 50px;
        width: 50px;
        margin-right: 50px;
        img {
          width: 100%;
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
