*** 1. Environment Setup ***

$ node -v
  v6.7.0
* I already have the latest version of node. *

* Create package.json *
Copied content from github pluralsight-redux-starter
$ npm install

Atom recommended packages 
  react
  terminal-plus

Create folder src
Create index.html index.js

Configure webpack
Create webpack.config.dev.js (production version would be webpack.config.js)
  Copied content from starter kit
Set up Babel .babelrc
  Copied content from starter kit
Set up Express (web server)
  in new folder tools, add srcServer.js
  copied content from starter kit
Set up script in package.json
  "start" : "babel-node tools/srcServer.js"
  we use babel-node to transpile ES6
Add start message in package.json prestart step
  add message.js to tools
  add prestart to scripts section in package.json  


