/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 18:09:58
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 10:00:42
 * @FilePath: /finches-ui/build/plugins/size-reporter.ts
 */
import { cyan, bold, yellow, green } from "chalk";

import type { FileSizeReporter } from "rollup-plugin-filesize";

export const reporter: FileSizeReporter = (opt, outputOptions, info) => {
  return `${cyan(bold(info.fileName))}: bundle size ${yellow(
    info.bundleSize
  )} -> minified ${green(info.minSize)}`;
};
