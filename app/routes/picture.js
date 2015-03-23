import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    var gallery_id = transition.params.gallery.gallery_id;
    return this.store.find('picture', {
      gallery_id: gallery_id,
      picture_id: params.picture_id
    }).objectAt(0);
  }
});
