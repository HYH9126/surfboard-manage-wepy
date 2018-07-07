'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  list所需数据结构
    [{
      id: String,
      series: String,
      type: String,
      size: String,
      num: Boolen,
      depot: String,
      state: String,
      outTime: String,
      returnTime: String,
      name: String,
      nationality: String,
      passpor: String,
      phone: String,
      email: String,
    }]
*/

var Boardlist = function (_wepy$component) {
  _inherits(Boardlist, _wepy$component);

  function Boardlist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Boardlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Boardlist.__proto__ || Object.getPrototypeOf(Boardlist)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Array,
        default: null
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Boardlist;
}(_wepy2.default.component);

exports.default = Boardlist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkbGlzdC5qcyJdLCJuYW1lcyI6WyJCb2FyZGxpc3QiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxLQURGO0FBRUpDLGlCQUFTO0FBRkw7QUFEQSxLOzs7O0VBRDZCQyxlQUFLQyxTOztrQkFBdkJQLFMiLCJmaWxlIjoiYm9hcmRsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcC5qcydcclxuXHJcbiAgLypcclxuICAgIGxpc3TmiYDpnIDmlbDmja7nu5PmnoRcclxuICAgICAgW3tcclxuICAgICAgICBpZDogU3RyaW5nLFxyXG4gICAgICAgIHNlcmllczogU3RyaW5nLFxyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBzaXplOiBTdHJpbmcsXHJcbiAgICAgICAgbnVtOiBCb29sZW4sXHJcbiAgICAgICAgZGVwb3Q6IFN0cmluZyxcclxuICAgICAgICBzdGF0ZTogU3RyaW5nLFxyXG4gICAgICAgIG91dFRpbWU6IFN0cmluZyxcclxuICAgICAgICByZXR1cm5UaW1lOiBTdHJpbmcsXHJcbiAgICAgICAgbmFtZTogU3RyaW5nLFxyXG4gICAgICAgIG5hdGlvbmFsaXR5OiBTdHJpbmcsXHJcbiAgICAgICAgcGFzc3BvcjogU3RyaW5nLFxyXG4gICAgICAgIHBob25lOiBTdHJpbmcsXHJcbiAgICAgICAgZW1haWw6IFN0cmluZyxcclxuICAgICAgfV1cclxuICAqL1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZGxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgbGlzdDoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19