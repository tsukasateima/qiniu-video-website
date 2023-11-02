<script setup lang="ts">
import { pa } from 'element-plus/es/locale/index.mjs'
import { FcTypingInput, FcUnderlineBtn } from 'fancy-components'
import { ref } from 'vue'
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
const confirmLogin = () => {
  console.log(userName.value, password.value)
}
const cancelLogin = () => {
  console.log('cancel')
}
const show = true
</script>

<template>
  <el-dialog v-model="show" class="login-container" :width="550">
    <div class="login-context-container">
      <div class="login-header">账号登录</div>
      <div class="login-form">
        <fc-typing-input placeholder="UserName" @input="userNameInput"></fc-typing-input>
        <fc-typing-input
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
  </el-dialog>
</template>

<style lang="scss" scoped>
.login-container {
  height: 350px;
}
.login-context-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .login-header {
    font-size: 20px;
    font-weight: 600;
    color: $main-color;
    line-height: 20px;
    text-align: center;
    margin-bottom: 40px;
    text-shadow: #9f83d3 2px 5px 20px;
  }
  .login-form {
    width: 60%;

    fc-typing-input {
      --width: (100%);
      &:nth-of-type(1) {
        margin-bottom: 20px;
      }
    }
  }
  .login-bottom {
    display: flex;
    margin-top: 30px;
    fc-underline-btn {
      --color: #6946ab;
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
