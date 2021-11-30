/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 18:11:18
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 10:00:23
 * @FilePath: /finches-ui/build/utils/rollup.ts
 */
import { epPackage } from "./paths";
import { getPackageDependencies } from "./pkg";

import type { OutputOptions, RollupBuild } from "rollup";

export const generateExternal = async (options: { full: boolean }) => {
  return (id: string) => {
    const packages: string[] = ["vue"];
    if (!options.full) {
      packages.push("finches-ui/theme-chalk");
      // dependencies
      packages.push("@vue", ...getPackageDependencies(epPackage));
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    );
  };
};

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)));
}
