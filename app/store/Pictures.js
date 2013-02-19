/**
 * Grabs the ten most recent uploads to Flickr from it's Developer API, passes the data to our Model to decode
 */
Ext.define('FlickrApp.store.Pictures', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'FlickrApp.model.Picture',
        
        proxy: {
            type: 'jsonp',
            url: 'http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=YOUR_API_KEY_GOES_HERE&per_page=10&page=1&format=json&nojsoncallback=1',
            callbackKey: 'jsoncallback',
            reader: {
                type: 'json',
                rootProperty: 'photos.photo'
            }
        }
    }
});