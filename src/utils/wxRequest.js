import wepy from 'wepy'
import tip from './tip'
import {setCookies, getCookies} from './cookie'

const wxRequest = async (params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  let header = { 'Content-Type': 'application/json' }
  // 加cookie
  header.cookie = getCookies()
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: header
  })
  tip.loaded()
  // 存cookie
  setCookies(res.header['set-cookie'])
  return res
}

module.exports = {
  wxRequest
}
