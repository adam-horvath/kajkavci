import { ComponentType } from 'react';

export interface RouteConfigurationModel {
  path?: string;
  component?: ComponentType<any>;
  linkNameTranslateKey?: string;
  exact?: boolean;
  redirect?: boolean;
  to?: string;
}
