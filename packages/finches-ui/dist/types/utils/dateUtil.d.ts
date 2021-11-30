/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import moment from 'moment';
export declare function formatToDateTime(date?: moment.MomentInput, format?: string): string;
export declare function formatToDate(date?: moment.MomentInput, format?: string): string;
export declare const dateUtil: typeof moment;
