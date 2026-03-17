<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  content: { type: String, required: true },
})

const htmlTagRE = /<\/?[a-z][\s\S]*>/i

const escapeHtml = (content: string) =>
  content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const parsed = computed(() => {
  const content = props.content?.trim() ?? ''

  if (!content) return ''

  if (htmlTagRE.test(content)) return content

  // Fallback for plain text when body_html is unavailable.
  return escapeHtml(content).replace(/\n/g, '<br />')
})
</script>

<template>
  <div class="markdown-wrapper" v-html="parsed" />
</template>

<style>
.markdown-wrapper h3 {
  margin-top: 1rem;
}
</style>
