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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_wepy$component) {
  _inherits(Pagination, _wepy$component);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      surfboardList: [],
      pageNo: 0,
      pageTotal: 0,
      hiddenLoading: false,
      resultTipParams: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pagination, [{
    key: 'getSurfBoardList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pageNo, size) {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.hiddenLoading = true;
                _context.next = 3;
                return _api2.default.getSurfboardList({
                  query: {
                    page: pageNo || 1,
                    size: size || 10
                  }
                });

              case 3:
                json = _context.sent;

                if (!json) {
                  _tip2.default.error('请求无结果');
                } else if (json.errno) {
                  _tip2.default.error(json.errno);
                } else {
                  this.surfboardList = json.data;
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSurfBoardList(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getSurfBoardList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getSurfBoardList();
    }
  }]);

  return Pagination;
}(_wepy2.default.component);

exports.default = Pagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uanMiXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsImNvbXBvbmVudHMiLCJkYXRhIiwic3VyZmJvYXJkTGlzdCIsInBhZ2VObyIsInBhZ2VUb3RhbCIsImhpZGRlbkxvYWRpbmciLCJyZXN1bHRUaXBQYXJhbXMiLCJzaXplIiwiYXBpIiwiZ2V0U3VyZmJvYXJkTGlzdCIsInF1ZXJ5IiwicGFnZSIsImpzb24iLCJ0aXAiLCJlcnJvciIsImVycm5vIiwiZ2V0U3VyZkJvYXJkTGlzdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxVLEdBQWEsRSxRQUdiQyxJLEdBQU87QUFDTEMscUJBQWUsRUFEVjtBQUVMQyxjQUFRLENBRkg7QUFHTEMsaUJBQVcsQ0FITjtBQUlMQyxxQkFBZSxLQUpWO0FBS0xDLHVCQUFpQjtBQUxaLEs7Ozs7OzsyRkFRZ0JILE0sRUFBUUksSTs7Ozs7O0FBQzdCLHFCQUFLRixhQUFMLEdBQXFCLElBQXJCOzt1QkFDbUJHLGNBQUlDLGdCQUFKLENBQXFCO0FBQ3RDQyx5QkFBTztBQUNMQywwQkFBTVIsVUFBVSxDQURYO0FBRUxJLDBCQUFNQSxRQUFRO0FBRlQ7QUFEK0IsaUJBQXJCLEM7OztBQUFiSyxvQjs7QUFNTixvQkFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDUEMsZ0NBQUlDLEtBQUosQ0FBVSxPQUFWO0FBQ0QsaUJBRkQsTUFFTSxJQUFHRixLQUFLRyxLQUFSLEVBQWM7QUFDbEJGLGdDQUFJQyxLQUFKLENBQVVGLEtBQUtHLEtBQWY7QUFDRCxpQkFGSyxNQUVEO0FBQ0gsdUJBQUtiLGFBQUwsR0FBcUJVLEtBQUtYLElBQTFCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHSztBQUNOLFdBQUtlLGdCQUFMO0FBQ0Q7Ozs7RUEvQnFDQyxlQUFLQyxTOztrQkFBeEJuQixVIiwiZmlsZSI6InBhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudHtcclxuICBjb21wb25lbnRzID0ge1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHN1cmZib2FyZExpc3Q6IFtdLFxyXG4gICAgcGFnZU5vOiAwLFxyXG4gICAgcGFnZVRvdGFsOiAwLFxyXG4gICAgaGlkZGVuTG9hZGluZzogZmFsc2UsXHJcbiAgICByZXN1bHRUaXBQYXJhbXM6IHt9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRTdXJmQm9hcmRMaXN0KHBhZ2VObywgc2l6ZSl7XHJcbiAgICB0aGlzLmhpZGRlbkxvYWRpbmcgPSB0cnVlXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldFN1cmZib2FyZExpc3Qoe1xyXG4gICAgICBxdWVyeToge1xyXG4gICAgICAgIHBhZ2U6IHBhZ2VObyB8fCAxLFxyXG4gICAgICAgIHNpemU6IHNpemUgfHwgMTBcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmKCFqc29uKXtcclxuICAgICAgdGlwLmVycm9yKCfor7fmsYLml6Dnu5PmnpwnKVxyXG4gICAgfWVsc2UgaWYoanNvbi5lcnJubyl7XHJcbiAgICAgIHRpcC5lcnJvcihqc29uLmVycm5vKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc3VyZmJvYXJkTGlzdCA9IGpzb24uZGF0YVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB0aGlzLmdldFN1cmZCb2FyZExpc3QoKVxyXG4gIH1cclxufVxyXG4iXX0=