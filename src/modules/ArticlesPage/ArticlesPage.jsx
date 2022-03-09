import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import queryString from 'query-string';
import { Link, withRouter } from 'react-router-dom';

import { articlesPageStyles } from './styles';
import { getDate } from 'utils/date';
import ArticleDialog from './ArticleDialog';

class ArticlesPage extends Component {
  getDate = (year, month, day) => {
    const { t, history } = this.props;
    const language = history.location.pathname.includes('hu') ? 'hu' : 'hr';
    return getDate(language, t, year, t('month.' + month), day);
  };

  getT = () => this.props.t;
  
  articlesUrl = 'http://www.fertohomok.hu/kajkavci/cikkek';

  articles = [
    {
      title: '"Velika nagrada zlatnoga pauna" umočkoj tamburaškoj glazbi',
      media: 'Hrvatski Glasnik',
      date: this.getDate(2009, 'may', 21),
      article: `${this.articlesUrl}/velika_nagrada_hg.jpg`,
    },
    {
      title: 'Odlični nastup gradišćanskih tamburašov',
      media: 'Hrvatski Glasnik',
      date: this.getDate(2008, 'oct', 9),
      article: `${this.articlesUrl}/odlicni_nastup.jpg`,
    },
    {
      title: 'Zlatno sviranje koljnofskih Gorancev i umočkih Kajkavcev',
      media: 'Hrvatski Glasnik',
      date: this.getDate(2008, 'jun', 19),
      article: `${this.articlesUrl}/zlatno_sviranje.jpg`,
    },
    {
      title: 'Kajkavce posjetili kudovci Januševca',
      media: 'Hrvatski Glasnik',
      date: this.getDate(2008, 'jun', 12),
      article: `${this.articlesUrl}/kajkavci_janusevec.jpg`,
    },
    {
      title: 'Gradišćanski Hrvati u Zaprešiću',
      media: 'Hrvatsko Slovo',
      date: this.getDate(2008, 'mar', 14),
      article: `${this.articlesUrl}/slovo.jpg`,
    },
    {
      title: 'Gradišćanski Hrvati iz mađarskog Umoka u Zaprešiću i Brdovcu',
      media: 'Vlasnik, Zagreb i Zagrebačka županija',
      date: this.getDate(2008, 'mar', 10),
      article: `${this.articlesUrl}/vlasnik.jpg`,
    },
    {
      title: 'Večer Gradišćanskih Hrvata iz Mađarske',
      media: this.getT()('web_zapresic'),
      date: this.getDate(2008, 'mar', 8),
      article: `${this.articlesUrl}/zapresic.jpg`,
    },
    {
      title: 'Umočko predstavljanje cedejke Mi smo kajkavci',
      media: 'Hrvatski glasnik',
      date: this.getDate(2007, 'aug', 23),
      article: `${this.articlesUrl}/promo.jpg`,
    },
    {
      title: 'Razgovor s Ivanom Salmerom, prilikom nove cedejke',
      media: 'Hrvatski glasnik',
      date: this.getDate(2007, 'may', 17),
      article: `${this.articlesUrl}/nova_ploca.jpg`,
    },
    {
      title: 'Treći CD umočkoga tamburaškoga sastava',
      media: 'Hrvatski glasnik',
      date: this.getDate(2007, 'may', 17),
      article: `${this.articlesUrl}/treci_cd.jpg`,
    },
    {
      title: 'Audiovizualni paket iz Umoka',
      media: 'Hrvatski glasnik',
      date: this.getDate(2007, 'feb', 1),
      article: `${this.articlesUrl}/paket.jpg`,
    },
    {
      title: 'O božićnoj ploči na web stranici ORF-a',
      media: 'Web stranica ORF-a',
      date: this.getDate(2006, 'dec', 10),
      article: `${this.articlesUrl}/orf_bozicni_cd.jpg`,
    },
    {
      title: 'Božićne pjesme iz Umoka',
      media: 'Hrvatski glasnik',
      date: this.getDate(2007, 'jan', 25),
      article: `${this.articlesUrl}/bozicne.jpg`,
    },
    {
      title: 'Umočko veselje odsad na filmu',
      media: 'Hrvatski glasnik',
      date: this.getDate(2007, 'jan', 25),
      article: `${this.articlesUrl}/film.jpg`,
    },
    {
      title: 'Muzička nagrada za Umočke tamburaše',
      media: 'Hrvatski glasnik',
      date: this.getDate(2006, 'dec', 28),
      article: `${this.articlesUrl}/muzicka_nagrada.jpg`,
    },
    {
      title: 'Kajkavci na Internetu',
      media: 'Hrvatski glasnik',
      date: this.getDate(2006, 'nov', 30),
      article: `${this.articlesUrl}/www.jpg`,
    },
    {
      title: 'Svadbeni dani u Umoku',
      media: 'Hrvatski glasnik',
      date: this.getDate(2006, 'aug', 24),
      article: `${this.articlesUrl}/svadbeni_dani.jpg`,
    },
    {
      title: 'Hagyományőrző lakodalmi vigasság',
      media: 'Kisalföld',
      date: this.getDate(2006, 'aug', 16),
      article: `${this.articlesUrl}/cikk2.jpg`,
    },
    {
      title: 'Hagyományőrző lakodalom',
      media: 'Kisalföld',
      date: this.getDate(2006, 'aug', 14),
      article: `${this.articlesUrl}/cikk.jpg`,
    },
    {
      title: 'Trodnevno "Umočko veselje"',
      media: 'Hrvatski glasnik',
      date: this.getDate(2006, 'aug', 10),
      article: `${this.articlesUrl}/veselje.jpg`,
    },
    {
      title: 'Intervju s Janošem Sallmerom',
      media: 'Hrvatski glasnik',
      date: this.getDate(2006, 'jun', 8),
      article: `${this.articlesUrl}/tamburas.jpg`,
    },
    {
      title: 'Zlatni uspjeh umočkih tamburašev',
      media: 'Hrvatski glasnik',
      date: this.getDate(2005, 'nov', 24),
      article: `${this.articlesUrl}/zlatni_uspjeh.jpg`,
    },
    {
      title: 'Arany minősítés a Kajkavcinak',
      media: 'Kisalföld',
      date: this.getDate(2005, 'nov', 9),
      article: `${this.articlesUrl}/arany.jpg`,
    },
    {
      title: 'Opet hrvatski dan u Umoku',
      media: 'Hrvatske novine',
      date: this.getDate(2005, 'sep', 16),
      article: `${this.articlesUrl}/hrvatski_dan.jpg`,
    },
    {
      title: 'Umočke "Slatke tajne"',
      media: 'Hrvatski glasnik',
      date: this.getDate(2004, 'may', 27),
      article: `${this.articlesUrl}/slatke_tajne.jpg`,
    },
  ];

  state = {
    articleIndex: null,
  };

  componentDidMount() {
    const { history } = this.props;
    const { articleIndex } = this.state;
    const params = queryString.parse(history.location.search);
    if (params.article !== articleIndex) {
      this.setArticle(params.article);
    }
  }

  setArticle = (index) => {
    this.setState({ articleIndex: index });
  };

  closeDialog = () => {
    const { history } = this.props;
    history.push(`${history.location.pathname}`);
    this.setState({ articleIndex: null });
  };

  render() {
    const { classes, history } = this.props;
    const { articleIndex } = this.state;
    return (
      <Box mb={5} className={classes.ArticlesContainer}>
        {this.articles.map((article, i) => {
          return (
            <Box key={i} mb={1} className={classes.ArticleBox}>
              <Link
                className={classes.ArticleLink}
                to={`${history.location.pathname}?article=${i}`}
                onClick={() => this.setArticle(i)}
              >
                {article.title} - {article.media}, {article.date}
              </Link>
            </Box>
          );
        })}
        {this.articles[articleIndex] ? (
          <ArticleDialog
            closeDialog={this.closeDialog}
            open={articleIndex === 0 || !!articleIndex}
            article={this.articles[articleIndex]}
          />
        ) : null}
      </Box>
    );
  }
}

export default withRouter(withTranslation()(withStyles(articlesPageStyles)(ArticlesPage)));
