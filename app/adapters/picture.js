import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryFixtures(fixture, query, type) {
    if (query.gallery_id) {
      var galleryPics = fixture.filterBy('gallery_id', parseInt(query.gallery_id));
      if (query.picture_id) {
        return galleryPics.filterBy('id', query.picture_id);
      } else {
        return galleryPics;
      }
    }
  }
});
