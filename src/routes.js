import NotFound from 'components/NotFound/NotFound';
import Page from 'components/Page/Page';
import HistoryPage from 'modules/HistoryPage/HistoryPage';
import HomePage from 'modules/HomePage/HomePage';
import MembersPage from 'modules/MembersPage/MembersPage';
import DiscographyPage from 'modules/DiscographyPage/DiscographyPage';
import VideosPage from 'modules/VideosPage/VideosPage';
import ArticlesPage from 'modules/ArticlesPage/ArticlesPage';
import InterviewsPage from 'modules/InterviewsPage/InterviewsPage';
import PrizesPage from 'modules/PrizesPage/PrizesPage';
import TamburaHistoryPage from 'modules/TamburaHistoryPage/TamburaHistoryPage';
import ConcertsPage from 'modules/ConcertsPage/ConcertsPage';
import ImagesPage from 'modules/ImagesPage/ImagesPage';
import ContactsPage from 'modules/ContactsPage/ContactsPage';

const routes = [
  {
    path: '/hu',
    component: Page(HomePage, 'HomePage', 'Üdvözöljük honlapunkon!'),
    linkName: 'Főoldal',
    exact: true,
  },
  {
    path: '/hr',
    component: Page(HomePage, 'HomePage', 'Pozdravljamo Vas!'),
    linkName: 'Početna stranica',
    exact: true,
  },
  {
    path: '/hu/tortenet',
    component: Page(HistoryPage, 'HistoryPage', 'Történet'),
    linkName: 'Történet',
    exact: true,
  },
  {
    path: '/hr/povijest',
    component: Page(HistoryPage, 'HistoryPage', 'Povijest'),
    linkName: 'Povijest',
    exact: true,
  },
  {
    path: '/hu/tagok',
    component: Page(MembersPage, 'MembersPage', 'Tagok'),
    linkName: 'Tagok',
    exact: true,
  },
  {
    path: '/hr/clanovi',
    component: Page(MembersPage, 'MembersPage', 'Članovi'),
    linkName: 'Članovi',
    exact: true,
  },
  {
    path: '/hu/diszkografia',
    component: Page(DiscographyPage, 'DiscographyPage', 'Diszkográfia'),
    linkName: 'Diszkográfia',
    exact: true,
  },
  {
    path: '/hr/diskografija',
    component: Page(DiscographyPage, 'DiscographyPage', 'Diskografija'),
    linkName: 'Diskografija',
    exact: true,
  },
  {
    path: '/hu/videok',
    component: Page(VideosPage, 'VideosPage', 'Videók'),
    linkName: 'Videók',
    exact: true,
  },
  {
    path: '/hr/video',
    component: Page(VideosPage, 'VideosPage', 'Video'),
    linkName: 'Video',
    exact: true,
  },
  {
    path: '/hu/cikkek',
    component: Page(ArticlesPage, 'ArticlesPage', 'Cikkek'),
    linkName: 'Cikkek',
    exact: true,
  },
  {
    path: '/hr/clanci',
    component: Page(ArticlesPage, 'ArticlesPage', 'Članci'),
    linkName: 'Članci',
    exact: true,
  },
  {
    path: '/hu/interjuk',
    component: Page(InterviewsPage, 'InterviewsPage', 'Interjúk'),
    linkName: 'Interjúk',
    exact: true,
  },
  {
    path: '/hr/intervju',
    component: Page(InterviewsPage, 'InterviewsPage', 'Intervju'),
    linkName: 'Intervju',
    exact: true,
  },
  {
    path: '/hu/dijak',
    component: Page(PrizesPage, 'PrizesPage', 'Díjak'),
    linkName: 'Díjak',
    exact: true,
  },
  {
    path: '/hr/priznanja',
    component: Page(PrizesPage, 'PrizesPage', 'Priznanja'),
    linkName: 'Priznanja',
    exact: true,
  },
  {
    path: '/hu/tamburarol',
    component: Page(TamburaHistoryPage, 'TamburaHistoryPage', 'A tamburáról'),
    linkName: 'A tamburáról',
    exact: true,
  },
  {
    path: '/hr/o-tamburi',
    component: Page(TamburaHistoryPage, 'TamburaHistoryPage', 'O tamburi'),
    linkName: 'O tamburi',
    exact: true,
  },
  {
    path: '/hu/fellepesek',
    component: Page(ConcertsPage, 'ConcertsPage', 'Fellépések'),
    linkName: 'Fellépések',
    exact: true,
  },
  {
    path: '/hr/nastupi',
    component: Page(ConcertsPage, 'ConcertsPage', 'Nastupi'),
    linkName: 'Nastupi',
    exact: true,
  },
  {
    path: '/hu/kepek',
    component: Page(ImagesPage, 'ImagesPage', 'Képek'),
    linkName: 'Képek',
    exact: true,
  },
  {
    path: '/hr/slike',
    component: Page(ImagesPage, 'ImagesPage', 'Slike'),
    linkName: 'Slike',
    exact: true,
  },
  {
    path: '/hu/kapcsolat',
    component: Page(ContactsPage, 'ContactsPage', 'Kapcsolat'),
    linkName: 'Kapcsolat',
    exact: true,
  },
  {
    path: '/hr/kontakt',
    component: Page(ContactsPage, 'ContactsPage', 'Kontakt'),
    linkName: 'Kontakt',
    exact: true,
  },
  {
    path: `/hu/404`,
    component: NotFound,
    status: 404,
    exact: true,
  },
  {
    path: `/hr/404`,
    component: NotFound,
    status: 404,
    exact: true,
  },
  {
    redirect: true,
    to: '/hu/404',
  },
];

export default routes;
