import { publicConfig } from '@/packages/public'
import { CreateComponentType } from '@/packages/index.d'
import { Border06Config } from './index'
import cloneDeep from 'lodash/cloneDeep'

export const option = {
  colors: ['#3140ad', '#1089ff']
}

export default class Config extends publicConfig implements CreateComponentType {
  public key = Border06Config.key
  public chartConfig = cloneDeep(Border06Config)
  public option = option
}
