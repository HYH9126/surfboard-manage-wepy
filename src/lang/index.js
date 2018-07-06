import { en } from './en.js'
import { zh } from './zh.js'
import { setCookies } from '../utils/cookie'
import { getStorageData } from '../utils/util'

// 获取当前页面所需静态文字
async function getLang(page, that) {
  // 从storage的cookies中获取语种
  let cookies = await getStorageData('cookies')
  let lang = ''
  if (!cookies || !cookies.language) {
    lang = 'en'
    setLang('en')
  } else {
    lang = cookies.language.language
  }
  that.language = lang
  that.$apply()

  // 根据page及语种获取此页的messages
  let mes = {}
  if (lang === 'en') {
    en.forEach(ele => {
      if (ele.name === page) {
        mes = ele.messages
      }
    })
  } else {
    zh.forEach(ele => {
      if (ele.name === page) {
        mes = ele.messages
      }
    })
  }
  that.m = mes
  that.$apply()
}

// 设置语言
async function setLang(lang) {
  let obj = {}
  obj.language = lang
  await setCookies(obj)
}
module.exports = {
  getLang,
  setLang
}