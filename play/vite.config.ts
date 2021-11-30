/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 15:44:22
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 14:09:04
 * @FilePath: /finches-ui/play/vite.config.ts
 */
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from "vite-plugin-inspect";
import glob from "fast-glob";
import { epRoot, pkgRoot, projRoot } from "../build/utils/paths";
import "./vite.init";

export default defineConfig(async () => {
  const optimizeDeps = (
    await glob(["lodash/*.js", "dayjs/(locale|plugin)/*.js"], {
      cwd: path.resolve(projRoot, "node_modules"),
    })
  ).map((dep) => dep.replace(/\.js$/, ""));

  return {
    resolve: {
      alias: [
        {
          find: /^finches-ui(\/(es|lib))?$/,
          replacement: path.resolve(epRoot, "index.ts"),
        },
        {
          find: /^finches-ui\/(es|lib)\/(.*)$/,
          replacement: `${pkgRoot}/$2`,
        },
      ],
    },
    // server: {
    //   host: true,
    // },
    server: {
      host: "0.0.0.0",
      port: 3333,
    },
    plugins: [
      vue(),
      // Components({
      //   include: `${__dirname}/**`,
      //   resolvers: ElementPlusResolver({ importStyle: 'sass' }),
      // }),
      Inspect(),
    ],

    optimizeDeps: {
      include: [
        "@vue/shared",
        "@vueuse/core",
        "async-validator",
        "memoize-one",
        "normalize-wheel-es",
        "@popperjs/core",
        "dayjs",
        ...optimizeDeps,
      ],
    },
  };
});
