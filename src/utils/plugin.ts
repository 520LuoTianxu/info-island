import { nextTick } from 'vue'
import { icon } from '@/plugins'
import { DialogEnum } from '@/enums/pluginEnum'
import { dialogIconSize } from '@/settings/designSetting'
import { maskClosable } from '@/settings/designSetting'
import { DialogReactive } from 'naive-ui'
const { InformationCircleIcon } = icon.ionicons5
import { renderIcon } from '@/utils'

// * 开启加载
export const loadingStart = () => {
  window['$loading'].start()
}

// * 加载结束
export const loadingFinish = () => {
  setTimeout(() => {
    window['$loading'].finish()
  })
}

// * 加载错误
export const loadingError = () => {
  setTimeout(() => {
    window['$loading'].error()
  })
}

/**
 * * render 对话框
 * @param { Object} params 配置参数
 * @param { Function } dialogFn 函数
 * ```
 * // 最简易demo
 * goDialog({
 *    onPositiveCallback: () => {}
 * })
 * ```
 */
export const goDialog = (
  params: {
    // 基本
    type?: DialogEnum
    // 提示
    message?: string
    // 点击遮罩是否关闭
    isMaskClosable?: boolean
    // 回调
    onPositiveCallback: Function
    onNegativeCallback?: Function
    // 异步
    promise?: boolean
    promiseResCallback?: Function
    promiseRejCallback?: Function
  },
  dialogFn?: Function
) => {
  const {
    type,
    message,
    isMaskClosable,
    onPositiveCallback,
    onNegativeCallback,
    promise,
    promiseResCallback,
    promiseRejCallback,
  } = params

  const typeObj = {
    // 自定义
    [DialogEnum.delete]: {
      fn: dialogFn || window['$dialog'].warning,
      message: message || '是否删除此数据?',
    },
    // 原有
    [DialogEnum.warning]: {
      fn: window['$dialog'].warning,
      message: message || '是否执行此操作?',
    },
    [DialogEnum.error]: {
      fn: window['$dialog'].error,
      message: message || '是否执行此操作?',
    },
    [DialogEnum.success]: {
      fn: window['$dialog'].success,
      message: message || '是否执行此操作?',
    },
  }

  const d: DialogReactive = typeObj[type || DialogEnum.warning]['fn']({
    title: '提示',
    icon: renderIcon(InformationCircleIcon, { size: dialogIconSize }),
    content: typeObj[type || DialogEnum.warning]['message'],
    positiveText: '确定',
    negativeText: '取消',
    // 是否通过遮罩关闭
    maskClosable: isMaskClosable || maskClosable,
    onPositiveClick: async () => {
      // 执行异步
      if (promise && onPositiveCallback) {
        d.loading = true
        try {
          const res = await onPositiveCallback()
          promiseResCallback && promiseResCallback(res)
        } catch (err) {
          promiseRejCallback && promiseRejCallback(err)
        }
        d.loading = false
        return
      }
      onPositiveCallback && onPositiveCallback(d)
    },
    onNegativeClick: async () => {
      onNegativeCallback && onNegativeCallback(d)
    },
  })
}
