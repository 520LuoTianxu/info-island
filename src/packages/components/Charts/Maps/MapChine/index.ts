import MapChine from './index.vue'
import image from '@/assets/images/chart/charts/map.png'
import { ConfigType, PackagesCategoryEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'

export const MapChineConfig: ConfigType = {
  key: 'VMapChine',
  title: '北京地图',
  category: ChatCategoryEnum.MAP,
  categoryName: ChatCategoryEnumName.MAP,
  package: PackagesCategoryEnum.CHARTS,
  node: MapChine,
  image: image
}
