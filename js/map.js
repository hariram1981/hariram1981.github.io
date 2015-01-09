/**************************************
* Map - creates an map for objects
* to be stored and retrieved using keys.
* 
* Functions supported are:
*   - size - returns size of map
*   - get - returns the value for a particular key
*   - put - sets the value to the particular key 
*   - exists - if a key exists
*   - listKeys - lists all keys
***************************************
* Version: 0.4
* Created: 28-10-2014
* Comment: 30-10-2014 - slight modifications
*        : 31-12-2014 - renaming to map
*        : 08-01-2015 - checking typedef for variables
* Authors: Hariram S
*
* Copyright (c) 2014 Hariram S
* Licensed under the GNU GPL v2.0 license.
* https://github.com/hariram1981/js_musings/blob/master/LICENSE 
* 
**************************************/

var map = (function() {
  //Array where key and value is stored
  var _data = [];
  //Size of the map (array size / 2)
  var _size = 0;
  
  /**********************************
   * Find index of a key in the map
   *********************************/
  var findIndex = function(key) {
    return _data.indexOf(key);
  },

  /**********************************
   * Put the value for the key in the map
   *********************************/
  put = function(key, value) {
    if(typeof key === 'undefined') {
      console.warn("no key provided");
      return;
    }
    if(typeof value === 'undefined') {
      console.warn("no value provided");
      return;
    }
    
    //Check if key exists and if so, then update the map
    var index = findIndex(key);
    
    if(index == -1) {
      _data[_size] = key;
      _data[_size + 1] = value;
      _size = _size + 2;
    } else {
      _data[index + 1] = value;
    }
  },
  
  /**********************************
   * Get the value for key in the map
   *********************************/
  get = function(key) {
    var index = findIndex(key);
    if(index == -1) {
      return "key not found";
    } else {
      return _data[index + 1];
    }
  }, 
  
  /**********************************
   * Check if key exists in the map
   *********************************/
  exists = function(key) {
    var index = findIndex(key);
    if(index == -1) {
      return false;
    } else {
      return true;
    }
  },
  
  /**********************************
   * Size of the map
   *********************************/
  size = function() {
    return (_size/2);
  },
  
  /**********************************
   * Size of the map
   *********************************/
  listKeys = function() {
	var list = [];
    for(var i=0;i<_size;i=i+2) {
      list.push(_data[i]);
    }
    return list;
  }

  return {
    version: '0.4',
    put: put,
    get: get,
    exists: exists,
    size: size,
    listKeys: listKeys
  }
})();