import serialize from 'serialize-javascript';

export default ({ helmet, assets, markup, css, i18n }) => {
  return `
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()} style="height: 100%">
    <head itemscope itemtype="http://schema.org/WebSite">
        <title>Kajkavci</title>
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="noodp"/>
        <meta name="robots" content="noydir"/>
        
        <style id="jss-server-side">${css}</style>
        
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
    </head>
    <body> 
        <div id="root" style="min-height: 100%; position: relative">${markup}</div>
        <script>
            window.__I18N_STORE__ = ${serialize(i18n.initialI18nStore)};
            window.__INITIAL_LANGUAGE__ = ${serialize(i18n.initialLanguage)};
        </script>
         ${
           process.env.NODE_ENV === 'production'
             ? `<script async src="${assets.client.js}" defer></script>`
             : `<script async src="${assets.client.js}" defer crossorigin></script>`
         }
    </body>
    </html>`;
};
