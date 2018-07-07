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

var _formlist = require('./../components/formlist.js');

var _formlist2 = _interopRequireDefault(_formlist);

var _tabBar = require('./../components/tab-bar.js');

var _tabBar2 = _interopRequireDefault(_tabBar);

var _navigatorBack = require('./../components/navigator-back.js');

var _navigatorBack2 = _interopRequireDefault(_navigatorBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Repair = function (_wepy$page) {
  _inherits(Repair, _wepy$page);

  function Repair() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Repair);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Repair.__proto__ || Object.getPrototypeOf(Repair)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "formlist": { "v-bind:list.sync": "formData", "v-bind:goodsId.sync": "goodsId" }, "tabBar": { "v-bind:list.sync": "m", "father": "fix" }, "navigatorBack": { "xmlns:v-bind": "", "v-bind:message.sync": "page" } }, _this.$events = {}, _this.components = {
      formlist: _formlist2.default,
      tabBar: _tabBar2.default,
      navigatorBack: _navigatorBack2.default
    }, _this.data = {
      // 语种
      language: '',
      // 静态文字
      m: {},
      page: '',
      fixData: {
        state: 'out',
        id: '1768S180623_0101900001',
        fixType: '',
        length: 3
      }
    }, _this.watch = {
      m: function m(newValue, oldValue) {
        if (newValue.page) {
          this.page = newValue.page;
        }
      }
    }, _this.computed = {
      goodsId: function goodsId() {
        return this.fixData.id;
      },
      formData: function formData() {
        var _this2 = this;

        // formlist组件所需数据的id是写死的
        var data = [{ id: 'fixType' }, { id: 'length' }];

        data.forEach(function (ele) {
          // 添加value
          if (ele.id === 'fixType') {
            ele.value = ['Hour', 'Day'];
          } else {
            ele.value = _this2.fixData[ele.id];
          }
          // 添加text
          ele.text = _this2.m[ele.id];
          // 添加type
          switch (ele.id) {
            case 'fixType':
              ele.type = 'button';
              break;
            case 'length':
              ele.type = 'addSub';
              break;
          }
        });
        return data;
      }
    }, _this.methods = {
      // 返回
      navToHome: function navToHome() {
        wx.navigateTo({ url: 'home' });
      },


      // 提交
      onSubmit: function onSubmit() {
        console.log(this.fixData);
      }
    }, _this.events = {
      // 修改租赁类型、出租时长
      'tapHDbtn': function tapHDbtn(id) {
        if (id === 'day') {
          _this.fixData.length = 1;
          _this.fixData.type = 'Day';
        } else {
          _this.fixData.length = 3;
          _this.fixData.type = 'Hour';
        }
      },

      // 出租时长增加、减少
      'lengthChange': function lengthChange(type) {
        if (type === 'sub') {
          _this.fixData.length--;
        } else {
          _this.fixData.length++;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // 监听子组件Formlist的事件广播


  _createClass(Repair, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _index.getLang)('fix', this);

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

  return Repair;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Repair , 'pages/fix'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpeC5qcyJdLCJuYW1lcyI6WyJSZXBhaXIiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb3JtbGlzdCIsIkZvcm1saXN0IiwidGFiQmFyIiwiVGFiQmFyIiwibmF2aWdhdG9yQmFjayIsIk5hdmlnYXRvckJhY2siLCJkYXRhIiwibGFuZ3VhZ2UiLCJtIiwicGFnZSIsImZpeERhdGEiLCJzdGF0ZSIsImlkIiwiZml4VHlwZSIsImxlbmd0aCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbXB1dGVkIiwiZ29vZHNJZCIsImZvcm1EYXRhIiwiZm9yRWFjaCIsImVsZSIsInZhbHVlIiwidGV4dCIsInR5cGUiLCJtZXRob2RzIiwibmF2VG9Ib21lIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDcEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxvQkFBbUIsVUFBcEIsRUFBK0IsdUJBQXNCLFNBQXJELEVBQVosRUFBNEUsVUFBUyxFQUFDLG9CQUFtQixHQUFwQixFQUF3QixVQUFTLEtBQWpDLEVBQXJGLEVBQTZILGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUE3SSxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxnQkFBVUMsa0JBREY7QUFFUkMsY0FBUUMsZ0JBRkE7QUFHUkMscUJBQWVDO0FBSFAsSyxRQU1WQyxJLEdBQU87QUFDTDtBQUNBQyxnQkFBVSxFQUZMO0FBR0w7QUFDQUMsU0FBRyxFQUpFO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxlQUFTO0FBQ1BDLGVBQU8sS0FEQTtBQUVQQyxZQUFJLHdCQUZHO0FBR1BDLGlCQUFTLEVBSEY7QUFJUEMsZ0JBQVE7QUFKRDtBQU5KLEssUUFjUEMsSyxHQUFRO0FBQ05QLE9BRE0sYUFDSlEsUUFESSxFQUNNQyxRQUROLEVBQ2dCO0FBQ3BCLFlBQUdELFNBQVNQLElBQVosRUFBaUI7QUFDZixlQUFLQSxJQUFMLEdBQVlPLFNBQVNQLElBQXJCO0FBQ0Q7QUFDRjtBQUxLLEssUUFRUlMsUSxHQUFXO0FBQ1RDLGFBRFMscUJBQ0M7QUFDUixlQUFPLEtBQUtULE9BQUwsQ0FBYUUsRUFBcEI7QUFDRCxPQUhRO0FBSVRRLGNBSlMsc0JBSUU7QUFBQTs7QUFDVDtBQUNBLFlBQUlkLE9BQU8sQ0FDVCxFQUFDTSxJQUFJLFNBQUwsRUFEUyxFQUVULEVBQUNBLElBQUksUUFBTCxFQUZTLENBQVg7O0FBS0FOLGFBQUtlLE9BQUwsQ0FBYSxlQUFPO0FBQ2xCO0FBQ0EsY0FBSUMsSUFBSVYsRUFBSixLQUFXLFNBQWYsRUFBeUI7QUFDdkJVLGdCQUFJQyxLQUFKLEdBQVksQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUFaO0FBQ0QsV0FGRCxNQUVPO0FBQ0xELGdCQUFJQyxLQUFKLEdBQVksT0FBS2IsT0FBTCxDQUFhWSxJQUFJVixFQUFqQixDQUFaO0FBQ0Q7QUFDRDtBQUNBVSxjQUFJRSxJQUFKLEdBQVcsT0FBS2hCLENBQUwsQ0FBT2MsSUFBSVYsRUFBWCxDQUFYO0FBQ0E7QUFDQSxrQkFBUVUsSUFBSVYsRUFBWjtBQUNFLGlCQUFLLFNBQUw7QUFDRVUsa0JBQUlHLElBQUosR0FBVyxRQUFYO0FBQ0E7QUFDRixpQkFBSyxRQUFMO0FBQ0VILGtCQUFJRyxJQUFKLEdBQVcsUUFBWDtBQUNBO0FBTko7QUFRRCxTQWxCRDtBQW1CQSxlQUFPbkIsSUFBUDtBQUNEO0FBL0JRLEssUUFrQ1hvQixPLEdBQVU7QUFDUjtBQUNBQyxlQUZRLHVCQUVHO0FBQ1RDLFdBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLE1BQUwsRUFBZDtBQUNELE9BSk87OztBQU1SO0FBQ0FDLGNBUFEsc0JBT0U7QUFDUkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLdkIsT0FBakI7QUFDRDtBQVRPLEssUUFhVndCLE0sR0FBUztBQUNQO0FBQ0Esa0JBQVksa0JBQUN0QixFQUFELEVBQVE7QUFDbEIsWUFBSUEsT0FBTyxLQUFYLEVBQWtCO0FBQ2hCLGdCQUFLRixPQUFMLENBQWFJLE1BQWIsR0FBc0IsQ0FBdEI7QUFDQSxnQkFBS0osT0FBTCxDQUFhZSxJQUFiLEdBQW9CLEtBQXBCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZ0JBQUtmLE9BQUwsQ0FBYUksTUFBYixHQUFzQixDQUF0QjtBQUNBLGdCQUFLSixPQUFMLENBQWFlLElBQWIsR0FBb0IsTUFBcEI7QUFDRDtBQUNGLE9BVk07O0FBWVA7QUFDQSxzQkFBZ0Isc0JBQUNBLElBQUQsRUFBVTtBQUN4QixZQUFJQSxTQUFTLEtBQWIsRUFBb0I7QUFDbEIsZ0JBQUtmLE9BQUwsQ0FBYUksTUFBYjtBQUNELFNBRkQsTUFFTztBQUNMLGdCQUFLSixPQUFMLENBQWFJLE1BQWI7QUFDRDtBQUNGO0FBbkJNLEs7OztBQURUOzs7Ozs7Ozs7Ozs7dUJBd0JRLG9CQUFRLEtBQVIsRUFBZSxJQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0RzBCcUIsZUFBSzFCLEk7O2tCQUFwQmQsTSIsImZpbGUiOiJmaXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICBpbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcC5qcydcclxuICBpbXBvcnQgeyBnZXRMYW5nIH0gZnJvbSAnLi4vbGFuZy9pbmRleC5qcydcclxuICBpbXBvcnQgRm9ybWxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtbGlzdCdcclxuICBpbXBvcnQgVGFiQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiLWJhcidcclxuICBpbXBvcnQgTmF2aWdhdG9yQmFjayBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRvci1iYWNrJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBhaXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImZvcm1saXN0XCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwiZm9ybURhdGFcIixcInYtYmluZDpnb29kc0lkLnN5bmNcIjpcImdvb2RzSWRcIn0sXCJ0YWJCYXJcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJtXCIsXCJmYXRoZXJcIjpcImZpeFwifSxcIm5hdmlnYXRvckJhY2tcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm1lc3NhZ2Uuc3luY1wiOlwicGFnZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGZvcm1saXN0OiBGb3JtbGlzdCxcclxuICAgICAgdGFiQmFyOiBUYWJCYXIsXHJcbiAgICAgIG5hdmlnYXRvckJhY2s6IE5hdmlnYXRvckJhY2tcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAvLyDor63np41cclxuICAgICAgbGFuZ3VhZ2U6ICcnLFxyXG4gICAgICAvLyDpnZnmgIHmloflrZdcclxuICAgICAgbToge30sXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICBmaXhEYXRhOiB7XHJcbiAgICAgICAgc3RhdGU6ICdvdXQnLFxyXG4gICAgICAgIGlkOiAnMTc2OFMxODA2MjNfMDEwMTkwMDAwMScsXHJcbiAgICAgICAgZml4VHlwZTogJycsXHJcbiAgICAgICAgbGVuZ3RoOiAzXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCA9IHtcclxuICAgICAgbShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZihuZXdWYWx1ZS5wYWdlKXtcclxuICAgICAgICAgIHRoaXMucGFnZSA9IG5ld1ZhbHVlLnBhZ2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgZ29vZHNJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maXhEYXRhLmlkXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1EYXRhKCkge1xyXG4gICAgICAgIC8vIGZvcm1saXN057uE5Lu25omA6ZyA5pWw5o2u55qEaWTmmK/lhpnmrbvnmoRcclxuICAgICAgICBsZXQgZGF0YSA9IFtcclxuICAgICAgICAgIHtpZDogJ2ZpeFR5cGUnfSwgXHJcbiAgICAgICAgICB7aWQ6ICdsZW5ndGgnfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgICAgICAvLyDmt7vliqB2YWx1ZVxyXG4gICAgICAgICAgaWYgKGVsZS5pZCA9PT0gJ2ZpeFR5cGUnKXtcclxuICAgICAgICAgICAgZWxlLnZhbHVlID0gWydIb3VyJywgJ0RheSddXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGUudmFsdWUgPSB0aGlzLmZpeERhdGFbZWxlLmlkXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8g5re75YqgdGV4dFxyXG4gICAgICAgICAgZWxlLnRleHQgPSB0aGlzLm1bZWxlLmlkXVxyXG4gICAgICAgICAgLy8g5re75YqgdHlwZVxyXG4gICAgICAgICAgc3dpdGNoIChlbGUuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAnZml4VHlwZSc6XHJcbiAgICAgICAgICAgICAgZWxlLnR5cGUgPSAnYnV0dG9uJ1xyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XHJcbiAgICAgICAgICAgICAgZWxlLnR5cGUgPSAnYWRkU3ViJ1xyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g6L+U5ZueXHJcbiAgICAgIG5hdlRvSG9tZSgpe1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDonaG9tZSd9KVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g5o+Q5LqkXHJcbiAgICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maXhEYXRhKVxyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8g55uR5ZCs5a2Q57uE5Lu2Rm9ybWxpc3TnmoTkuovku7blub/mkq1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgLy8g5L+u5pS556ef6LWB57G75Z6L44CB5Ye656ef5pe26ZW/XHJcbiAgICAgICd0YXBIRGJ0bic6IChpZCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCA9PT0gJ2RheScpIHtcclxuICAgICAgICAgIHRoaXMuZml4RGF0YS5sZW5ndGggPSAxXHJcbiAgICAgICAgICB0aGlzLmZpeERhdGEudHlwZSA9ICdEYXknXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZml4RGF0YS5sZW5ndGggPSAzXHJcbiAgICAgICAgICB0aGlzLmZpeERhdGEudHlwZSA9ICdIb3VyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIOWHuuenn+aXtumVv+WinuWKoOOAgeWHj+WwkVxyXG4gICAgICAnbGVuZ3RoQ2hhbmdlJzogKHR5cGUpID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3N1YicpIHtcclxuICAgICAgICAgIHRoaXMuZml4RGF0YS5sZW5ndGgtLVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmZpeERhdGEubGVuZ3RoKytcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGF3YWl0IGdldExhbmcoJ2ZpeCcsIHRoaXMpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=