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

var Return = function (_wepy$page) {
  _inherits(Return, _wepy$page);

  function Return() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Return);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Return.__proto__ || Object.getPrototypeOf(Return)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "formlist": { "v-bind:list.sync": "formData", "v-bind:goodsId.sync": "goodsId" }, "tabBar": { "v-bind:list.sync": "m", "father": "return" }, "navigatorBack": { "xmlns:v-bind": "", "v-bind:message.sync": "page" } }, _this.$events = {}, _this.components = {
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
      // state/id/price/type/outTime这几个是需要后台给的。actualCollection由用户填写。returnTime为时间戳
      returnData: {
        state: 'idle',
        id: '1768S180623_0101900001',
        price: '300',
        type: 'Hour',
        outTime: '20180705 PM 04:00',
        returnTime: '20180705 PM 07:00',
        length: '3',
        totalPrice: '900',
        actualCollection: '',
        change: ''
      }
    }, _this.watch = {
      m: function m(newValue, oldValue) {
        if (newValue.page) {
          this.page = newValue.page;
        }
        // 未出租则重定向回home页
        if (newValue.state === 'idle未出租') {
          this.redirect();
        }
      },

      // 这个watch函数的启动源自returnData.outTime的值从''变为有值，但是现在outTime是直接写死的，所以无法触发watch，就暂时都给注释了
      returnData: function returnData(newValue, oldValue) {

        // 根据returnData.outTime跟时间戳计算length
        // if (newValue.outTime &&newValue.outTime !== oldValue.outTime){
        // let date = new Date()
        // this.returnData.returnTime = date
        // if (newValue.type === 'Hour'){
        //   let l = Math.round((date - newValue.outTime)/3600000)
        //   this.returnData.length = l
        // } else {
        //   let l =Math.round(((date - newValue.outTime)/3600000)/24)
        //   this.returnData.length = l
        // }
        // this.$apply()
        // }

        // 根据returnData.price与length计算总价
        // if (newValue.length && newValue.length !== oldValue.length){
        //   let total = newValue.price * newValue.length
        //   this.returnData.totalPrice = total
        //  this.$apply()
        // }

        // 根据actualCollection与totalPrice计算找零金额
        if (newValue.actualCollection && newValue.actualCollection !== oldValue.actualCollection) {
          this.returnData.change = newValue.actualCollection - newValue.totalPrice;
          // 在此发现一个问题，计算属性会先于this.returnData.change值修改执行，加this.$apply()后解决
          this.$apply();
        }
      }
    }, _this.computed = {
      // 监听returnData、m变化，并格式化为Formlist组件所需数据
      goodsId: function goodsId() {
        return this.returnData.id;
      },
      formData: function formData() {
        var _this2 = this;

        // 总价未计算出时不执行,因为总价是最后计算出来的，在总价出来之前数据铁定不全
        if (!this.returnData.totalPrice) return;
        // formlist组件所需数据的id是写死的
        var data = [{ id: 'price' }, { id: 'type' }, { id: 'outTime' }, { id: 'returnTime' }, { id: 'length' }, { id: 'totalPrice' }, { id: 'actualCollection' }, { id: 'change' }];

        data.forEach(function (ele) {
          // 添加value
          ele.value = _this2.returnData[ele.id];
          // 添加text
          ele.text = _this2.m[ele.id];
          // 添加type
          ele.type = 'input';
          // 添加disabled,palceholder
          if (ele.id === 'actualCollection') {
            ele.disabled = false;
            ele.placeholder = _this2.m.placeholder;
          } else {
            ele.disabled = true;
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
            _tip2.default.alert('Not Rented!');
          }
        });
      },


      // 提交
      onSubmit: function onSubmit() {
        console.log(this.returnData);
      }
    }, _this.events = {
      // 更新输入框的value到returnData
      'inputValueChange': function inputValueChange(id, value) {
        if (_this.returnData[id] === value) return;
        switch (id) {
          case 'actualCollection':
            _this.returnData.actualCollection = value;
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // 监听子组件Formlist的事件广播


  _createClass(Return, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _index.getLang)('return', this);

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

  return Return;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Return , 'pages/return'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldHVybi5qcyJdLCJuYW1lcyI6WyJSZXR1cm4iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb3JtbGlzdCIsIkZvcm1saXN0IiwidGFiQmFyIiwiVGFiQmFyIiwibmF2aWdhdG9yQmFjayIsIk5hdmlnYXRvckJhY2siLCJkYXRhIiwibGFuZ3VhZ2UiLCJtIiwicGFnZSIsInJldHVybkRhdGEiLCJzdGF0ZSIsImlkIiwicHJpY2UiLCJ0eXBlIiwib3V0VGltZSIsInJldHVyblRpbWUiLCJsZW5ndGgiLCJ0b3RhbFByaWNlIiwiYWN0dWFsQ29sbGVjdGlvbiIsImNoYW5nZSIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsInJlZGlyZWN0IiwiJGFwcGx5IiwiY29tcHV0ZWQiLCJnb29kc0lkIiwiZm9ybURhdGEiLCJmb3JFYWNoIiwiZWxlIiwidmFsdWUiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsIm1ldGhvZHMiLCJuYXZUb0hvbWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwicmVkaXJlY3RUbyIsInN1Y2Nlc3MiLCJ0aXAiLCJhbGVydCIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDcEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxvQkFBbUIsVUFBcEIsRUFBK0IsdUJBQXNCLFNBQXJELEVBQVosRUFBNEUsVUFBUyxFQUFDLG9CQUFtQixHQUFwQixFQUF3QixVQUFTLFFBQWpDLEVBQXJGLEVBQWdJLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFoSixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxnQkFBVUMsa0JBREY7QUFFUkMsY0FBUUMsZ0JBRkE7QUFHUkMscUJBQWVDO0FBSFAsSyxRQU1WQyxJLEdBQU87QUFDTDtBQUNBQyxnQkFBVSxFQUZMO0FBR0w7QUFDQUMsU0FBRyxFQUpFO0FBS0w7QUFDQUMsWUFBTSxFQU5EO0FBT0w7QUFDQUMsa0JBQVk7QUFDVkMsZUFBTyxNQURHO0FBRVZDLFlBQUksd0JBRk07QUFHVkMsZUFBTyxLQUhHO0FBSVZDLGNBQU0sTUFKSTtBQUtWQyxpQkFBUyxtQkFMQztBQU1WQyxvQkFBWSxtQkFORjtBQU9WQyxnQkFBUSxHQVBFO0FBUVZDLG9CQUFZLEtBUkY7QUFTVkMsMEJBQWtCLEVBVFI7QUFVVkMsZ0JBQVE7QUFWRTtBQVJQLEssUUFzQlBDLEssR0FBUTtBQUNOYixPQURNLGFBQ0pjLFFBREksRUFDTUMsUUFETixFQUNnQjtBQUNwQixZQUFHRCxTQUFTYixJQUFaLEVBQWlCO0FBQ2YsZUFBS0EsSUFBTCxHQUFZYSxTQUFTYixJQUFyQjtBQUNEO0FBQ0Q7QUFDQSxZQUFHYSxTQUFTWCxLQUFULEtBQW1CLFNBQXRCLEVBQWdDO0FBQzlCLGVBQUthLFFBQUw7QUFDRDtBQUNGLE9BVEs7O0FBVU47QUFDQWQsZ0JBWE0sc0JBV0tZLFFBWEwsRUFXZUMsUUFYZixFQVd5Qjs7QUFFN0I7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNKOztBQUVBO0FBQ0EsWUFBSUQsU0FBU0gsZ0JBQVQsSUFBNkJHLFNBQVNILGdCQUFULEtBQThCSSxTQUFTSixnQkFBeEUsRUFBeUY7QUFDdkYsZUFBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUJFLFNBQVNILGdCQUFULEdBQTRCRyxTQUFTSixVQUE5RDtBQUNBO0FBQ0EsZUFBS08sTUFBTDtBQUNEO0FBQ0Y7QUF4Q0ssSyxRQTJDUkMsUSxHQUFXO0FBQ1Q7QUFDQUMsYUFGUyxxQkFFQztBQUNSLGVBQU8sS0FBS2pCLFVBQUwsQ0FBZ0JFLEVBQXZCO0FBQ0QsT0FKUTtBQUtUZ0IsY0FMUyxzQkFLRTtBQUFBOztBQUNUO0FBQ0EsWUFBRyxDQUFDLEtBQUtsQixVQUFMLENBQWdCUSxVQUFwQixFQUFnQztBQUNoQztBQUNBLFlBQUlaLE9BQU8sQ0FDVCxFQUFDTSxJQUFJLE9BQUwsRUFEUyxFQUVULEVBQUNBLElBQUksTUFBTCxFQUZTLEVBR1QsRUFBQ0EsSUFBSSxTQUFMLEVBSFMsRUFJVCxFQUFDQSxJQUFJLFlBQUwsRUFKUyxFQUtULEVBQUNBLElBQUksUUFBTCxFQUxTLEVBTVQsRUFBQ0EsSUFBSSxZQUFMLEVBTlMsRUFPVCxFQUFDQSxJQUFJLGtCQUFMLEVBUFMsRUFRVCxFQUFDQSxJQUFJLFFBQUwsRUFSUyxDQUFYOztBQVdBTixhQUFLdUIsT0FBTCxDQUFhLGVBQU87QUFDbEI7QUFDQUMsY0FBSUMsS0FBSixHQUFZLE9BQUtyQixVQUFMLENBQWdCb0IsSUFBSWxCLEVBQXBCLENBQVo7QUFDQTtBQUNBa0IsY0FBSUUsSUFBSixHQUFXLE9BQUt4QixDQUFMLENBQU9zQixJQUFJbEIsRUFBWCxDQUFYO0FBQ0E7QUFDQWtCLGNBQUloQixJQUFKLEdBQVcsT0FBWDtBQUNBO0FBQ0EsY0FBSWdCLElBQUlsQixFQUFKLEtBQVcsa0JBQWYsRUFBa0M7QUFDaENrQixnQkFBSUcsUUFBSixHQUFlLEtBQWY7QUFDQUgsZ0JBQUlJLFdBQUosR0FBa0IsT0FBSzFCLENBQUwsQ0FBTzBCLFdBQXpCO0FBQ0QsV0FIRCxNQUdPO0FBQ0xKLGdCQUFJRyxRQUFKLEdBQWUsSUFBZjtBQUNEO0FBQ0YsU0FkRDtBQWVBLGVBQU8zQixJQUFQO0FBQ0Q7QUFwQ1EsSyxRQXVDWDZCLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNHO0FBQ1RDLFdBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLE1BQUwsRUFBZDtBQUNELE9BSE87OztBQUtSO0FBQ0FmLGNBTlEsc0JBTUc7QUFDVGdCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RGLGVBQUssTUFEUztBQUVkRyxpQkFGYyxxQkFFSjtBQUNSQywwQkFBSUMsS0FBSixDQUFVLGFBQVY7QUFDRDtBQUphLFNBQWhCO0FBTUQsT0FiTzs7O0FBZVI7QUFDQUMsY0FoQlEsc0JBZ0JFO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVksS0FBS3JDLFVBQWpCO0FBQ0Q7QUFsQk8sSyxRQXNCVnNDLE0sR0FBUztBQUNQO0FBQ0EsMEJBQW9CLDBCQUFDcEMsRUFBRCxFQUFLbUIsS0FBTCxFQUFlO0FBQ2pDLFlBQUcsTUFBS3JCLFVBQUwsQ0FBZ0JFLEVBQWhCLE1BQXdCbUIsS0FBM0IsRUFBa0M7QUFDbEMsZ0JBQVFuQixFQUFSO0FBQ0UsZUFBSyxrQkFBTDtBQUNFLGtCQUFLRixVQUFMLENBQWdCUyxnQkFBaEIsR0FBbUNZLEtBQW5DO0FBQ0E7QUFISjtBQUtEO0FBVE0sSzs7O0FBRFQ7Ozs7Ozs7Ozs7Ozt1QkFjUSxvQkFBUSxRQUFSLEVBQWtCLElBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFySjBCUyxlQUFLL0IsSTs7a0JBQXBCZCxNIiwiZmlsZSI6InJldHVybi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xyXG4gIGltcG9ydCB7IGdldExhbmcgfSBmcm9tICcuLi9sYW5nL2luZGV4LmpzJ1xyXG4gIGltcG9ydCBGb3JtbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1saXN0J1xyXG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnLi4vY29tcG9uZW50cy90YWItYmFyJ1xyXG4gIGltcG9ydCBOYXZpZ2F0b3JCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdG9yLWJhY2snXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHVybiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZm9ybWxpc3RcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJmb3JtRGF0YVwiLFwidi1iaW5kOmdvb2RzSWQuc3luY1wiOlwiZ29vZHNJZFwifSxcInRhYkJhclwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcIm1cIixcImZhdGhlclwiOlwicmV0dXJuXCJ9LFwibmF2aWdhdG9yQmFja1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bWVzc2FnZS5zeW5jXCI6XCJwYWdlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgZm9ybWxpc3Q6IEZvcm1saXN0LFxyXG4gICAgICB0YWJCYXI6IFRhYkJhcixcclxuICAgICAgbmF2aWdhdG9yQmFjazogTmF2aWdhdG9yQmFja1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIOivreenjVxyXG4gICAgICBsYW5ndWFnZTogJycsXHJcbiAgICAgIC8vIOmdmeaAgeaWh+Wtl1xyXG4gICAgICBtOiB7fSxcclxuICAgICAgLy8g5Lyg57uZdGFiQmFy57uE5Lu277yM6K6p5YW255+l6YGT6LCB5piv5YW254i257uE5Lu2XHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAvLyBzdGF0ZS9pZC9wcmljZS90eXBlL291dFRpbWXov5nlh6DkuKrmmK/pnIDopoHlkI7lj7Dnu5nnmoTjgIJhY3R1YWxDb2xsZWN0aW9u55Sx55So5oi35aGr5YaZ44CCcmV0dXJuVGltZeS4uuaXtumXtOaIs1xyXG4gICAgICByZXR1cm5EYXRhOiB7XHJcbiAgICAgICAgc3RhdGU6ICdpZGxlJyxcclxuICAgICAgICBpZDogJzE3NjhTMTgwNjIzXzAxMDE5MDAwMDEnLFxyXG4gICAgICAgIHByaWNlOiAnMzAwJyxcclxuICAgICAgICB0eXBlOiAnSG91cicsXHJcbiAgICAgICAgb3V0VGltZTogJzIwMTgwNzA1IFBNIDA0OjAwJyxcclxuICAgICAgICByZXR1cm5UaW1lOiAnMjAxODA3MDUgUE0gMDc6MDAnLFxyXG4gICAgICAgIGxlbmd0aDogJzMnLFxyXG4gICAgICAgIHRvdGFsUHJpY2U6ICc5MDAnLFxyXG4gICAgICAgIGFjdHVhbENvbGxlY3Rpb246ICcnLFxyXG4gICAgICAgIGNoYW5nZTogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgICBtKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmKG5ld1ZhbHVlLnBhZ2Upe1xyXG4gICAgICAgICAgdGhpcy5wYWdlID0gbmV3VmFsdWUucGFnZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmnKrlh7rnp5/liJnph43lrprlkJHlm55ob21l6aG1XHJcbiAgICAgICAgaWYobmV3VmFsdWUuc3RhdGUgPT09ICdpZGxl5pyq5Ye656efJyl7XHJcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0KClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi/meS4qndhdGNo5Ye95pWw55qE5ZCv5Yqo5rqQ6IeqcmV0dXJuRGF0YS5vdXRUaW1l55qE5YC85LuOJyflj5jkuLrmnInlgLzvvIzkvYbmmK/njrDlnKhvdXRUaW1l5piv55u05o6l5YaZ5q2755qE77yM5omA5Lul5peg5rOV6Kem5Y+Rd2F0Y2jvvIzlsLHmmoLml7bpg73nu5nms6jph4rkuoZcclxuICAgICAgcmV0dXJuRGF0YShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyDmoLnmja5yZXR1cm5EYXRhLm91dFRpbWXot5/ml7bpl7TmiLPorqHnrpdsZW5ndGhcclxuICAgICAgICAvLyBpZiAobmV3VmFsdWUub3V0VGltZSAmJm5ld1ZhbHVlLm91dFRpbWUgIT09IG9sZFZhbHVlLm91dFRpbWUpe1xyXG4gICAgICAgICAgLy8gbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAvLyB0aGlzLnJldHVybkRhdGEucmV0dXJuVGltZSA9IGRhdGVcclxuICAgICAgICAgIC8vIGlmIChuZXdWYWx1ZS50eXBlID09PSAnSG91cicpe1xyXG4gICAgICAgICAgLy8gICBsZXQgbCA9IE1hdGgucm91bmQoKGRhdGUgLSBuZXdWYWx1ZS5vdXRUaW1lKS8zNjAwMDAwKVxyXG4gICAgICAgICAgLy8gICB0aGlzLnJldHVybkRhdGEubGVuZ3RoID0gbFxyXG4gICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgIC8vICAgbGV0IGwgPU1hdGgucm91bmQoKChkYXRlIC0gbmV3VmFsdWUub3V0VGltZSkvMzYwMDAwMCkvMjQpXHJcbiAgICAgICAgICAvLyAgIHRoaXMucmV0dXJuRGF0YS5sZW5ndGggPSBsXHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAvLyB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyDmoLnmja5yZXR1cm5EYXRhLnByaWNl5LiObGVuZ3Ro6K6h566X5oC75Lu3XHJcbiAgICAgICAgLy8gaWYgKG5ld1ZhbHVlLmxlbmd0aCAmJiBuZXdWYWx1ZS5sZW5ndGggIT09IG9sZFZhbHVlLmxlbmd0aCl7XHJcbiAgICAgICAgLy8gICBsZXQgdG90YWwgPSBuZXdWYWx1ZS5wcmljZSAqIG5ld1ZhbHVlLmxlbmd0aFxyXG4gICAgICAgIC8vICAgdGhpcy5yZXR1cm5EYXRhLnRvdGFsUHJpY2UgPSB0b3RhbFxyXG4gICAgICAgICAgICAvLyAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8g5qC55o2uYWN0dWFsQ29sbGVjdGlvbuS4jnRvdGFsUHJpY2XorqHnrpfmib7pm7bph5Hpop1cclxuICAgICAgICBpZiAobmV3VmFsdWUuYWN0dWFsQ29sbGVjdGlvbiAmJiBuZXdWYWx1ZS5hY3R1YWxDb2xsZWN0aW9uICE9PSBvbGRWYWx1ZS5hY3R1YWxDb2xsZWN0aW9uKXtcclxuICAgICAgICAgIHRoaXMucmV0dXJuRGF0YS5jaGFuZ2UgPSBuZXdWYWx1ZS5hY3R1YWxDb2xsZWN0aW9uIC0gbmV3VmFsdWUudG90YWxQcmljZVxyXG4gICAgICAgICAgLy8g5Zyo5q2k5Y+R546w5LiA5Liq6Zeu6aKY77yM6K6h566X5bGe5oCn5Lya5YWI5LqOdGhpcy5yZXR1cm5EYXRhLmNoYW5nZeWAvOS/ruaUueaJp+ihjO+8jOWKoHRoaXMuJGFwcGx5KCnlkI7op6PlhrNcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgLy8g55uR5ZCscmV0dXJuRGF0YeOAgW3lj5jljJbvvIzlubbmoLzlvI/ljJbkuLpGb3JtbGlzdOe7hOS7tuaJgOmcgOaVsOaNrlxyXG4gICAgICBnb29kc0lkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJldHVybkRhdGEuaWRcclxuICAgICAgfSxcclxuICAgICAgZm9ybURhdGEoKSB7XHJcbiAgICAgICAgLy8g5oC75Lu35pyq6K6h566X5Ye65pe25LiN5omn6KGMLOWboOS4uuaAu+S7t+aYr+acgOWQjuiuoeeul+WHuuadpeeahO+8jOWcqOaAu+S7t+WHuuadpeS5i+WJjeaVsOaNrumTgeWumuS4jeWFqFxyXG4gICAgICAgIGlmKCF0aGlzLnJldHVybkRhdGEudG90YWxQcmljZSkgcmV0dXJuXHJcbiAgICAgICAgLy8gZm9ybWxpc3Tnu4Tku7bmiYDpnIDmlbDmja7nmoRpZOaYr+WGmeatu+eahFxyXG4gICAgICAgIGxldCBkYXRhID0gW1xyXG4gICAgICAgICAge2lkOiAncHJpY2UnfSwgXHJcbiAgICAgICAgICB7aWQ6ICd0eXBlJ30sIFxyXG4gICAgICAgICAge2lkOiAnb3V0VGltZSd9LCBcclxuICAgICAgICAgIHtpZDogJ3JldHVyblRpbWUnfSwgXHJcbiAgICAgICAgICB7aWQ6ICdsZW5ndGgnfSwgXHJcbiAgICAgICAgICB7aWQ6ICd0b3RhbFByaWNlJ30sIFxyXG4gICAgICAgICAge2lkOiAnYWN0dWFsQ29sbGVjdGlvbid9LCBcclxuICAgICAgICAgIHtpZDogJ2NoYW5nZSd9XHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgICAgIC8vIOa3u+WKoHZhbHVlXHJcbiAgICAgICAgICBlbGUudmFsdWUgPSB0aGlzLnJldHVybkRhdGFbZWxlLmlkXVxyXG4gICAgICAgICAgLy8g5re75YqgdGV4dFxyXG4gICAgICAgICAgZWxlLnRleHQgPSB0aGlzLm1bZWxlLmlkXVxyXG4gICAgICAgICAgLy8g5re75YqgdHlwZVxyXG4gICAgICAgICAgZWxlLnR5cGUgPSAnaW5wdXQnXHJcbiAgICAgICAgICAvLyDmt7vliqBkaXNhYmxlZCxwYWxjZWhvbGRlclxyXG4gICAgICAgICAgaWYgKGVsZS5pZCA9PT0gJ2FjdHVhbENvbGxlY3Rpb24nKXtcclxuICAgICAgICAgICAgZWxlLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgZWxlLnBsYWNlaG9sZGVyID0gdGhpcy5tLnBsYWNlaG9sZGVyXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGUuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgbmF2VG9Ib21lKCl7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOidob21lJ30pXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDph43lrprlkJHlm55ob21l6aG177yM5bm25by556qX5o+Q56S6XHJcbiAgICAgIHJlZGlyZWN0KCkge1xyXG4gICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICB1cmw6ICdob21lJyxcclxuICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIHRpcC5hbGVydCgnTm90IFJlbnRlZCEnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDmj5DkuqRcclxuICAgICAgb25TdWJtaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJldHVybkRhdGEpXHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyDnm5HlkKzlrZDnu4Tku7ZGb3JtbGlzdOeahOS6i+S7tuW5v+aSrVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAvLyDmm7TmlrDovpPlhaXmoYbnmoR2YWx1ZeWIsHJldHVybkRhdGFcclxuICAgICAgJ2lucHV0VmFsdWVDaGFuZ2UnOiAoaWQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5yZXR1cm5EYXRhW2lkXSA9PT0gdmFsdWUpIHJldHVyblxyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgIGNhc2UgJ2FjdHVhbENvbGxlY3Rpb24nOlxyXG4gICAgICAgICAgICB0aGlzLnJldHVybkRhdGEuYWN0dWFsQ29sbGVjdGlvbiA9IHZhbHVlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBhd2FpdCBnZXRMYW5nKCdyZXR1cm4nLCB0aGlzKVxyXG4gICAgfVxyXG4gIH1cclxuIl19