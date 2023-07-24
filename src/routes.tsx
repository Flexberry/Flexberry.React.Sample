const HOME_ROUTE = '/'
const ABOUT_ROUTE = '/about'
const SERVER_REQUESTS = '/serverrequests'
const COMMENTS = './comments'
const CUSTOMERS = './customers'

export const headerLinks = [
  {
    caption: 'Главная',
    path: HOME_ROUTE,
    auth: true
  }
]

export const leftMenuLinks: { caption: string, path: string }[] = [
  {
    caption: 'Главная',
    path: HOME_ROUTE,
  },
  {
    caption: 'О нас',
    path: ABOUT_ROUTE,
  },
  {
    caption: 'Тест запросов к серверу',
    path: SERVER_REQUESTS,
  },
  {
    caption: 'Comments',
    path: COMMENTS,
  },
  {
    caption: 'Customers',
    path: CUSTOMERS,
  }
]
