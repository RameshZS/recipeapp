import Model, { attr,belongsTo } from '@ember-data/model';

export default class RecipeDetailsModel extends Model {
  @belongsTo('user-details') userName;

  @attr recipe_name;
  @attr time;
  @attr type;
  @attr image;
  @attr Rating;
  @attr ingredients;
  @attr level;
  @attr timeManageMent;
}
