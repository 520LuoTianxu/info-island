import { LangEnum } from '@/enums/styleEnum'
import designColor from './designColor.json'

// 默认语言
export const lang = LangEnum.zh


export const theme = {
  // 默认是否开启深色主题
  darkTheme: true,
  //默认主题色
  appTheme: '#51d6a9',
  appThemeDetail: null,
}

// dialog 图标的大小
export const dialogIconSize = '20'

// 侧边栏宽度
export const asideWidth = '270'

// 侧边栏折叠后的宽度，支持全部折叠会覆盖为 0
export const asideCollapsedWidth = 60

// 弹窗是否可以通过点击遮罩关闭
export const maskClosable = false

// 修改边框圆角
export const borderRadius = '6px'

// 轮播间隔
export const carouselInterval = 4000

// 工作台大屏背景图片大小限制（5M）
export const backgroundImageSize = 5