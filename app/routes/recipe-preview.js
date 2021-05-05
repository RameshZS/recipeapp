import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipePreviewRoute extends Route {
  @service store;

  model(params) {
    const { recipe_id } = params;
    let singleRecipeData = this.getData(recipe_id);
    let similarRecipes = this.getFilterData(singleRecipeData.type);
    let object = {
      singleRecipeData: singleRecipeData,
      similarRecipes: similarRecipes,
    };
    return object;
  }
  /*get the particular data from emberdata*/
  getData(id) {
    let data = this.store.peekRecord('recipe-details', id);
    return data;
  }
  /*get the record which one is same food category in ember data */
  getFilterData(foodType) {
    let obj = this.store.peekAll('recipe-details').filter((element) => {
      return element.type.includes(foodType);
    });
    return obj;
  }
}
