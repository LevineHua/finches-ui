import type { Ref } from 'vue';
interface Params {
    excludeListeners?: boolean;
    excludeKeys?: string[];
}
export declare function entries<T>(obj: any): [string, T][];
export declare function useAttrs(params?: Params): Ref<any> | {};
export {};
