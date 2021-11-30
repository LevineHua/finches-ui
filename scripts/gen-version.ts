/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 15:58:42
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 10:02:53
 * @FilePath: /finches-ui/scripts/gen-version.ts
 */
import fs from "fs";
import path from "path";
import pkg from "../packages/finches-ui/package.json"; // need to be checked
const tagVer = process.env.TAG_VERSION;
let version = "";

if (tagVer) {
  version = tagVer.startsWith("v") ? tagVer.slice(1) : tagVer;
} else {
  version = pkg.version;
}

fs.writeFileSync(
  path.resolve(__dirname, "../packages/finches-ui/version.ts"),
  `export const version = '${version}'
`
);
