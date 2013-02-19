Ext.define("FlickrApp.view.GalleryContainer", {
	extend: "Ext.Container",
	alias: "widget.gallerycontainer",

	initialize: function () {
		this.callParent(arguments);

		var refreshButton = {
			xtype: "button",
			iconCls: 'refresh',
    		iconMask: true,
			handler: this.onRefreshTap,
			scope: this
		};

		var topToolbar = {
			xtype: "toolbar",
			title: "Flickr Gallery",
			docked: "top",
			items: [
				{ xtype: 'spacer' },
				refreshButton
			]
		};

		this.add([topToolbar]);
	},

	onRefreshTap: function () {
		console.log("refreshGalleryCommand");
		this.fireEvent("refreshGalleryCommand", this);
	},
	config: {
		iconCls: 'photos2',
		title: 'Gallery',
		layout: {
			type: 'fit'
		}
	}
});