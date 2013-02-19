Ext.define("FlickrApp.controller.Slideshow", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			// Lookup views by xtype
			slideShowContainer: "slideshowcontainer",
			carousel: "slideshowcontainer carousel" 	
		},
		control: {
			slideShowContainer: {
				// The commands fired by the slideshowcontainer
			refreshSlideshowCommand: "onRefreshSlideshowCommand"
			}
			
		}
		
	},

	// Commands
	onRefreshSlideshowCommand: function () {
		console.log("onRefreshSlideshowCommand");
		this.fetchNewPhotos();
	},

	fetchNewPhotos: function () {
		var carousel = this.getCarousel();
		Ext.getStore("Pictures").load(function(pictures) {
            var items = [];
            
            Ext.each(pictures, function(picture) {
                if (!picture.get('src')) {
                    return;
                }
                
                items.push({
                    xtype: 'flickrimage',
                    picture: picture
                });
            });
            
            carousel.setItems(items);
            carousel.setActiveItem(0);
        });
	},

	launch: function() {
		this.callParent(arguments);
		this.fetchNewPhotos();
		console.log("launch");
		
	},
	init: function () {
		this.callParent(arguments);
		console.log("init");
	}
})