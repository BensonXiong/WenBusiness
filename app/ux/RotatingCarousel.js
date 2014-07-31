/**
* 跑马灯自动切换
*/
Ext.define('WenBusiness.ux.RotatingCarousel', {
    extend: 'Ext.carousel.Carousel',
    alternateClassName: 'rotatingCarousel',
    xtype: 'rotatingCarousel',
    config: {
        delay: 3000,
        start: true,
        store:null,
        listeners: {
            tap: {
                fn: function () {
                    this.pause();
                },
                element: 'element'
            },
            swipe: {
                fn: function () {
                    this.start();
                },
                element: 'innerElement'
            },
            show:{

            }
        }
    },
    initialize: function () {
        this.callParent();
        if (this.config.start) {
            this.start();
        }
    },
    rotate: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (this.getActiveIndex() === this.getMaxItemIndex()) {
            this.setActiveItem(0, 'slide');
        } else {
            this.next();
        }
        this.timeout = Ext.defer(this.rotate, this.config.delay, this);
    },
    start: function (delayStart) {
        this.timeout = Ext.defer(this.rotate, delayStart || this.config.delay, this);
    },
    pause: function (delayStart) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (delayStart) {
            this.start(delayStart);
        }
        return this;
    },
    stop: function (delayStart) {
        this.pause(delayStart);
        this.setActiveItem(0, 'slide');
        return this;
    }
});