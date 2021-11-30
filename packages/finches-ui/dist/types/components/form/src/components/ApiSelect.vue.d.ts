declare const _default: import("vue").DefineComponent<{
    value: import("vue-types").VueTypeDef<string | number | unknown[] | {
        [key: string]: any;
    } | null | undefined>;
    numberToString: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    api: {
        type: PropType<(arg?: any) => Promise<OptionsItem[]>>;
        default: null;
    };
    params: {
        type: PropType<Recordable>;
        default: () => {};
    };
    resultField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    labelField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    valueField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}, {
    getOptions: import("vue").ComputedRef<never[]>;
    emitChange: () => void;
    state: any;
    attrs: {} | import("vue").Ref<Recordable>;
    handleChange: (_: any, ...args: any[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "options-change")[], "change" | "options-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    numberToString?: unknown;
    api?: unknown;
    params?: unknown;
    resultField?: unknown;
    labelField?: unknown;
    valueField?: unknown;
} & {
    numberToString: boolean;
    api: any;
    params: any;
    resultField: string;
    labelField: string;
    valueField: string;
} & {
    value?: string | number | unknown[] | {
        [key: string]: any;
    } | null | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onOptions-change"?: ((...args: any[]) => any) | undefined;
}, {
    numberToString: boolean;
    api: any;
    params: any;
    resultField: string;
    labelField: string;
    valueField: string;
}>;
export default _default;
