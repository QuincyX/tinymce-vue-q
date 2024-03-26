<template>
  <div class="card">
    <TinyMceQ v-model="editorValue" />
  </div>
  <div class="card">
    <TinyMceQ v-model="editorValue2" />
  </div>
  <div class="card">
    <div class="container">{{ editorValue }}</div>
    <input v-model="editorValue" />
  </div>
  <div class="card">
    <div class="container">{{ editorValue2 }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const editorValue = ref('')
const editorValue2 = ref('')

onMounted(() => {
  setTimeout(() => {
    editorValue.value = '<p>hello world</p>'
    editorValue2.value = '<p>hello world</p>'
  }, 3000)
})
</script>

<style scoped>
.card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
