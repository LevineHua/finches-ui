/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 15:47:17
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 15:53:29
 * @FilePath: /finches-ui/build/utils/paths.ts
 */
import { resolve } from "path";

export const projRoot = resolve(__dirname, "..", "..");
export const pkgRoot = resolve(projRoot, "packages");
export const compRoot = resolve(pkgRoot, "components");
export const themeRoot = resolve(pkgRoot, "theme-chalk");
export const hookRoot = resolve(pkgRoot, "hooks");
export const localeRoot = resolve(pkgRoot, "locale");
export const directiveRoot = resolve(pkgRoot, "directives");
export const epRoot = resolve(pkgRoot, "finches-ui");
export const utilRoot = resolve(pkgRoot, "utils");
export const docRoot = resolve(projRoot, "docs");

/** dist */
// export const buildOutput = resolve(projRoot, "dist");
export const buildOutput = resolve(projRoot, "packages/finches-ui/dist");
/** dist/finches-ui */
export const epOutput = resolve(buildOutput, "finches-ui");

export const projPackage = resolve(projRoot, "package.json");
export const compPackage = resolve(compRoot, "package.json");
export const themePackage = resolve(themeRoot, "package.json");
export const hookPackage = resolve(hookRoot, "package.json");
export const localePackage = resolve(localeRoot, "package.json");
export const directivePackage = resolve(directiveRoot, "package.json");
export const epPackage = resolve(epRoot, "package.json");
export const utilPackage = resolve(utilRoot, "package.json");
export const docPackage = resolve(docRoot, "package.json");
