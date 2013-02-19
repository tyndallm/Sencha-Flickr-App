Ext.define("FlickrApp.view.SlideshowContainer", {
	extend: "Ext.Container",
	alias: "widget.slideshowcontainer",
	requires: ["Ext.carousel.Carousel", "Ext.data.proxy.JsonP"],

	initialize: function () {
		this.callParent(arguments);
		var titleVisible = false; // image title hidden by default

		var refreshButton = {
			xtype: "button",
			iconCls: 'refresh',
    		iconMask: true,
			handler: this.onRefreshTap,
			scope: this
		};

		var topToolbar = {
			xtype: "toolbar",
			title: "Flickr Slideshow",
			docked: "top",
			items: [
				{ xtype: 'spacer' },
				refreshButton
			]
		};
		
		var info = Ext.create('Ext.Component', {
            cls: 'flickr-title',
            top: 0,
            left: 0,
            right: 0
        });

		var carousel = {
			xtype: "carousel",
			direction: "horizontal",
			handler: this.onTap,
			listeners: {
                activeitemchange: function(carousel, item) {
                    info.setHtml(item.getPicture().get('title'));
                }
            }
		};

		Ext.Viewport.element.on('tap', function(e) {
            if (!e.getTarget('.x-carousel-indicator')) {
                if (titleVisible) {
                    info.element.removeCls('flickr-title-visible');
                    titleVisible = false;
                } else {
                    info.element.addCls('flickr-title-visible');
                    titleVisible = true;
                }
            }
        });


		this.add([topToolbar, info, carousel]);
	},
	onRefreshTap: function () {
		console.log("refreshSlideshowCommand");
		this.fireEvent("refreshSlideshowCommand", this);
	},
	config: {
		iconCls: 'shuffle',
		title: 'slideshow',
		layout: {
			type: 'fit'
		}
	}
});