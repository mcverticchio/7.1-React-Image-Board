var Backbone = require('backbone');

var Images = Backbone.Model.extend({

});

var ImagesCollection = Backbone.Collection.extend({
  model: Images,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/carolinesimages'
});

module.exports = {
  Images: Images,
  ImagesCollection: ImagesCollection
};
