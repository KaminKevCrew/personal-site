import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | personal-projects', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:personal-projects');
    assert.ok(route);
  });
});
