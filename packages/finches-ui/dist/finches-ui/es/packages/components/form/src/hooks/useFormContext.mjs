import { createContext, useContext } from './useContext.mjs';

const key = Symbol();
function createFormContext(context) {
  return createContext(context, key);
}
function useFormContext() {
  return useContext(key);
}

export { createFormContext, useFormContext };
//# sourceMappingURL=useFormContext.mjs.map
