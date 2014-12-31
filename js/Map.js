/**************************************
* HashMap - creates an hashmap for objects
* to be stored and retrieved using keys.
* 
* Here different hashmap objects can be 
* created and used.
* 
* Functions supported are:
*   - count - returns count of objects in map
*   - get - returns the value for a particular key
*   - put - sets the value to the particular key 
*   - exists - if a key exists
*   - listKeys - lists all keys
***************************************
* Version: 0.1
* Created: 30-10-2014
* Comment: 30-10-2014 - initial version
* Authors: Hariram S
* 
* Copyright (c) 2014 Hariram S
* Licensed under the GNU GPL v2.0 license.
* https://github.com/hariram1981/js_musings/blob/master/LICENSE
* 
**************************************/

function HashMap() {
  var _data = [];
  var _size = 0;
  this.findIndex = function(key) {
    return _data.indexOf(key);
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

HashMap.prototype = {
  version: '0.1',
  constructor: HashMap,
  put: function(key, value) {
    if(!key) {
      console.warn("no key provided");
      return;
    }
    if(!value) {
      console.warn("no value provided");
      return;
    }
    
    //Check if key exists and if so, then update the map
    var index = this.findIndex(key);
    
    if(index == -1) {
      this.data[this.size] = key;
      this.data[this.size + 1] = value;
      this.size = this.size + 2;
    } else {
      this.data[index + 1] = value;
    }
  },
  get: function(key) {
    var index = this.findIndex(key);
    if(index == -1) {
      return "key not found";
    } else {
      return this.data[index + 1];
    }
  }, 
  exists: function(key) {
    var index = this.findIndex(key);
    if(index == -1) {
      return false;
    } else {
      return true;
    }
  },
  count: function() {
    return (this.size/2);
  },
  listKeys: function() {
	var list = [];
    for(var i=0;i<this.size;i=i+2) {
      list.push(this.data[i]);
    }
    return list;
  }
}