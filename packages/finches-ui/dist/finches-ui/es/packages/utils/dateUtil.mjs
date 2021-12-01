import moment from '../../node_modules/.pnpm/moment@2.29.1/node_modules/moment/moment.mjs';

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm";
const DATE_FORMAT = "YYYY-MM-DD ";
function formatToDateTime(date = void 0, format = DATE_TIME_FORMAT) {
  return moment(date).format(format);
}
function formatToDate(date = void 0, format = DATE_FORMAT) {
  return moment(date).format(format);
}
const dateUtil = moment;

export { dateUtil, formatToDate, formatToDateTime };
//# sourceMappingURL=dateUtil.mjs.map
