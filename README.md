Backbone.js + Marionette.js + Browserify
================

This is the skeleton which we are gonna use to build our SPA with Backbone.js, Marionette.js and Browserify through an API built with Python using Google App Engine to host blogMV* data.

Requirements
================

- Bower, to install front-end dependencies;
- Npm, to install hard dependencies;
- Node.js, to run the *on demand* server;

Download
================
Please, clone this repository into your PC to get the application working:

```
git clone https://github.com/blogmv/backbone-marionette/
```

Installation
================
After cloning this repository, you should perform the installation. To do this, open your prompt or terminal and
shout the following commands:

```
bower install
```

```
npm install
```

```
npm build run
```

Show time
================
When everything is correctly installed, it's time for the show. Now, at the same folder
you have shout some commands, perform the server initialization by doing

```
node server.js
```

Then, in your browser, just access `http://localhost:8888`.

License
================
MIT