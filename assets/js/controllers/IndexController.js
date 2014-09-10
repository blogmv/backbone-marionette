var Marionette            = require('backbone.marionette')
    , ArticlesCollection  = require('../collections/ArticlesCollection');

module.exports = Marionette.Controller.extend({
  index: function () {
    console.log('hello wosrld!');
  }
});