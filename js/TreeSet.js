/**************************************
* TreeSet - creates a set of values (list
* of objects without duplicates) that
* is ordered in ascending.
* 
* Functions supported are:
*   - count - returns count of objects in set
*   - add - adds the object to the set
*   - exists - returns true if object exists in the set 
*   - listValues - returns an array of all values in the list
***************************************
* Version: 0.1
* Created: 10-Dec-2014
* Comment: 10-Dec-2014 - initial version
* Authors: Hariram S
* 
* Copyright (c) 2014 Hariram S
* Licensed under the GNU GPL v2.0 license.
* https://github.com/hariram1981/js_musings/blob/master/LICENSE
* 
**************************************/

function TreeSet() {
}

TreeSet.prototype = new Set();

TreeSet.prototype.add = function(value) {
  if(typeof value === "undefined") {
	console.warn("no value provided");
	  return;
  } 
  //Check if key exists and if so, then update the map
  var index = this.findIndex(value);
  if(index == -1) {
    this.data[this.size] = value;
	this.size = this.size + 1;
	this.data.sort();
  } else {
	console.warn(value + " already exists");
  }
}