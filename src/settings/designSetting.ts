import { LangEnum } from '@/enums/styleEnum'

// 默认语言
export const lang = LangEnum.zh

// 语言数组
export const langList = [
  {
    label: '中文',
    key: LangEnum.zh
  },
  {
    label: 'English',
    key: LangEnum.en
  }
]

// 主体色
export const appThemeList: string[] = [
  '#2d8cf0',
  '#0960bd',
  '#0084f4',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
  '#FF3D68',
  '#00C1D4',
  '#71EFA3',
  '#171010',
  '#78DEC7',
  '#1768AC',
  '#FB9300',
  '#FC5404'
]

export const theme = {
  // 默认是否开启深色主题
  darkTheme: true,
  //系统主题色
  appTheme: '#51d6a9',
  //系统内置主题色列表
  appThemeList
}

// dialog 图标的大小
export const dialogIconSize = '20'

// 弹窗是否可以通过点击遮罩关闭
export const maskClosable = false

// 侧边栏宽度
export const asideWidth = '270'

// 侧边栏缩小后的宽度
// 建议 0 或者 60，已经适配好了
export const asideCollapsedWidth = '0'

// 修改边框圆角
export const borderRadius = '6px'

// 轮播间隔
export const carouselInterval = 4000
