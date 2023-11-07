<script setup lang="ts">
import { FcTypingInput, FcUnderlineBtn } from 'fancy-components'
import { ref, defineProps, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
new FcTypingInput()
new FcUnderlineBtn()
const userName = ref('')
const password = ref('')
const passwordInput = (e: any) => {
  password.value = e.target.value
}
const userNameInput = (e: any) => {
  userName.value = e.target.value
}
const viewportHeight = ref(0)
onMounted(() => {
  viewportHeight.value = window.innerHeight
})
const confirmLogin = async () => {
  const res = await userStore.loginFn({ username: userName.value, password: password.value })
  router.push('/')
}
const cancelLogin = () => {
  password.value = ''
  userName.value = ''
  router.push('/')
}
</script>

<template>
  <div class="login-container" :style="{ height: viewportHeight + 'px' }">
    <div class="login-context-container">
      <div class="login-header">账号登录</div>
      <div class="login-form">
        <fc-typing-input placeholder="UserName" @input="userNameInput" white></fc-typing-input>
        <fc-typing-input
          white
          placeholder="Password"
          type="password"
          @input="passwordInput"
        ></fc-typing-input>
      </div>
      <div class="login-bottom">
        <fc-underline-btn @click="confirmLogin">确认</fc-underline-btn>
        <fc-underline-btn @click="cancelLogin">取消</fc-underline-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  background: linear-gradient(180deg, $main-color, $main-pink);
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.login-context-container {
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .login-header {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    line-height: 20px;
    text-align: center;
    margin-bottom: 40px;
    text-shadow: #9f83d3 2px 5px 20px;
  }
  .login-form {
    width: 60%;

    fc-typing-input {
      --width: (100%);
      --height: 60px;
      &:nth-of-type(1) {
        margin-bottom: 20px;
      }
    }
  }
  .login-bottom {
    display: flex;
    margin-top: 30px;
    fc-underline-btn {
      --color: #fff;
      &:nth-of-type(1) {
        margin-right: 20px;
      }
      &:nth-of-type(2) {
        --color: #dc362e;
      }
    }
  }
}
</style>
