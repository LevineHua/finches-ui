/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 16:18:06
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 10:20:09
 * @FilePath: /finches-ui/packages/finches-ui/defaults.ts
 */
import makeInstaller from './make-installer'
import Components from './component'
// import Plugins from './plugin'

export default makeInstaller([...Components])
