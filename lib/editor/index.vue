<template>
  <div class="editorContainer">
    <textarea :id="editorId" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onActivated, onDeactivated, watch } from 'vue'
import tinymce from 'tinymce/tinymce'
import { nanoid } from 'nanoid'

import langZhCn from './langs/zh_CN.js'

import { configTheme } from './config/theme'
import { configPlugin } from './config/plugin'

import { globalConfig } from '../provider/config'

tinymce.addI18n('zh_CN', langZhCn)

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  height: {
    type: Number,
    default: 500
  }
})

let vueEditor = null
const editorId = `textareaContainer-${nanoid(10)}`
const isMounted = ref(false)

function initWrapper() {
  if (!tinymce) return
  tinymce.init({
    selector: `#${editorId}`,
    height: Number(props.height),
    language: globalConfig.value.language,
    ...configPlugin,
    ...configTheme
  })
  vueEditor = tinymce.activeEditor
  isMounted.value = true
  vueEditor.on('input', () => {
    emits('update:modelValue', vueEditor.getContent())
  })
  vueEditor.on('change', () => {
    emits('update:modelValue', vueEditor.getContent())
  })
  vueEditor.on('init', () => {
    vueEditor.setContent(props.modelValue)
  })
}
function removeWrapper() {
  tinymce.remove(vueEditor)
  isMounted.value = false
}

onMounted(() => {
  if (!isMounted.value) {
    initWrapper()
  }
})
onBeforeUnmount(() => {
  removeWrapper()
})
onActivated(() => {
  if (!isMounted.value) {
    initWrapper()
  }
})
onDeactivated(() => {
  removeWrapper()
})
</script>
