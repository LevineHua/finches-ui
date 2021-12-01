'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var moment = require('../../node_modules/.pnpm/moment@2.29.1/node_modules/moment/moment.js');

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm";
const DATE_FORMAT = "YYYY-MM-DD ";
function formatToDateTime(date = void 0, format = DATE_TIME_FORMAT) {
  return moment["default"](date).format(format);
}
function formatToDate(date = void 0, format = DATE_FORMAT) {
  return moment["default"](date).format(format);
}
const dateUtil = moment["default"];

exports.dateUtil = dateUtil;
exports.formatToDate = formatToDate;
exports.formatToDateTime = formatToDateTime;
//# sourceMappingURL=dateUtil.js.map
