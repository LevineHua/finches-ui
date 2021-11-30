import type { ComponentType } from './types';
/**
 * @description: 生成placeholder
 */
export declare function createPlaceholderMessage(component: ComponentType): "" | "请输入" | "请选择";
export declare function setComponentRuleType(rule: any, component: ComponentType, valueFormat: string): void;
export declare function handleFormItemValue(schema?: any, val?: any): any;
/**
 * 时间字段
 */
export declare const dateItemType: string[];
