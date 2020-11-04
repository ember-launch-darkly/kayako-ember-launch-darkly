import Route from '@ember/routing/route';
import { initialize, variation } from 'ember-launch-darkly';

import config from 'dummy/config/environment';

export default class ApplicationRoute extends Route {
  async beforeModel() {
    let { clientSideId } = config.launchDarkly;
    let user = { key: 'cheese' };

    await initialize(clientSideId, user);
  }

  model() {
    console.log('application route, model hook:', variation('foo'));
  }
}
