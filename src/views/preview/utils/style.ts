import { PickCreateComponentType } from '@/packages/index.d'
import { EditCanvasConfigType } from '@/store/modules/chartEditStore/chartEditStore.d'

type AttrType = PickCreateComponentType<'attr'>
type StylesType = PickCreateComponentType<'styles'>

export const getComponentAttrStyle = (attr: AttrType, index: number) => {
  const componentStyle = {
    zIndex: index + 1,
    left: `${attr.x}px`,
    top: `${attr.y}px`
  }
  return componentStyle
}

export const getSizeStyle = (attr: AttrType, scale?: number) => {
  const sizeStyle = {
    width: `${scale ? scale * attr.w : attr.w}px`,
    height: `${scale ? scale * attr.h : attr.h}px`
  }
  return sizeStyle
}

export const getEditCanvasConfigStyle = (canvas: EditCanvasConfigType) => {
  // 背景
  const computedBackground = canvas.selectColor
    ? { background: canvas.background }
    : {
        background: `url(${canvas.backgroundImage}) no-repeat center/100% !important`
      }
  return {
    position: 'relative',
    width: canvas.width ? `${canvas.width || 100}px` : '100%',
    height: canvas.height ? `${canvas.height}px` : '100%',
    ...computedBackground
  }
}

// 动画
export const animationsClass = (animations: string[]) => {
  if (animations.length) {
    return `animate__animated  animate__${animations[0]}`
  }
  return ''
}

export const getStyle = (styles: StylesType) => {
  return {
    // 透明度
    opacity: styles.opacity
  }
}
