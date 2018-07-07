'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabBar = function (_wepy$component) {
  _inherits(TabBar, _wepy$component);

  function TabBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Object,
        default: null
      },
      father: String

      /*
        将[{rent:'Rent'}, {sell:'Sell'}, {return:'Return'}]格式转化为所需的：
        [{text:'Rent', url:'rent'}, {text:'Sell', url:'sell'}, {text:'Return', url:'return'}]
      */
    }, _this.computed = {
      text: function text() {
        if (this.list.tabBar) {
          var arr = [];
          this.list.tabBar.forEach(function (ele, i) {
            var obj = {};
            obj.url = Object.keys(ele)[0];
            obj.text = Object.values(ele)[0];
            arr.push(obj);
          });
          return arr;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabBar, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return TabBar;
}(_wepy2.default.component);

exports.default = TabBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1iYXIuanMiXSwibmFtZXMiOlsiVGFiQmFyIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJmYXRoZXIiLCJTdHJpbmciLCJjb21wdXRlZCIsInRleHQiLCJ0YWJCYXIiLCJhcnIiLCJmb3JFYWNoIiwiZWxlIiwiaSIsIm9iaiIsInVybCIsImtleXMiLCJ2YWx1ZXMiLCJwdXNoIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLGNBQVFDOztBQUdWOzs7O0FBUlEsSyxRQVlSQyxRLEdBQVc7QUFDVEMsVUFEUyxrQkFDRDtBQUNOLFlBQUcsS0FBS1AsSUFBTCxDQUFVUSxNQUFiLEVBQW9CO0FBQ2xCLGNBQUlDLE1BQU0sRUFBVjtBQUNBLGVBQUtULElBQUwsQ0FBVVEsTUFBVixDQUFpQkUsT0FBakIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDbkMsZ0JBQUlDLE1BQU0sRUFBVjtBQUNBQSxnQkFBSUMsR0FBSixHQUFVWixPQUFPYSxJQUFQLENBQVlKLEdBQVosRUFBaUIsQ0FBakIsQ0FBVjtBQUNBRSxnQkFBSU4sSUFBSixHQUFXTCxPQUFPYyxNQUFQLENBQWNMLEdBQWQsRUFBbUIsQ0FBbkIsQ0FBWDtBQUNBRixnQkFBSVEsSUFBSixDQUFTSixHQUFUO0FBQ0QsV0FMRDtBQU1BLGlCQUFPSixHQUFQO0FBQ0Q7QUFDRjtBQVpRLEs7Ozs7OzZCQWVGLENBQ1I7Ozs7RUE3QmlDUyxlQUFLQyxTOztrQkFBcEJyQixNIiwiZmlsZSI6InRhYi1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJCYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgbGlzdDoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhdGhlcjogU3RyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAg5bCGW3tyZW50OidSZW50J30sIHtzZWxsOidTZWxsJ30sIHtyZXR1cm46J1JldHVybid9XeagvOW8j+i9rOWMluS4uuaJgOmcgOeahO+8mlxyXG4gICAgICBbe3RleHQ6J1JlbnQnLCB1cmw6J3JlbnQnfSwge3RleHQ6J1NlbGwnLCB1cmw6J3NlbGwnfSwge3RleHQ6J1JldHVybicsIHVybDoncmV0dXJuJ31dXHJcbiAgICAqL1xyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIHRleHQgKCkge1xyXG4gICAgICAgIGlmKHRoaXMubGlzdC50YWJCYXIpe1xyXG4gICAgICAgICAgbGV0IGFyciA9IFtdXHJcbiAgICAgICAgICB0aGlzLmxpc3QudGFiQmFyLmZvckVhY2goKGVsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge31cclxuICAgICAgICAgICAgb2JqLnVybCA9IE9iamVjdC5rZXlzKGVsZSlbMF1cclxuICAgICAgICAgICAgb2JqLnRleHQgPSBPYmplY3QudmFsdWVzKGVsZSlbMF1cclxuICAgICAgICAgICAgYXJyLnB1c2gob2JqKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBhcnJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=