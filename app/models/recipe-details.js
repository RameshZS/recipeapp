import Model, { attr } from '@ember-data/model';

export default class RecipeDetailsModel extends Model {

  @attr recipe_name;
  @attr time;
  @attr type;
  @attr image;
  @attr Rating;
  @attr ingredients;
  @attr level;
  @attr timeManageMent;
}
