<!--
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-11-29 16:11:08
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 10:18:06
 * @FilePath: /finches-ui/packages/components/test/src/test.vue
-->
<template>
  <div>
    <slot></slot>
    我是一个测试组件
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CbTest',
  props: {},
  setup(props) {
    // init here
  },
})
</script>
<style></style>
