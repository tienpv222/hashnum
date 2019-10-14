import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [{
    format: 'umd',
    file: 'dist/index.umd.js',
    sourcemap: true,
    name: 'hashnum'
  }, {
    format: 'es',
    file: 'dist/index.js',
    sourcemap: true
  }],
  plugins: [
    typescript(),
    terser({
      mangle: {
        properties: {
          regex: /^_/
        }
      }
    })
  ]
}
