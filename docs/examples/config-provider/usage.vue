<template>
  <div>
    <g-button mb-2 @click="toggle">Switch Language</g-button>
    <br />

    <g-config-provider :locale="locale">
      <g-table mb-1 :data="[]" />
      <g-pagination :total="100" />
    </g-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
