# TinyMCE Vue Q

> simple, fast, all in one


### Installation

```
npm i @quincyx/tinymce-vue-q
```

### Quick Example

import
```
// src/main.js

import tinyMceQ from '@quincyx/tinymce-vue-q'

app.use(tinyMceQ)
```

usage
```
// src/App.vue

<template>
  <TinyMceQ v-model="editorValue" />
</template>

<script setup>
import { ref } from 'vue'
const editorValue = ref('')
</script>
```

### Dependency

- vite >= 4.0
- vue >= 3.0

### Includes

- tinyMCE official release (by npm)
- tinyMCE official plugin
- default theme config
- some optimize config

### Current

- tinymce v6.8

### TODO

- [ ] optimize content-css
- [ ] optimize icons
- [ ] image upload handler
- [ ] powerPaste
