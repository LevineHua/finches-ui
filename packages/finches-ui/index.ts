/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-26 10:16:05
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 10:01:50
 * @FilePath: /finches-ui/packages/finches-ui/index.ts
 */
import installer from "./defaults";
export * from "@finches-ui/components";
// export * from '@finches-ui/directives'
// export * from '@finches-ui/hooks'
// export * from '@finches-ui/tokens'

export { default as makeInstaller } from "./make-installer";
export { default } from "./defaults";

export const install = installer.install;
export const version = installer.version;
