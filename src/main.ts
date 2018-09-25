import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {startOpenCensusWeb} from '@opencensus/opencensus-web';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

startOpenCensusWeb({
  agentEndpoint:
      'http://35.241.12.230/v1/export/spans?key=AIzaSyD9uVrCjOi7mf6vKYAmTC7PSz2bqQ0vYbQ';
});

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(
      err => console.log(err));
});
