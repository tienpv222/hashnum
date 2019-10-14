import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import sourcemaps from 'rollup-plugin-sourcemaps'
import serve from 'rollup-plugin-serve'
import reload from 'rollup-plugin-livereload'

const dev = process.env.ROLLUP_WATCH

export default {
  input: 'src/docs/main.ts',
  output: {
    format: 'iife',
    file: 'docs/main.js',
    sourcemap: true,
    name: 'hashnum'
  },
  plugins: [
    resolve(),
    typescript(),
    sourcemaps(),
    dev && terser({
      mangle: {
        properties: {
          regex: /^_/
        }
      }
    }),
    dev && serve('docs'),
    dev && reload('docs')
  ]
}
