import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | recipe-preview', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:recipe-preview');
    assert.ok(route);
  });
});
