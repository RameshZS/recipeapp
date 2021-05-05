import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesappRoute extends Route {
  @service store;
  model(params) {
    const { user_id } = params;
    return this.store.peekAll('recipe-details').filter((element) => {
      return element.id <8;
    });
  }
}
