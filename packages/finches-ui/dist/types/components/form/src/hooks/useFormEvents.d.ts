import type { ComputedRef, Ref } from 'vue';
interface UseFormActionContext {
    emit: any;
    getProps: ComputedRef<any>;
    getSchema: ComputedRef<any>;
    formModel: any;
    defaultValueRef: Ref;
    formElRef: Ref;
    schemaRef: Ref;
    handleFormValues: Function;
}
export declare function useFormEvents({ emit, getProps, formModel, getSchema, defaultValueRef, formElRef, handleFormValues, }: UseFormActionContext): {
    setFieldsValue: (values: any) => Promise<void>;
    validateFields: (nameList?: string[] | undefined) => Promise<any>;
    handleSubmit: (e?: any) => Promise<void>;
    resetFields: () => Promise<void>;
    clearValidate: (name?: string | string[] | undefined) => Promise<void>;
    validate: (nameList?: any) => Promise<any>;
    getAllFieldsValue: () => any;
};
export {};
