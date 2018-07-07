'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _index = require('./../lang/index.js');

var _tabBar = require('./../components/tab-bar.js');

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "tabBar": { "xmlns:v-bind": "", "v-bind:list.sync": "m", "father": "home" } }, _this.$events = {}, _this.components = {
      tabBar: _tabBar2.default
    }, _this.data = {
      // 语种
      language: '',
      // 静态文字
      m: {},
      enbtnBg: '',
      zhbtnBg: ''
    }, _this.methods = {
      islang: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var target, lang;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  target = e.target.id;
                  lang = target === 'en' ? 'en' : 'zh';

                  this.langbtnbgChange(target);
                  _context.next = 5;
                  return (0, _index.setLang)(lang);

                case 5:
                  _context.next = 7;
                  return (0, _index.getLang)('home', this);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function islang(_x) {
          return _ref2.apply(this, arguments);
        }

        return islang;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'langbtnbgChange',
    value: function langbtnbgChange(target) {
      if (target === 'en') {
        this.enbtnBg = 'langBtn-tap';
        this.zhbtnBg = '';
      } else {
        this.zhbtnBg = 'langBtn-tap';
        this.enbtnBg = '';
      }
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _index.getLang)('home', this);

              case 2:
                this.language === 'en' ? this.enbtnBg = 'langBtn-tap' : this.zhbtnBg = 'langBtn-tap';

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYkJhciIsIlRhYkJhciIsImRhdGEiLCJsYW5ndWFnZSIsIm0iLCJlbmJ0bkJnIiwiemhidG5CZyIsIm1ldGhvZHMiLCJpc2xhbmciLCJlIiwidGFyZ2V0IiwiaWQiLCJsYW5nIiwibGFuZ2J0bmJnQ2hhbmdlIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDcEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsR0FBdEMsRUFBMEMsVUFBUyxNQUFuRCxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGNBQVFDO0FBREEsSyxRQUlWQyxJLEdBQU87QUFDTDtBQUNBQyxnQkFBVSxFQUZMO0FBR0w7QUFDQUMsU0FBRyxFQUpFO0FBS0xDLGVBQVMsRUFMSjtBQU1MQyxlQUFTO0FBTkosSyxRQVNQQyxPLEdBQVU7QUFDRkMsWUFERTtBQUFBLDZGQUNLQyxDQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyx3QkFGRSxHQUVPRCxFQUFFQyxNQUFGLENBQVNDLEVBRmhCO0FBR0ZDLHNCQUhFLEdBR0tGLFdBQVcsSUFBWCxHQUFrQixJQUFsQixHQUF5QixJQUg5Qjs7QUFJTix1QkFBS0csZUFBTCxDQUFxQkgsTUFBckI7QUFKTTtBQUFBLHlCQUtBLG9CQUFRRSxJQUFSLENBTEE7O0FBQUE7QUFBQTtBQUFBLHlCQU1BLG9CQUFRLE1BQVIsRUFBZ0IsSUFBaEIsQ0FOQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O29DQVVNRixNLEVBQVE7QUFDdEIsVUFBR0EsV0FBVyxJQUFkLEVBQW1CO0FBQ2pCLGFBQUtMLE9BQUwsR0FBZSxhQUFmO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFDRCxPQUhELE1BR0s7QUFDSCxhQUFLQSxPQUFMLEdBQWUsYUFBZjtBQUNBLGFBQUtELE9BQUwsR0FBZSxFQUFmO0FBQ0Q7QUFDRCxXQUFLUyxNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7dUJBR08sb0JBQVEsTUFBUixFQUFnQixJQUFoQixDOzs7QUFDTixxQkFBS1gsUUFBTCxLQUFrQixJQUFsQixHQUF5QixLQUFLRSxPQUFMLEdBQWUsYUFBeEMsR0FBd0QsS0FBS0MsT0FBTCxHQUFlLGFBQXZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEM4QlMsZUFBS0MsSTs7a0JBQWxCckIsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGkuanMnXHJcbiAgaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAuanMnXHJcbiAgaW1wb3J0IHtnZXRMYW5nLCBzZXRMYW5nfSBmcm9tICcuLi9sYW5nL2luZGV4LmpzJ1xyXG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy90YWItYmFyJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJCYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwibVwiLFwiZmF0aGVyXCI6XCJob21lXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgdGFiQmFyOiBUYWJCYXJcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAvLyDor63np41cclxuICAgICAgbGFuZ3VhZ2U6ICcnLFxyXG4gICAgICAvLyDpnZnmgIHmloflrZdcclxuICAgICAgbToge30sXHJcbiAgICAgIGVuYnRuQmc6ICcnLFxyXG4gICAgICB6aGJ0bkJnOiAnJyxcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBhc3luYyBpc2xhbmcoZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC5pZFxyXG4gICAgICAgIGxldCBsYW5nID0gdGFyZ2V0ID09PSAnZW4nID8gJ2VuJyA6ICd6aCdcclxuICAgICAgICB0aGlzLmxhbmdidG5iZ0NoYW5nZSh0YXJnZXQpXHJcbiAgICAgICAgYXdhaXQgc2V0TGFuZyhsYW5nKVxyXG4gICAgICAgIGF3YWl0IGdldExhbmcoJ2hvbWUnLCB0aGlzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFuZ2J0bmJnQ2hhbmdlKHRhcmdldCkge1xyXG4gICAgICBpZih0YXJnZXQgPT09ICdlbicpe1xyXG4gICAgICAgIHRoaXMuZW5idG5CZyA9ICdsYW5nQnRuLXRhcCdcclxuICAgICAgICB0aGlzLnpoYnRuQmcgPSAnJ1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnpoYnRuQmcgPSAnbGFuZ0J0bi10YXAnXHJcbiAgICAgICAgdGhpcy5lbmJ0bkJnID0gJydcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBhd2FpdCBnZXRMYW5nKCdob21lJywgdGhpcylcclxuICAgICAgdGhpcy5sYW5ndWFnZSA9PT0gJ2VuJyA/IHRoaXMuZW5idG5CZyA9ICdsYW5nQnRuLXRhcCcgOiB0aGlzLnpoYnRuQmcgPSAnbGFuZ0J0bi10YXAnXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=