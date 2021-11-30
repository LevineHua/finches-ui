/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-17 16:37:09
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:15:27
 * @FilePath: /finches-ui/packages/components/form/src/hooks/useFormContext.ts
 */
import { createContext, useContext } from './useContext'
import type { InjectionKey } from 'vue'

export interface FormContextProps {
  resetAction: () => Promise<void>
  submitAction: () => Promise<void>
}

const key: InjectionKey<FormContextProps> = Symbol()

export function createFormContext(context: FormContextProps) {
  return createContext<FormContextProps>(context, key)
}

export function useFormContext() {
  return useContext<FormContextProps>(key)
}
