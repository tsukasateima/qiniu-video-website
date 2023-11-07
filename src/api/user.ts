import request from '@/utils/request'

interface LoginParams {
  username: string
  password: string
}
// 登录
export function login(data: LoginParams) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
// 获取关注人数和粉丝人数
export function getFollows() {
  return request({
    url: '/follows',
    method: 'get'
  })
}
