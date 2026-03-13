<template>
  <g-upload action="#" list-type="picture-card" :auto-upload="false">
    <g-icon><Plus /></g-icon>

    <template #file="{ file }">
      <div>
        <img class="g-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="g-upload-list__item-actions">
          <span
            class="g-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <g-icon><zoom-in /></g-icon>
          </span>
          <span
            v-if="!disabled"
            class="g-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <g-icon><Download /></g-icon>
          </span>
          <span
            v-if="!disabled"
            class="g-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <g-icon><Delete /></g-icon>
          </span>
        </span>
      </div>
    </template>
  </g-upload>

  <g-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </g-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>
