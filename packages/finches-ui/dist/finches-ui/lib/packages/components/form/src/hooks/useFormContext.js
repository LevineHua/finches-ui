'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useContext = require('./useContext.js');

const key = Symbol();
function createFormContext(context) {
  return useContext.createContext(context, key);
}
function useFormContext() {
  return useContext.useContext(key);
}

exports.createFormContext = createFormContext;
exports.useFormContext = useFormContext;
//# sourceMappingURL=useFormContext.js.map
