import { echartOptionProfixHandle, publicConfig } from '@/packages/public'
import { LineGradientSingleConfig } from './index'
import { CreateComponentType } from '@/packages/index.d'
import { graphic } from 'echarts/core'
import omit from 'lodash/omit'

export const includes = ['legend', 'xAxis', 'yAxis']

const options = echartOptionProfixHandle(
  {
    legend: {
      show: true
    },
    xAxis: {
      show: true,
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      show: true,
      type: 'value'
    },
    series: [
      {
        name: 'data1',
        type: 'line',
        smooth: false,
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(25,163,223,.3)'
            },
            {
              offset: 1,
              color: 'rgba(25,163,223, 0)'
            }
          ])
        },
        data: [120, 200, 150, 80, 70, 110, 130]
      }
    ]
  },
  includes
)

export default class Config extends publicConfig
  implements CreateComponentType {
  public key: string = LineGradientSingleConfig.key
  public chartConfig = omit(LineGradientSingleConfig, ['node'])
  // 图表配置项
  public option = options
}
