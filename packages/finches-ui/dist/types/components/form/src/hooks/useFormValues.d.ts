import type { Ref, ComputedRef } from 'vue';
interface useFormValuesContext {
    defaultValueRef: Ref<any>;
    getSchema: ComputedRef<any>;
    getProps: ComputedRef<any>;
    formModel: any;
    formElRef: any;
}
export declare function useFormValues({ defaultValueRef, getSchema, formModel, getProps, }: useFormValuesContext): {
    handleFormValues: (values: any) => any;
    initDefault: () => void;
};
export {};
