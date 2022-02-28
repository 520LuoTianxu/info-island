import Weather from './index.vue'
import Configuration from './config.vue'
import image from '@/assets/images/chart/decorates/weather.png'
import { ConfigType, PackagesCategoryEnum } from '@/packages/index.d'
import { ChatCategoryEnum,ChatCategoryEnumName } from '../../index.d'

export const WeatherConfig: ConfigType = {
  key: 'VWeather',
  title: '天气',
  category: ChatCategoryEnum.MORE,
  categoryName: ChatCategoryEnumName.MORE,
  package: PackagesCategoryEnum.DECORATES,
  node: Weather,
  conNode: () => Configuration,
  image
}
