Ext.define("FlickrApp.view.TabPanel", {
    extend: 'Ext.TabPanel',
    alias: 'widget.tabpanel',
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                xtype: 'slideshowcontainer'
            },
            {
                xtype: 'gallerycontainer'
            }
        ]
    }
});