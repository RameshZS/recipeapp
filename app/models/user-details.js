import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserDetailsModel extends Model {
  @belongsTo('recipe-details') recipe_name;

  @attr('string') userName;
  @attr('string') userNum;
  @attr('string') password;
  @attr('boolean') state;
}
