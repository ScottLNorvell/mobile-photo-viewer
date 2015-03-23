import Ember from 'ember';

export default Ember.Controller.extend({
  pictures: function() {
    return this.store.find('picture', { gallery_id: this.get('model.id') });
  }.property('model.id')
});
