<!--
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-08-17 15:56:51
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 14:30:18
 * @FilePath: /finches-ui/packages/components/form/src/components/FormAction.vue
-->
<template>
  <el-col v-if="showActionButtonGroup" v-bind="actionColOpt">
    <div
      style="width: 100%"
      :style="{ textAlign: actionColOpt.style.textAlign }"
    >
      <!-- <el-form-item> -->
      <slot name="resetBefore"></slot>
      <el-button
        v-if="showResetButton"
        type="default"
        v-bind="getResetBtnOptions"
        @click="resetAction"
      >
        {{ getResetBtnOptions.text }}
      </el-button>

      <slot name="submitBefore"></slot>
      <el-button
        v-if="showSubmitButton"
        type="primary"
        v-bind="getSubmitBtnOptons"
        @click="submitAction"
      >
        {{ getSubmitBtnOptons.text }}
      </el-button>
      <!-- </el-form-item> -->
    </div>
  </el-col>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { ElButton, ElCol } from 'element-plus'
import { propTypes } from '@finches-ui/utils/propTypes'
import { useFormContext } from '../hooks/useFormContext'

export default defineComponent({
  name: 'BasicFormAction',
  components: { ElButton, ElCol },
  props: {
    showActionButtonGroup: propTypes.bool.def(true),
    showResetButton: propTypes.bool.def(true),
    showSubmitButton: propTypes.bool.def(true),
    resetButtonOptions: {
      type: Object,
      default: () => ({}),
    },
    submitButtonOptions: {
      type: Object,
      default: () => ({}),
    },
    actionColOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const actionColOpt = computed(() => {
      const { actionColOptions } = props
      const actionColOpt = {
        style: { textAlign: 'left' },
        span: 4,
        ...actionColOptions,
      }
      return actionColOpt
    })

    const getResetBtnOptions = computed(() => {
      return Object.assign(
        {
          text: '重置',
          size: 'mini',
        },
        props.resetButtonOptions
      )
    })

    const getSubmitBtnOptons = computed(() => {
      return Object.assign(
        {
          text: '提交',
          size: 'mini',
        },
        props.submitButtonOptions
      )
    })

    return {
      actionColOpt,
      getResetBtnOptions,
      getSubmitBtnOptons,
      ...useFormContext(),
    }
  },
})
</script>
