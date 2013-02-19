
Ext.define('FlickrApp.view.Picture', {
    extend: 'Ext.Img',
    xtype: 'flickrimage',
    
    config: {
        /**
         * @cfg {FlickrApp.model.Picture} picture The Picture to show
         */
        picture: null
    },
    
    updatePicture: function(picture) {
        this.setSrc(picture.get('src'));
    }
});