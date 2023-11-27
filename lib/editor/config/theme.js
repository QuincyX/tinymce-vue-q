import 'tinymce/themes/silver/theme'

import 'tinymce/icons/default'

import '../skins/oxide/skin.min.css'
import '../skins/oxide/content.min.css'

const font_formats =
  '苹方=PingFangSC,sans-serif; 雅黑=Microsoft Yahei; 黑体=SimHei; 宋体=SimSun; 仿宋=FangSong; 幼圆=YouYuan; 隶书=LiSu; 华文黑体=STHeiti; 华文细黑=STXihei;  华文楷体=STKaiti; 华文宋体=STSong; 华文仿宋=STFangsong 华文彩云=华文彩云; 华文行楷=华文行楷; 华文新魏=STXinwei; 方正舒体=FZShuTi; 方正姚体=FZYaoti'
const toolbar =
  'undo redo | blocks fontsize | bold italic underline strikethrough | forecolor backcolor removeformat | align lineheight | numlist bullist indent outdent | link image media table charmap '
const content_style = 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } img {max-width:100%;}'

export const configTheme = {
  content_style,
  skin: false,
  content_css: false,
  toolbar,
  font_formats,
  min_height: 500,
  menubar: true,
  branding: false,
  promotion: false,
  elementpath: false,
  contextmenu_never_use_native: true,
  convert_urls: false,
  object_resizing: true,
  link_title: false,
  nonbreaking_force_tab: true,
  end_container_on_empty_block: true,
  default_link_target: '_blank',
  toolbar_mode: 'wrap'
}
