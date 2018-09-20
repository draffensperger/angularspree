import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {Ng2UiAuthModule} from 'ng2-ui-auth';
import {ToastrModule} from 'ngx-toastr';

import {environment} from '../environments/environment';

// Components
import {AppComponent} from './app.component';
import {metaReducers, reducers} from './app.reducers';
// Routes
import {routes} from './app.routes';
import {AppPreloadingStrategy} from './app_preloading_strategy';
import {CoreModule} from './core/index';
import {HomeModule} from './home/index';
import {CheckoutFooterComponent} from './layout/checkout-footer/checkout-footer.component';
import {CheckoutHeaderComponent} from './layout/checkout-header/checkout-header.component';
import {LayoutModule} from './layout/index';
import {myAuthConfig} from './oauth_config';
// Modules
import {SharedModule} from './shared/index';
import {UserModule} from './user/index';


@NgModule({
  declarations:
      [AppComponent, CheckoutHeaderComponent, CheckoutFooterComponent],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreloadingStrategy,
      initialNavigation: 'enabled'
    }),
    StoreModule.forRoot(reducers, {metaReducers}),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See:
     * https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]), BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'ng-spree'}),
    BrowserTransferStateModule, TransferHttpCacheModule, FormsModule,
    HttpModule, HomeModule, LayoutModule, Ng2UiAuthModule.forRoot(myAuthConfig),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressAnimation: 'increasing'
    }),
    CoreModule, SharedModule,
    ServiceWorkerModule.register(
        'ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {
}
