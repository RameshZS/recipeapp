import Route from '@ember/routing/route';

export default class EditRecipeRoute extends Route {
  model(params){
    const { recipe_id } = params;
    let editPageData = {
      recipeData: this.store.peekRecord('recipe-details', recipe_id),
      selectTagData: {
        categoryType: ['BreakFast', 'Lunch', 'Snacks', 'Dinner'],
        level: ['Easy', 'Average', 'Difficult'],
        Rating: ['⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
      },
    };
    return editPageData;
  }
}
