'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigatorBack = function (_wepy$component) {
  _inherits(NavigatorBack, _wepy$component);

  function NavigatorBack() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavigatorBack);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavigatorBack.__proto__ || Object.getPrototypeOf(NavigatorBack)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      pages: {
        type: Number,
        default: 1
      },
      message: {
        type: String,
        default: 'Undefined'
      }
    }, _this.methods = {
      goBack: function goBack() {
        wx.navigateTo({ url: 'home' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return NavigatorBack;
}(_wepy2.default.component);

exports.default = NavigatorBack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRvci1iYWNrLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRvckJhY2siLCJwcm9wcyIsInBhZ2VzIiwidHlwZSIsIk51bWJlciIsImRlZmF1bHQiLCJtZXNzYWdlIiwiU3RyaW5nIiwibWV0aG9kcyIsImdvQmFjayIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxpQkFBUztBQUZKLE9BREQ7QUFLTkMsZUFBUztBQUNQSCxjQUFNSSxNQURDO0FBRVBGLGlCQUFTO0FBRkY7QUFMSCxLLFFBV1JHLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1BDLFdBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLE1BQUwsRUFBZDtBQUNEO0FBSE8sSzs7OztFQVorQkMsZUFBS0MsUzs7a0JBQTNCZCxhIiwiZmlsZSI6Im5hdmlnYXRvci1iYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0b3JCYWNrIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgcGFnZXM6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAxXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdVbmRlZmluZWQnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6J2hvbWUnfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19