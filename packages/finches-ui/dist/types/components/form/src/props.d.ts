import type { CSSProperties, PropType } from 'vue';
export declare const basicProps: {
    /**
     * Form Attributes start：https://element-plus.gitee.io/#/zh-CN/component/form
     */
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    labelPosition: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * Form Attributes end
     */
    schemas: {
        type: ArrayConstructor[];
        default: () => never[];
    };
    submitOnReset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    transformDateFunc: {
        type: FunctionConstructor;
        default: (date: any) => any;
    };
    showActionButtonGroup: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    actionColOptions: ObjectConstructor;
    showResetButton: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    resetButtonOptions: ObjectConstructor;
    resetFunc: PropType<() => Promise<void>>;
    submitFunc: PropType<() => Promise<void>>;
    labelCol: ObjectConstructor;
    wrapperCol: ObjectConstructor;
    rowProps: ObjectConstructor;
    baseRowStyle: {
        type: PropType<CSSProperties>;
    };
    baseColProps: {
        type: ObjectConstructor;
    };
};
