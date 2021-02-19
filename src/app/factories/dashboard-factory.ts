import { OcInfraModule, NavigationService } from '@diaas/ux-web';

export class DashboardFactory {

    /**
     *  Allows make a naviogation from edit action icon of a quote row to a Quote detail page
     * @param params
     */
    public navToQuote(params) {
        const customParams: any = {};
        customParams.url = 'quote';
        customParams.link = params;
        customParams.alias = null;
        OcInfraModule.AppInjector.get(NavigationService).navigateTo('/screen/' + customParams.url,
        customParams.link.href, customParams.alias);
    }
}
