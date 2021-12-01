'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var is = require('../../../../utils/is.js');

function useItemLabWidth(schemaItemRef, propsRef) {
  return vue.computed(() => {
    const schemaItem = vue.unref(schemaItemRef);
    const { labelCol = {}, wrapperCol = {} } = schemaItem.itemProps || {};
    const { labelWidth, disabledLabelWidth } = schemaItem;
    const {
      labelWidth: globalLabelWidth,
      labelCol: globalLabelCol,
      wrapperCol: globalWrapperCol,
      labelPosition
    } = vue.unref(propsRef);
    if (!globalLabelWidth && !labelWidth && !globalLabelCol || disabledLabelWidth) {
      return {
        labelCol: "200px",
        wrapperCol: {
          style: { paddingRight: labelPosition === "top" ? "0" : "200px" }
        }
      };
    }
    let width = labelWidth || globalLabelWidth;
    let paddingRight = "0";
    const col = { ...globalLabelCol, ...labelCol };
    const wrapCol = { ...globalWrapperCol, ...wrapperCol };
    const colSpan = col.span;
    const wrapColSpan = wrapCol.span;
    if (labelPosition !== "top") {
      if (width) {
        width = is.isNumber(width) ? `${width}px` : width;
      } else if (colSpan || wrapColSpan) {
        if (colSpan && !wrapColSpan) {
          width = `calc((100% / 24) * ${colSpan})`;
          paddingRight = width;
        } else if (!colSpan && wrapColSpan) {
          width = `calc((100% - ((100% / 24) * ${wrapColSpan})) / 2)`;
          paddingRight = width;
        } else {
          width = `calc((100% / 24) * ${colSpan})`;
          paddingRight = `calc(100% - ((100% / 24) * ${colSpan + wrapColSpan}))`;
        }
      }
    }
    return {
      labelCol: width,
      wrapperCol: {
        style: { paddingRight }
      }
    };
  });
}

exports.useItemLabWidth = useItemLabWidth;
//# sourceMappingURL=useLabelWidth.js.map
