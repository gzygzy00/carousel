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
    this.imgCount = this.$imgs.length
    this.imgWidth = this.$imgs.width()

    this.index = 0
    this.isPlay = 0

    this.$imgCt.append(this.$imgs.first().clone())
    this.$imgCt.prepend(this.$imgs.last().clone())

    this.$imgCt.width((this.imgCount + 2) * this.imgWidth)
    this.$imgCt.css('left', -this.imgWidth)
    //console.log("hh");
  },

  bind: function () {
    var _this = this
    this.$leftBtn.on('click', function () {
      console.log("left");
      _this.playLeft()
    })
    this.$rightBtn.on('click', function () {
      console.log("right");
      _this.playRight()
    })
    this.$bullets.on('click', function () {
      console.log($(this).index());
    })
  },

  playLeft: function () {
    console.log("playleft");
    var _this = this
    if (!this.isPlay) {
      this.isPlay = 1
      console.log("playright");
      this.$imgCt.animate({
        left: "-=" + this.imgWidth
      }, function () {
        _this.index++
        if (_this.index === _this.imgCount) {
          _this.index = 0
          _this.$imgCt.css('left', -_this.imgWidth)
        }
        _this.isPlay = 0
      })
    }

  },

  playRight: function () {
    var _this = this
    if (!this.isPlay) {
      this.isPlay = 1
      console.log("playright");
      this.$imgCt.animate({
        left: "+=" + this.imgWidth
      }, function () {
        _this.index--
        if (_this.index < 0) {
          _this.index = _this.imgCount - 1
          _this.$imgCt.css('left', -_this.imgWidth * _this.imgCount)
        }
        _this.isPlay = 0
      })
    }
  }
}

var a = new Carousel($('.carousel').eq(0));
// new Carousel($('.carousel').eq(1));

console.log("ok");