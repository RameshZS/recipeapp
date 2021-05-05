import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | addnew-recipe', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:addnew-recipe');
    assert.ok(controller);
  });
});
