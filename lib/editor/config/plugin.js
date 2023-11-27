import 'tinymce/models/dom'


import 'tinymce/plugins/accordion'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/image'
import 'tinymce/plugins/importcss'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/quickbars'
import 'tinymce/plugins/save'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/table'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/wordcount'

const plugins =
  'accordion, advlist, anchor, autolink, autoresize, autosave, charmap, code, codesample, directionality, fullscreen, image, importcss, insertdatetime, link, lists, media, nonbreaking, pagebreak, preview, quickbars, save, searchreplace, table, visualblocks, visualchars, wordcount'

const configPaste = {
  paste_auto_cleanup_on_paste: false,
  paste_remove_styles: false,
  paste_remove_styles_if_webkit: false,
  paste_strip_class_attributes: false,
  paste_data_images: true,
  powerpaste_word_import: 'clean'
}
export const configPlugin = {
  ...configPaste,
  plugins,
  code_dialog_height: 450,
  code_dialog_width: 1000,
  advlist_bullet_styles: 'square',
  advlist_number_styles: 'default'
}
