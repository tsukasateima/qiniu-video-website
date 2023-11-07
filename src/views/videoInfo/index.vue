<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getVideo, videoLike, goComment, getCommentList, getRecommendVideo } from '@/api/video'
import Video from './components/video.vue'
import { useUserStore } from '@/stores/user'
import CollectDialog from './components/collectDialog.vue'
import QiNiuVideoItem from '@/components/commonComponents/QiNiuVideoItem.vue'
const userStore = useUserStore()
const commentVal = ref('')
// 获取path参数
const { path } = useRoute()
const videoId = ref(path.split('/')[2])
const videoInfos = ref({}) as any
const like = ref('0') // 1是点赞 0是取消
const getVideoInfo = async () => {
  const res = await getVideo({ videoId: videoId.value })
  videoInfos.value = res as any
}
const handleLike = async () => {
  if (like.value === '0') {
    like.value = '1'
  } else {
    like.value = '0'
  }
  await videoLike({ videoId: videoId.value, isLike: like.value })
}
getVideoInfo()
const commentData = reactive({
  videoId: '',
  userId: '',
  nickName: '',
  rootId: '',
  toCommentId: '',
  toCommentUserId: '',
  toCommentUserNickName: '',
  content: ''
})
const goCommentToVideo = async () => {
  commentData.videoId = videoId.value
  commentData.userId = userStore.userInfo.id
  commentData.nickName = userStore.userInfo.nickName
  commentData.content = commentVal.value
  commentData.rootId = '-1'
  commentData.toCommentId = '-1'
  commentData.toCommentUserId = '-1'
  commentData.toCommentUserNickName = '-1'

  await goComment(commentData)
    .then(() => {
      commentVal.value = ''
      ElMessage.success('评论成功')
    })
    .catch(() => {})
}
const dialog = ref() as any
const handelStar = () => {
  console.log('收藏')
  console.log(dialog.value)
  dialog.value.openDialog()
}
// 评论的分页
const commentPage = ref(1)
const commentSize = ref(10)
const commentTotal = ref(0)
const commentList = ref([]) as any
// 获取数据
const getCommentListData = async () => {
  const params = {
    videoId: videoId.value,
    pageSize: commentSize.value,
    pageNum: commentPage.value
  }
  const { rows, total } = (await getCommentList(params)) as any
  commentList.value.push(...rows)
  console.log(commentList.value)
  commentTotal.value = Number(total)
}
// 加载新页
const loadNewPage = async () => {
  if (commentPage.value * commentSize.value > commentTotal.value) {
    return
  } else {
    commentPage.value++
    getCommentListData()
  }
}
getCommentListData()
const recommendVideoList = ref([]) as any // 推荐视频列表
const getRecommendVideoData = async () => {
  const { rows, total } = (await getRecommendVideo(videoId.value)) as any
  recommendVideoList.value.push(...rows)
}
getRecommendVideoData()
</script>

<template>
  <collect-dialog :videoId="videoId" ref="dialog" />
  <div class="video-container">
    <div class="start-container">
      <div class="video-container">
        <div class="video-title">
          <h2>{{ videoInfos.title }}</h2>
        </div>
        <div class="video-info">
          <span><svg-icon name="smallVideo" class="video-icon" />{{ videoInfos.viewCount }}</span>
          <span>{{ videoInfos.createTime }}</span>
        </div>
        <div class="video">
          <Video src="https://media.w3.org/2010/05/sintel/trailer.mp4" />
        </div>
        <div class="tools-container">
          <div class="like" @click="handleLike" :class="{ active: like === '1' }">
            <svg-icon name="like" class="like-icon" />点赞
          </div>
          <div class="star" @click="handelStar"><svg-icon name="star" class="star-icon" />收藏</div>
        </div>
      </div>
      <div class="comment-list" v-if="videoInfos.isComment === '1'">
        <div class="my-comment-container">
          <img :src="userStore.userInfo.avatar" alt="" />
          <el-input
            class="comment-input"
            rows="1"
            v-model="commentVal"
            aria-placeholder="填写评论"
          ></el-input>
          <el-button type="primary" style="margin-left: 15px" @click="goCommentToVideo"
            >发布</el-button
          >
        </div>
        <div
          class="video-comment-list"
          v-infinite-scroll="loadNewPage"
          :v-infinite-scroll-distance="400"
        >
          <div class="video-comment-list-item" v-for="item in commentList" :key="item.id">
            <img src="@/assets/img/user/icon-user.png" alt="" />
            <div class="video-comment-list-item-info">
              <span>{{ item.toCommentUserNickName }}</span>
              <span>{{ item.content }}</span>
              <div class="interaction-container">
                <span>{{ item.createTime }}</span>
                <span
                  ><svg-icon name="like" class="like-icon" />点赞&nbsp;&nbsp;{{ item.likes }}</span
                >
                <span><svg-icon name="comment" class="comment-icon" />回复</span>
              </div>

              <div class="item-children-list" v-if="item.childern.length > 0">
                <div class="item-child" v-for="child in item.childern" :key="child.id">
                  <img src="@/assets/img/user/icon-user.png" alt="" />
                  <div class="children-info">
                    <span>{{ item.toCommentUserNickName }}</span>
                    <span>{{ item.content }}</span>
                    <div class="child-interaction">
                      <span>{{ child.createTime }}</span>
                      <span
                        ><svg-icon name="like" class="like-icon" />点赞&nbsp;&nbsp;{{
                          item.likes
                        }}</span
                      >
                      <span><svg-icon name="comment" class="comment-icon" />回复</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="not-comment" v-if="videoInfos.isComment === '0'">该视频评论区已关闭</div>
    </div>
    <div class="end-container">
      <span>推荐视频</span>
      <div class="video" v-for="video in recommendVideoList" :key="video.id">
        <QiNiuVideoItem :video="video" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  display: flex;
  width: 80%;
  margin: 0 auto;
  .start-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: pink;
    .video-container {
      display: flex;
      flex-direction: column;
      .video-title {
        h2 {
          font-weight: normal;
          &:hover {
            color: $main-deep-pink;
          }
        }
      }
      .video-info {
        display: flex;
        span {
          margin-bottom: 15px;
          color: #999;
          .video-icon {
            height: 15px;
            margin-bottom: -3px;
          }
          &:nth-of-type(1) {
            margin-right: 5px;
          }
          &:hover {
            color: $main-deep-pink;
          }
        }
      }
      .video {
        width: 100%;
        aspect-ratio: 16/9;
        background-color: #fff;
      }
      .tools-container {
        display: flex;
        height: 50px;
        background-color: #fff;
        margin-top: 30px;
        padding-left: 5px;
        .like,
        .star {
          margin-right: 15px;
          font-size: 25px;
          line-height: 30px;
          padding: 12px 0;
          &:hover {
            color: #999;
          }
        }
        .like-icon,
        .star-icon {
          margin-right: 5px;
          margin-bottom: -2px;
        }
        .active {
          color: $main-deep-pink;
          &:hover {
            color: $main-deep-pink;
          }
        }
      }
    }
    .comment-list {
      width: 80%;
      margin: 0 auto;
      margin-top: 100px;
      .my-comment-container {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .comment-input {
          height: 60px;
        }
      }
      .video-comment-list {
        display: flex;
        flex-direction: column;
        .video-comment-list-item {
          display: flex;
          margin-bottom: 40px;
          border-bottom: 1px solid #e3e5e7;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .video-comment-list-item-info {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            span {
              margin-bottom: 10px;
            }
            .interaction-container {
              display: flex;
              span {
                margin-right: 15px;
                &:hover {
                  color: #746f6f;
                }
              }
              .like-icon {
                margin-bottom: -2px;
              }
              .comment-icon {
                margin-bottom: -3px;
                margin-right: 3px;
              }
            }
          }
          .hover {
            &:hover {
              color: $main-deep-pink;
            }
          }
        }

        // 子评论
        .item-children-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          .item-child {
            margin-bottom: 20px;
            display: flex;
            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              margin-right: 20px;
            }
            &:last-child {
              .children-info {
                border-bottom: none;
              }
            }
            .children-info {
              width: 100%;
              display: flex;
              flex-direction: column;
              margin-left: 10px;
              border-bottom: 1px solid #e3e5e7;
              span {
                margin-bottom: 10px;
              }
              .child-interaction {
                display: flex;
                span {
                  margin-right: 15px;
                  &:hover {
                    color: #746f6f;
                  }
                }
                .like-icon {
                  margin-bottom: -2px;
                }
                .comment-icon {
                  margin-bottom: -3px;
                  margin-right: 3px;
                }
              }
            }
          }
        }
      }
    }
    .not-comment {
      width: 80%;
      margin: 0 auto;
      margin-top: 30px;
      height: 50px;
      background-color: #fff;
      color: #999;
      font-size: 20px;
      line-height: 50px;
      &:hover {
        color: #746f6f;
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
