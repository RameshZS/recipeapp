import Route from '@ember/routing/route';

export default class AddnewRecipeRoute extends Route {
  model() {
    let selectTagObject = {
      categoryType: ['BreakFast', 'Lunch', 'Snacks', 'Dinner'],
      level: ['Easy', 'Average', 'Difficult'],
      Rating: ['⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
    };
    return selectTagObject;
  }
}
