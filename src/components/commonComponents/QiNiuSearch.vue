<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
const searchValue = ref('')
const searchFocus = ref(false)
const searchInput = ref(null)
onMounted(() => {
  console.log(searchInput.value)
})
</script>

<template>
  <div class="search-container">
    <el-input
      ref="searchInput"
      @focus="searchFocus = true"
      @blur="searchFocus = false"
      placeholder="请输入搜索内容"
      v-model="searchValue"
      size="large"
      :prefix-icon="Search"
    ></el-input>

    <div class="search-info" v-show="searchFocus">
      <div class="search-history-container">
        <div class="history-header">
          <span>搜索历史</span>
          <span>清空</span>
        </div>
        <div class="history-list">
          <div class="history-item" v-for="i in 5" :key="i">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos itaque, nam odio
              illo fugit. Nisi dicta tempora vel ducimus sint? Laborum rerum dolorum excepturi esse
              odio nesciunt et quasi!</span
            >
          </div>
          <div class="history-item" v-for="i in 5" :key="i">
            <span>李克强ceus</span>
          </div>
        </div>
      </div>
      <div class="hot-search-container">
        <div class="hot-header">
          <span>热搜词条</span>
        </div>
        <div class="hot-search-list">
          <div class="list-item" v-for="i in 10" :key="i">
            <span
              >{{ i }}. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit dicta
              reprehenderit animi quaerat beatae rem repudiandae soluta minus. Deserunt nam illum
              officia animi commodi quia maiores minus labore nihil?
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  position: relative;
  border: 1.5px solid $main-deep-pink;
  display: flex;
  width: 100%;
  .search-info {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 30px;
    background-color: rgb(#ffffff, 95%);
    border: 1px solid #fff;
    border-radius: 8px;
    box-shadow: 2px 2px 250px #e3e5e7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 38px;
    z-index: 2;
    .history-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      span {
        &:nth-of-type(2) {
          color: #999;
        }
      }
    }
    .history-list {
      display: flex;
      flex-wrap: wrap;
      .history-item {
        background-color: rgba(#faeaea, 60%);
        border: 1px solid #e7e3e3;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 0 10px 5px 0;
        span {
          display: block;
          max-width: 130px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .hot-search-container {
      .hot-header {
        margin-top: 20px;
        margin-bottom: 5px;
      }
      .hot-search-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .list-item {
          width: 45%;
          height: 30px;
          span {
            display: block;
            font-weight: normal;
            height: 30px;
            line-height: 20px;
            max-width: 90%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
