declare const _default: import("vue").DefineComponent<{
    showActionButtonGroup: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showResetButton: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showSubmitButton: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    resetButtonOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
    submitButtonOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
    actionColOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    resetAction: () => Promise<void>;
    submitAction: () => Promise<void>;
    actionColOpt: import("vue").ComputedRef<{
        style: {
            textAlign: string;
        };
        span: number;
    }>;
    getResetBtnOptions: import("vue").ComputedRef<{
        text: string;
        size: string;
    } & Record<string, any>>;
    getSubmitBtnOptons: import("vue").ComputedRef<{
        text: string;
        size: string;
    } & Record<string, any>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    showActionButtonGroup?: unknown;
    showResetButton?: unknown;
    showSubmitButton?: unknown;
    resetButtonOptions?: unknown;
    submitButtonOptions?: unknown;
    actionColOptions?: unknown;
} & {
    showActionButtonGroup: boolean;
    showResetButton: boolean;
    showSubmitButton: boolean;
    resetButtonOptions: Record<string, any>;
    submitButtonOptions: Record<string, any>;
    actionColOptions: Record<string, any>;
} & {}>, {
    showActionButtonGroup: boolean;
    showResetButton: boolean;
    showSubmitButton: boolean;
    resetButtonOptions: Record<string, any>;
    submitButtonOptions: Record<string, any>;
    actionColOptions: Record<string, any>;
}>;
export default _default;
