import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('galleries', { path: '/' }, function() {
  });
  this.resource('gallery', { path: '/:gallery_id' }, function() {
    this.resource('picture', { path: '/:picture_id' });
  });
});

export default Router;
