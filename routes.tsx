const HOME_ROUTE = '/'
const ABOUT_ROUTE = '/about'

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
  }
]
