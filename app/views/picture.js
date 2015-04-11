import Ember from 'ember';

var thresholdConst = 8;
var loggedNext = false;
var loggedPrev = false;

export default Ember.View.extend({
  // classNames: ['this-is-an-image'],
  attributeBindings: ['style'],
  style: null,
  touchX: null,
  touchY: null,
  xStart: null,
  yStart: null,
  translateX: 0,
  prevX: 0,
  firstMove: true,
  width: 0,

  threshold: function() {
    return this.get('width') / thresholdConst;
  }.property('width'),

  didInsertElement: function() {
    // TODO: update width on winDim change....
    this.set('width', this.$().outerWidth());
  },

  handleTouch: function() {
    event.preventDefault();
    var touchX = event.changedTouches[0].screenX;
    var touchY = event.changedTouches[0].screenY;
    this.setProperties({
      touchX: touchX,
      touchY: touchY
    });
  },

  _translateImage: function() {
    if (this.get('shouldGotoNext')) {
      console.log('shouldGotoNext');
      return;
    } else if (this.get('shouldGotoPrev')) {
      console.log('shouldGotoPrev');
      return;
    }
    var x = this.get('translateX');
    var style = '-webkit-transform: translateX(%@1px); transform: translateX(%@1px);'.fmt(x);
    this.set('style', style.htmlSafe());
  }.observes('translateX', 'shouldGotoNext', 'shouldGotoPrev'),

  shouldGotoNext: function() {
    if (this.get('translateX') > this.get('threshold') && !loggedNext) {
      return true;
    }
    return false;
  }.property('threshold', 'translateX'),

  shouldGotoPrev: function() {
    if (this.get('translateX') < -this.get('threshold') && !loggedPrev) {
      return true;
    }
    return false;
  }.property('threshold', 'translateX'),

  // _logXY: function() {
  //   console.log('touchX = ', this.get('touchX'));
  //   console.log('xStart = ', this.get('xStart'));
  //   console.log(this.get('translateX'));
  // }.observes('touchX'),

  touchStart: function() {
    this.handleTouch();
    this.set('direction', '');
    this.setProperties({
      xStart: this.get('touchX'),
      yStart: this.get('touchY')
    });
  },

  touchMove: function() {
    var xOffset, yOffset;
    this.handleTouch();
    if (this.get('direction') === 'vertical') {
      return;
    }
    xOffset = Math.abs(this.touchX - this.xStart);
    yOffset = Math.abs(this.touchY - this.yStart);
    if (yOffset > xOffset) {
      return this.set('direction', 'vertical');
    }
    this.set('direction', 'horizontal');
    if (this.get('firstMove')) {
      this.set('firstMove', false);
      this.set('prevX', this.get('translateX'));
      this.set('translateX', this.get('prevX') + (this.touchX - this.xStart));
    } else {
      this.set('translateX', this.get('prevX') + (this.touchX - this.xStart));
    }
  },

  touchEnd: function() {
    this.handleTouch();
    this.set('firstMove', true);
  }
});
