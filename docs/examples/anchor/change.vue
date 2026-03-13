<template>
  <g-anchor :offset="70" @change="handleChange">
    <g-anchor-link :href="`#${locale['basic-usage']}`">
      {{ locale['Basic Usage'] }}
    </g-anchor-link>
    <g-anchor-link :href="`#${locale['horizontal-mode']}`">
      {{ locale['Horizontal Mode'] }}
    </g-anchor-link>
    <g-anchor-link :href="`#${locale['scroll-container']}`">
      {{ locale['Scroll Container'] }}
    </g-anchor-link>
    <g-anchor-link :href="`#${locale['anchor-api']}`">
      {{ locale['Anchor API'] }}
      <template #sub-link>
        <g-anchor-link :href="`#${locale['anchor-attributes']}`">
          {{ locale['Anchor Attributes'] }}
        </g-anchor-link>
        <g-anchor-link :href="`#${locale['anchor-events']}`">
          {{ locale['Anchor Events'] }}
        </g-anchor-link>
      </template>
    </g-anchor-link>
  </g-anchor>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import anchorLocale from '../../.vitepress/i18n/component/anchor.json'
import { useLang } from '~/composables/lang'

const lang = useLang()
const locale = computed(() => anchorLocale[lang.value])

const handleChange = (href: string) => {
  console.log(`anchor change: ${href}`)
}
</script>
