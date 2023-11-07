import request from '@/utils/request'

// 查看回复我的评论
export function responseMyMessage() {
  return request({
    url: '/commentView',
    method: 'get'
  })
}

// 查看我得到的赞
export function viewMyLike() {
  return request({
    url: '/commentLikes/details',
    method: 'get'
  })
}
