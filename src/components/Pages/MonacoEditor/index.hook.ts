import { ref, onBeforeUnmount, nextTick } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
// import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
// import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

export const useMonacoEditor = (language = 'javascript') => {
  let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null
  let initReadOnly = false
  const el = ref<HTMLElement | null>(null)
  
  // @ts-ignore
  self.MonacoEnvironment = {
    getWorker(_: any, label: string) {
      if (label === 'json') {
        return new jsonWorker()
      }
      // if (label === 'css' || label === 'scss' || label === 'less') {
      //   return new cssWorker()
      // }
      // if (label === 'html' || label === 'handlebars' || label === 'razor') {
      //   return new htmlWorker()
      // }
      if (label === 'typescript' || label === 'javascript') {
        return new tsWorker()
      }
      return new editorWorker()
    }
  }

  // 格式化
  const onFormatDoc = async () => {
    await monacoEditor?.getAction('monacoEditor.action.formatDocument')?.run()
  }

  // 更新
  const updateVal = (val: string) => {
    nextTick(async () => {
      monacoEditor?.setValue(val)
      initReadOnly && monacoEditor?.updateOptions({ readOnly: false })
      await onFormatDoc()
      initReadOnly && monacoEditor?.updateOptions({ readOnly: true })
    })
  }

  // 创建实例
  const createEditor = (editorOption: monaco.editor.IStandaloneEditorConstructionOptions = {}) => {
    if (!el.value) return
    const javascriptModel = monaco.editor.createModel('', language)
    initReadOnly = !!editorOption.readOnly
    // 创建
    monacoEditor = monaco.editor.create(el.value, {
      model: javascriptModel,
      minimap: { enabled: true },
      roundedSelection: false,
      theme: 'vs-dark',
      multiCursorModifier: 'ctrlCmd',
      scrollbar: {
        verticalScrollbarSize: 8,
        horizontalScrollbarSize: 8
      },
      tabSize: 2,
      fontSize: 16, //字体大小
      autoIndent: 'advanced', //自动布局
      automaticLayout: true, // 自适应宽高
      ...editorOption
    })

    return monacoEditor
  }

  // 卸载
  onBeforeUnmount(() => {
    if (monacoEditor) monacoEditor.dispose()
  })

  return {
    el,
    updateVal,
    getEditor: () => monacoEditor,
    createEditor,
    onFormatDoc
  }
}
