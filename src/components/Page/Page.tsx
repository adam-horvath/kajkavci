import { ComponentType, FC } from 'react';

import { useTranslation } from '../Hooks/useTranslation';
import './Page.scss';

export interface PageProps {}

export const Page = <P extends PageProps>(WrappedComponent: ComponentType<P>, titleKey?: string) => {
  const PageComponent: FC<PageProps> = (props) => {
    const { t } = useTranslation();
    return (
      <div>
        <div className={'Page MainContainer container'}>
          {titleKey ? (
            <div className={'PageTitleContainer mb-2'}>
              <div className={'Title PageTitle'}>{t(titleKey)}</div>
              <div className={'TitleBorder PageTitleBorder'} />
            </div>
          ) : null}
          <WrappedComponent {...(props as P)} />
        </div>
      </div>
    );
  };

  return PageComponent;
};
