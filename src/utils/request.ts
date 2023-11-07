import axios from 'axios'
import { ElMessage } from 'element-plus'
const baseURL = '/api'
const service = axios.create({
  baseURL,
  timeout: 10000
})
// 请求拦截器
service.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { code, data, msg } = response.data
    // if (code !== 200) {
    //   ElMessage.warning(success || result.message)
    //   return Promise.reject(new Error(success || result.message))
    // } else {
    //   return result
    // }
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
