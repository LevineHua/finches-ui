/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-30 16:42:20
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 16:59:04
 * @FilePath: /finches-ui/packages/components/form/index.ts
 */
import { withInstall } from '@finches-ui/utils/with-install'

import Form from './src/index.vue'

export const CbForm = withInstall(Form)

export * from './src/types/form'

export { useForm } from './src/hooks/useForm'

export { default as ApiSelect } from './src/components/ApiSelect.vue'

export default CbForm
