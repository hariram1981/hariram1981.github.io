/**************************************
* Creates javascript objects with
* variables and functions that are
* passed as array arguments 
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
/**
 * Function that takes in variables and functions as arrays
 * and returns an object with those variables and functions are
 * members.
 */
var obj = function(vars, funcs) {
	var o = new Object();
	for(a in vars) {
		o[vars[a]] = "";
	}
	
	for(f in funcs) {
		o[funcs] = function() {};
	}
	
	return o;
}