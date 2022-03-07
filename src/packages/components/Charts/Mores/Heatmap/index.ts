import Heatmap from './index.vue'
import Configuration from './config.vue'
import image from '@/assets/images/chart/charts/heatmap.png'
import { ConfigType, PackagesCategoryEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'

export const HeatmapConfig: ConfigType = {
  key: 'VHeatmap',
  conKey: 'VCHeatmap',
  title: '热力图',
  category: ChatCategoryEnum.MORE,
  categoryName: ChatCategoryEnumName.MORE,
  package: PackagesCategoryEnum.CHARTS,
  node: () => Heatmap,
  conNode: () => Configuration,
  image: image
}
