import { ThemeEnum } from '@/enums/styleEnum'

export enum ChartLayoutStoreEnum {
  LAYERS = 'layers',
  CHARTS = 'charts',
  DETAILS = 'details',
  ALIGNLINE = 'alignLine',
}

export interface ChartLayoutType {
  // 图层控制
  [ChartLayoutStoreEnum.LAYERS]: boolean
  // 图表组件
  [ChartLayoutStoreEnum.CHARTS]: boolean
  // 详情设置
  [ChartLayoutStoreEnum.DETAILS]: boolean
  // 对齐线
  [ChartLayoutStoreEnum.ALIGNLINE]: boolean
}
