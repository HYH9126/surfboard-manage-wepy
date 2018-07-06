
import { wxRequest } from '../utils/wxRequest.js'

const mainUrl = 'https://m7cii2dv.qcloud.la/'

// 登录接口——发送codeId判断是否是注册用户 params = {code}
const getIsRegisteredusersByCodeid = (params) => wxRequest(params, mainUrl + 'surfboard/mini/auth/login')

// 登录接口——发送用户信息判断是否是注册用户 params = {info}
const getIsRegisteredusersByUserinfo = (params) => wxRequest(params, mainUrl + 'surfboard/mini/auth/info')

// 登录接口——发送用户手机号判断是否是注册用户 params = {phone}
const getIsRegisteredusersByPhone = (params) => wxRequest(params, mainUrl + 'surfboard/mini/auth/phone')

// 获取冲浪板列表 params = {pageNo, pageSize, orderKey, ascFlag}
const getSurfboardList = (params) => wxRequest(params, mainUrl + 'surfboard/qryList')

// 获取冲浪板操作日志列表 params = {pageNo, pageSize, orderKey, ascFlag}
const getOperationLogList = (params) => wxRequest(params, mainUrl + 'surfboard/qryOperationLogList')

// 获取一个冲浪板信息 params = {id}
const getSurfboardDetail = (params) => wxRequest(params, mainUrl + 'surfboard/qrySurfboardDetail')

export default {
  getIsRegisteredusersByCodeid,
  getIsRegisteredusersByUserinfo,
  getIsRegisteredusersByPhone,
  getSurfboardList,
  getOperationLogList,
  getSurfboardDetail
}