// --------------------------------------------------------------------
// swing plugin
(function (window, $) {
    var Swing = function (elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
    };
    Swing.prototype = {
        defaults: {
            rapidSpeed: 3000,
            moderateSpeed: 5000
        },
        init: function () {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            var self = this;
            this.wrapper = this.$elem.find('div:first');
            $(window).bind('resize', function () {
                self.difference = self.$elem.width() - self.wrapper.width();
                self.quarter = $(window).width() / 5;
                self.half = self.quarter * 2;
                self.neutral = self.quarter * 3;
                self.near = self.quarter * 4;
            })
            $(window).trigger('resize');
            this.lastMove = 0;
            $(window).mousemove(function (event) {
                switch (true) {
                case event.clientX < self.quarter:
                    if (self.lastMove != 1) {
                        self.lastMove = 1;
                        self.wrapper.stop().animate({
                            marginLeft: '0'
                        }, self.config.rapidSpeed);
                    }
                    //$('.navleft,.navright').hide();
                    break;
                case event.clientX < self.half:
                    if (self.lastMove != 2) {
                        self.lastMove = 2;
                        self.wrapper.stop().animate({
                            marginLeft: '0'
                        }, self.config.moderateSpeed);
                    }
                    //$('.navleft').show();
                    //console.log(' 2 ');
                    break;
                case event.clientX < self.neutral:
                    if (self.lastMove != 0) {
                        self.lastMove = 0;
                        self.wrapper.stop();
                    }
                    //$('.navleft,.navright').hide();
                    break;
                case event.clientX < self.near:
                    if (self.lastMove != 3) {
                        self.lastMove = 3;
                        self.wrapper.stop().animate({
                            marginLeft: self.difference
                        }, self.config.moderateSpeed);
                    }
                    //$('.navright').show();
                    //console.log(' 4 ');
                    break;
                default:
                    if (self.lastMove != 4) {
                        self.lastMove = 4;
                        self.wrapper.stop().animate({
                            marginLeft: self.difference
                        }, self.config.rapidSpeed);
                    }
                    //$('.navleft,.navright').hide();
                    break;
                }
            })
            return this;
        }
    }
    Swing.defaults = Swing.prototype.defaults;
    $.fn.swing = function (options) {
        return this.each(function () {
            new Swing(this, options).init();
        });
    };
    window.Swing = Swing;
})(window, jQuery);
// --------------------------------------------------------------------
