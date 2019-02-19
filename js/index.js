function Carousel($ct) {
  this.init($ct)
  this.bind()
}

Carousel.prototype = {
  init: function ($ct) {
    this.$ct = $ct
    this.$imgCt = this.$ct.find('.img-ct')
    this.$imgs = this.$ct.find('.img-ct>li')
    this.$leftBtn = this.$ct.find('.left')
    this.$rightBtn = this.$ct.find('.right')
    this.$bullets = this.$ct.find('.bullet li')

    this.$imgCt.append(this.$imgs.first().clone())
    this.$imgCt.prepend(this.$imgs.last().clone())

    //this.$imgCt.width((this.$imgs.length() + 2) * this.$imgs.width())
  },

  bind: function () {

  },

  render: function () {

  }
}

new Carousel($('.carousel').eq(0));
// new Carousel($('.carousel').eq(1));

console.log("ok");