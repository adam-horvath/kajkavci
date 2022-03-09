import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';

const renderRoutes = (routes, classes, location, extraProps = {}, switchProps = {}) =>
  routes ? (
    <TransitionGroup className={classes.transitionGroup}>
      <CSSTransition key={location.pathname} className={classNames('fade', classes.routeSection)} timeout={300}>
        <section>
          <Switch {...switchProps} location={location}>
            {routes.map((route, i) =>
              !route.redirect ? (
                <Route
                  sensitive
                  key={route.key || i}
                  path={route.path}
                  exact={route.exact}
                  strict={route.strict}
                  render={(props) => {
                    if (props.staticContext) {
                      props.staticContext.status = route.status || 200;
                    }

                    return route.render ? (
                      route.render({ ...props, ...extraProps, route: route })
                    ) : (
                      <route.component {...props} {...extraProps} route={route} pages={routes} />
                    );
                  }}
                />
              ) : (
                <Redirect
                  from={route.from}
                  to={route.to}
                  key={route.key || `${route.from}_${route.to}`}
                  exact={route.exact}
                />
              )
            )}
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  ) : null;

export default renderRoutes;
