import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 1, title: 'gallery1', pictures: [
        {
          id: 1, 
          src: 'http://lorempixel.com/500/500/sports/1/',
          tn: 'http://lorempixel.com/50/50/sports/1/'
        },

        {
          id: 2, 
          src: 'http://lorempixel.com/500/500/sports/2/',
          tn: 'http://lorempixel.com/50/50/sports/2/'
        },

        {
          id: 3, 
          src: 'http://lorempixel.com/500/500/sports/3/',
          tn: 'http://lorempixel.com/50/50/sports/3/'
        },

        {
          id: 4, 
          src: 'http://lorempixel.com/500/500/sports/4/',
          tn: 'http://lorempixel.com/50/50/sports/4/'
        }

      ]},
      {id: 2, title: 'gallery2', pictures: [
        {
          id: 1, 
          src: 'http://lorempixel.com/500/500/abstract/1/',
          tn: 'http://lorempixel.com/50/50/abstract/1/'
        },

        {
          id: 2, 
          src: 'http://lorempixel.com/500/500/abstract/2/',
          tn: 'http://lorempixel.com/50/50/abstract/2/'
        },

        {
          id: 3, 
          src: 'http://lorempixel.com/500/500/abstract/3/',
          tn: 'http://lorempixel.com/50/50/abstract/3/'
        },

        {
          id: 4, 
          src: 'http://lorempixel.com/500/500/abstract/4/',
          tn: 'http://lorempixel.com/50/50/abstract/4/'
        }

      ]},
      {id: 3, title: 'gallery3', pictures: [
        {
          id: 1, 
          src: 'http://lorempixel.com/500/500/cats/1/',
          tn: 'http://lorempixel.com/50/50/cats/1/'
        },

        {
          id: 2, 
          src: 'http://lorempixel.com/500/500/cats/2/',
          tn: 'http://lorempixel.com/50/50/cats/2/'
        },

        {
          id: 3, 
          src: 'http://lorempixel.com/500/500/cats/3/',
          tn: 'http://lorempixel.com/50/50/cats/3/'
        },

        {
          id: 4, 
          src: 'http://lorempixel.com/500/500/cats/4/',
          tn: 'http://lorempixel.com/50/50/cats/4/'
        }

      ]},
      {id: 4, title: 'gallery4', pictures: [
        {
          id: 1, 
          src: 'http://lorempixel.com/500/500/people/1/',
          tn: 'http://lorempixel.com/50/50/people/1/'
        },

        {
          id: 2, 
          src: 'http://lorempixel.com/500/500/people/2/',
          tn: 'http://lorempixel.com/50/50/people/2/'
        },

        {
          id: 3, 
          src: 'http://lorempixel.com/500/500/people/3/',
          tn: 'http://lorempixel.com/50/50/people/3/'
        },

        {
          id: 4, 
          src: 'http://lorempixel.com/500/500/people/4/',
          tn: 'http://lorempixel.com/50/50/people/4/'
        }

      ]}
    ];
  }
});
