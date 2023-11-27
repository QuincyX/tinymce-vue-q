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
import '@quincyx/tinymce-vue-q/dist/style.css'

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

### Options

change default language
```
app.use(tinyMceVueQ, { language: 'en' })
```


### Dependency

- vite >= 4.0
- vue >= 3.0

### Includes

- tinyMCE official release (by npm)
- tinyMCE official plugin
- default theme config
- default locale: zh_CN
- some optimize config
- allow multiple instance

### Current

- tinymce v6.8

### TODO

- [ ] optimize content-css
- [ ] optimize icons
- [ ] image upload handler
- [ ] powerPaste
