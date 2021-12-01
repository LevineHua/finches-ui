'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var propTypes = require('../../../utils/propTypes.js');

const basicProps = {
  labelWidth: {
    type: [Number, String],
    default: 0
  },
  labelPosition: propTypes.propTypes.oneOf(["right", "left", "top"]).def("right"),
  size: propTypes.propTypes.oneOf(["medium", "small", "mini"]).def("medium"),
  disabled: propTypes.propTypes.bool.def(false),
  schemas: {
    type: [Array],
    default: () => []
  },
  submitOnReset: propTypes.propTypes.bool,
  transformDateFunc: {
    type: Function,
    default: (date) => {
      return date._isAMomentObject ? date == null ? void 0 : date.format("YYYY-MM-DD HH:mm:ss") : date;
    }
  },
  showActionButtonGroup: propTypes.propTypes.bool.def(true),
  actionColOptions: Object,
  showResetButton: propTypes.propTypes.bool.def(true),
  resetButtonOptions: Object,
  resetFunc: Function,
  submitFunc: Function,
  labelCol: Object,
  wrapperCol: Object,
  rowProps: Object,
  baseRowStyle: {
    type: Object
  },
  baseColProps: {
    type: Object
  }
};

exports.basicProps = basicProps;
//# sourceMappingURL=props.js.map
