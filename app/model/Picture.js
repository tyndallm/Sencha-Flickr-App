/**
 * Simple Model that represents an image from Flickr's recently uploaded photos. We create the src url of the image
 * based on the flickr photo source url pattern:
 * http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[size].jpg
 * Where size corresponds to:
 *  s   small square 75x75
 *  q   large square 150x150
 *  t   thumbnail, 100 on longest side
 *  m   small, 240 on longest side
 *  n   small, 320 on longest side
 *  -   medium, 500 on longest side
 *  z   medium 640, 640 on longest side
 *  c   medium 800, 800 on longest side†
 *  b   large, 1024 on longest side*
 *  o   original image, either a jpg, gif or png, depending on source format
 */
Ext.define('FlickrApp.model.Picture', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            'id', 'title', 'farm', 'author', 'secret', 'server', 
            {
                name: 'src',
                type: 'string',
                convert: function(value, record) {
                    var id = record.get('id'),
                        farm = record.get('farm'),
                        secret = record.get('secret'),
                        server = record.get('server'),
                        size = 'z', // desired size of image
                        src  = 'http://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '_' + size + '.jpg';
                        console.log(src);
                    return src;
                }
            }
        ]
    }
});