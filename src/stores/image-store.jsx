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

    // Log the response data  
    console.log('Image-store JSON response: ', json);

      this.images =  this.images = _.reject(json.data, function(image) {
        return image.is_album;
      });
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
    

    // this.images = _.reject(json.data, function(image) {
    //     return image.is_album;
    //   });

    // // Get request from the api util to the rootUrl + the categroy ID
    // Api.get('topics/' + '5')
    // .then(function(json) {

    // // Log the response data  
    // console.log('Image-store JSON response: ', json);

    //   this.images = json.data;
    //   this.triggerChange();
    // }.bind(this));
    
    

    /*******************************/
//     module.exports = Reflux.createStore({
//   listenables: [Actions],
  
//   getImages: function(topicId) {
//     // Checking the topic ID
//     console.log("Topic ID: ", topicId)
//     fetch(rootUrl + topicId, {
//       headers: {
//         'Authorization': 'Client-ID' + apiKey
//       }
//     })
//     .then(function(response){
//       var temp = response.json();
//       console.log("Logging the API response", temp);
//       return temp;
//     })
//     .then(function(json){

//       this.images = json.data;
//       this.triggerChange();
//     }.bind(this));

//   },
//   triggerChange: function() {
//     this.trigger('change', this.images);
//   }
// });