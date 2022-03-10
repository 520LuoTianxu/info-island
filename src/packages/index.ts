import type { App } from 'vue'
import { ChartList } from '@/packages/components/Charts/index'
import { DecorateList } from '@/packages/components/Decorates/index'
import { InformationList } from '@/packages/components/Informations/index'
import { TableList } from '@/packages/components/Tables/index'
import {
  PackagesCategoryEnum,
  PackagesType,
  ConfigType,
  FetchComFlagType
} from '@/packages/index.d'

const configModules = import.meta.globEager("./components/**/config.vue")
const indexModules = import.meta.globEager("./components/**/index.vue")

// * 所有图表
export let packagesList: PackagesType = {
  [PackagesCategoryEnum.CHARTS]: ChartList,
  [PackagesCategoryEnum.INFORMATION]: InformationList,
  [PackagesCategoryEnum.TABLES]: TableList,
  [PackagesCategoryEnum.DECORATES]: DecorateList
}

export const packgeInstall = (app:App) => {
  ChartList.forEach(e=>{
    console.log(e)
    app.component(e.key, e.node)
  })
}

/**
 * * 获取目标拖拽组件配置信息
 * @param dropData
 */
 export const createComponent = async (dropData: ConfigType) => {
  const { category } = dropData
  const key = dropData.key.substring(1)
  const chart = await import(`./components/${dropData.package}/${category}/${key}/config.ts`)
  return new chart.default()
}

/**
 * * 获取组件
 * @param {string} chartName 名称
 * @param {FetchComFlagType} flag 标识 0为展示组件, 1为配置组件
 */
const fetchComponent = (chartName: string, flag: FetchComFlagType) => {
  chartName = chartName.substring(1)
  const module = flag === FetchComFlagType.VIEW ? indexModules: configModules
  for (const key in module) {
    const urlSplit = key.split('/')
    if(urlSplit[urlSplit.length -2 ] === chartName) {
      return module[key]
    }
  }
}

/**
 * * 获取展示组件
 * @param {ConfigType} dropData 配置项
 */
 export const fetchChartComponent = (dropData: ConfigType) => {
  const { key } = dropData
  return fetchComponent(key, FetchComFlagType.VIEW)?.default
}

/**
 * * 获取配置组件
 * @param {ConfigType} dropData 配置项
 */
 export const fetchConfigComponent = (dropData: ConfigType) => {
  const { key } = dropData
  return fetchComponent(key, FetchComFlagType.CONFIG)?.default
}