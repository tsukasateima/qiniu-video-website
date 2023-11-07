import { defineStore } from 'pinia'
import { login, getFollows } from '@/api/user'

interface loginParams {
  username: string
  password: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      userInfo: {
        avatar: '',
        email: '',
        id: '',
        nickName: '',
        sex: ''
      },
      follows: 0,
      followeds: 0
    }
  },
  actions: {
    async loginFn(data: loginParams) {
      // 先登录 不成功就返回去
      const { token, userInfo } = (await login(data)) as any
      this.token = token
      this.userInfo = userInfo
      const { follows, followeds } = (await getFollows()) as any
      this.follows = follows
      this.followeds = followeds
    },
    logout() {
      this.token = ''
      this.userInfo = {
        avatar: '',
        email: '',
        id: '',
        nickName: '',
        sex: ''
      }
      this.follows = 0
      this.followeds = 0
    },
    isLogin() {
      return this.token !== ''
    }
  },
  persist: true
})
