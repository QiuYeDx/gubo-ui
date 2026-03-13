<template>
  <g-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <g-button type="primary">select file</g-button>
    </template>

    <g-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </g-button>

    <template #tip>
      <div class="g-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </g-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { UploadInstance } from 'element-plus'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
