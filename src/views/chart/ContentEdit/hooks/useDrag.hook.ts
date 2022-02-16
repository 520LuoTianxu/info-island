import { toRefs } from 'vue'
import { DragKeyEnum } from '@/enums/editPageEnum'
import { createComponent } from '@/packages'
import { ConfigType } from '@/packages/index.d'
import { CreateComponentType } from '@/packages/index.d'
import { useContextMenu } from '@/views/chart/hooks/useContextMenu.hook'
import { getChartEditStore, getChartEditStoreEnum } from './useStore.hook'
import { loadingStart, loadingFinish, loadingError } from '@/utils'
import throttle from 'lodash/throttle'

const { onClickoutside } = useContextMenu()

const chartEditStore = getChartEditStore()
const chartEditStoreEnum = getChartEditStoreEnum()
const { scale } = toRefs(chartEditStore.getEditCanvas)

// * 拖拽到编辑区域里
export const handleDrag = async (e: DragEvent) => {
  e.preventDefault()

  try {
    loadingStart()
    // 获取拖拽数据
    const drayDataString = e!.dataTransfer!.getData(DragKeyEnum.DROG_KEY)
    if (!drayDataString) {
      loadingFinish()
      return
    }

    // 设置拖拽状态
    chartEditStore.setEditCanvas(chartEditStoreEnum.Is_Drag, false)

    const dropData: Exclude<ConfigType, ['node', 'image']> = JSON.parse(
      drayDataString
    )
    // 创建新图表组件
    let newComponent:CreateComponentType = await createComponent(dropData)

    newComponent.setPosition(e.offsetX - newComponent.attr.w / 2, e.offsetY - newComponent.attr.h / 2)
    chartEditStore.addComponentList(newComponent, false, true)
    chartEditStore.setTargetSelectChart(newComponent.id) 
    loadingFinish()
  } catch (error) {
    loadingError()
    window['$message'].warning(`图表正在研发中, 敬请期待...`)
  }
}

// * 拖拽中
export const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()

  // 设置拖拽状态
  chartEditStore.setEditCanvas(chartEditStoreEnum.Is_Drag, true)
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy'
}

// * 不拦截默认行为点击
export const mousedownHandleUnStop = (
  e: MouseEvent,
  item?: CreateComponentType
) => {
  if (item) {
    chartEditStore.setTargetSelectChart(item.id)
    return
  }
  chartEditStore.setTargetSelectChart(undefined)
}

// * 移动图表
export const useMouseHandle = () => {
  // 点击事件（包含移动事件）
  const mousedownHandle = (e: MouseEvent, item: CreateComponentType) => {
    e.preventDefault()
    e.stopPropagation()

    onClickoutside()
    chartEditStore.setTargetSelectChart(item.id)
    const scale = chartEditStore.getEditCanvas.scale
    const width = chartEditStore.getEditCanvasConfig.width
    const height = chartEditStore.getEditCanvasConfig.height

    // 获取编辑区域 Dom
    const editcontentDom = chartEditStore.getEditCanvas.editContentDom

    // 记录图表初始位置和大小
    const itemAttrX = item.attr.x
    const itemAttrY = item.attr.y
    const itemAttrW = item.attr.w
    const itemAttrH = item.attr.h

    // 记录点击初始位置
    const startX = e.screenX
    const startY = e.screenY

    // 计算偏移量（处理 scale 比例问题）
    const mousemove = throttle((moveEvent: MouseEvent) => {
      let currX = Math.round(itemAttrX + (moveEvent.screenX - startX) / scale)
      let currY = Math.round(itemAttrY + (moveEvent.screenY - startY) / scale)

      // 要预留的距离
      const distance = 50
      // 基于左上角位置检测
      currX = currX < -itemAttrW + distance ? -itemAttrW + distance : currX
      currY = currY < -itemAttrH + distance ? -itemAttrH + distance : currY

      // 基于右下角位置检测
      currX = currX > width - distance ? width - distance : currX
      currY = currY > height - distance ? height - distance : currY

      item.attr.x = currX
      item.attr.y = currY
    }, 30)

    const mouseup = () => {
      editcontentDom!.removeEventListener('mousemove', mousemove)
      editcontentDom!.removeEventListener('mouseup', mouseup)
    }

    editcontentDom!.addEventListener('mousemove', mousemove)
    editcontentDom!.addEventListener('mouseup', mouseup)
  }

  // * 进入事件
  const mouseenterHandle = (e: MouseEvent, item: CreateComponentType) => {
    e.preventDefault()
    e.stopPropagation()
    chartEditStore.setTargetHoverChart(item.id)
  }

  // * 移出事件
  const mouseleaveHandle = (e: MouseEvent, item: CreateComponentType) => {
    e.preventDefault()
    e.stopPropagation()
    chartEditStore.setTargetHoverChart(undefined)
  }

  return { mousedownHandle, mouseenterHandle, mouseleaveHandle }
}