'use strict';

var Backbone = require('backbone')
    , ArticleModel = require('../models/ArticleModel');

module.exports = Backbone.Collection.extend({
  url: 'http://blogmv.apiary-mock/api/articles',
  model: ArticleModel
});