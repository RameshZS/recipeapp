import Route from '@ember/routing/route';
import { recipes } from '../data/recipesdata';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  model() {
    let recipesArray = [];
    recipes.forEach((ele, id) => {
      ele.id = id;
      let recipe = this.store.createRecord('recipe-details', ele);
      recipe.save();
      recipesArray.push(recipe);
    });
    /*Retrive the user data from the local storage and add the ember data*/
    let localUserData = localStorage.getItem('index-user-details');
    if (localUserData != null) {
      JSON.parse(localUserData).forEach((ele) => {
        let userObj = {
          id: JSON.parse(localStorage.getItem(ele)).id,
          userName: JSON.parse(localStorage.getItem(ele)).attributes[
            'user-name'
          ],
          userNum: JSON.parse(localStorage.getItem(ele)).attributes['user-num'],
          password: JSON.parse(localStorage.getItem(ele)).attributes[
            'password'
          ],
          state: JSON.parse(localStorage.getItem(ele)).attributes['state'],
        };
        let createUser = this.store.createRecord('user-details', userObj);
        createUser.save();
      });
    }
    this.addNewRecipes();
    return recipesArray;
  }
  /*Add the new recipes data from local storage and add the recipe data in ember data*/
  addNewRecipes() {
    let localRecipeData = localStorage.getItem('index-recipe-details');
    if (localRecipeData != null) {
      let localRecipeObject = JSON.parse(localRecipeData);
      localRecipeObject.forEach((recipe, id) => {
        if (id > 7) {
          let newRecipe = {
            id: JSON.parse(localStorage.getItem(recipe)).id,
            recipe_name: JSON.parse(localStorage.getItem(recipe)).attributes['recipe-name'],
            time: JSON.parse(localStorage.getItem(recipe)).attributes['time'],
            type: JSON.parse(localStorage.getItem(recipe)).attributes['type'],
            image: JSON.parse(localStorage.getItem(recipe)).attributes['image'],
            ingredients: JSON.parse(localStorage.getItem(recipe)).attributes['ingredients'],
            timeManageMent: JSON.parse(localStorage.getItem(recipe)).attributes['time-manage-ment'],
            level: JSON.parse(localStorage.getItem(recipe)).attributes['level'],
            Rating: JSON.parse(localStorage.getItem(recipe)).attributes['rating'],
          };
          let addnewData = this.store.createRecord('recipe-details', newRecipe);
          addnewData.save();
        }
      });
    }
  }
}
