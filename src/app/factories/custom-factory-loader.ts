import { DefaultCustomFactory } from './default-custom-factory';
import { DashboardFactory } from './dashboard-factory';
import { QuoteFactory } from './quote-factory';
import { FactoryLoader } from '@diaas/ux-web';

export class CustomFactoryLoader implements FactoryLoader {

    getCustomFactory(factory: string) { //add your factory to execute some custom  function
        switch (factory) {
            case 'dashboardFactory': return new DashboardFactory();
            case 'quoteFactory': return new QuoteFactory();
            default: return new DefaultCustomFactory();
        }
    }

    getCustomPropertyFactory() {
        return null; // if you want to override by default behavor add custom models
                    // and add the swith here like for a customFactory
    }
}
