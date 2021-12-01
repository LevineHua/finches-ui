/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 18:06:33
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 15:26:25
 * @FilePath: /finches-ui/build/full-bundle.ts
 */
import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import filesize from 'rollup-plugin-filesize'
import { parallel } from 'gulp'
// import tsPlugin from '@rollup/plugin-typescript'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { version } from '../packages/finches-ui/version'
import { FinchesUiAlias } from './plugins/finches-ui-alias'
import { epRoot, epOutput } from './utils/paths'
import { generateExternal, writeBundles } from './utils/rollup'

import { withTaskName } from './utils/gulp'

export const buildFull = (minify: boolean) => async () => {
  const bundle = await rollup({
    input: path.resolve(epRoot, 'index.ts'),
    plugins: [
      await FinchesUiAlias(),
      // tsPlugin(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      vue({
        target: 'browser',
        exposeFilename: false,
      }),
      commonjs(),
      esbuild({
        minify,
        sourceMap: minify,
        target: 'es2018',
        // jsxFactory: 'h',
        // jsxFragment: 'Fragment',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),

        // options
        preventAssignment: true,
      }),
      filesize(),
      vueJsx(),
    ],
    external: await generateExternal({ full: true }),
  })
  const banner = `/*! Finches Ui v${version} */\n`
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(epOutput, `dist/index.full${minify ? '.min' : ''}.js`),
      exports: 'named',
      name: 'FinchesUi',
      globals: {
        vue: 'Vue',
      },
      sourcemap: minify,
      banner,
    },
    {
      format: 'esm',
      file: path.resolve(
        epOutput,
        `dist/index.full${minify ? '.min' : ''}.mjs`
      ),
      sourcemap: minify,
      banner,
    },
  ])
}

export const buildFullBundle = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false))
)
