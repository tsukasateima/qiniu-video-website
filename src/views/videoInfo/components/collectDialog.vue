<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { getCollectionTree, addVideoToCollection } from '@/api/collection'
import { ElMessage } from 'element-plus'
const props = defineProps({
  videoId: {
    type: String,
    default: ''
  }
})
const showDialog = ref(false)
const tree = ref([]) as any
// 获取收藏夹
const collectionTree = async () => {
  tree.value = (await getCollectionTree()) as any
}
const checkedList = ref([]) as any
collectionTree()
const openDialog = () => {
  showDialog.value = true
}
const closeDialog = () => {
  showDialog.value = false
}
const addToTree = async () => {
  const params = {
    collectTreeId: checkedList.value,
    videoId: props.videoId
  }
  const res = await addVideoToCollection(params)
  closeDialog()
  ElMessage.success('添加成功')
}

defineExpose({
  openDialog,
  closeDialog
})
</script>

<template>
  <el-dialog v-model="showDialog" :width="600" @open="openDialog" @close="closeDialog">
    <template #header><header>添加到收藏夹</header> </template>
    <el-checkbox-group v-model="checkedList" class="checkbox-group-container">
      <el-checkbox v-for="item in tree" :label="item.collectTreeId" :key="item.collectTreeId">
        <div class="item-container">
          <span>{{ item.collectTreeName }}</span>
        </div>
      </el-checkbox>
    </el-checkbox-group>
    <el-button @click="addToTree" size="large" type="primary" class="add-btn"
      >+ 添加到收藏夹</el-button
    >
  </el-dialog>
</template>

<style lang="scss" scoped>
header {
  font-size: 18px;
  text-align: center;
}
.checkbox-group-container {
  display: flex;
  flex-direction: column;
  .item-container {
    font-size: 20px;
  }
}
.add-btn {
  margin-top: 40px;
  width: 50%;
  margin-left: 25%;
}
</style>
