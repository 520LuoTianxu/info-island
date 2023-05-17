import { PackagesCategoryEnum } from '@/packages/index.d'
import { ImageConfig } from '@/packages/components/Informations/Mores/Image/index'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../index.d'

const photoConfig = {
  ...ImageConfig,
  category: ChatCategoryEnum.MY,
  categoryName: ChatCategoryEnumName.MY,
  package: PackagesCategoryEnum.PHOTOS,
  title: '20052Q04040923.png',
  image: 'https://img.phb123.com/uploads/allimg/200528/47-20052Q04040923.png',
  dataset: 'https://img.phb123.com/uploads/allimg/200528/47-20052Q04040923.png',
  virtualComponent: './components/Informations/Mores/Image' // 虚拟组件路径，尾部不跟 ‘/’，相对于 /packages/index.ts 文件的位置
}

export default [photoConfig, photoConfig, photoConfig, photoConfig, photoConfig]
