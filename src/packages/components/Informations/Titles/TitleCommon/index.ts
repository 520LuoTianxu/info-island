import TitleCommon from './index.vue'
import Configuration from './config.vue'
import image from '@/assets/images/chart/informations/title_diamond.png'
import { ConfigType, PackagesCategoryEnum } from '@/packages/index.d'
import { ChatCategoryEnum,ChatCategoryEnumName } from '../../index.d'

export const TitleCommonConfig: ConfigType = {
  key: 'VText',
  conKey: 'VCText',
  title: '普通标题',
  category: ChatCategoryEnum.TITLE,
  categoryName: ChatCategoryEnumName.TITLE,
  package: PackagesCategoryEnum.INFORMATION,
  node: () => TitleCommon,
  conNode: () => Configuration,
  image
}