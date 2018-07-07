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
      text: String,
      type: String,
      id: String,
      value: String,
      disabled: Boolen,
      placeHolder: String
    }]
*/

var Form = function (_wepy$component) {
  _inherits(Form, _wepy$component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      goodsId: {
        type: String,
        default: 'Undefined'
      },
      list: {
        type: Array,
        default: null
      }
    }, _this.data = {
      hourBtnActive: true,
      dayBtnActive: false
    }, _this.methods = {
      changeHDbtn: function changeHDbtn(e) {
        if (e.target.id === 'hour' && !this.hourBtnActive) {
          this.hourBtnActive = !this.hourBtnActive;
          this.dayBtnActive = !this.dayBtnActive;
          this.$emit('tapHDbtn', e.target.id);
        }
        if (e.target.id === 'day' && !this.dayBtnActive) {
          this.hourBtnActive = !this.hourBtnActive;
          this.dayBtnActive = !this.dayBtnActive;
          this.$emit('tapHDbtn', e.target.id);
        }
      },
      tapAddorSub: function tapAddorSub(e) {
        var subBoolean = true;
        var length = this.list.filter(function (ele) {
          return ele.type === 'length';
        });
        if (length[0].value === 1) subBoolean = false;

        if (e.target.id === 'sub' && subBoolean) {
          this.$emit('tapHDbtn', 'sub');
        }
        if (e.target.id === 'add') {
          this.$emit('tapHDbtn', 'add');
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Form;
}(_wepy2.default.component);

exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiZ29vZHNJZCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwibGlzdCIsIkFycmF5IiwiZGF0YSIsImhvdXJCdG5BY3RpdmUiLCJkYXlCdG5BY3RpdmUiLCJtZXRob2RzIiwiY2hhbmdlSERidG4iLCJlIiwidGFyZ2V0IiwiaWQiLCIkZW1pdCIsInRhcEFkZG9yU3ViIiwic3ViQm9vbGVhbiIsImxlbmd0aCIsImZpbHRlciIsImVsZSIsInZhbHVlIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztJQVlxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxLLEdBQVE7QUFDTkMsZUFBUztBQUNQQyxjQUFNQyxNQURDO0FBRVBDLGlCQUFTO0FBRkYsT0FESDtBQUtOQyxZQUFNO0FBQ0pILGNBQU1JLEtBREY7QUFFSkYsaUJBQVM7QUFGTDtBQUxBLEssUUFXUkcsSSxHQUFPO0FBQ0xDLHFCQUFlLElBRFY7QUFFTEMsb0JBQWM7QUFGVCxLLFFBS1BDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDSUMsQ0FESixFQUNPO0FBQ2IsWUFBSUEsRUFBRUMsTUFBRixDQUFTQyxFQUFULEtBQWdCLE1BQWhCLElBQTBCLENBQUMsS0FBS04sYUFBcEMsRUFBa0Q7QUFDaEQsZUFBS0EsYUFBTCxHQUFxQixDQUFDLEtBQUtBLGFBQTNCO0FBQ0EsZUFBS0MsWUFBTCxHQUFvQixDQUFDLEtBQUtBLFlBQTFCO0FBQ0EsZUFBS00sS0FBTCxDQUFXLFVBQVgsRUFBdUJILEVBQUVDLE1BQUYsQ0FBU0MsRUFBaEM7QUFDRDtBQUNELFlBQUlGLEVBQUVDLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQixLQUFoQixJQUF5QixDQUFDLEtBQUtMLFlBQW5DLEVBQWdEO0FBQzlDLGVBQUtELGFBQUwsR0FBcUIsQ0FBQyxLQUFLQSxhQUEzQjtBQUNBLGVBQUtDLFlBQUwsR0FBb0IsQ0FBQyxLQUFLQSxZQUExQjtBQUNBLGVBQUtNLEtBQUwsQ0FBVyxVQUFYLEVBQXVCSCxFQUFFQyxNQUFGLENBQVNDLEVBQWhDO0FBQ0Q7QUFDRixPQVpPO0FBY1JFLGlCQWRRLHVCQWNJSixDQWRKLEVBY087QUFDYixZQUFJSyxhQUFhLElBQWpCO0FBQ0EsWUFBSUMsU0FBUyxLQUFLYixJQUFMLENBQVVjLE1BQVYsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3JDLGlCQUFPQSxJQUFJbEIsSUFBSixLQUFhLFFBQXBCO0FBQ0QsU0FGWSxDQUFiO0FBR0EsWUFBR2dCLE9BQU8sQ0FBUCxFQUFVRyxLQUFWLEtBQW9CLENBQXZCLEVBQTBCSixhQUFhLEtBQWI7O0FBRTFCLFlBQUlMLEVBQUVDLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQixLQUFoQixJQUF5QkcsVUFBN0IsRUFBd0M7QUFDdEMsZUFBS0YsS0FBTCxDQUFXLFVBQVgsRUFBdUIsS0FBdkI7QUFDRDtBQUNELFlBQUlILEVBQUVDLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQixLQUFwQixFQUEwQjtBQUN4QixlQUFLQyxLQUFMLENBQVcsVUFBWCxFQUF1QixLQUF2QjtBQUNEO0FBQ0Y7QUEzQk8sSzs7OztFQWpCc0JPLGVBQUtDLFM7O2tCQUFsQnhCLEkiLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAuanMnXHJcblxyXG4gIC8qXHJcbiAgICBsaXN05omA6ZyA5pWw5o2u57uT5p6EXHJcbiAgICAgIFt7XHJcbiAgICAgICAgdGV4dDogU3RyaW5nLFxyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBpZDogU3RyaW5nLFxyXG4gICAgICAgIHZhbHVlOiBTdHJpbmcsXHJcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlbixcclxuICAgICAgICBwbGFjZUhvbGRlcjogU3RyaW5nXHJcbiAgICAgIH1dXHJcbiAgKi9cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBnb29kc0lkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdVbmRlZmluZWQnXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpc3Q6IHtcclxuICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBob3VyQnRuQWN0aXZlOiB0cnVlLFxyXG4gICAgICBkYXlCdG5BY3RpdmU6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2hhbmdlSERidG4oZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2hvdXInICYmICF0aGlzLmhvdXJCdG5BY3RpdmUpe1xyXG4gICAgICAgICAgdGhpcy5ob3VyQnRuQWN0aXZlID0gIXRoaXMuaG91ckJ0bkFjdGl2ZVxyXG4gICAgICAgICAgdGhpcy5kYXlCdG5BY3RpdmUgPSAhdGhpcy5kYXlCdG5BY3RpdmVcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhcEhEYnRuJywgZS50YXJnZXQuaWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2RheScgJiYgIXRoaXMuZGF5QnRuQWN0aXZlKXtcclxuICAgICAgICAgIHRoaXMuaG91ckJ0bkFjdGl2ZSA9ICF0aGlzLmhvdXJCdG5BY3RpdmVcclxuICAgICAgICAgIHRoaXMuZGF5QnRuQWN0aXZlID0gIXRoaXMuZGF5QnRuQWN0aXZlXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCd0YXBIRGJ0bicsIGUudGFyZ2V0LmlkKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIHRhcEFkZG9yU3ViKGUpIHtcclxuICAgICAgICBsZXQgc3ViQm9vbGVhbiA9IHRydWVcclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5saXN0LmZpbHRlcigoZWxlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZWxlLnR5cGUgPT09ICdsZW5ndGgnXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihsZW5ndGhbMF0udmFsdWUgPT09IDEpIHN1YkJvb2xlYW4gPSBmYWxzZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3N1YicgJiYgc3ViQm9vbGVhbil7XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCd0YXBIRGJ0bicsICdzdWInKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdhZGQnKXtcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhcEhEYnRuJywgJ2FkZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=