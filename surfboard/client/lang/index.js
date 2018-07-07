'use strict';

// 获取当前页面所需静态文字
var getLang = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, that) {
    var cookies, lang, mes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _util.getStorageData)('cookies');

          case 2:
            cookies = _context.sent;
            lang = '';

            if (!cookies || !cookies.language) {
              lang = 'en';
              setLang('en');
            } else {
              lang = cookies.language.language;
            }
            that.language = lang;
            that.$apply();

            // 根据page及语种获取此页的messages
            mes = {};

            if (lang === 'en') {
              _en.en.forEach(function (ele) {
                if (ele.name === page) {
                  mes = ele.messages;
                }
              });
            } else {
              _zh.zh.forEach(function (ele) {
                if (ele.name === page) {
                  mes = ele.messages;
                }
              });
            }
            that.m = mes;
            that.$apply();

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getLang(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// 设置语言


var setLang = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(lang) {
    var obj;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            obj = {};

            obj.language = lang;
            _context2.next = 4;
            return (0, _cookie.setCookies)(obj);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function setLang(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _en = require('./en.js');

var _zh = require('./zh.js');

var _cookie = require('./../utils/cookie.js');

var _util = require('./../utils/util.js');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = {
  getLang: getLang,
  setLang: setLang
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInBhZ2UiLCJ0aGF0IiwiY29va2llcyIsImxhbmciLCJsYW5ndWFnZSIsInNldExhbmciLCIkYXBwbHkiLCJtZXMiLCJlbiIsImZvckVhY2giLCJlbGUiLCJuYW1lIiwibWVzc2FnZXMiLCJ6aCIsIm0iLCJnZXRMYW5nIiwib2JqIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFLQTs7cUVBQ0EsaUJBQXVCQSxJQUF2QixFQUE2QkMsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFc0IsMEJBQWUsU0FBZixDQUZ0Qjs7QUFBQTtBQUVNQyxtQkFGTjtBQUdNQyxnQkFITixHQUdhLEVBSGI7O0FBSUUsZ0JBQUksQ0FBQ0QsT0FBRCxJQUFZLENBQUNBLFFBQVFFLFFBQXpCLEVBQW1DO0FBQ2pDRCxxQkFBTyxJQUFQO0FBQ0FFLHNCQUFRLElBQVI7QUFDRCxhQUhELE1BR087QUFDTEYscUJBQU9ELFFBQVFFLFFBQVIsQ0FBaUJBLFFBQXhCO0FBQ0Q7QUFDREgsaUJBQUtHLFFBQUwsR0FBZ0JELElBQWhCO0FBQ0FGLGlCQUFLSyxNQUFMOztBQUVBO0FBQ0lDLGVBZE4sR0FjWSxFQWRaOztBQWVFLGdCQUFJSixTQUFTLElBQWIsRUFBbUI7QUFDakJLLHFCQUFHQyxPQUFILENBQVcsZUFBTztBQUNoQixvQkFBSUMsSUFBSUMsSUFBSixLQUFhWCxJQUFqQixFQUF1QjtBQUNyQk8sd0JBQU1HLElBQUlFLFFBQVY7QUFDRDtBQUNGLGVBSkQ7QUFLRCxhQU5ELE1BTU87QUFDTEMscUJBQUdKLE9BQUgsQ0FBVyxlQUFPO0FBQ2hCLG9CQUFJQyxJQUFJQyxJQUFKLEtBQWFYLElBQWpCLEVBQXVCO0FBQ3JCTyx3QkFBTUcsSUFBSUUsUUFBVjtBQUNEO0FBQ0YsZUFKRDtBQUtEO0FBQ0RYLGlCQUFLYSxDQUFMLEdBQVNQLEdBQVQ7QUFDQU4saUJBQUtLLE1BQUw7O0FBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlUyxPOzs7OztBQWdDZjs7OztzRUFDQSxrQkFBdUJaLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNNYSxlQUROLEdBQ1ksRUFEWjs7QUFFRUEsZ0JBQUlaLFFBQUosR0FBZUQsSUFBZjtBQUZGO0FBQUEsbUJBR1Esd0JBQVdhLEdBQVgsQ0FIUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZVgsTzs7Ozs7QUF2Q2Y7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUF5Q0FZLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkgsa0JBRGU7QUFFZlY7QUFGZSxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuIH0gZnJvbSAnLi9lbi5qcydcclxuaW1wb3J0IHsgemggfSBmcm9tICcuL3poLmpzJ1xyXG5pbXBvcnQgeyBzZXRDb29raWVzIH0gZnJvbSAnLi4vdXRpbHMvY29va2llJ1xyXG5pbXBvcnQgeyBnZXRTdG9yYWdlRGF0YSB9IGZyb20gJy4uL3V0aWxzL3V0aWwnXHJcblxyXG4vLyDojrflj5blvZPliY3pobXpnaLmiYDpnIDpnZnmgIHmloflrZdcclxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFuZyhwYWdlLCB0aGF0KSB7XHJcbiAgLy8g5LuOc3RvcmFnZeeahGNvb2tpZXPkuK3ojrflj5bor63np41cclxuICBsZXQgY29va2llcyA9IGF3YWl0IGdldFN0b3JhZ2VEYXRhKCdjb29raWVzJylcclxuICBsZXQgbGFuZyA9ICcnXHJcbiAgaWYgKCFjb29raWVzIHx8ICFjb29raWVzLmxhbmd1YWdlKSB7XHJcbiAgICBsYW5nID0gJ2VuJ1xyXG4gICAgc2V0TGFuZygnZW4nKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBsYW5nID0gY29va2llcy5sYW5ndWFnZS5sYW5ndWFnZVxyXG4gIH1cclxuICB0aGF0Lmxhbmd1YWdlID0gbGFuZ1xyXG4gIHRoYXQuJGFwcGx5KClcclxuXHJcbiAgLy8g5qC55o2ucGFnZeWPiuivreenjeiOt+WPluatpOmhteeahG1lc3NhZ2VzXHJcbiAgbGV0IG1lcyA9IHt9XHJcbiAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgIGVuLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgaWYgKGVsZS5uYW1lID09PSBwYWdlKSB7XHJcbiAgICAgICAgbWVzID0gZWxlLm1lc3NhZ2VzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHpoLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgaWYgKGVsZS5uYW1lID09PSBwYWdlKSB7XHJcbiAgICAgICAgbWVzID0gZWxlLm1lc3NhZ2VzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHRoYXQubSA9IG1lc1xyXG4gIHRoYXQuJGFwcGx5KClcclxufVxyXG5cclxuLy8g6K6+572u6K+t6KiAXHJcbmFzeW5jIGZ1bmN0aW9uIHNldExhbmcobGFuZykge1xyXG4gIGxldCBvYmogPSB7fVxyXG4gIG9iai5sYW5ndWFnZSA9IGxhbmdcclxuICBhd2FpdCBzZXRDb29raWVzKG9iailcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRMYW5nLFxyXG4gIHNldExhbmdcclxufSJdfQ==