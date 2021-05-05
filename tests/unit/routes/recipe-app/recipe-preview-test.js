import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | recipe-app/recipe-preview', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:recipe-app/recipe-preview');
    assert.ok(route);
  });
});
