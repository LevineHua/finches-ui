/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 15:44:33
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 16:54:53
 * @FilePath: /finches-ui/play/main.ts
 */
import { createApp } from "vue";
import App from "./src/App.vue";

import "element-plus/theme-chalk/index.css";

// import '@finches-ui/theme-chalk/src/index.scss'

const app = createApp(App);

app.mount("#play");
