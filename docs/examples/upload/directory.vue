<template>
  <g-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    directory
    multiple
    :on-change="handleChange"
  >
    <g-icon class="g-icon--upload"><upload-filled /></g-icon>
    <div class="g-upload__text">
      Drop directory here or <em>click to upload</em>
    </div>
  </g-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'

import type { UploadFile, UploadFiles } from 'element-plus'

const handleChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
</script>
