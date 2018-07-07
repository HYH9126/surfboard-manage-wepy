'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = require('./util.js');

/** 本地存储中cookie的数据格式
*   cookie：{
      key1:{
        key1:value,
        Max-Age:value,
        Expires:value,
        Path:value
      },
      key2: {
        key2: value,
        Max - Age: value,
        Expires: value,
        Path: value
      }
*   }
**/

// 序列化为浏览器端cookie,验证是否更新本地cookie，更新。空就直接存，非空就用setCookie与本地cookie对比是否有变化
// setCookieStr：res.header['set-cookie']
function setCookies(setCookieStr) {
  if (!setCookieStr) return;
  var storageCookie = (0, _util.getStorageData)('cookies');
  if (!storageCookie) storageCookie = {};
  if ((typeof setCookieStr === 'undefined' ? 'undefined' : _typeof(setCookieStr)) === String) {
    var key = setCookieStr.split('=')[0]; // setCookie在本地存储中的key,对应数据格式的key1、key2
    var setCookieObj = (0, _util.formConverttoObject)(setCookieStr); // setCookie在本地存储中的值，对应数据格式的key1、key2的值
    storageCookie[key] = setCookieObj;
  } else if ((typeof setCookieStr === 'undefined' ? 'undefined' : _typeof(setCookieStr)) === 'object') {
    var _key = Object.keys(setCookieStr)[0];
    storageCookie[_key] = setCookieStr;
  }
  (0, _util.setStorageData)('cookies', storageCookie);
}

function getCookies() {
  var cookies = '';
  var obj = (0, _util.getStorageData)('cookies');
  for (var key in obj) {
    cookies += key + '=' + obj[key][key] + ';';
  }
  return cookies;
}

module.exports = {
  setCookies: setCookies,
  getCookies: getCookies
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2tpZS5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWVzIiwic2V0Q29va2llU3RyIiwic3RvcmFnZUNvb2tpZSIsIlN0cmluZyIsImtleSIsInNwbGl0Iiwic2V0Q29va2llT2JqIiwiT2JqZWN0Iiwia2V5cyIsImdldENvb2tpZXMiLCJjb29raWVzIiwib2JqIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0EsU0FBU0EsVUFBVCxDQUFvQkMsWUFBcEIsRUFBa0M7QUFDaEMsTUFBSSxDQUFDQSxZQUFMLEVBQW1CO0FBQ25CLE1BQUlDLGdCQUFnQiwwQkFBZSxTQUFmLENBQXBCO0FBQ0EsTUFBSSxDQUFDQSxhQUFMLEVBQW9CQSxnQkFBZ0IsRUFBaEI7QUFDcEIsTUFBSSxRQUFRRCxZQUFSLHlDQUFRQSxZQUFSLE9BQTBCRSxNQUE5QixFQUFzQztBQUNwQyxRQUFJQyxNQUFNSCxhQUFhSSxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQVYsQ0FEb0MsQ0FDQztBQUNyQyxRQUFJQyxlQUFlLCtCQUFvQkwsWUFBcEIsQ0FBbkIsQ0FGb0MsQ0FFaUI7QUFDckRDLGtCQUFjRSxHQUFkLElBQXFCRSxZQUFyQjtBQUNELEdBSkQsTUFJTyxJQUFJLFFBQVFMLFlBQVIseUNBQVFBLFlBQVIsT0FBMEIsUUFBOUIsRUFBd0M7QUFDN0MsUUFBSUcsT0FBTUcsT0FBT0MsSUFBUCxDQUFZUCxZQUFaLEVBQTBCLENBQTFCLENBQVY7QUFDQUMsa0JBQWNFLElBQWQsSUFBcUJILFlBQXJCO0FBQ0Q7QUFDRCw0QkFBZSxTQUFmLEVBQTBCQyxhQUExQjtBQUNEOztBQUVELFNBQVNPLFVBQVQsR0FBc0I7QUFDcEIsTUFBSUMsVUFBVSxFQUFkO0FBQ0EsTUFBSUMsTUFBTSwwQkFBZSxTQUFmLENBQVY7QUFDQSxPQUFLLElBQUlQLEdBQVQsSUFBZ0JPLEdBQWhCLEVBQXFCO0FBQ25CRCxlQUFXTixNQUFNLEdBQU4sR0FBWU8sSUFBSVAsR0FBSixFQUFTQSxHQUFULENBQVosR0FBNEIsR0FBdkM7QUFDRDtBQUNELFNBQU9NLE9BQVA7QUFDRDs7QUFFREUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmYix3QkFEZTtBQUVmUztBQUZlLENBQWpCIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZm9ybUNvbnZlcnR0b09iamVjdCxcclxuICBnZXRTdG9yYWdlRGF0YSxcclxuICBzZXRTdG9yYWdlRGF0YSxcclxuICBpc0VxdWFsXHJcbn0gZnJvbSAnLi91dGlsJ1xyXG4vKiog5pys5Zyw5a2Y5YKo5LitY29va2ll55qE5pWw5o2u5qC85byPXHJcbiogICBjb29raWXvvJp7XHJcbiAgICAgIGtleTE6e1xyXG4gICAgICAgIGtleTE6dmFsdWUsXHJcbiAgICAgICAgTWF4LUFnZTp2YWx1ZSxcclxuICAgICAgICBFeHBpcmVzOnZhbHVlLFxyXG4gICAgICAgIFBhdGg6dmFsdWVcclxuICAgICAgfSxcclxuICAgICAga2V5Mjoge1xyXG4gICAgICAgIGtleTI6IHZhbHVlLFxyXG4gICAgICAgIE1heCAtIEFnZTogdmFsdWUsXHJcbiAgICAgICAgRXhwaXJlczogdmFsdWUsXHJcbiAgICAgICAgUGF0aDogdmFsdWVcclxuICAgICAgfVxyXG4qICAgfVxyXG4qKi9cclxuXHJcbi8vIOW6j+WIl+WMluS4uua1j+iniOWZqOerr2Nvb2tpZSzpqozor4HmmK/lkKbmm7TmlrDmnKzlnLBjb29raWXvvIzmm7TmlrDjgILnqbrlsLHnm7TmjqXlrZjvvIzpnZ7nqbrlsLHnlKhzZXRDb29raWXkuI7mnKzlnLBjb29raWXlr7nmr5TmmK/lkKbmnInlj5jljJZcclxuLy8gc2V0Q29va2llU3Ry77yacmVzLmhlYWRlclsnc2V0LWNvb2tpZSddXHJcbmZ1bmN0aW9uIHNldENvb2tpZXMoc2V0Q29va2llU3RyKSB7XHJcbiAgaWYgKCFzZXRDb29raWVTdHIpIHJldHVyblxyXG4gIGxldCBzdG9yYWdlQ29va2llID0gZ2V0U3RvcmFnZURhdGEoJ2Nvb2tpZXMnKVxyXG4gIGlmICghc3RvcmFnZUNvb2tpZSkgc3RvcmFnZUNvb2tpZSA9IHt9XHJcbiAgaWYgKHR5cGVvZiAoc2V0Q29va2llU3RyKSA9PT0gU3RyaW5nKSB7XHJcbiAgICBsZXQga2V5ID0gc2V0Q29va2llU3RyLnNwbGl0KCc9JylbMF0gLy8gc2V0Q29va2ll5Zyo5pys5Zyw5a2Y5YKo5Lit55qEa2V5LOWvueW6lOaVsOaNruagvOW8j+eahGtleTHjgIFrZXkyXHJcbiAgICBsZXQgc2V0Q29va2llT2JqID0gZm9ybUNvbnZlcnR0b09iamVjdChzZXRDb29raWVTdHIpIC8vIHNldENvb2tpZeWcqOacrOWcsOWtmOWCqOS4reeahOWAvO+8jOWvueW6lOaVsOaNruagvOW8j+eahGtleTHjgIFrZXky55qE5YC8XHJcbiAgICBzdG9yYWdlQ29va2llW2tleV0gPSBzZXRDb29raWVPYmpcclxuICB9IGVsc2UgaWYgKHR5cGVvZiAoc2V0Q29va2llU3RyKSA9PT0gJ29iamVjdCcpIHtcclxuICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhzZXRDb29raWVTdHIpWzBdXHJcbiAgICBzdG9yYWdlQ29va2llW2tleV0gPSBzZXRDb29raWVTdHJcclxuICB9XHJcbiAgc2V0U3RvcmFnZURhdGEoJ2Nvb2tpZXMnLCBzdG9yYWdlQ29va2llKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb29raWVzKCkge1xyXG4gIGxldCBjb29raWVzID0gJydcclxuICBsZXQgb2JqID0gZ2V0U3RvcmFnZURhdGEoJ2Nvb2tpZXMnKVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvb2tpZXMgKz0ga2V5ICsgJz0nICsgb2JqW2tleV1ba2V5XSArICc7J1xyXG4gIH1cclxuICByZXR1cm4gY29va2llc1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBzZXRDb29raWVzLFxyXG4gIGdldENvb2tpZXNcclxufSJdfQ==