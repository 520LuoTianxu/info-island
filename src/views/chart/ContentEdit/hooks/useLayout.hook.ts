import { onUnmounted, onMounted, ref, nextTick } from 'vue'
import { getChartEditStore } from './useStore.hook'
import { EditCanvasTypeEnum } from '@/store/modules/chartEditStore/chartEditStore.d'

const chartEditStore = getChartEditStore()

// 布局处理
export const useLayout = () => {
  onMounted(() => {
    // 设置 Dom 值(ref 不生效先用 document)
    chartEditStore.setEditCanvasItem(
      EditCanvasTypeEnum.EDIT_LAYOUT_DOM,
      document.getElementById('go-chart-edit-layout')
    )
    chartEditStore.setEditCanvasItem(
      EditCanvasTypeEnum.EDIT_CONTENT_DOM,
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