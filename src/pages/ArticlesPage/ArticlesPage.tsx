import { FC, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { isNil } from 'lodash';

import { useTranslation } from 'components';
import { ArticleDialog } from './ArticleDialog';
import classes from './ArticlesPage.module.scss';

export const ArticlesPage: FC = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const getDate = (year: number, month: string, day: number) =>
    i18n.language?.toLowerCase() === 'hu' ? `${year}. ${t(month)} ${day}.` : `${day}. ${t(month)} ${year}.`;

  const articlesUrl = 'http://www.fertohomok.hu/kajkavci/cikkek';

  const articles = [
    {
      title: '"Velika nagrada zlatnoga pauna" umočkoj tamburaškoj glazbi',
      media: 'Hrvatski Glasnik',
      date: getDate(2009, 'may', 21),
      article: `${articlesUrl}/velika_nagrada_hg.jpg`,
    },
    {
      title: 'Odlični nastup gradišćanskih tamburašov',
      media: 'Hrvatski Glasnik',
      date: getDate(2008, 'oct', 9),
      article: `${articlesUrl}/odlicni_nastup.jpg`,
    },
    {
      title: 'Zlatno sviranje koljnofskih Gorancev i umočkih Kajkavcev',
      media: 'Hrvatski Glasnik',
      date: getDate(2008, 'jun', 19),
      article: `${articlesUrl}/zlatno_sviranje.jpg`,
    },
    {
      title: 'Kajkavce posjetili kudovci Januševca',
      media: 'Hrvatski Glasnik',
      date: getDate(2008, 'jun', 12),
      article: `${articlesUrl}/kajkavci_janusevec.jpg`,
    },
    {
      title: 'Gradišćanski Hrvati u Zaprešiću',
      media: 'Hrvatsko Slovo',
      date: getDate(2008, 'mar', 14),
      article: `${articlesUrl}/slovo.jpg`,
    },
    {
      title: 'Gradišćanski Hrvati iz mađarskog Umoka u Zaprešiću i Brdovcu',
      media: 'Vlasnik, Zagreb i Zagrebačka županija',
      date: getDate(2008, 'mar', 10),
      article: `${articlesUrl}/vlasnik.jpg`,
    },
    {
      title: 'Večer Gradišćanskih Hrvata iz Mađarske',
      media: t('web_zapresic'),
      date: getDate(2008, 'mar', 8),
      article: `${articlesUrl}/zapresic.jpg`,
    },
    {
      title: 'Umočko predstavljanje cedejke Mi smo kajkavci',
      media: 'Hrvatski glasnik',
      date: getDate(2007, 'aug', 23),
      article: `${articlesUrl}/promo.jpg`,
    },
    {
      title: 'Razgovor s Ivanom Salmerom, prilikom nove cedejke',
      media: 'Hrvatski glasnik',
      date: getDate(2007, 'may', 17),
      article: `${articlesUrl}/nova_ploca.jpg`,
    },
    {
      title: 'Treći CD umočkoga tamburaškoga sastava',
      media: 'Hrvatski glasnik',
      date: getDate(2007, 'may', 17),
      article: `${articlesUrl}/treci_cd.jpg`,
    },
    {
      title: 'Audiovizualni paket iz Umoka',
      media: 'Hrvatski glasnik',
      date: getDate(2007, 'feb', 1),
      article: `${articlesUrl}/paket.jpg`,
    },
    {
      title: 'O božićnoj ploči na web stranici ORF-a',
      media: 'Web stranica ORF-a',
      date: getDate(2006, 'dec', 10),
      article: `${articlesUrl}/orf_bozicni_cd.jpg`,
    },
    {
      title: 'Božićne pjesme iz Umoka',
      media: 'Hrvatski glasnik',
      date: getDate(2007, 'jan', 25),
      article: `${articlesUrl}/bozicne.jpg`,
    },
    {
      title: 'Umočko veselje odsad na filmu',
      media: 'Hrvatski glasnik',
      date: getDate(2007, 'jan', 25),
      article: `${articlesUrl}/film.jpg`,
    },
    {
      title: 'Muzička nagrada za Umočke tamburaše',
      media: 'Hrvatski glasnik',
      date: getDate(2006, 'dec', 28),
      article: `${articlesUrl}/muzicka_nagrada.jpg`,
    },
    {
      title: 'Kajkavci na Internetu',
      media: 'Hrvatski glasnik',
      date: getDate(2006, 'nov', 30),
      article: `${articlesUrl}/www.jpg`,
    },
    {
      title: 'Svadbeni dani u Umoku',
      media: 'Hrvatski glasnik',
      date: getDate(2006, 'aug', 24),
      article: `${articlesUrl}/svadbeni_dani.jpg`,
    },
    {
      title: 'Hagyományőrző lakodalmi vigasság',
      media: 'Kisalföld',
      date: getDate(2006, 'aug', 16),
      article: `${articlesUrl}/cikk2.jpg`,
    },
    {
      title: 'Hagyományőrző lakodalom',
      media: 'Kisalföld',
      date: getDate(2006, 'aug', 14),
      article: `${articlesUrl}/cikk.jpg`,
    },
    {
      title: 'Trodnevno "Umočko veselje"',
      media: 'Hrvatski glasnik',
      date: getDate(2006, 'aug', 10),
      article: `${articlesUrl}/veselje.jpg`,
    },
    {
      title: 'Intervju s Janošem Sallmerom',
      media: 'Hrvatski glasnik',
      date: getDate(2006, 'jun', 8),
      article: `${articlesUrl}/tamburas.jpg`,
    },
    {
      title: 'Zlatni uspjeh umočkih tamburašev',
      media: 'Hrvatski glasnik',
      date: getDate(2005, 'nov', 24),
      article: `${articlesUrl}/zlatni_uspjeh.jpg`,
    },
    {
      title: 'Arany minősítés a Kajkavcinak',
      media: 'Kisalföld',
      date: getDate(2005, 'nov', 9),
      article: `${articlesUrl}/arany.jpg`,
    },
    {
      title: 'Opet hrvatski dan u Umoku',
      media: 'Hrvatske novine',
      date: getDate(2005, 'sep', 16),
      article: `${articlesUrl}/hrvatski_dan.jpg`,
    },
    {
      title: 'Umočke "Slatke tajne"',
      media: 'Hrvatski glasnik',
      date: getDate(2004, 'may', 27),
      article: `${articlesUrl}/slatke_tajne.jpg`,
    },
  ];

  const [articleIndex, setArticleIndex] = useState<number | null>(null);

  useEffect(() => {
    if (params?.article && +params.article !== articleIndex) {
      setArticleIndex(params.article ? +params.article : null);
    }
  }, []);

  const closeDialog = () => {
    navigate(location.pathname);
    setArticleIndex(null);
  };

  return (
    <div className={classes.ArticlesContainer}>
      {articles.map((article, i) => (
        <div key={`${article.media}${article.date}`} className={classes.ArticleBox}>
          <Link
            className={classes.ArticleLink}
            to={`${location.pathname}?article=${i}`}
            onClick={() => setArticleIndex(i)}
          >
            {article.title} - {article.media}, {article.date}
          </Link>
        </div>
      ))}
      <ArticleDialog closeDialog={closeDialog} open={!isNil(articleIndex)} article={articles[articleIndex || 0]} />
    </div>
  );
};
