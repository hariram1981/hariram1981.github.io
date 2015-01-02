/**************************************
* Creates namespaces in javascript 
* 
***************************************
* Version: 0.1
* Created: 3-Dec-2014
* Comment: Initial version
* Authors: Hariram S
*
* Copyright (c) 2014 Hariram S
* Licensed under the GNU GPL v2.0 license.
* https://github.com/hariram1981/js_musings/blob/master/LICENSE 
* 
**************************************/

var namespace = function() {
}

/**
 * Creates namespaces that are passed as an array argument to the function
 * 
 * @param names namespaces to be created as array
 */
namespace.create = function(names) {
	for(a in names) {
		window[names[a]] = function() {};
	}
}