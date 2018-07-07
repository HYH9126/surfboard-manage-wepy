'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.config = {
      pages: ['pages/login', 'pages/home', 'pages/rent', 'pages/return', 'pages/sell', 'pages/fix', 'pages/state'],
      window: {
        backgroundTextStyle: 'light',
        navigationStyle: 'custom'
      }
    };

    _this.use('promisify');
    return _this;
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('on launch');
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uU3R5bGUiLCJ1c2UiLCJjb25zb2xlIiwibG9nIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0Usb0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQUtmQSxNQUxlLEdBS047QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxZQUZLLEVBR0wsWUFISyxFQUlMLGNBSkssRUFLTCxZQUxLLEVBTUwsV0FOSyxFQU9MLGFBUEssQ0FEQTtBQVVQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHlCQUFpQjtBQUZYO0FBVkQsS0FMTTs7QUFFYixVQUFLQyxHQUFMLENBQVMsV0FBVDtBQUZhO0FBR2Q7Ozs7K0JBa0JVO0FBQ1RDLGNBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7Ozs7RUF4QjBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gIH1cblxuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9sb2dpbicsXG4gICAgICAncGFnZXMvaG9tZScsXG4gICAgICAncGFnZXMvcmVudCcsXG4gICAgICAncGFnZXMvcmV0dXJuJyxcbiAgICAgICdwYWdlcy9zZWxsJyxcbiAgICAgICdwYWdlcy9maXgnLFxuICAgICAgJ3BhZ2VzL3N0YXRlJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvblN0eWxlOiAnY3VzdG9tJ1xuICAgIH1cbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIGNvbnNvbGUubG9nKCdvbiBsYXVuY2gnKVxuICB9XG59XG4iXX0=