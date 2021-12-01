import { propTypes } from '../../../utils/propTypes.mjs';

const basicProps = {
  labelWidth: {
    type: [Number, String],
    default: 0
  },
  labelPosition: propTypes.oneOf(["right", "left", "top"]).def("right"),
  size: propTypes.oneOf(["medium", "small", "mini"]).def("medium"),
  disabled: propTypes.bool.def(false),
  schemas: {
    type: [Array],
    default: () => []
  },
  submitOnReset: propTypes.bool,
  transformDateFunc: {
    type: Function,
    default: (date) => {
      return date._isAMomentObject ? date == null ? void 0 : date.format("YYYY-MM-DD HH:mm:ss") : date;
    }
  },
  showActionButtonGroup: propTypes.bool.def(true),
  actionColOptions: Object,
  showResetButton: propTypes.bool.def(true),
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

export { basicProps };
//# sourceMappingURL=props.mjs.map
