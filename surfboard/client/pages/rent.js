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

var Rent = function (_wepy$page) {
  _inherits(Rent, _wepy$page);

  function Rent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rent.__proto__ || Object.getPrototypeOf(Rent)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "formlist": { "v-bind:list.sync": "formData", "v-bind:goodsId.sync": "goodsId" }, "tabBar": { "v-bind:list.sync": "m", "father": "rent" }, "navigatorBack": { "xmlns:v-bind": "", "v-bind:message.sync": "page" } }, _this.$events = {}, _this.components = {
      formlist: _formlist2.default,
      tabBar: _tabBar2.default,
      navigatorBack: _navigatorBack2.default
    }, _this.data = {
      // 语种
      language: '',
      // 静态文字
      m: {},
      page: '',
      // state/id/price这三个是需要后台给的。其余的用户填写。type/length要给初始值Hour跟3
      rentData: {
        state: 'out',
        id: '1768S180623_0101900001',
        price: '300',
        type: 'Hour',
        length: 3,
        name: '',
        nationality: '',
        passport: '',
        phone: '',
        email: ''
      }
    }, _this.watch = {
      m: function m(newValue, oldValue) {
        if (newValue.page) {
          this.page = newValue.page;
        }
        if (newValue.state === 'out已出租') {
          this.redirect();
        }
      }
    }, _this.computed = {
      goodsId: function goodsId() {
        return this.rentData.id;
      },
      formData: function formData() {
        var _this2 = this;

        // formlist组件所需数据的id是写死的
        var data = [{ id: 'price' }, { id: 'type' }, { id: 'length' }, { id: 'name' }, { id: 'nationality' }, { id: 'passport' }, { id: 'phone' }, { id: 'email' }];

        data.forEach(function (ele) {
          // 添加value
          if (ele.id === 'type') {
            ele.value = ['Hour', 'Day'];
          } else {
            ele.value = _this2.rentData[ele.id];
          }
          // 添加text
          ele.text = _this2.m[ele.id];
          // 添加type
          switch (ele.id) {
            case 'type':
              ele.type = 'button';
              break;
            case 'length':
              ele.type = 'addSub';
              break;
            default:
              ele.type = 'input';
          }
          // 添加disabled,palceholder
          if (ele.type === 'input') {
            if (ele.id === 'price') {
              ele.disabled = true;
            } else {
              ele.disabled = false;
              ele.placeholder = _this2.m.placeholder;
            }
          }
        });
        return data;
      }
    }, _this.methods = {
      navToHome: function navToHome() {
        wx.navigateTo({ url: 'home' });
      },


      // 重定向回home页，并弹窗提示
      redirect: function redirect() {
        _wepy2.default.redirectTo({
          url: 'home',
          success: function success() {
            _tip2.default.alert('Goods rented');
          }
        });
      },


      // 提交
      onSubmit: function onSubmit() {
        console.log(this.rentData);
      }
    }, _this.events = {
      // 修改租赁类型、出租时长
      'tapHDbtn': function tapHDbtn(id) {
        if (id === 'day') {
          _this.rentData.length = 1;
          _this.rentData.type = 'Day';
        } else {
          _this.rentData.length = 3;
          _this.rentData.type = 'Hour';
        }
      },

      // 出租时长增加、减少
      'lengthChange': function lengthChange(type) {
        if (type === 'sub') {
          _this.rentData.length--;
        } else {
          _this.rentData.length++;
        }
      },

      // 更新输入框的value到rentData
      'inputValueChange': function inputValueChange(id, value) {
        if (_this.rentData[id] === value) return;
        switch (id) {
          case 'name':
            _this.rentData.name = value;
            break;
          case 'nationality':
            _this.rentData.nationality = value;
            break;
          case 'passport':
            _this.rentData.passport = value;
            break;
          case 'phone':
            _this.rentData.phone = value;
            break;
          case 'email':
            _this.rentData.email = value;
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // 监听rentData、m变化，并格式化为Formlist组件所需数据


  // 监听子组件Formlist的事件广播


  _createClass(Rent, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _index.getLang)('rent', this);

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

  return Rent;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Rent , 'pages/rent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbnQuanMiXSwibmFtZXMiOlsiUmVudCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImZvcm1saXN0IiwiRm9ybWxpc3QiLCJ0YWJCYXIiLCJUYWJCYXIiLCJuYXZpZ2F0b3JCYWNrIiwiTmF2aWdhdG9yQmFjayIsImRhdGEiLCJsYW5ndWFnZSIsIm0iLCJwYWdlIiwicmVudERhdGEiLCJzdGF0ZSIsImlkIiwicHJpY2UiLCJ0eXBlIiwibGVuZ3RoIiwibmFtZSIsIm5hdGlvbmFsaXR5IiwicGFzc3BvcnQiLCJwaG9uZSIsImVtYWlsIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwicmVkaXJlY3QiLCJjb21wdXRlZCIsImdvb2RzSWQiLCJmb3JtRGF0YSIsImZvckVhY2giLCJlbGUiLCJ2YWx1ZSIsInRleHQiLCJkaXNhYmxlZCIsInBsYWNlaG9sZGVyIiwibWV0aG9kcyIsIm5hdlRvSG9tZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndlcHkiLCJyZWRpcmVjdFRvIiwic3VjY2VzcyIsInRpcCIsImFsZXJ0Iiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNwQkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLG9CQUFtQixVQUFwQixFQUErQix1QkFBc0IsU0FBckQsRUFBWixFQUE0RSxVQUFTLEVBQUMsb0JBQW1CLEdBQXBCLEVBQXdCLFVBQVMsTUFBakMsRUFBckYsRUFBOEgsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLE1BQXpDLEVBQTlJLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGdCQUFVQyxrQkFERjtBQUVSQyxjQUFR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dUJBOENRLG9CQUFRLE1BQVIsRUFBZ0IsSUFBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpLd0JTLGVBQUs5QixJOztrQkFBbEJkLEkiLCJmaWxlIjoicmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xyXG4gIGltcG9ydCB7IGdldExhbmcgfSBmcm9tICcuLi9sYW5nL2luZGV4LmpzJ1xyXG4gIGltcG9ydCBGb3JtbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1saXN0J1xyXG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy90YWItYmFyJ1xyXG4gIGltcG9ydCBOYXZpZ2F0b3JCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdG9yLWJhY2snXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImZvcm1saXN0XCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwiZm9ybURhdGFcIixcInYtYmluZDpnb29kc0lkLnN5bmNcIjpcImdvb2RzSWRcIn0sXCJ0YWJCYXJcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJtXCIsXCJmYXRoZXJcIjpcInJlbnRcIn0sXCJuYXZpZ2F0b3JCYWNrXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDptZXNzYWdlLnN5bmNcIjpcInBhZ2VcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBmb3JtbGlzdDogRm9ybWxpc3QsXHJcbiAgICAgIHRhYkJhcjogVGFiQmFyLFxyXG4gICAgICBuYXZpZ2F0b3JCYWNrOiBOYXZpZ2F0b3JCYWNrXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g6K+t56eNXHJcbiAgICAgIGxhbmd1YWdlOiAnJyxcclxuICAgICAgLy8g6Z2Z5oCB5paH5a2XXHJcbiAgICAgIG06IHt9LFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgLy8gc3RhdGUvaWQvcHJpY2Xov5nkuInkuKrmmK/pnIDopoHlkI7lj7Dnu5nnmoTjgILlhbbkvZnnmoTnlKjmiLfloavlhpnjgIJ0eXBlL2xlbmd0aOimgee7meWIneWni+WAvEhvdXLot58zXHJcbiAgICAgIHJlbnREYXRhOiB7XHJcbiAgICAgICAgc3RhdGU6ICdvdXQnLFxyXG4gICAgICAgIGlkOiAnMTc2OFMxODA2MjNfMDEwMTkwMDAwMScsXHJcbiAgICAgICAgcHJpY2U6ICczMDAnLFxyXG4gICAgICAgIHR5cGU6ICdIb3VyJyxcclxuICAgICAgICBsZW5ndGg6IDMsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgbmF0aW9uYWxpdHk6ICcnLFxyXG4gICAgICAgIHBhc3Nwb3J0OiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCA9IHtcclxuICAgICAgbShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZihuZXdWYWx1ZS5wYWdlKXtcclxuICAgICAgICAgIHRoaXMucGFnZSA9IG5ld1ZhbHVlLnBhZ2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmV3VmFsdWUuc3RhdGUgPT09ICdvdXTlt7Llh7rnp58nKXtcclxuICAgICAgICAgIHRoaXMucmVkaXJlY3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOebkeWQrHJlbnREYXRh44CBbeWPmOWMlu+8jOW5tuagvOW8j+WMluS4ukZvcm1saXN057uE5Lu25omA6ZyA5pWw5o2uXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgZ29vZHNJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW50RGF0YS5pZFxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtRGF0YSgpIHtcclxuICAgICAgICAvLyBmb3JtbGlzdOe7hOS7tuaJgOmcgOaVsOaNrueahGlk5piv5YaZ5q2755qEXHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXHJcbiAgICAgICAgICB7aWQ6ICdwcmljZSd9LCBcclxuICAgICAgICAgIHtpZDogJ3R5cGUnfSwgXHJcbiAgICAgICAgICB7aWQ6ICdsZW5ndGgnfSwgXHJcbiAgICAgICAgICB7aWQ6ICduYW1lJ30sIFxyXG4gICAgICAgICAge2lkOiAnbmF0aW9uYWxpdHknfSwgXHJcbiAgICAgICAgICB7aWQ6ICdwYXNzcG9ydCd9LCBcclxuICAgICAgICAgIHtpZDogJ3Bob25lJ30sIFxyXG4gICAgICAgICAge2lkOiAnZW1haWwnfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgICAgICAvLyDmt7vliqB2YWx1ZVxyXG4gICAgICAgICAgaWYgKGVsZS5pZCA9PT0gJ3R5cGUnKXtcclxuICAgICAgICAgICAgZWxlLnZhbHVlID0gWydIb3VyJywgJ0RheSddXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGUudmFsdWUgPSB0aGlzLnJlbnREYXRhW2VsZS5pZF1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOa3u+WKoHRleHRcclxuICAgICAgICAgIGVsZS50ZXh0ID0gdGhpcy5tW2VsZS5pZF1cclxuICAgICAgICAgIC8vIOa3u+WKoHR5cGVcclxuICAgICAgICAgIHN3aXRjaCAoZWxlLmlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3R5cGUnOlxyXG4gICAgICAgICAgICAgIGVsZS50eXBlID0gJ2J1dHRvbidcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxyXG4gICAgICAgICAgICAgIGVsZS50eXBlID0gJ2FkZFN1YidcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIGVsZS50eXBlID0gJ2lucHV0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8g5re75YqgZGlzYWJsZWQscGFsY2Vob2xkZXJcclxuICAgICAgICAgIGlmIChlbGUudHlwZSA9PT0gJ2lucHV0Jyl7XHJcbiAgICAgICAgICAgIGlmIChlbGUuaWQgPT09ICdwcmljZScpe1xyXG4gICAgICAgICAgICAgIGVsZS5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlbGUuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIGVsZS5wbGFjZWhvbGRlciA9IHRoaXMubS5wbGFjZWhvbGRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG5hdlRvSG9tZSgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6J2hvbWUnfSlcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIOmHjeWumuWQkeWbnmhvbWXpobXvvIzlubblvLnnqpfmj5DnpLpcclxuICAgICAgcmVkaXJlY3QoKSB7XHJcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgIHVybDogJ2hvbWUnLFxyXG4gICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgdGlwLmFsZXJ0KCdHb29kcyByZW50ZWQnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDmj5DkuqRcclxuICAgICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZW50RGF0YSlcclxuICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOebkeWQrOWtkOe7hOS7tkZvcm1saXN055qE5LqL5Lu25bm/5pKtXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIC8vIOS/ruaUueenn+i1geexu+Wei+OAgeWHuuenn+aXtumVv1xyXG4gICAgICAndGFwSERidG4nOiAoaWQpID0+IHtcclxuICAgICAgICBpZiAoaWQgPT09ICdkYXknKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbnREYXRhLmxlbmd0aCA9IDFcclxuICAgICAgICAgIHRoaXMucmVudERhdGEudHlwZSA9ICdEYXknXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVudERhdGEubGVuZ3RoID0gM1xyXG4gICAgICAgICAgdGhpcy5yZW50RGF0YS50eXBlID0gJ0hvdXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g5Ye656ef5pe26ZW/5aKe5Yqg44CB5YeP5bCRXHJcbiAgICAgICdsZW5ndGhDaGFuZ2UnOiAodHlwZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnc3ViJykge1xyXG4gICAgICAgICAgdGhpcy5yZW50RGF0YS5sZW5ndGgtLVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbnREYXRhLmxlbmd0aCsrXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g5pu05paw6L6T5YWl5qGG55qEdmFsdWXliLByZW50RGF0YVxyXG4gICAgICAnaW5wdXRWYWx1ZUNoYW5nZSc6IChpZCwgdmFsdWUpID0+IHtcclxuICAgICAgICBpZih0aGlzLnJlbnREYXRhW2lkXSA9PT0gdmFsdWUpIHJldHVyblxyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgIGNhc2UgJ25hbWUnOlxyXG4gICAgICAgICAgICB0aGlzLnJlbnREYXRhLm5hbWUgPSB2YWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbmF0aW9uYWxpdHknOlxyXG4gICAgICAgICAgICB0aGlzLnJlbnREYXRhLm5hdGlvbmFsaXR5ID0gdmFsdWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcclxuICAgICAgICAgICAgdGhpcy5yZW50RGF0YS5wYXNzcG9ydCA9IHZhbHVlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgIHRoaXMucmVudERhdGEucGhvbmUgPSB2YWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICB0aGlzLnJlbnREYXRhLmVtYWlsID0gdmFsdWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGF3YWl0IGdldExhbmcoJ3JlbnQnLCB0aGlzKVxyXG4gICAgfVxyXG4gIH1cclxuIl19