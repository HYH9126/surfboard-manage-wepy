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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      // 语种
      language: '',
      // 静态文字
      m: {},
      enbtnBg: '',
      zhbtnBg: '',
      // 全局装填登录验证返回值
      json: {},
      isHidden: false,
      rawData: null,
      encryptedData: null

      //监听请求返回状态码，继而判断下一步做什么
    }, _this.watch = {
      json: function json(newValue, oldValue) {
        switch (newValue.code) {
          // 登陆成功
          case 0:
            _tip2.default.success('Login success！', 1000);
            _wepy2.default.redirectTo({ url: './home' });
            break;
          // 需通过userInfo验证登录
          case 10000:
            this.queryAuthorizationInformation();
            this.json = null;
            break;
          // 需通过phone验证登录
          case 10003:
          case 10004:
            this.isHidden = true;
            this.json = null;
            break;
          // 无权限登录
          case 10006:
            _tip2.default.error(newValue.data, function () {
              _wepy2.default.navigateBack(-1);
            });
            break;
          // 微信接口请求错误
          case -500:
          case 10001:
          case 10002:
          case 10005:
            _tip2.default.error('error：' + newValue.errno);
            console.log('status:' + newValue.errno + '，' + newValue.data);
            this.json = null;
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'getUnionidByCode',


    // 通过code获取unionId验证用户身份
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.login();

              case 2:
                res = _context.sent;
                _context.next = 5;
                return _api2.default.getIsRegisteredusersByCodeid({
                  query: {
                    code: res.code
                  }
                });

              case 5:
                data = _context.sent;

                this.json = data.data;
                if (data.statusCode >= 400) {
                  _tip2.default.error('error!' + data.statusCode);
                }
                this.$apply();

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUnionidByCode() {
        return _ref2.apply(this, arguments);
      }

      return getUnionidByCode;
    }()

    // 通过userInfo获取unionId验证用户身份

  }, {
    key: 'getUnionidByUserinfo',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(info) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.getIsRegisteredusersByUserinfo({
                  query: info
                });

              case 2:
                data = _context2.sent;

                this.json = data.data;
                if (data.statusCode >= 400) {
                  _tip2.default.error('error!' + data.statusCode);
                }
                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUnionidByUserinfo(_x) {
        return _ref3.apply(this, arguments);
      }

      return getUnionidByUserinfo;
    }()

    // 通过phone验证登录

  }, {
    key: 'getUnionidByPhone',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(phone) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.getIsRegisteredusersByPhone({
                  query: {
                    iv: phone.iv,
                    encryptedData: phone.encryptedData
                  }
                });

              case 2:
                data = _context3.sent;

                this.json = data.data;
                if (data.statusCode >= 400) {
                  _tip2.default.error('error！' + data.statusCode);
                }
                this.$apply();

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUnionidByPhone(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getUnionidByPhone;
    }()

    // 查询授权信息

  }, {
    key: 'queryAuthorizationInformation',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var res, infoRes;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wepy2.default.getSetting();

              case 2:
                res = _context4.sent;

                if (!res.authSetting['scope.userInfo']) {
                  _context4.next = 14;
                  break;
                }

                this.isHidden = true;
                this.$apply();
                _context4.next = 8;
                return _wepy2.default.getUserInfo();

              case 8:
                infoRes = _context4.sent;

                this.rawData = infoRes.rawData;
                this.encryptedData = infoRes.encryptedData;
                this.getUnionidByUserinfo(infoRes);
                _context4.next = 15;
                break;

              case 14:
                console.log('没有授权，请点击按钮授权');

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function queryAuthorizationInformation() {
        return _ref5.apply(this, arguments);
      }

      return queryAuthorizationInformation;
    }()

    // 点击按钮，授权并获取userInfo，再进行处理

  }, {
    key: 'bindGetUserInfo',
    value: function bindGetUserInfo(e) {
      this.rawData = e.detail.rawData;
      this.encryptedData = e.detail.encryptedData;
      this.getUnionidByUserinfo(e.detail);
    }

    // 点击按钮，授权并获取phone，再进行处理

  }, {
    key: 'bindgetphonenumber',
    value: function bindgetphonenumber(e) {
      var data = e.detail;
      data.rawData = this.rawData;
      data.encryptedData2 = this.encryptedData;
      this.getUnionidByPhone(data);
    }
  }, {
    key: 'islang',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
        var target, lang;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                target = e.target.id;
                lang = target === 'en' ? 'en' : 'zh';
                _context5.next = 4;
                return (0, _index.setLang)(lang);

              case 4:
                _context5.next = 6;
                return (0, _index.getLang)('login', this);

              case 6:
                this.langbtnbgChange(target);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function islang(_x3) {
        return _ref6.apply(this, arguments);
      }

      return islang;
    }()
  }, {
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
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _wepy2.default.redirectTo({ url: './home' });
                _context6.next = 3;
                return (0, _index.getLang)('login', this);

              case 3:
                this.language === 'en' ? this.enbtnBg = 'langBtn-tap' : this.zhbtnBg = 'langBtn-tap';
                // 解开下行注释，便能开启登录验证
                // await this.getUnionidByCode()

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onLoad() {
        return _ref7.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29tcG9uZW50cyIsImRhdGEiLCJsYW5ndWFnZSIsIm0iLCJlbmJ0bkJnIiwiemhidG5CZyIsImpzb24iLCJpc0hpZGRlbiIsInJhd0RhdGEiLCJlbmNyeXB0ZWREYXRhIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29kZSIsInRpcCIsInN1Y2Nlc3MiLCJ3ZXB5IiwicmVkaXJlY3RUbyIsInVybCIsInF1ZXJ5QXV0aG9yaXphdGlvbkluZm9ybWF0aW9uIiwiZXJyb3IiLCJuYXZpZ2F0ZUJhY2siLCJlcnJubyIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsInJlcyIsImFwaSIsImdldElzUmVnaXN0ZXJlZHVzZXJzQnlDb2RlaWQiLCJxdWVyeSIsInN0YXR1c0NvZGUiLCIkYXBwbHkiLCJpbmZvIiwiZ2V0SXNSZWdpc3RlcmVkdXNlcnNCeVVzZXJpbmZvIiwicGhvbmUiLCJnZXRJc1JlZ2lzdGVyZWR1c2Vyc0J5UGhvbmUiLCJpdiIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwiaW5mb1JlcyIsImdldFVuaW9uaWRCeVVzZXJpbmZvIiwiZSIsImRldGFpbCIsImVuY3J5cHRlZERhdGEyIiwiZ2V0VW5pb25pZEJ5UGhvbmUiLCJ0YXJnZXQiLCJpZCIsImxhbmciLCJsYW5nYnRuYmdDaGFuZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0w7QUFDQUMsZ0JBQVUsRUFGTDtBQUdMO0FBQ0FDLFNBQUcsRUFKRTtBQUtMQyxlQUFTLEVBTEo7QUFNTEMsZUFBUyxFQU5KO0FBT0w7QUFDQUMsWUFBTSxFQVJEO0FBU0xDLGdCQUFVLEtBVEw7QUFVTEMsZUFBUyxJQVZKO0FBV0xDLHFCQUFlOztBQUdqQjtBQWRPLEssUUFlUEMsSyxHQUFRO0FBQ05KLFVBRE0sZ0JBQ0FLLFFBREEsRUFDVUMsUUFEVixFQUNvQjtBQUN4QixnQkFBT0QsU0FBU0UsSUFBaEI7QUFDRTtBQUNBLGVBQUssQ0FBTDtBQUNFQywwQkFBSUMsT0FBSixDQUFZLGdCQUFaLEVBQThCLElBQTlCO0FBQ0FDLDJCQUFLQyxVQUFMLENBQWdCLEVBQUNDLEtBQUssUUFBTixFQUFoQjtBQUNBO0FBQ0Y7QUFDQSxlQUFLLEtBQUw7QUFDRSxpQkFBS0MsNkJBQUw7QUFDQSxpQkFBS2IsSUFBTCxHQUFZLElBQVo7QUFDQTtBQUNGO0FBQ0EsZUFBSyxLQUFMO0FBQ0EsZUFBSyxLQUFMO0FBQ0UsaUJBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxpQkFBS0QsSUFBTCxHQUFZLElBQVo7QUFDQTtBQUNGO0FBQ0EsZUFBSyxLQUFMO0FBQ0VRLDBCQUFJTSxLQUFKLENBQVVULFNBQVNWLElBQW5CLEVBQXlCLFlBQU07QUFBQ2UsNkJBQUtLLFlBQUwsQ0FBa0IsQ0FBQyxDQUFuQjtBQUFzQixhQUF0RDtBQUNBO0FBQ0Y7QUFDQSxlQUFLLENBQUMsR0FBTjtBQUNBLGVBQUssS0FBTDtBQUNBLGVBQUssS0FBTDtBQUNBLGVBQUssS0FBTDtBQUNFUCwwQkFBSU0sS0FBSixDQUFVLFdBQVVULFNBQVNXLEtBQTdCO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVksWUFBWWIsU0FBU1csS0FBckIsR0FBNEIsR0FBNUIsR0FBZ0NYLFNBQVNWLElBQXJEO0FBQ0EsaUJBQUtLLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUE3Qko7QUErQkQ7QUFqQ0ssSzs7Ozs7OztBQW9DUjs7Ozs7Ozs7O3VCQUVrQlUsZUFBS1MsS0FBTCxFOzs7QUFBWkMsbUI7O3VCQUNlQyxjQUFJQyw0QkFBSixDQUFpQztBQUNsREMseUJBQU07QUFDSmhCLDBCQUFNYSxJQUFJYjtBQUROO0FBRDRDLGlCQUFqQyxDOzs7QUFBYlosb0I7O0FBS04scUJBQUtLLElBQUwsR0FBWUwsS0FBS0EsSUFBakI7QUFDQSxvQkFBR0EsS0FBSzZCLFVBQUwsSUFBbUIsR0FBdEIsRUFBMEI7QUFDeEJoQixnQ0FBSU0sS0FBSixDQUFVLFdBQVduQixLQUFLNkIsVUFBMUI7QUFDRDtBQUNELHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs0RkFDMkJDLEk7Ozs7Ozs7dUJBQ05MLGNBQUlNLDhCQUFKLENBQW1DO0FBQ3BESix5QkFBTUc7QUFEOEMsaUJBQW5DLEM7OztBQUFiL0Isb0I7O0FBR04scUJBQUtLLElBQUwsR0FBWUwsS0FBS0EsSUFBakI7QUFDQSxvQkFBR0EsS0FBSzZCLFVBQUwsSUFBbUIsR0FBdEIsRUFBMEI7QUFDeEJoQixnQ0FBSU0sS0FBSixDQUFVLFdBQVduQixLQUFLNkIsVUFBMUI7QUFDRDtBQUNELHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs0RkFDd0JHLEs7Ozs7Ozs7dUJBQ0hQLGNBQUlRLDJCQUFKLENBQWdDO0FBQ2pETix5QkFBTTtBQUNKTyx3QkFBSUYsTUFBTUUsRUFETjtBQUVKM0IsbUNBQWV5QixNQUFNekI7QUFGakI7QUFEMkMsaUJBQWhDLEM7OztBQUFiUixvQjs7QUFNTixxQkFBS0ssSUFBTCxHQUFZTCxLQUFLQSxJQUFqQjtBQUNBLG9CQUFHQSxLQUFLNkIsVUFBTCxJQUFtQixHQUF0QixFQUEwQjtBQUN4QmhCLGdDQUFJTSxLQUFKLENBQVUsV0FBV25CLEtBQUs2QixVQUExQjtBQUNEO0FBQ0QscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7Ozs7Ozs7Ozt1QkFFa0JmLGVBQUtxQixVQUFMLEU7OztBQUFaWCxtQjs7cUJBQ0NBLElBQUlZLFdBQUwsQ0FBa0IsZ0JBQWxCLEM7Ozs7O0FBQ0YscUJBQUsvQixRQUFMLEdBQWdCLElBQWhCO0FBQ0EscUJBQUt3QixNQUFMOzt1QkFDb0JmLGVBQUt1QixXQUFMLEU7OztBQUFoQkMsdUI7O0FBQ0oscUJBQUtoQyxPQUFMLEdBQWVnQyxRQUFRaEMsT0FBdkI7QUFDQSxxQkFBS0MsYUFBTCxHQUFxQitCLFFBQVEvQixhQUE3QjtBQUNBLHFCQUFLZ0Msb0JBQUwsQ0FBMEJELE9BQTFCOzs7OztBQUVBakIsd0JBQVFDLEdBQVIsQ0FBWSxjQUFaOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlKOzs7O29DQUNnQmtCLEMsRUFBRztBQUNqQixXQUFLbEMsT0FBTCxHQUFla0MsRUFBRUMsTUFBRixDQUFTbkMsT0FBeEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCaUMsRUFBRUMsTUFBRixDQUFTbEMsYUFBOUI7QUFDQSxXQUFLZ0Msb0JBQUwsQ0FBMEJDLEVBQUVDLE1BQTVCO0FBQ0Q7O0FBRUQ7Ozs7dUNBQ21CRCxDLEVBQUc7QUFDcEIsVUFBSXpDLE9BQU95QyxFQUFFQyxNQUFiO0FBQ0ExQyxXQUFLTyxPQUFMLEdBQWUsS0FBS0EsT0FBcEI7QUFDQVAsV0FBSzJDLGNBQUwsR0FBc0IsS0FBS25DLGFBQTNCO0FBQ0EsV0FBS29DLGlCQUFMLENBQXVCNUMsSUFBdkI7QUFDRDs7Ozs0RkFFWXlDLEM7Ozs7OztBQUNQSSxzQixHQUFTSixFQUFFSSxNQUFGLENBQVNDLEU7QUFDbEJDLG9CLEdBQU9GLFdBQVcsSUFBWCxHQUFrQixJQUFsQixHQUF5QixJOzt1QkFDOUIsb0JBQVFFLElBQVIsQzs7Ozt1QkFDQSxvQkFBUSxPQUFSLEVBQWlCLElBQWpCLEM7OztBQUNOLHFCQUFLQyxlQUFMLENBQXFCSCxNQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUdjQSxNLEVBQVE7QUFDdEIsVUFBR0EsV0FBVyxJQUFkLEVBQW1CO0FBQ2pCLGFBQUsxQyxPQUFMLEdBQWUsYUFBZjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0QsT0FIRCxNQUdLO0FBQ0gsYUFBS0EsT0FBTCxHQUFlLGFBQWY7QUFDQSxhQUFLRCxPQUFMLEdBQWUsRUFBZjtBQUNEO0FBQ0QsV0FBSzJCLE1BQUw7QUFDRDs7Ozs7Ozs7O0FBR0NmLCtCQUFLQyxVQUFMLENBQWdCLEVBQUNDLEtBQUssUUFBTixFQUFoQjs7dUJBQ00sb0JBQVEsT0FBUixFQUFpQixJQUFqQixDOzs7QUFDTixxQkFBS2hCLFFBQUwsS0FBa0IsSUFBbEIsR0FBeUIsS0FBS0UsT0FBTCxHQUFlLGFBQXhDLEdBQXdELEtBQUtDLE9BQUwsR0FBZSxhQUF2RTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2SitCVyxlQUFLa0MsSTs7a0JBQW5CbkQsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGkuanMnXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xuICBpbXBvcnQge2dldExhbmcsIHNldExhbmd9IGZyb20gJy4uL2xhbmcvaW5kZXguanMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIC8vIOivreenjVxuICAgICAgbGFuZ3VhZ2U6ICcnLFxuICAgICAgLy8g6Z2Z5oCB5paH5a2XXG4gICAgICBtOiB7fSxcbiAgICAgIGVuYnRuQmc6ICcnLFxuICAgICAgemhidG5CZzogJycsXG4gICAgICAvLyDlhajlsYDoo4XloavnmbvlvZXpqozor4Hov5Tlm57lgLxcbiAgICAgIGpzb246IHt9LFxuICAgICAgaXNIaWRkZW46IGZhbHNlLFxuICAgICAgcmF3RGF0YTogbnVsbCxcbiAgICAgIGVuY3J5cHRlZERhdGE6IG51bGxcbiAgICB9XG5cbiAgICAvL+ebkeWQrOivt+axgui/lOWbnueKtuaAgeegge+8jOe7p+iAjOWIpOaWreS4i+S4gOatpeWBmuS7gOS5iFxuICAgIHdhdGNoID0ge1xuICAgICAganNvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN3aXRjaChuZXdWYWx1ZS5jb2RlKSB7XG4gICAgICAgICAgLy8g55m76ZmG5oiQ5YqfXG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGlwLnN1Y2Nlc3MoJ0xvZ2luIHN1Y2Nlc3PvvIEnLCAxMDAwKVxuICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6ICcuL2hvbWUnfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgLy8g6ZyA6YCa6L+HdXNlckluZm/pqozor4HnmbvlvZVcbiAgICAgICAgICBjYXNlIDEwMDAwOlxuICAgICAgICAgICAgdGhpcy5xdWVyeUF1dGhvcml6YXRpb25JbmZvcm1hdGlvbigpXG4gICAgICAgICAgICB0aGlzLmpzb24gPSBudWxsXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIC8vIOmcgOmAmui/h3Bob25l6aqM6K+B55m75b2VXG4gICAgICAgICAgY2FzZSAxMDAwMzpcbiAgICAgICAgICBjYXNlIDEwMDA0OlxuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuanNvbiA9IG51bGxcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgLy8g5peg5p2D6ZmQ55m75b2VXG4gICAgICAgICAgY2FzZSAxMDAwNjpcbiAgICAgICAgICAgIHRpcC5lcnJvcihuZXdWYWx1ZS5kYXRhLCAoKSA9PiB7d2VweS5uYXZpZ2F0ZUJhY2soLTEpfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgLy8g5b6u5L+h5o6l5Y+j6K+35rGC6ZSZ6K+vXG4gICAgICAgICAgY2FzZSAtNTAwOlxuICAgICAgICAgIGNhc2UgMTAwMDE6XG4gICAgICAgICAgY2FzZSAxMDAwMjpcbiAgICAgICAgICBjYXNlIDEwMDA1OlxuICAgICAgICAgICAgdGlwLmVycm9yKCdlcnJvcu+8micrIG5ld1ZhbHVlLmVycm5vKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1czonICsgbmV3VmFsdWUuZXJybm8gKyfvvIwnK25ld1ZhbHVlLmRhdGEpXG4gICAgICAgICAgICB0aGlzLmpzb24gPSBudWxsXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6YCa6L+HY29kZeiOt+WPlnVuaW9uSWTpqozor4HnlKjmiLfouqvku71cbiAgICBhc3luYyBnZXRVbmlvbmlkQnlDb2RlKCkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXRJc1JlZ2lzdGVyZWR1c2Vyc0J5Q29kZWlkKHtcbiAgICAgICAgcXVlcnk6e1xuICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLmpzb24gPSBkYXRhLmRhdGFcbiAgICAgIGlmKGRhdGEuc3RhdHVzQ29kZSA+PSA0MDApe1xuICAgICAgICB0aXAuZXJyb3IoJ2Vycm9yIScgKyBkYXRhLnN0YXR1c0NvZGUpXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgLy8g6YCa6L+HdXNlckluZm/ojrflj5Z1bmlvbklk6aqM6K+B55So5oi36Lqr5Lu9XG4gICAgYXN5bmMgZ2V0VW5pb25pZEJ5VXNlcmluZm8oaW5mbykge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXRJc1JlZ2lzdGVyZWR1c2Vyc0J5VXNlcmluZm8oe1xuICAgICAgICBxdWVyeTppbmZvXG4gICAgICB9KVxuICAgICAgdGhpcy5qc29uID0gZGF0YS5kYXRhXG4gICAgICBpZihkYXRhLnN0YXR1c0NvZGUgPj0gNDAwKXtcbiAgICAgICAgdGlwLmVycm9yKCdlcnJvciEnICsgZGF0YS5zdGF0dXNDb2RlKVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIC8vIOmAmui/h3Bob25l6aqM6K+B55m75b2VXG4gICAgYXN5bmMgZ2V0VW5pb25pZEJ5UGhvbmUocGhvbmUpe1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXRJc1JlZ2lzdGVyZWR1c2Vyc0J5UGhvbmUoe1xuICAgICAgICBxdWVyeTp7XG4gICAgICAgICAgaXY6IHBob25lLml2LFxuICAgICAgICAgIGVuY3J5cHRlZERhdGE6IHBob25lLmVuY3J5cHRlZERhdGFcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuanNvbiA9IGRhdGEuZGF0YVxuICAgICAgaWYoZGF0YS5zdGF0dXNDb2RlID49IDQwMCl7XG4gICAgICAgIHRpcC5lcnJvcignZXJyb3LvvIEnICsgZGF0YS5zdGF0dXNDb2RlKVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIC8vIOafpeivouaOiOadg+S/oeaBr1xuICAgIGFzeW5jIHF1ZXJ5QXV0aG9yaXphdGlvbkluZm9ybWF0aW9uKCkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpXG4gICAgICBpZiAoKHJlcy5hdXRoU2V0dGluZylbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICBsZXQgaW5mb1JlcyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgICAgICB0aGlzLnJhd0RhdGEgPSBpbmZvUmVzLnJhd0RhdGFcbiAgICAgICAgdGhpcy5lbmNyeXB0ZWREYXRhID0gaW5mb1Jlcy5lbmNyeXB0ZWREYXRhXG4gICAgICAgIHRoaXMuZ2V0VW5pb25pZEJ5VXNlcmluZm8oaW5mb1JlcylcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZygn5rKh5pyJ5o6I5p2D77yM6K+354K55Ye75oyJ6ZKu5o6I5p2DJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDngrnlh7vmjInpkq7vvIzmjojmnYPlubbojrflj5Z1c2VySW5mb++8jOWGjei/m+ihjOWkhOeQhlxuICAgIGJpbmRHZXRVc2VySW5mbyhlKSB7XG4gICAgICB0aGlzLnJhd0RhdGEgPSBlLmRldGFpbC5yYXdEYXRhXG4gICAgICB0aGlzLmVuY3J5cHRlZERhdGEgPSBlLmRldGFpbC5lbmNyeXB0ZWREYXRhXG4gICAgICB0aGlzLmdldFVuaW9uaWRCeVVzZXJpbmZvKGUuZGV0YWlsKVxuICAgIH1cblxuICAgIC8vIOeCueWHu+aMiemSru+8jOaOiOadg+W5tuiOt+WPlnBob25l77yM5YaN6L+b6KGM5aSE55CGXG4gICAgYmluZGdldHBob25lbnVtYmVyKGUpIHtcbiAgICAgIGxldCBkYXRhID0gZS5kZXRhaWxcbiAgICAgIGRhdGEucmF3RGF0YSA9IHRoaXMucmF3RGF0YVxuICAgICAgZGF0YS5lbmNyeXB0ZWREYXRhMiA9IHRoaXMuZW5jcnlwdGVkRGF0YVxuICAgICAgdGhpcy5nZXRVbmlvbmlkQnlQaG9uZShkYXRhKVxuICAgIH1cblxuICAgIGFzeW5jIGlzbGFuZyhlKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQuaWRcbiAgICAgIGxldCBsYW5nID0gdGFyZ2V0ID09PSAnZW4nID8gJ2VuJyA6ICd6aCdcbiAgICAgIGF3YWl0IHNldExhbmcobGFuZylcbiAgICAgIGF3YWl0IGdldExhbmcoJ2xvZ2luJywgdGhpcylcbiAgICAgIHRoaXMubGFuZ2J0bmJnQ2hhbmdlKHRhcmdldClcbiAgICB9XG5cbiAgICBsYW5nYnRuYmdDaGFuZ2UodGFyZ2V0KSB7XG4gICAgICBpZih0YXJnZXQgPT09ICdlbicpe1xuICAgICAgICB0aGlzLmVuYnRuQmcgPSAnbGFuZ0J0bi10YXAnXG4gICAgICAgIHRoaXMuemhidG5CZyA9ICcnXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy56aGJ0bkJnID0gJ2xhbmdCdG4tdGFwJ1xuICAgICAgICB0aGlzLmVuYnRuQmcgPSAnJ1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIHdlcHkucmVkaXJlY3RUbyh7dXJsOiAnLi9ob21lJ30pXG4gICAgICBhd2FpdCBnZXRMYW5nKCdsb2dpbicsIHRoaXMpXG4gICAgICB0aGlzLmxhbmd1YWdlID09PSAnZW4nID8gdGhpcy5lbmJ0bkJnID0gJ2xhbmdCdG4tdGFwJyA6IHRoaXMuemhidG5CZyA9ICdsYW5nQnRuLXRhcCdcbiAgICAgIC8vIOino+W8gOS4i+ihjOazqOmHiu+8jOS+v+iDveW8gOWQr+eZu+W9lemqjOivgVxuICAgICAgLy8gYXdhaXQgdGhpcy5nZXRVbmlvbmlkQnlDb2RlKClcbiAgICB9XG4gIH1cbiJdfQ==