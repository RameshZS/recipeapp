import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class RecipePreviewController extends Controller {
  @tracked currentRecipeId;

  @action
  forwardAction(recipe_id) {
    let lastId = this.store.peekAll('recipe-details').length;
    this.currentRecipeId = Number(recipe_id);
    if (this.currentRecipeId < lastId-1) {
      console.log('hi');
      this.currentRecipeId++;
      this.transitionToRoute('/recipe-preview/' + this.currentRecipeId);
    } else {
      alert('This is the final Recipe');
    }
  }

  @action
  previousAction(recipe_id){
    this.currentRecipeId = Number(recipe_id);
    if (this.currentRecipeId > 0) {
      this.currentRecipeId--;
      this.transitionToRoute('/recipe-preview/' + this.currentRecipeId);
    } else {
      alert('this one is the first recipe.Please click next button and visit');
    }
  }
}
