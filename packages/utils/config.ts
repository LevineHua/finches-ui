/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 16:09:08
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 10:02:14
 * @FilePath: /finches-ui/packages/utils/config.ts
 */
import type { ComponentSize } from "./types";

export interface InstallOptions {
  size: ComponentSize;
  zIndex: number;
  locale?: any;
}

let $ELEMENT = {} as InstallOptions;

const setConfig = (option: InstallOptions): void => {
  $ELEMENT = option;
};

const getConfig = (key: keyof InstallOptions): unknown => {
  return $ELEMENT[key];
};

export { getConfig, setConfig };
