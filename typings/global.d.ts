/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 16:13:29
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 16:53:10
 * @FilePath: /finches-ui/typings/global.d.ts
 */
declare module "vue" {
  export interface GlobalComponents {
    CbTest: typeof import("finches-ui")["CbTest"];
    CbForm: typeof import("finches-ui")["CbForm"];
  }
}

export {};
