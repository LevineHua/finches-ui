export declare const CbForm: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
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
    resetFunc: import("vue").PropType<() => Promise<void>>;
    submitFunc: import("vue").PropType<() => Promise<void>>;
    labelCol: ObjectConstructor;
    wrapperCol: ObjectConstructor;
    rowProps: ObjectConstructor;
    baseRowStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    baseColProps: {
        type: ObjectConstructor;
    };
}, {
    getProps: import("vue").ComputedRef<{
        size: string;
        showActionButtonGroup: boolean;
        showResetButton: boolean;
        resetButtonOptions: Record<string, any> | undefined;
        actionColOptions: Record<string, any> | undefined;
        onRegister: ((...args: any[]) => any) | undefined;
        onReset: ((...args: any[]) => any) | undefined;
        onSubmit: ((...args: any[]) => any) | undefined;
        labelWidth: string | number;
        labelPosition: string;
        disabled: boolean;
        schemas: unknown[];
        submitOnReset: boolean;
        transformDateFunc: Function;
        resetFunc: (() => Promise<void>) | undefined;
        submitFunc: (() => Promise<void>) | undefined;
        labelCol: Record<string, any> | undefined;
        wrapperCol: Record<string, any> | undefined;
        rowProps: Record<string, any> | undefined;
        baseRowStyle: import("vue").CSSProperties | undefined;
        baseColProps: Record<string, any> | undefined;
    }>;
    getSchema: import("vue").ComputedRef<any>;
    formElRef: import("vue").Ref<null>;
    formModel: {};
    getBindValue: import("vue").ComputedRef<{
        size: string;
        showActionButtonGroup: boolean;
        showResetButton: boolean;
        resetButtonOptions: Record<string, any> | undefined;
        actionColOptions: Record<string, any> | undefined;
        onRegister: ((...args: any[]) => any) | undefined;
        onReset: ((...args: any[]) => any) | undefined;
        onSubmit: ((...args: any[]) => any) | undefined;
        labelWidth: string | number;
        labelPosition: string;
        disabled: boolean;
        schemas: unknown[];
        submitOnReset: boolean;
        transformDateFunc: Function;
        resetFunc: (() => Promise<void>) | undefined;
        submitFunc: (() => Promise<void>) | undefined;
        labelCol: Record<string, any> | undefined;
        wrapperCol: Record<string, any> | undefined;
        rowProps: Record<string, any> | undefined;
        baseRowStyle: import("vue").CSSProperties | undefined;
        baseColProps: Record<string, any> | undefined;
    }>;
    setFormModel: (key: string, value: any) => void;
    defaultValueRef: import("vue").Ref<{}>;
    handleSubmit: (e?: any) => Promise<void>;
    getRow: import("vue").ComputedRef<{
        style: import("vue").CSSProperties;
    }>;
    formActionType: {
        setProps: (formProps: any) => Promise<void>;
        setFieldsValue: (values: any) => Promise<void>;
        validate: (nameList?: any) => Promise<any>;
        clearValidate: (name?: string | string[] | undefined) => Promise<void>;
        submit: (e?: any) => Promise<void>;
        getAllFieldsValue: () => any;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("register" | "reset" | "submit")[], "register" | "reset" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    labelWidth?: unknown;
    labelPosition?: unknown;
    size?: unknown;
    disabled?: unknown;
    schemas?: unknown;
    submitOnReset?: unknown;
    transformDateFunc?: unknown;
    showActionButtonGroup?: unknown;
    actionColOptions?: unknown;
    showResetButton?: unknown;
    resetButtonOptions?: unknown;
    resetFunc?: unknown;
    submitFunc?: unknown;
    labelCol?: unknown;
    wrapperCol?: unknown;
    rowProps?: unknown;
    baseRowStyle?: unknown;
    baseColProps?: unknown;
} & {
    size: string;
    showActionButtonGroup: boolean;
    showResetButton: boolean;
    labelWidth: string | number;
    labelPosition: string;
    disabled: boolean;
    schemas: unknown[];
    submitOnReset: boolean;
    transformDateFunc: Function;
} & {
    resetButtonOptions?: Record<string, any> | undefined;
    actionColOptions?: Record<string, any> | undefined;
    resetFunc?: (() => Promise<void>) | undefined;
    submitFunc?: (() => Promise<void>) | undefined;
    labelCol?: Record<string, any> | undefined;
    wrapperCol?: Record<string, any> | undefined;
    rowProps?: Record<string, any> | undefined;
    baseRowStyle?: import("vue").CSSProperties | undefined;
    baseColProps?: Record<string, any> | undefined;
}> & {
    onRegister?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    showActionButtonGroup: boolean;
    showResetButton: boolean;
    labelWidth: string | number;
    labelPosition: string;
    disabled: boolean;
    schemas: unknown[];
    submitOnReset: boolean;
    transformDateFunc: Function;
}>> & Record<string, any>;
export * from './src/types/form';
export { useForm } from './src/hooks/useForm';
export { default as ApiSelect } from './src/components/ApiSelect.vue';
export default CbForm;
