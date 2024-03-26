<template>
  <div class="editorContainer">
    <textarea :id="editorId" v-show="isMounted" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onActivated, onDeactivated, watch, nextTick } from 'vue'
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

let vueEditor = ref(null)
const editorId = `textareaContainer-${nanoid(10)}`
const isMounted = ref(false)

function initWrapper() {
  if (!tinymce) return
  tinymce.init({
    license_key: 'gpl',
    selector: `#${editorId}`,
    height: Number(props.height),
    language: globalConfig.value.language,
    ...configPlugin,
    ...configTheme,
    setup: editor => {
      vueEditor.value = editor
      editor.on('change input undo redo', () => {
        emits('update:modelValue', editor.getContent())
      })
      editor.on('init', () => {
        editor.setContent(props.modelValue || '', { format: 'raw' })
      })
      isMounted.value = true
    }
  })
}
function removeWrapper() {
  tinymce.remove(vueEditor.value)
  isMounted.value = false
}

function setContent(content) {
  nextTick(() => {
    if (vueEditor.value) {
      setTimeout(() => {
        vueEditor.value.setContent(content || props.modelValue || '', { format: 'raw' })
      }, 100)
    }
  })
}

defineExpose({
  setContent
})

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
