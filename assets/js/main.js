'use strict';

/**
 * Shimming Backbone & jQuery to prevent deferring on Marionette.
 */
require('backbone').$ = $ || jQuery;

/**
 * Invoking dependencies.
 * @type variables
 */
var _                 = require('underscore')
    , Backbone        = require('backbone')
    , Marionette      = require('backbone.marionette')
    , Router          = require('./Router');

/**
 * Bootstrapping application
 * @type {Backbone}
 */
var BlogMV = new Marionette.Application;

/**
 * Requiring the bootstrapper controller
 * @type Object
 */
var IndexController = require('./controllers/IndexController');

/**
 * Handling with initial requests
 * @return void
 */
BlogMV.addInitializer(function () {
  var controller = new IndexController;

  new Router({
    controller: controller
  });
});

/**
 * Bootstrap the application history, with HTML5's pushState.
 * @return void
 */
BlogMV.on('start', function () {
  Backbone.history.start({
    pushState: true,
    root: '/'
  });
});

/**
 * Starts the application.
 */
BlogMV.start();