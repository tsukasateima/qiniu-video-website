import request from '@/utils/request'
// 获取搜索热搜词列表
export function getSearchHotList() {
  return request({
    url: '/hotlist'
  })
}
