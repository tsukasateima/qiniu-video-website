<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const searchValue = ref('')
</script>

<template>
  <div class="search-container">
    <el-input
      placeholder="请输入搜索内容"
      v-model="searchValue"
      size="large"
      :prefix-icon="Search"
    ></el-input>
    <div class="search-info">
      <div class="search-history-container">
        <span>搜索历史</span>
        <div class="history-list">
          <span>这个我本地存</span>
        </div>
      </div>
      <div class="hot-search-container">
        <span>热搜词条</span>
        <div class="hot-search-list">
          <span>这个从你们那拉</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  display: flex;
  .search-info {
    width: 450px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: 250px;
    top: 43px;
    z-index: 999;
  }
}
</style>
