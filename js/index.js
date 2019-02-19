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
      _this.playLeft(1)
    })
    this.$rightBtn.on('click', function () {
      console.log("right");
      _this.playRight(1)
    })
    this.$bullets.on('click', function () {
      console.log($(this).index());
      var index = $(this).index()
      if (index < _this.index) {
        _this.playLeft(_this.index - index)
      } else {
        _this.playRight(index - _this.index)
      }
    })
  },

  playRight: function (len) {
    console.log("R");
    var _this = this
    if (!this.isPlay) {
      this.isPlay = 1
      console.log("playright");
      this.$imgCt.animate({
        left: "-=" + this.imgWidth * len
      }, function () {
        _this.index += len
        if (_this.index === _this.imgCount) {
          _this.index = 0
          _this.$imgCt.css('left', -_this.imgWidth)
        }
        _this.isPlay = 0
        _this.setBullet()
      })
    }

  },

  playLeft: function (len) {
    var _this = this
    if (!this.isPlay) {
      this.isPlay = 1
      console.log("L");
      this.$imgCt.animate({
        left: "+=" + this.imgWidth * len
      }, function () {
        _this.index -= len
        if (_this.index < 0) {
          _this.index = _this.imgCount - 1
          _this.$imgCt.css('left', -_this.imgWidth * _this.imgCount)
        }
        _this.isPlay = 0
        _this.setBullet()
      })
    }
  },

  setBullet: function () {
    this.$bullets.eq(this.index).addClass('active')
        .siblings().removeClass('active')
  }
}

var a = new Carousel($('.carousel').eq(0));
var b = new Carousel($('.carousel').eq(1));

console.log("ok");