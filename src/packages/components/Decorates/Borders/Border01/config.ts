import { publicConfig } from '@/packages/public'
import { CreateComponentType } from '@/packages/index.d'
import { Border01Config } from './index'
import cloneDeep from 'lodash/cloneDeep'

export const option = {
  dur: 0.5,
  colors: ['#4fd2dd', '#235fa7']
}

export default class Config extends publicConfig implements CreateComponentType {
  public key = Border01Config.key
  public chartConfig = cloneDeep(Border01Config)
  public option = option
}
