<!--
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-08-12 15:14:22
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 17:39:00
 * @FilePath: /finches-ui/packages/components/form/src/components/FormItem.vue
-->
<script lang="tsx">
import { computed, defineComponent, toRefs, unref, h } from 'vue'
import { ElCol, ElFormItem } from 'element-plus'
import { cloneDeep, upperFirst } from 'lodash-es'
import { isArray, isFunction, isBoolean, isNull } from '@finches-ui/utils/is'
import { getSlot } from '@finches-ui/utils/helper/tsxHelper.tsx'
import { componentMap } from '../componentMap'

import {
  handleFormItemValue,
  createPlaceholderMessage,
  setComponentRuleType,
} from '../helper'
import { useItemLabWidth } from '../hooks/useLabelWidth'

export default defineComponent({
  name: 'BasicFormItem',
  inheritAttrs: false,
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    formProps: {
      type: Object,
      default: () => ({}),
    },
    allDefaultValues: {
      type: Object,
      default: () => ({}),
    },
    formModel: {
      type: Object,
      default: () => ({}),
    },
    setFormModel: {
      type: Function,
      default: null,
    },
    formActionType: {
      type: Object,
    },
  },
  setup(props, { slots }) {
    const { schema, formProps } = toRefs(props)

    const itemLabelWidthProp = useItemLabWidth(schema, formProps)

    const getValues = computed(() => {
      const { schema, formModel, allDefaultValues } = props
      return {
        field: schema.field,
        schema,
        model: formModel,
        values: {
          ...formModel,
          ...allDefaultValues,
        },
      }
    })

    const getComponentsProps = computed(() => {
      const { schema, formModel } = props
      const { componentProps = {} } = schema
      if (!isFunction(componentProps)) {
        return componentProps
      }
      return componentProps({ schema, formModel }) ?? {}
    })

    function getShow() {
      const { show, ifShow } = props.schema
      let isShow = true
      let isIfShow = true
      if (isBoolean(show)) {
        isShow = show
      }
      if (isBoolean(ifShow)) {
        isIfShow = ifShow
      }
      if (isFunction(show)) {
        isShow = show(unref(getValues))
      }
      if (isFunction(ifShow)) {
        isIfShow = ifShow(unref(getValues))
      }
      return { isShow, isIfShow }
    }

    function handleRules() {
      const {
        rules: defRules = [],
        component,
        rulesMessageJoinLabel,
        label,
        dynamicRules,
        required,
      } = props.schema

      if (isFunction(dynamicRules)) {
        return dynamicRules(unref(getValues))
      }

      let rules = cloneDeep(defRules)
      const { rulesMessageJoinLabel: globalRulesMessageJoinLabel = '' } =
        props.formProps

      const joinLabel = Reflect.has(props.schema, 'rulesMessageJoinLabel')
        ? rulesMessageJoinLabel
        : globalRulesMessageJoinLabel
      const defaultMsg = `${createPlaceholderMessage(component)}${
        joinLabel ? '' : label
      }`

      function validator(rule, value) {
        const msg = rule.message || defaultMsg
        if (value === undefined || isNull(value)) {
          // 空值
          return Promise.reject(msg)
        } else if (Array.isArray(value) && value.length === 0) {
          // 数组类型
          return Promise.reject(msg)
        } else if (typeof value === 'string' && value.trim() === '') {
          // 空字符串
          return Promise.reject(msg)
        } else if (
          typeof value === 'object' &&
          Reflect.has(value, 'checked') &&
          Reflect.has(value, 'halfChecked') &&
          Array.isArray(value.checked) &&
          Array.isArray(value.halfChecked) &&
          value.checked.length === 0 &&
          value.halfChecked.length === 0
        ) {
          // 非关联选择的tree组件
          return Promise.reject(msg)
        }
        return Promise.resolve()
      }

      const getRequired = isFunction(required)
        ? required(unref(getValues))
        : required

      if ((!rules || rules.length === 0) && getRequired) {
        rules = [{ required: getRequired, validator }]
      }

      const requiredRuleIndex = rules.findIndex(
        (rule) =>
          Reflect.has(rule, 'required') && !Reflect.has(rule, 'validator')
      )

      if (requiredRuleIndex !== -1) {
        const rule = rules[requiredRuleIndex]
        const { isShow } = getShow()
        if (!isShow) {
          rule.required = false
        }
        if (component) {
          if (!Reflect.has(rule, 'type')) {
            rule.type = component === 'InputNumber' ? 'number' : 'string'
          }

          rule.message = rule.message || defaultMsg

          if (component.includes('Input') || component.includes('Textarea')) {
            rule.whitespace = true
          }
          const valueFormat = unref(getComponentsProps)?.valueFormat
          setComponentRuleType(rule, component, valueFormat)
        }
      }
      // 最大输入长度规则检查
      const characterInx = rules.findIndex((val) => val.max)
      if (characterInx !== -1 && !rules[characterInx].validator) {
        rules[characterInx].message =
          rules[characterInx].message ||
          `字符数应小于${rules[characterInx].max}位`
      }

      return rules
    }

    // 在组件表中读取对应组件
    function renderComponent() {
      const { component, field, changeEvent = 'change' } = props.schema

      const isCheck = component && ['Checkbox'].includes(component)

      let eventKey = `on${upperFirst(changeEvent)}`

      // 如果是 Input 组件，则将默认事件替换未 onInput 事件
      if (['Input', 'Slider'].includes(component)) {
        eventKey = 'onInput'
      }

      const on = {
        [eventKey]: (...args) => {
          const [e] = args
          if (propsData[eventKey]) {
            propsData[eventKey](...args)
          }
          const target = e ? e.target : null
          const value = target ? (isCheck ? target.checked : target.value) : e
          // console.log(field, value)
          props.setFormModel(field, value)
        },
      }

      const Comp = componentMap.get(component)
      // console.log(Comp)
      let propsData = {
        ...unref(getComponentsProps),
      }
      if (!['ColorPicker'].includes(component)) {
        propsData = Object.assign(propsData, { clearable: true })
      }
      // propsData.codeField = field
      // propsData.formValues = unref(getValues)

      // console.log(propsData)

      const bindValue = {
        [isCheck ? 'checked' : 'model-value']: handleFormItemValue(
          props.schema,
          props.formModel[field]
        ),
      }

      // console.log(bindValue)

      const compAttr = {
        ...propsData,
        ...on,
        ...bindValue,
      }

      // 如果组件是 RadioGroup，并且参数中包含 options 属性，则需要生成子组件 Radio
      if (
        ['RadioGroup', 'CheckboxGroup', 'Select'].includes(component) &&
        component &&
        propsData.options &&
        isArray(propsData.options)
      ) {
        const options = propsData.options
        const getContent = (component, options) => {
          return renderGroup(component, options)
        }
        return <Comp {...compAttr}>{getContent(component, options)}</Comp>
      }

      return <Comp {...compAttr}></Comp>
    }

    // 生成 RadioGroup/CheckboxGroup 的子组件
    function renderGroup(component, options) {
      if (component === 'Select') {
        const CompItem = componentMap.get('Option')
        return options.map((val) => {
          return (
            <CompItem
              label={val.label}
              key={val.value}
              value={val.value}
            ></CompItem>
          )
        })
      } else {
        const componentName = component.replace(/w*Group$/, '')
        const CompItem = componentMap.get(componentName)
        const CompList = options.map((val) => {
          return <CompItem label={val.value}>{val.label}</CompItem>
        })
        return CompList
      }
    }

    // 生成 formItem 组件
    function renderItem() {
      const { field, label, itemProps, slot } = props.schema
      const { labelCol, wrapperCol } = unref(itemLabelWidthProp)

      const getContent = () => {
        return slot ? getSlot(slots, slot, unref(getValues)) : renderComponent()
      }

      return (
        <ElFormItem
          prop={field}
          label={label}
          {...itemProps}
          {...wrapperCol}
          labelWidth={labelCol}
          rules={handleRules()}
        >
          <div style="display: flex;height: 100%;align-items: center;">
            <div style="flex: 1">{getContent()}</div>
          </div>
        </ElFormItem>
      )
    }

    // 生成输入框底部插槽
    function renderBottomSlot() {
      const { field } = props.schema
      const { labelCol, wrapperCol } = unref(itemLabelWidthProp)

      console.log(labelCol, wrapperCol)

      // console.log(slots, slot, field, label, itemProps, slot)

      const slotFn = slots[`${field}-bottom`]

      // const getContent = () => {
      //   return slotFn ? slotFn() : null
      // }

      const getContent = () => {
        return slotFn
          ? getSlot(slots, `${field}-bottom`, unref(getValues))
          : null
      }

      if (slotFn) {
        const style = {
          style: {
            paddingLeft: labelCol,
            marginBottom: '22px',
          },
        }
        return (
          <div {...wrapperCol}>
            <div {...style}>{getContent()}</div>
          </div>
        )
      }
    }

    return () => {
      const { component, colProps = {} } = props.schema
      if (!componentMap.has(component)) {
        return null
      }

      const { baseColProps = {} } = props.formProps
      const realColProps = { ...baseColProps, ...colProps }
      // console.log(props.schema)
      // const value = unref(getValues)
      const { isIfShow, isShow } = getShow()

      const getContent = () => {
        return renderItem()
      }

      // renderBottomSlot()

      // console.log(getContent())

      return (
        isIfShow && (
          <ElCol {...realColProps} v-show={isShow}>
            {getContent()}
            {renderBottomSlot()}
          </ElCol>
        )
      )
    }
  },
})
</script>
