import { computed, unref } from 'vue';
import { isNumber } from '../../../../utils/is.mjs';

function useItemLabWidth(schemaItemRef, propsRef) {
  return computed(() => {
    const schemaItem = unref(schemaItemRef);
    const { labelCol = {}, wrapperCol = {} } = schemaItem.itemProps || {};
    const { labelWidth, disabledLabelWidth } = schemaItem;
    const {
      labelWidth: globalLabelWidth,
      labelCol: globalLabelCol,
      wrapperCol: globalWrapperCol,
      labelPosition
    } = unref(propsRef);
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
        width = isNumber(width) ? `${width}px` : width;
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

export { useItemLabWidth };
//# sourceMappingURL=useLabelWidth.mjs.map
