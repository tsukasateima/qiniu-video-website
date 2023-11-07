import request from '@/utils/request'
// 获取视频有多少分类
export function getVideoCateList() {
  return request({
    url: '/video/category',
    method: 'get'
  })
}

interface HotVideoListParams {
  pageSize: number
  pageNum: number
}
// 获取热门视频列表
export function getHotVideoList(params: HotVideoListParams) {
  return request({
    url: '/video/hotVideo',
    method: 'get',
    params
  })
}

// 根据分类获取视频列表
interface VideoListByCateParams {
  id: string
  pageNum: number
  pageSize: number
}
export function getVideoListByCate(params: VideoListByCateParams) {
  return request({
    url: `/video/getByCategory/${params.id}`,
    method: 'get',
    params
  })
}
