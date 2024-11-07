import { FC, useEffect, useState } from 'react';
import { isAfter, isSameDay } from 'date-fns';
import classNames from 'classnames';

import { useTranslation } from 'components';
import { Concert, Concerts, Country } from 'models';
import { getDate, request } from 'utils';
import './ConcertsPage.scss';

export const ConcertsPage: FC = () => {
  const { t } = useTranslation();

  const [concerts, setConcerts] = useState<Concerts>();

  useEffect(() => {
    (async () => {
      const result = await request<Concerts>({ resource: '/json/concerts.json' });
      setConcerts(result);
    })();
  }, []);

  const getCountry = (country?: Country) => (country ? ` (${t(country)})` : '');

  const isFuture = (date: Date) => isAfter(date, new Date()) || isSameDay(date, new Date());

  return !concerts ? null : (
    <div className={'ConcertsContainer'}>
      {Object.keys(concerts).map((year) => (
        <div key={year}>
          <div className={'Year'}>{year}</div>
          <div>
            {concerts[year].map((concert: Concert, index: number) => {
              const { month, day, location, country } = concert;
              return (
                <div
                  className={classNames('Concert', { Future: concert.isoDate && isFuture(new Date(concert.isoDate)) })}
                  key={`${month}-${day}-${location}-${index}`}
                >
                  {`${getDate(concert)} - ${location}${getCountry(country)}`}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
