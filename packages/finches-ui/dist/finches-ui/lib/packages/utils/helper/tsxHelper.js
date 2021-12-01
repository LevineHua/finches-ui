'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var is = require('../is.js');

function getSlot(slots, slot = "default", data) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null;
  }
  if (!is.isFunction(slots[slot])) {
    console.error(`${slot} is not a function!`);
    return null;
  }
  const slotFn = slots[slot];
  if (!slotFn)
    return null;
  return slotFn(data);
}

exports.getSlot = getSlot;
//# sourceMappingURL=tsxHelper.js.map
