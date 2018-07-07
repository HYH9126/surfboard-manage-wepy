"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 提示与加载工具类
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }

  // 弹出提示框


  _createClass(Tips, null, [{
    key: "success",
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: "success",
          mask: true,
          duration: duration
        });
      }, 300);
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    // 弹出确认窗口

  }, {
    key: "confirm",
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: "toast",
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: icon,
          mask: true,
          duration: 500
        });
      }, 300);

      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    // 警告框

  }, {
    key: "alert",
    value: function alert(title) {
      wx.showToast({
        title: title,
        image: "../images/alert.png",
        mask: true,
        duration: 1500
      });
    }

    // 错误框

  }, {
    key: "error",
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: "../images/error.png",
        mask: true
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 1500);
      }
    }

    // 弹出加载提示

  }, {
    key: "loading",
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      wx.showLoading({
        title: title,
        mask: true
      });
    }

    // 加载完毕

  }, {
    key: "loaded",
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        wx.hideLoading();
      }
    }
  }, {
    key: "share",
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast("分享成功");
        }
      };
    }
  }]);

  return Tips;
}();

// 静态变量，是否加载中


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwib25IaWRlIiwiaW1hZ2UiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxJO0FBQ25CLGtCQUFjO0FBQUE7O0FBQ1osU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNEOztBQUVEOzs7Ozs0QkFDZUMsSyxFQUF1QjtBQUFBLFVBQWhCQyxRQUFnQix1RUFBTCxHQUFLOztBQUNwQ0MsaUJBQVcsWUFBTTtBQUNmQyxXQUFHQyxTQUFILENBQWE7QUFDWEosaUJBQU9BLEtBREk7QUFFWEssZ0JBQU0sU0FGSztBQUdYQyxnQkFBTSxJQUhLO0FBSVhMLG9CQUFVQTtBQUpDLFNBQWI7QUFNRCxPQVBELEVBT0csR0FQSDtBQVFBLFVBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNoQixlQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENQLHFCQUFXLFlBQU07QUFDZk07QUFDRCxXQUZELEVBRUdQLFFBRkg7QUFHRCxTQUpNLENBQVA7QUFLRDtBQUNGOztBQUVEOzs7OzRCQUNlUyxJLEVBQWtDO0FBQUEsVUFBNUJDLE9BQTRCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRYLEtBQWMsdUVBQU4sSUFBTTs7QUFDL0MsYUFBTyxJQUFJTyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDTixXQUFHUyxTQUFILENBQWE7QUFDWFosaUJBQU9BLEtBREk7QUFFWGEsbUJBQVNILElBRkU7QUFHWEksc0JBQVksSUFIRDtBQUlYQyxtQkFBUyxzQkFBTztBQUNkLGdCQUFJQyxJQUFJQyxPQUFSLEVBQWlCO0FBQ2ZULHNCQUFRRyxPQUFSO0FBQ0QsYUFGRCxNQUVPLElBQUlLLElBQUlFLE1BQVIsRUFBZ0I7QUFDckJULHFCQUFPRSxPQUFQO0FBQ0Q7QUFDRixXQVZVO0FBV1hRLGdCQUFNLG1CQUFPO0FBQ1hWLG1CQUFPRSxPQUFQO0FBQ0Q7QUFiVSxTQUFiO0FBZUQsT0FoQk0sQ0FBUDtBQWlCRDs7OzBCQUVZWCxLLEVBQU9vQixNLEVBQTBCO0FBQUEsVUFBbEJmLElBQWtCLHVFQUFYLFNBQVc7O0FBQzVDSCxpQkFBVyxZQUFNO0FBQ2ZDLFdBQUdDLFNBQUgsQ0FBYTtBQUNYSixpQkFBT0EsS0FESTtBQUVYSyxnQkFBTUEsSUFGSztBQUdYQyxnQkFBTSxJQUhLO0FBSVhMLG9CQUFVO0FBSkMsU0FBYjtBQU1ELE9BUEQsRUFPRyxHQVBIOztBQVNBO0FBQ0EsVUFBSW1CLE1BQUosRUFBWTtBQUNWbEIsbUJBQVcsWUFBTTtBQUNma0I7QUFDRCxTQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0Y7O0FBRUQ7Ozs7MEJBQ2FwQixLLEVBQU87QUFDbEJHLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSixlQUFPQSxLQURJO0FBRVhxQixlQUFPLHFCQUZJO0FBR1hmLGNBQU0sSUFISztBQUlYTCxrQkFBVTtBQUpDLE9BQWI7QUFNRDs7QUFFRDs7OzswQkFDYUQsSyxFQUFPb0IsTSxFQUFRO0FBQzFCakIsU0FBR0MsU0FBSCxDQUFhO0FBQ1hKLGVBQU9BLEtBREk7QUFFWHFCLGVBQU8scUJBRkk7QUFHWGYsY0FBTTtBQUhLLE9BQWI7QUFLQTtBQUNBLFVBQUljLE1BQUosRUFBWTtBQUNWbEIsbUJBQVcsWUFBTTtBQUNma0I7QUFDRCxTQUZELEVBRUcsSUFGSDtBQUdEO0FBQ0Y7O0FBRUQ7Ozs7OEJBQzhCO0FBQUEsVUFBZnBCLEtBQWUsdUVBQVAsS0FBTzs7QUFDNUIsVUFBSUYsS0FBS0MsU0FBVCxFQUFvQjtBQUNsQjtBQUNEO0FBQ0RELFdBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQUksU0FBR21CLFdBQUgsQ0FBZTtBQUNidEIsZUFBT0EsS0FETTtBQUViTSxjQUFNO0FBRk8sT0FBZjtBQUlEOztBQUVEOzs7OzZCQUNnQjtBQUNkLFVBQUlSLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEJELGFBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQUksV0FBR29CLFdBQUg7QUFDRDtBQUNGOzs7MEJBRVl2QixLLEVBQU93QixHLEVBQUtDLEksRUFBTTtBQUM3QixhQUFPO0FBQ0x6QixlQUFPQSxLQURGO0FBRUwwQixjQUFNRixHQUZEO0FBR0xDLGNBQU1BLElBSEQ7QUFJTFYsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmxCLGVBQUs2QixLQUFMLENBQVcsTUFBWDtBQUNEO0FBTkksT0FBUDtBQVFEOzs7Ozs7QUFHSDs7O2tCQXhIcUI3QixJO0FBeUhyQkEsS0FBS0MsU0FBTCxHQUFpQixLQUFqQiIsImZpbGUiOiJ0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIOaPkOekuuS4juWKoOi9veW3peWFt+exu1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgfVxuXG4gIC8vIOW8ueWHuuaPkOekuuahhlxuICBzdGF0aWMgc3VjY2Vzcyh0aXRsZSwgZHVyYXRpb24gPSA1MDApIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgfSlcbiAgICB9LCAzMDApXG4gICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH0sIGR1cmF0aW9uKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyDlvLnlh7rnoa7orqTnqpflj6NcbiAgc3RhdGljIGNvbmZpcm0odGV4dCwgcGF5bG9hZCA9IHt9LCB0aXRsZSA9IFwi5o+Q56S6XCIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKVxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiByZXMgPT4ge1xuICAgICAgICAgIHJlamVjdChwYXlsb2FkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgdG9hc3QodGl0bGUsIG9uSGlkZSwgaWNvbiA9IFwic3VjY2Vzc1wiKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGljb246IGljb24sXG4gICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgIH0pXG4gICAgfSwgMzAwKVxuXG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXG4gICAgaWYgKG9uSGlkZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9uSGlkZSgpXG4gICAgICB9LCA1MDApXG4gICAgfVxuICB9XG5cbiAgLy8g6K2m5ZGK5qGGXG4gIHN0YXRpYyBhbGVydCh0aXRsZSkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbWFnZTogXCIuLi9pbWFnZXMvYWxlcnQucG5nXCIsXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDE1MDBcbiAgICB9KVxuICB9XG5cbiAgLy8g6ZSZ6K+v5qGGXG4gIHN0YXRpYyBlcnJvcih0aXRsZSwgb25IaWRlKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGltYWdlOiBcIi4uL2ltYWdlcy9lcnJvci5wbmdcIixcbiAgICAgIG1hc2s6IHRydWVcbiAgICB9KVxuICAgIC8vIOmakOiXj+e7k+adn+Wbnuiwg1xuICAgIGlmIChvbkhpZGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvbkhpZGUoKVxuICAgICAgfSwgMTUwMClcbiAgICB9XG4gIH1cblxuICAvLyDlvLnlh7rliqDovb3mj5DnpLpcbiAgc3RhdGljIGxvYWRpbmcodGl0bGUgPSBcIuWKoOi9veS4rVwiKSB7XG4gICAgaWYgKFRpcHMuaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgVGlwcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbWFzazogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICAvLyDliqDovb3lrozmr5VcbiAgc3RhdGljIGxvYWRlZCgpIHtcbiAgICBpZiAoVGlwcy5pc0xvYWRpbmcpIHtcbiAgICAgIFRpcHMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2hhcmUodGl0bGUsIHVybCwgZGVzYykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBwYXRoOiB1cmwsXG4gICAgICBkZXNjOiBkZXNjLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIFRpcHMudG9hc3QoXCLliIbkuqvmiJDlip9cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8g6Z2Z5oCB5Y+Y6YeP77yM5piv5ZCm5Yqg6L295LitXG5UaXBzLmlzTG9hZGluZyA9IGZhbHNlXG4iXX0=