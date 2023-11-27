<template>
  <div class="card">
    <TinyMceQ v-model="editorValue" />
  </div>
  <div class="card">
    <div class="container">{{ editorValue }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const editorValue = ref('')
</script>

<style scoped>
.card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
