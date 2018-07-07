'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _cookie = require('./cookie.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var wxRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = arguments[1];
    var data, header, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _tip2.default.loading();
            data = params.query || {};
            header = { 'Content-Type': 'application/json'
              // 加cookie
            };
            header.cookie = (0, _cookie.getCookies)();
            _context.next = 6;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'GET',
              data: data,
              header: header
            });

          case 6:
            res = _context.sent;

            _tip2.default.loaded();
            // 存cookie
            (0, _cookie.setCookies)(res.header['set-cookie']);
            return _context.abrupt('return', res);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function wxRequest() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJ0aXAiLCJsb2FkaW5nIiwiZGF0YSIsInF1ZXJ5IiwiaGVhZGVyIiwiY29va2llIiwid2VweSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXMiLCJsb2FkZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUE7QUFBQSxxRUFBWTtBQUFBLFFBQU9DLE1BQVAsdUVBQWdCLEVBQWhCO0FBQUEsUUFBb0JDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMsMEJBQUlDLE9BQUo7QUFDSUMsZ0JBRlksR0FFTEosT0FBT0ssS0FBUCxJQUFnQixFQUZYO0FBR1pDLGtCQUhZLEdBR0gsRUFBRSxnQkFBZ0I7QUFDL0I7QUFEYSxhQUhHO0FBS2hCQSxtQkFBT0MsTUFBUCxHQUFnQix5QkFBaEI7QUFMZ0I7QUFBQSxtQkFNQUMsZUFBS0MsT0FBTCxDQUFhO0FBQzNCUixtQkFBS0EsR0FEc0I7QUFFM0JTLHNCQUFRVixPQUFPVSxNQUFQLElBQWlCLEtBRkU7QUFHM0JOLG9CQUFNQSxJQUhxQjtBQUkzQkUsc0JBQVFBO0FBSm1CLGFBQWIsQ0FOQTs7QUFBQTtBQU1aSyxlQU5ZOztBQVloQlQsMEJBQUlVLE1BQUo7QUFDQTtBQUNBLG9DQUFXRCxJQUFJTCxNQUFKLENBQVcsWUFBWCxDQUFYO0FBZGdCLDZDQWVUSyxHQWZTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFrQkFFLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmY7QUFEZSxDQUFqQiIsImZpbGUiOiJ3eFJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJ1xyXG5pbXBvcnQge3NldENvb2tpZXMsIGdldENvb2tpZXN9IGZyb20gJy4vY29va2llJ1xyXG5cclxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMgKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcclxuICB0aXAubG9hZGluZygpXHJcbiAgbGV0IGRhdGEgPSBwYXJhbXMucXVlcnkgfHwge31cclxuICBsZXQgaGVhZGVyID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAvLyDliqBjb29raWVcclxuICBoZWFkZXIuY29va2llID0gZ2V0Q29va2llcygpXHJcbiAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICB1cmw6IHVybCxcclxuICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCB8fCAnR0VUJyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBoZWFkZXI6IGhlYWRlclxyXG4gIH0pXHJcbiAgdGlwLmxvYWRlZCgpXHJcbiAgLy8g5a2YY29va2llXHJcbiAgc2V0Q29va2llcyhyZXMuaGVhZGVyWydzZXQtY29va2llJ10pXHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3eFJlcXVlc3RcclxufVxyXG4iXX0=