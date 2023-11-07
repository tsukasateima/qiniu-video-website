import request from '@/utils/request'

interface VideoId {
  videoId: string
}
interface CommentData {
  videoId: string // 视频id
  userId: string // 用户id
  nickName: string // 用户昵称
  rootId: string // 评论根id
  toCommentId: string // 回复的评论id
  toCommentUserId: string // 回复的评论用户id
  toCommentUserNickName: string // 回复的评论用户昵称
  content: string // 评论内容
}

// 获取是你本身信息
export function getVideoInfo(params: VideoId) {
  return request({
    url: '/video',
    method: 'get',
    params
  })
}

// 获取视频
interface VideoParams {
  videoId: string
}
export function getVideo(params: VideoParams) {
  return request({
    url: '/video',
    method: 'get',
    params
  })
}

// 视频点赞
interface VideoLikeParams {
  videoId: string
  isLike: string // 1是点赞 0是取消
}
export function videoLike(data: VideoLikeParams) {
  return request({
    url: '/video/like',
    method: 'put',
    data
  })
}

// 视频收藏
interface VideoCollectParams {
  collectTreeId: string
  videoId: string // 1是收藏 0是取消
}
export function videoCollect(data: VideoCollectParams) {
  return request({
    url: '/collect',
    method: 'put',
    data
  })
}

// 评论
interface CommentParams {
  videoId: string
  userId: string
  nickName: string
  rootId: string
  toCommentId: string
  toCommentUserId: string
  toCommentUserNickName: string
  content: string
}
export function goComment(data: CommentParams) {
  return request({
    url: '/comment',
    method: 'post',
    data
  })
}

// 获取评论区
interface CommentListParams {
  videoId: string
  pageSize: number
  pageNum: number
}
export function getCommentList(params: CommentListParams) {
  return request({
    url: '/comment',
    method: 'get',
    params
  })
}

// 获取推荐视频
export function getRecommendVideo(id: string) {
  return request({
    url: `/video/recommend/${id}`,
    method: 'get'
  })
}
