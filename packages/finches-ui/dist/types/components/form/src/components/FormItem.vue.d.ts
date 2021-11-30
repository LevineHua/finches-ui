declare var _default: import("vue").DefineComponent<{
    schema: {
        type: ObjectConstructor;
        default: () => {};
    };
    formProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    allDefaultValues: {
        type: ObjectConstructor;
        default: () => {};
    };
    formModel: {
        type: ObjectConstructor;
        default: () => {};
    };
    setFormModel: {
        type: FunctionConstructor;
        default: null;
    };
    formActionType: {
        type: ObjectConstructor;
    };
}, () => false | JSX.Element | null, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    schema?: unknown;
    formProps?: unknown;
    allDefaultValues?: unknown;
    formModel?: unknown;
    setFormModel?: unknown;
    formActionType?: unknown;
} & {
    schema: Record<string, any>;
    formProps: Record<string, any>;
    allDefaultValues: Record<string, any>;
    formModel: Record<string, any>;
    setFormModel: Function;
} & {
    formActionType?: Record<string, any> | undefined;
}>, {
    schema: Record<string, any>;
    formProps: Record<string, any>;
    allDefaultValues: Record<string, any>;
    formModel: Record<string, any>;
    setFormModel: Function;
}>;
export default _default;
