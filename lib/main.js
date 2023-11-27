import tinyMceQ from './editor/index.vue'

export default app => {
  if (!app) return
  app.component('TinyMceQ', tinyMceQ)
}
