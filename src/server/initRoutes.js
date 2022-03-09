import { matchRoutes } from 'react-router-config';

export default async ({ routes, req, res }) => {
  const pathname = req.url.includes('?') ? req.url.split('?')[0] : req.url;
  const matches = matchRoutes(routes, pathname).map(({ route, match }) => {
    return { match };
  });

  return {
    matches: matches.filter(x => x),
  };
};
