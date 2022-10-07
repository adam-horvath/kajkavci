import { FC, useEffect, useState } from 'react';
import i18n from 'i18next';

import { News, NewsResponse } from 'models';
import { request } from 'utils';
import './HomePage.scss';
import classNames from 'classnames';

export const HomePage: FC = () => {
  const [news, setNews] = useState<News[]>();

  const translate = (hu: string, hr: string) => (i18n.language === 'hr' ? hr : hu);

  useEffect(() => {
    (async () => {
      const { news } = await request<NewsResponse>({ resource: '/json/news.json' });
      setNews(news);
    })();
  }, []);

  return !news ? null : (
    <div className={'HomePage'}>
      {news.map((n) => (
        <>
          {n.titleHu ? (
            <div className={'SectionTitleContainer mb-5'}>
              <div className={'SectionTitle'}>{translate(n.titleHu, n.titleHr)}</div>
              <div className={'TitleBorder'} />
            </div>
          ) : null}
          {n.descriptionHu ? <div className={'News mb-5'}>{translate(n.descriptionHu, n.descriptionHr)}</div> : null}
          <div className={classNames('ImageContainer mb-5', { Center: n.wide === 'true' })}>
            {n.imgUrls?.length
              ? n.imgUrls.map((url) => (
                  <div
                    key={url}
                    className={classNames('ImageWrapper', { Portrait: n.portrait === 'true', Wide: n.wide === 'true' })}
                    style={{ backgroundImage: `url("/img/${url}")` }}
                  />
                ))
              : null}
          </div>
        </>
      ))}
    </div>
  );
};
