import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class DeletePageController extends Controller {
  /*Delete the particular record*/
  @action
  deleteRecipe() {
    let id = this.model.id;
    let data = this.store.peekRecord('recipe-details', id);
    data.deleteRecord();
    data.save();
    this.transitionToRoute('recipesapp');
  }
  /*Delete operation cancel method */
  @action
  cancelDeleteOperation() {
    this.transitionToRoute('recipes-page');
  }
}
