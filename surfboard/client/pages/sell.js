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

var Sell = function (_wepy$page) {
  _inherits(Sell, _wepy$page);

  function Sell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sell.__proto__ || Object.getPrototypeOf(Sell)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "formlist": { "v-bind:list.sync": "formData", "v-bind:goodsId.sync": "goodsId" }, "tabBar": { "v-bind:list.sync": "m", "father": "sell" }, "navigatorBack": { "xmlns:v-bind": "", "v-bind:message.sync": "page" } }, _this.$events = {}, _this.components = {
      formlist: _formlist2.default,
      tabBar: _tabBar2.default,
      navigatorBack: _navigatorBack2.default
    }, _this.data = {
      // 语种
      language: '',
      // 静态文字
      m: {},
      // 传给tabBar组件，让其知道谁是其父组件
      page: '',
      actualCollection: '',
      // state/id/price这三个是需要后台给的。
      sellData: {
        state: 'sell',
        id: '1768S180623_0101900001',
        price: '300',
        name: '',
        nationality: '',
        passport: '',
        phone: '',
        email: '',
        totalPrice: '300',
        actualCollection: '',
        change: ''
      }
    }, _this.watch = {
      m: function m(newValue, oldValue) {
        if (newValue.page) {
          this.page = newValue.page;
        }
      },
      sellData: function sellData(newValue, oldValue) {
        // 拿到单价后给出总价的初始值。暂时设定总价是可以操作修改的，例如给了个优惠价格。
        // if(newValue.price)
        // 因price暂时是写死的，所以无法进入次判断。
        // this.sellData.totalPrice = newValue.price

        // 根据actualCollection与totalPrice计算找零金额
        console.log(newValue.actualCollection);
        if (newValue.actualCollection && newValue.actualCollection !== oldValue.actualCollection) {
          this.sellData.change = newValue.actualCollection - newValue.totalPrice;
          console.log(newValue.actualCollection - newValue.totalPrice);
          // 在此发现一个问题，计算属性会先于this.sellData.change值修改执行，加this.$apply()后解决
          this.$apply();
        }
      }
    }, _this.computed = {
      // 监听sellData、m变化，并格式化为Formlist组件所需数据
      goodsId: function goodsId() {
        return this.sellData.id;
      },
      formData: function formData() {
        var _this2 = this;

        // 总价未计算出时不执行,因为总价是最后计算出来的，在总价出来之前数据铁定不全
        if (!this.sellData.totalPrice) return;
        // formlist组件所需数据的id是写死的
        var data = [{ id: 'price' }, { id: 'name' }, { id: 'nationality' }, { id: 'passport' }, { id: 'phone' }, { id: 'email' }, { id: 'totalPrice' }, { id: 'actualCollection' }, { id: 'change' }];

        data.forEach(function (ele) {
          // 添加value
          ele.value = _this2.sellData[ele.id];
          // 添加text
          ele.text = _this2.m[ele.id];
          // 添加type
          ele.type = 'input';
          // 添加disabled,palceholder
          if (ele.id === 'price' || ele.id === 'change') {
            ele.disabled = true;
          } else {
            ele.disabled = false;
            ele.placeholder = _this2.m.placeholder;
          }
        });
        return data;
      }
    }, _this.methods = {
      navToHome: function navToHome() {
        wx.navigateTo({ url: 'home' });
      },


      // 提交
      onSubmit: function onSubmit() {
        console.log(this.sellData);
      }
    }, _this.events = {
      // 更新输入框的value到sellData
      'inputValueChange': function inputValueChange(id, value) {
        if (_this.sellData[id] === value) return;
        switch (id) {
          case 'name':
            _this.sellData.name = value;
            break;
          case 'nationality':
            _this.sellData.nationality = value;
            break;
          case 'passport':
            _this.sellData.passport = value;
            break;
          case 'phone':
            _this.sellData.phone = value;
            break;
          case 'email':
            _this.sellData.phone = value;
            break;
          case 'finalPrice':
            _this.sellData.phone = value;
            break;
          case 'actualCollection':
            _this.sellData.actualCollection = value;
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // 监听子组件Formlist的事件广播


  _createClass(Sell, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _index.getLang)('sell', this);

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

  return Sell;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Sell , 'pages/sell'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGwuanMiXSwibmFtZXMiOlsiU2VsbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImZvcm1saXN0IiwiRm9ybWxpc3QiLCJ0YWJCYXIiLCJUYWJCYXIiLCJuYXZpZ2F0b3JCYWNrIiwiTmF2aWdhdG9yQmFjayIsImRhdGEiLCJsYW5ndWFnZSIsIm0iLCJwYWdlIiwiYWN0dWFsQ29sbGVjdGlvbiIsInNlbGxEYXRhIiwic3RhdGUiLCJpZCIsInByaWNlIiwibmFtZSIsIm5hdGlvbmFsaXR5IiwicGFzc3BvcnQiLCJwaG9uZSIsImVtYWlsIiwidG90YWxQcmljZSIsImNoYW5nZSIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJjb21wdXRlZCIsImdvb2RzSWQiLCJmb3JtRGF0YSIsImZvckVhY2giLCJlbGUiLCJ2YWx1ZSIsInRleHQiLCJ0eXBlIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsIm1ldGhvZHMiLCJuYXZUb0hvbWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvblN1Ym1pdCIsImV2ZW50cyIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsb0JBQW1CLFVBQXBCLEVBQStCLHVCQUFzQixTQUFyRCxFQUFaLEVBQTRFLFVBQVMsRUFBQyxvQkFBbUIsR0FBcEIsRUFBd0IsVUFBUyxNQUFqQyxFQUFyRixFQUE4SCxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsTUFBekMsRUFBOUksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsZ0JBQVVDLGtCQURGO0FBRVJDLGNBQVFDLGdCQUZB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LEdBQVM7QUFDUDtBQUNBLDBCQUFvQiwwQkFBQy9CLEVBQUQsRUFBS29CLEtBQUwsRUFBZTtBQUNqQyxZQUFHLE1BQUt0QixRQUFMLENBQWNFLEVBQWQsTUFBc0JvQixLQUF6QixFQUFnQztBQUNoQyxnQkFBUXBCLEVBQVI7QUFDRSxlQUFLLE1BQUw7QUFDRSxrQkFBS0YsUUFBTCxDQUFjSSxJQUFkLEdBQXFCa0IsS0FBckI7QUFDQTtBQUNGLGVBQUssYUFBTDtBQUNFLGtCQUFLdEIsUUFBTCxDQUFjSyxXQUFkLEdBQTRCaUIsS0FBNUI7QUFDQTtBQUNGLGVBQUssVUFBTDtBQUNFLGtCQUFLdEIsUUFBTCxDQUFjTSxRQUFkLEdBQXlCZ0IsS0FBekI7QUFDQTtBQUNGLGVBQUssT0FBTDtBQUNFLGtCQUFLdEIsUUFBTCxDQUFjTyxLQUFkLEdBQXNCZSxLQUF0QjtBQUNBO0FBQ0YsZUFBSyxPQUFMO0FBQ0Usa0JBQUt0QixRQUFMLENBQWNPLEtBQWQsR0FBc0JlLEtBQXRCO0FBQ0E7QUFDRixlQUFLLFlBQUw7QUFDRSxrQkFBS3RCLFFBQUwsQ0FBY08sS0FBZCxHQUFzQmUsS0FBdEI7QUFDQTtBQUNGLGVBQUssa0JBQUw7QUFDRSxrQkFBS3RCLFFBQUwsQ0FBY0QsZ0JBQWQsR0FBaUN1QixLQUFqQztBQUNBO0FBckJKO0FBdUJEO0FBM0JNLEs7OztBQURUOzs7Ozs7Ozs7Ozs7dUJBZ0NRLG9CQUFRLE1BQVIsRUFBZ0IsSUFBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdJd0JZLGVBQUtwQyxJOztrQkFBbEJkLEkiLCJmaWxlIjoic2VsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xyXG4gIGltcG9ydCB7IGdldExhbmcgfSBmcm9tICcuLi9sYW5nL2luZGV4LmpzJ1xyXG4gIGltcG9ydCBGb3JtbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1saXN0J1xyXG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy90YWItYmFyJ1xyXG4gIGltcG9ydCBOYXZpZ2F0b3JCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdG9yLWJhY2snXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImZvcm1saXN0XCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwiZm9ybURhdGFcIixcInYtYmluZDpnb29kc0lkLnN5bmNcIjpcImdvb2RzSWRcIn0sXCJ0YWJCYXJcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJtXCIsXCJmYXRoZXJcIjpcInNlbGxcIn0sXCJuYXZpZ2F0b3JCYWNrXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDptZXNzYWdlLnN5bmNcIjpcInBhZ2VcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBmb3JtbGlzdDogRm9ybWxpc3QsXHJcbiAgICAgIHRhYkJhcjogVGFiQmFyLFxyXG4gICAgICBuYXZpZ2F0b3JCYWNrOiBOYXZpZ2F0b3JCYWNrXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g6K+t56eNXHJcbiAgICAgIGxhbmd1YWdlOiAnJyxcclxuICAgICAgLy8g6Z2Z5oCB5paH5a2XXHJcbiAgICAgIG06IHt9LFxyXG4gICAgICAvLyDkvKDnu5l0YWJCYXLnu4Tku7bvvIzorqnlhbbnn6XpgZPosIHmmK/lhbbniLbnu4Tku7ZcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIGFjdHVhbENvbGxlY3Rpb246ICcnLFxyXG4gICAgICAvLyBzdGF0ZS9pZC9wcmljZei/meS4ieS4quaYr+mcgOimgeWQjuWPsOe7meeahOOAglxyXG4gICAgICBzZWxsRGF0YToge1xyXG4gICAgICAgIHN0YXRlOiAnc2VsbCcsXHJcbiAgICAgICAgaWQ6ICcxNzY4UzE4MDYyM18wMTAxOTAwMDAxJyxcclxuICAgICAgICBwcmljZTogJzMwMCcsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgbmF0aW9uYWxpdHk6ICcnLFxyXG4gICAgICAgIHBhc3Nwb3J0OiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHRvdGFsUHJpY2U6ICczMDAnLFxyXG4gICAgICAgIGFjdHVhbENvbGxlY3Rpb246ICcnLFxyXG4gICAgICAgIGNoYW5nZTogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgICBtKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmKG5ld1ZhbHVlLnBhZ2Upe1xyXG4gICAgICAgICAgdGhpcy5wYWdlID0gbmV3VmFsdWUucGFnZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNlbGxEYXRhKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIC8vIOaLv+WIsOWNleS7t+WQjue7meWHuuaAu+S7t+eahOWIneWni+WAvOOAguaaguaXtuiuvuWumuaAu+S7t+aYr+WPr+S7peaTjeS9nOS/ruaUueeahO+8jOS+i+Wmgue7meS6huS4quS8mOaDoOS7t+agvOOAglxyXG4gICAgICAgIC8vIGlmKG5ld1ZhbHVlLnByaWNlKVxyXG4gICAgICAgIC8vIOWboHByaWNl5pqC5pe25piv5YaZ5q2755qE77yM5omA5Lul5peg5rOV6L+b5YWl5qyh5Yik5pat44CCXHJcbiAgICAgICAgLy8gdGhpcy5zZWxsRGF0YS50b3RhbFByaWNlID0gbmV3VmFsdWUucHJpY2VcclxuXHJcbiAgICAgICAgLy8g5qC55o2uYWN0dWFsQ29sbGVjdGlvbuS4jnRvdGFsUHJpY2XorqHnrpfmib7pm7bph5Hpop1cclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZS5hY3R1YWxDb2xsZWN0aW9uKVxyXG4gICAgICAgIGlmIChuZXdWYWx1ZS5hY3R1YWxDb2xsZWN0aW9uICYmIG5ld1ZhbHVlLmFjdHVhbENvbGxlY3Rpb24gIT09IG9sZFZhbHVlLmFjdHVhbENvbGxlY3Rpb24pe1xyXG4gICAgICAgICAgdGhpcy5zZWxsRGF0YS5jaGFuZ2UgPSBuZXdWYWx1ZS5hY3R1YWxDb2xsZWN0aW9uIC0gbmV3VmFsdWUudG90YWxQcmljZVxyXG4gICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUuYWN0dWFsQ29sbGVjdGlvbiAtIG5ld1ZhbHVlLnRvdGFsUHJpY2UpXHJcbiAgICAgICAgICAvLyDlnKjmraTlj5HnjrDkuIDkuKrpl67popjvvIzorqHnrpflsZ7mgKfkvJrlhYjkuo50aGlzLnNlbGxEYXRhLmNoYW5nZeWAvOS/ruaUueaJp+ihjO+8jOWKoHRoaXMuJGFwcGx5KCnlkI7op6PlhrNcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgLy8g55uR5ZCsc2VsbERhdGHjgIFt5Y+Y5YyW77yM5bm25qC85byP5YyW5Li6Rm9ybWxpc3Tnu4Tku7bmiYDpnIDmlbDmja5cclxuICAgICAgZ29vZHNJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxsRGF0YS5pZFxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtRGF0YSgpIHtcclxuICAgICAgICAvLyDmgLvku7fmnKrorqHnrpflh7rml7bkuI3miafooYws5Zug5Li65oC75Lu35piv5pyA5ZCO6K6h566X5Ye65p2l55qE77yM5Zyo5oC75Lu35Ye65p2l5LmL5YmN5pWw5o2u6ZOB5a6a5LiN5YWoXHJcbiAgICAgICAgaWYoIXRoaXMuc2VsbERhdGEudG90YWxQcmljZSkgcmV0dXJuXHJcbiAgICAgICAgLy8gZm9ybWxpc3Tnu4Tku7bmiYDpnIDmlbDmja7nmoRpZOaYr+WGmeatu+eahFxyXG4gICAgICAgIGxldCBkYXRhID0gW1xyXG4gICAgICAgICAge2lkOiAncHJpY2UnfSwgXHJcbiAgICAgICAgICB7aWQ6ICduYW1lJ30sIFxyXG4gICAgICAgICAge2lkOiAnbmF0aW9uYWxpdHknfSwgXHJcbiAgICAgICAgICB7aWQ6ICdwYXNzcG9ydCd9LCBcclxuICAgICAgICAgIHtpZDogJ3Bob25lJ30sIFxyXG4gICAgICAgICAge2lkOiAnZW1haWwnfSwgXHJcbiAgICAgICAgICB7aWQ6ICd0b3RhbFByaWNlJ30sIFxyXG4gICAgICAgICAge2lkOiAnYWN0dWFsQ29sbGVjdGlvbid9LFxyXG4gICAgICAgICAge2lkOiAnY2hhbmdlJ31cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgLy8g5re75YqgdmFsdWVcclxuICAgICAgICAgIGVsZS52YWx1ZSA9IHRoaXMuc2VsbERhdGFbZWxlLmlkXVxyXG4gICAgICAgICAgLy8g5re75YqgdGV4dFxyXG4gICAgICAgICAgZWxlLnRleHQgPSB0aGlzLm1bZWxlLmlkXVxyXG4gICAgICAgICAgLy8g5re75YqgdHlwZVxyXG4gICAgICAgICAgZWxlLnR5cGUgPSAnaW5wdXQnXHJcbiAgICAgICAgICAvLyDmt7vliqBkaXNhYmxlZCxwYWxjZWhvbGRlclxyXG4gICAgICAgICAgaWYgKGVsZS5pZCA9PT0gJ3ByaWNlJyB8fCBlbGUuaWQgPT09ICdjaGFuZ2UnKXtcclxuICAgICAgICAgICAgZWxlLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgZWxlLnBsYWNlaG9sZGVyID0gdGhpcy5tLnBsYWNlaG9sZGVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgbmF2VG9Ib21lKCl7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOidob21lJ30pXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDmj5DkuqRcclxuICAgICAgb25TdWJtaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGxEYXRhKVxyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8g55uR5ZCs5a2Q57uE5Lu2Rm9ybWxpc3TnmoTkuovku7blub/mkq1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgLy8g5pu05paw6L6T5YWl5qGG55qEdmFsdWXliLBzZWxsRGF0YVxyXG4gICAgICAnaW5wdXRWYWx1ZUNoYW5nZSc6IChpZCwgdmFsdWUpID0+IHtcclxuICAgICAgICBpZih0aGlzLnNlbGxEYXRhW2lkXSA9PT0gdmFsdWUpIHJldHVyblxyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgIGNhc2UgJ25hbWUnOlxyXG4gICAgICAgICAgICB0aGlzLnNlbGxEYXRhLm5hbWUgPSB2YWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbmF0aW9uYWxpdHknOlxyXG4gICAgICAgICAgICB0aGlzLnNlbGxEYXRhLm5hdGlvbmFsaXR5ID0gdmFsdWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3Bhc3Nwb3J0JzpcclxuICAgICAgICAgICAgdGhpcy5zZWxsRGF0YS5wYXNzcG9ydCA9IHZhbHVlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgICAgIHRoaXMuc2VsbERhdGEucGhvbmUgPSB2YWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICB0aGlzLnNlbGxEYXRhLnBob25lID0gdmFsdWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ2ZpbmFsUHJpY2UnOlxyXG4gICAgICAgICAgICB0aGlzLnNlbGxEYXRhLnBob25lID0gdmFsdWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ2FjdHVhbENvbGxlY3Rpb24nOlxyXG4gICAgICAgICAgICB0aGlzLnNlbGxEYXRhLmFjdHVhbENvbGxlY3Rpb24gPSB2YWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgYXdhaXQgZ2V0TGFuZygnc2VsbCcsIHRoaXMpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=