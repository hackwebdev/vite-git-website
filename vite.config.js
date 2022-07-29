import { defineConfig } from 'vite'
import postcssNested from 'postcss-nested'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssMixins from 'postcss-mixins'

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssNested, postcssSimpleVars, postcssMixins],
    },
  },
})
