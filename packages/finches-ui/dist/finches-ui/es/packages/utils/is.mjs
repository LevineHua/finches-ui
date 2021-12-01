const toString = Object.prototype.toString;
function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}
function isDef(val) {
  return typeof val !== "undefined";
}
function isUnDef(val) {
  return !isDef(val);
}
function isObject(val) {
  return val !== null && is(val, "Object");
}
function isEmpty(val) {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }
  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }
  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }
  return false;
}
function isDate(val) {
  return is(val, "Date");
}
function isNull(val) {
  return val === null;
}
function isNullAndUnDef(val) {
  return isUnDef(val) && isNull(val);
}
function isNullOrUnDef(val) {
  return isUnDef(val) || isNull(val);
}
function isNumber(val) {
  return is(val, "Number");
}
function isPromise(val) {
  return is(val, "Promise") && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isString(val) {
  return is(val, "String");
}
function isFunction(val) {
  return typeof val === "function";
}
function isBoolean(val) {
  return is(val, "Boolean");
}
function isRegExp(val) {
  return is(val, "RegExp");
}
function isArray(val) {
  return val && Array.isArray(val);
}
function isWindow(val) {
  return typeof window !== "undefined" && is(val, "Window");
}
function isElement(val) {
  return isObject(val) && !!val.tagName;
}
const isServer = typeof window === "undefined";
const isClient = !isServer;
function isUrl(path) {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}

export { is, isArray, isBoolean, isClient, isDate, isDef, isElement, isEmpty, isFunction, isNull, isNullAndUnDef, isNullOrUnDef, isNumber, isObject, isPromise, isRegExp, isServer, isString, isUnDef, isUrl, isWindow };
//# sourceMappingURL=is.mjs.map
