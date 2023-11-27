import tinyMceQ from './editor/index.vue'
import { useGlobalConfig } from './provider/config.js'

export default function (app, options) {
  if (!app) return
  app.component('TinyMceQ', tinyMceQ)
  if (options) {
    useGlobalConfig(options)
  }
}
