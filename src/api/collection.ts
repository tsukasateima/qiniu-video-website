import request from '@/utils/request'

// 获取收藏夹
export function getCollectionTree() {
  return request({
    url: '/collect/Tree',
    method: 'get'
  })
}

// 获取收藏夹下面的视频
interface Collection {
  collectTreeId: string
  pageSize: number
  pageNum: number
}
export function getCollectionVideos(params: Collection) {
  return request({
    url: `/collect/collectVideo`,
    method: 'get',
    params
  })
}

// 将视频添加到收藏夹
export function addVideoToCollection(data: any) {
  return request({
    url: '/collect',
    method: 'post',
    data
  })
}
