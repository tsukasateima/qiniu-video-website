<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref, reactive, watch } from 'vue'
import { getSearchHotList } from '@/api/search'
import { useHistorySearchWordStore } from '@/stores/history'
import { nanoid } from 'nanoid'
import useClickOutside from '@/utils/useClickOutside'
const searchValue = ref('')
const showInfos = ref(false)
const searchInput = ref(null) as any
const searchContainer = ref(null) as any
const historySearchWordStore = useHistorySearchWordStore()
interface HistoryItem {
  id: string
  name: string
}
const historyWords = ref([] as HistoryItem[])
historyWords.value = historySearchWordStore.historySearchWordList
const hotList = ref([])
const getHotList = async () => {
  const { list } = (await getSearchHotList()) as any
  hotList.value = list
  console.log(list)
}
const searchVideos = () => {
  // 新增历史
  historySearchWordStore.addHistoryWord({ id: nanoid(), name: searchValue.value })
  // 清空搜索框
  searchValue.value = ''
  // 搜索框失焦
  searchInput.value.blur()
  // 不展示搜索信息
  showInfos.value = false
  // 跳转页面进行搜索
}
const handleHistoryClose = (tag: any) => {
  historySearchWordStore.deleteHistoryWord(tag)
  historyWords.value = historySearchWordStore.historySearchWordList
}
getHotList()
const isClickOutSide = useClickOutside(searchContainer)
watch(isClickOutSide, (newVal) => {
  if (newVal) {
    showInfos.value = false
  }
})
const clearHistory = () => {
  historySearchWordStore.clearHistoryWord()
  historyWords.value = historySearchWordStore.historySearchWordList
}
</script>

<template>
  <div class="search-container" ref="searchContainer">
    <el-input
      ref="searchInput"
      @keyup.enter="searchVideos"
      @focus="showInfos = true"
      placeholder="请输入搜索内容"
      v-model="searchValue"
      size="large"
      :prefix-icon="Search"
    ></el-input>

    <div class="search-info" v-show="showInfos">
      <div class="search-history-container">
        <div class="history-header">
          <span>搜索历史</span>
          <span @click="clearHistory">清空</span>
        </div>
        <div class="history-list">
          <el-tag
            style="margin-right: 15px"
            v-for="history in historyWords"
            :key="history.id"
            round
            closable
            @close="handleHistoryClose(history)"
            >{{ history.name }}</el-tag
          >
        </div>
      </div>
      <div class="hot-search-container">
        <div class="hot-header">
          <span>热搜词条</span>
        </div>
        <div class="hot-search-list">
          <div class="list-item" v-for="(hotWord, i) in hotList" :key="i">
            <span>{{ i + 1 }}. {{ hotWord }} </span>
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
    }
    .hot-search-container {
      .hot-header {
        margin-top: 20px;
        margin-bottom: 15px;
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
          &:hover {
            color: $main-color;
          }
        }
      }
    }
  }
}
</style>
