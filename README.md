# finches-ui

## 如果未安装 pnpm

```shell
npm i -g pnpm
```

## 安装依赖

```shell
pnpm i
```

## 运行调试服务

```shell
pnpm dev
```



## 如何创建组件？

1. 在项目的根目录打开命令行，输入指令`pnpm gen component-name`，组件名称采用羊肉串命名法，创建的组件在 `packages/components/component-name`。
2. 在`packages/components/index.ts`中注册该组件。
3. 在`packages/finches-ui/component.ts`中注册该组件。
4. 在 `typings/global.d.ts`中注册该组件。



## 如何调试创建的组件？

`play`是专门调试的一个文件夹，只需在`play/src/App.vue`文件中引入组件即可调试，如：

```vue
<template>
  <div class="play-container">
    test
    <div>
      <CbTest />
    </div>
  </div>
</template>

<script setup lang="ts">
// code here
import { CbTest } from '@finches-ui/components'
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
}
</style>

```



## 如何发布 finches-ui 组件库？

1. 登录 npm

   ```shell
   npm login
   ```

2. publish

   ```shell
   pnpm -r publish --access public
   ```

   
