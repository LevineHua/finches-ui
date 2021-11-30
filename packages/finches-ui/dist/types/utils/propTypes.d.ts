import type { CSSProperties, VNodeChild } from 'vue';
import type { VueTypeValidableDef, VueTypesInterface } from 'vue-types';
export declare type VueNode = VNodeChild | JSX.Element;
declare type PropTypes = VueTypesInterface & {
    readonly style: VueTypeValidableDef<CSSProperties>;
    readonly VNodeChild: VueTypeValidableDef<VueNode>;
};
declare const propTypes: PropTypes;
export { propTypes };
