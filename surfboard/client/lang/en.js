'use strict';

var en = [{
  name: 'login',
  messages: {
    english: 'EN',
    chinese: 'CN',
    logo: 'Welcome to use surfboard to manage small programs',
    userinfoLogin: 'Login of user information : ',
    phoneLogin: 'Login of user Phone number : ',
    loginBtn: 'Click on the login',
    tabBar: [{ rent: 'Rent' }, { return: 'Return' }, { sell: 'Sell' }, { fix: 'Fix' }, { state: 'State' }]
  }
}, {
  name: 'home',
  messages: {
    english: 'EN',
    chinese: 'CN',
    rent: 'Rent',
    return: 'Return',
    sell: 'Sell',
    fix: 'Fix',
    state: 'State',
    tabBar: [{ rent: 'Rent' }, { return: 'Return' }, { sell: 'Sell' }, { fix: 'Fix' }, { state: 'State' }]
  }
}, {
  name: 'rent',
  messages: {
    page: 'Rent',
    price: 'Price',
    type: 'Rent Type',
    length: 'Length',
    name: 'Name',
    nationality: 'Nationality',
    passport: 'Passport',
    phone: 'Telephone',
    email: 'Email',
    hour: 'Hour',
    day: 'Day',
    back: 'Back',
    submit: 'Submit',
    placeholder: 'Please enter...',
    tabBar: [{ rent: 'Rent' }, { return: 'Return' }, { sell: 'Sell' }, { fix: 'Fix' }, { state: 'State' }]
  }
}, {
  name: 'fix',
  messages: {
    page: 'Fix',
    fixType: 'Fix Type',
    length: 'Length',
    back: 'Back',
    submit: 'Submit',
    tabBar: [{ rent: 'Rent' }, { return: 'Return' }, { sell: 'Sell' }, { fix: 'Fix' }, { state: 'State' }]
  }
}, {
  name: 'sell',
  messages: {
    page: 'Sell',
    price: 'Price',
    name: 'Name',
    nationality: 'Nationality',
    passport: 'Passport',
    phone: 'Telephone',
    email: 'Email',
    totalPrice: 'Final Price',
    actualCollection: 'Actual Collection',
    change: 'Change',
    back: 'Back',
    submit: 'Submit',
    placeholder: 'Please enter...',
    tabBar: [{ rent: 'Rent' }, { return: 'Return' }, { sell: 'Sell' }, { fix: 'Fix' }, { state: 'State' }]
  }
}, {
  name: 'return',
  messages: {
    page: 'Return',
    price: 'Price',
    type: 'Rent Type',
    outTime: 'Out length',
    returnTime: 'Return length',
    length: 'Length',
    totalPrice: 'Total Price',
    actualCollection: 'Actual collection',
    change: 'Change',
    back: 'Back',
    submit: 'Submit',
    placeholder: 'Please enter...',
    tabBar: [{ rent: 'Rent' }, { return: 'Return' }, { sell: 'Sell' }, { fix: 'Fix' }, { state: 'State' }]
  }
}, {
  name: 'state',
  messages: {
    page: 'State',
    tabBar: [{ rent: 'Rent' }, { return: 'Return' }, { sell: 'Sell' }, { fix: 'Fix' }, { state: 'State' }]
  }
}];

module.exports = {
  en: en
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuLmpzIl0sIm5hbWVzIjpbImVuIiwibmFtZSIsIm1lc3NhZ2VzIiwiZW5nbGlzaCIsImNoaW5lc2UiLCJsb2dvIiwidXNlcmluZm9Mb2dpbiIsInBob25lTG9naW4iLCJsb2dpbkJ0biIsInRhYkJhciIsInJlbnQiLCJyZXR1cm4iLCJzZWxsIiwiZml4Iiwic3RhdGUiLCJwYWdlIiwicHJpY2UiLCJ0eXBlIiwibGVuZ3RoIiwibmF0aW9uYWxpdHkiLCJwYXNzcG9ydCIsInBob25lIiwiZW1haWwiLCJob3VyIiwiZGF5IiwiYmFjayIsInN1Ym1pdCIsInBsYWNlaG9sZGVyIiwiZml4VHlwZSIsInRvdGFsUHJpY2UiLCJhY3R1YWxDb2xsZWN0aW9uIiwiY2hhbmdlIiwib3V0VGltZSIsInJldHVyblRpbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEtBQUssQ0FBQztBQUNWQyxRQUFNLE9BREk7QUFFVkMsWUFBVTtBQUNSQyxhQUFTLElBREQ7QUFFUkMsYUFBUyxJQUZEO0FBR1JDLFVBQU0sbURBSEU7QUFJUkMsbUJBQWUsOEJBSlA7QUFLUkMsZ0JBQVksK0JBTEo7QUFNUkMsY0FBVSxvQkFORjtBQU9SQyxZQUFRLENBQ04sRUFBRUMsTUFBTSxNQUFSLEVBRE0sRUFFTixFQUFFQyxRQUFRLFFBQVYsRUFGTSxFQUdOLEVBQUVDLE1BQU0sTUFBUixFQUhNLEVBSU4sRUFBRUMsS0FBSyxLQUFQLEVBSk0sRUFLTixFQUFFQyxPQUFPLE9BQVQsRUFMTTtBQVBBO0FBRkEsQ0FBRCxFQWlCUjtBQUNEYixRQUFNLE1BREw7QUFFREMsWUFBVTtBQUNSQyxhQUFTLElBREQ7QUFFUkMsYUFBUyxJQUZEO0FBR1JNLFVBQU0sTUFIRTtBQUlSQyxZQUFRLFFBSkE7QUFLUkMsVUFBTSxNQUxFO0FBTVJDLFNBQUssS0FORztBQU9SQyxXQUFPLE9BUEM7QUFRUkwsWUFBUSxDQUNOLEVBQUVDLE1BQU0sTUFBUixFQURNLEVBRU4sRUFBRUMs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SFEsQ0FBWDs7QUF5SUFvQixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZuQztBQURlLENBQWpCIiwiZmlsZSI6ImVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW4gPSBbe1xyXG4gIG5hbWU6ICdsb2dpbicsXHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIGVuZ2xpc2g6ICdFTicsXHJcbiAgICBjaGluZXNlOiAnQ04nLFxyXG4gICAgbG9nbzogJ1dlbGNvbWUgdG8gdXNlIHN1cmZib2FyZCB0byBtYW5hZ2Ugc21hbGwgcHJvZ3JhbXMnLFxyXG4gICAgdXNlcmluZm9Mb2dpbjogJ0xvZ2luIG9mIHVzZXIgaW5mb3JtYXRpb24gOiAnLFxyXG4gICAgcGhvbmVMb2dpbjogJ0xvZ2luIG9mIHVzZXIgUGhvbmUgbnVtYmVyIDogJyxcclxuICAgIGxvZ2luQnRuOiAnQ2xpY2sgb24gdGhlIGxvZ2luJyxcclxuICAgIHRhYkJhcjogW1xyXG4gICAgICB7IHJlbnQ6ICdSZW50JyB9LFxyXG4gICAgICB7IHJldHVybjogJ1JldHVybicgfSxcclxuICAgICAgeyBzZWxsOiAnU2VsbCcgfSxcclxuICAgICAgeyBmaXg6ICdGaXgnIH0sXHJcbiAgICAgIHsgc3RhdGU6ICdTdGF0ZScgfVxyXG4gICAgXVxyXG4gIH1cclxufSwge1xyXG4gIG5hbWU6ICdob21lJyxcclxuICBtZXNzYWdlczoge1xyXG4gICAgZW5nbGlzaDogJ0VOJyxcclxuICAgIGNoaW5lc2U6ICdDTicsXHJcbiAgICByZW50OiAnUmVudCcsXHJcbiAgICByZXR1cm46ICdSZXR1cm4nLFxyXG4gICAgc2VsbDogJ1NlbGwnLFxyXG4gICAgZml4OiAnRml4JyxcclxuICAgIHN0YXRlOiAnU3RhdGUnLFxyXG4gICAgdGFiQmFyOiBbXHJcbiAgICAgIHsgcmVudDogJ1JlbnQnIH0sXHJcbiAgICAgIHsgcmV0dXJuOiAnUmV0dXJuJyB9LFxyXG4gICAgICB7IHNlbGw6ICdTZWxsJyB9LFxyXG4gICAgICB7IGZpeDogJ0ZpeCcgfSxcclxuICAgICAgeyBzdGF0ZTogJ1N0YXRlJyB9XHJcbiAgICBdXHJcbiAgfVxyXG59LCB7XHJcbiAgbmFtZTogJ3JlbnQnLFxyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICBwYWdlOiAnUmVudCcsXHJcbiAgICBwcmljZTogJ1ByaWNlJyxcclxuICAgIHR5cGU6ICdSZW50IFR5cGUnLFxyXG4gICAgbGVuZ3RoOiAnTGVuZ3RoJyxcclxuICAgIG5hbWU6ICdOYW1lJyxcclxuICAgIG5hdGlvbmFsaXR5OiAnTmF0aW9uYWxpdHknLFxyXG4gICAgcGFzc3BvcnQ6ICdQYXNzcG9ydCcsXHJcbiAgICBwaG9uZTogJ1RlbGVwaG9uZScsXHJcbiAgICBlbWFpbDogJ0VtYWlsJyxcclxuICAgIGhvdXI6ICdIb3VyJyxcclxuICAgIGRheTogJ0RheScsXHJcbiAgICBiYWNrOiAnQmFjaycsXHJcbiAgICBzdWJtaXQ6ICdTdWJtaXQnLFxyXG4gICAgcGxhY2Vob2xkZXI6ICdQbGVhc2UgZW50ZXIuLi4nLFxyXG4gICAgdGFiQmFyOiBbXHJcbiAgICAgIHsgcmVudDogJ1JlbnQnIH0sXHJcbiAgICAgIHsgcmV0dXJuOiAnUmV0dXJuJyB9LFxyXG4gICAgICB7IHNlbGw6ICdTZWxsJyB9LFxyXG4gICAgICB7IGZpeDogJ0ZpeCcgfSxcclxuICAgICAgeyBzdGF0ZTogJ1N0YXRlJyB9XHJcbiAgICBdXHJcbiAgfVxyXG59LCB7XHJcbiAgbmFtZTogJ2ZpeCcsXHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIHBhZ2U6ICdGaXgnLFxyXG4gICAgZml4VHlwZTogJ0ZpeCBUeXBlJyxcclxuICAgIGxlbmd0aDogJ0xlbmd0aCcsXHJcbiAgICBiYWNrOiAnQmFjaycsXHJcbiAgICBzdWJtaXQ6ICdTdWJtaXQnLFxyXG4gICAgdGFiQmFyOiBbXHJcbiAgICAgIHsgcmVudDogJ1JlbnQnIH0sXHJcbiAgICAgIHsgcmV0dXJuOiAnUmV0dXJuJyB9LFxyXG4gICAgICB7IHNlbGw6ICdTZWxsJyB9LFxyXG4gICAgICB7IGZpeDogJ0ZpeCcgfSxcclxuICAgICAgeyBzdGF0ZTogJ1N0YXRlJyB9XHJcbiAgICBdXHJcbiAgfVxyXG59LCB7XHJcbiAgbmFtZTogJ3NlbGwnLFxyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICBwYWdlOiAnU2VsbCcsXHJcbiAgICBwcmljZTogJ1ByaWNlJyxcclxuICAgIG5hbWU6ICdOYW1lJyxcclxuICAgIG5hdGlvbmFsaXR5OiAnTmF0aW9uYWxpdHknLFxyXG4gICAgcGFzc3BvcnQ6ICdQYXNzcG9ydCcsXHJcbiAgICBwaG9uZTogJ1RlbGVwaG9uZScsXHJcbiAgICBlbWFpbDogJ0VtYWlsJyxcclxuICAgIHRvdGFsUHJpY2U6ICdGaW5hbCBQcmljZScsXHJcbiAgICBhY3R1YWxDb2xsZWN0aW9uOiDjgIAnQWN0dWFsIENvbGxlY3Rpb24nLFxyXG4gICAgY2hhbmdlOiAnQ2hhbmdlJyxcclxuICAgIGJhY2s6ICdCYWNrJyxcclxuICAgIHN1Ym1pdDogJ1N1Ym1pdCcsXHJcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBlbnRlci4uLicsXHJcbiAgICB0YWJCYXI6IFtcclxuICAgICAgeyByZW50OiAnUmVudCcgfSxcclxuICAgICAgeyByZXR1cm46ICdSZXR1cm4nIH0sXHJcbiAgICAgIHsgc2VsbDogJ1NlbGwnIH0sXHJcbiAgICAgIHsgZml4OiAnRml4JyB9LFxyXG4gICAgICB7IHN0YXRlOiAnU3RhdGUnIH1cclxuICAgIF1cclxuICB9XHJcbn0sIHtcclxuICBuYW1lOiAncmV0dXJuJyxcclxuICBtZXNzYWdlczoge1xyXG4gICAgcGFnZTogJ1JldHVybicsXHJcbiAgICBwcmljZTogJ1ByaWNlJyxcclxuICAgIHR5cGU6ICdSZW50IFR5cGUnLFxyXG4gICAgb3V0VGltZTogJ091dCBsZW5ndGgnLFxyXG4gICAgcmV0dXJuVGltZTogJ1JldHVybiBsZW5ndGgnLFxyXG4gICAgbGVuZ3RoOiAnTGVuZ3RoJyxcclxuICAgIHRvdGFsUHJpY2U6ICdUb3RhbCBQcmljZScsXHJcbiAgICBhY3R1YWxDb2xsZWN0aW9uOiAnQWN0dWFsIGNvbGxlY3Rpb24nLFxyXG4gICAgY2hhbmdlOiAnQ2hhbmdlJyxcclxuICAgIGJhY2s6ICdCYWNrJyxcclxuICAgIHN1Ym1pdDogJ1N1Ym1pdCcsXHJcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBlbnRlci4uLicsXHJcbiAgICB0YWJCYXI6IFtcclxuICAgICAgeyByZW50OiAnUmVudCcgfSxcclxuICAgICAgeyByZXR1cm46ICdSZXR1cm4nIH0sXHJcbiAgICAgIHsgc2VsbDogJ1NlbGwnIH0sXHJcbiAgICAgIHsgZml4OiAnRml4JyB9LFxyXG4gICAgICB7IHN0YXRlOiAnU3RhdGUnIH1cclxuICAgIF1cclxuICB9XHJcbn0sIHtcclxuICBuYW1lOiAnc3RhdGUnLFxyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICBwYWdlOiAnU3RhdGUnLFxyXG4gICAgdGFiQmFyOiBbXHJcbiAgICAgIHsgcmVudDogJ1JlbnQnIH0sXHJcbiAgICAgIHsgcmV0dXJuOiAnUmV0dXJuJyB9LFxyXG4gICAgICB7IHNlbGw6ICdTZWxsJyB9LFxyXG4gICAgICB7IGZpeDogJ0ZpeCcgfSxcclxuICAgICAgeyBzdGF0ZTogJ1N0YXRlJyB9XHJcbiAgICBdXHJcbiAgfVxyXG59XVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZW5cclxufSJdfQ==