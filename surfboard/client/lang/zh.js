'use strict';

var zh = [{
  name: 'login',
  messages: {
    english: '英',
    chinese: '中',
    logo: '欢迎使用冲浪板小程序',
    userinfoLogin: '用户信息登录：',
    phoneLogin: '手机号登陆：',
    loginBtn: '点击登录',
    tabBar: [{ rent: '出租' }, { return: '归还' }, { sell: '出售' }, { fix: '维修' }, { state: '状态' }]
  }
}, {
  name: 'home',
  messages: {
    english: '英',
    chinese: '中',
    rent: '出  租',
    return: '归  还',
    sell: '出  售',
    fix: '维  修',
    state: '状  态',
    tabBar: [{ rent: '出租' }, { return: '归还' }, { sell: '出售' }, { fix: '维修' }, { state: '状态' }]
  }
}, {
  name: 'rent',
  messages: {
    page: '出租',
    price: '出租单价',
    type: '租赁类型',
    time: '出租时长',
    name: '客人名称',
    nationality: '客人国籍',
    passpor: '护照号码',
    phone: '联系电话',
    email: '联系邮箱',
    hour: '时租',
    day: '日租',
    back: '返回',
    submit: '提交',
    placeholder: '请输入...',
    tabBar: [{ rent: '出租' }, { return: '归还' }, { sell: '出售' }, { fix: '维修' }, { state: '状态' }]
  }
}, {
  name: 'fix',
  messages: {
    page: '维修',
    fixType: '维修类型',
    length: '维修时长',
    back: '返回',
    submit: '提交',
    tabBar: [{ rent: '出租' }, { return: '归还' }, { sell: '出售' }, { fix: '维修' }, { state: '状态' }]
  }
}, {
  name: 'sell',
  messages: {
    page: '出售',
    price: '出售单价',
    name: '客人名称',
    nationality: '客人国籍',
    passport: '护照号码',
    telephone: '联系电话',
    email: '联系邮箱',
    totalPrice: '最终售价',
    actualCollection: '实收金额',
    change: '找零金额',
    back: '返回',
    submit: '提交',
    placeholder: '请输入...',
    tabBar: [{ rent: '出租' }, { return: '归还' }, { sell: '出售' }, { fix: '维修' }, { state: '状态' }]
  }
}, {
  name: 'return',
  messages: {
    page: '归还',
    price: '出租单价',
    type: '租赁类型',
    outTime: '出租时间',
    returnTime: '归还时间',
    length: '出租时长',
    totalPrice: '应收金额',
    actualCollection: '实收金额',
    change: '找零金额',
    back: '返回',
    submit: '提交',
    placeholder: '请输入...',
    tabBar: [{ rent: '出租' }, { return: '归还' }, { sell: '出售' }, { fix: '维修' }, { state: '状态' }]
  }
}, {
  name: 'state',
  messages: {
    page: '状态',
    tabBar: [{ rent: '出租' }, { return: '归还' }, { sell: '出售' }, { fix: '维修' }, { state: '状态' }]
  }
}];

module.exports = {
  zh: zh
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpoLmpzIl0sIm5hbWVzIjpbInpoIiwibmFtZSIsIm1lc3NhZ2VzIiwiZW5nbGlzaCIsImNoaW5lc2UiLCJsb2dvIiwidXNlcmluZm9Mb2dpbiIsInBob25lTG9naW4iLCJsb2dpbkJ0biIsInRhYkJhciIsInJlbnQiLCJyZXR1cm4iLCJzZWxsIiwiZml4Iiwic3RhdGUiLCJwYWdlIiwicHJpY2UiLCJ0eXBlIiwidGltZSIsIm5hdGlvbmFsaXR5IiwicGFzc3BvciIsInBob25lIiwiZW1haWwiLCJob3VyIiwiZGF5IiwiYmFjayIsInN1Ym1pdCIsInBsYWNlaG9sZGVyIiwiZml4VHlwZSIsImxlbmd0aCIsInBhc3Nwb3J0IiwidGVsZXBob25lIiwidG90YWxQcmljZSIsImFjdHVhbENvbGxlY3Rpb24iLCJjaGFuZ2UiLCJvdXRUaW1lIiwicmV0dXJuVGltZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsS0FBSyxDQUFDO0FBQ1ZDLFFBQU0sT0FESTtBQUVWQyxZQUFVO0FBQ1JDLGFBQVMsR0FERDtBQUVSQyxhQUFTLEdBRkQ7QUFHUkMsVUFBTSxZQUhFO0FBSVJDLG1CQUFlLFNBSlA7QUFLUkMsZ0JBQVksUUFMSjtBQU1SQyxjQUFVLE1BTkY7QUFPUkMsWUFBUSxDQUNOLEVBQUVDLE1BQU0sSUFBUixFQURNLEVBRU4sRUFBRUMsUUFBUSxJQUFWLEVBRk0sRUFHTixFQUFFQyxNQUFNLElBQVIsRUFITSxFQUlOLEVBQUVDLEtBQUssSUFBUCxFQUpNLEVBS04sRUFBRUMsT0FBTyxJQUFULEVBTE07QUFQQTtBQUZBLENBQUQsRUFpQlI7QUFDRGIsUUFBTSxNQURMO0FBRURDLFlBQVU7QUFDUkMsYUFBUyxHQUREO0FBRVJDLGFBQVMsR0FGRDtBQUdSTSxVQUFNLE1BSEU7QUFJUkMsWUFBUSxNQUpBO0FBS1JDLFVBQU0sTUFMRTtBQU1SQyxTQUFLLE1BTkc7QUFPUkMsV0FBTyxNQVBDO0FBUVJMLFlBQVEsQ0FDTixFQUFFQyxN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QVQsRUFMTTtBQUZBO0FBRlQsQ0EzSFEsQ0FBWDs7QUF5SUF1QixPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z0QztBQURlLENBQWpCIiwiZmlsZSI6InpoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgemggPSBbe1xyXG4gIG5hbWU6ICdsb2dpbicsXHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIGVuZ2xpc2g6ICfoi7EnLFxyXG4gICAgY2hpbmVzZTogJ+S4rScsXHJcbiAgICBsb2dvOiAn5qyi6L+O5L2/55So5Yay5rWq5p2/5bCP56iL5bqPJyxcclxuICAgIHVzZXJpbmZvTG9naW46ICfnlKjmiLfkv6Hmga/nmbvlvZXvvJonLFxyXG4gICAgcGhvbmVMb2dpbjogJ+aJi+acuuWPt+eZu+mZhu+8micsXHJcbiAgICBsb2dpbkJ0bjogJ+eCueWHu+eZu+W9lScsXHJcbiAgICB0YWJCYXI6IFtcclxuICAgICAgeyByZW50OiAn5Ye656efJyB9LFxyXG4gICAgICB7IHJldHVybjogJ+W9kui/mCcgfSxcclxuICAgICAgeyBzZWxsOiAn5Ye65ZSuJyB9LFxyXG4gICAgICB7IGZpeDogJ+e7tOS/ricgfSxcclxuICAgICAgeyBzdGF0ZTogJ+eKtuaAgScgfVxyXG4gICAgXVxyXG4gIH1cclxufSwge1xyXG4gIG5hbWU6ICdob21lJyxcclxuICBtZXNzYWdlczoge1xyXG4gICAgZW5nbGlzaDogJ+iLsScsXHJcbiAgICBjaGluZXNlOiAn5LitJyxcclxuICAgIHJlbnQ6ICflh7ogIOennycsXHJcbiAgICByZXR1cm46ICflvZIgIOi/mCcsXHJcbiAgICBzZWxsOiAn5Ye6ICDllK4nLFxyXG4gICAgZml4OiAn57u0ICDkv64nLFxyXG4gICAgc3RhdGU6ICfnirYgIOaAgScsXHJcbiAgICB0YWJCYXI6IFtcclxuICAgICAgeyByZW50OiAn5Ye656efJyB9LFxyXG4gICAgICB7IHJldHVybjogJ+W9kui/mCcgfSxcclxuICAgICAgeyBzZWxsOiAn5Ye65ZSuJyB9LFxyXG4gICAgICB7IGZpeDogJ+e7tOS/ricgfSxcclxuICAgICAgeyBzdGF0ZTogJ+eKtuaAgScgfVxyXG4gICAgXVxyXG4gIH1cclxufSwge1xyXG4gIG5hbWU6ICdyZW50JyxcclxuICBtZXNzYWdlczoge1xyXG4gICAgcGFnZTogJ+WHuuennycsXHJcbiAgICBwcmljZTogJ+WHuuenn+WNleS7tycsXHJcbiAgICB0eXBlOiAn56ef6LWB57G75Z6LJyxcclxuICAgIHRpbWU6ICflh7rnp5/ml7bplb8nLFxyXG4gICAgbmFtZTogJ+WuouS6uuWQjeensCcsXHJcbiAgICBuYXRpb25hbGl0eTogJ+WuouS6uuWbveexjScsXHJcbiAgICBwYXNzcG9yOiAn5oqk54Wn5Y+356CBJyxcclxuICAgIHBob25lOiAn6IGU57O755S16K+dJyxcclxuICAgIGVtYWlsOiAn6IGU57O76YKu566xJyxcclxuICAgIGhvdXI6ICfml7bnp58nLFxyXG4gICAgZGF5OiAn5pel56efJyxcclxuICAgIGJhY2s6ICfov5Tlm54nLFxyXG4gICAgc3VibWl0OiAn5o+Q5LqkJyxcclxuICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWlLi4uJyxcclxuICAgIHRhYkJhcjogW1xyXG4gICAgICB7IHJlbnQ6ICflh7rnp58nIH0sXHJcbiAgICAgIHsgcmV0dXJuOiAn5b2S6L+YJyB9LFxyXG4gICAgICB7IHNlbGw6ICflh7rllK4nIH0sXHJcbiAgICAgIHsgZml4OiAn57u05L+uJyB9LFxyXG4gICAgICB7IHN0YXRlOiAn54q25oCBJyB9XHJcbiAgICBdXHJcbiAgfVxyXG59LCB7XHJcbiAgbmFtZTogJ2ZpeCcsXHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIHBhZ2U6ICfnu7Tkv64nLFxyXG4gICAgZml4VHlwZTogJ+e7tOS/ruexu+WeiycsXHJcbiAgICBsZW5ndGg6ICfnu7Tkv67ml7bplb8nLFxyXG4gICAgYmFjazogJ+i/lOWbnicsXHJcbiAgICBzdWJtaXQ6ICfmj5DkuqQnLFxyXG4gICAgdGFiQmFyOiBbXHJcbiAgICAgIHsgcmVudDogJ+WHuuennycgfSxcclxuICAgICAgeyByZXR1cm46ICflvZLov5gnIH0sXHJcbiAgICAgIHsgc2VsbDogJ+WHuuWUricgfSxcclxuICAgICAgeyBmaXg6ICfnu7Tkv64nIH0sXHJcbiAgICAgIHsgc3RhdGU6ICfnirbmgIEnIH1cclxuICAgIF1cclxuICB9XHJcbn0sIHtcclxuICBuYW1lOiAnc2VsbCcsXHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIHBhZ2U6ICflh7rllK4nLFxyXG4gICAgcHJpY2U6ICflh7rllK7ljZXku7cnLFxyXG4gICAgbmFtZTogJ+WuouS6uuWQjeensCcsXHJcbiAgICBuYXRpb25hbGl0eTogJ+WuouS6uuWbveexjScsXHJcbiAgICBwYXNzcG9ydDogJ+aKpOeFp+WPt+eggScsXHJcbiAgICB0ZWxlcGhvbmU6ICfogZTns7vnlLXor50nLFxyXG4gICAgZW1haWw6ICfogZTns7vpgq7nrrEnLFxyXG4gICAgdG90YWxQcmljZTogJ+acgOe7iOWUruS7tycsXHJcbiAgICBhY3R1YWxDb2xsZWN0aW9uOiAn5a6e5pS26YeR6aKdJyxcclxuICAgIGNoYW5nZTogJ+aJvumbtumHkeminScsXHJcbiAgICBiYWNrOiAn6L+U5ZueJyxcclxuICAgIHN1Ym1pdDogJ+aPkOS6pCcsXHJcbiAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpS4uLicsXHJcbiAgICB0YWJCYXI6IFtcclxuICAgICAgeyByZW50OiAn5Ye656efJyB9LFxyXG4gICAgICB7IHJldHVybjogJ+W9kui/mCcgfSxcclxuICAgICAgeyBzZWxsOiAn5Ye65ZSuJyB9LFxyXG4gICAgICB7IGZpeDogJ+e7tOS/ricgfSxcclxuICAgICAgeyBzdGF0ZTogJ+eKtuaAgScgfVxyXG4gICAgXVxyXG4gIH1cclxufSwge1xyXG4gIG5hbWU6ICdyZXR1cm4nLFxyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICBwYWdlOiAn5b2S6L+YJyxcclxuICAgIHByaWNlOiAn5Ye656ef5Y2V5Lu3JyxcclxuICAgIHR5cGU6ICfnp5/otYHnsbvlnosnLFxyXG4gICAgb3V0VGltZTogJ+WHuuenn+aXtumXtCcsXHJcbiAgICByZXR1cm5UaW1lOiAn5b2S6L+Y5pe26Ze0JyxcclxuICAgIGxlbmd0aDogJ+WHuuenn+aXtumVvycsXHJcbiAgICB0b3RhbFByaWNlOiAn5bqU5pS26YeR6aKdJyxcclxuICAgIGFjdHVhbENvbGxlY3Rpb246ICflrp7mlLbph5Hpop0nLFxyXG4gICAgY2hhbmdlOiAn5om+6Zu26YeR6aKdJyxcclxuICAgIGJhY2s6ICfov5Tlm54nLFxyXG4gICAgc3VibWl0OiAn5o+Q5LqkJyxcclxuICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWlLi4uJyxcclxuICAgIHRhYkJhcjogW1xyXG4gICAgICB7IHJlbnQ6ICflh7rnp58nIH0sXHJcbiAgICAgIHsgcmV0dXJuOiAn5b2S6L+YJyB9LFxyXG4gICAgICB7IHNlbGw6ICflh7rllK4nIH0sXHJcbiAgICAgIHsgZml4OiAn57u05L+uJyB9LFxyXG4gICAgICB7IHN0YXRlOiAn54q25oCBJyB9XHJcbiAgICBdXHJcbiAgfVxyXG59LCB7XHJcbiAgbmFtZTogJ3N0YXRlJyxcclxuICBtZXNzYWdlczoge1xyXG4gICAgcGFnZTogJ+eKtuaAgScsXHJcbiAgICB0YWJCYXI6IFtcclxuICAgICAgeyByZW50OiAn5Ye656efJyB9LFxyXG4gICAgICB7IHJldHVybjogJ+W9kui/mCcgfSxcclxuICAgICAgeyBzZWxsOiAn5Ye65ZSuJyB9LFxyXG4gICAgICB7IGZpeDogJ+e7tOS/ricgfSxcclxuICAgICAgeyBzdGF0ZTogJ+eKtuaAgScgfVxyXG4gICAgXVxyXG4gIH1cclxufV1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHpoXHJcbn0iXX0=