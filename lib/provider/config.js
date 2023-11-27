import { ref, computed } from 'vue'

export const globalConfig = ref({
  language: 'zh_CN',
  imageUploadHandle: null
})

export function useGlobalConfig(option) {
  if (option.language) {
    globalConfig.value.language = option.language
  }
}
