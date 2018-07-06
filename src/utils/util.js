
// 表单格式序列化为对象
function formConverttoObject(form) {
  let arr = form.split(';')
  let obj = arr.reduce((pre, next) => {
    const key = next.split('=')[0];
    const val = next.split('=')[1];
    pre[key] = val;
    return pre;
  }, {})
  return obj
}

// 对象序列化为表单格式
function objectConverttoForm(obj) {
  let str = ''
  let toString = Object.prototype.toString
  for (let key in obj) {
    if (toString.call(obj[key]) === '[object Object]' || toString.call(obj[key]) === '[object Array]') {
      str += objectConverttoForm(obj[key])
    } else {
      str += obj[key]
    }
  }
}

// 获取本地存储中的数据
function getStorageData(target) {
  let res = wx.getStorageInfoSync()
  if (res.keys.indexOf(target) >= 0) {
    let data = wx.getStorageSync(target)
    return data
  } else {
    return {}
  }
}

// 将数据写入本地存储中
function setStorageData(target, data) {
  wx.setStorage({key: target, data: data})
}

// 比较两个对象 是否内容相同
function isEqual(obj1, obj2) {
  let toString = Object.prototype.toString
  for (let key in obj1) {
    let a = obj1[key]
    let b = obj2[key]
    // 判断key是否相同
    if (!b && a) {
      return fales
    }
    // 判断值的类型是否相同
    if (toString.call(a) !== toString.call(b)) {
      return fales
    }
    // 引用类型则递归判断
    if (toString.call(a) === '[object Object]' || toString.call(a) === '[object Array]') {
      return isEqual(a, b)
    }
    // 简单类型直接比较值
    else {
      // 排除特殊情况： 0 === -0 为true
      if (a === b) return a !== 0 || 1 / a === 1 / b
      // 如果有一个是null或undefined，则只有俩都是null，或俩都是undefined，才返回真
      if (a == null || b == null) return a === b
      let className = toString.call(a)
      switch (className) {
        case '[object RegExp]':
        case '[object String]':
          return '' + a === '' + b
        case '[object Number]':
          // 特殊情况：NaN === NaN 为false
          if (+a !== +a) return +b !== +b
          return +a === 0 ? 1 / +a === 1 / b : +a === +b
        case '[object Date]':
        case '[object Boolean]':
          return +a === +b
        case '[object Symbol]':
          return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b)
      }
    }
  }
  return true
}
module.exports = {
  formConverttoObject,
  objectConverttoForm,
  getStorageData,
  setStorageData,
  isEqual
}