import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AddnewRecipeController extends Controller {
  value = {
    categoryType: 'Breakfast',
    level: 'Easy',
    rating: '⭐⭐⭐',
  };
  @action
  addNew() {
    let data = this.store.peekAll('recipe-details');
    let id = Number(data.lastObject.id) + 1;
    if (
      this.recipe_name != undefined &&
      this.time != undefined &&
      this.image != undefined &&
      this.ingredients != undefined &&
      this.preptime != undefined &&
      this.cooktime != undefined
    ) {
      let recipeDetails = {
        id: id,
        recipe_name: this.recipe_name.toUpperCase(),
        time: this.time,
        type: this.value.categoryType,
        image: this.image,
        ingredients: this.ingredients.split(','),
        timeManageMent: [
          {
            prep: this.preptime,
            cook: this.cooktime,
            readyin: this.time,
          },
        ],
        level: this.value.level,
        Rating: this.value.rating,
      };
      let createNewRecipe = this.store.createRecord(
        'recipe-details',
        recipeDetails
      );
      createNewRecipe.save();
      this.transitionToRoute('recipesapp');
    } else {
      alert('Please give all proper value');
    }
  }
}
