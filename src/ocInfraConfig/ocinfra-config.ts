import { FactoryLoader, OcInfraConfig } from '@diaas/ux-web';
import { CustomFactoryLoader } from 'src/app/factories/custom-factory-loader';

import { AppConfig } from '../app/config/app.config';

export function CustomFactoryLoaderFunction() {
    return new CustomFactoryLoader();
}

export const ocInfraConfig: OcInfraConfig = {
    hostURL: {
      defaultHostUrl: AppConfig.hostURL,
      multiHostUrl: []
    },
    debug: true, // Setted to TRUE will show console.log() to help developers
    metamodelBaseURL: './assets/metamodel/',
    modifiedHeaderTag: '',
    deletedHeaderTag: '',
    apiDateSeparator: '-',
    apiDateFormat: 'yyyy-mm-dd',
    dateFormat: 'dd/mm/yyyy',
    custom: {
      provide: FactoryLoader,
      useFactory: CustomFactoryLoaderFunction
    },
    headers: {
      defaultHeader: {
          'content-type': 'application/json',
          NSP_USERID: 'ABOMBERE'
      },
      multiHostUrlHeader: []
  },
    typeAheadMinChar: 2,
    printErrors: false,
    defaultLanguage: 'en-gb',
    recaptchaSiteKey: '',
    landingPage: 'dashboard',
    loginPage: 'login',
    themes: ['dxc-group', 'dxc'],
  floatLabel: 'auto',
  dateOptions: {
      dateFormat: 'dd/MM/yyyy',
      firstDayOfWeek: [
          {
              language: [
                  'en-gb'
              ],
              firstDayOfWeek: 0
          }
      ]
  },
  chatEndPoint: 'http://localhost:3000',
  textToShow: '',
  useSessionStorage: false,
};
