import { ComponentType, FC, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { AppLoader, DesktopHeader, Footer, AlterMobileHeader } from 'components';
import routes from 'routes/routes';
import './App.scss';

export const App: FC = () => {
  const location = useLocation();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <AppLoader show={loading} />
      <div className={'Main'} id={'Main'}>
        <AlterMobileHeader />
        <DesktopHeader />
        <div className={'MainContent'}>
          <section>
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} classNames={'fade'} timeout={800}>
                <Routes>
                  {routes
                    .filter((route) => route.linkNameTranslateKey)
                    .map((route) => {
                      const Component = route.component as ComponentType<any>;
                      return <Route key={route.path} path={route.path || ''} element={<Component />} />;
                    })}
                  <Route path={'*'} element={<Navigate to={{ pathname: '/' }} replace />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};
