import Home from './pages/Home';
import About from './pages/About';

import * as Routes from "./utils/consts";


export const headerLinks = [
  {
    caption: 'Главная',
    path: Routes.HOME_ROUTE,
    auth: true
  }
]

export const leftMenuLinks: { caption: string, path: string }[] = [
  {
    caption: 'Главная',
    path: Routes.HOME_ROUTE,
  },
  {
    caption: 'О нас',
    path: Routes.ABOUT_ROUTE,
  }
]

export const authRoutes = [
  { path: Routes.HOME_ROUTE, Component: Home },
  { path: Routes.ABOUT_ROUTE, Component: About }
]