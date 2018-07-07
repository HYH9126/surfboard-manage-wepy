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

var _boardlist = require('./../components/boardlist.js');

var _boardlist2 = _interopRequireDefault(_boardlist);

var _tabBar = require('./../components/tab-bar.js');

var _tabBar2 = _interopRequireDefault(_tabBar);

var _navigatorBack = require('./../components/navigator-back.js');

var _navigatorBack2 = _interopRequireDefault(_navigatorBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var State = function (_wepy$page) {
  _inherits(State, _wepy$page);

  function State() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, State);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = State.__proto__ || Object.getPrototypeOf(State)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "boardlist": { "v-bind:list.sync": "stateData" }, "tabBar": { "v-bind:list.sync": "m", "father": "state" }, "navigatorBack": { "xmlns:v-bind": "", "v-bind:message.sync": "page" } }, _this.$events = {}, _this.components = {
      boardlist: _boardlist2.default,
      tabBar: _tabBar2.default,
      navigatorBack: _navigatorBack2.default
    }, _this.data = {
      // 语种
      language: '',
      // 静态文字
      m: {},
      page: '',
      stateData: [{
        id: '1768S180623_0101900001',
        series: 'Sunrise',
        type: 'Long',
        size: '9\'0"',
        num: '0001',
        depot: 'Jing\'s Place',
        state: 'Idle',
        outTime: '20180705 PM 04:00',
        returnTime: '20180705 PM 07:00',
        name: 'Meimei Han',
        nationality: 'Chinese',
        passpor: 'E888888888',
        phone: '0824719821',
        email: '12093u1283@hotmail.com'
      }, {
        id: '1768S180623_0101900001',
        series: 'Sunrise',
        type: 'Long',
        size: '9\'0"',
        num: '0001',
        depot: 'Jing\'s Place',
        state: 'Idle',
        outTime: '20180705 PM 04:00',
        returnTime: '20180705 PM 07:00',
        name: 'Meimei Han',
        nationality: 'Chinese',
        passpor: 'E888888888',
        phone: '0824719821',
        email: '12093u1283@hotmail.com'
      }, {
        id: '1768S180623_0101900001',
        series: 'Sunrise',
        type: 'Long',
        size: '9\'0"',
        num: '0001',
        depot: 'Jing\'s Place',
        state: 'Idle',
        outTime: '20180705 PM 04:00',
        returnTime: '20180705 PM 07:00',
        name: 'Meimei Han',
        nationality: 'Chinese',
        passpor: 'E888888888',
        phone: '0824719821',
        email: '12093u1283@hotmail.com'
      }, {
        id: '1768S180623_0101900001',
        series: 'Sunrise',
        type: 'Long',
        size: '9\'0"',
        num: '0001',
        depot: 'Jing\'s Place',
        state: 'Idle',
        outTime: '20180705 PM 04:00',
        returnTime: '20180705 PM 07:00',
        name: 'Meimei Han',
        nationality: 'Chinese',
        passpor: 'E888888888',
        phone: '0824719821',
        email: '12093u1283@hotmail.com'
      }]
    }, _this.watch = {
      m: function m(newValue, oldValue) {
        if (newValue.page) {
          this.page = newValue.page;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(State, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _index.getLang)('state', this);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return State;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(State , 'pages/state'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLmpzIl0sIm5hbWVzIjpbIlN0YXRlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYm9hcmRsaXN0IiwiQm9hcmRsaXN0IiwidGFiQmFyIiwiVGFiQmFyIiwibmF2aWdhdG9yQmFjayIsIk5hdmlnYXRvckJhY2siLCJkYXRhIiwibGFuZ3VhZ2UiLCJtIiwicGFnZSIsInN0YXRlRGF0YSIsImlkIiwic2VyaWVzIiwidHlwZSIsInNpemUiLCJudW0iLCJkZXBvdCIsInN0YXRlIiwib3V0VGltZSIsInJldHVyblRpbWUiLCJuYW1lIiwibmF0aW9uYWxpdHkiLCJwYXNzcG9yIiwicGhvbmUiLCJlbWFpbCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsb0JBQW1CLFdBQXBCLEVBQWIsRUFBOEMsVUFBUyxFQUFDLG9CQUFtQixHQUFwQixFQUF3QixVQUFTLE9BQWpDLEVBQXZELEVBQWlHLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFqSCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxpQkFBV0MsbUJBREg7QUFFUkMsY0FBUUMsZ0JBRkE7QUFHUkMscUJBQWVDO0FBSFAsSyxRQU1WQyxJLEdBQU87QUFDTDtBQUNBQyxnQkFBVSxFQUZMO0FBR0w7QUFDQUMsU0FBRyxFQUpFO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxpQkFBVyxDQUFDO0FBQ1ZDLFlBQUksd0JBRE07QUFFVkMsZ0JBQVEsU0FGRTtBQUdWQyxjQUFNLE1BSEk7QUFJVkMscUJBSlU7QUFLVkMsYUFBSyxNQUxLO0FBTVZDLDhCQU5VO0FBT1ZDLGVBQU8sTUFQRztBQVFWQyxpQkFBUyxtQkFSQztBQVNWQyxvQkFBWSxtQkFURjtBQVVWQyxjQUFNLFlBVkk7QUFXVkMscUJBQWEsU0FYSDtBQVlWQyxpQkFBUyxZQVpDO0FBYVZDLGVBQU8sWUFiRztBQWNWQyxlQUFPO0FBZEcsT0FBRCxFQWVSO0FBQ0RiLFlBQUksd0JBREg7QUFFREMsZ0JBQVEsU0FGUDtBQUdEQyxjQUFNLE1BSEw7QUFJREMscUJBSkM7QUFLREMsYUFBSyxNQUxKO0FBTURDLDhCQU5DO0FBT0RDLGVBQU8sTUFQTjtBQVFEQyxpQkFBUyxtQkFSUjtBQVNEQyxvQkFBWSxtQkFUWDtBQVVEQyxjQUFNLFlBVkw7QUFXREMscUJBQWEsU0FYWjtBQVlEQyxpQkFBUyxZQVpSO0FBYURDLGVBQU8sWUFiTjtBQWNEQyxlQUFPO0FBZE4sT0FmUSxFQThCUjtBQUNEYixZQUFJLHdCQURIO0FBRURDLGdCQUFRLFNBRlA7QUFHREMsY0FBTSxNQUhMO0FBSURDLHFCQUpDO0FBS0RDLGFBQUssTUFMSjtBQU1EQyw4QkFOQztBQU9EQyxlQUFPLE1BUE47QUFRREMsaUJBQVMsbUJBUlI7QUFTREMsb0JBQVksbUJBVFg7QUFVREMsY0FBTSxZQVZMO0FBV0RDLHFCQUFhLFNBWFo7QUFZREMsaUJBQVMsWUFaUjtBQWFEQyxlQUFPLFlBYk47QUFjREMsZUFBTztBQWROLE9BOUJRLEVBNkNSO0FBQ0RiLFlBQUksd0JBREg7QUFFREMsZ0JBQVEsU0FGUDtBQUdEQyxjQUFNLE1BSEw7QUFJREMscUJBSkM7QUFLREMsYUFBSyxNQUxKO0FBTURDLDhCQU5DO0FBT0RDLGVBQU8sTUFQTjtBQVFEQyxpQkFBUyxtQkFSUjtBQVNEQyxvQkFBWSxtQkFUWDtBQVVEQyxjQUFNLFlBVkw7QUFXREMscUJBQWEsU0FYWjtBQVlEQyxpQkFBUyxZQVpSO0FBYURDLGVBQU8sWUFiTjtBQWNEQyxlQUFPO0FBZE4sT0E3Q1E7QUFOTixLLFFBcUVQQyxLLEdBQVE7QUFDTmpCLE9BRE0sYUFDSmtCLFFBREksRUFDTUMsUUFETixFQUNnQjtBQUNwQixZQUFHRCxTQUFTakIsSUFBWixFQUFpQjtBQUNmLGVBQUtBLElBQUwsR0FBWWlCLFNBQVNqQixJQUFyQjtBQUNEO0FBQ0Y7QUFMSyxLOzs7Ozs7Ozs7Ozs7dUJBU0Esb0JBQVEsT0FBUixFQUFpQixJQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEZ5Qm1CLGVBQUtuQixJOztrQkFBbkJkLEsiLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICBpbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcC5qcydcclxuICBpbXBvcnQgeyBnZXRMYW5nIH0gZnJvbSAnLi4vbGFuZy9pbmRleC5qcydcclxuICBpbXBvcnQgQm9hcmRsaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYm9hcmRsaXN0J1xyXG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy90YWItYmFyJ1xyXG4gIGltcG9ydCBOYXZpZ2F0b3JCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdG9yLWJhY2snXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJib2FyZGxpc3RcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJzdGF0ZURhdGFcIn0sXCJ0YWJCYXJcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJtXCIsXCJmYXRoZXJcIjpcInN0YXRlXCJ9LFwibmF2aWdhdG9yQmFja1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bWVzc2FnZS5zeW5jXCI6XCJwYWdlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgYm9hcmRsaXN0OiBCb2FyZGxpc3QsXHJcbiAgICAgIHRhYkJhcjogVGFiQmFyLFxyXG4gICAgICBuYXZpZ2F0b3JCYWNrOiBOYXZpZ2F0b3JCYWNrXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g6K+t56eNXHJcbiAgICAgIGxhbmd1YWdlOiAnJyxcclxuICAgICAgLy8g6Z2Z5oCB5paH5a2XXHJcbiAgICAgIG06IHt9LFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgc3RhdGVEYXRhOiBbe1xyXG4gICAgICAgIGlkOiAnMTc2OFMxODA2MjNfMDEwMTkwMDAwMScsXHJcbiAgICAgICAgc2VyaWVzOiAnU3VucmlzZScsXHJcbiAgICAgICAgdHlwZTogJ0xvbmcnLFxyXG4gICAgICAgIHNpemU6IGA5JzBcImAsXHJcbiAgICAgICAgbnVtOiAnMDAwMScsXHJcbiAgICAgICAgZGVwb3Q6IGBKaW5nJ3MgUGxhY2VgLFxyXG4gICAgICAgIHN0YXRlOiAnSWRsZScsXHJcbiAgICAgICAgb3V0VGltZTogJzIwMTgwNzA1IFBNIDA0OjAwJyxcclxuICAgICAgICByZXR1cm5UaW1lOiAnMjAxODA3MDUgUE0gMDc6MDAnLFxyXG4gICAgICAgIG5hbWU6ICdNZWltZWkgSGFuJyxcclxuICAgICAgICBuYXRpb25hbGl0eTogJ0NoaW5lc2UnLFxyXG4gICAgICAgIHBhc3Nwb3I6ICdFODg4ODg4ODg4JyxcclxuICAgICAgICBwaG9uZTogJzA4MjQ3MTk4MjEnLFxyXG4gICAgICAgIGVtYWlsOiAnMTIwOTN1MTI4M0Bob3RtYWlsLmNvbSdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGlkOiAnMTc2OFMxODA2MjNfMDEwMTkwMDAwMScsXHJcbiAgICAgICAgc2VyaWVzOiAnU3VucmlzZScsXHJcbiAgICAgICAgdHlwZTogJ0xvbmcnLFxyXG4gICAgICAgIHNpemU6IGA5JzBcImAsXHJcbiAgICAgICAgbnVtOiAnMDAwMScsXHJcbiAgICAgICAgZGVwb3Q6IGBKaW5nJ3MgUGxhY2VgLFxyXG4gICAgICAgIHN0YXRlOiAnSWRsZScsXHJcbiAgICAgICAgb3V0VGltZTogJzIwMTgwNzA1IFBNIDA0OjAwJyxcclxuICAgICAgICByZXR1cm5UaW1lOiAnMjAxODA3MDUgUE0gMDc6MDAnLFxyXG4gICAgICAgIG5hbWU6ICdNZWltZWkgSGFuJyxcclxuICAgICAgICBuYXRpb25hbGl0eTogJ0NoaW5lc2UnLFxyXG4gICAgICAgIHBhc3Nwb3I6ICdFODg4ODg4ODg4JyxcclxuICAgICAgICBwaG9uZTogJzA4MjQ3MTk4MjEnLFxyXG4gICAgICAgIGVtYWlsOiAnMTIwOTN1MTI4M0Bob3RtYWlsLmNvbSdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGlkOiAnMTc2OFMxODA2MjNfMDEwMTkwMDAwMScsXHJcbiAgICAgICAgc2VyaWVzOiAnU3VucmlzZScsXHJcbiAgICAgICAgdHlwZTogJ0xvbmcnLFxyXG4gICAgICAgIHNpemU6IGA5JzBcImAsXHJcbiAgICAgICAgbnVtOiAnMDAwMScsXHJcbiAgICAgICAgZGVwb3Q6IGBKaW5nJ3MgUGxhY2VgLFxyXG4gICAgICAgIHN0YXRlOiAnSWRsZScsXHJcbiAgICAgICAgb3V0VGltZTogJzIwMTgwNzA1IFBNIDA0OjAwJyxcclxuICAgICAgICByZXR1cm5UaW1lOiAnMjAxODA3MDUgUE0gMDc6MDAnLFxyXG4gICAgICAgIG5hbWU6ICdNZWltZWkgSGFuJyxcclxuICAgICAgICBuYXRpb25hbGl0eTogJ0NoaW5lc2UnLFxyXG4gICAgICAgIHBhc3Nwb3I6ICdFODg4ODg4ODg4JyxcclxuICAgICAgICBwaG9uZTogJzA4MjQ3MTk4MjEnLFxyXG4gICAgICAgIGVtYWlsOiAnMTIwOTN1MTI4M0Bob3RtYWlsLmNvbSdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGlkOiAnMTc2OFMxODA2MjNfMDEwMTkwMDAwMScsXHJcbiAgICAgICAgc2VyaWVzOiAnU3VucmlzZScsXHJcbiAgICAgICAgdHlwZTogJ0xvbmcnLFxyXG4gICAgICAgIHNpemU6IGA5JzBcImAsXHJcbiAgICAgICAgbnVtOiAnMDAwMScsXHJcbiAgICAgICAgZGVwb3Q6IGBKaW5nJ3MgUGxhY2VgLFxyXG4gICAgICAgIHN0YXRlOiAnSWRsZScsXHJcbiAgICAgICAgb3V0VGltZTogJzIwMTgwNzA1IFBNIDA0OjAwJyxcclxuICAgICAgICByZXR1cm5UaW1lOiAnMjAxODA3MDUgUE0gMDc6MDAnLFxyXG4gICAgICAgIG5hbWU6ICdNZWltZWkgSGFuJyxcclxuICAgICAgICBuYXRpb25hbGl0eTogJ0NoaW5lc2UnLFxyXG4gICAgICAgIHBhc3Nwb3I6ICdFODg4ODg4ODg4JyxcclxuICAgICAgICBwaG9uZTogJzA4MjQ3MTk4MjEnLFxyXG4gICAgICAgIGVtYWlsOiAnMTIwOTN1MTI4M0Bob3RtYWlsLmNvbSdcclxuICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCA9IHtcclxuICAgICAgbShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZihuZXdWYWx1ZS5wYWdlKXtcclxuICAgICAgICAgIHRoaXMucGFnZSA9IG5ld1ZhbHVlLnBhZ2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGF3YWl0IGdldExhbmcoJ3N0YXRlJywgdGhpcylcclxuICAgIH1cclxuICB9XHJcbiJdfQ==