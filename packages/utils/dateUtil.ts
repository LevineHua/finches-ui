/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-12 15:04:40
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:16:29
 * @FilePath: /finches-ui/packages/utils/dateUtil.ts
 */
/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import moment from 'moment'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'
const DATE_FORMAT = 'YYYY-MM-DD '

export function formatToDateTime(
  date: moment.MomentInput = undefined,
  format = DATE_TIME_FORMAT
): string {
  return moment(date).format(format)
}

export function formatToDate(
  date: moment.MomentInput = undefined,
  format = DATE_FORMAT
): string {
  return moment(date).format(format)
}

export const dateUtil = moment
