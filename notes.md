# Notes

## Environment Setup
```
$ node -v
  v6.7.0
```
* I already have the latest version of node. *

* Create package.json *
Copied content from github pluralsight-redux-starter
```
   $ npm install
```

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
Start web dev server (-s = silent)
```
  $ npm start -s
```
Add linter in package.json 
  "lint" : "node_modules/.bin/esw webpack.config.* src tools"
  add lint:watch
Put linter and server start together in a script.
Setup mocha 
  copied testSetup.js to tools folder
  add test file

## Actions, Stores, and Reducers
Action Creators usually have the same name as the type
Immutability
Object.assign(target, ...sources)
Object.({}, state, {property: 'value'});
ES6^
Reference comparison if (prevStoreState !== storeState) ...

PURE functions: always return the same value given the same inputs
A given action can  be handled by independent reducers

## Connecting React to Redux
React-Redux
Provider (goes in application root)
Connect

mapStateToProps What state should I expose as props?
"reselect" library - memoize (like caching for function calls)
mapDispatchToProps What actions do I want on props?
 3 ways to handle:
 1. ignore, use dispatch
 2. manually wrap
 3. use bindActionCreators()

## Redux Flow

For performance put bind calls in the constructor

...state SPREAD OPERATOR

function 1 returns a function, so...
  function1(arg1)(arg2)
  OR
  result1 = function1(arg1)
  result1(arg2)

## Async in Redux
Redux Async libraries:
```
  redux-thunk redux-promise redux-saga
  const {courses, prop2, prop3} = this.props;
  ^ Destructuring can save you repeating this.props.
```
## Async Writes in Redux






