import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditRecipeController extends Controller {
  value = {
    categoryType: null,
    level: null,
    rating: null,
  };
  @action
  editRecipe() {
    if (this.value.categoryType != null) {
      this.model.recipeData.type = this.value.categoryType;
      this.model.recipeData.save();
    } else if (this.value.level != null) {
      this.model.recipeData.level = this.value.level;
      this.model.recipeData.save();
    } else if (this.value.rating != null) {
      this.model.recipeData.Rating = this.value.rating;
      this.model.recipeData.save();
    } else {
      this.model.recipeData.save();
      this.model.recipeData.timeManageMent[0].readyin = this.model.recipeData.time;
      this.model.recipeData.save();
    }
  }
}
