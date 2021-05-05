import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | delete-page', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:delete-page');
    assert.ok(route);
  });
});
