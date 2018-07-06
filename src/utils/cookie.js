import {
  formConverttoObject,
  getStorageData,
  setStorageData,
  isEqual
} from './util'
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
  if (!setCookieStr) return
  let storageCookie = getStorageData('cookies')
  if (!storageCookie) storageCookie = {}
  if (typeof (setCookieStr) === String) {
    let key = setCookieStr.split('=')[0] // setCookie在本地存储中的key,对应数据格式的key1、key2
    let setCookieObj = formConverttoObject(setCookieStr) // setCookie在本地存储中的值，对应数据格式的key1、key2的值
    storageCookie[key] = setCookieObj
  } else if (typeof (setCookieStr) === 'object') {
    let key = Object.keys(setCookieStr)[0]
    storageCookie[key] = setCookieStr
  }
  setStorageData('cookies', storageCookie)
}

function getCookies() {
  let cookies = ''
  let obj = getStorageData('cookies')
  for (let key in obj) {
    cookies += key + '=' + obj[key][key] + ';'
  }
  return cookies
}

module.exports = {
  setCookies,
  getCookies
}