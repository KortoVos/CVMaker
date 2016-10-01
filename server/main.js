userData = new Mongo.Collection('user');

import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  
});

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});