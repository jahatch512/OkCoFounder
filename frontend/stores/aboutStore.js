var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var aboutConstants = require('../constants/aboutConstants.js');
var myStorage = localStorage;


var AboutStore = new Store(Dispatcher);

var _abouts = {};

var resetAbouts = function (abouts) {
 _abouts = {};

 abouts.forEach(function (about) {
 _abouts[about.id] = about;
 });
};

var setAbout = function (about) {
 _abouts[about.id] = about;
};

var removeAbout = function (about) {
 delete _abouts[about.id];
};

AboutStore.all = function () {
 return Object.keys(_abouts).map(function (aboutId) {
   return _abouts[aboutId];
 });
};

AboutStore.find = function (id) {
 return _abouts[id];
};

AboutStore.__onDispatch = function (payload) {
 switch (payload.actionType) {
   case aboutConstants.RECEIVE_ABOUTS:
     resetAbouts(payload.abouts);
     break;
   case aboutConstants.RECEIVE_SINGLE_ABOUT:
     console.log("AboutStore Received About");

     setAbout(payload.about);
     break;
   case aboutConstants.ABOUT_REMOVED:
     removeAbout(payload.about);
     break;
 }
 this.__emitChange();
};

module.exports = AboutStore;
