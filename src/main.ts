import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {startOpenCensusWeb} from '@opencensus/opencensus-web';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

const AGENT_GATEWAY_ENDPOINT =
    'http://35.188.49.227/v1/export/spans?key=AIzaSyD9uVrCjOi7mf6vKYAmTC7PSz2bqQ0vYbQ';
startOpenCensusWeb(AGENT_GATEWAY_ENDPOINT);

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(
      err => console.log(err));
});
