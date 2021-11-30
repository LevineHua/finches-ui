/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-16 10:55:19
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:15:54
 * @FilePath: /finches-ui/packages/components/form/src/hooks/useContext.ts
 */
import { inject, reactive, readonly as defineReadonly, provide } from 'vue'
import type { InjectionKey, UnwrapRef } from 'vue'

export interface CreateContextOptions {
  readonly?: boolean
  createProvider?: boolean
  native?: boolean
}

type ShallowUnwrap<T> = {
  [P in keyof T]: UnwrapRef<T[P]>
}

export function createContext<T>(
  context: any,
  key: InjectionKey<T> = Symbol(),
  options: CreateContextOptions = {}
) {
  const { readonly = true, createProvider = false, native = false } = options

  const state = reactive(context)
  const provideData = readonly ? defineReadonly(state) : state
  !createProvider && provide(key, native ? context : provideData)

  return {
    state,
  }
}

export function useContext<T>(key: InjectionKey<T>, native?: boolean): T
// eslint-disable-next-line no-redeclare
export function useContext<T>(
  key: InjectionKey<T>,
  defaultValue?: any,
  native?: boolean
): T

// eslint-disable-next-line no-redeclare
export function useContext<T>(
  key: InjectionKey<T> = Symbol(),
  defaultValue?: any
): ShallowUnwrap<T> {
  return inject(key, defaultValue || {})
}
