Ext.application({
    name: "FlickrApp",

    models: ["Picture"],
    stores: ["Pictures"],
    controllers: ["Slideshow"],
    views: ["SlideshowContainer", "GalleryContainer", "TabPanel", "Picture"],

    launch: function () {
        var tabPanel = {
            xtype: "tabpanel"
        }
        

        Ext.Viewport.add([tabPanel]);
    }
});
