/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 18:06:33
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 16:44:27
 * @FilePath: /finches-ui/build/modules.ts
 */
import { rollup } from 'rollup'
import vue from 'rollup-plugin-vue'
// import css from 'rollup-plugin-css-only'
import scss from 'rollup-plugin-scss'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import filesize from 'rollup-plugin-filesize'
import glob from 'fast-glob'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { epRoot, pkgRoot } from './utils/paths'
import { FinchesUiAlias } from './plugins/finches-ui-alias'
import { generateExternal, writeBundles } from './utils/rollup'
import { excludeFiles } from './utils/pkg'
import { reporter } from './plugins/size-reporter'
import { buildConfigEntries } from './build-info'
import type { OutputOptions } from 'rollup'

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins: [
      await FinchesUiAlias(),
      scss(),
      vue({ target: 'browser' }),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        // jsxFactory: 'h',
        // jsxFragment: 'Fragment',
      }),
      filesize({ reporter }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  })
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}
