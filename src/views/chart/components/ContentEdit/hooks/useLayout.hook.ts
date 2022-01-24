import { onUnmounted, onMounted } from 'vue'
import { getChartEditStore } from './useStore.hook'
import { EditCanvasTypeEnum } from '@/store/modules/chartEditStore/chartEditStore.d'

const chartEditStore = getChartEditStore()

export const useLayout = () => {
  onMounted(() => {
    // 设置 Dom 值(ref 不生效先用document)
    chartEditStore.setEditCanvasItem(
      EditCanvasTypeEnum.EDITLAYOUTDOM,
      document.getElementById('go-chart-edit-layout')
    )
    chartEditStore.setEditCanvasItem(
      EditCanvasTypeEnum.EDITCONTENTDON,
      document.getElementById('go-chart-edit-content')
    )

    // 大小初始化
    chartEditStore.setPageSize()

    // 监听初始化
    const removeScale = chartEditStore.listenerScale()

    onUnmounted(() => {
      removeScale()
    })
  })
}
