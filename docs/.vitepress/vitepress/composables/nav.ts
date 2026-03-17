import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLang } from './lang'

export const useNav = () => {
  const { theme } = useData()
  console.info('>>> theme', theme.value)
  const lang = useLang()

  return computed(() => {
    return theme.value.nav[lang.value]
  })
}
