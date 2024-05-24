import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'qcc-core/index.ts'),
      name: 'QCC',
      fileName: (format) => `qcc.${format}.js` // 输出文件的名称
    }
  }
})