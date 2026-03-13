<template>
  <g-anchor :offset="70" direction="horizontal">
    <g-anchor-link :href="`#${locale['basic-usage']}`">
      {{ locale['Basic Usage'] }}
    </g-anchor-link>
    <g-anchor-link :href="`#${locale['horizontal-mode']}`">
      {{ locale['Horizontal Mode'] }}
    </g-anchor-link>
    <g-anchor-link :href="`#${locale['scroll-container']}`">
      {{ locale['Scroll Container'] }}
    </g-anchor-link>
  </g-anchor>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import anchorLocale from '../../.vitepress/i18n/component/anchor.json'
import { useLang } from '~/composables/lang'

const lang = useLang()
const locale = computed(() => anchorLocale[lang.value])
</script>
