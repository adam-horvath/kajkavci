import i18n from 'i18next';

import { Page } from 'components/Page/Page';
import { HomePage } from 'pages/HomePage/HomePage';
import { HistoryPage } from 'pages/HistoryPage/HistoryPage';
import { MembersPage } from 'pages/MembersPage/MembersPage';
import { DiscographyPage } from 'pages/DiscographyPage/DiscographyPage';
import { ConcertsPage } from 'pages/ConcertsPage/ConcertsPage';
import { ImagesPage } from 'pages/ImagesPage/ImagesPage';
import { ArticlesPage } from 'pages/ArticlesPage/ArticlesPage';
import { InterviewsPage } from 'pages/InterviewsPage/InterviewsPage';
import { PrizesPage } from 'pages/PrizesPage/PrizesPage';
import { VideosPage } from 'pages/VideosPage/VideosPage';
import { TamburaHistoryPage } from 'pages/TamburaHistoryPage/TamburaHistoryPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';

import { RouteConfigurationModel } from 'models';

const routes: RouteConfigurationModel[] = [
  {
    path: '/',
    component: Page(HomePage, i18n.t('page_titles.home')),
    linkNameTranslateKey: 'menu_items.home',
    exact: true,
  },
  {
    path: '/history',
    component: Page(HistoryPage, i18n.t('menu_items.history')),
    linkNameTranslateKey: 'menu_items.history',
    exact: true,
  },
  {
    path: '/members',
    component: Page(MembersPage, i18n.t('menu_items.members')),
    linkNameTranslateKey: 'menu_items.members',
    exact: true,
  },
  {
    path: '/discography',
    component: Page(DiscographyPage, i18n.t('menu_items.discography')),
    linkNameTranslateKey: 'menu_items.discography',
    exact: true,
  },
  {
    path: '/articles',
    component: Page(ArticlesPage, i18n.t('menu_items.articles')),
    linkNameTranslateKey: 'menu_items.articles',
    exact: true,
  },
  {
    path: '/interviews',
    component: Page(InterviewsPage, i18n.t('menu_items.interviews')),
    linkNameTranslateKey: 'menu_items.interviews',
    exact: true,
  },
  {
    path: '/prizes',
    component: Page(PrizesPage, i18n.t('menu_items.prizes')),
    linkNameTranslateKey: 'menu_items.prizes',
    exact: true,
  },
  {
    path: '/videos',
    component: Page(VideosPage, i18n.t('menu_items.videos')),
    linkNameTranslateKey: 'menu_items.videos',
    exact: true,
  },
  {
    path: '/tambura-history',
    component: Page(TamburaHistoryPage, i18n.t('menu_items.tambura_history')),
    linkNameTranslateKey: 'menu_items.tambura_history',
    exact: true,
  },
  {
    path: '/concerts',
    component: Page(ConcertsPage, i18n.t('menu_items.concerts')),
    linkNameTranslateKey: 'menu_items.concerts',
    exact: true,
  },
  {
    path: '/images',
    component: Page(ImagesPage, i18n.t('menu_items.images')),
    linkNameTranslateKey: 'menu_items.images',
    exact: true,
  },
  {
    path: '/contacts',
    component: Page(ContactsPage, i18n.t('menu_items.contacts')),
    linkNameTranslateKey: 'menu_items.contacts',
    exact: true,
  },
];

export const getPath = (linkNameTranslateKey: string) =>
  routes
    .filter((route) => route.linkNameTranslateKey)
    .find((route) => route.linkNameTranslateKey === linkNameTranslateKey)?.path;

export default routes;
