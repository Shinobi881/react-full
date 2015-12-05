var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var rootUrl = 'https://api.imgur.com/3/topics/';
var apiKey = 'dd371aac13451a3';
var _ = require('lodash');


module.exports = Reflux.createStore({
  listenables: [Actions],
  
  getImages: function(topicId) {
    // Checking the topic ID
    console.log("Topic ID: ", topicId)
        // Get request from the api util to the rootUrl + the categroy ID
    Api.get('topics/' + topicId)
    .then(function(json) {
      this.images =  this.images = _.reject(json.data, function(image) {
        return image.is_album;
      });
      this.triggerChange();
    }.bind(this));
    

  },
  getImage: function(id) {
    Api.get('gallery/image/' + id)
    .then(function(json) {
      if(this.images) {
        this.images.push(json.data);
      } else {
        this.images = [json.data];
      }

      this.triggerChange();
    }.bind(this));
  },
  find: function(id) {
    var image = _.findWhere(this.images, {id: id});
    if(image) {
      return image;
    } else {
      this.getImage(id);
      return null
    }
  },
  triggerChange: function() {
    this.trigger('change', this.images);
  }
});
    
