import DS from 'ember-data';

var Gallery = DS.Model.extend({
  title: DS.attr('string')
  // pictures: DS.hasMany('picture')
});

Gallery.reopenClass({
  FIXTURES: [
    {id: 1, title: 'gallery1' },
    {id: 2, title: 'gallery2' },
    {id: 3, title: 'gallery3' },
    {id: 4, title: 'gallery4' }
  ]
})

export default Gallery;