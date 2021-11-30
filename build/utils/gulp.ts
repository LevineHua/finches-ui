/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 18:05:33
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 10:00:47
 * @FilePath: /finches-ui/build/utils/gulp.ts
 */
import type { TaskFunction } from "gulp";

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name });
