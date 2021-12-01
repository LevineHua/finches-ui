import type { ComponentType } from './index';
export interface RenderCallbackParams {
    schema: FormSchema;
    values: any;
    model: any;
    field: string;
}
export interface FormSchema {
    field: string;
    changeEvent?: string;
    label: string;
    component: ComponentType;
    labelWidth?: string | number;
    disabledLabelWidth?: boolean;
    componentProps?: ((opt: {
        schema: FormSchema;
        formModel: any;
    }) => any) | object;
    required?: boolean;
    rules?: [];
    rulesMessageJoinLabel?: boolean;
    itemProps?: any;
    colProps?: any;
    defaultValue?: any;
    ifShow?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
    show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
    slot?: string;
}
