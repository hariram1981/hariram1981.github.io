/**************************************
* Set - creates a set of values (list
* of objects without duplicates).
* 
* Functions supported are:
*   - count - returns count of objects in set
*   - add - adds the object to the set
*   - exists - returns true if object exists in the set 
*   - listValues - returns an array of all values in the list
***************************************
* Version: 0.1
* Created: 08-Dec-2014
* Comment: 08-Dec-2014 - initial version
* Authors: Hariram S
* 
* Copyright (c) 2014 Hariram S
* Licensed under the GNU GPL v2.0 license.
* https://github.com/hariram1981/js_musings/blob/master/LICENSE
* 
**************************************/

function Set() {
  var _data = [];
  var _size = 0;
  this.findIndex = function(val) {
    return _data.indexOf(val);
  },
  Object.defineProperty(this, "data", {
	get: function() {
	  return _data;
	},
	set: function(newValue) {
	  _data = newValue;
	}
  }),
  Object.defineProperty(this, "size", {
	get: function() {
	  return _size;
	},
	set: function(newValue) {
	  _size = newValue;
	}
  });
}

Set.prototype = {
  version: '0.1',
  constructor: Set,
  add: function(value) {
	 if(!value) {
       console.warn("no value provided");
	   return;
	 } 
     //Check if key exists and if so, then update the map
	 var index = this.findIndex(value);
     if(index == -1) {
	   this.data[this.size] = value;
       this.size = this.size + 1;
	 } else {
	   console.warn(value + " already exists");
	 }
  }, 
  exists: function(value) {
    var index = this.findIndex(value);
    if(index == -1) {
      return false;
    } else {
      return true;
    }
  },
  count: function() {
    return (this.size);
  },
  listValues: function() {
    return this.data;
  }
}