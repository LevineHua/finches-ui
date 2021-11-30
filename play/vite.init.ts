/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 15:44:22
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 10:02:41
 * @FilePath: /finches-ui/play/vite.init.ts
 */
import { existsSync, writeFileSync, readFileSync } from "fs";

const app = "src/App.vue";
const example = "app.example";

if (!existsSync(app)) {
  writeFileSync(app, readFileSync(example));
}
