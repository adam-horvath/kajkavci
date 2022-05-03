module.exports = (function(e) {
  var a = {};
  function t(i) {
    if (a[i]) return a[i].exports;
    var n = (a[i] = { i: i, l: !1, exports: {} });
    return e[i].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
  }
  return (
    (t.m = e),
    (t.c = a),
    (t.d = function(e, a, i) {
      t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: i });
    }),
    (t.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function(e, a) {
      if ((1 & a && (e = t(e)), 8 & a)) return e;
      if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if ((t.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: e }), 2 & a && 'string' != typeof e))
        for (var n in e)
          t.d(
            i,
            n,
            function(a) {
              return e[a];
            }.bind(null, n)
          );
      return i;
    }),
    (t.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(a, 'a', a), a;
    }),
    (t.o = function(e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (t.p = '/'),
    t((t.s = 248))
  );
})([
  function(e, a) {
    e.exports = require('react');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'inlineBlock', function() {
        return i;
      }),
      t.d(a, 'flex', function() {
        return n;
      }),
      t.d(a, 'inlineFlex', function() {
        return o;
      }),
      t.d(a, 'none', function() {
        return r;
      }),
      t.d(a, 'block', function() {
        return s;
      }),
      t.d(a, 'relative', function() {
        return l;
      }),
      t.d(a, 'absolute', function() {
        return c;
      }),
      t.d(a, 'fixed', function() {
        return u;
      }),
      t.d(a, 'left', function() {
        return m;
      }),
      t.d(a, 'right', function() {
        return d;
      }),
      t.d(a, 'center', function() {
        return p;
      }),
      t.d(a, 'flexStart', function() {
        return g;
      }),
      t.d(a, 'flexEnd', function() {
        return j;
      }),
      t.d(a, 'bold', function() {
        return k;
      }),
      t.d(a, 'column', function() {
        return v;
      }),
      t.d(a, 'row', function() {
        return h;
      }),
      t.d(a, 'ellipsis', function() {
        return b;
      }),
      t.d(a, 'nowrap', function() {
        return f;
      }),
      t.d(a, 'wrap', function() {
        return y;
      }),
      t.d(a, 'hidden', function() {
        return x;
      }),
      t.d(a, 'spaceBetween', function() {
        return z;
      }),
      t.d(a, 'spaceAround', function() {
        return w;
      }),
      t.d(a, 'spaceEvenly', function() {
        return E;
      }),
      t.d(a, 'auto', function() {
        return S;
      }),
      t.d(a, 'cover', function() {
        return _;
      }),
      t.d(a, 'contain', function() {
        return P;
      }),
      t.d(a, 'noRepeat', function() {
        return C;
      }),
      t.d(a, 'pointer', function() {
        return A;
      }),
      t.d(a, 'transparent', function() {
        return D;
      }),
      t.d(a, 'columnReverse', function() {
        return N;
      }),
      t.d(a, 'uppercase', function() {
        return O;
      }),
      t.d(a, 'visible', function() {
        return T;
      }),
      t.d(a, 'inherit', function() {
        return F;
      }),
      t.d(a, 'normal', function() {
        return H;
      }),
      t.d(a, 'underline', function() {
        return I;
      }),
      t.d(a, 'vertical', function() {
        return B;
      }),
      t.d(a, 'baseline', function() {
        return M;
      }),
      t.d(a, 'both', function() {
        return L;
      }),
      t.d(a, 'unset', function() {
        return U;
      }),
      t.d(a, 'fitContent', function() {
        return R;
      });
    var i = 'inline-block',
      n = 'flex',
      o = 'inline-flex',
      r = 'none',
      s = 'block',
      l = 'relative',
      c = 'absolute',
      u = 'fixed',
      m = 'left',
      d = 'right',
      p = 'center',
      g = 'flex-start',
      j = 'flex-end',
      k = 'bold',
      v = 'column',
      h = 'row',
      b = 'ellipsis',
      f = 'nowrap',
      y = 'wrap',
      x = 'hidden',
      z = 'space-between',
      w = 'space-around',
      E = 'space-evenly',
      S = 'auto',
      _ = 'cover',
      P = 'contain',
      C = 'no-repeat',
      A = 'pointer',
      D = 'transparent',
      N = 'column-reverse',
      O = 'uppercase',
      T = 'visible',
      F = 'inherit',
      H = 'normal',
      I = 'underline',
      B = 'vertical',
      M = 'baseline',
      L = 'both',
      U = 'unset',
      R = 'fit-content';
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/defineProperty.js');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Box');
  },
  function(e, a) {
    e.exports = require('react-i18next');
  },
  function(e, a) {
    e.exports = require('classnames');
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/assertThisInitialized.js');
  },
  function(e, a) {
    e.exports = require('react-router-dom');
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/classCallCheck.js');
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/createClass.js');
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/possibleConstructorReturn.js');
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/getPrototypeOf.js');
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/inherits.js');
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(12),
      d = t.n(m),
      p = t(0),
      g = t.n(p),
      j = (t(17), t(5)),
      k = t.n(j),
      v = t(233),
      h = t.n(v),
      b = t(26),
      f = t.n(b),
      y = t(3),
      x = t.n(y);
    a.default = function(e, a, t) {
      return (function(a) {
        function i() {
          return n()(this, i), l()(this, u()(i).apply(this, arguments));
        }
        return (
          d()(i, a),
          r()(i, [
            {
              key: 'render',
              value: function() {
                var a = this.props.pages;
                return g.a.createElement(
                  'div',
                  null,
                  g.a.createElement(
                    h.a,
                    { maxWidth: 'lg', className: k()('Page', 'MainContainer') },
                    g.a.createElement(
                      f.a,
                      { container: !0, spacing: 4 },
                      t
                        ? g.a.createElement(
                            x.a,
                            { mb: 5, className: 'PageTitleContainer' },
                            g.a.createElement(x.a, { className: k()('Title', 'PageTitle') }, t),
                            g.a.createElement('div', { className: k()('TitleBorder', 'PageTitleBorder') })
                          )
                        : null,
                      g.a.createElement(e, { pages: a })
                    )
                  )
                );
              },
            },
          ]),
          i
        );
      })(p.Component);
    };
  },
  function(e, a) {
    e.exports = require('@material-ui/core/styles/makeStyles');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'MenuItem', function() {
        return j;
      });
    var i = t(2),
      n = t.n(i),
      o = t(0),
      r = t.n(o),
      s = (t(17), t(5)),
      l = t.n(s),
      c = t(7),
      u = t(212),
      m = t.n(u),
      d = t(213),
      p = t.n(d),
      g = t(25),
      j = function(e) {
        var a,
          t = e.to,
          i = e.linkName,
          o = e.onClick,
          s = e.submenu,
          u = e.hasIcon,
          d = e.children,
          j = e.mobile,
          k = Object(g.useMenuItemStyles)();
        return r.a.createElement(
          p.a,
          {
            component: c.NavLink,
            to: t,
            className: l()(k.MenuItem, ((a = {}), n()(a, k.SubmenuItem, s), n()(a, 'Mobile', j), a)),
            onClick: o,
          },
          u ? r.a.createElement('div', { className: k.Icon }, d) : null,
          r.a.createElement(m.a, { className: l()(n()({}, k.SubmenuItemText, s)), primary: i })
        );
      };
  },
  function(e, a) {
    e.exports = require('@material-ui/core/styles/withStyles');
  },
  function(e, a) {
    e.exports = require('prop-types');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'disks', function() {
        return i;
      });
    var i = {
      desetZlatnihGodina: {
        title: '10 zlatnih godina (2009.)',
        tracks: {
          'antunovo-kolo': { title: 'Antunovo kolo', music: 'J. Szallmer' },
          'nase-korijenje': {
            title: 'Naše korijenje',
            lyrics: 'M. Dekić',
            music: 'J. Szallmer',
            text: [
              'Naše korijenje iz Matice niče',
              'Ona nam je vrelo stoljetnih sanja',
              'Domovinu ljubit Hrvat ne poriče',
              'U njojzi mu nada, vjera bitisanja.',
              '',
              "Hajd'mo skupa zaigrati,",
              "Nek' se znade nek' se pamti:",
              'Ovdje su živjeli, jošte ovdje žive,',
              'I živjet će Hrvati!',
              '',
              'Zdravo da ste Bunjevci, Podravci',
              'Međimurci, Šokci, Gradišćanci,',
              'Dalmatinci, Bošnjaci i Raci,',
              'Vjerni sinci Hrvatskoj nam majci!',
              '',
              'U jeziku svome rod navijek se štiti,',
              "Kolo j' sunce što ga čuva, grije.",
              'Ravnom Panonijom groblja će nam biti,',
              'Potomstvo korijenje zatajiti ne smije!',
              '',
              "Hajd'mo skupa zaigrati,",
              "Nek' se znade nek' se pamti:",
              'Ovdje su živjeli, jošte ovdje žive,',
              'I živjet će Hrvati!',
            ],
          },
          'nisam-vrijedan-suza': {
            title: 'Nisam vrijedan suza',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Željno si mene čekala',
              'Bila si oduševljena',
              'Sjećam se one zime, zvon zvonio ti ime',
              'Pale su bijele pahulje.',
              '',
              'Znao sam da neću dolazit,',
              'Da ću ti srce razgazit.',
              'Te tvoje plave oči, ove ledene noći',
              'Neće me više vidjeti.',
              '',
              'Nemoj zbog mene plakati',
              'Nemoj ni suzu lijati',
              'Tvog srca nisam vrijedan, ljubavi nisam žedan',
              'Ne trebaš mi ni oprostiti.',
              '',
              'Ne treba da mi zamjeriš',
              'Na me da svašta govoriš.',
              'Srce mi studen kamen, nema u njemu plamen',
              'Most ljubavi je razrušen.',
              '',
              'Večernji zvon kad zazvoni',
              "Božji mir nek' ti pokloni.",
              'Sklopi si svoje ruke, zaboravi sve tuge',
              'Sve tužne noći preduge.',
              '',
              'Nemoj zbog mene...',
            ],
          },
          ti: {
            title: 'Ti',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Ti si mirno, zlatno veče',
              'Ti si najslađi moj san',
              'Tražim tebe svakog jutra',
              'Kad me ne dirne tvoj dlan.',
              '',
              'A ti, a ti me ne voliš',
              'A ti, za drugim poludiš',
              'A ti, a ti ćeš biti moja',
              'Bit ćeš moja kad se smiriš.',
              '',
              'Ti si moja noćna zvijezda',
              'Najljepša na nebu si',
              'Sunce ne blistaše tako',
              "K'o kad na me gledaš ti.",
              '',
              'A ti, a ti...',
              '',
              'Volim tvoju dugu kosu',
              'Oči tvoje zelene',
              'Žarka i rumena usna',
              'I poljupce žerave.',
              '',
              'A ti, a ti...',
              '',
              "Ja b' te držao u ruci",
              'Kao cvijeće mirisno',
              'Koje nikad bacit neću',
              'Voljet ću je zanosno!',
              '',
              'A ti, a ti...',
            ],
          },
          'o-plavo-more': {
            title: 'O plavo more',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Kad zora se budi, ti još mirno spiš',
              "Sa obale gledam te, k'o polje se raširiš",
              'Tiho si i mirno, slušam tvoj dah',
              'Ne vjerujem kad čujem da možeš dati i strah.',
              '',
              'O plavo more, more Jadransko',
              'Silno si more, more duboko.',
              'O plavo more, najlipše na svitu si ti',
              'Ja te nikad neću, ne mogu zaboraviti.',
              '',
              'Ti usnivaš čamce kad spušta se noć',
              'Gitare glas čeka na nas, vrime za feštu će doć',
              'Zapjevajmo pjesme, pjesme o ljubavi',
              'Pjevamo svi, pjevaš i ti, a sviraju i valovi.',
              '',
              'O plavo more, more Jadransko',
              'Silno si more, more duboko.',
              'O plavo more, najlipše na svitu si ti',
              'Ja te nikad neću, ne mogu zaboraviti.',
            ],
          },
          'daj-mi-vina': {
            title: 'Daj mi vina',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              "Zasvirat ću do zore, svi nek' pjevaju",
              'Žice neka pucaju, a cure igraju.',
              'Daj još mi vina, dušu da poliva i srce mi razveseli.',
              'Rakiju toči ove divne noći, i lako ćemo sve preživjeti.',
              '',
              'Životu još nije kraj, daj i uživaj',
              'Lumpuj, sviraj i pjevaj, idemo u raj.',
              'Daj još mi vina, dušu da poliva i srce mi razveseli.',
              'Rakiju toči ove divne noći, i lako ćemo sve preživjeti.',
              '',
              'Dođi moja jedina, curo garava,',
              'Neka cijelo selo zna, da te ljubim ja.',
              'Daj još mi vina, dušu da poliva i srce mi razveseli.',
              'Rakiju toči ove divne noći, i lako ćemo sve preživjeti.',
              '',
              "Plešimo uz tambure, pa nek' vide svi",
              'Kako treba živjeti, cure ljubiti.',
              'Daj još mi vina, dušu da poliva i srce mi razveseli.',
              'Rakiju toči ove divne noći, i lako ćemo sve preživjeti.',
            ],
          },
          'pijem-i-placem': {
            title: 'Pijem i plačem',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Bila si mala, pa velika',
              'Kad si mi srce zauzela',
              'Cijeli si život me pratila',
              'Pa si na kraju zašutila.',
              '',
              'Dala si ljubav i srcu bol',
              'Nekad mi glava pala na stol',
              'Cijeli si život me pratila',
              'Pa si na kraju zašutila.',
              '',
              'Pijem i plačem kad nema te',
              'Pijem i plačem bez tebe',
              'Pijem i plačem kriva si ti',
              'Da moram piti i plakati.',
              '',
              'Tebe su ruke milovale',
              'Plave su oči zasuzile',
              'Cijeli si život me pratila',
              'Pa si na kraju zašutila.',
              '',
              'Vjerna si bila do zadnjega',
              "Volio sam te k'o nikoga",
              'Cijeli si život me pratila',
              'Pa si na kraju zašutila.',
              '',
              'Pijem i plačem...',
              '',
              'Slabe te ruke ne diraju',
              'Pjesme se više ne sviraju',
              'Cijeli si život me pratila',
              'Pa si na kraju zašutila.',
              '',
              'Gledam te, gledam i dobro znam',
              'Bez glasa tvoga ostajem sam.',
              'Cijeli si život me pratila',
              'Pa si na kraju zašutila.',
              '',
              'Pijem i plačem...',
            ],
          },
          'moj-mili-dom': {
            title: 'Moj mili dom',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Selo je moje maleno',
              'I već odavno stvoreno',
              'Zgradjeno, gnjezdo, hrvatsko.',
              '',
              'Otkada sam se rodio',
              'Domaćom pjesmom se hranio',
              'Družio, igrao, veselio.',
              '',
              'Gizdav sam da Hrvat sam',
              'Sin naroda svog.',
              'Moje selo, mili dom',
              'Sačuvaj mi Bog!',
              '',
              'Naša je "Gora" zelena',
              'Med svima najzelenija',
              'Gledajte, volite, nedajte!',
              '',
              'Malo nas ima premalo,',
              "Al' svoje nikad nedajmo!",
              'Čuvajmo, branimo, gajimo!',
              '',
              'Gizdav sam da Hrvat sam',
              'Sin naroda svog.',
              'Moje selo, mili dom',
              'Sačuvaj mi Bog!',
            ],
          },
          tuga: { title: 'Tuga', music: 'Á. Horváth' },
          'izjava-ljubavi': {
            title: 'Izjava ljubavi',
            lyrics: 'J. Szallmer',
            music: 'Á. Horváth',
            text: [
              'Volim tvoj miris i oka ti sjaj,',
              "K'o plavo more i zeleni gaj.",
              'Mislim na tebe, kad zaigra noć,',
              'Čekam te ja, kad kuca polnoć.',
              '',
              'Ti, ti si mi jedino sve,',
              'Ne mogu ja bez tebe.',
              'Snagu mi daješ, kad zadani dan,',
              'Ti si i slatki moj san.',
              '',
              'Rosa u travi da si mi ti,',
              'U tebi hoću se umivati.',
              'Da si ti cvijet mile ruže moje,',
              'Suzama lijevao bi ja tebe.',
              '',
              'Ti, ti si mi jedino sve,',
              'Ne mogu ja bez tebe.',
              'Snagu mi daješ, kad zadani dan,',
              'Ti si i slatki moj san.',
              '',
              'Molim te, molim te, ljubav mi daj,',
              'Čekat će nas dvoje nebeski raj.',
              'Ja ću te dušo zagrliti,',
              'Sudbina neće nas rastaviti.',
              '',
              'Ti, ti si mi jedino sve,',
              'Ne mogu ja bez tebe.',
              'Snagu mi daješ, kad zadani dan,',
              'Ti si i slatki moj san.',
            ],
          },
          'joskino-kolo': { title: 'Joškino kolo', music: 'J. Szallmer' },
          'zadnju-mi-pjesmu-svirajte': {
            title: 'Zadnju mi pjesmu svirajte',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Pjesma je druga ljubav moja',
              'Prva me je brzo ostavila',
              'Druga me cijeli život pratila',
              'I čuvala kao dobra vila.',
              '',
              "Ja sam joj dao što sam mog'o",
              'I popio sam dobra vina naša',
              'Pjevao sam s puno ljubavi',
              'Pratilo me puno tamburaša.',
              '',
              'Zadnju mi pjesmu svirajte',
              'Neka čuju prijatelji naši',
              'Kako pjeva stari tamburaš',
              'Kad ga prate svoji tamburaši.',
              '',
              'U životu ništa nisam imao',
              'Ništa, samo raspjevanu dušu',
              'I gorke suze u očima,',
              'Pa snove koji uvijek mi se rušu.',
              '',
              'Otišli su prijatelji stari',
              'Sve se ljepote zaboravile',
              'Tiho mi još svira tambura,',
              'Tiho, ali meni najmilije.',
              '',
              'Zadnju mi pjesmu svirajte',
              'Neka čuju prijatelji naši',
              'Kako pjeva stari tamburaš',
              'Kad ga prate svoji tamburaši.',
            ],
          },
          'jednoj-uciteljici': {
            title: 'Jednoj učiteljici',
            lyrics: 'M. Dekić',
            music: 'J. Szallmer',
            text: [
              'Pokraj rijeke koja mrmoreći teče',
              'S kime dočekuješ tih sumrak i veče,',
              'S kime dočekuješ tih sumrak i veče,',
              'Pokraj rijeke koja mrmoreći teče?',
              '',
              'Da li imaš koga da nad tobom bdije,',
              'Da te strasno voli, brani, čuva i krije,',
              'Da te strasno voli, brani, čuva i krije,',
              'Da li imaš koga da nad tobom bdije?',
              '',
              'Kome li sad plačeš suze radosnice,',
              'Ko ti miluje kose i ljupko lice,',
              'Ko ti miluje kose i ljupko lice,',
              'Kome li sad plačeš suze radosnice?',
              '',
              'Da li imaš koga u mjeseca sjaju,',
              'Da ti ljubi usne u toplom zagrljaju,',
              'Da ti ljubi usne u toplom zagrljaju,',
              'Da li imaš koga u mjeseca sjaju?',
              '',
              'Ma s kim budeš prošla kroz radost i tugu,',
              'Neću imat snage tražit bolju, drugu,',
              'Neću imat snage tražit bolju, drugu,',
              'Ma s kim budeš prošla kroz radost i tugu?',
            ],
          },
          'tamburo-sviraj': {
            title: 'Tamburo, sviraj!',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Hladna je večer, jesen dolazi',
              "Grana mog' stabla umira.",
              'Magla se spušta, rosne mi oči,',
              'Ni jedna ptica ne pjeva.',
              '',
              'Ej, tamburo sviraj, samo tiho sviraj!',
              'Ti si moja jedna jedina.',
              'Ej, tamburo sviraj, a nju usnivaj',
              'Da me u snu bude voljela.',
              '',
              'Žarko je ljeto grijalo dušu',
              "Ljubav u srcu j' duboka.",
              'Dalo mi svjetlo, mirisnu ružu',
              'I pogled plavog oka.',
              '',
              'Ej, tamburo sviraj, samo tiho sviraj!',
              'Ti si moja jedna jedina.',
              'Ej, tamburo sviraj, a nju usnivaj',
              'Da me u snu bude voljela.',
              '',
              'Šuma sad šuti, krije mi snove',
              'Pjesma se moja ne pjeva.',
              'Šute i ljudi, svi oko mene',
              'Snijeg bijeli život pokriva.',
              '',
              'Ej, tamburo sviraj, samo tiho sviraj!',
              'Ti si moja jedna jedina.',
              'Ej, tamburo sviraj, a nju usnivaj',
              'Da me u snu bude voljela.',
            ],
          },
          milena: {
            title: 'Milena',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Zora si, što mene budi,',
              'Jutro, koje dan mi nudi.',
              'A po danu tebe vidim bilo kud gledam.',
              'Večerom kad sunce zađe,',
              'Pogled moj te opet nađe',
              'A u noći tebe sanjam, tebe dozivam.',
              '',
              'Milena, Milena, prekrasna ti crna kosa dugačka.',
              'Milena, Milena, sve si ono što je želja momačka.',
              '',
              'Kad zagledam tvoje oči,',
              'Nemam dana, nemam noći.',
              "Pogled tvoj u srce puca, mira mi ne da'.",
              'Miris tvoj kad ja osjetim',
              'Hoću odmah da poludim,',
              'Ime tvoje zaboravit neću nikada.',
              '',
              'Milena, Milena, prekrasna ti crna kosa dugačka.',
              'Milena, Milena, sve si ono što je želja momačka.',
              '',
              'Živim da te stalno ljubim',
              'Nikad da te ne izgubim,',
              'Da po danu i po noći poljupce ti dam.',
              'Nemoj meni ništa reći,',
              'Oči su ti govoreći.',
              'Ovu pjesmu, želim tebi uvijek, da pjevam.',
              '',
              'Milena, Milena, prekrasna ti crna kosa dugačka.',
              'Milena, Milena, sve si ono što je želja momačka.',
            ],
          },
          ljubav: {
            title: 'Ljubav',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Volim tvoj miris i oka ti sjaj,',
              "K'o plavo more i zeleni gaj.",
              'Mislim na tebe, kad zaigra noć,',
              'Čekam te ja, kad kuca polnoć.',
              '',
              'Ti, ti si mi jedino sve,',
              'Ne mogu ja bez tebe.',
              'Snagu mi daješ, kad zadani dan,',
              'Ti si i slatki moj san.',
              '',
              'Rosa u travi da si mi ti,',
              'U tebi želim se umivati.',
              'Da si ti cvijet mile ruže moje,',
              'Sa suzama lijevao bi ja tebe.',
              '',
              'Ti, ti si mi jedino sve,',
              'Ne mogu ja bez tebe.',
              'Snagu mi daješ, kad zadani dan,',
              'Ti si i slatki moj san.',
              '',
              'Molim te, molim te, ljubav mi daj,',
              'Čekat će nas dvoje nebeski raj.',
              'Ja ću te dušo zagrliti,',
              'Sudbina neće nas rastaviti.',
              '',
              'Ti, ti si mi jedino sve,',
              'Ne mogu ja bez tebe.',
              'Snagu mi daješ, kad zadani dan,',
              'Ti si i slatki moj san.',
            ],
          },
        },
      },
      miSmoKajkavci: {
        title: 'Mi smo kajkavci (2007.)',
        tracks: {
          'tamburasko-kolo': { title: 'Tamburaško kolo', music: 'narodna' },
          'mi-smo-kajkavci': {
            title: 'Mi smo kajkavci',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Znajte, kaj morate znati,',
              'Nas je rodila kajkavska mati.',
              'Kad pjevamo, kad sviramo,',
              'Predake slavimo.',
              '',
              'Tuđa je zemlja primila nas,',
              'Utihnuo je naš glas.',
              "Al' opet se javljamo nek čuje svi,",
              'Da žive kajkavci!',
              '',
              "Puno sto godina j' prošlo,",
              'San nam čuvalo predivno jezero.',
              "Mislilo se, 'vak osamljeni,",
              'Moramo nestati.',
              '',
              'Tuđa je zemlja primila nas,',
              'Teški je bio taj čas.',
              'Novo smo rođeni, nek znaju svi,',
              'Da žive kajkavci!',
            ],
          },
          "cele-noci-'ladovina": {
            title: "Cele noći 'ladovina",
            music: 'narodna',
            text: [
              "Cele noći 'ladovina,",
              'Moje zlato spava.',
              "Cele noći 'ladovina,",
              'Moje zlato spava.',
              '',
              'Po jastuku ruke širi,',
              'O dragome sanja.',
              'Dođi dragi, zagrli me,',
              'Poludet ću sama.',
            ],
          },
          'cura-bere-cvijece': {
            title: 'Cura bere cvijeće',
            music: 'narodna',
            text: [
              'Cura bere cvijeće,',
              'A dragi je neće.',
              '',
              'On je majko bekrija,',
              'Bekrija i delija,',
              'On je majko sve.',
              '',
              'A šta će joj cvijeće,',
              'Kad je dragi neće.',
              '',
              'On je majko bekrija,',
              'Bekrija i delija,',
              'On je majko sve.',
              '',
              "Uzalud je tražit' u ljubavi sreću,",
              'Kad on vino pije, i danju i noću.',
              '',
              'On je majko bekrija,',
              'Bekrija i delija,',
              'On je majko sve.',
            ],
          },
          'da-mi-dano': {
            title: 'Da mi dano',
            music: 'narodna',
            text: [
              'Da mi dano dečke izbirati,',
              'Da mi dano dečke izbirati,',
              'Da mi dano dečke izbirati,',
              'Laj laj laj, la lala lalala.',
              '',
              'Ne bi znala, koga bi zibrala,',
              'Ne bi znala, koga bi zibrala,',
              'Ne bi znala, koga bi zibrala,',
              'Laj laj laj, la lala lalala.',
              '',
              'Umočana ne bi ni jednoga,',
              'Umočana ne bi ni jednoga,',
              'Umočana ne bi ni jednoga,',
              'Laj laj laj, la lala lalala.',
              '',
              'Umočani piju vino z lonci,',
              'Umočani piju vino z lonci,',
              'Umočani piju vino z lonci,',
              'Laj laj laj, la lala lalala.',
              '',
              'Umočanke piju z demižonke,',
              'Umočanke piju z demižonke,',
              'Umočanke piju z demižonke,',
              'Laj laj laj, la lala lalala.',
              '',
              'Kaj imaju, sve za vino daju,',
              'Kaj imaju, sve za vino daju,',
              'Kaj imaju, sve za vino daju,',
              'Laj laj laj, la lala lalala.',
            ],
          },
          'sad-cu-ti-povidat': {
            title: 'Sad ću ti povidat',
            music: 'narodna',
            text: [
              'Sad ću ti povidat,',
              'Svu istinu pravu,',
              'Da si već ne budeš',
              'Trapil tvoju glavu.',
              '',
              'Ne kaži se mili,',
              'Već po našoj strani,',
              'Ter mi tužno srce',
              'Jače ne narani.',
              '',
              'Dost sam suz točila,',
              'Nigdor nij htil znati,',
              'Nek moja družica',
              'Htila je poznati.',
            ],
          },
          'daleko-mi-je-biser-jadrana': {
            title: 'Daleko mi je biser Jadrana',
            music: 'narodna',
            text: [
              'Daleko mi je biser Jadrana,',
              'Daleko mi je moj rodni kraj.',
              'A još je dalje moja mila draga,',
              'Koju sam vjerno ljubio ja.',
              '',
              'Ja morem plovim, zvejdice brojim,',
              'I uvijek mislim na rodni kraj.',
              'Mladosti pun sam u nadi živim,',
              'Da ću te jednom viditi ja.',
              '',
              'Plovi mi, plovi, brodiću mali,',
              'Neka te prati sam božji dar.',
              'Ja mlađan suze vječito ronim,',
              'I uvijek mislim na rodni kraj.',
            ],
          },
          'evo-banke': {
            title: 'Evo banke',
            music: 'narodna',
            text: [
              'Evo banke, cigane moj, cigane moj, sviraj mi ti.',
              'Evo banke, cigane moj, cigane moj, sviraj mi ti.',
              'Ja ću tebi svirati, ti ćeš mene slušati.',
              'Evo banke, cigane moj, cigane moj, sviraj mi ti.',
              '',
              'Šampanj ćemo otvoriti, otvoriti i popiti.',
              'Rizling ćemo otvoriti, otvoriti i popiti.',
              'A kad dođe onaj čas, šampanj oborit će nas.',
              'Evo banke, cigane moj, cigane moj, sviraj mi ti.',
            ],
          },
          'nema-ljepse-djevojke': {
            title: 'Nema ljepše djevojke',
            music: 'M. Lengyel',
            lyrics: 'Z. Bogdan (M. Lengyel)',
            text: [
              'Nema ljepše djevojke,',
              'Ladi ladi lom, ladi ladi lom,',
              'Od Marike ciganke,',
              'Ladi ladi lom, ladi ladi lom.',
              '',
              'Kada pjeva tuguje, a kad igra luduje,',
              'I svako veče, kad prođem',
              'Kraj čarde svi pjevaju, lumpuju,',
              'Ladi ladi lom, ona pravi lom.',
            ],
          },
          'uzicko-kolo': { title: 'Užičko kolo', music: 'narodna' },
          'sinoc-bila-misecina': {
            title: 'Sinoć bila misečina',
            music: 'narodna',
            text: [
              'Sinoć bila misečina, a večeras tama.',
              'Sinoć bila misečina, a večeras tama.',
              'Odvedi me diko kući, nesmim ići sama.',
              'Odvedi me diko kući, nesmim ići sama.',
              '',
              'Aoj kćeri je to taj, hulja i bećar?',
              'Aoj kćeri je to taj, hulja i bećar?',
              "Jeste majko to je taj, al' nije bećar.",
              "Jeste majko to je taj, al' nije bećar.",
              '',
              'Ljubio sam curicu u šumi na panju.',
              'Ljubio sam curicu u šumi na panju.',
              'Kad nedaju po noći, a ja ću po danu.',
              'Kad nedaju po noći, a ja ću po danu.',
            ],
          },
          'gori-lampa-nasred-vinkovaca': {
            title: 'Gori lampa nasred Vinkovaca',
            music: 'narodna',
            text: [
              'Gori lampa nasred Vinkovaca,',
              'Dođi diko, bit će poljubaca.',
              'Oj, jadi, jadi,',
              'Jadi, jadi ne valja što radi.',
              '',
              'Sati biju ajziban se kreće,',
              'Ode moje mirisavo cvijeće.',
              'Oj, jadi, jadi,',
              'Jadi, jadi ne valja što radi.',
              '',
              'Sedam uri, ide lola curi,',
              'Ne voli je, pa se i ne žuri.',
              'Oj, jadi, jadi,',
              'Jadi, jadi ne valja što radi.',
              '',
              'Devet sati, ide lola Kati,',
              'Ide Kati, pa se i ne vrati.',
              'Oj, jadi, jadi,',
              'Jadi, jadi ne valja što radi.',
              '',
              'Diko moja, četiri su sata,',
              'Skidaj ruke sa mojega vrata.',
              'Oj, jadi, jadi,',
              'Jadi, jadi ne valja što radi.',
              '',
              'Pred zoru je lipo milovanje,',
              'Kad se mlađan spremam na oranje.',
              'Oj, diko moja,',
              'Diko moja, ljubim usta tvoja.',
            ],
          },
          'druzica-ljubljena': {
            title: 'Družica ljubljena',
            music: 'narodna',
            text: [
              'Družica ljubljena, dostala si druga,',
              'Razlučit se moraš od našega kruga.',
              '',
              'Veselu se danas tvoj otac i mati,',
              'Kad na tebi vidu zelen vijenac cvasti.',
              '',
              'A sad ti je došal jedan mili klinčac,',
              'Ki će ti razvezat tvoj zeleni vijenac.',
            ],
          },
          'kad-se-jutro-stanem': {
            title: 'Kad se jutro stanem',
            music: 'narodna',
            text: [
              'Kad se jutro stanem, s potkovicom ganem,',
              'Kad se jutro stanem, s potkovicom ganem.',
              'Stanem na travicu, stanem na travicu,',
              'Mislim na rožicu.',
              '',
              "Ta moja rožica dala me j' pozdravit,",
              "Ta moja rožica dala me j' pozdravit.",
              'A ja sam joj najzad, a ja sam joj najzad,',
              'Da ću ju ostavit.',
              '',
              'Ostavljaj se s mene a ja ću se s tebe,',
              'Ostavljaj se s mene a ja ću se s tebe.',
              'Ter ne dohajaj k nam, ter ne dohajaj k nam,',
              'Prik gore zelene.',
              '',
              'Prik gore zelene, a rožic rumene,',
              'Prik gore zelene, a rožic rumene.',
              'Ti si me ljubila, ti si me ljubila,',
              'Ja sam te za norca.',
              '',
              'Ko sam te za norca, mer si nisam oca,',
              'Ko sam te za norca, mer si nisam oca.',
              'Neg jednu rožicu, neg jednu rožicu,',
              'Folišnoga srca.',
            ],
          },
          'madarski-plesovi': { title: 'Mađarski plesovi', music: 'narodna' },
          'svecica-dogarja': {
            title: 'Svečica dogarja',
            music: 'narodna',
            text: [
              'Svečica dogarja,',
              'Polnoći dohaja,',
              'Pustite nas dragi oček,',
              'Da bi išle spat.',
              '',
              'Kudelja je mala,',
              'Špulica je puna,',
              'Pustite nas dragi oček,',
              'Da bi išle spat.',
              '',
              'Škornje sme zbrisale,',
              'K peči sme je dele,',
              'Pustite nas dragi oček,',
              'Da bi išle spat.',
            ],
          },
          madarac: { title: 'Mađarac', music: 'narodna' },
          kaj: {
            title: 'Kaj',
            lyrics: 'R. Taclik',
            music: 'D. Domjanić',
            text: [
              'Vretičeki spiju, a šume mučiju,',
              'Naj moja popevka zvoni.',
              'Po dolu i gaju, po dragome kraju,',
              'Od kojeg mi ljepšega ni.',
              '',
              'Tu brat mi je vsaki, tu doma sem taki,',
              'Pogodit bi mogel i speć.',
              'Poznati su puti, tu vsigje je čuti',
              'Ljubljenu domaću mi reč.',
              '',
              'I srce mi greje, i zmenom se smeje,',
              'I vžalosti plače takaj.',
              'Em nikaj ni slajše, ne čuje se rajše,',
              'Neg dobri i dragi naš kaj.',
            ],
          },
          'stara-tambura': {
            title: 'Stara tambura',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Ti si preživila sudbine,',
              'Tugu moju sakrila si dušo.',
              'Moje si srce razveselila,',
              'Kad si zasvirala.',
              '',
              'Sviraj mi, sviraj mi, tambura,',
              'Sviraj, dok živim ja.',
              'Ostani vjerna i najdraža,',
              'Najdraža jedina.',
              '',
              'Tvoje su žice zaplakale,',
              'Kad si zagledala suzno oko.',
              'Ona je mene nježno ljubila,',
              'Kad si zasvirala.',
              '',
              'Sviraj mi...',
              '',
              'Moju si dušu ti spasila,',
              'Kad je meni jednom teško bilo.',
              'Pjesmice sve si mi sačuvala,',
              'Kad si zasvirala.',
              '',
              'Sviraj mi...',
              '',
              'Kad tvoje sve žice zašute,',
              'Kad popuca tvoje drvo staro,',
              'Ostat će samo vječna sječanja,',
              'Kako si svirala.',
              '',
              'Sviraj mi...',
            ],
          },
        },
      },
      radujteSeNarodi: {
        title: 'Radujte se narodi (2006.)',
        tracks: {
          'tiha-noc': {
            title: 'Tiha noć',
            music: 'X. Gruber',
            lyrics: 'Joseph Mohr',
            text: [
              'Tiha noć, o sveta noć,',
              "Se j' va snu u polnoć.",
              'Nek jedina mat virostuje,',
              'Svoga sinka si usnihuje.',
              'Spavaj slatko sinak moj,',
              'Spavaj slatko sinak moj.',
              '',
              'Tiha noć, o sveta noć,',
              'Ča je to u polnoć.',
              "Rasvitljena j' pusta štalica,",
              "Ča j' to za dite va jaslica.",
              'Ko mlada majka dvori,',
              'Ko mlada majka dvori.',
              '',
              'Tiha noć, o sveta noć,',
              'Pastirom u polnoć.',
              'Od anđelov si nazvišćena,',
              'Čredu paseć kod Betlehema.',
              "Spasitelj vam se j' rodil,",
              "Spasitelj vam se j' rodil.",
            ],
          },
          'radujte-se-narodi': {
            title: 'Radujte se narodi',
            music: 'narodna',
            text: [
              'Radujte se narodi, kad čujete glas,',
              'Da se Isus porodi u blaženi čas.',
              'Svaki narod čuj, čuj, i Betlemu pristupljuj,',
              'Pristupljuj.',
              '',
              'Vidi Bože Otajstvo u podrtoj štalici,',
              'I tko trpi uboštvo na tvrdoj slamici.',
              'To Otajstvo čuj, čuj, i k jaslicam pristupljuj,',
              'Pristupljuj.',
              '',
              'Pođi i ti narode k betlemskome dvoru,',
              'Pridruži se klanjajuć anđeoskom koru.',
              'Lijepe dare daj, daj, pa mu ljepo zapjevaj,',
              'Zapjevaj!',
            ],
          },
          'setujte-pastiri': {
            title: 'Šetujte pastiri',
            music: 'narodna',
            text: [
              'Šetujte pastiri va Betlehem!',
              "Čudo se j' ovu noć stalo va njem!",
              'Ne štentajte nego pojte veljek,',
              'Onde Bog čeka vas iz veseljem.',
              '',
              'Narodil se je vam Zveličitelj,',
              'Dugoljet obećan Otkupitelj.',
              'Varošić znamenit David kralja,',
              'Mjesto mu je va njem vaša štala.',
              '',
              'Božji Sin vam leži v uski jasli,',
              'Med volom i oslom nek na slami.',
              'V tanjucke plenice mlada Majka,',
              "Radosno j' ovila svoga Sinka.",
            ],
          },
          'o-prekrasna-tajanstvena-noc': { title: 'O prekrasna tajanstvena noć', music: 'narodna' },
          'veselje-ti-navjescujem': {
            title: 'Veselje ti navješćujem',
            music: 'narodna',
            text: [
              'Veselje ti navješćujem, narod kršćanski,',
              'Jerbo se Kralj u Betlemu rodi nebeski.',
              'Još mali u štali, kog stvorenje svako slavi,',
              'Štuje, diči jer je pravi on naš Spasitelj i Otkupitelj.',
              '',
              'Pored njega stoji Majka, Djeva Marija,',
              'Pa sveg svijeta Spasitelja lijepo povija.',
              'Njeg doji i goji, uspavljuje njegujući:',
              '- Spavkaj, spavkaj - pjevajući - u toj štalici, sve na slamici!',
              '',
              'Majko Božja i Josipe, molite za nas,',
              'Koji smo se kod Betlema skupili danas,',
              'Daj da naše srdašce povoj bude Božjem Sinu,',
              'Isukrstu Gospodinu u vijeke, amen, u vijeke, amen!',
            ],
          },
          'o-pastiri-cudo-novo': {
            title: 'O pastiri, čudo, novo',
            music: 'narodna',
            text: [
              'O, pastiri, čudo novo,',
              'Niste nigda vidjeli ovo:',
              'U jaslicam prostim rodio se Bog,',
              'Koji s neba siđe radi puka svog.',
              'Koji s neba siđe radi puka svog.',
              '',
              'Betlem, evo, nije daleko,',
              'Znajte da vam istinu rekoh.',
              'U štalici prostoj leži Djetešce,',
              'Na slamici oštroj, kao janješce.',
              'Na slamici oštroj, kao janješce.',
              '',
              'Ljubav Božja prevelika,',
              'Primi pravu put čovjeka.',
              'S neba siđe dolje radi grešnika,',
              'Rodi se u štali radi čovjeka.',
              'Rodi se u štali radi čovjeka.',
            ],
          },
          'veseli-budmo': {
            title: 'Veseli budmo',
            music: 'narodna',
            text: [
              "Veseli budmo ar se j' rodil,",
              'Za kim je zdavno jur svit hlepil.',
              'Dite va krilu Majke, ko spi,',
              'Pravi je Kralj naš, Sin Božanski.',
              'Stupi va štalu pastir ubog,',
              'Spasit je došal nas mili Bog.',
              '',
              'Ne va palači spava svitloj,',
              'Ne na samitnoj stelji mehkoj,',
              'Mrzla su jasla i slamica,',
              'Blago mu grije mrzla lica.',
              'Prigni koljena vjerni kršćan,',
              'Ar je pred tobom Bog zmožni sam.',
              '',
              'Hodmo i mi sad pred njega,',
              'Boga zvišavat predragoga.',
              'Bijmo si srca pak skrušeno,',
              'Naše grihote uplačimo!',
              'Recimo: "Miluj nas Jezuše,',
              'Ki si otkupil grišne duše!"',
              '',
            ],
          },
          zvoncici: {
            title: 'Zvončići',
            lyrics: 'J. L. Pierpont',
            music: 'J. L. Pierpont',
            text: [
              'Dolove i brijeg, zabjelio je snijeg,',
              'Sa saona kroz noć naš se čuje smijeh.',
              'Pokićen i plah, naš vranac juri svud,',
              'A zvona dalek zvuk, pokazuje nam put.',
              '',
              'Zvončići, zvončići zvone cijelu noć,',
              'I ostaju u sječanju, što nikad neće proć.',
              'Zvončići, zvončići zvone naš sam glas',
              'Kroz tihu noć, čitav kraj, zvone za sve nas.',
              '',
              'Ponoć već je tu, za satom ide sat,',
              'Juri vranac naš, ko da nikad neće stat.',
              "Tiho pada snijeg, ko perje mek' i lak',",
              'Prijatelj je drag, veseli mu se svak.',
              '',
              'Zvončići, zvončići zvone cijelu noć,',
              'I ostaju u sječanju, što nikad neće proć.',
              'Zvončići, zvončići zvone naš sam glas',
              'Kroz tihu noć, čitav kraj, zvone za sve nas.',
              '',
              'Dolove i brijeg, zabjelio je snijeg,',
              'Sa saona kroz noć naš se čuje smijeh.',
              'Pokićen i plah, naš vranac juri svud,',
              'A zvona dalek zvuk, pokazuje nam put.',
              '',
              'Zvončići, zvončići zvone cijelu noć,',
              'I ostaju u sječanju, što nikad neće proć.',
              'Zvončići, zvončići zvone naš sam glas',
              'Kroz tihu noć, čitav kraj, zvone za sve nas.',
            ],
          },
          'ave-maria': { title: 'Ave Maria', music: 'J. S. Bach' },
        },
      },
      slatkeTajne: {
        title: 'Slatke tajne (2004.)',
        tracks: {
          'becarsko-kolo': { title: 'Bećarsko kolo', music: 'A. Nikolić' },
          'bijela-ruza': {
            title: 'Bijela ruža',
            music: 'narodna',
            text: [
              'Bijela ruža je procvala,',
              'Kad sam ja k tebi išal,',
              'I na tvoj mali obločić',
              'Mnogokrat sam pogledal.',
              '',
              'Hladna voda u potoku,',
              'Koja curi veselo.',
              'Ptičice slavno pjevaju,',
              'Kad se šećem krez selo.',
              '',
              'Ne stuguj nek bud vesela,',
              'Ja te ljubim, dobro znaš.',
              'To ti vidiš, vid na meni,',
              'Kada na me pogledaš.',
            ],
          },
          putna: { title: 'Putna', music: 'narodna' },
          'ribari-smo-sa-jadrana': {
            title: 'Ribari smo sa Jadrana',
            music: 'narodna',
            text: [
              'Kad plovimo u barci sve do zore,',
              'Riba nas prati kroz beskrajno more.',
              'A prid zoru, kad ugasu ferali,',
              'Prime nas opet tihi morski žali.',
              '',
              'Ribari smo sa Jadrana,',
              'Naša je ljubav u Splitu.',
              'Ribari smo sa Jadrana,',
              'Najlipšeg mora na svitu.',
              '',
              'Gitara prati nas od plave zore,',
              'I plovi s nama niz beskrajno more.',
              'A pri mrak opet palimo ferale,',
              'I ostavljamo tihe morske žale.',
              '',
              'Ribari smo sa Jadrana,',
              'Naša je ljubav u Splitu.',
              'Ribari smo sa Jadrana,',
              'Najlipšeg mora na svitu.',
            ],
          },
          'mila-majka-zac-si-me-ti-rodila': {
            title: 'Mila majka zač si me ti rodila',
            music: 'narodna',
            text: [
              'Mila majka, zač si me ti rodila,',
              'Zač me nisi va tu vodu hitila.',
              "Da b' ne bila o' ta voda odnesla,",
              "Ne b' se bila smanom rasturobila.",
              '',
              'Štuki grmu, ino flinke pucaju,',
              'Nas regrute sad va boj pozivaju.',
              'Da idemo domovinu braniti,',
              'Nepretelja preželjno obladati.',
              '',
              'Ti majkica, ti ležiš na steljici,',
              'A ja junak va zelenoj travici.',
              'Ti travica, ti si moja steljica,',
              'Ti kitica, ti si moja rožica.',
            ],
          },
          'djevojacko-kolo': { title: 'Djevojačko kolo', music: 'narodna' },
          'kakve-cura-crne-oci-ima': {
            title: 'Kakve cura crne oči ima',
            music: 'narodna',
            text: [
              'Bijelo cviće svu noć cvalo, rado bi se bralo.',
              'Crne oči svu noć sjale, kome bi se dale.',
              'Što će meni crne oči, kad su puste moje noći,',
              'Crne oči kao tama, a ja spavam sama.',
              '',
              'Ponoć prođe, brojim sate, stalno mislim na te.',
              'Svu noć srce doček sprema, ali dragog nema.',
              'Što će meni jastuk bijeli, kad mi nema, kog da želim.',
              'Jastuk bijeli, bijeli zubi, nema ko da ljubi.',
            ],
          },
          tandora: {
            title: 'Tandora',
            music: 'narodna',
            text: [
              "Tan tan tandora, sjela cura pod ora',",
              "Tan tan tandora, sjela cura pod ora'.",
              'Sjela cura pa šije, prid njom litra rakije,',
              'Sjela cura pa šije, prid njom litra rakije.',
              '',
              'Tan tan tandora, nema cura lavora,',
              'Tan tan tandora, nema cura lavora.',
              'Nema cura kopanje, pa iskala od Franje,',
              'Nema cura kopanje, pa iskala od Franje.',
              '',
              "Tan tan tandora, sjela cura pod ora',",
              "Tan tan tandora, sjela cura pod ora'.",
              'Sjela cura na vreću, svi je ljube, ja neću,',
              'Sjela cura na vreću, svi je ljube, ja neću.',
            ],
          },
          svatovac: { title: 'Svatovac', music: 'narodna' },
          'slavonijo---zemljo-plemenita': {
            title: 'Slavonijo - zemljo plemenita',
            music: 'narodna',
            text: [
              'Ej Slavonijo, zemljo plemenita,',
              "Puna žitni' polja, valovita.",
              "Šorom, šorom, 'ladom, idem diki kradom.",
              "Šorom, šorom, 'ladom, idem diki kradom.",
              '',
              'Ej sedam bora, do dikina dvora,',
              'A do moga nema ni jednoga.',
              "Šorom, šorom, 'ladom, idem diki kradom.",
              "Šorom, šorom, 'ladom, idem diki kradom.",
              '',
              'Ej ljubičice, ne cvati na brigu.',
              'Već u doli, di se dvoje voli.',
              "Šorom, šorom, 'ladom, idem diki kradom.",
              "Šorom, šorom, 'ladom, idem diki kradom.",
            ],
          },
          'slavonkso-djevojacko-kolo': { title: 'Slavonsko djevojačko kolo', music: 'narodna' },
          'ternjice-ternjice': {
            title: 'Ternjice, ternjice',
            music: 'narodna',
            text: [
              'Ternjice, ternjice, med ternjicem šipak,',
              "Poglejte rožice kako j' vo lip žitak.",
              'Lip žitak, lip žitak, ki ga ferat znaju mila moja,',
              'Ki ga ferat znaju.',
              '',
              'Rožicam selo pojt, seli bit do zore,',
              'Rožicam selo pojt, seli bit do zore.',
              'A u bijeloj zori onde smo postali mila moja,',
              'Onde smo postali.',
              '',
              'I jedan drugomu, lafku noć zazvali,',
              'I jedan drugomu, lafku noć zazvali.',
              'Lafku noć, lafku noć, ovo ti je ruka mila moja,',
              'Ovo ti je ruka.',
            ],
          },
          'posavski-drmes': { title: 'Posavski drmeš', music: 'narodna' },
          'bolujem-ja': {
            title: 'Bolujem ja',
            music: 'narodna',
            text: [
              'Bolujem ja, boluješ ti,',
              'Bolujemo od ljubavi.',
              'Jer nikoga ne ljubim ja,',
              'Samo tebe, dušo moja.',
              '',
              'Otvori mi taj prozor tvoj,',
              'Da ti kažem, anđele moj.',
              'Da nikoga ne ljubim ja,',
              'Osim tebe, dušo moja.',
              '',
              'Otići ću u dalek svijet,',
              'Da potražim mom srcu lijek.',
              'Jer nikoga ne ljubim ja,',
              'Kao tebe, dušo moja.',
            ],
          },
          'predragi-narode-moj': {
            title: 'Predragi narode moj',
            lyrics: 'J. Szallmer',
            music: 'J. Szallmer',
            text: [
              'Prođem kroz rodno mi selo,',
              'Nekad prekrasno, veselo.',
              'Tražim te, kućice bijele,',
              'Pred njima ruže rumene.',
              '',
              'Sjećam se konje i kola,',
              'Šuštenja reda topola.',
              'Mirisno sjeno i štale,',
              'Vesele divojke male.',
              '',
              'Kud ste mi dragi hrvati,',
              'Prijatelji, moji stari?',
              'Gdje ste, ostale mi pjesme,',
              'Majcine rječi sad gdje ste?',
              '',
              'Nema svrake koja se kara,',
              'Nije naša ni gora stara.',
              'Va crikvi rijetko se pjeva',
              'Ta prekrasna rajska djeva.',
              '',
              'Osjećam, došlo je doba,',
              'Stigli smo i mi do groba.',
              'Predragi narode moj,',
              'Čeka te vječni pokoj!',
            ],
          },
        },
      },
    };
  },
  function(e, a) {
    e.exports = require('@material-ui/core/styles');
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(76);
    t.d(a, 'Button', function() {
      return i.default;
    });
    var n = t(77);
    t.d(a, 'Dialog', function() {
      return n.default;
    });
    var o = t(34);
    t.d(a, 'NotFound', function() {
      return o.default;
    });
    var r = t(29);
    t.d(a, 'Image', function() {
      return r.default;
    });
    var s = t(79);
    t.d(a, 'FilePreview', function() {
      return s.default;
    });
    var l = t(28);
    t.d(a, 'LanguageSelect', function() {
      return l.default;
    });
    var c = t(13);
    t.d(a, 'Page', function() {
      return c.default;
    });
    var u = t(80);
    t.d(a, 'SnackbarContent', function() {
      return u.default;
    });
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/extends.js');
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/slicedToArray.js');
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(2),
      n = t.n(i),
      o = t(90),
      r = t(91),
      s = t(92),
      l = t(93);
    function c(e, a) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        a &&
          (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable;
          })),
          t.push.apply(t, i);
      }
      return t;
    }
    var u = { development: o.default, staging: r.default, production: s.default };
    a.default = (function(e) {
      for (var a = 1; a < arguments.length; a++) {
        var t = null != arguments[a] ? arguments[a] : {};
        a % 2
          ? c(Object(t), !0).forEach(function(a) {
              n()(e, a, t[a]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : c(Object(t)).forEach(function(a) {
              Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
            });
      }
      return e;
    })({}, l.default, {}, u.production);
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Divider');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'useDesktopHeaderStyles', function() {
        return l;
      }),
      t.d(a, 'useMobileHeaderStyles', function() {
        return c;
      }),
      t.d(a, 'useDropdownMenuStyles', function() {
        return u;
      }),
      t.d(a, 'useLoginDialogStyles', function() {
        return m;
      }),
      t.d(a, 'useMenuItemStyles', function() {
        return d;
      }),
      t.d(a, 'useRegisterDialogStyles', function() {
        return p;
      }),
      t.d(a, 'useSearchStyles', function() {
        return g;
      }),
      t.d(a, 'useHamburgerStyles', function() {
        return j;
      });
    var i = t(2),
      n = t.n(i),
      o = t(14),
      r = t.n(o),
      s = t(1),
      l = r()(function(e) {
        return {
          Header: n()(
            {
              display: s.flex,
              height: e.mixins.header.height,
              borderColor: e.palette.blue,
              alignItems: s.center,
              boxShadow: '0 3px 6px #00000029',
            },
            e.breakpoints.down('sm'),
            { display: s.none }
          ),
          LogoContainer: { minWidth: 70, display: s.flex, justifyContent: s.center },
          Logo: { width: '50px !important', height: '50px !important', cursor: s.pointer },
          MenuContainer: {
            display: s.flex,
            flexGrow: 1,
            alignItems: s.center,
            justifyContent: s.flexEnd,
            height: e.mixins.header.contentSize,
            paddingLeft: 0,
            paddingRight: 0,
          },
          List: { padding: 0, display: s.flex },
          Button: {
            borderRadius: 20,
            borderColor: e.palette.darkBlue,
            '&:hover': { borderColor: e.palette.darkBlueHover },
            '& a': { textDecoration: s.none },
          },
        };
      }),
      c = r()(function(e) {
        var a;
        return {
          MobileHeader:
            ((a = {}),
            n()(a, e.breakpoints.up('md'), { display: s.none }),
            n()(a, 'display', s.flex),
            n()(a, 'height', e.mixins.mobileHeader.height),
            n()(a, 'backgroundColor', e.palette.darkBlue),
            n()(a, 'alignItems', s.center),
            n()(a, 'padding', e.spacing(2)),
            n()(a, 'position', s.fixed),
            n()(a, 'top', 0),
            n()(a, 'left', 0),
            n()(a, 'right', 0),
            n()(a, 'zIndex', 10),
            a),
          MobileLogoContainer: { border: 0, display: s.flex, justifyContent: s.center },
          MobileLogo: n()({ cursor: s.pointer }, e.breakpoints.down('sm'), { display: s.none }),
          MobileActionContainer: { display: s.flex, justifyContent: s.flexEnd, flexGrow: 1, color: e.palette.white },
          MobileMenuButton: { color: s.inherit, width: 25, height: 25, cursor: s.pointer },
          MobileSearchButton: { width: 25, height: 25, cursor: s.pointer },
          DrawerContainer: {
            backgroundColor: e.palette.darkBlue,
            boxShadow: s.none,
            '&:focus': { outline: s.none },
            '& ul': { padding: 0 },
          },
          MobileAvatarContainer: { display: s.flex, justifyContent: s.center, backgroundColor: e.palette.darkBlue },
          MobileAvatar: { width: 90, height: 90 },
          MobileBandButton: {
            color: e.palette.white,
            padding: ''.concat(e.spacing(2), 'px !important'),
            '&:hover': { color: e.palette.white, backgroundColor: e.palette.darkBlueHover },
          },
          MobileDivider: { backgroundColor: e.palette.white },
          Collapse: { padding: 0 },
          MobileAuthContainer: { display: s.flex, paddingTop: e.spacing(2), paddingBottom: e.spacing(2) },
          Button: { borderRadius: 20, '& a': { textDecoration: s.none } },
          MobileLoginButton: {
            backgroundColor: e.palette.white,
            color: e.palette.grey70,
            '&:hover': { backgroundColor: e.palette.greyEF, color: e.palette.grey70 },
          },
          MobileRegisterButton: {
            borderColor: e.palette.white,
            backgroundColor: e.palette.darkBlue,
            color: e.palette.white,
            '&:hover': { borderColor: e.palette.white, backgroundColor: e.palette.darkBlueHover },
          },
          LanguageSelectContainer: {},
        };
      }),
      u = r()(function(e) {
        return {
          DropdownButton: {
            '&:hover': { color: e.palette.blueHover },
            '& span.MuiButton-label': {
              whiteSpace: s.nowrap,
              color: e.palette.blue,
              textTransform: s.uppercase,
              fontSize: 14,
            },
          },
          MenuListContainer: { top: '16px !important', zIndex: 10 },
          MenuList: { maxWidth: 244, padding: 0 },
          Avatar: { cursor: s.pointer, marginLeft: e.spacing(2), marginRight: e.spacing(2) },
        };
      }),
      m = r()(function(e) {
        return {
          FormBox: { maxWidth: 350 },
          LoginButton: {
            borderRadius: 20,
            backgroundColor: e.palette.blue,
            fontWeight: s.normal,
            '&:hover': { backgroundColor: e.palette.blueHover },
          },
          LoginButtonContainer: { display: s.flex, justifyContent: s.center },
          Link: { color: e.palette.blue, '&:hover': { color: e.palette.blueHover } },
          NewPasswordBox: { width: 380, marginLeft: s.auto, marginRight: s.auto },
          NewPasswordLink: {
            display: s.flex,
            justifyContent: s.center,
            paddingBottom: e.spacing(2),
            borderBottom: '1px solid '.concat(e.palette.greyLoginLine),
          },
          RegisterBox: { display: s.flex, justifyContent: s.center },
        };
      }),
      d = r()(function(e) {
        return {
          MenuItem: {
            color: e.palette.blue,
            whiteSpace: s.nowrap,
            '&:hover': { color: e.palette.blueHover },
            '&.Mobile': {
              color: e.palette.white,
              paddingTop: e.spacing(2),
              paddingBottom: e.spacing(2),
              '&:hover': { color: e.palette.white, backgroundColor: e.palette.blueHover },
            },
          },
          SubmenuItem: {
            color: e.palette.grey70,
            '&:hover': { color: e.palette.grey70, backgroundColor: e.palette.whiteHover },
            paddingTop: '0 !important',
            paddingBottom: '0 !important',
            '&:not(:last-child) > div': { borderBottom: '2px solid '.concat(e.palette.whiteHover) },
            '&.Mobile': {
              color: e.palette.white,
              paddingTop: 0,
              paddingBottom: 0,
              '&:hover': { color: e.palette.white },
              '&:not(:last-child) > div': { border: 0 },
            },
          },
          SubmenuItemText: { paddingTop: e.spacing(2), paddingBottom: e.spacing(2) },
          Icon: {
            width: 35,
            height: 57,
            paddingTop: 14,
            paddingBottom: 14,
            paddingRight: 8,
            borderBottom: '2px solid '.concat(e.palette.whiteHover),
          },
        };
      }),
      p = r()(function(e) {
        return {
          FormBox: { maxWidth: 350 },
          RegisterButton: {
            borderRadius: 20,
            backgroundColor: e.palette.green,
            fontWeight: s.normal,
            '&:hover': { backgroundColor: e.palette.greenHover },
          },
          RegisterButtonContainer: { display: s.flex, justifyContent: s.center },
          Title: { borderColor: e.palette.green },
          Checkbox: {
            marginRight: e.spacing(3),
            '& svg': { fill: e.palette.checkboxBorder },
            '&:hover': { backgroundColor: e.palette.whiteHover },
            '&.Mui-checked': { color: e.palette.whiteHover, '&:hover': { backgroundColor: e.palette.whiteHover } },
          },
          CheckboxText: { fontSize: 12 },
          Link: { textDecoration: s.underline, cursor: s.pointer },
          ErrorText: {
            color: e.palette.errorColor,
            fontSize: '0.8571428571428571rem',
            marginTop: '8px 14px 0',
            lineHeight: '1em',
          },
        };
      }),
      g = r()(function(e) {
        return {
          Search: { display: s.flex, borderRadius: 22, '&:focus-within': { backgroundColor: e.palette.searchBg } },
          MobileSearch: {
            borderRadius: 0,
            backgroundColor: e.palette.whiteHover,
            '&:focus-within': { backgroundColor: e.palette.whiteHover },
          },
          SearchWithBg: { backgroundColor: e.palette.searchBg },
          Form: { height: e.mixins.header.contentSize, position: s.relative },
          MobileForm: { width: '100%', height: e.spacing(7), display: s.flex, alignItems: s.center },
          SearchIconContainer: {
            cursor: s.pointer,
            width: e.mixins.header.contentSize,
            height: e.mixins.header.contentSize,
            backgroundColor: e.palette.darkBlue,
            '&:hover': { backgroundColor: e.palette.darkBlueHover },
            padding: e.spacing(1),
            marginRight: e.spacing(2),
          },
          MobileSearchIconContainer: {
            backgroundColor: s.transparent,
            '&:hover': { backgroundColor: s.transparent },
            marginLeft: e.spacing(1),
          },
          SearchField: { fontSize: 16, color: e.palette.grey70 },
          MobileSearchField: { color: e.palette.white, flexGrow: 1 },
          InputField: { paddingRight: e.spacing(5), minWidth: 235 },
          CloseSearch: {
            position: s.absolute,
            top: 14,
            right: 14,
            width: 16,
            height: 16,
            cursor: s.pointer,
            color: e.palette.grey70,
          },
          MobileCloseSearch: { width: 18, height: 18, top: 19, color: e.palette.white },
          Hidden: { display: s.none },
        };
      }),
      j = r()(function(e) {
        return {
          Container: { display: s.inlineBlock, cursor: s.pointer, marginTop: 4, marginRight: 8 },
          Bar: {
            width: 35,
            height: 5,
            backgroundColor: e.palette.white,
            marginTop: 6,
            marginBottom: 6,
            marginLeft: 0,
            marginRight: 0,
            transition: '0.4s',
          },
          Bar1: {
            '-webkit-transform': 'rotate(-45deg) translate(-8px, 7px)',
            transform: 'rotate(-45deg) translate(-8px, 7px)',
          },
          Bar2: { opacity: 0 },
          Bar3: {
            '-webkit-transform': 'rotate(45deg) translate(-8px, -8px)',
            transform: 'rotate(45deg) translate(-9px, -7px)',
          },
        };
      });
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Grid');
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(34),
      n = t(13),
      o = t(58),
      r = t(59),
      s = t(60),
      l = t(61),
      c = t(62),
      u = t(63),
      m = t(64),
      d = t(65),
      p = t(67),
      g = t(68),
      j = t(70),
      k = t(71),
      v = [
        {
          path: '/hu',
          component: Object(n.default)(r.default, 'HomePage', 'Üdvözöljük honlapunkon!'),
          linkName: 'Főoldal',
          exact: !0,
        },
        {
          path: '/hr',
          component: Object(n.default)(r.default, 'HomePage', 'Pozdravljamo Vas!'),
          linkName: 'Početna stranica',
          exact: !0,
        },
        {
          path: '/hu/tortenet',
          component: Object(n.default)(o.default, 'HistoryPage', 'Történet'),
          linkName: 'Történet',
          exact: !0,
        },
        {
          path: '/hr/povijest',
          component: Object(n.default)(o.default, 'HistoryPage', 'Povijest'),
          linkName: 'Povijest',
          exact: !0,
        },
        {
          path: '/hu/tagok',
          component: Object(n.default)(s.default, 'MembersPage', 'Tagok'),
          linkName: 'Tagok',
          exact: !0,
        },
        {
          path: '/hr/clanovi',
          component: Object(n.default)(s.default, 'MembersPage', 'Članovi'),
          linkName: 'Članovi',
          exact: !0,
        },
        {
          path: '/hu/diszkografia',
          component: Object(n.default)(l.default, 'DiscographyPage', 'Diszkográfia'),
          linkName: 'Diszkográfia',
          exact: !0,
        },
        {
          path: '/hr/diskografija',
          component: Object(n.default)(l.default, 'DiscographyPage', 'Diskografija'),
          linkName: 'Diskografija',
          exact: !0,
        },
        {
          path: '/hu/videok',
          component: Object(n.default)(c.default, 'VideosPage', 'Videók'),
          linkName: 'Videók',
          exact: !0,
        },
        {
          path: '/hr/video',
          component: Object(n.default)(c.default, 'VideosPage', 'Video'),
          linkName: 'Video',
          exact: !0,
        },
        {
          path: '/hu/cikkek',
          component: Object(n.default)(u.default, 'ArticlesPage', 'Cikkek'),
          linkName: 'Cikkek',
          exact: !0,
        },
        {
          path: '/hr/clanci',
          component: Object(n.default)(u.default, 'ArticlesPage', 'Članci'),
          linkName: 'Članci',
          exact: !0,
        },
        {
          path: '/hu/interjuk',
          component: Object(n.default)(m.default, 'InterviewsPage', 'Interjúk'),
          linkName: 'Interjúk',
          exact: !0,
        },
        {
          path: '/hr/intervju',
          component: Object(n.default)(m.default, 'InterviewsPage', 'Intervju'),
          linkName: 'Intervju',
          exact: !0,
        },
        {
          path: '/hu/dijak',
          component: Object(n.default)(d.default, 'PrizesPage', 'Díjak'),
          linkName: 'Díjak',
          exact: !0,
        },
        {
          path: '/hr/priznanja',
          component: Object(n.default)(d.default, 'PrizesPage', 'Priznanja'),
          linkName: 'Priznanja',
          exact: !0,
        },
        {
          path: '/hu/tamburarol',
          component: Object(n.default)(p.default, 'TamburaHistoryPage', 'A tamburáról'),
          linkName: 'A tamburáról',
          exact: !0,
        },
        {
          path: '/hr/o-tamburi',
          component: Object(n.default)(p.default, 'TamburaHistoryPage', 'O tamburi'),
          linkName: 'O tamburi',
          exact: !0,
        },
        {
          path: '/hu/fellepesek',
          component: Object(n.default)(g.default, 'ConcertsPage', 'Fellépések'),
          linkName: 'Fellépések',
          exact: !0,
        },
        {
          path: '/hr/nastupi',
          component: Object(n.default)(g.default, 'ConcertsPage', 'Nastupi'),
          linkName: 'Nastupi',
          exact: !0,
        },
        {
          path: '/hu/kepek',
          component: Object(n.default)(j.default, 'ImagesPage', 'Képek'),
          linkName: 'Képek',
          exact: !0,
        },
        {
          path: '/hr/slike',
          component: Object(n.default)(j.default, 'ImagesPage', 'Slike'),
          linkName: 'Slike',
          exact: !0,
        },
        {
          path: '/hu/kapcsolat',
          component: Object(n.default)(k.default, 'ContactsPage', 'Kapcsolat'),
          linkName: 'Kapcsolat',
          exact: !0,
        },
        {
          path: '/hr/kontakt',
          component: Object(n.default)(k.default, 'ContactsPage', 'Kontakt'),
          linkName: 'Kontakt',
          exact: !0,
        },
        { path: '/hu/404', component: i.default, status: 404, exact: !0 },
        { path: '/hr/404', component: i.default, status: 404, exact: !0 },
        { redirect: !0, to: '/hu/404' },
      ];
    a.default = v;
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(35),
      n = t.n(i),
      o = t(22),
      r = t.n(o),
      s = t(0),
      l = t.n(s),
      c = t(5),
      u = t.n(c),
      m = t(4),
      d = t(7),
      p = t(19),
      g = t(214),
      j = t.n(g),
      k = t(215),
      v = t.n(k),
      h = t(216),
      b = t.n(h),
      f = t(36),
      y = t.n(f),
      x = t(115),
      z = t.n(x),
      w = t(116),
      E = t.n(w),
      S = [
        { flag: z.a, code: 'hu', label: 'Magyar' },
        { flag: E.a, code: 'hr', label: 'Hrvatski' },
      ],
      _ = Object(p.makeStyles)(function(e) {
        return Object(p.createStyles)({
          root: { display: 'flex', flexWrap: 'wrap' },
          formControl: {
            margin: e.spacing(1),
            '& .MuiInput-underline:before, & .MuiInput-underline:after, & .MuiSelect-icon': { display: 'none' },
            '& .MuiSelect-select': {
              minWidth: 'unset',
              paddingRight: 0,
              display: 'flex',
              '& .langTextContainer': { display: 'none' },
            },
            '& .MuiSelect-select:focus': { backgroundColor: 'transparent' },
          },
          selectEmpty: { marginTop: e.spacing(2) },
          langText: { marginLeft: e.spacing(1) },
          flag: { width: 40, height: 25 },
          MenuItem: { '&.Mui-selected': { backgroundColor: e.palette.whiteHover } },
        });
      });
    a.default = function() {
      var e = _(),
        a = Object(m.useTranslation)().i18n,
        t = l.a.useState(a.language),
        i = r()(t, 2),
        o = i[0],
        s = i[1],
        c = Object(d.useHistory)();
      return l.a.createElement(
        'form',
        { className: e.root, autoComplete: 'off' },
        l.a.createElement(
          v.a,
          { className: e.formControl },
          l.a.createElement(
            b.a,
            {
              value: (o || '').toLowerCase().substring(0, 2),
              onChange: function(e) {
                var t;
                return n.a.async(function(i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        (t = e.target.value),
                          y.a.set('i18next', t),
                          c.push('/'.concat(t)),
                          a.changeLanguage('gb' === t ? 'en' : t),
                          s(t);
                      case 5:
                      case 'end':
                        return i.stop();
                    }
                });
              },
            },
            S.map(function(a) {
              return l.a.createElement(
                j.a,
                { value: a.code, key: a.code, className: e.MenuItem },
                l.a.createElement('img', { src: a.flag, className: e.flag }),
                l.a.createElement('span', { className: u()('langTextContainer', e.langText) }, a.label)
              );
            })
          )
        )
      );
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(21),
      n = t.n(i),
      o = t(22),
      r = t.n(o),
      s = t(32),
      l = t.n(s),
      c = t(0),
      u = t.n(c),
      m = (t(17), t(5)),
      d = t.n(m),
      p = t(14),
      g = t.n(p),
      j = t(56),
      k = t.n(j),
      v = g()(function(e) {
        return { Image: { maxWidth: '100%' } };
      });
    a.default = function(e) {
      var a = e.src,
        i = e.className,
        o = e.alt,
        s = e.local,
        m = l()(e, ['src', 'className', 'alt', 'local']),
        p = Object(c.useState)(!1),
        g = r()(p, 2),
        j = g[0],
        h = g[1],
        b = v();
      return u.a.createElement(
        'img',
        n()(
          {
            src: j || !a ? k.a : s ? t(250)('./' + a) : a,
            onError: function() {
              return h(!0);
            },
            className: d()(b.Image, i),
            alt: o || a || 'No image',
          },
          m
        )
      );
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(2),
      n = t.n(i),
      o = t(19),
      r = t(57),
      s = t(1);
    function l(e, a) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        a &&
          (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable;
          })),
          t.push.apply(t, i);
      }
      return t;
    }
    var c = Object(o.createMuiTheme)(),
      u = Object(o.createMuiTheme)({
        mixins: {
          page: { mainPadding: '8%', topSpace: c.spacing(15), sideSpace: c.spacing(5) },
          sideBar: { width: 300, mobileBreakpoint: 'md' },
          filePicker: { width: 40, height: 40 },
          header: { height: 66, contentSize: 44 },
          mobileHeader: { height: 60 },
          scrollToTop: { size: 50 },
          homeSearch: { height: 60 },
          homePageAboutUsImage: { size: 120 },
          pagination: { size: 44 },
        },
        overrides: {
          MuiCard: { root: { overflow: s.visible } },
          MuiButton: {
            root: {
              textTransform: s.none,
              fontWeight: 400,
              paddingLeft: c.spacing(3),
              paddingRight: c.spacing(3),
              '&$disabled': { opacity: 0.5, color: '' },
              '&:focus': { outline: s.none },
            },
            contained: { '&$disabled': { backgroundColor: '', color: '' } },
            outlined: { '&$disabled': { border: '1px solid', borderColor: '' } },
          },
          MuiIconButton: {
            root: {
              borderRadius: '50%',
              '&:focus': { outline: s.none },
              '&:hover': { backgroundColor: '#FF566E' },
              '& svg': { fill: c.palette.common.white },
              '&$disabled': { backgroundColor: '#DDD' },
            },
          },
          MuiCssBaseline: { '@global': { '@font-face': [r.MerryWeather, r.MerryWeatherBold] } },
          MuiDialogActions: {
            root: { paddingLeft: c.spacing(3), paddingRight: c.spacing(3), paddingBottom: c.spacing(2) },
          },
          MuiDialogContent: { root: { padding: 0, paddingBottom: c.spacing(2) } },
          MuiFormHelperText: { root: { '&.Mui-error': { marginLeft: 0 } } },
          MuiDialog: { paperWidthSm: { maxWidth: 640 } },
          MuiTablePagination: {
            toolbar: {
              paddingLeft: c.spacing(2),
              paddingRight: c.spacing(2),
              paddingTop: c.spacing(1),
              paddingBottom: c.spacing(1),
            },
          },
          MuiInputLabel: {
            outlined: {
              backgroundColor: c.palette.common.white,
              paddingLeft: ''.concat(c.spacing(1), 'px!important'),
              paddingRight: ''.concat(c.spacing(1), 'px!important'),
            },
            formControl: { '& + .MuiInput-root': { marginTop: c.spacing(2) } },
          },
          MuiListItemText: {
            root: { marginTop: 0, marginBottom: 0 },
            primary: { textTransform: s.uppercase, fontSize: 14 },
          },
          MuiFormControlLabel: { label: { lineHeight: 1.1 } },
          MuiDrawer: {
            root: { top: '60px !important', '& .MuiBackdrop-root': { top: 60 }, maxHeight: '100%', overflowY: s.auto },
          },
          MuiContainer: { maxWidthLg: { maxWidth: '1140px !important' } },
        },
        palette: {
          primary: { main: '#333', dark: '#2C2C2C', hover: '#444', contrast: '#FFF' },
          background: { default: '#FFF', dark: '#333' },
          red: '#BB0A30',
          black: '#000',
          grey1A: '#1a1a1a',
          grey33: '#333333',
          grey4C: '#4c4c4c',
          grey66: '#666',
          grey70: '#707070',
          grey80: '#808080',
          grey99: '#999',
          greyB3: '#b3b3b3',
          greyCC: '#ccc',
          greyD9: '#d9d9d9',
          greyDD: '#ddd',
          greyE5: '#e5e5e5',
          greyEF: '#efefef',
          greyF2: '#f2f2f2',
          white: '#FFF',
          whiteHover: '#0000000A',
          searchBg: '#7070701C',
          checkboxBorder: '#7070704E',
          greyLoginLine: '#70707057',
          lightPink: '#FF9394',
          pink: '#FF566E',
          errorColor: '#f44336',
          yellow: '#FFBC17',
          yellowHover: '#FFC221',
          blue: '#5584F5',
          blueHover: '#4269C6',
          darkBlue: '#262949',
          darkBlueHover: '#262F4F',
          green: '#00EDAE',
          greenHover: '#00D89E',
        },
        typography: { fontFamily: ['MerryWeather', 'sans-serif'].join(','), fontSize: 16 },
        breakpoints: {
          values: (function(e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = null != arguments[a] ? arguments[a] : {};
              a % 2
                ? l(Object(t), !0).forEach(function(a) {
                    n()(e, a, t[a]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : l(Object(t)).forEach(function(a) {
                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                  });
            }
            return e;
          })({}, c.breakpoints.values, { md: 960, sm: 600 }),
        },
      });
    a.default = u;
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'discographyPageStyles', function() {
        return l;
      }),
      t.d(a, 'useDiskStyles', function() {
        return c;
      }),
      t.d(a, 'useLyricsDialogStyles', function() {
        return u;
      });
    var i = t(2),
      n = t.n(i),
      o = t(14),
      r = t.n(o),
      s = t(1),
      l = function(e) {
        return { Disks: { width: '100%' } };
      },
      c = r()(function(e) {
        var a, t;
        return {
          DiskContainer: n()({ width: '100%', display: s.flex, justifyContent: s.center }, e.breakpoints.down('sm'), {
            display: s.block,
          }),
          Cover:
            ((a = {
              backgroundPosition: s.center,
              backgroundSize: s.cover,
              backgroundRepeat: s.noRepeat,
              width: 470,
              height: 470,
            }),
            n()(a, e.breakpoints.down('sm'), { marginLeft: s.auto, marginRight: s.auto }),
            n()(a, e.breakpoints.down('xs'), { width: 280, height: 280, backgroundSize: s.contain }),
            a),
          TracksContainer:
            ((t = {}),
            n()(t, e.breakpoints.up('md'), { paddingLeft: e.spacing(4) }),
            n()(t, e.breakpoints.down('sm'), { textAlign: s.center }),
            t),
          Title: n()(
            {
              width: s.fitContent,
              fontWeight: s.bold,
              fontSize: 20,
              paddingBottom: e.spacing(0.25),
              borderBottom: '2px solid '.concat(e.palette.blue),
              lineHeight: '24px',
            },
            e.breakpoints.down('sm'),
            { marginTop: e.spacing(4), marginLeft: s.auto, marginRight: s.auto }
          ),
          Tracks: {},
          Link: { textDecoration: s.none, color: e.palette.blue },
          Track: {},
        };
      }),
      u = r()(function(e) {
        return {
          Title: {},
          Subtitle: { textAlign: s.center },
          Text: {},
          Line: { textAlign: s.center, lineHeight: '20px' },
        };
      });
  },
  function(e, a) {
    e.exports = require('@babel/runtime/helpers/objectWithoutProperties.js');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'Member', function() {
        return r;
      });
    var i = t(0),
      n = t.n(i),
      o = (t(17), t(43)),
      r = function(e) {
        var a = e.imageUrl,
          t = e.subscript,
          i = Object(o.useMemberStyles)();
        return n.a.createElement(
          'div',
          null,
          n.a.createElement('div', { className: i.Image, style: { backgroundImage: a } }),
          n.a.createElement('div', { className: i.Subscript }, t)
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t.n(i),
      o = t(4),
      r = t(14),
      s = t.n(r),
      l = t(183),
      c = t.n(l),
      u = t(1),
      m = s()(function() {
        return {
          root: {
            width: '80%',
            height: '100vh',
            marginLeft: u.auto,
            marginRight: u.auto,
            display: u.flex,
            flexDirection: u.column,
            justifyContent: u.center,
          },
        };
      });
    a.default = function() {
      var e = m();
      return n.a.createElement(
        'div',
        { className: e.root },
        n.a.createElement(c.a, { variant: 'h4' }, n.a.createElement(o.Trans, { i18nKey: 'NOT_FOUND.TITLE' })),
        n.a.createElement(c.a, null, n.a.createElement(o.Trans, { i18nKey: 'NOT_FOUND.DESCRIPTION' }))
      );
    };
  },
  function(e, a) {
    e.exports = require('@babel/runtime/regenerator/index.js');
  },
  function(e, a) {
    e.exports = require('js-cookie');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'Disk', function() {
        return c;
      });
    var i = t(0),
      n = t.n(i),
      o = (t(17), t(3)),
      r = t.n(o),
      s = t(7),
      l = t(31),
      c = function(e) {
        var a = e.imageUrl,
          t = e.title,
          i = e.tracks,
          o = e.history,
          c = e.getSongFromTitleUrl,
          u = e.setSongUrl,
          m = Object(l.useDiskStyles)();
        return n.a.createElement(
          r.a,
          { mb: 8, className: m.DiskContainer },
          n.a.createElement('div', { className: m.Cover, style: { backgroundImage: a } }),
          n.a.createElement(
            'div',
            { className: m.TracksContainer },
            n.a.createElement(r.a, { mb: 2, className: m.Title }, t),
            n.a.createElement(
              'div',
              { className: m.Tracks },
              Object.keys(i).map(function(e, a) {
                return c(e).text
                  ? n.a.createElement(
                      s.Link,
                      {
                        className: m.Link,
                        to: ''.concat(o.location.pathname, '?song=').concat(e),
                        onClick: function() {
                          return u(e);
                        },
                        key: e,
                      },
                      n.a.createElement('div', { className: m.Track }, a + 1, '. ', i[e].title)
                    )
                  : n.a.createElement('div', { className: m.Track, key: e }, a + 1, '. ', i[e].title);
              })
            )
          )
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'PUBLIC_DIR_ON_SERVER', function() {
        return i;
      }),
      t.d(a, 'ASSETS_PATH_ON_SERVER', function() {
        return n;
      });
    var i = '/root/build/public',
      n = '/root/build/assets.json';
  },
  function(e, a) {
    e.exports = require('lodash/get');
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(21),
      n = t.n(i),
      o = t(8),
      r = t.n(o),
      s = t(9),
      l = t.n(s),
      c = t(10),
      u = t.n(c),
      m = t(11),
      d = t.n(m),
      p = t(6),
      g = t.n(p),
      j = t(12),
      k = t.n(j),
      v = t(2),
      h = t.n(v),
      b = t(0),
      f = t.n(b),
      y = t(4),
      x = t(16),
      z = t.n(x),
      w = t(7),
      E = t(207),
      S = t.n(E),
      _ = t(81),
      P = t(108),
      C = t(27),
      A = t(107),
      D = (function(e) {
        function a() {
          var e, t;
          r()(this, a);
          for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
          return (
            (t = u()(this, (e = d()(a)).call.apply(e, [this].concat(n)))),
            h()(g()(t), 'state', { snackOpen: !1, loading: !0 }),
            t
          );
        }
        return (
          k()(a, e),
          l()(a, [
            {
              key: 'componentDidMount',
              value: function() {
                this.setState({ loading: !1 });
              },
            },
            {
              key: 'render',
              value: function() {
                return f.a.createElement(
                  'div',
                  null,
                  f.a.createElement(S.a, null),
                  f.a.createElement(A.default, { show: this.state.loading }),
                  f.a.createElement(_.default, n()({ routes: C.default }, this.props))
                );
              },
            },
          ]),
          a
        );
      })(b.Component);
    a.default = Object(w.withRouter)(Object(y.withTranslation)()(z()(P.appStyles)(D)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'extract', function() {
        return d;
      });
    var i = t(74),
      n = t.n(i),
      o = t(231),
      r = t.n(o),
      s = t(232),
      l = t.n(s),
      c = t(4),
      u = t(42),
      m = t(23);
    function d(e, a) {
      return a || e;
    }
    var p = {
      backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
      load: 'languageOnly',
      fallbackLng: u.DEFAULT_LANGUAGE,
      interpolation: { escapeValue: !1 },
      react: { useSuspense: !1, wait: m.default.IS_BROWSER },
      detection: {
        order: ['cookie', 'header'],
        caches: ['cookie'],
        lookupCookie: 'i18next',
        lookupHeader: 'accept-language',
      },
    };
    m.default.IS_BROWSER &&
      n.a
        .use(l.a)
        .use(c.initReactI18next)
        .use(r.a),
      n.a.isInitialized || n.a.init(p),
      (a.default = n.a);
  },
  function(e, a) {
    e.exports = { SUPPORTED_LANGUAGES: ['en', 'hu'], DEFAULT_LANGUAGE: 'hu' };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'membersPageStyles', function() {
        return l;
      }),
      t.d(a, 'useMemberStyles', function() {
        return c;
      });
    var i = t(2),
      n = t.n(i),
      o = t(14),
      r = t.n(o),
      s = t(1),
      l = function(e) {
        var a;
        return (
          (a = { MembersDesktopPage: { width: '100%' } }),
          n()(a, e.breakpoints.up('md'), {
            FirstRow: { display: s.flex, justifyContent: s.spaceBetween },
            SecondRow: { display: s.flex, justifyContent: s.spaceEvenly },
          }),
          n()(a, e.breakpoints.down('sm'), { FirstRow: { display: s.block }, SecondRow: { display: s.block } }),
          a
        );
      },
      c = r()(function(e) {
        return {
          Image: {
            width: 250,
            height: 333,
            backgroundPosition: s.center,
            backgroundSize: s.cover,
            backgroundRepeat: s.noRepeat,
            marginLeft: s.auto,
            marginRight: s.auto,
          },
          Subscript: {
            textAlign: s.center,
            fontSize: 18,
            lineHeight: '21px',
            paddingTop: e.spacing(1),
            paddingBottom: e.spacing(1),
            marginBottom: e.spacing(4),
          },
        };
      });
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'videosPageStyles', function() {
        return s;
      }),
      t.d(a, 'useVideoDialogStyles', function() {
        return l;
      });
    var i = t(2),
      n = t.n(i),
      o = t(50),
      r = t(1),
      s = function(e) {
        var a;
        return {
          VideosContainer: { marginBottom: e.spacing(4) },
          VideoContainer: n()({ marginBottom: e.spacing(6) }, e.breakpoints.down('xs'), { marginBottom: e.spacing(3) }),
          Video:
            ((a = {
              backgroundPosition: r.center,
              backgroundSize: r.cover,
              backgroundRepeat: r.noRepeat,
              width: '90%',
              maxWidth: 300,
              boxShadow: '0 16px 30px #00000029',
              marginLeft: r.auto,
              marginRight: r.auto,
              marginBottom: e.spacing(2),
              cursor: r.pointer,
            }),
            n()(a, e.breakpoints.up('sm'), { height: 150 }),
            n()(a, e.breakpoints.down('xs'), { height: 200 }),
            a),
          Description: { textAlign: r.center, paddingLeft: e.spacing(1), paddingRight: e.spacing(1) },
        };
      },
      l = Object(o.makeStyles)(function(e) {
        return {
          Wrapper: n()(
            { width: '100%', maxWidth: '100%', height: '100%', margin: '0 auto' },
            e.breakpoints.down('sm'),
            { width: '100%' }
          ),
          IFrameContainer: { position: r.relative, paddingTop: '56%' },
          IFrame: { position: r.absolute, top: 0, left: 0, width: '100%', height: '100%' },
        };
      });
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'articlesPageStyles', function() {
        return r;
      }),
      t.d(a, 'useArticleDialogStyles', function() {
        return s;
      });
    var i = t(14),
      n = t.n(i),
      o = t(1),
      r = function(e) {
        return {
          ArticlesContainer: { width: '100%' },
          ArticleBox: { textAlign: o.center },
          ArticleLink: { textDecoration: o.none, color: e.palette.blue, '&:hover': { color: e.palette.blueHover } },
        };
      },
      s = n()(function(e) {
        return { ArticleImageWrapper: { width: '100%', display: o.flex, justifyContent: o.center }, ArticleImage: {} };
      });
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'getCroatianMonthName', function() {
        return i;
      });
    var i = function(e) {
      switch (e) {
        case 'január':
          return 'siječnja';
        case 'február':
          return 'veljače';
        case 'március':
          return 'ožujka';
        case 'április':
          return 'travnja';
        case 'május':
          return 'svibnja';
        case 'június':
          return 'lipnja';
        case 'július':
          return 'srpnja';
        case 'augusztus':
          return 'kolovoza';
        case 'szeptember':
          return 'rujna';
        case 'október':
          return 'listopada';
        case 'november':
          return 'studenoga';
        case 'december':
          return 'prosinca';
        default:
          return '';
      }
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'imagesPageStyles', function() {
        return s;
      }),
      t.d(a, 'useImageViewerDialogStyles', function() {
        return l;
      });
    var i = t(2),
      n = t.n(i),
      o = t(1),
      r = t(50),
      s = function(e) {
        var a;
        return {
          ImagesContainer: { marginBottom: e.spacing(4) },
          ImageContainer: n()({ marginBottom: e.spacing(6) }, e.breakpoints.down('xs'), { marginBottom: e.spacing(3) }),
          Image:
            ((a = {
              backgroundPosition: o.center,
              backgroundSize: o.cover,
              backgroundRepeat: o.noRepeat,
              width: '90%',
              maxWidth: 300,
              boxShadow: '0 16px 30px #00000029',
              marginBottom: e.spacing(2),
              marginLeft: o.auto,
              marginRight: o.auto,
              cursor: o.pointer,
            }),
            n()(a, e.breakpoints.up('sm'), { height: 150 }),
            n()(a, e.breakpoints.down('xs'), { height: 200, marginBottom: e.spacing(3) }),
            a),
          Description: { textAlign: o.center, paddingLeft: e.spacing(1), paddingRight: e.spacing(1) },
        };
      },
      l = Object(r.makeStyles)(function(e) {
        return {
          ModalImage: n()(
            {
              backgroundPosition: o.center,
              backgroundSize: o.contain,
              backgroundRepeat: o.noRepeat,
              maxWidth: '100%',
              height: '70vh',
            },
            e.breakpoints.down('sm'),
            { display: o.none }
          ),
          MobileModalImages: n()({}, e.breakpoints.up('md'), { display: o.none }),
          MobileImage: {
            backgroundPosition: o.center,
            backgroundSize: o.contain,
            backgroundRepeat: o.noRepeat,
            maxWidth: '100%',
            height: '100vh',
          },
        };
      });
  },
  function(e, a) {
    e.exports = require('@material-ui/core/useMediaQuery');
  },
  function(e, a) {
    e.exports = require('query-string');
  },
  function(e, a) {
    e.exports = require('@material-ui/core');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'images', function() {
        return be;
      });
    var i = t(134),
      n = t.n(i),
      o = t(127),
      r = t.n(o),
      s = t(128),
      l = t.n(s),
      c = t(158),
      u = t.n(c),
      m = t(140),
      d = t.n(m),
      p = t(130),
      g = t.n(p),
      j = t(162),
      k = t.n(j),
      v = t(163),
      h = t.n(v),
      b = t(137),
      f = t.n(b),
      y = t(141),
      x = t.n(y),
      z = t(129),
      w = t.n(z),
      E = t(138),
      S = t.n(E),
      _ = t(151),
      P = t.n(_),
      C = t(150),
      A = t.n(C),
      D = t(139),
      N = t.n(D),
      O = t(135),
      T = t.n(O),
      F = t(136),
      H = t.n(F),
      I = t(126),
      B = t.n(I),
      M = t(154),
      L = t.n(M),
      U = t(131),
      R = t.n(U),
      K = t(132),
      q = t.n(K),
      W = t(133),
      G = t.n(W),
      J = t(122),
      V = t.n(J),
      Q = t(123),
      Z = t.n(Q),
      X = t(124),
      Y = t.n(X),
      $ = t(142),
      ee = t.n($),
      ae = t(164),
      te = t.n(ae),
      ie = t(125),
      ne = t.n(ie),
      oe = t(155),
      re = t.n(oe),
      se = t(157),
      le = t.n(se),
      ce = t(144),
      ue = t.n(ce),
      me = t(145),
      de = t.n(me),
      pe = t(146),
      ge = t.n(pe),
      je = t(147),
      ke = t.n(je),
      ve = t(148),
      he = t.n(ve),
      be = [
        {
          imageUrl: 'https://kajkavci.hu/images/nagrada_savez.jpg',
          thumbnailUrl: 'url('.concat(le.a, ')'),
          hu: 'Díjátadás, Baja, 2019.',
          hr: 'Nagrada od Saveza Hrvata u Mađarskoj, Baja, 2019.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/kajkavci_20c.jpg',
          thumbnailUrl: 'url('.concat(ge.a, ')'),
          hu: '20 éves Jubileumi ünnepség, Fertőhomok, 2019.',
          hr: '20-a godišnjica, Umok, 2019.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/kajkavci_20e.jpg',
          thumbnailUrl: 'url('.concat(he.a, ')'),
          hu: '20 éves Jubileumi ünnepség, Fertőhomok, 2019.',
          hr: '20-a godišnjica, Umok, 2019.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/kajkavci_20b.jpg',
          thumbnailUrl: 'url('.concat(de.a, ')'),
          hu: '20 éves Jubileumi ünnepség, Fertőhomok, 2019.',
          hr: '20-a godišnjica, Umok, 2019.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/kajkavci_20a.jpg',
          thumbnailUrl: 'url('.concat(ue.a, ')'),
          hu: '20 éves Jubileumi ünnepség, Fertőhomok, 2019.',
          hr: '20-a godišnjica, Umok, 2019.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/kajkavci_20d.jpg',
          thumbnailUrl: 'url('.concat(ke.a, ')'),
          hu: '20 éves Jubileumi ünnepség, Fertőhomok, 2019.',
          hr: '20-a godišnjica, Umok, 2019.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Mosonmagyarovar_2017.jpg',
          thumbnailUrl: 'url('.concat(re.a, ')'),
          hu: 'Horvát nap, Mosonmagyaróvár, 2017.',
          hr: 'Hrvatski dan, Stari Grad, 2017.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/alsopahok_2017.jpg',
          thumbnailUrl: 'url('.concat(ne.a, ')'),
          hu: 'Arany Páva Nagydíjas Gála, Alsópáhok, 2017.',
          hr: 'Gala Velike Nagrade "Zlatni Paun", Alsópáhok, 2017.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Tajhaz_2017.jpg',
          thumbnailUrl: 'url('.concat(te.a, ')'),
          hu: 'Tájház, Fertőhomok, 2017.',
          hr: 'Seoski stan, Umok, 2017.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Horvat_bal_2017.jpg',
          thumbnailUrl: 'url('.concat(ee.a, ')'),
          hu: 'Horvát bál, Fertőhomok, 2017.',
          hr: 'Hrvatski bal, Umok, 2017.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Alsopahok,%202009a.jpg',
          thumbnailUrl: 'url('.concat(V.a, ')'),
          hu: 'Arany Páva Nagydíjas Gála, Alsópáhok, 2009.',
          hr: 'Gala Velike Nagrade "Zlatni Paun", Alsópáhok, 2009.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Alsopahok,%202009b.jpg',
          thumbnailUrl: 'url('.concat(Z.a, ')'),
          hu: 'Arany Páva Nagydíjas Gála, Alsópáhok, 2009.',
          hr: 'Gala Velike Nagrade "Zlatni Paun", Alsópáhok, 2009.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Alsopahok,%202009c.jpg',
          thumbnailUrl: 'url('.concat(Y.a, ')'),
          hu: 'Arany Páva Nagydíjas Gála, Alsópáhok, 2009.',
          hr: 'Gala Velike Nagrade "Zlatni Paun", Alsópáhok, 2009.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Eisenstadt1,%202008.jpg',
          thumbnailUrl: 'url('.concat(R.a, ')'),
          hu: 'Horvát nap, Eisenstadt, 2009.',
          hr: 'Hrvatski dan, Željezno, 2009.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Eisenstadt2,%202008.jpg',
          thumbnailUrl: 'url('.concat(q.a, ')'),
          hu: 'Horvát nap, Eisenstadt, 2009.',
          hr: 'Hrvatski dan, Željezno, 2009.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Eisenstadt3,%202008.jpg',
          thumbnailUrl: 'url('.concat(G.a, ')'),
          hu: 'Horvát nap, Eisenstadt, 2009.',
          hr: 'Hrvatski dan, Željezno, 2009.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Mosonmagyarovar,%202007.jpg',
          thumbnailUrl: 'url('.concat(L.a, ')'),
          hu: 'Karácsonyi műsor, Mosonmagyaróvár, 2009.',
          hr: 'Božićni program, Stari Grad, 2009.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Becs,%202007.jpg',
          thumbnailUrl: 'url('.concat(B.a, ')'),
          hu: 'Horvát nap, Bécs, 2009.',
          hr: 'Hrvatski dan, Beč, 2009.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Fertorakos,%202007.jpg',
          thumbnailUrl: 'url('.concat(H.a, ')'),
          hu: 'Barlangszínház, Fertőrákos, 2007.',
          hr: 'Pećinsko kazalište, Fertőrákos, 2007.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Fertod,%202007.jpg',
          thumbnailUrl: 'url('.concat(T.a, ')'),
          hu: 'Városnap, Fertőd, 2007.',
          hr: 'Gradski dan, Fertőd, 2007.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Hidegseg,%202007.jpg',
          thumbnailUrl: 'url('.concat(N.a, ')'),
          hu: 'Falunap, Hidegség, 2007.',
          hr: 'Seoski dan, Vedešin, 2007.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Lemezbemutato1,%202007.jpg',
          thumbnailUrl: 'url('.concat(A.a, ')'),
          hu: 'Lemezbemutató koncert, Fertőhomok, 2007.',
          hr: 'Prezentacija CD-ploče, Umok, 2007.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Lemezbemutato3,%202007.jpg',
          thumbnailUrl: 'url('.concat(P.a, ')'),
          hu: 'Lemezbemutató koncert, Fertőhomok, 2007.',
          hr: 'Prezentacija CD-ploče, Umok, 2007.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Gyor,%202007.jpg',
          thumbnailUrl: 'url('.concat(S.a, ')'),
          hu: 'Győr, 2007.',
          hr: 'Győr, 2007.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Brdovec,%202007.jpg',
          thumbnailUrl: 'url('.concat(w.a, ')'),
          hu: 'Találkozó, Brdovec, 2007.',
          hr: 'Susret, Brdovec, 2007.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Horvat%20bal,%202007.jpg',
          thumbnailUrl: 'url('.concat(x.a, ')'),
          hu: 'Horvát bál, Fertőhomok, 2007.',
          hr: 'Hrvatski bal, Umok, 2007.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Gyor,%202006.jpg',
          thumbnailUrl: 'url('.concat(f.a, ')'),
          hu: 'Országos minősítő, Győr, 2006.',
          hr: 'Državna kvalifikacija, Győr, 2006.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Tajhaz,%202006.jpg',
          thumbnailUrl: 'url('.concat(k.a, ')'),
          hu: 'Tájház, Fertőhomok, 2006.',
          hr: 'Seoski stan, Umok, 2006.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Tajhaz,%202006b.jpg',
          thumbnailUrl: 'url('.concat(h.a, ')'),
          hu: 'Tájház, Fertőhomok, 2006.',
          hr: 'Seoski stan, Umok, 2006.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Dakovo,%202006.jpg',
          thumbnailUrl: 'url('.concat(g.a, ')'),
          hu: 'Đakovački vezovi, Đakovo, 2006.',
          hr: 'Đakovački vezovi, Đakovo, 2006.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Homoki%20lakodalmas,%202006.jpg',
          thumbnailUrl: 'url('.concat(d.a, ')'),
          hu: 'Lakodalmas, Fertőhomok, 2006.',
          hr: 'Umočko veselje, Umok, 2006.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Nemzeti%20Muzeum,%202005.jpg',
          thumbnailUrl: 'url('.concat(u.a, ')'),
          hu: 'Nemzeti múzeum, Budapest, 2005.',
          hr: 'Nacionalni muzej, Budimpešta, 2005.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Brdovec,%202005.jpg',
          thumbnailUrl: 'url('.concat(r.a, ')'),
          hu: 'Találkozó, Brdovec, 2005.',
          hr: 'Susret, Brdovec, 2005.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Brdovec,%202005b.jpg',
          thumbnailUrl: 'url('.concat(l.a, ')'),
          hu: 'Találkozó, Brdovec, 2005.',
          hr: 'Susret, Brdovec, 2005.',
        },
        {
          imageUrl: 'https://kajkavci.hu/images/Falunap,%202003.jpg',
          thumbnailUrl: 'url('.concat(n.a, ')'),
          hu: 'Falunap, Fertőhomok, 2003.',
          hr: 'Seoski dan, Umok, 2003.',
        },
      ];
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      (a.default = function(e) {
        throw new Error('Missing parameter'.concat(e ? ' '.concat(e, '.') : '.'));
      });
  },
  function(e, a) {
    e.exports = require('react-router');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      function(e) {
        var i,
          n = t(35),
          o = t.n(n),
          r = t(0),
          s = t.n(r),
          l = t(199),
          c = t(53),
          u = t(200),
          m = t(4),
          d = t(201),
          p = t.n(d),
          g = t(179),
          j = t(73),
          k = t.n(j),
          v = t(202),
          h = t(203),
          b = t.n(h),
          f = t(180),
          y = t.n(f),
          x = t(204),
          z = t(205),
          w = t.n(z),
          E = t(19),
          S = t(206),
          _ = t.n(S),
          P = t(40),
          C = t(27),
          A = t(88),
          D = t(41),
          N = t(30),
          O = t(42),
          T = t(111),
          F = t(112),
          H = (t(23), t(38)),
          I = t(258),
          B = function(e) {
            return y.a.resolve(I.realpathSync(process.cwd()), e);
          },
          M = B(H.ASSETS_PATH_ON_SERVER);
        try {
          i = t(259)(M);
        } catch (e) {
          try {
            i = t(260);
          } catch (e) {
            i = B(H.ASSETS_PATH_ON_SERVER);
          }
        }
        var L = k()();
        x.config();
        _()(['/static'], { target: 'http://10.64.65.144:3001' });
        D.default
          .use(p.a)
          .use(g.LanguageDetector)
          .init(
            {
              preload: [O.DEFAULT_LANGUAGE],
              backend: { loadPath: ''.concat(H.PUBLIC_DIR_ON_SERVER, '/locales/{{lng}}/{{ns}}.json') },
              detection: { order: ['path', 'cookie'] },
            },
            function() {
              L.disable('x-powered-by')
                .disable('view cache')
                .use(g.handle(D.default))
                .use(
                  '/locales',
                  k.a.static(''.concat('C:\\Users\\horvath\\Documents\\kajkavci\\build\\public', '/locales'))
                )
                .use(k.a.static(H.PUBLIC_DIR_ON_SERVER))
                .use(w()())
                .use(function(e, a, t) {
                  return t();
                })
                .use(b()())
                .use(k.a.static(y.a.join(e, './public')))
                .get('/*', function(e, a) {
                  var t, n, r, d, p, g, j, k, h, b, f, y;
                  return o.a.async(
                    function(x) {
                      for (;;)
                        switch ((x.prev = x.next)) {
                          case 0:
                            return (
                              (x.prev = 0), (x.next = 3), o.a.awrap(Object(F.default)({ routes: C.default, req: e }))
                            );
                          case 3:
                            if (((t = x.sent), !(n = t.matches).length || '/' !== n[0].match.path)) {
                              x.next = 8;
                              break;
                            }
                            if (!e.cookies) {
                              x.next = 8;
                              break;
                            }
                            return x.abrupt(
                              'return',
                              a.status(200).redirect('en' === e.cookies.i18next ? '/en' : '/hu')
                            );
                          case 8:
                            if (0 !== n.length) {
                              x.next = 10;
                              break;
                            }
                            return x.abrupt(
                              'return',
                              a.status(404).redirect(''.concat('en' === e.cookies.i18next ? '/en' : '/hu', '/404'))
                            );
                          case 10:
                            if (
                              ((r = {}),
                              (d = new E.ServerStyleSheets()),
                              (p = Object(l.renderToString)(
                                d.collect(
                                  s.a.createElement(
                                    E.ThemeProvider,
                                    { theme: N.default },
                                    s.a.createElement(
                                      m.I18nextProvider,
                                      { i18n: e.i18n },
                                      s.a.createElement(
                                        c.StaticRouter,
                                        { context: r, location: e.url },
                                        s.a.createElement(P.default, { routes: C.default, loading: !0 })
                                      )
                                    )
                                  )
                                )
                              )),
                              (g = u.Helmet.renderStatic()),
                              !r.url)
                            ) {
                              x.next = 20;
                              break;
                            }
                            return (
                              (j = r.url),
                              e.url.includes('app/') &&
                                '/' === r.url &&
                                (j = ''.concat(j, '?redirect=').concat(Buffer.from(e.url).toString('base64'))),
                              x.abrupt('return', a.redirect(j))
                            );
                          case 20:
                            return (
                              (k = r.status || 200),
                              (h = d.toString()),
                              (b = {}),
                              e.i18n.languages.forEach(function(a) {
                                b[a] = e.i18n.services.resourceStore.data[a];
                              }),
                              (f = e.i18n.language),
                              (y = Object(v.minify)(
                                Object(T.default)({
                                  helmet: g,
                                  assets: i,
                                  markup: p,
                                  css: h,
                                  i18n: { initialI18nStore: b, initialLanguage: f },
                                }),
                                { minifyJS: !0, removeTagWhitespace: !0, removeComments: !0, collapseWhitespace: !0 }
                              )),
                              console.log(
                                ''
                                  .concat(new Date().toLocaleString(), ' - [')
                                  .concat(k, '] ')
                                  .concat(e.url)
                              ),
                              x.abrupt('return', a.status(k).send(y))
                            );
                          case 28:
                            x.next = 34;
                            break;
                          case 30:
                            return (
                              (x.prev = 30),
                              (x.t0 = x.catch(0)),
                              console.log(x.t0),
                              x.abrupt('return', a.status(500).send(Object(A.getErrorPage)()))
                            );
                          case 34:
                          case 'end':
                            return x.stop();
                        }
                    },
                    null,
                    null,
                    [[0, 30]]
                  );
                });
            }
          ),
          (a.default = L);
      }.call(this, '/');
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/logo.da684dce.png';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/no-image.a6dcf69d.png';
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'MerryWeather', function() {
        return s;
      }),
      t.d(a, 'MerryWeatherBold', function() {
        return l;
      });
    var i = t(118),
      n = t.n(i),
      o = t(117),
      r = t.n(o),
      s = {
        fontFamily: 'MerryWeather',
        fontWeight: 400,
        src: "\n    local('MerryWeather'),\n    local('MerryWeather-Regular'),\n    url(".concat(
          n.a,
          ") format('woff2')\n  "
        ),
      },
      l = {
        fontFamily: 'MerryWeather',
        fontWeight: 700,
        src: "\n    local('MerryWeather'),\n    local('MerryWeather-Bold'),\n    url(".concat(
          r.a,
          ") format('woff2')\n  "
        ),
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(12),
      d = t.n(m),
      p = t(0),
      g = t.n(p),
      j = t(4),
      k = t(3),
      v = t.n(k),
      h = (function(e) {
        function a() {
          return n()(this, a), l()(this, u()(a).apply(this, arguments));
        }
        return (
          d()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this.props.t;
                return g.a.createElement(
                  'div',
                  null,
                  g.a.createElement(v.a, { mb: 2 }, e('history.paragraph_1')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.musicians_1')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.musicians_2')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.paragraph_2')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.paragraph_3')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.paragraph_4')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.paragraph_5')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.paragraph_6')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.paragraph_7')),
                  g.a.createElement(v.a, { mb: 2 }, e('history.paragraph_8')),
                  g.a.createElement(v.a, { mb: 8 }, e('history.paragraph_9'))
                );
              },
            },
          ]),
          a
        );
      })(p.Component);
    a.default = Object(j.withTranslation)()(h);
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(12),
      d = t.n(m),
      p = t(0),
      g = t.n(p),
      j = t(3),
      k = t.n(j),
      v = t(7),
      h = t(4),
      b = t(16),
      f = t.n(b),
      y = t(165),
      x = t.n(y),
      z = t(94),
      w = (function(e) {
        function a() {
          return n()(this, a), l()(this, u()(a).apply(this, arguments));
        }
        return (
          d()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  a = e.t,
                  t = e.classes;
                return g.a.createElement(
                  'div',
                  null,
                  g.a.createElement(
                    k.a,
                    { mb: 8 },
                    g.a.createElement(
                      k.a,
                      { mb: 4, className: t.SectionTitleContainer },
                      g.a.createElement(k.a, { className: 'SectionTitle' }, a('home.prize')),
                      g.a.createElement('div', { className: 'TitleBorder' })
                    ),
                    g.a.createElement(k.a, { mb: 4, className: t.News }, a('home.news.prize_text')),
                    g.a.createElement(
                      k.a,
                      { className: t.ImageContainer },
                      g.a.createElement('div', { className: t.ImageWrapper }, g.a.createElement('img', { src: x.a }))
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(p.Component);
    a.default = Object(v.withRouter)(Object(h.withTranslation)()(f()(z.homePageStyles)(w)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(12),
      d = t.n(m),
      p = t(0),
      g = t.n(p),
      j = t(16),
      k = t.n(j),
      v = t(4),
      h = t(3),
      b = t.n(h),
      f = t(7),
      y = t(43),
      x = t(120),
      z = t.n(x),
      w = t(149),
      E = t.n(w),
      S = t(121),
      _ = t.n(S),
      P = t(153),
      C = t.n(P),
      A = t(143),
      D = t.n(A),
      N = t(33),
      O = (function(e) {
        function a() {
          return n()(this, a), l()(this, u()(a).apply(this, arguments));
        }
        return (
          d()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  a = e.classes,
                  t = e.t;
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(
                    b.a,
                    { mb: 8, className: a.MembersDesktopPage },
                    g.a.createElement(
                      b.a,
                      { mb: 2, className: a.FirstRow },
                      g.a.createElement(N.Member, { imageUrl: 'url("'.concat(z.a, '")'), subscript: t('member.Adam') }),
                      g.a.createElement(N.Member, {
                        imageUrl: 'url("'.concat(E.a, '")'),
                        subscript: t('member.Krisztina'),
                      }),
                      g.a.createElement(N.Member, {
                        imageUrl: 'url("'.concat(_.a, '")'),
                        subscript: t('member.Adrian'),
                      })
                    ),
                    g.a.createElement(
                      'div',
                      { className: a.SecondRow },
                      g.a.createElement(N.Member, { imageUrl: 'url("'.concat(C.a, '")'), subscript: t('member.Mate') }),
                      g.a.createElement(N.Member, { imageUrl: 'url("'.concat(D.a, '")'), subscript: t('member.Jozsi') })
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(p.Component);
    a.default = Object(f.withRouter)(Object(v.withTranslation)()(k()(y.membersPageStyles)(O)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(6),
      d = t.n(m),
      p = t(12),
      g = t.n(p),
      j = t(2),
      k = t.n(j),
      v = t(0),
      h = t.n(v),
      b = t(16),
      f = t.n(b),
      y = t(4),
      x = t(49),
      z = t.n(x),
      w = t(7),
      E = t(31),
      S = t(119),
      _ = t.n(S),
      P = t(156),
      C = t.n(P),
      A = t(160),
      D = t.n(A),
      N = t(161),
      O = t.n(N),
      T = t(37),
      F = t(18),
      H = t(95),
      I = (function(e) {
        function a() {
          var e, t;
          n()(this, a);
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
          return (
            (t = l()(this, (e = u()(a)).call.apply(e, [this].concat(o)))),
            k()(d()(t), 'state', { songUrl: null }),
            k()(d()(t), 'getSongFromTitleUrl', function(e) {
              return Object.keys(F.disks.slatkeTajne.tracks).indexOf(e) > -1
                ? F.disks.slatkeTajne.tracks[e]
                : Object.keys(F.disks.radujteSeNarodi.tracks).indexOf(e) > -1
                ? F.disks.radujteSeNarodi.tracks[e]
                : Object.keys(F.disks.miSmoKajkavci.tracks).indexOf(e) > -1
                ? F.disks.miSmoKajkavci.tracks[e]
                : Object.keys(F.disks.desetZlatnihGodina.tracks).indexOf(e) > -1
                ? F.disks.desetZlatnihGodina.tracks[e]
                : null;
            }),
            k()(d()(t), 'setSongUrl', function(e) {
              t.setState({ songUrl: e });
            }),
            k()(d()(t), 'closeDialog', function() {
              var e = t.props.history;
              e.push(''.concat(e.location.pathname)), t.setState({ songUrl: null });
            }),
            t
          );
        }
        return (
          g()(a, e),
          r()(a, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this.props.history,
                  a = this.state.songUrl,
                  t = z.a.parse(e.location.search);
                t.song !== a && this.setSongUrl(t.song);
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.state.songUrl,
                  a = this.props,
                  t = a.classes,
                  i = a.history;
                return h.a.createElement(
                  'div',
                  { className: t.Disks },
                  h.a.createElement(T.Disk, {
                    imageUrl: 'url("'.concat(_.a, '")'),
                    title: F.disks.desetZlatnihGodina.title,
                    tracks: F.disks.desetZlatnihGodina.tracks,
                    history: i,
                    getSongFromTitleUrl: this.getSongFromTitleUrl,
                    setSongUrl: this.setSongUrl,
                  }),
                  h.a.createElement(T.Disk, {
                    imageUrl: 'url("'.concat(C.a, '")'),
                    title: F.disks.miSmoKajkavci.title,
                    tracks: F.disks.miSmoKajkavci.tracks,
                    history: i,
                    getSongFromTitleUrl: this.getSongFromTitleUrl,
                    setSongUrl: this.setSongUrl,
                  }),
                  h.a.createElement(T.Disk, {
                    imageUrl: 'url("'.concat(D.a, '")'),
                    title: F.disks.radujteSeNarodi.title,
                    tracks: F.disks.radujteSeNarodi.tracks,
                    history: i,
                    getSongFromTitleUrl: this.getSongFromTitleUrl,
                    setSongUrl: this.setSongUrl,
                  }),
                  h.a.createElement(T.Disk, {
                    imageUrl: 'url("'.concat(O.a, '")'),
                    title: F.disks.slatkeTajne.title,
                    tracks: F.disks.slatkeTajne.tracks,
                    history: i,
                    getSongFromTitleUrl: this.getSongFromTitleUrl,
                    setSongUrl: this.setSongUrl,
                  }),
                  h.a.createElement(H.default, {
                    song: this.getSongFromTitleUrl(e),
                    closeDialog: this.closeDialog,
                    open: !!e,
                    history: i,
                  })
                );
              },
            },
          ]),
          a
        );
      })(v.Component);
    a.default = Object(w.withRouter)(Object(y.withTranslation)()(f()(E.discographyPageStyles)(I)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(6),
      d = t.n(m),
      p = t(12),
      g = t.n(p),
      j = t(2),
      k = t.n(j),
      v = t(0),
      h = t.n(v),
      b = t(16),
      f = t.n(b),
      y = t(4),
      x = t(7),
      z = t(26),
      w = t.n(z),
      E = t(44),
      S = t(96),
      _ = t(97),
      P = (function(e) {
        function a() {
          var e, t;
          n()(this, a);
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
          return (
            (t = l()(this, (e = u()(a)).call.apply(e, [this].concat(o)))),
            k()(d()(t), 'state', { video: null }),
            k()(d()(t), 'onVideoClick', function(e) {
              t.setState({ video: e });
            }),
            k()(d()(t), 'closeDialog', function() {
              t.setState({ video: null });
            }),
            t
          );
        }
        return (
          g()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  a = this.props.classes,
                  t = this.state.video;
                return h.a.createElement(
                  h.a.Fragment,
                  null,
                  h.a.createElement(
                    w.a,
                    { container: !0, className: a.VideosContainer },
                    S.videos.map(function(t) {
                      return h.a.createElement(
                        w.a,
                        { item: !0, md: 3, sm: 6, xs: 12, key: t.thumbnail, className: a.VideoContainer },
                        h.a.createElement('div', {
                          className: a.Video,
                          style: { backgroundImage: t.thumbnail },
                          onClick: function() {
                            return e.onVideoClick(t);
                          },
                        }),
                        h.a.createElement(
                          'div',
                          { className: a.Description },
                          ''
                            .concat(t.title, ', ')
                            .concat(t.location, ', ')
                            .concat(t.year)
                        )
                      );
                    })
                  ),
                  h.a.createElement(_.default, { open: !!t, closeDialog: this.closeDialog, video: t })
                );
              },
            },
          ]),
          a
        );
      })(v.Component);
    a.default = Object(x.withRouter)(Object(y.withTranslation)()(f()(E.videosPageStyles)(P)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(6),
      d = t.n(m),
      p = t(12),
      g = t.n(p),
      j = t(2),
      k = t.n(j),
      v = t(0),
      h = t.n(v),
      b = t(16),
      f = t.n(b),
      y = t(4),
      x = t(3),
      z = t.n(x),
      w = t(49),
      E = t.n(w),
      S = t(7),
      _ = t(45),
      P = t(98),
      C = t(99),
      A = (function(e) {
        function a() {
          var e, t;
          n()(this, a);
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
          return (
            (t = l()(this, (e = u()(a)).call.apply(e, [this].concat(o)))),
            k()(d()(t), 'getDate', function(e, a, i) {
              var n = t.props,
                o = n.t,
                r = n.history.location.pathname.includes('hu') ? 'hu' : 'hr';
              return Object(P.getDate)(r, o, e, o('month.' + a), i);
            }),
            k()(d()(t), 'getT', function() {
              return t.props.t;
            }),
            k()(d()(t), 'articlesUrl', 'http://www.fertohomok.hu/kajkavci/cikkek'),
            k()(d()(t), 'articles', [
              {
                title: '"Velika nagrada zlatnoga pauna" umočkoj tamburaškoj glazbi',
                media: 'Hrvatski Glasnik',
                date: t.getDate(2009, 'may', 21),
                article: ''.concat(t.articlesUrl, '/velika_nagrada_hg.jpg'),
              },
              {
                title: 'Odlični nastup gradišćanskih tamburašov',
                media: 'Hrvatski Glasnik',
                date: t.getDate(2008, 'oct', 9),
                article: ''.concat(t.articlesUrl, '/odlicni_nastup.jpg'),
              },
              {
                title: 'Zlatno sviranje koljnofskih Gorancev i umočkih Kajkavcev',
                media: 'Hrvatski Glasnik',
                date: t.getDate(2008, 'jun', 19),
                article: ''.concat(t.articlesUrl, '/zlatno_sviranje.jpg'),
              },
              {
                title: 'Kajkavce posjetili kudovci Januševca',
                media: 'Hrvatski Glasnik',
                date: t.getDate(2008, 'jun', 12),
                article: ''.concat(t.articlesUrl, '/kajkavci_janusevec.jpg'),
              },
              {
                title: 'Gradišćanski Hrvati u Zaprešiću',
                media: 'Hrvatsko Slovo',
                date: t.getDate(2008, 'mar', 14),
                article: ''.concat(t.articlesUrl, '/slovo.jpg'),
              },
              {
                title: 'Gradišćanski Hrvati iz mađarskog Umoka u Zaprešiću i Brdovcu',
                media: 'Vlasnik, Zagreb i Zagrebačka županija',
                date: t.getDate(2008, 'mar', 10),
                article: ''.concat(t.articlesUrl, '/vlasnik.jpg'),
              },
              {
                title: 'Večer Gradišćanskih Hrvata iz Mađarske',
                media: t.getT()('web_zapresic'),
                date: t.getDate(2008, 'mar', 8),
                article: ''.concat(t.articlesUrl, '/zapresic.jpg'),
              },
              {
                title: 'Umočko predstavljanje cedejke Mi smo kajkavci',
                media: 'Hrvatski glasnik',
                date: t.getDate(2007, 'aug', 23),
                article: ''.concat(t.articlesUrl, '/promo.jpg'),
              },
              {
                title: 'Razgovor s Ivanom Salmerom, prilikom nove cedejke',
                media: 'Hrvatski glasnik',
                date: t.getDate(2007, 'may', 17),
                article: ''.concat(t.articlesUrl, '/nova_ploca.jpg'),
              },
              {
                title: 'Treći CD umočkoga tamburaškoga sastava',
                media: 'Hrvatski glasnik',
                date: t.getDate(2007, 'may', 17),
                article: ''.concat(t.articlesUrl, '/treci_cd.jpg'),
              },
              {
                title: 'Audiovizualni paket iz Umoka',
                media: 'Hrvatski glasnik',
                date: t.getDate(2007, 'feb', 1),
                article: ''.concat(t.articlesUrl, '/paket.jpg'),
              },
              {
                title: 'O božićnoj ploči na web stranici ORF-a',
                media: 'Web stranica ORF-a',
                date: t.getDate(2006, 'dec', 10),
                article: ''.concat(t.articlesUrl, '/orf_bozicni_cd.jpg'),
              },
              {
                title: 'Božićne pjesme iz Umoka',
                media: 'Hrvatski glasnik',
                date: t.getDate(2007, 'jan', 25),
                article: ''.concat(t.articlesUrl, '/bozicne.jpg'),
              },
              {
                title: 'Umočko veselje odsad na filmu',
                media: 'Hrvatski glasnik',
                date: t.getDate(2007, 'jan', 25),
                article: ''.concat(t.articlesUrl, '/film.jpg'),
              },
              {
                title: 'Muzička nagrada za Umočke tamburaše',
                media: 'Hrvatski glasnik',
                date: t.getDate(2006, 'dec', 28),
                article: ''.concat(t.articlesUrl, '/muzicka_nagrada.jpg'),
              },
              {
                title: 'Kajkavci na Internetu',
                media: 'Hrvatski glasnik',
                date: t.getDate(2006, 'nov', 30),
                article: ''.concat(t.articlesUrl, '/www.jpg'),
              },
              {
                title: 'Svadbeni dani u Umoku',
                media: 'Hrvatski glasnik',
                date: t.getDate(2006, 'aug', 24),
                article: ''.concat(t.articlesUrl, '/svadbeni_dani.jpg'),
              },
              {
                title: 'Hagyományőrző lakodalmi vigasság',
                media: 'Kisalföld',
                date: t.getDate(2006, 'aug', 16),
                article: ''.concat(t.articlesUrl, '/cikk2.jpg'),
              },
              {
                title: 'Hagyományőrző lakodalom',
                media: 'Kisalföld',
                date: t.getDate(2006, 'aug', 14),
                article: ''.concat(t.articlesUrl, '/cikk.jpg'),
              },
              {
                title: 'Trodnevno "Umočko veselje"',
                media: 'Hrvatski glasnik',
                date: t.getDate(2006, 'aug', 10),
                article: ''.concat(t.articlesUrl, '/veselje.jpg'),
              },
              {
                title: 'Intervju s Janošem Sallmerom',
                media: 'Hrvatski glasnik',
                date: t.getDate(2006, 'jun', 8),
                article: ''.concat(t.articlesUrl, '/tamburas.jpg'),
              },
              {
                title: 'Zlatni uspjeh umočkih tamburašev',
                media: 'Hrvatski glasnik',
                date: t.getDate(2005, 'nov', 24),
                article: ''.concat(t.articlesUrl, '/zlatni_uspjeh.jpg'),
              },
              {
                title: 'Arany minősítés a Kajkavcinak',
                media: 'Kisalföld',
                date: t.getDate(2005, 'nov', 9),
                article: ''.concat(t.articlesUrl, '/arany.jpg'),
              },
              {
                title: 'Opet hrvatski dan u Umoku',
                media: 'Hrvatske novine',
                date: t.getDate(2005, 'sep', 16),
                article: ''.concat(t.articlesUrl, '/hrvatski_dan.jpg'),
              },
              {
                title: 'Umočke "Slatke tajne"',
                media: 'Hrvatski glasnik',
                date: t.getDate(2004, 'may', 27),
                article: ''.concat(t.articlesUrl, '/slatke_tajne.jpg'),
              },
            ]),
            k()(d()(t), 'state', { articleIndex: null }),
            k()(d()(t), 'setArticle', function(e) {
              t.setState({ articleIndex: e });
            }),
            k()(d()(t), 'closeDialog', function() {
              var e = t.props.history;
              e.push(''.concat(e.location.pathname)), t.setState({ articleIndex: null });
            }),
            t
          );
        }
        return (
          g()(a, e),
          r()(a, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this.props.history,
                  a = this.state.articleIndex,
                  t = E.a.parse(e.location.search);
                t.article !== a && this.setArticle(t.article);
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  a = this.props,
                  t = a.classes,
                  i = a.history,
                  n = this.state.articleIndex;
                return h.a.createElement(
                  z.a,
                  { mb: 5, className: t.ArticlesContainer },
                  this.articles.map(function(a, n) {
                    return h.a.createElement(
                      z.a,
                      { key: n, mb: 1, className: t.ArticleBox },
                      h.a.createElement(
                        S.Link,
                        {
                          className: t.ArticleLink,
                          to: ''.concat(i.location.pathname, '?article=').concat(n),
                          onClick: function() {
                            return e.setArticle(n);
                          },
                        },
                        a.title,
                        ' - ',
                        a.media,
                        ', ',
                        a.date
                      )
                    );
                  }),
                  this.articles[n]
                    ? h.a.createElement(C.default, {
                        closeDialog: this.closeDialog,
                        open: 0 === n || !!n,
                        article: this.articles[n],
                      })
                    : null
                );
              },
            },
          ]),
          a
        );
      })(v.Component);
    a.default = Object(S.withRouter)(Object(y.withTranslation)()(f()(_.articlesPageStyles)(A)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(12),
      d = t.n(m),
      p = t(0),
      g = t.n(p),
      j = t(16),
      k = t.n(j),
      v = t(4),
      h = t(7),
      b = t(3),
      f = t.n(b),
      y = t(100),
      x = (function(e) {
        function a() {
          return n()(this, a), l()(this, u()(a).apply(this, arguments));
        }
        return (
          d()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  a = e.t,
                  t = e.classes;
                return g.a.createElement(
                  'div',
                  { className: t.InterviewContainer },
                  g.a.createElement(
                    f.a,
                    { mb: 4 },
                    g.a.createElement(
                      'a',
                      { className: t.Link, href: a('interviews.ocsi.url') },
                      a('interviews.ocsi.title')
                    ),
                    ', '.concat(a('interviews.ocsi.media'), ' (').concat(a('interviews.ocsi.year'), ')')
                  ),
                  g.a.createElement(
                    f.a,
                    { mb: 4 },
                    g.a.createElement(
                      'a',
                      { className: t.Link, href: a('interviews.adam.url') },
                      a('interviews.adam.title')
                    ),
                    ', '.concat(a('interviews.adam.media'), ' (').concat(a('interviews.adam.year'), ')')
                  ),
                  g.a.createElement(
                    f.a,
                    { mb: 8 },
                    g.a.createElement(
                      'a',
                      { className: t.Link, href: a('interviews.opo.url') },
                      a('interviews.opo.title')
                    ),
                    ', '.concat(a('interviews.opo.media'), ' (').concat(a('interviews.opo.year'), ')')
                  )
                );
              },
            },
          ]),
          a
        );
      })(p.Component);
    a.default = Object(h.withRouter)(Object(v.withTranslation)()(k()(y.interviewsPageStyles)(x)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(6),
      d = t.n(m),
      p = t(12),
      g = t.n(p),
      j = t(2),
      k = t.n(j),
      v = t(0),
      h = t.n(v),
      b = t(16),
      f = t.n(b),
      y = t(4),
      x = t(7),
      z = t(3),
      w = t.n(z),
      E = t(101),
      S = t(66),
      _ = t(46),
      P = t(29),
      C = (function(e) {
        function a() {
          var e, t;
          n()(this, a);
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
          return (
            (t = l()(this, (e = u()(a)).call.apply(e, [this].concat(o)))),
            k()(d()(t), 'getDate', function(e) {
              var a = t.props.history,
                i = e.split(' '),
                n = i[0],
                o = i[1];
              return 'hu' === (a.location.pathname.includes('hu') ? 'hu' : 'hr')
                ? e
                : o + ' ' + Object(_.getCroatianMonthName)(n);
            }),
            t
          );
        }
        return (
          g()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  a = this.props,
                  t = a.classes,
                  i = a.t;
                return h.a.createElement(
                  w.a,
                  { mb: 8, className: t.PrizesContainer },
                  Object.keys(S.Prizes).map(function(a) {
                    return h.a.createElement(
                      'div',
                      { key: a },
                      h.a.createElement(w.a, { mt: 5, mb: 3, className: t.Year }, a),
                      h.a.createElement(
                        w.a,
                        null,
                        S.Prizes[a].map(function(a, n) {
                          return h.a.createElement(
                            w.a,
                            { className: t.Prize, key: n },
                            a.images && a.images.length
                              ? h.a.createElement(
                                  w.a,
                                  { className: t.PrizeImageContainer },
                                  a.images.map(function(e, a) {
                                    return h.a.createElement(
                                      w.a,
                                      { className: t.PrizeImage, key: a },
                                      h.a.createElement(P.default, { src: e, local: !0 })
                                    );
                                  })
                                )
                              : null,
                            h.a.createElement(
                              w.a,
                              { mt: 3, mb: 3 },
                              ''
                                .concat(e.getDate(a.date), ', ')
                                .concat(a.location, ', ')
                                .concat(i(a.titleKey))
                            )
                          );
                        })
                      )
                    );
                  })
                );
              },
            },
          ]),
          a
        );
      })(v.Component);
    a.default = Object(x.withRouter)(Object(y.withTranslation)()(f()(E.prizesPageStyles)(C)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'Prizes', function() {
        return i;
      });
    var i = {
      '2019.': [
        {
          date: 'november 16.',
          location: 'Baja',
          titleKey: 'titles.drzavna_nagrada',
          images: ['assets/prizes/drzavna_nagrada.jpg'],
        },
      ],
      '2017.': [
        {
          date: 'május 27.',
          location: 'Alsópáhok',
          titleKey: 'titles.velika_nagrada_zlatni_paun',
          images: ['assets/prizes/arany_pava_nagydij.gif'],
        },
      ],
      '2016.': [{ date: 'május 29.', location: 'Dunaszeg', titleKey: 'titles.nagrada_zlatni_paun' }],
      '2010.': [
        {
          date: 'október 9.',
          location: 'Győr',
          titleKey: 'titles.velika_nagrada_zlatni_paun',
          images: ['assets/prizes/arany_pava_nagydij.gif'],
        },
      ],
      '2009.': [
        {
          date: 'április 26.',
          location: 'Alsópáhok',
          titleKey: 'titles.velika_nagrada_zlatni_paun',
          images: ['assets/prizes/arany_pava_nagydij.gif', 'assets/prizes/arany_pava_nagydij_oklevel_alsopahok.gif'],
        },
      ],
      '2008.': [
        {
          date: 'május 31.',
          location: 'Győr',
          titleKey: 'titles.nagrada_zlatni_paun',
          images: ['assets/prizes/arany_pava_2008.jpg'],
        },
      ],
      '2006.': [
        {
          date: 'december 16.',
          location: 'Budapest',
          titleKey: 'titles.nagrada_kota',
          images: ['assets/prizes/kota_dij_2.gif'],
        },
      ],
      '2005.': [{ date: 'november 5.', location: 'Győr', titleKey: 'titles.zlatna_kvalifikacija' }],
      '2000.': [{ date: 'október 14.', location: 'Mohács', titleKey: 'titles.srebrna_kvalifikacija' }],
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(12),
      d = t.n(m),
      p = t(0),
      g = t.n(p),
      j = t(4),
      k = t(3),
      v = t.n(k),
      h = t(7),
      b = (function(e) {
        function a() {
          return n()(this, a), l()(this, u()(a).apply(this, arguments));
        }
        return (
          d()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this.props.t;
                return g.a.createElement(
                  'div',
                  null,
                  g.a.createElement(v.a, { mb: 2 }, e('tambura_history.paragraph_1')),
                  g.a.createElement(v.a, null, e('tambura_history.string_system_1')),
                  g.a.createElement(v.a, null, e('tambura_history.string_system_2')),
                  g.a.createElement(v.a, null, e('tambura_history.string_system_3')),
                  g.a.createElement(v.a, null, e('tambura_history.string_system_4')),
                  g.a.createElement(v.a, null, e('tambura_history.string_system_5')),
                  g.a.createElement(v.a, { mb: 2 }, e('tambura_history.string_system_6')),
                  g.a.createElement(v.a, { mb: 8 }, e('tambura_history.paragraph_2'))
                );
              },
            },
          ]),
          a
        );
      })(p.Component);
    a.default = Object(h.withRouter)(Object(j.withTranslation)()(b));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(6),
      d = t.n(m),
      p = t(12),
      g = t.n(p),
      j = t(2),
      k = t.n(j),
      v = t(0),
      h = t.n(v),
      b = t(16),
      f = t.n(b),
      y = t(4),
      x = t(3),
      z = t.n(x),
      w = t(7),
      E = t(184),
      S = t(102),
      _ = t(69),
      P = t(46),
      C = (function(e) {
        function a() {
          var e, t;
          n()(this, a);
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
          return (
            (t = l()(this, (e = u()(a)).call.apply(e, [this].concat(o)))),
            k()(d()(t), 'getDate', function(e) {
              var a = t.props.history,
                i = e.split(' '),
                n = i[0],
                o = i[1];
              return 'hu' === (a.location.pathname.includes('hu') ? 'hu' : 'hr')
                ? e
                : o + ' ' + Object(P.getCroatianMonthName)(n);
            }),
            k()(d()(t), 'isFuture', function(e) {
              return Object(E.isAfter)(e, new Date()) || Object(E.isSameDay)(e, new Date());
            }),
            t
          );
        }
        return (
          g()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  a = this.props.classes;
                return h.a.createElement(
                  z.a,
                  { mb: 8, className: a.ConcertsContainer },
                  Object.keys(_.Concerts).map(function(t) {
                    return h.a.createElement(
                      'div',
                      { key: t },
                      h.a.createElement(z.a, { mt: 3, mb: 1, className: a.Year }, t),
                      h.a.createElement(
                        z.a,
                        null,
                        _.Concerts[t].map(function(t, i) {
                          return h.a.createElement(
                            z.a,
                            {
                              className: ''
                                .concat(a.Concert, ' ')
                                .concat(t.isoDate && e.isFuture(new Date(t.isoDate)) ? a.Future : ''),
                              key: i,
                            },
                            e.getDate(t.date),
                            ' - ',
                            t.location
                          );
                        })
                      )
                    );
                  })
                );
              },
            },
          ]),
          a
        );
      })(v.Component);
    a.default = Object(w.withRouter)(Object(y.withTranslation)()(f()(S.concertsPageStyles)(C)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'Concerts', function() {
        return i;
      });
    var i = {
      '2022.': [
        { date: 'május 14.', location: 'Fertőszéplak', isoDate: '2022-05-14' },
        { date: 'május 14.', location: 'Fertőhomok', isoDate: '2022-05-14' },
        { date: 'május 7.', location: 'Baja', isoDate: '2022-05-07' },
        { date: 'május 1.', location: 'Fertőhomok', isoDate: '2022-05-01' },
      ],
      '2021.': [
        { date: 'szeptember 19.', location: 'Szentendre' },
        { date: 'szeptember 4.', location: 'Fertőhomok' },
        { date: 'július 3.', location: 'Fertőd' },
        { date: 'június 5.', location: 'Fertőhomok' },
      ],
      '2020.': [{ date: 'december 25.', location: 'Fertőhomok' }],
      '2019.': [
        { date: 'december 22.', location: 'Fertőhomok' },
        { date: 'december 15.', location: 'Sarród' },
        { date: 'november 30.', location: 'Fertőhomok' },
        { date: 'november 23.', location: 'Fertőd' },
        { date: 'augusztus 31.', location: 'Fertőhomok' },
        { date: 'augusztus 10.', location: 'Peresznye' },
        { date: 'július 6.', location: 'Hidegség' },
        { date: 'június 15.', location: 'Brdovec (Horvátország)' },
        { date: 'június 1.', location: 'Kisfalud' },
        { date: 'május 5.', location: 'Fertőhomok' },
        { date: 'április 13.', location: 'Homokbödöge' },
      ],
      '2018.': [
        { date: 'december 23.', location: 'Fertőhomok' },
        { date: 'december 1.', location: 'Kópháza' },
        { date: 'szeptember 29.', location: 'Fertőhomok' },
        { date: 'augusztus 31.', location: 'Fertőhomok' },
        { date: 'június 23.', location: 'Fertőhomok' },
        { date: 'június 2.', location: 'Fertőboz' },
        { date: 'május 6.', location: 'Fertőhomok' },
        { date: 'április 14.', location: 'Fertőhomok' },
        { date: 'március 24.', location: 'Fertőhomok' },
      ],
      '2017.': [
        { date: 'december 17.', location: 'Fertőhomok' },
        { date: 'november 18.', location: 'Mosonmagyaróvár' },
        { date: 'december 3.', location: 'Hidegség' },
        { date: 'szeptember 23.', location: 'Szentendre' },
        { date: 'szeptember 1.', location: 'Brdovec (Horvátország)' },
        { date: 'május 27.', location: 'Alsópáhok' },
        { date: 'május 20.', location: 'Fertőhomok' },
        { date: 'május 7.', location: 'Fertőhomok' },
        { date: 'április 22.', location: 'Fertőhomok' },
        { date: 'április 22.', location: 'Fertőhomok' },
        { date: 'március 3.', location: 'Sopron' },
      ],
      '2016.': [
        { date: 'december 18.', location: 'Fertőhomok' },
        { date: 'szeptember 3.', location: 'Fertőhomok' },
        { date: 'szeptember 2.', location: 'Fertőhomok' },
        { date: 'augusztus 12. Fertőd' },
        { date: 'július 2.', location: 'Illmitz (Ausztria)' },
        { date: 'május 23.', location: 'Dunaszeg' },
        { date: 'május 1.', location: 'Fertőhomok' },
        { date: 'április 23.', location: 'Prelog (Horvátország)' },
        { date: 'február 13.', location: 'Fertőhomok' },
        { date: 'január 23.', location: 'Hegykő' },
      ],
      '2015.': [
        { date: 'december 20.', location: 'Fertőhomok' },
        { date: 'november 14.', location: 'Fertőhomok' },
        { date: 'november 7.', location: 'Und' },
        { date: 'október 17.', location: 'Fertőhomok' },
        { date: 'szeptember 5.', location: 'Brdovec (Horvátország)' },
        { date: 'augusztus 30.', location: 'Fertőrákos' },
        { date: 'augusztus 1.', location: 'Fertőszéplak' },
        { date: 'június 20.', location: 'Devinsko Novo Selo (Szlovákia)' },
        { date: 'június 6.', location: 'Pereszteg' },
        { date: 'május 3.', location: 'Fertőhomok' },
        { date: 'április 25.', location: 'Fertőhomok' },
        { date: 'április 25.', location: 'Sarród' },
        { date: 'február 6.', location: 'Hegykő' },
      ],
      '2014.': [
        { date: 'december 21.', location: 'Fertőhomok' },
        { date: 'november 29.', location: 'Fertőszéplak' },
        { date: 'november 14.', location: 'Sopron' },
        { date: 'szeptember 13.', location: 'Fertőhomok' },
        { date: 'augusztus 3.', location: 'Mezőkövesd' },
        { date: 'július 27.', location: 'Fertőhomok' },
        { date: 'július 5.', location: 'Hidegség' },
        { date: 'június 28.', location: 'Fertőhomok' },
        { date: 'május 25.', location: 'Sopron' },
        { date: 'május 17.', location: 'Fertőhomok' },
        { date: 'május 4.', location: 'Fertőhomok' },
        { date: 'május 1.', location: 'Fertőd' },
        { date: 'április 27.', location: 'Hidegség' },
        { date: 'április 26.', location: 'Fertőhomok' },
        { date: 'március 1.', location: 'Hegykő' },
        { date: 'február 22.', location: 'Győrszentiván' },
        { date: 'február 14.', location: 'Hegykő' },
      ],
      '2013.': [
        { date: 'december 22.', location: 'Fertőhomok' },
        { date: 'november 16.', location: 'Fertőhomok' },
        { date: 'október 20.', location: 'Sobor' },
        { date: 'október 12.', location: 'Fertőhomok' },
        { date: 'szeptember 29.', location: 'Sopron' },
        { date: 'szeptember 22.', location: 'Bécs (Ausztria)' },
        { date: 'szeptember 15.', location: 'Fertőhomok' },
        { date: 'szeptember 13.', location: 'Hegykő' },
        { date: 'szeptember 7.', location: 'Brdovec (Horvátország)' },
        { date: 'augusztus 31.', location: 'Balf' },
        { date: 'július 6.', location: 'Fertőendréd' },
        { date: 'július 6.', location: 'Fertőhomok' },
        { date: 'június 21.', location: 'Sopron' },
        { date: 'június 15.', location: 'Fertőhomok' },
        { date: 'május 25.', location: 'Fertőboz' },
        { date: 'május 12.', location: 'Budapest' },
        { date: 'május 4.', location: 'Fertőhomok' },
        { date: 'március 8.', location: 'Sopron' },
        { date: 'január 25.', location: 'Hegykő' },
      ],
      '2012.': [
        { date: 'december 23.', location: 'Fertőhomok' },
        { date: 'december 1.', location: 'Fertőhomok' },
        { date: 'október 6.', location: 'Fertőhomok' },
        { date: 'szeptember 15.', location: 'Kópháza' },
        { date: 'augusztus 25.', location: 'Fertőhomok' },
        { date: 'augusztus 18.', location: 'Fertőhomok' },
        { date: 'augusztus 11.', location: 'Sarród' },
        { date: 'július 7.', location: 'Fertőhomok' },
        { date: 'július 7.', location: 'Sopron' },
        { date: 'július 7.', location: 'Hidegség' },
        { date: 'június 24.', location: 'Hegykő' },
        { date: 'június 9.', location: 'Fertőhomok' },
        { date: 'május 18.', location: 'Fertőhomok' },
        { date: 'május 12.', location: 'Bodonhely' },
        { date: 'április 28.', location: 'Fertőhomok' },
        { date: 'február 11.', location: 'Hegykő' },
        { date: 'január 21.', location: 'Szany' },
      ],
      '2011.': [
        { date: 'december 18.', location: 'Fertőhomok' },
        { date: 'december 3.', location: 'Tárnokréti' },
        { date: 'november 26.', location: 'Fertőhomok' },
        { date: 'november 12.', location: 'Nagycenk' },
        { date: 'szeptember 23.', location: 'Fertőszéplak' },
        { date: 'szeptember 10.', location: 'Bobovec (Horvátország)' },
        { date: 'szeptember 9.', location: 'Brdovec (Horvátország)' },
        { date: 'június 25.', location: 'Fertőhomok' },
        { date: 'május 21.', location: 'Fertőszéplak' },
        { date: 'május 7.', location: 'Hegykő' },
        { date: 'május 1.', location: 'Fertőhomok' },
        { date: 'január 21.', location: 'Hegykő' },
      ],
      '2010.': [
        { date: 'december 25.', location: 'Fertőhomok' },
        { date: 'november 13.', location: 'Kópháza' },
        { date: 'október 9.', location: 'Győr' },
        { date: 'augusztus 28.', location: 'Sarród' },
        { date: 'július 3.', location: 'Hidegség' },
        { date: 'június 20.', location: 'Pécs' },
        { date: 'június 12.', location: 'Und' },
        { date: 'június 11.', location: 'Fertőhomok' },
        { date: 'május 15.', location: 'Kapuvár' },
        { date: 'május 8.', location: 'Baja' },
        { date: 'január 22.', location: 'Hegykő' },
      ],
      '2009.': [
        { date: 'szeptember 12.', location: 'Beled' },
        { date: 'augusztus 21-22.', location: 'Fertőhomok' },
        { date: 'augusztus 15.', location: 'Budapest' },
        { date: 'június 20.', location: 'Balf' },
        { date: 'május 29.', location: 'Brdovec (Horvátország)' },
        { date: 'május 21.', location: 'Győr' },
        { date: 'május 3.', location: 'Fertőhomok' },
        { date: 'április 26.', location: 'Alsópáhok' },
        { date: 'február 21.', location: 'Fertőszentmiklós' },
        { date: 'január 17.', location: 'Hegykő' },
      ],
      '2008.': [
        { date: 'december 21.', location: 'Fertőhomok' },
        { date: 'november 22.', location: 'Filež (Ausztria)' },
        { date: 'november 15.', location: 'Dunaszerdahely (Felvidék)' },
        { date: 'szeptember 28.', location: 'Budapest' },
        { date: 'szeptember 20.', location: 'Ágfalva' },
        { date: 'szeptember 13.', location: 'Kópháza' },
        { date: 'szeptember 6.', location: 'Hegykő' },
        { date: 'július 27.', location: 'Fertőhomok' },
        { date: 'június 15.', location: 'Fertőrákos' },
        { date: 'június 7.', location: 'Nyárliget' },
        { date: 'május 31.', location: 'Győr' },
        { date: 'május 23.', location: 'Fertőhomok' },
        { date: 'április 19.', location: 'Nagycenk' },
        { date: 'április 13.', location: 'Eisenstadt (Ausztria)' },
        { date: 'március 7.', location: 'Zaprešić (Horvátország)' },
        { date: 'január 25.', location: 'Hegykő' },
      ],
      '2007.': [
        { date: 'december 22.', location: 'Fertőhomok' },
        { date: 'december 15.', location: 'Mosonmagyaróvár' },
        { date: 'szeptember 23.', location: 'Bécs (Ausztria)' },
        { date: 'augusztus 31.', location: 'Fertőhomok' },
        { date: 'július 29.', location: 'Fertőhomok (lemezbemutató koncert)' },
        { date: 'július 21.', location: 'Fertőrákos' },
        { date: 'június 23.', location: 'Fertőd' },
        { date: 'június 16.', location: 'Hidegség' },
        { date: 'május 20.', location: 'Győr' },
        { date: 'május 5.', location: 'Fertőhomok' },
        { date: 'április 27.', location: 'Brdovec (Horvátország)' },
        { date: 'január 26.', location: 'Hegykő' },
      ],
      '2006.': [
        { date: 'december 17.', location: 'Fertőhomok' },
        { date: 'november 25.', location: 'Győr' },
        { date: 'november 24.', location: 'Fertőd' },
        { date: 'november 19.', location: 'Győr' },
        { date: 'október 7.', location: 'Győr' },
        { date: 'szeptember 30.', location: 'Fertőd' },
        { date: 'szeptember 16.', location: 'Győr' },
        { date: 'augusztus 11-12-13.', location: 'Fertőhomok' },
        { date: 'július 8-9.', location: 'Đakovo (Horvátország)' },
        { date: 'július 1.', location: 'Fertőhomok' },
        { date: 'június 24.', location: 'Győr' },
        { date: 'június 17.', location: 'Hidegség' },
        { date: 'június 3.', location: 'Nagylózs' },
        { date: 'május 27.', location: 'Bezenye' },
        { date: 'május 19.', location: 'Fertőhomok' },
        { date: 'március 11.', location: 'Fertőszentmiklós' },
        { date: 'március 11.', location: 'Kapuvár' },
        { date: 'január 27.', location: 'Hegykő' },
      ],
      '2005.': [
        { date: 'november 25.', location: 'Fertőd' },
        { date: 'november 19.', location: 'Hegykő' },
        { date: 'november 13.', location: 'Fertőhomok' },
        { date: 'november 12.', location: 'Sopron' },
        { date: 'november 6.', location: 'Győr' },
        { date: 'november 5.', location: 'Kőszeg' },
        { date: 'október 15.', location: 'Und' },
        { date: 'szeptember 10.', location: 'Fertőhomok' },
        { date: 'szeptember 10.', location: 'Fertőd' },
        { date: 'augusztus 27.', location: 'Balf' },
        { date: 'augusztus 20.', location: 'Alsópulya (Ausztria)' },
        { date: 'augusztus 13.', location: 'Fertőhomok' },
        { date: 'augusztus 13.', location: 'Fertőszéplak' },
        { date: 'augusztus 7.', location: 'Filež (Ausztria)' },
        { date: 'augusztus 6.', location: 'Nagycenk' },
        { date: 'július 30.', location: 'Peresznye' },
        { date: 'július 23.', location: 'Hegykő' },
        { date: 'július 22.', location: 'Hegykő' },
        { date: 'július 9.', location: 'Kópháza' },
        { date: 'június 26.', location: 'Sopron' },
        { date: 'június 18.', location: 'Devinsko Novo Selo (Szlovákia)' },
        { date: 'május 21.', location: 'Budapest' },
        { date: 'május 13.', location: 'Brdovec (Horvátország)' },
        { date: 'május 7.', location: 'Fertőhomok' },
        { date: 'február 5.', location: 'Hegykő' },
        { date: 'január 22.', location: 'Fertőd' },
        { date: 'január 21.', location: 'Hegykő' },
      ],
      '2004.': [
        { date: 'december 19.', location: 'Fertőhomok' },
        { date: 'november 26.', location: 'Fertőd' },
        { date: 'november 19.', location: 'Hegykő' },
        { date: 'november 13.', location: 'Hegykő' },
        { date: 'november 6.', location: 'Sopron' },
        { date: 'október 2.', location: 'Sárvár' },
        { date: 'szeptember 25.', location: 'Fertőhomok' },
        { date: 'szeptember 12.', location: 'Sopronbánfalva' },
        { date: 'szeptember 5.', location: 'Ólmod' },
        { date: 'augusztus 15.', location: 'Ruszt (Ausztria)' },
        { date: 'július 25.', location: 'Fertőhomok' },
        { date: 'július 23.', location: 'Bük' },
        { date: 'július 10.', location: 'Sopron' },
        { date: 'június 26.', location: 'Und' },
        { date: 'június 11.', location: 'Fertőhomok' },
        { date: 'június 5.', location: 'Gersekarát' },
        { date: 'május 29.', location: 'Kimle' },
        { date: 'május 23.', location: 'Fertőboz' },
        { date: 'május 14.', location: 'Fertőhomok' },
        { date: 'május 7.', location: 'Fertőhomok' },
        { date: 'május 2.', location: 'Fertőhomok' },
        { date: 'május 1.', location: 'Balf' },
        { date: 'május 1.', location: 'Sopron' },
        { date: 'április 30.', location: 'Harka' },
        { date: 'március 19.', location: 'Sopron' },
        { date: 'január 23.', location: 'Hegykő' },
        { date: 'január 17.', location: 'Csepreg' },
      ],
      '2003.': [
        { date: 'november 22.', location: 'Fertőszentmiklós' },
        { date: 'november 22.', location: 'Hegykő' },
        { date: 'november 16.', location: 'Fertőhomok' },
        { date: 'november 15.', location: 'Hegykő' },
        { date: 'november 8.', location: 'Baja' },
        { date: 'október 18.', location: 'Tököl' },
        { date: 'szeptember 27.', location: 'Fertőhomok' },
        { date: 'szeptember 21.', location: 'Bécs (Ausztria)' },
        { date: 'szeptember 20.', location: 'Fertőújlak' },
        { date: 'szeptember 6.', location: 'Csorna' },
        { date: 'augusztus 17.', location: 'Szentpéterfa' },
        { date: 'július 19.', location: 'Fertőrákos' },
        { date: 'július 6.', location: 'Hidegség' },
        { date: 'június 28.', location: 'Bük' },
        { date: 'június 1.', location: 'Hegykő' },
        { date: 'május 31.', location: 'Farád' },
        { date: 'május 25.', location: 'Fertőboz' },
        { date: 'május 24.', location: 'Nagycenk' },
        { date: 'május 18.', location: 'Fertőd' },
        { date: 'május 16.', location: 'Brdovec (Horvátország)' },
        { date: 'május 4.', location: 'Fertőhomok' },
        { date: 'április 20.', location: 'Und' },
        { date: 'április 6.', location: 'Fertőd' },
        { date: 'április 5.', location: 'Dunaszeg' },
        { date: 'március 16.', location: 'Fertőhomok' },
        { date: 'február 15.', location: 'Fertőhomok' },
      ],
      '2002.': [
        { date: 'december 22.', location: 'Fertőhomok' },
        { date: 'november 21.', location: 'Fertőhomok' },
        { date: 'november 4.', location: 'Budapest' },
        { date: 'szeptember 8.', location: 'Hegykő' },
        { date: 'július 28.', location: 'Fertőhomok' },
        { date: 'július 20.', location: 'Fertőrákos' },
        { date: 'június 22.', location: 'Hegykő' },
        { date: 'május 31.', location: 'Csorna' },
        { date: 'május 5.', location: 'Fertőhomok' },
        { date: 'április 26.', location: 'Fertőhomok' },
        { date: 'március 1.', location: 'Győr' },
        { date: 'február 3.', location: 'Fertőszentmiklós' },
        { date: 'január 26.', location: 'Fertőhomok' },
      ],
      '2001.': [
        { date: 'december 23.', location: 'Fertőhomok' },
        { date: 'november 25.', location: 'Fertőendréd' },
        { date: 'november 17.', location: 'Baja' },
        { date: 'november 11.', location: 'Fertőhomok' },
        { date: 'augusztus 18.', location: 'Iván' },
        { date: 'augusztus 5.', location: 'Hegykő' },
        { date: 'augusztus 5.', location: 'Fertőhomok' },
        { date: 'június 16.', location: 'Und' },
        { date: 'június 3.', location: 'Hidegség' },
        { date: 'május 27.', location: 'Fertőhomok' },
        { date: 'május 6.', location: 'Fertőhomok' },
        { date: 'május 1.', location: 'Fertőhomok' },
        { date: 'április 21.', location: 'Brdovec (Horvátország)' },
        { date: 'február 17.', location: 'Fertőd' },
      ],
      '2000.': [
        { date: 'december 22.', location: 'Fertőhomok' },
        { date: 'november 19.', location: 'Fertőhomok' },
        { date: 'november 18.', location: 'Hegykő' },
        { date: 'november 7.', location: 'Fertőhomok' },
        { date: 'október 14.', location: 'Mohács' },
        { date: 'szeptember 10.', location: 'Sarród' },
        { date: 'szeptember 2.', location: 'Balf' },
        { date: 'augusztus 19.', location: 'Kópháza' },
        { date: 'augusztus 6.', location: 'Hidegség' },
        { date: 'július 8.', location: 'Und' },
        { date: 'május 20.', location: 'Fertőhomok' },
        { date: 'május 7.', location: 'Fertőhomok' },
      ],
      '1999.': [{ date: 'december 18.', location: 'Fertőhomok' }],
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(6),
      d = t.n(m),
      p = t(12),
      g = t.n(p),
      j = t(2),
      k = t.n(j),
      v = t(0),
      h = t.n(v),
      b = t(16),
      f = t.n(b),
      y = t(4),
      x = t(26),
      z = t.n(x),
      w = t(7),
      E = t(51),
      S = t(47),
      _ = t(103),
      P = t(104),
      C = (function(e) {
        function a() {
          var e, t;
          n()(this, a);
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
          return (
            (t = l()(this, (e = u()(a)).call.apply(e, [this].concat(o)))),
            k()(d()(t), 'state', { modalImage: null }),
            k()(d()(t), 'onImageClick', function(e) {
              t.setState({ modalImage: e });
            }),
            k()(d()(t), 'closeDialog', function() {
              t.setState({ modalImage: null });
            }),
            t
          );
        }
        return (
          g()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  a = this.props,
                  t = a.classes,
                  i = a.history;
                return h.a.createElement(
                  h.a.Fragment,
                  null,
                  h.a.createElement(
                    z.a,
                    { container: !0, className: t.ImagesContainer },
                    E.images.map(function(a) {
                      return h.a.createElement(
                        z.a,
                        { item: !0, md: 3, sm: 6, xs: 12, className: t.ImageContainer, key: a.thumbnailUrl },
                        h.a.createElement('div', {
                          className: t.Image,
                          style: { backgroundImage: a.thumbnailUrl },
                          onClick: function() {
                            return e.onImageClick(a);
                          },
                        }),
                        h.a.createElement(
                          'div',
                          { className: t.Description },
                          ''.concat(a[Object(P.detectLanguage)(i.location.pathname).toLowerCase()])
                        )
                      );
                    })
                  ),
                  h.a.createElement(_.default, {
                    open: !!this.state.modalImage,
                    closeDialog: this.closeDialog,
                    images: E.images,
                    imageIndex: this.state.modalImage ? E.images.indexOf(this.state.modalImage) : 0,
                  })
                );
              },
            },
          ]),
          a
        );
      })(v.Component);
    a.default = Object(w.withRouter)(Object(y.withTranslation)()(f()(S.imagesPageStyles)(C)));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(6),
      d = t.n(m),
      p = t(12),
      g = t.n(p),
      j = t(2),
      k = t.n(j),
      v = t(0),
      h = t.n(v),
      b = t(16),
      f = t.n(b),
      y = t(4),
      x = t(26),
      z = t.n(x),
      w = t(3),
      E = t.n(w),
      S = t(7),
      _ = t(105),
      P = t(152),
      C = t.n(P),
      A = (function(e) {
        function a() {
          var e, t;
          n()(this, a);
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
          return (
            (t = l()(this, (e = u()(a)).call.apply(e, [this].concat(o)))),
            k()(d()(t), 'onMapClick', function() {
              window.open(
                'https://www.google.com/maps/place/Polg%C3%A1rmesteri+Hivatal+Fert%C5%91homok/@47.6208561,16.7628024,17z/data=!3m1!4b1!4m5!3m4!1s0x476c198c7cbda059:0x96151200c29155ef!8m2!3d47.6208525!4d16.7649911',
                '_blank'
              );
            }),
            t
          );
        }
        return (
          g()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  a = e.classes,
                  t = e.t;
                return h.a.createElement(
                  z.a,
                  { container: !0, className: a.GridContainer },
                  h.a.createElement(
                    z.a,
                    { item: !0, md: 6, sm: 12, xs: 12 },
                    h.a.createElement('div', {
                      className: a.Map,
                      style: { backgroundImage: 'url('.concat(C.a, ')') },
                      onClick: this.onMapClick,
                    })
                  ),
                  h.a.createElement(
                    z.a,
                    { item: !0, md: 6, sm: 12, xs: 12, className: a.InfoContainer },
                    h.a.createElement(E.a, { mb: 2, className: a.Name }, t('contact.name')),
                    h.a.createElement(E.a, { mb: 2 }, t('contact.address')),
                    h.a.createElement(E.a, null, t('contact.phone')),
                    h.a.createElement(E.a, null, t('contact.fax')),
                    h.a.createElement(E.a, null, t('contact.email')),
                    h.a.createElement(E.a, null, t('contact.bank_account')),
                    h.a.createElement(E.a, null, t('contact.tax_number'))
                  )
                );
              },
            },
          ]),
          a
        );
      })(v.Component);
    a.default = Object(S.withRouter)(Object(y.withTranslation)()(f()(_.contactsPageStyles)(A)));
  },
  function(e, a) {
    e.exports = require('@material-ui/core/List');
  },
  function(e, a) {
    e.exports = require('express');
  },
  function(e, a) {
    e.exports = require('i18next');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'port', function() {
        return s;
      });
    var i = t(198),
      n = t.n(i),
      o = t(249).env,
      r = t(54).default,
      s = function() {
        return parseInt(o.RAZZLE_PORT || o.PORT || process.env.RAZZLE_PORT || '3000', 10);
      };
    n.a.createServer(r).listen(s(), function(e) {
      e ? console.error(e) : console.log('🚀 Started on port '.concat(s()));
    });
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(21),
      n = t.n(i),
      o = t(2),
      r = t.n(o),
      s = t(32),
      l = t.n(s),
      c = t(0),
      u = t.n(c),
      m = t(5),
      d = t.n(m),
      p = (t(17), t(19)),
      g = t(114),
      j = t.n(g),
      k = t(223),
      v = t.n(k),
      h = t(1),
      b = Object(c.forwardRef)(function(e, a) {
        var t = e.classes,
          i = e.loading,
          o = e.disabled,
          s = e.className,
          c = e.fullWidth,
          m = e.buttonClassName,
          p = e.variant,
          g = void 0 === p ? 'contained' : p,
          k = e.color,
          h = void 0 === k ? 'primary' : k,
          b = l()(e, [
            'classes',
            'loading',
            'disabled',
            'className',
            'fullWidth',
            'buttonClassName',
            'variant',
            'color',
          ]);
        return u.a.createElement(
          'div',
          { ref: a, className: d()(t.root, s, r()({}, t.fullWidth, c)) },
          u.a.createElement(
            v.a,
            n()({ disabled: i || o, className: d()(t.button, m), fullWidth: c, variant: g, color: h }, b)
          ),
          i && u.a.createElement(j.a, { size: 24, className: t.buttonProgress })
        );
      });
    a.default = Object(p.withStyles)(function(e) {
      return {
        root: { position: h.relative, display: h.inlineBlock },
        buttonProgress: {
          color: e.palette.primary.main,
          position: h.absolute,
          top: 'calc(50% - 12px)',
          right: 'calc(50% - 12px)',
        },
        fullWidth: { width: '100%' },
        button: { height: '100%' },
      };
    })(b);
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(2),
      n = t.n(i),
      o = t(0),
      r = t.n(o),
      s = (t(17), t(224)),
      l = t.n(s),
      c = t(225),
      u = t.n(c),
      m = t(226),
      d = t.n(m),
      p = t(227),
      g = t.n(p),
      j = t(48),
      k = t.n(j),
      v = t(228),
      h = t.n(v),
      b = t(14),
      f = t.n(b),
      y = t(3),
      x = t.n(y),
      z = t(5),
      w = t.n(z),
      E = t(1),
      S = f()(function(e) {
        return {
          CloseButton: {
            position: E.absolute,
            top: e.spacing(3),
            right: e.spacing(3),
            color: e.palette.grey70,
            cursor: E.pointer,
            zIndex: 10,
          },
          DialogTitle: n()(
            {
              fontWeight: E.bold,
              fontSize: 32,
              paddingBottom: e.spacing(1),
              borderBottom: '4px solid '.concat(e.palette.blue),
            },
            e.breakpoints.down('sm'),
            { fontSize: 24 }
          ),
          Subtitle: { textAlign: E.center },
          Black: {
            '& .Title': n()({}, e.breakpoints.down('sm'), { display: E.none }),
            '& .MuiDialog-paperFullWidth': { backgroundColor: e.palette.black },
          },
        };
      }),
      _ = r.a.forwardRef(function(e, a) {
        var t = e.open,
          i = e.onClose,
          o = e.actions,
          s = e.title,
          c = e.subtitle,
          m = e.content,
          p = e.contentClass,
          j = e.titleClass,
          v = e.maxWidth,
          b = e.mbTitle,
          f = e.black,
          y = g()(),
          z = k()(y.breakpoints.down('sm')),
          _ = S();
        return r.a.createElement(
          l.a,
          {
            ref: a,
            className: w()(n()({}, _.Black, f)),
            fullScreen: z,
            open: t,
            onClose: i,
            maxWidth: v || 'md',
            fullWidth: !0,
          },
          s
            ? r.a.createElement(
                x.a,
                { className: 'Title', mt: 4, mb: b || 4, ml: E.auto, mr: E.auto },
                r.a.createElement('div', { className: w()(_.DialogTitle, j) }, s)
              )
            : null,
          c ? r.a.createElement(x.a, { mb: 4, className: _.Subtitle }, c) : null,
          !o &&
            r.a.createElement(
              'div',
              { className: _.CloseButton, onClick: i },
              r.a.createElement(h.a, { color: 'inherit' })
            ),
          r.a.createElement(u.a, { classes: { root: p } }, m),
          o && r.a.createElement(d.a, null, o)
        );
      });
    a.default = _;
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t.n(i),
      o = t(229),
      r = t(19),
      s = t(7),
      l = t(4),
      c = t(89),
      u = (t(41), t(40)),
      m = t(30),
      d = t(27),
      p = window.__I18N_STORE__,
      g = window.__INITIAL_LANGUAGE__;
    delete window.__I18N_STORE__, delete window.__INITIAL_LANGUAGE__;
    Object(o.hydrate)(
      n.a.createElement(function() {
        return (
          Object(l.useSSR)(p, g),
          n.a.createElement(
            r.ThemeProvider,
            { theme: m.default },
            n.a.createElement(
              s.Router,
              { history: c.default },
              n.a.createElement(u.default, { routes: d.default, loading: !1 })
            )
          )
        );
      }, null),
      document.getElementById('root'),
      function() {
        document.querySelector('#jss-server-side');
      }
    );
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'FileTypes', function() {
        return D;
      });
    var i = t(21),
      n = t.n(i),
      o = t(32),
      r = t.n(o),
      s = t(8),
      l = t.n(s),
      c = t(9),
      u = t.n(c),
      m = t(10),
      d = t.n(m),
      p = t(11),
      g = t.n(p),
      j = t(6),
      k = t.n(j),
      v = t(12),
      h = t.n(v),
      b = t(2),
      f = t.n(b),
      y = t(0),
      x = t.n(y),
      z = (t(17), t(5)),
      w = t.n(z),
      E = t(16),
      S = t.n(E),
      _ = t(20),
      P = t(1);
    function C(e, a) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        a &&
          (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable;
          })),
          t.push.apply(t, i);
      }
      return t;
    }
    function A(e) {
      for (var a = 1; a < arguments.length; a++) {
        var t = null != arguments[a] ? arguments[a] : {};
        a % 2
          ? C(Object(t), !0).forEach(function(a) {
              f()(e, a, t[a]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : C(Object(t)).forEach(function(a) {
              Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
            });
      }
      return e;
    }
    var D = { image: 'image', video: 'video' },
      N = (function(e) {
        function a() {
          var e, t;
          l()(this, a);
          for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
          return (
            (t = d()(this, (e = g()(a)).call.apply(e, [this].concat(n)))),
            f()(k()(t), 'state', { open: !1 }),
            f()(k()(t), 'videoPlayer', x.a.createRef()),
            f()(k()(t), 'previewProps', function() {
              var e = t.props,
                a = e.file,
                i = e.alt;
              return {
                inline: { image: { alt: a.name || a.filename || i || '' }, video: {} },
                dialog: {
                  image: { alt: a.name || a.filename || i || '' },
                  video: { className: 'video-preview', controls: !0, onClick: t.playVideo },
                },
              };
            }),
            f()(k()(t), 'toggleDialog', function() {
              t.setState({ open: !t.state.open });
            }),
            f()(k()(t), 'playVideo', function() {
              t.videoPlayer.current &&
                (t.videoPlayer.current.paused ? t.videoPlayer.current.play() : t.videoPlayer.current.pause());
            }),
            f()(k()(t), 'pauseVideo', function() {
              t.videoPlayer.current && !t.videoPlayer.current.paused && t.videoPlayer.current.pause();
            }),
            t
          );
        }
        return (
          h()(a, e),
          u()(a, [
            {
              key: 'getPreviewContent',
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  a = e.alt,
                  t = e.className,
                  i = e.dialog,
                  o = r()(e, ['alt', 'className', 'dialog']),
                  s = this.props,
                  l = s.file,
                  c = s.classes,
                  u = s.type;
                return u === D.image
                  ? i
                    ? x.a.createElement('img', n()({ src: l.preview || l.url, alt: a, className: t }, o))
                    : x.a.createElement(
                        'div',
                        n()(
                          {
                            className: w()('preview-bg', c.PreviewBg),
                            style: { backgroundImage: 'url('.concat(l.preview || l.url, ')') },
                          },
                          o
                        )
                      )
                  : u === D.video
                  ? x.a.createElement(
                      'video',
                      n()({}, o, { className: w()(t, c.Video), ref: this.videoPlayer, key: l.preview || l.url }),
                      x.a.createElement('source', { src: l.preview || l.url }),
                      l.name || l.filename
                    )
                  : x.a.createElement('div', { className: c.FileNameOnly }, l.name || l.filename);
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  a = e.file,
                  t = e.type,
                  i = e.classes,
                  n = this.state.open;
                return x.a.createElement(
                  'div',
                  { className: i.FilePreview },
                  a &&
                    (a.preview || a.url) &&
                    this.getPreviewContent(
                      A({ className: i.Preview, onClick: this.toggleDialog }, this.previewProps().inline[t])
                    ),
                  x.a.createElement(_.Dialog, {
                    open: n,
                    onClose: this.toggleDialog,
                    title: a.name ? a.name : a.preview || a.url,
                    content: x.a.createElement(
                      'div',
                      { className: i.DialogContent },
                      a &&
                        (a.preview || a.url) &&
                        this.getPreviewContent(A({}, this.previewProps().dialog[t], { dialog: !0 }))
                    ),
                    contentClass: i.DialogContentRoot,
                  })
                );
              },
            },
          ]),
          a
        );
      })(y.Component);
    f()(N, 'defaultProps', { type: D.image }),
      (a.default = S()(function(e) {
        return {
          FilePreview: {
            display: P.flex,
            '& .preview-bg': f()({}, e.breakpoints.down('sm'), { marginLeft: 0, marginTop: e.spacing(1) }),
            width: '100%',
            height: e.spacing(16),
            margin: P.auto,
            overflow: P.hidden,
            position: P.relative,
          },
          FileNameOnly: { display: P.flex, alignItems: P.center },
          DialogContent: { display: P.flex, justifyContent: P.center },
          DialogContentRoot: { paddingTop: 0, paddingBottom: 0 },
          PreviewBg: {
            marginLeft: e.spacing(1),
            width: '100%',
            backgroundSize: P.cover,
            backgroundPosition: P.center,
            cursor: P.pointer,
          },
          Preview: {
            maxWidth: '100%',
            maxHeight: '100%',
            paddingLeft: e.spacing(4),
            cursor: P.pointer,
            margin: P.auto,
            display: ''.concat(P.block, ' !important'),
          },
          Video: { objectFit: 'initial', width: 640, height: 480, '&.loading': { visibility: P.hidden } },
        };
      })(N));
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(21),
      n = t.n(i),
      o = t(32),
      r = t.n(o),
      s = t(0),
      l = t.n(s),
      c = (t(17), t(5)),
      u = t.n(c),
      m = t(236),
      d = t.n(m),
      p = t(237),
      g = t.n(p),
      j = t(238),
      k = t.n(j),
      v = t(239),
      h = t.n(v),
      b = t(185),
      f = t(240),
      y = t.n(f),
      x = t(241),
      z = t.n(x),
      w = t(242),
      E = t.n(w),
      S = t(19),
      _ = t(1),
      P = { success: d.a, warning: E.a, error: g.a, info: k.a },
      C = Object(S.makeStyles)(function(e) {
        return {
          success: { backgroundColor: b.green[600] },
          error: { backgroundColor: e.palette.error.dark },
          info: { backgroundColor: e.palette.primary.main },
          warning: { backgroundColor: b.amber[700] },
          icon: { fontSize: 20 },
          iconVariant: { opacity: 0.9, marginRight: e.spacing(1) },
          message: { display: _.flex, alignItems: _.center },
        };
      }),
      A = l.a.forwardRef(function(e, a) {
        var t = C(),
          i = e.className,
          o = e.message,
          s = e.onClose,
          c = e.variant,
          m = r()(e, ['className', 'message', 'onClose', 'variant']),
          d = P[c];
        return l.a.createElement(
          z.a,
          n()(
            {
              ref: a,
              className: u()(t[c], i),
              'aria-describedby': 'client-snackbar',
              message: l.a.createElement(
                'span',
                { id: 'client-snackbar', className: t.message },
                l.a.createElement(d, { className: u()(t.icon, t.iconVariant) }),
                o
              ),
              action: [
                l.a.createElement(
                  y.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: s },
                  l.a.createElement(h.a, { className: t.icon })
                ),
              ],
            },
            m
          )
        );
      });
    a.default = A;
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(8),
      n = t.n(i),
      o = t(9),
      r = t.n(o),
      s = t(10),
      l = t.n(s),
      c = t(11),
      u = t.n(c),
      m = t(6),
      d = t.n(m),
      p = t(12),
      g = t.n(p),
      j = t(2),
      k = t.n(j),
      v = t(0),
      h = t.n(v),
      b = (t(17), t(5)),
      f = t.n(b),
      y = t(16),
      x = t.n(y),
      z = t(7),
      w = t(82),
      E = t(1),
      S = t(83),
      _ = t(109),
      P = t(36),
      C = t.n(P),
      A = t(23),
      D = (function(e) {
        function a() {
          var e, t;
          n()(this, a);
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
          return (
            (t = l()(this, (e = u()(a)).call.apply(e, [this].concat(o)))),
            k()(d()(t), 'isLoggedIn', function() {
              var e = C.a.get(A.default.API_TOKEN_EXPIRES_AT) || t.props.tokenExpiresAt;
              return e && new Date().getTime() > new Date(1e3 * e).getTime() - 36e5;
            }),
            t
          );
        }
        return (
          g()(a, e),
          r()(a, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  a = e.classes,
                  t = e.routes,
                  i = e.location,
                  n = e.history;
                return h.a.createElement(
                  'div',
                  { className: a.Main },
                  h.a.createElement(S.default, { pages: t, history: n, isLoggedIn: this.isLoggedIn }),
                  t ? h.a.createElement('div', { className: f()(a.mainContent) }, Object(w.default)(t, a, i)) : null,
                  h.a.createElement(_.Footer, { isLoggedIn: this.isLoggedIn, history: n })
                );
              },
            },
          ]),
          a
        );
      })(v.Component);
    a.default = Object(z.withRouter)(
      x()(function(e) {
        return {
          Main: { display: E.flex, flexDirection: E.column, minHeight: '100vh' },
          mainContent: { width: '100%', flexGrow: 1 },
          transitionGroup: { position: E.relative },
          routeSection: { width: '100%' },
        };
      })(D)
    );
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(21),
      n = t.n(i),
      o = t(2),
      r = t.n(o),
      s = t(0),
      l = t.n(s),
      c = t(53),
      u = t(181),
      m = t(5),
      d = t.n(m);
    function p(e, a) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        a &&
          (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable;
          })),
          t.push.apply(t, i);
      }
      return t;
    }
    function g(e) {
      for (var a = 1; a < arguments.length; a++) {
        var t = null != arguments[a] ? arguments[a] : {};
        a % 2
          ? p(Object(t), !0).forEach(function(a) {
              r()(e, a, t[a]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : p(Object(t)).forEach(function(a) {
              Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
            });
      }
      return e;
    }
    a.default = function(e, a, t) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      return e
        ? l.a.createElement(
            u.TransitionGroup,
            { className: a.transitionGroup },
            l.a.createElement(
              u.CSSTransition,
              { key: t.pathname, className: d()('fade', a.routeSection), timeout: 300 },
              l.a.createElement(
                'section',
                null,
                l.a.createElement(
                  c.Switch,
                  n()({}, o, { location: t }),
                  e.map(function(a, t) {
                    return a.redirect
                      ? l.a.createElement(c.Redirect, {
                          from: a.from,
                          to: a.to,
                          key: a.key || ''.concat(a.from, '_').concat(a.to),
                          exact: a.exact,
                        })
                      : l.a.createElement(c.Route, {
                          sensitive: !0,
                          key: a.key || t,
                          path: a.path,
                          exact: a.exact,
                          strict: a.strict,
                          render: function(t) {
                            return (
                              t.staticContext && (t.staticContext.status = a.status || 200),
                              a.render
                                ? a.render(g({}, t, {}, i, { route: a }))
                                : l.a.createElement(a.component, n()({}, t, i, { route: a, pages: e }))
                            );
                          },
                        });
                  })
                )
              )
            )
          )
        : null;
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t.n(i),
      o = t(4),
      r = (t(17), t(7)),
      s = t(84),
      l = t(86);
    a.default = Object(r.withRouter)(function(e) {
      var a = e.pages,
        t = e.history,
        i = Object(o.useTranslation)().t,
        r = function(e) {
          return a
            .filter(function(e) {
              return e.linkName;
            })
            .find(function(a) {
              return a.linkName === e;
            }).path;
        },
        c = function() {
          t.push(r(i('menu_item_home')));
        };
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(s.MobileHeader, { onLogoClick: c, getPath: r }),
        n.a.createElement(l.DesktopHeader, { getPath: r, onLogoClick: c })
      );
    });
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'MobileHeader', function() {
        return _;
      });
    var i = t(22),
      n = t.n(i),
      o = t(0),
      r = t.n(o),
      s = (t(17), t(3)),
      l = t.n(s),
      c = t(208),
      u = t.n(c),
      m = t(72),
      d = t.n(m),
      p = t(209),
      g = t.n(p),
      j = t(24),
      k = t.n(j),
      v = t(210),
      h = t.n(v),
      b = t(182),
      f = t(211),
      y = t.n(f),
      x = t(4),
      z = t(15),
      w = t(25),
      E = t(85),
      S = t(28),
      _ = function(e) {
        e.onLogoClick;
        var a = e.getPath,
          t = Object(w.useMobileHeaderStyles)(),
          i = Object(x.useTranslation)().t,
          o = r.a.useState(!1),
          s = n()(o, 2),
          c = s[0],
          m = s[1],
          p = r.a.useState(!1),
          j = n()(p, 2),
          v = j[0],
          f = j[1];
        'undefined' != typeof window &&
          window.addEventListener('resize', function() {
            m(!1);
          });
        var _ = function(e) {
          return function(a) {
            (!a || 'keydown' !== a.type || ('Tab' !== a.key && 'Shift' !== a.key)) && m(e);
          };
        };
        return r.a.createElement(
          l.a,
          { className: t.MobileHeader },
          r.a.createElement(l.a, { mr: 2, className: t.LanguageSelectContainer }, r.a.createElement(S.default, null)),
          r.a.createElement(
            l.a,
            { className: t.MobileActionContainer },
            r.a.createElement(l.a, null, r.a.createElement(E.Hamburger, { onLogoClick: _(!c), open: c })),
            r.a.createElement(
              l.a,
              null,
              r.a.createElement(
                u.a,
                { anchor: 'top', open: c, onClose: _(!1), onOpen: _(!0), PaperProps: { className: t.DrawerContainer } },
                r.a.createElement(
                  'div',
                  { role: 'presentation' },
                  r.a.createElement(
                    d.a,
                    null,
                    r.a.createElement(z.MenuItem, {
                      mobile: !0,
                      linkName: i('menu_item_home'),
                      to: a(i('menu_item_home')),
                      onClick: _(!1),
                    }),
                    r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                    r.a.createElement(
                      g.a,
                      {
                        className: t.MobileBandButton,
                        button: !0,
                        onClick: function() {
                          f(!v);
                        },
                      },
                      r.a.createElement(h.a, { primary: i('menu_item_band') }),
                      v ? r.a.createElement(b.ExpandLess, null) : r.a.createElement(b.ExpandMore, null)
                    ),
                    r.a.createElement(
                      y.a,
                      { className: t.Collapse, in: v, timeout: 'auto', unmountOnExit: !0 },
                      r.a.createElement(
                        d.a,
                        { component: 'div', disablePadding: !0 },
                        r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                        r.a.createElement(z.MenuItem, {
                          mobile: !0,
                          onClick: _(!1),
                          linkName: i('menu_item_history'),
                          to: a(i('menu_item_history')),
                          submenu: !0,
                        }),
                        r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                        r.a.createElement(z.MenuItem, {
                          mobile: !0,
                          onClick: _(!1),
                          linkName: i('menu_item_members'),
                          to: a(i('menu_item_members')),
                          submenu: !0,
                        }),
                        r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                        r.a.createElement(z.MenuItem, {
                          mobile: !0,
                          onClick: _(!1),
                          linkName: i('menu_item_discography'),
                          to: a(i('menu_item_discography')),
                          submenu: !0,
                        }),
                        r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                        r.a.createElement(z.MenuItem, {
                          mobile: !0,
                          onClick: _(!1),
                          linkName: i('menu_item_images'),
                          to: a(i('menu_item_images')),
                          submenu: !0,
                        }),
                        r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                        r.a.createElement(z.MenuItem, {
                          mobile: !0,
                          onClick: _(!1),
                          linkName: i('menu_item_articles'),
                          to: a(i('menu_item_articles')),
                          submenu: !0,
                        }),
                        r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                        r.a.createElement(z.MenuItem, {
                          mobile: !0,
                          onClick: _(!1),
                          linkName: i('menu_item_interviews'),
                          to: a(i('menu_item_interviews')),
                          submenu: !0,
                        }),
                        r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                        r.a.createElement(z.MenuItem, {
                          mobile: !0,
                          onClick: _(!1),
                          linkName: i('menu_item_prizes'),
                          to: a(i('menu_item_prizes')),
                          submenu: !0,
                        })
                      )
                    ),
                    r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                    r.a.createElement(z.MenuItem, {
                      mobile: !0,
                      linkName: i('menu_item_concerts'),
                      to: a(i('menu_item_concerts')),
                      onClick: _(!1),
                    }),
                    r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                    r.a.createElement(z.MenuItem, {
                      mobile: !0,
                      linkName: i('menu_item_videos'),
                      to: a(i('menu_item_videos')),
                      onClick: _(!1),
                    }),
                    r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                    r.a.createElement(z.MenuItem, {
                      mobile: !0,
                      linkName: i('menu_item_tambura_history'),
                      to: a(i('menu_item_tambura_history')),
                      onClick: _(!1),
                    }),
                    r.a.createElement(k.a, { variant: 'middle', className: t.MobileDivider }),
                    r.a.createElement(z.MenuItem, {
                      mobile: !0,
                      linkName: i('menu_item_contacts'),
                      to: a(i('menu_item_contacts')),
                      onClick: _(!1),
                    })
                  )
                )
              )
            )
          )
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'Hamburger', function() {
        return u;
      });
    var i = t(2),
      n = t.n(i),
      o = t(0),
      r = t.n(o),
      s = t(5),
      l = t.n(s),
      c = (t(17), t(25)),
      u = function(e) {
        var a = e.onLogoClick,
          t = e.open,
          i = Object(c.useHamburgerStyles)();
        return r.a.createElement(
          'div',
          { className: i.Container, onClick: a },
          r.a.createElement('div', { className: l()(i.Bar, n()({}, i.Bar1, t)) }),
          r.a.createElement('div', { className: l()(i.Bar, n()({}, i.Bar2, t)) }),
          r.a.createElement('div', { className: l()(i.Bar, n()({}, i.Bar3, t)) })
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'DesktopHeader', function() {
        return f;
      });
    var i = t(22),
      n = t.n(i),
      o = t(0),
      r = t.n(o),
      s = (t(17), t(4)),
      l = t(3),
      c = t.n(l),
      u = t(113),
      m = t.n(u),
      d = t(72),
      p = t.n(d),
      g = t(55),
      j = t.n(g),
      k = t(15),
      v = t(87),
      h = t(25),
      b = t(28),
      f = function(e) {
        var a = e.onLogoClick,
          t = e.getPath,
          i = Object(h.useDesktopHeaderStyles)(),
          o = Object(s.useTranslation)().t,
          l = r.a.useState(!1),
          u = n()(l, 2),
          d = u[0],
          g = u[1],
          f = r.a.useRef(null),
          y = function(e) {
            (f.current && f.current.contains(e.target)) || g(!1);
          },
          x = r.a.useRef(d);
        r.a.useEffect(
          function() {
            !0 === x.current && !1 === d && f.current.focus(), (x.current = d);
          },
          [d]
        );
        var z = function(e) {
          y(e);
        };
        return r.a.createElement(
          c.a,
          { className: i.Header, borderTop: 6 },
          r.a.createElement(
            c.a,
            { className: i.LogoContainer, padding: 1 },
            r.a.createElement(m.a, { className: i.Logo, src: j.a, onClick: a })
          ),
          r.a.createElement(
            c.a,
            { padding: 1, className: i.MenuContainer },
            r.a.createElement(c.a, { mr: 2 }, r.a.createElement(b.default, null)),
            r.a.createElement(
              p.a,
              { className: i.List },
              r.a.createElement(k.MenuItem, { linkName: o('menu_item_home'), to: t(o('menu_item_home')), onClick: z }),
              r.a.createElement(
                v.DropdownMenu,
                {
                  menuListId: 'band-menu',
                  open: d,
                  dropdownTitle: r.a.createElement(s.Trans, { i18nKey: 'menu_item_band' }),
                  anchorRef: f,
                  handleToggle: function() {
                    g(function(e) {
                      return !e;
                    });
                  },
                  handleClose: y,
                },
                r.a.createElement(k.MenuItem, {
                  onClick: y,
                  linkName: o('menu_item_history'),
                  to: t(o('menu_item_history')),
                  submenu: !0,
                }),
                r.a.createElement(k.MenuItem, {
                  onClick: y,
                  linkName: o('menu_item_members'),
                  to: t(o('menu_item_members')),
                  submenu: !0,
                }),
                r.a.createElement(k.MenuItem, {
                  onClick: y,
                  linkName: o('menu_item_discography'),
                  to: t(o('menu_item_discography')),
                  submenu: !0,
                }),
                r.a.createElement(k.MenuItem, {
                  onClick: y,
                  linkName: o('menu_item_images'),
                  to: t(o('menu_item_images')),
                  submenu: !0,
                }),
                r.a.createElement(k.MenuItem, {
                  onClick: y,
                  linkName: o('menu_item_articles'),
                  to: t(o('menu_item_articles')),
                  submenu: !0,
                }),
                r.a.createElement(k.MenuItem, {
                  onClick: y,
                  linkName: o('menu_item_interviews'),
                  to: t(o('menu_item_interviews')),
                  submenu: !0,
                }),
                r.a.createElement(k.MenuItem, {
                  onClick: y,
                  linkName: o('menu_item_prizes'),
                  to: t(o('menu_item_prizes')),
                  submenu: !0,
                })
              ),
              r.a.createElement(k.MenuItem, {
                linkName: o('menu_item_concerts'),
                to: t(o('menu_item_concerts')),
                onClick: z,
              }),
              r.a.createElement(k.MenuItem, {
                linkName: o('menu_item_videos'),
                to: t(o('menu_item_videos')),
                onClick: z,
              }),
              r.a.createElement(k.MenuItem, {
                linkName: o('menu_item_tambura_history'),
                to: t(o('menu_item_tambura_history')),
                onClick: y,
              }),
              r.a.createElement(k.MenuItem, {
                linkName: o('menu_item_contacts'),
                to: t(o('menu_item_contacts')),
                onClick: z,
              })
            )
          )
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'DropdownMenu', function() {
        return S;
      });
    var i = t(0),
      n = t.n(i),
      o = (t(17), t(5)),
      r = t.n(o),
      s = t(4),
      l = t(217),
      c = t.n(l),
      u = t(218),
      m = t.n(u),
      d = t(219),
      p = t.n(d),
      g = t(220),
      j = t.n(g),
      k = t(221),
      v = t.n(k),
      h = t(222),
      b = t.n(h),
      f = t(113),
      y = t.n(f),
      x = t(20),
      z = t(56),
      w = t.n(z),
      E = t(25),
      S = function(e) {
        var a = e.menuListId,
          t = e.open,
          o = e.dropdownTitle,
          l = e.avatar,
          u = e.anchorRef,
          d = e.handleToggle,
          g = e.handleClose,
          k = e.children,
          h = e.buttonClassName,
          f = Object(E.useDropdownMenuStyles)(),
          z = Object(s.useTranslation)().t;
        return n.a.createElement(
          i.Fragment,
          null,
          o
            ? n.a.createElement(
                x.Button,
                {
                  ref: u,
                  buttonClassName: r()(f.DropdownButton, h),
                  'aria-controls': t ? a : void 0,
                  'aria-haspopup': 'true',
                  variant: 'text',
                  onClick: d,
                },
                o,
                n.a.createElement(b.a, null)
              )
            : n.a.createElement(y.a, {
                ref: u,
                'aria-controls': t ? a : void 0,
                onClick: d,
                'aria-haspopup': 'true',
                alt: z('menu_item_profile_menu'),
                src: l || w.a,
                className: f.Avatar,
              }),
          n.a.createElement(
            c.a,
            { className: f.MenuListContainer, open: t, anchorEl: u.current, transition: !0, disablePortal: !0 },
            function(e) {
              var i = e.TransitionProps;
              return n.a.createElement(
                m.a,
                i,
                n.a.createElement(
                  p.a,
                  null,
                  n.a.createElement(
                    j.a,
                    { onClickAway: g },
                    n.a.createElement(v.a, { className: f.MenuList, autoFocusItem: t, id: a }, k)
                  )
                )
              );
            }
          )
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'getErrorPage', function() {
        return o;
      });
    var i = t(159),
      n = t.n(i),
      o = function() {
        return '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>React Starter Template</title>\n    <style>\n        \n        html {\n            font-size: 100%;\n        }\n        \n        body {\n            font-size: 1rem;\n            background-color: #e6e6e6;\n            color: #222228;\n            font-family: \'Roboto\', sans-serif;\n            margin: 0;\n            height: 100vh;\n        }\n        \n        header {\n            height: 60px;\n            width: 100%;\n            background-color: #ec6059;\n        }\n\n        .container {\n            margin: auto;\n            height: 60px;\n            padding: 0 115px;\n        }\n\n        header img {\n            width: 145px;\n            margin: 16px;\n        }\n        \n        .content {\n            text-align: center;\n            margin-top: calc(50vh - 60px);\n            font-size: 1.5rem;\n        }\n    \n    </style>\n</head>\n<body>\n<header><div class="container"><img src="'.concat(
          n.a,
          '" alt="Kajkavci"/></div></header>\n<div class="content">\n    Service not available.\n</div>\n</body>\n</html>'
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(230);
    a.default = Object(i.createBrowserHistory)({});
  },
  function(e, a, t) {
    'use strict';
    t.r(a), (a.default = { RAZZLE_REMOTE_DEBUG: !0 });
  },
  function(e, a, t) {
    'use strict';
    t.r(a), (a.default = {});
  },
  function(e, a, t) {
    'use strict';
    t.r(a), (a.default = { RAZZLE_PUBLIC_DIR: '/root/build/public' });
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      (a.default = {
        QUERY_FORMAT: { arrayFormat: 'bracket' },
        I18NEXT: 'i18next',
        SORT_BY: { EMAIL: 'email' },
        IS_BROWSER: process && !process.release,
      });
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'homePageStyles', function() {
        return r;
      });
    var i = t(2),
      n = t.n(i),
      o = t(1),
      r = function(e) {
        return {
          SectionTitleContainer: n()(
            { fontSize: 28, fontWeight: o.bold, '& .SectionTitle': { paddingBottom: e.spacing(1) } },
            e.breakpoints.down('sm'),
            { fontSize: 20 }
          ),
          News: {},
          ImageContainer: { display: o.flex, justifyContent: o.center },
          ImageWrapper: { maxWidth: 500, '& img': { width: '100%', height: o.auto } },
        };
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t.n(i),
      o = (t(17), t(4)),
      r = t(3),
      s = t.n(r),
      l = t(20),
      c = t(31);
    a.default = function(e) {
      var a = e.open,
        t = e.closeDialog,
        i = e.song,
        r = Object(c.useLyricsDialogStyles)(),
        u = Object(o.useTranslation)().t;
      return n.a.createElement(l.Dialog, {
        open: a,
        onClose: t,
        maxWidth: 'sm',
        mbTitle: 2,
        title: i ? i.title : '',
        subtitle: i
          ? i.music === i.lyrics
            ? ''.concat(u('music_and_lyrics'), ': ').concat(i.music)
            : ''
                .concat('narodna' === i.music ? u('narodna') : u('music') + ': ' + i.music)
                .concat(i.lyrics ? ', ' + u('lyrics') + ': ' + i.lyrics : '')
          : null,
        content: n.a.createElement(
          n.a.Fragment,
          null,
          i
            ? n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(
                  s.a,
                  { mb: 6, className: r.Text },
                  i.text.map(function(e, a) {
                    return e
                      ? n.a.createElement('div', { className: r.Line, key: i.title + a }, e)
                      : n.a.createElement('br', { key: i.title + a });
                  })
                )
              )
            : null
        ),
      });
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'videos', function() {
        return C;
      });
    var i = t(170),
      n = t.n(i),
      o = t(174),
      r = t.n(o),
      s = t(178),
      l = t.n(s),
      c = t(171),
      u = t.n(c),
      m = t(175),
      d = t.n(m),
      p = t(176),
      g = t.n(p),
      j = t(168),
      k = t.n(j),
      v = t(173),
      h = t.n(v),
      b = t(167),
      f = t.n(b),
      y = t(177),
      x = t.n(y),
      z = t(172),
      w = t.n(z),
      E = t(169),
      S = t.n(E),
      _ = t(166),
      P = t.n(_),
      C = [
        {
          title: 'Valpovačko kolo',
          url: 'https://www.youtube.com/embed/XBDc9OjLNpM',
          thumbnail: 'url('.concat(l.a, ')'),
          location: 'Fertőhomok',
          year: '2019.',
        },
        {
          title: 'Mi smo kajkavci',
          url: 'https://www.youtube.com/embed/wXBqA8IXSvw',
          thumbnail: 'url('.concat(u.a, ')'),
          location: 'Fertőhomok',
          year: '2019.',
        },
        {
          title: 'Pod starim krovovima',
          url: 'https://www.youtube.com/embed/8cE4qJz3zkY',
          thumbnail: 'url('.concat(r.a, ')'),
          location: 'Fertőhomok',
          year: '2019.',
        },
        {
          title: 'Međimurje kak si lepo zeleno',
          url: 'https://www.youtube.com/embed/nkCTNGRWUuk',
          thumbnail: 'url('.concat(n.a, ')'),
          location: 'Fertőhomok',
          year: '2019.',
        },
        {
          title: 'Kakve cura crne oči ima',
          url: 'https://www.youtube.com/embed/rSoVjVsjZR4',
          thumbnail: 'url('.concat(k.a, ')'),
          location: 'Fertőhomok',
          year: '2019.',
        },
        {
          title: 'Podravinsko kolo',
          url: 'https://www.youtube.com/embed/C3p7d2ViY-M',
          thumbnail: 'url('.concat(d.a, ')'),
          location: 'Alsópáhok',
          year: '2017.',
        },
        {
          title: 'Sad ću ti povidat',
          url: 'https://www.youtube.com/embed/V7JNepMlxd4',
          thumbnail: 'url('.concat(g.a, ')'),
          location: 'Alsópáhok',
          year: '2017.',
        },
        {
          title: 'Ova naša livada - I dođi lolo',
          url: 'https://www.youtube.com/embed/y8kAP-w1YaY',
          thumbnail: 'url('.concat(h.a, ')'),
          location: 'Alsópáhok',
          year: '2017.',
        },
        {
          title: 'Johnny Guitar',
          url: 'https://www.youtube.com/embed/sUmoc0Mlokk',
          thumbnail: 'url('.concat(f.a, ')'),
          location: 'Fertőhomok',
          year: '2014.',
        },
        {
          title: 'Svirci moji',
          url: 'https://www.youtube.com/embed/MelO1gK7YCo',
          thumbnail: 'url('.concat(x.a, ')'),
          location: 'Fertőhomok',
          year: '2014.',
        },
        {
          title: 'Jubileum, ORF',
          url: 'https://www.youtube.com/embed/YoY0hF0xirk',
          thumbnail: 'url('.concat(w.a, ')'),
          location: 'Fertőhomok',
          year: '2014.',
        },
        {
          title: 'Lijepom našom',
          url: 'https://www.youtube.com/embed/tfEMN376PY4',
          thumbnail: 'url('.concat(S.a, ')'),
          location: 'Sopron',
          year: '2013.',
        },
        {
          title: 'Fala',
          url: 'https://www.youtube.com/embed/vxL4G5iCkSE',
          thumbnail: 'url('.concat(P.a, ')'),
          location: 'Brdovec',
          year: '2007.',
        },
      ];
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t.n(i),
      o = (t(17), t(48)),
      r = t.n(o),
      s = t(19),
      l = t(20),
      c = t(44);
    a.default = function(e) {
      var a = e.open,
        t = e.closeDialog,
        i = e.video,
        o = Object(c.useVideoDialogStyles)(),
        u = Object(s.useTheme)(),
        m = r()(u.breakpoints.down('sm'));
      return i
        ? n.a.createElement(l.Dialog, {
            open: a,
            onClose: t,
            maxWidth: 'lg',
            title: m ? i.title : null,
            black: !0,
            contentClass: 'NoPadding',
            content: n.a.createElement(
              'div',
              { className: o.Wrapper },
              n.a.createElement(
                'div',
                { className: o.IFrameContainer },
                n.a.createElement('iframe', {
                  className: o.IFrame,
                  src: i.url,
                  frameBorder: '0',
                  allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                  allowFullScreen: !0,
                })
              )
            ),
          })
        : null;
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'getDate', function() {
        return i;
      });
    var i = function(e, a, t, i, n) {
      return 'hu' === e.toLowerCase() ? t + '. ' + a(i) + ' ' + n + '.' : n + '. ' + a(i) + ' ' + t + '.';
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t.n(i),
      o = (t(17), t(20)),
      r = t(45),
      s = t(29);
    a.default = function(e) {
      var a = e.open,
        t = e.closeDialog,
        i = e.article,
        l = Object(r.useArticleDialogStyles)();
      return n.a.createElement(o.Dialog, {
        open: a,
        onClose: t,
        maxWidth: 'lg',
        title: i.title,
        content: n.a.createElement(
          'div',
          { className: l.ArticleImageWrapper },
          n.a.createElement(s.default, { className: l.ArticleImage, src: i.article })
        ),
      });
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'interviewsPageStyles', function() {
        return n;
      });
    var i = t(1),
      n = function(e) {
        return {
          InterviewContainer: { marginLeft: i.auto, marginRight: i.auto },
          Link: { color: e.palette.blue, '&:hover': { color: e.palette.blueHover }, textDecoration: i.none },
        };
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'prizesPageStyles', function() {
        return r;
      });
    var i = t(2),
      n = t.n(i),
      o = t(1),
      r = function(e) {
        return {
          PrizesContainer: { marginLeft: o.auto, marginRight: o.auto, textAlign: o.center },
          Year: n()({ fontSize: 28, color: e.palette.blue }, e.breakpoints.down('sm'), { fontSize: 20 }),
          Prize: { fontSize: 16 },
          PrizeImageContainer: n()(
            { display: o.flex, alignItems: o.center, justifyContent: o.center },
            e.breakpoints.down('sm'),
            { display: o.block }
          ),
          PrizeImage: {
            '&:not(:last-child)': n()({ marginRight: e.spacing(4) }, e.breakpoints.down('sm'), {
              marginRight: 0,
              marginBottom: e.spacing(2),
            }),
          },
        };
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'concertsPageStyles', function() {
        return r;
      });
    var i = t(2),
      n = t.n(i),
      o = t(1),
      r = function(e) {
        return {
          ConcertsContainer: { marginLeft: o.auto, marginRight: o.auto, textAlign: o.center },
          Year: n()({ fontSize: 28, color: e.palette.blue }, e.breakpoints.down('sm'), { fontSize: 20 }),
          Concert: { fontSize: 16 },
          Future: { color: e.palette.blue },
        };
      };
  },
  function(e, a, i) {
    'use strict';
    i.r(a);
    var n = i(22),
      o = i.n(n),
      r = i(0),
      s = i.n(r),
      l = (i(17), i(234)),
      c = i.n(l),
      u = i(50),
      m = i(48),
      d = i.n(m),
      p = i(20),
      g = i(47);
    a.default = function(e) {
      var a = e.open,
        i = e.closeDialog,
        n = e.altKey,
        l = e.images,
        m = e.imageIndex,
        j = Object(g.useImageViewerDialogStyles)(),
        k = Object(u.useTheme)(),
        v = d()(k.breakpoints.down('sm')),
        h = s.a.useState(m),
        b = o()(h, 2),
        f = b[0],
        y = b[1];
      Object(r.useEffect)(
        function() {
          m !== f && y(m);
        },
        [m]
      );
      return s.a.createElement(p.Dialog, {
        open: a,
        onClose: i,
        black: v,
        title: n ? t(n) : '',
        content: s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement('div', {
            className: j.ModalImage,
            style: { backgroundImage: 'url('.concat(l[m].imageUrl) },
          }),
          s.a.createElement(
            c.a,
            {
              className: j.MobileModalImages,
              enableMouseEvents: !0,
              index: f,
              onChangeIndex: function(e) {
                y(e);
              },
            },
            l.map(function(e) {
              return s.a.createElement('div', {
                className: j.MobileImage,
                key: l.indexOf(e),
                style: { backgroundImage: 'url('.concat(e.imageUrl) },
              });
            })
          )
        ),
      });
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'detectLanguage', function() {
        return r;
      });
    var i = t(36),
      n = t.n(i),
      o = t(23),
      r = function(e) {
        return e.includes('/hr') ? 'HR' : n.a.get(o.default.I18NEXT) ? n.a.get(o.default.I18NEXT).toUpperCase() : 'HU';
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'contactsPageStyles', function() {
        return r;
      });
    var i = t(2),
      n = t.n(i),
      o = t(1),
      r = function(e) {
        var a;
        return {
          GridContainer: { width: '100%' },
          Map: n()(
            {
              backgroundRepeat: o.noRepeat,
              backgroundSize: o.cover,
              backgroundPosition: o.center,
              cursor: o.pointer,
              width: '100%',
              height: 542,
            },
            e.breakpoints.down('sm'),
            { marginBottom: e.spacing(4), height: 271 }
          ),
          InfoContainer:
            ((a = { fontSize: 18 }),
            n()(a, e.breakpoints.up('md'), { paddingLeft: e.spacing(4) }),
            n()(a, e.breakpoints.down('sm'), { fontSize: 16 }),
            a),
          Name: n()({ fontSize: 28 }, e.breakpoints.down('sm'), { fontSize: 24 }),
        };
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'useExpandableBoyStyles', function() {
        return r;
      });
    var i = t(14),
      n = t.n(i),
      o = t(1),
      r = n()(function(e) {
        return {
          Wrapper: { position: o.relative },
          Text: {
            fontSize: 18,
            color: e.palette.grey70,
            position: o.relative,
            overflowY: o.hidden,
            transitionTimingFunction: 'ease-in-out',
            transitionProperty: 'max-height, padding',
            transitionDuration: '300ms',
            '&.Expanded': { paddingBottom: e.spacing(4) },
          },
          ShadowBox: {
            position: o.absolute,
            left: 0,
            bottom: 0,
            width: '100%',
            height: 56,
            background: 'transparent linear-gradient(0deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box',
            '&.Expanded': { display: o.none },
          },
          Expander: {
            backgroundColor: e.palette.white,
            width: e.mixins.pagination.size,
            height: e.mixins.pagination.size,
            display: o.flex,
            alignItems: o.center,
            justifyContent: o.center,
            position: o.absolute,
            borderRadius: '50%',
            left: 'calc(50% - '.concat(e.mixins.pagination.size / 2, 'px)'),
            bottom: 'calc('.concat(-e.mixins.pagination.size / 2, 'px)'),
            cursor: o.pointer,
            boxShadow: '0px 0px 14px #00000029',
            '& svg': { fill: o.none, stroke: e.palette.black, strokeWidth: 2, width: 20.617, height: 11.309 },
            '&.Expanded svg': { transform: 'rotate(180deg)' },
          },
        };
      });
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t.n(i),
      o = t(5),
      r = t.n(o),
      s = (t(17), t(114)),
      l = t.n(s),
      c = t(14),
      u = t.n(c),
      m = t(243),
      d = t(1),
      p = u()(function(e) {
        return {
          AppLoader: {
            display: d.none,
            justifyContent: d.center,
            alignItems: d.center,
            height: '100%',
            position: d.fixed,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 1200,
            background: Object(m.fade)(e.palette.black, 0.9),
            '&.show': { display: d.flex },
          },
        };
      });
    a.default = function(e) {
      var a = e.show,
        t = void 0 !== a && a,
        i = p();
      return n.a.createElement('div', { className: r()(i.AppLoader, { show: t }) }, n.a.createElement(l.a, null));
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'appStyles', function() {
        return r;
      });
    var i = t(2),
      n = t.n(i),
      o = t(1),
      r = function(e) {
        var a, t;
        return {
          '@global': {
            'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
              '-webkit-box-shadow': '0 0 0 30px white inset !important',
            },
            '.fade': {
              '&.enter': {
                opacity: 0,
                position: o.relative,
                '&.enter-active': { position: o.relative, opacity: 1, transition: 'opacity 300ms ease-in-out' },
              },
              '&.exit': {
                opacity: 1,
                position: o.relative,
                '&.exit-active': {
                  opacity: 0,
                  position: o.absolute,
                  top: 0,
                  left: 0,
                  transition: 'opacity 300ms ease-in-out',
                },
              },
            },
            '.Page':
              ((a = {}),
              n()(a, e.breakpoints.down('sm'), { marginTop: e.mixins.mobileHeader.height }),
              n()(
                a,
                '& > div',
                n()({ paddingTop: e.spacing(6), marginTop: 0, marginBottom: 0 }, e.breakpoints.down('sm'), {
                  paddingTop: e.spacing(4),
                  marginLeft: 0,
                  marginRight: 0,
                  width: '100%',
                })
              ),
              a),
            '.MainContainer': n()({}, e.breakpoints.down('sm'), {
              padding: 0,
              '& > div > div': { paddingLeft: e.spacing(2), paddingRight: e.spacing(2), maxWidth: '100%' },
            }),
            '.PageTitleContainer':
              ((t = { display: o.block, width: '100%' }),
              n()(t, e.breakpoints.down('sm'), { marginBottom: e.spacing(4) }),
              n()(t, e.breakpoints.down('xs'), { marginBottom: e.spacing(3) }),
              t),
            '.PageTitle': { display: o.flex, justifyContent: o.center, textAlign: o.center, color: e.palette.darkBlue },
            '.PageTitleBorder': { marginLeft: o.auto, marginRight: o.auto },
            '.TitleBorder': n()({ width: 285, height: 4, backgroundColor: e.palette.blue }, e.breakpoints.down('sm'), {
              width: 130,
            }),
            '.Title': n()({ fontSize: 42, fontWeight: o.bold, paddingBottom: e.spacing(1) }, e.breakpoints.down('sm'), {
              fontSize: 24,
            }),
            '.Description': n()(
              { color: e.palette.grey70, fontSize: 18, lineHeight: '30px' },
              e.breakpoints.down('sm'),
              { fontSize: 14, lineHeight: '18px' }
            ),
            '.NoPadding': { padding: '0!important' },
            body: n()({ margin: 0, padding: 0, height: '100%' }, e.breakpoints.down('sm'), {
              height: 'calc(100% - '.concat(e.mixins.mobileHeader.height, 'px)'),
            }),
          },
        };
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'Footer', function() {
        return g;
      });
    var i = t(0),
      n = t.n(i),
      o = (t(17), t(3)),
      r = t.n(o),
      s = t(244),
      l = t.n(s),
      c = t(110),
      u = t(55),
      m = t.n(u),
      d = t(245),
      p = t.n(d),
      g = function() {
        var e = Object(c.useFooterStyles)();
        return n.a.createElement(
          'footer',
          { className: e.Footer },
          n.a.createElement(
            r.a,
            {
              className: e.ScrollToTop,
              onClick: function() {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
              },
            },
            n.a.createElement(l.a, null)
          ),
          n.a.createElement(p.a, { className: e.Logo, src: m.a }),
          n.a.createElement('div', { className: e.FooterText }, '© Kajkavci')
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'useFooterStyles', function() {
        return l;
      });
    var i = t(2),
      n = t.n(i),
      o = t(14),
      r = t.n(o),
      s = t(1),
      l = r()(function(e) {
        var a, t;
        return {
          Footer:
            ((a = {
              background: e.palette.darkBlue,
              width: '100%',
              color: e.palette.white,
              padding: e.spacing(3),
              position: s.relative,
            }),
            n()(a, e.breakpoints.down('sm'), { paddingLeft: e.spacing(3), paddingRight: 0 }),
            n()(a, 'display', s.flex),
            n()(a, 'alignItems', s.center),
            n()(a, 'justifyContent', s.center),
            a),
          ScrollToTop: n()(
            {
              position: s.absolute,
              top: e.mixins.scrollToTop.size / -2,
              right: e.mixins.scrollToTop.size / 2,
              width: e.mixins.scrollToTop.size,
              height: e.mixins.scrollToTop.size,
              borderRadius: e.mixins.scrollToTop.size / 2,
              color: e.palette.white,
              backgroundColor: e.palette.yellow,
              '&:hover': { backgroundColor: e.palette.yellowHover },
              display: s.flex,
              justifyContent: s.center,
              alignItems: s.center,
              cursor: s.pointer,
              '& svg': { width: (e.mixins.scrollToTop.size / 3) * 2, height: (e.mixins.scrollToTop.size / 3) * 2 },
            },
            e.breakpoints.down('sm'),
            { right: 'calc(50% - '.concat(e.mixins.scrollToTop.size / 2, 'px)') }
          ),
          FooterText: n()(
            { fontSize: 18, lineHeight: 1.5, paddingTop: e.spacing(2), paddingBottom: e.spacing(2) },
            e.breakpoints.down('sm'),
            { marginLeft: s.auto, marginRight: e.spacing(4) }
          ),
          Logo:
            ((t = { width: '64px !important', height: '64px !important' }),
            n()(t, e.breakpoints.down('sm'), { position: s.absolute, left: e.spacing(2) }),
            n()(t, e.breakpoints.up('md'), { marginRight: e.spacing(2) }),
            t),
        };
      });
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(186),
      n = t.n(i);
    a.default = function(e) {
      var a = e.helmet,
        t = e.assets,
        i = e.markup,
        o = e.css,
        r = e.i18n;
      return '\n    <!DOCTYPE html>\n    <html lang="en" '
        .concat(
          a.htmlAttributes.toString(),
          ' style="height: 100%">\n    <head itemscope itemtype="http://schema.org/WebSite">\n        <title>Kajkavci</title>\n        \n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n        <meta name="theme-color" content="#000000" />\n        <meta name="robots" content="noodp"/>\n        <meta name="robots" content="noydir"/>\n        \n        <style id="jss-server-side">'
        )
        .concat(o, '</style>\n        \n        ')
        .concat(a.title.toString(), '\n        ')
        .concat(a.meta.toString(), '\n        ')
        .concat(a.link.toString(), '\n        ')
        .concat(
          a.script.toString(),
          '\n    </head>\n    <body> \n        <div id="root" style="min-height: 100%; position: relative">'
        )
        .concat(i, '</div>\n        <script>\n            window.__I18N_STORE__ = ')
        .concat(n()(r.initialI18nStore), ';\n            window.__INITIAL_LANGUAGE__ = ')
        .concat(n()(r.initialLanguage), ';\n        </script>\n         ')
        .concat('<script async src="'.concat(t.client.js, '" defer></script>'), '\n    </body>\n    </html>');
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(35),
      n = t.n(i),
      o = t(246);
    a.default = function(e) {
      var a, t, i, r;
      return n.a.async(function(n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              return (
                (a = e.routes),
                (t = e.req),
                e.res,
                (i = t.url.includes('?') ? t.url.split('?')[0] : t.url),
                (r = Object(o.matchRoutes)(a, i).map(function(e) {
                  e.route;
                  return { match: e.match };
                })),
                n.abrupt('return', {
                  matches: r.filter(function(e) {
                    return e;
                  }),
                })
              );
            case 4:
            case 'end':
              return n.stop();
          }
      });
    };
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Avatar');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/CircularProgress');
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/hu-flag.b7d087a4.png';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/hr-flag.02a00bd7.png';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/merriweather.bold.e4a089e6.ttf';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/merriweather.regular.f417c6ec.ttf';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/10zgCover.30a58072.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/adam.1f61cbc2.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/adrian.be715151.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/alsopahok_2009a_mini.efc2e304.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/alsopahok_2009b_mini.240ecdde.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/alsopahok_2009c_mini.61ef619d.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/alsopahok_2017_mini.c9e8f574.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/becs_2007_mini.fc8aee01.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/brdovec_2005_mini.2a5dbe59.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/brdovec_2005b_mini.39227d57.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/brdovec_2007_mini.ab6fb6b0.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/dakovo_2006_mini.8cbbefaf.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/eisenstadt1_2008_mini.594ade04.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/eisenstadt2_2008_mini.f7ee00ac.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/eisenstadt3_2008_mini.4fac7274.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/falunap_2003_mini.c5266fe8.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/fertod_2007_mini.f3e7d8dc.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/fertorakos_2007_mini.d0e0c8c2.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/gyor_2006_mini.0516cf7b.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/gyor_2007_mini.2baa727a.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/hidegseg_2007_mini.e35c24df.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/homoki_lakodalmas_2006_mini.d8702562.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/horvat_bal_2007_mini.8ed1fbfb.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/horvat_bal_2017_mini.00affe31.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/jozsi.3f99ba72.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/kajkavci_20a_mini.d50aee0d.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/kajkavci_20b_mini.3a2ad655.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/kajkavci_20c_mini.f374d6eb.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/kajkavci_20d_mini.46f82b58.jpg';
  },
  function(e, a) {
    e.exports =
      'data:image/jpeg;base64,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';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/krisztina.9efe5c51.png';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/lemezbemutato1_2007_mini.0f52b583.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/lemezbemutato_2007_mini.720f9679.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/map.274e881b.png';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/mate.a4988e04.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/mosonmagyarovar_2007_mini.c249c8db.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/mosonmagyarovar_2017_mini.e419577a.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/mskCover.d92ed32b.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/nagrada_savez_mini.7c5fd6f9.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/nemzeti_muzeum_2005_mini.b3832d5b.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/react-icon.c00cd8c7.png';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/rsnCover.cde98fbb.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/stCover.ed416a13.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/tajhaz_2006_mini.d797862f.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/tajhaz_2006b_mini.7690fe98.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/tajhaz_2017_mini.58953e17.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/drzavna_nagrada.a61a710e.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/fala.f4ce2af8.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/johnny_guitar.100a21d6.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/kakve_cura_crne_oci_ima.b057737f.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/lijepom_nasom.6bb152e0.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/medimurje.1909dc1c.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/mi_smo_kajkavci.0a6a1a89.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/orf.43687330.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/ova_nasa_livada-i_dodi_lolo.34832996.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/pod_starim_krovovima.301ff791.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/podravinsko_kolo.a7252040.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/sad_cu_ti_povidat.c3eb74d0.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/svirci_moji.10c4df33.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/valpovo_kolo.50205472.jpg';
  },
  function(e, a) {
    e.exports = require('i18next-express-middleware');
  },
  function(e, a) {
    e.exports = require('path');
  },
  function(e, a) {
    e.exports = require('react-transition-group');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Typography');
  },
  function(e, a) {
    e.exports = require('date-fns');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/colors');
  },
  function(e, a) {
    e.exports = require('serialize-javascript');
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'ExpandableBox', function() {
        return g;
      });
    var i = t(22),
      n = t.n(i),
      o = t(0),
      r = t.n(o),
      s = t(3),
      l = t.n(s),
      c = t(5),
      u = t.n(c),
      m = t(235),
      d = t.n(m),
      p = t(106),
      g = function(e) {
        var a = e.text,
          t = e.minHeight,
          i = Object(p.useExpandableBoyStyles)(),
          s = r.a.useState(!1),
          c = n()(s, 2),
          m = c[0],
          g = c[1],
          j = r.a.useState(t),
          k = n()(j, 2),
          v = k[0],
          h = k[1];
        return (
          Object(o.useEffect)(function() {
            h(document.getElementById('Box').scrollHeight + 32);
          }),
          r.a.createElement(
            'div',
            { className: i.Wrapper },
            r.a.createElement(
              l.a,
              { id: 'Box', className: u()(i.Text, { Expanded: m }), style: { maxHeight: m ? v : t } },
              a,
              r.a.createElement(l.a, { className: u()(i.ShadowBox, { Expanded: m }) })
            ),
            r.a.createElement(
              'div',
              {
                className: u()(i.Expander, { Expanded: m }),
                onClick: function() {
                  return g(!m);
                },
              },
              r.a.createElement(
                d.a,
                { viewBox: '0 0 '.concat(m ? '20.617 9.309' : '16.617 12.309') },
                r.a.createElement('path', { d: 'M0,0,8.894,8.894,17.789,0' })
              )
            )
          )
        );
      };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(39),
      n = t.n(i),
      o = t(52),
      r = function(e, a, t) {
        var i = n()(e, a);
        return i ? i.toLowerCase().indexOf(t.toString().toLowerCase()) > -1 : !t;
      };
    a.default = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(o.default)('collection'),
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object(o.default)('term'),
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object(o.default)('filterKeys');
      return e.filter(function(e) {
        return t.reduce(function(t, i) {
          return t || r(e, i, a);
        }, !1);
      });
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t.n(i);
    a.default = function(e, a, t, i) {
      var o = e[a],
        r = null;
      return (
        Array.isArray(i) || (i = [i]),
        n.a.Children.forEach(o, function(e) {
          i.includes(e.type) || (r = new Error('Invalid child of '.concat(t)));
        }),
        r
      );
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(39),
      n = t.n(i);
    a.default = function(e, a) {
      return e.length && n()(e[0], a) && n()(e[0], a).localeCompare
        ? function(e, t) {
            return n()(e, a).localeCompare(n()(t, a));
          }
        : a;
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'Methods', function() {
        return i;
      }),
      t.d(a, 'STATUS', function() {
        return n;
      });
    var i = Object.freeze({ POST: 'POST', GET: 'GET', DELETE: 'DELETE', PATCH: 'PATCH', PUT: 'PUT' }),
      n = Object.freeze({
        OK: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZIED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        UNPROCESSABLE_ENTITY: 422,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504,
      });
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'intersection', function() {
        return i;
      });
    var i = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return [e, a].reduce(function(e, a) {
        return e.filter(function(e) {
          return a.includes(e);
        });
      });
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(49),
      n = t.n(i);
    a.default = function(e) {
      var a = n.a.parse(e.search);
      return a.redirect ? atob(a.redirect) : null;
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a), (a.default = { USER: 'User', ADMIN: 'Admin' });
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(2),
      n = t.n(i);
    function o(e, a) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        a &&
          (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable;
          })),
          t.push.apply(t, i);
      }
      return t;
    }
    a.default = function(e, a, t) {
      return Object.values(e).map(function(e) {
        return (function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? o(Object(t), !0).forEach(function(a) {
                  n()(e, a, t[a]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : o(Object(t)).forEach(function(a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                });
          }
          return e;
        })({}, e, n()({}, a, t));
      });
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'getUrl', function() {
        return i;
      });
    var i = function(e) {
      return e
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[,]/g, '')
        .replace(/[á]/g, 'a')
        .replace(/[é]/g, 'e')
        .replace(/[í]/g, 'i')
        .replace(/[óöő]/g, 'o')
        .replace(/[úüű]/g, 'u')
        .replace(/[ćč]/g, 'c')
        .replace(/[đ]/g, 'd')
        .replace(/[š]/g, 's')
        .replace(/[ž]/g, 'z');
    };
  },
  function(e, a, t) {
    'use strict';
    t.r(a);
    var i = t(0),
      n = t(247),
      o = t.n(n),
      r = 'undefined' != typeof window;
    a.default = function(e) {
      var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
        t = o()(e, a);
      Object(i.useLayoutEffect)(
        function() {
          if (r)
            return (
              window.addEventListener('scroll', t),
              function() {
                window.removeEventListener('scroll', t);
              }
            );
        },
        [t]
      );
    };
  },
  function(e, a) {
    e.exports = require('http');
  },
  function(e, a) {
    e.exports = require('react-dom/server');
  },
  function(e, a) {
    e.exports = require('react-helmet');
  },
  function(e, a) {
    e.exports = require('i18next-node-fs-backend');
  },
  function(e, a) {
    e.exports = require('html-minifier');
  },
  function(e, a) {
    e.exports = require('cookie-parser');
  },
  function(e, a) {
    e.exports = require('dotenv');
  },
  function(e, a) {
    e.exports = require('compression');
  },
  function(e, a) {
    e.exports = require('http-proxy-middleware');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/CssBaseline');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/SwipeableDrawer');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/ListItem');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/ListItemText');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Collapse');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/ListItemText/ListItemText');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/ListItem/ListItem');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/MenuItem');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/FormControl');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Select');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Popper');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Grow');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Paper');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/ClickAwayListener');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/MenuList');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons/ExpandMore');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Button');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Dialog');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/DialogContent');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/DialogActions');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/styles/useTheme');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons/Clear');
  },
  function(e, a) {
    e.exports = require('react-dom');
  },
  function(e, a) {
    e.exports = require('history');
  },
  function(e, a) {
    e.exports = require('i18next-browser-languagedetector');
  },
  function(e, a) {
    e.exports = require('i18next-xhr-backend');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Container');
  },
  function(e, a) {
    e.exports = require('react-swipeable-views');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/SvgIcon');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons/CheckCircle');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons/Error');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons/Info');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons/Close');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/IconButton');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/SnackbarContent');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons/Warning');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/styles/colorManipulator');
  },
  function(e, a) {
    e.exports = require('@material-ui/icons/ExpandLess');
  },
  function(e, a) {
    e.exports = require('@material-ui/core/Avatar/Avatar');
  },
  function(e, a) {
    e.exports = require('react-router-config');
  },
  function(e, a) {
    e.exports = require('lodash/throttle');
  },
  function(e, a, t) {
    e.exports = t(75);
  },
  function(e, a) {
    e.exports = require('process');
  },
  function(e, a, t) {
    var i = {
      './': 75,
      './assets/fonts/merriweather.bold.ttf': 117,
      './assets/fonts/merriweather.regular.ttf': 118,
      './assets/images/10zgCover.jpg': 119,
      './assets/images/adam.jpg': 120,
      './assets/images/adrian.jpg': 121,
      './assets/images/alsopahok_2009a_mini.jpg': 122,
      './assets/images/alsopahok_2009b_mini.jpg': 123,
      './assets/images/alsopahok_2009c_mini.jpg': 124,
      './assets/images/alsopahok_2009d_mini.jpg': 251,
      './assets/images/alsopahok_2017_mini.jpg': 125,
      './assets/images/becs_2007_mini.jpg': 126,
      './assets/images/brdovec_2005_mini.jpg': 127,
      './assets/images/brdovec_2005b_mini.jpg': 128,
      './assets/images/brdovec_2007_mini.jpg': 129,
      './assets/images/dakovo_2006_mini.jpg': 130,
      './assets/images/eisenstadt1_2008_mini.jpg': 131,
      './assets/images/eisenstadt2_2008_mini.jpg': 132,
      './assets/images/eisenstadt3_2008_mini.jpg': 133,
      './assets/images/falunap_2003_mini.jpg': 134,
      './assets/images/fertod_2007_mini.jpg': 135,
      './assets/images/fertorakos_2007_mini.jpg': 136,
      './assets/images/gyor_2006_mini.jpg': 137,
      './assets/images/gyor_2007_mini.jpg': 138,
      './assets/images/hidegseg_2007_mini.jpg': 139,
      './assets/images/homoki_lakodalmas_2006_mini.jpg': 140,
      './assets/images/horvat_bal_2007_mini.jpg': 141,
      './assets/images/horvat_bal_2017_mini.jpg': 142,
      './assets/images/hr-flag.png': 116,
      './assets/images/hu-flag.png': 115,
      './assets/images/jozsi.jpg': 143,
      './assets/images/kajkavci_20a_mini.jpg': 144,
      './assets/images/kajkavci_20b_mini.jpg': 145,
      './assets/images/kajkavci_20c_mini.jpg': 146,
      './assets/images/kajkavci_20d_mini.jpg': 147,
      './assets/images/kajkavci_20e_mini.jpg': 148,
      './assets/images/krisztina.png': 149,
      './assets/images/lemezbemutato1_2007_mini.jpg': 150,
      './assets/images/lemezbemutato2_2007_mini.jpg': 252,
      './assets/images/lemezbemutato_2007_mini.jpg': 151,
      './assets/images/logo.png': 55,
      './assets/images/map.png': 152,
      './assets/images/mate.jpg': 153,
      './assets/images/mosonmagyarovar_2007_mini.jpg': 154,
      './assets/images/mosonmagyarovar_2017_mini.jpg': 155,
      './assets/images/mskCover.jpg': 156,
      './assets/images/nagrada_savez_mini.jpg': 157,
      './assets/images/nemzeti_muzeum_2005_mini.jpg': 158,
      './assets/images/no-image.png': 56,
      './assets/images/react-icon.png': 159,
      './assets/images/rsnCover.jpg': 160,
      './assets/images/stCover.jpg': 161,
      './assets/images/tajhaz_2006_mini.jpg': 162,
      './assets/images/tajhaz_2006b_mini.jpg': 163,
      './assets/images/tajhaz_2017_mini.jpg': 164,
      './assets/prizes/alsopahok_2009.jpg': 253,
      './assets/prizes/arany_pava_2008.jpg': 254,
      './assets/prizes/arany_pava_nagydij.gif': 255,
      './assets/prizes/arany_pava_nagydij_oklevel_alsopahok.gif': 256,
      './assets/prizes/drzavna_nagrada.jpg': 165,
      './assets/prizes/kota_dij_2.gif': 257,
      './assets/serverErrorPage': 88,
      './assets/serverErrorPage.js': 88,
      './assets/thumbnails/fala.jpg': 166,
      './assets/thumbnails/johnny_guitar.jpg': 167,
      './assets/thumbnails/kakve_cura_crne_oci_ima.jpg': 168,
      './assets/thumbnails/lijepom_nasom.jpg': 169,
      './assets/thumbnails/medimurje.jpg': 170,
      './assets/thumbnails/mi_smo_kajkavci.jpg': 171,
      './assets/thumbnails/orf.jpg': 172,
      './assets/thumbnails/ova_nasa_livada-i_dodi_lolo.jpg': 173,
      './assets/thumbnails/pod_starim_krovovima.jpg': 174,
      './assets/thumbnails/podravinsko_kolo.jpg': 175,
      './assets/thumbnails/sad_cu_ti_povidat.jpg': 176,
      './assets/thumbnails/svirci_moji.jpg': 177,
      './assets/thumbnails/valpovo_kolo.jpg': 178,
      './client': 78,
      './client/': 78,
      './client/index': 78,
      './client/index.js': 78,
      './components': 20,
      './components/': 20,
      './components/Button/Button': 76,
      './components/Button/Button.jsx': 76,
      './components/Dialog/Dialog': 77,
      './components/Dialog/Dialog.jsx': 77,
      './components/ExpandableBox/ExpandableBox': 187,
      './components/ExpandableBox/ExpandableBox.jsx': 187,
      './components/ExpandableBox/styles': 106,
      './components/ExpandableBox/styles.js': 106,
      './components/File/FilePreview': 79,
      './components/File/FilePreview.jsx': 79,
      './components/Image/Image': 29,
      './components/Image/Image.jsx': 29,
      './components/LanguageSelect/LanguageSelect': 28,
      './components/LanguageSelect/LanguageSelect.jsx': 28,
      './components/NotFound/NotFound': 34,
      './components/NotFound/NotFound.jsx': 34,
      './components/Page/Page': 13,
      './components/Page/Page.jsx': 13,
      './components/SnackbarContent/SnackbarContent': 80,
      './components/SnackbarContent/SnackbarContent.jsx': 80,
      './components/index': 20,
      './components/index.js': 20,
      './config/i18n': 42,
      './config/i18n.js': 42,
      './constants/Constants': 38,
      './constants/Constants.js': 38,
      './constants/Jss': 1,
      './constants/Jss.js': 1,
      './env': 23,
      './env/': 23,
      './env/development': 90,
      './env/development.js': 90,
      './env/general': 93,
      './env/general.js': 93,
      './env/index': 23,
      './env/index.js': 23,
      './env/production': 92,
      './env/production.js': 92,
      './env/staging': 91,
      './env/staging.js': 91,
      './i18n': 41,
      './i18n.js': 41,
      './index': 75,
      './index.js': 75,
      './modules/App/App': 40,
      './modules/App/App.jsx': 40,
      './modules/App/AppLoader': 107,
      './modules/App/AppLoader.jsx': 107,
      './modules/App/styles': 108,
      './modules/App/styles.js': 108,
      './modules/ArticlesPage/ArticleDialog': 99,
      './modules/ArticlesPage/ArticleDialog.jsx': 99,
      './modules/ArticlesPage/ArticlesPage': 63,
      './modules/ArticlesPage/ArticlesPage.jsx': 63,
      './modules/ArticlesPage/styles': 45,
      './modules/ArticlesPage/styles.js': 45,
      './modules/ConcertsPage/ConcertsPage': 68,
      './modules/ConcertsPage/ConcertsPage.jsx': 68,
      './modules/ConcertsPage/concerts': 69,
      './modules/ConcertsPage/concerts.js': 69,
      './modules/ConcertsPage/styles': 102,
      './modules/ConcertsPage/styles.js': 102,
      './modules/ContactsPage/ContactsPage': 71,
      './modules/ContactsPage/ContactsPage.jsx': 71,
      './modules/ContactsPage/styles': 105,
      './modules/ContactsPage/styles.js': 105,
      './modules/DiscographyPage/DiscographyPage': 61,
      './modules/DiscographyPage/DiscographyPage.jsx': 61,
      './modules/DiscographyPage/Disk': 37,
      './modules/DiscographyPage/Disk.jsx': 37,
      './modules/DiscographyPage/LyricsDialog': 95,
      './modules/DiscographyPage/LyricsDialog.jsx': 95,
      './modules/DiscographyPage/disks': 18,
      './modules/DiscographyPage/disks.js': 18,
      './modules/DiscographyPage/styles': 31,
      './modules/DiscographyPage/styles.js': 31,
      './modules/Footer/Footer': 109,
      './modules/Footer/Footer.jsx': 109,
      './modules/Footer/styles': 110,
      './modules/Footer/styles.js': 110,
      './modules/Header/DesktopHeader': 86,
      './modules/Header/DesktopHeader.jsx': 86,
      './modules/Header/DropdownMenu': 87,
      './modules/Header/DropdownMenu.jsx': 87,
      './modules/Header/Hamburger': 85,
      './modules/Header/Hamburger.jsx': 85,
      './modules/Header/Header': 83,
      './modules/Header/Header.jsx': 83,
      './modules/Header/MenuItem': 15,
      './modules/Header/MenuItem.jsx': 15,
      './modules/Header/MobileHeader': 84,
      './modules/Header/MobileHeader.jsx': 84,
      './modules/Header/styles': 25,
      './modules/Header/styles.js': 25,
      './modules/HistoryPage/HistoryPage': 58,
      './modules/HistoryPage/HistoryPage.jsx': 58,
      './modules/HomePage/HomePage': 59,
      './modules/HomePage/HomePage.jsx': 59,
      './modules/HomePage/styles': 94,
      './modules/HomePage/styles.js': 94,
      './modules/ImagesPage/ImageViewerDialog': 103,
      './modules/ImagesPage/ImageViewerDialog.jsx': 103,
      './modules/ImagesPage/ImagesPage': 70,
      './modules/ImagesPage/ImagesPage.jsx': 70,
      './modules/ImagesPage/images': 51,
      './modules/ImagesPage/images.js': 51,
      './modules/ImagesPage/styles': 47,
      './modules/ImagesPage/styles.js': 47,
      './modules/InterviewsPage/InterviewsPage': 64,
      './modules/InterviewsPage/InterviewsPage.jsx': 64,
      './modules/InterviewsPage/styles': 100,
      './modules/InterviewsPage/styles.js': 100,
      './modules/Main/Main': 81,
      './modules/Main/Main.jsx': 81,
      './modules/MembersPage/Member': 33,
      './modules/MembersPage/Member.jsx': 33,
      './modules/MembersPage/MembersPage': 60,
      './modules/MembersPage/MembersPage.jsx': 60,
      './modules/MembersPage/styles': 43,
      './modules/MembersPage/styles.js': 43,
      './modules/PrizesPage/PrizesPage': 65,
      './modules/PrizesPage/PrizesPage.jsx': 65,
      './modules/PrizesPage/prizes': 66,
      './modules/PrizesPage/prizes.js': 66,
      './modules/PrizesPage/styles': 101,
      './modules/PrizesPage/styles.js': 101,
      './modules/TamburaHistoryPage/TamburaHistoryPage': 67,
      './modules/TamburaHistoryPage/TamburaHistoryPage.jsx': 67,
      './modules/VideosPage/VideoDialog': 97,
      './modules/VideosPage/VideoDialog.jsx': 97,
      './modules/VideosPage/VideosPage': 62,
      './modules/VideosPage/VideosPage.jsx': 62,
      './modules/VideosPage/styles': 44,
      './modules/VideosPage/styles.js': 44,
      './modules/VideosPage/videos': 96,
      './modules/VideosPage/videos.js': 96,
      './routes': 27,
      './routes.js': 27,
      './server': 54,
      './server/': 54,
      './server/html': 111,
      './server/html.js': 111,
      './server/index': 54,
      './server/index.js': 54,
      './server/initRoutes': 112,
      './server/initRoutes.js': 112,
      './theme': 30,
      './theme/': 30,
      './theme/fonts': 57,
      './theme/fonts.js': 57,
      './theme/index': 30,
      './theme/index.js': 30,
      './utils/arrayFilter': 188,
      './utils/arrayFilter.js': 188,
      './utils/childType': 189,
      './utils/childType.js': 189,
      './utils/date': 98,
      './utils/date.js': 98,
      './utils/getArraySortComparer': 190,
      './utils/getArraySortComparer.js': 190,
      './utils/getCroatianMonthName': 46,
      './utils/getCroatianMonthName.js': 46,
      './utils/history': 89,
      './utils/history.js': 89,
      './utils/http': 191,
      './utils/http.js': 191,
      './utils/intersection': 192,
      './utils/intersection.js': 192,
      './utils/language': 104,
      './utils/language.js': 104,
      './utils/redirectLink': 193,
      './utils/redirectLink.js': 193,
      './utils/renderRoutes': 82,
      './utils/renderRoutes.js': 82,
      './utils/requiredParam': 52,
      './utils/requiredParam.js': 52,
      './utils/roles': 194,
      './utils/roles.js': 194,
      './utils/transformTranslation': 195,
      './utils/transformTranslation.js': 195,
      './utils/urlFromTitle': 196,
      './utils/urlFromTitle.js': 196,
      './utils/useScrollListener': 197,
      './utils/useScrollListener.js': 197,
    };
    function n(e) {
      var a = o(e);
      return t(a);
    }
    function o(e) {
      if (!t.o(i, e)) {
        var a = new Error("Cannot find module '" + e + "'");
        throw ((a.code = 'MODULE_NOT_FOUND'), a);
      }
      return i[e];
    }
    (n.keys = function() {
      return Object.keys(i);
    }),
      (n.resolve = o),
      (e.exports = n),
      (n.id = 250);
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/alsopahok_2009d_mini.c8202779.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/lemezbemutato2_2007_mini.04896ad6.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/alsopahok_2009.c28c993d.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/arany_pava_2008.6fce48bd.jpg';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/arany_pava_nagydij.b9d0881c.gif';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/arany_pava_nagydij_oklevel_alsopahok.1b155bc7.gif';
  },
  function(e, a, t) {
    e.exports = t.p + 'static/media/kota_dij_2.a6990389.gif';
  },
  function(e, a) {
    e.exports = require('fs');
  },
  function(e, a) {
    function t(e) {
      var a = new Error("Cannot find module '" + e + "'");
      throw ((a.code = 'MODULE_NOT_FOUND'), a);
    }
    (t.keys = function() {
      return [];
    }),
      (t.resolve = t),
      (e.exports = t),
      (t.id = 259);
  },
  function(e) {
    e.exports = JSON.parse(
      '{"client":{"js":"/static/js/bundle.6fd57371.js"},"":{"jpg":["/static/media/10zgCover.30a58072.jpg","/static/media/adam.1f61cbc2.jpg","/static/media/adrian.be715151.jpg","/static/media/alsopahok_2009.c28c993d.jpg","/static/media/alsopahok_2009a_mini.efc2e304.jpg","/static/media/alsopahok_2009b_mini.240ecdde.jpg","/static/media/alsopahok_2009c_mini.61ef619d.jpg","/static/media/alsopahok_2009d_mini.c8202779.jpg","/static/media/alsopahok_2017_mini.c9e8f574.jpg","/static/media/arany_pava_2008.6fce48bd.jpg","/static/media/becs_2007_mini.fc8aee01.jpg","/static/media/brdovec_2005_mini.2a5dbe59.jpg","/static/media/brdovec_2005b_mini.39227d57.jpg","/static/media/brdovec_2007_mini.ab6fb6b0.jpg","/static/media/dakovo_2006_mini.8cbbefaf.jpg","/static/media/drzavna_nagrada.a61a710e.jpg","/static/media/eisenstadt1_2008_mini.594ade04.jpg","/static/media/eisenstadt2_2008_mini.f7ee00ac.jpg","/static/media/eisenstadt3_2008_mini.4fac7274.jpg","/static/media/fala.f4ce2af8.jpg","/static/media/falunap_2003_mini.c5266fe8.jpg","/static/media/fertod_2007_mini.f3e7d8dc.jpg","/static/media/fertorakos_2007_mini.d0e0c8c2.jpg","/static/media/gyor_2006_mini.0516cf7b.jpg","/static/media/gyor_2007_mini.2baa727a.jpg","/static/media/hidegseg_2007_mini.e35c24df.jpg","/static/media/homoki_lakodalmas_2006_mini.d8702562.jpg","/static/media/horvat_bal_2007_mini.8ed1fbfb.jpg","/static/media/horvat_bal_2017_mini.00affe31.jpg","/static/media/johnny_guitar.100a21d6.jpg","/static/media/jozsi.3f99ba72.jpg","/static/media/kajkavci_20a_mini.d50aee0d.jpg","/static/media/kajkavci_20b_mini.3a2ad655.jpg","/static/media/kajkavci_20c_mini.f374d6eb.jpg","/static/media/kajkavci_20d_mini.46f82b58.jpg","/static/media/kakve_cura_crne_oci_ima.b057737f.jpg","/static/media/lemezbemutato1_2007_mini.0f52b583.jpg","/static/media/lemezbemutato2_2007_mini.04896ad6.jpg","/static/media/lemezbemutato_2007_mini.720f9679.jpg","/static/media/lijepom_nasom.6bb152e0.jpg","/static/media/mate.a4988e04.jpg","/static/media/medimurje.1909dc1c.jpg","/static/media/mi_smo_kajkavci.0a6a1a89.jpg","/static/media/mosonmagyarovar_2007_mini.c249c8db.jpg","/static/media/mosonmagyarovar_2017_mini.e419577a.jpg","/static/media/mskCover.d92ed32b.jpg","/static/media/nagrada_savez_mini.7c5fd6f9.jpg","/static/media/nemzeti_muzeum_2005_mini.b3832d5b.jpg","/static/media/orf.43687330.jpg","/static/media/ova_nasa_livada-i_dodi_lolo.34832996.jpg","/static/media/pod_starim_krovovima.301ff791.jpg","/static/media/podravinsko_kolo.a7252040.jpg","/static/media/rsnCover.cde98fbb.jpg","/static/media/sad_cu_ti_povidat.c3eb74d0.jpg","/static/media/stCover.ed416a13.jpg","/static/media/svirci_moji.10c4df33.jpg","/static/media/tajhaz_2006_mini.d797862f.jpg","/static/media/tajhaz_2006b_mini.7690fe98.jpg","/static/media/tajhaz_2017_mini.58953e17.jpg","/static/media/valpovo_kolo.50205472.jpg"],"gif":["/static/media/arany_pava_nagydij.b9d0881c.gif","/static/media/arany_pava_nagydij_oklevel_alsopahok.1b155bc7.gif","/static/media/kota_dij_2.a6990389.gif"],"png":["/static/media/hr-flag.02a00bd7.png","/static/media/hu-flag.b7d087a4.png","/static/media/krisztina.9efe5c51.png","/static/media/logo.da684dce.png","/static/media/map.274e881b.png","/static/media/no-image.a6dcf69d.png","/static/media/react-icon.c00cd8c7.png"],"ttf":["/static/media/merriweather.bold.e4a089e6.ttf","/static/media/merriweather.regular.f417c6ec.ttf"]}}'
    );
  },
]);
//# sourceMappingURL=server.js.map
