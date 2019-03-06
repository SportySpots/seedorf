
(function(r,f) {
    var a=f();
    if(typeof a!=='object')return;
    var e=[typeof module==='object'&&typeof module.exports==='object'?module.exports:null,typeof window!=='undefined'?window:null,r&&r!==window?r:null];
    for(var i in a){e[0]&&(e[0][i]=a[i]);e[1]&&i!=='__esModule'&&(e[1][i] = a[i]);e[2]&&(e[2][i]=a[i]);}
})(this,function(){
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/bootstrap-menu/bootstrap-menu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/bootstrap-menu/bootstrap-menu.js":
/*!***********************************************!*\
  !*** ./libs/bootstrap-menu/bootstrap-menu.js ***!
  \***********************************************/
/*! exports provided: BootstrapMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_bootstrap_menu_src_BootstrapMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/bootstrap-menu/src/BootstrapMenu.js */ \"./node_modules/bootstrap-menu/src/BootstrapMenu.js\");\n/* harmony import */ var _node_modules_bootstrap_menu_src_BootstrapMenu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_menu_src_BootstrapMenu_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"BootstrapMenu\", function() { return _node_modules_bootstrap_menu_src_BootstrapMenu_js__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n\n\n//# sourceURL=webpack:///./libs/bootstrap-menu/bootstrap-menu.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/collection/contains.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/collection/contains.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./includes */ \"./node_modules/bootstrap-menu/node_modules/lodash/collection/includes.js\");\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/collection/contains.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/collection/each.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/collection/each.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./forEach */ \"./node_modules/bootstrap-menu/node_modules/lodash/collection/forEach.js\");\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/collection/each.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/collection/forEach.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/collection/forEach.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayEach = __webpack_require__(/*! ../internal/arrayEach */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/arrayEach.js\"),\n    baseEach = __webpack_require__(/*! ../internal/baseEach */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseEach.js\"),\n    createForEach = __webpack_require__(/*! ../internal/createForEach */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/createForEach.js\");\n\n/**\n * Iterates over elements of `collection` invoking `iteratee` for each element.\n * The `iteratee` is bound to `thisArg` and invoked with three arguments:\n * (value, index|key, collection). Iteratee functions may exit iteration early\n * by explicitly returning `false`.\n *\n * **Note:** As with other \"Collections\" methods, objects with a \"length\" property\n * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`\n * may be used for object iteration.\n *\n * @static\n * @memberOf _\n * @alias each\n * @category Collection\n * @param {Array|Object|string} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @param {*} [thisArg] The `this` binding of `iteratee`.\n * @returns {Array|Object|string} Returns `collection`.\n * @example\n *\n * _([1, 2]).forEach(function(n) {\n *   console.log(n);\n * }).value();\n * // => logs each value from left to right and returns the array\n *\n * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {\n *   console.log(n, key);\n * });\n * // => logs each value-key pair and returns the object (iteration order is not guaranteed)\n */\nvar forEach = createForEach(arrayEach, baseEach);\n\nmodule.exports = forEach;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/collection/forEach.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/collection/includes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/collection/includes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ../internal/baseIndexOf */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseIndexOf.js\"),\n    getLength = __webpack_require__(/*! ../internal/getLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/getLength.js\"),\n    isArray = __webpack_require__(/*! ../lang/isArray */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isArray.js\"),\n    isIterateeCall = __webpack_require__(/*! ../internal/isIterateeCall */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isIterateeCall.js\"),\n    isLength = __webpack_require__(/*! ../internal/isLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js\"),\n    isString = __webpack_require__(/*! ../lang/isString */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isString.js\"),\n    values = __webpack_require__(/*! ../object/values */ \"./node_modules/bootstrap-menu/node_modules/lodash/object/values.js\");\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * Checks if `target` is in `collection` using\n * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)\n * for equality comparisons. If `fromIndex` is negative, it's used as the offset\n * from the end of `collection`.\n *\n * @static\n * @memberOf _\n * @alias contains, include\n * @category Collection\n * @param {Array|Object|string} collection The collection to search.\n * @param {*} target The value to search for.\n * @param {number} [fromIndex=0] The index to search from.\n * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.\n * @returns {boolean} Returns `true` if a matching element is found, else `false`.\n * @example\n *\n * _.includes([1, 2, 3], 1);\n * // => true\n *\n * _.includes([1, 2, 3], 1, 2);\n * // => false\n *\n * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');\n * // => true\n *\n * _.includes('pebbles', 'eb');\n * // => true\n */\nfunction includes(collection, target, fromIndex, guard) {\n  var length = collection ? getLength(collection) : 0;\n  if (!isLength(length)) {\n    collection = values(collection);\n    length = collection.length;\n  }\n  if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {\n    fromIndex = 0;\n  } else {\n    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);\n  }\n  return (typeof collection == 'string' || !isArray(collection) && isString(collection))\n    ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)\n    : (!!length && baseIndexOf(collection, target, fromIndex) > -1);\n}\n\nmodule.exports = includes;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/collection/includes.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/function/restParam.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/function/restParam.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * Creates a function that invokes `func` with the `this` binding of the\n * created function and arguments from `start` and beyond provided as an array.\n *\n * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).\n *\n * @static\n * @memberOf _\n * @category Function\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n * @example\n *\n * var say = _.restParam(function(what, names) {\n *   return what + ' ' + _.initial(names).join(', ') +\n *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);\n * });\n *\n * say('hello', 'fred', 'barney', 'pebbles');\n * // => 'hello fred, barney, & pebbles'\n */\nfunction restParam(func, start) {\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        rest = Array(length);\n\n    while (++index < length) {\n      rest[index] = args[start + index];\n    }\n    switch (start) {\n      case 0: return func.call(this, rest);\n      case 1: return func.call(this, args[0], rest);\n      case 2: return func.call(this, args[0], args[1], rest);\n    }\n    var otherArgs = Array(start + 1);\n    index = -1;\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = rest;\n    return func.apply(this, otherArgs);\n  };\n}\n\nmodule.exports = restParam;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/function/restParam.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/arrayEach.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/arrayEach.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.forEach` for arrays without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array.length;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\nmodule.exports = arrayEach;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/arrayEach.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/assignWith.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/assignWith.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var keys = __webpack_require__(/*! ../object/keys */ \"./node_modules/bootstrap-menu/node_modules/lodash/object/keys.js\");\n\n/**\n * A specialized version of `_.assign` for customizing assigned values without\n * support for argument juggling, multiple sources, and `this` binding `customizer`\n * functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {Function} customizer The function to customize assigned values.\n * @returns {Object} Returns `object`.\n */\nfunction assignWith(object, source, customizer) {\n  var index = -1,\n      props = keys(source),\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index],\n        value = object[key],\n        result = customizer(value, source[key], key, object, source);\n\n    if ((result === result ? (result !== value) : (value === value)) ||\n        (value === undefined && !(key in object))) {\n      object[key] = result;\n    }\n  }\n  return object;\n}\n\nmodule.exports = assignWith;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/assignWith.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseAssign.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseAssign.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseCopy = __webpack_require__(/*! ./baseCopy */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseCopy.js\"),\n    keys = __webpack_require__(/*! ../object/keys */ \"./node_modules/bootstrap-menu/node_modules/lodash/object/keys.js\");\n\n/**\n * The base implementation of `_.assign` without support for argument juggling,\n * multiple sources, and `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return source == null\n    ? object\n    : baseCopy(source, keys(source), object);\n}\n\nmodule.exports = baseAssign;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseAssign.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseCopy.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseCopy.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property names to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @returns {Object} Returns `object`.\n */\nfunction baseCopy(source, props, object) {\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n    object[key] = source[key];\n  }\n  return object;\n}\n\nmodule.exports = baseCopy;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseCopy.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseEach.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseEach.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseForOwn = __webpack_require__(/*! ./baseForOwn */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseForOwn.js\"),\n    createBaseEach = __webpack_require__(/*! ./createBaseEach */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/createBaseEach.js\");\n\n/**\n * The base implementation of `_.forEach` without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Array|Object|string} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array|Object|string} Returns `collection`.\n */\nvar baseEach = createBaseEach(baseForOwn);\n\nmodule.exports = baseEach;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseEach.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseFor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseFor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createBaseFor = __webpack_require__(/*! ./createBaseFor */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/createBaseFor.js\");\n\n/**\n * The base implementation of `baseForIn` and `baseForOwn` which iterates\n * over `object` properties returned by `keysFunc` invoking `iteratee` for\n * each property. Iteratee functions may exit iteration early by explicitly\n * returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\nmodule.exports = baseFor;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseFor.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseForOwn.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseForOwn.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFor = __webpack_require__(/*! ./baseFor */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseFor.js\"),\n    keys = __webpack_require__(/*! ../object/keys */ \"./node_modules/bootstrap-menu/node_modules/lodash/object/keys.js\");\n\n/**\n * The base implementation of `_.forOwn` without support for callback\n * shorthands and `this` binding.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns `object`.\n */\nfunction baseForOwn(object, iteratee) {\n  return baseFor(object, iteratee, keys);\n}\n\nmodule.exports = baseForOwn;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseForOwn.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseIndexOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseIndexOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var indexOfNaN = __webpack_require__(/*! ./indexOfNaN */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/indexOfNaN.js\");\n\n/**\n * The base implementation of `_.indexOf` without support for binary searches.\n *\n * @private\n * @param {Array} array The array to search.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseIndexOf(array, value, fromIndex) {\n  if (value !== value) {\n    return indexOfNaN(array, fromIndex);\n  }\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (array[index] === value) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = baseIndexOf;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseIndexOf.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseProperty.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseProperty.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = baseProperty;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseProperty.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseToString.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseToString.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts `value` to a string if it's not one. An empty string is returned\n * for `null` or `undefined` values.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  return value == null ? '' : (value + '');\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseToString.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/baseValues.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/baseValues.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.values` and `_.valuesIn` which creates an\n * array of `object` property values corresponding to the property names\n * of `props`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array} props The property names to get values for.\n * @returns {Object} Returns the array of property values.\n */\nfunction baseValues(object, props) {\n  var index = -1,\n      length = props.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = object[props[index]];\n  }\n  return result;\n}\n\nmodule.exports = baseValues;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/baseValues.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/bindCallback.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/bindCallback.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var identity = __webpack_require__(/*! ../utility/identity */ \"./node_modules/bootstrap-menu/node_modules/lodash/utility/identity.js\");\n\n/**\n * A specialized version of `baseCallback` which only supports `this` binding\n * and specifying the number of arguments to provide to `func`.\n *\n * @private\n * @param {Function} func The function to bind.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {number} [argCount] The number of arguments to provide to `func`.\n * @returns {Function} Returns the callback.\n */\nfunction bindCallback(func, thisArg, argCount) {\n  if (typeof func != 'function') {\n    return identity;\n  }\n  if (thisArg === undefined) {\n    return func;\n  }\n  switch (argCount) {\n    case 1: return function(value) {\n      return func.call(thisArg, value);\n    };\n    case 3: return function(value, index, collection) {\n      return func.call(thisArg, value, index, collection);\n    };\n    case 4: return function(accumulator, value, index, collection) {\n      return func.call(thisArg, accumulator, value, index, collection);\n    };\n    case 5: return function(value, other, key, object, source) {\n      return func.call(thisArg, value, other, key, object, source);\n    };\n  }\n  return function() {\n    return func.apply(thisArg, arguments);\n  };\n}\n\nmodule.exports = bindCallback;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/bindCallback.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/createAssigner.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/createAssigner.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bindCallback = __webpack_require__(/*! ./bindCallback */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/bindCallback.js\"),\n    isIterateeCall = __webpack_require__(/*! ./isIterateeCall */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isIterateeCall.js\"),\n    restParam = __webpack_require__(/*! ../function/restParam */ \"./node_modules/bootstrap-menu/node_modules/lodash/function/restParam.js\");\n\n/**\n * Creates a `_.assign`, `_.defaults`, or `_.merge` function.\n *\n * @private\n * @param {Function} assigner The function to assign values.\n * @returns {Function} Returns the new assigner function.\n */\nfunction createAssigner(assigner) {\n  return restParam(function(object, sources) {\n    var index = -1,\n        length = object == null ? 0 : sources.length,\n        customizer = length > 2 ? sources[length - 2] : undefined,\n        guard = length > 2 ? sources[2] : undefined,\n        thisArg = length > 1 ? sources[length - 1] : undefined;\n\n    if (typeof customizer == 'function') {\n      customizer = bindCallback(customizer, thisArg, 5);\n      length -= 2;\n    } else {\n      customizer = typeof thisArg == 'function' ? thisArg : undefined;\n      length -= (customizer ? 1 : 0);\n    }\n    if (guard && isIterateeCall(sources[0], sources[1], guard)) {\n      customizer = length < 3 ? undefined : customizer;\n      length = 1;\n    }\n    while (++index < length) {\n      var source = sources[index];\n      if (source) {\n        assigner(object, source, customizer);\n      }\n    }\n    return object;\n  });\n}\n\nmodule.exports = createAssigner;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/createAssigner.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/createBaseEach.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/createBaseEach.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getLength = __webpack_require__(/*! ./getLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/getLength.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js\"),\n    toObject = __webpack_require__(/*! ./toObject */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/toObject.js\");\n\n/**\n * Creates a `baseEach` or `baseEachRight` function.\n *\n * @private\n * @param {Function} eachFunc The function to iterate over a collection.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseEach(eachFunc, fromRight) {\n  return function(collection, iteratee) {\n    var length = collection ? getLength(collection) : 0;\n    if (!isLength(length)) {\n      return eachFunc(collection, iteratee);\n    }\n    var index = fromRight ? length : -1,\n        iterable = toObject(collection);\n\n    while ((fromRight ? index-- : ++index < length)) {\n      if (iteratee(iterable[index], index, iterable) === false) {\n        break;\n      }\n    }\n    return collection;\n  };\n}\n\nmodule.exports = createBaseEach;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/createBaseEach.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/createBaseFor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/createBaseFor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toObject = __webpack_require__(/*! ./toObject */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/toObject.js\");\n\n/**\n * Creates a base function for `_.forIn` or `_.forInRight`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var iterable = toObject(object),\n        props = keysFunc(object),\n        length = props.length,\n        index = fromRight ? length : -1;\n\n    while ((fromRight ? index-- : ++index < length)) {\n      var key = props[index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\nmodule.exports = createBaseFor;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/createBaseFor.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/createForEach.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/createForEach.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bindCallback = __webpack_require__(/*! ./bindCallback */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/bindCallback.js\"),\n    isArray = __webpack_require__(/*! ../lang/isArray */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isArray.js\");\n\n/**\n * Creates a function for `_.forEach` or `_.forEachRight`.\n *\n * @private\n * @param {Function} arrayFunc The function to iterate over an array.\n * @param {Function} eachFunc The function to iterate over a collection.\n * @returns {Function} Returns the new each function.\n */\nfunction createForEach(arrayFunc, eachFunc) {\n  return function(collection, iteratee, thisArg) {\n    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))\n      ? arrayFunc(collection, iteratee)\n      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));\n  };\n}\n\nmodule.exports = createForEach;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/createForEach.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/getLength.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/getLength.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseProperty = __webpack_require__(/*! ./baseProperty */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseProperty.js\");\n\n/**\n * Gets the \"length\" property value of `object`.\n *\n * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)\n * that affects Safari on at least iOS 8.1-8.3 ARM64.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {*} Returns the \"length\" value.\n */\nvar getLength = baseProperty('length');\n\nmodule.exports = getLength;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/getLength.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/getNative.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/getNative.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isNative = __webpack_require__(/*! ../lang/isNative */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isNative.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = object == null ? undefined : object[key];\n  return isNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/getNative.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/indexOfNaN.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/indexOfNaN.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the index at which the first occurrence of `NaN` is found in `array`.\n *\n * @private\n * @param {Array} array The array to search.\n * @param {number} fromIndex The index to search from.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {number} Returns the index of the matched `NaN`, else `-1`.\n */\nfunction indexOfNaN(array, fromIndex, fromRight) {\n  var length = array.length,\n      index = fromIndex + (fromRight ? 0 : -1);\n\n  while ((fromRight ? index-- : ++index < length)) {\n    var other = array[index];\n    if (other !== other) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = indexOfNaN;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/indexOfNaN.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/isArrayLike.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/isArrayLike.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getLength = __webpack_require__(/*! ./getLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/getLength.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js\");\n\n/**\n * Checks if `value` is array-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(getLength(value));\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/isIndex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/isIndex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to detect unsigned integer values. */\nvar reIsUint = /^\\d+$/;\n\n/**\n * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)\n * of an array-like value.\n */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return value > -1 && value % 1 == 0 && value < length;\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/isIndex.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/isIterateeCall.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/isIterateeCall.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isArrayLike.js\"),\n    isIndex = __webpack_require__(/*! ./isIndex */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isIndex.js\"),\n    isObject = __webpack_require__(/*! ../lang/isObject */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isObject.js\");\n\n/**\n * Checks if the provided arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.\n */\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n  var type = typeof index;\n  if (type == 'number'\n      ? (isArrayLike(object) && isIndex(index, object.length))\n      : (type == 'string' && index in object)) {\n    var other = object[index];\n    return value === value ? (value === other) : (other !== other);\n  }\n  return false;\n}\n\nmodule.exports = isIterateeCall;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/isIterateeCall.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)\n * of an array-like value.\n */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n */\nfunction isLength(value) {\n  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/isObjectLike.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/isObjectLike.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/shimKeys.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/shimKeys.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArguments = __webpack_require__(/*! ../lang/isArguments */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isArguments.js\"),\n    isArray = __webpack_require__(/*! ../lang/isArray */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isArray.js\"),\n    isIndex = __webpack_require__(/*! ./isIndex */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isIndex.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js\"),\n    keysIn = __webpack_require__(/*! ../object/keysIn */ \"./node_modules/bootstrap-menu/node_modules/lodash/object/keysIn.js\");\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A fallback implementation of `Object.keys` which creates an array of the\n * own enumerable property names of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction shimKeys(object) {\n  var props = keysIn(object),\n      propsLength = props.length,\n      length = propsLength && object.length;\n\n  var allowIndexes = !!length && isLength(length) &&\n    (isArray(object) || isArguments(object));\n\n  var index = -1,\n      result = [];\n\n  while (++index < propsLength) {\n    var key = props[index];\n    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = shimKeys;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/shimKeys.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/internal/toObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/internal/toObject.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../lang/isObject */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isObject.js\");\n\n/**\n * Converts `value` to an object if it's not one.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {Object} Returns the object.\n */\nfunction toObject(value) {\n  return isObject(value) ? value : Object(value);\n}\n\nmodule.exports = toObject;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/internal/toObject.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/lang/isArguments.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/lang/isArguments.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ../internal/isArrayLike */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isArrayLike.js\"),\n    isObjectLike = __webpack_require__(/*! ../internal/isObjectLike */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isObjectLike.js\");\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Native method references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is classified as an `arguments` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nfunction isArguments(value) {\n  return isObjectLike(value) && isArrayLike(value) &&\n    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');\n}\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/lang/isArguments.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/lang/isArray.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/lang/isArray.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ../internal/getNative */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/getNative.js\"),\n    isLength = __webpack_require__(/*! ../internal/isLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ../internal/isObjectLike */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar arrayTag = '[object Array]';\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeIsArray = getNative(Array, 'isArray');\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(function() { return arguments; }());\n * // => false\n */\nvar isArray = nativeIsArray || function(value) {\n  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;\n};\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/lang/isArray.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/lang/isFunction.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/lang/isFunction.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isObject.js\");\n\n/** `Object#toString` result references. */\nvar funcTag = '[object Function]';\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in older versions of Chrome and Safari which return 'function' for regexes\n  // and Safari 8 which returns 'object' for typed array constructors.\n  return isObject(value) && objToString.call(value) == funcTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/lang/isFunction.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/lang/isNative.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/lang/isNative.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isFunction.js\"),\n    isObjectLike = __webpack_require__(/*! ../internal/isObjectLike */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isObjectLike.js\");\n\n/** Used to detect host constructors (Safari > 5). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar fnToString = Function.prototype.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  fnToString.call(hasOwnProperty).replace(/[\\\\^$.*+?()[\\]{}|]/g, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * Checks if `value` is a native function.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function, else `false`.\n * @example\n *\n * _.isNative(Array.prototype.push);\n * // => true\n *\n * _.isNative(_);\n * // => false\n */\nfunction isNative(value) {\n  if (value == null) {\n    return false;\n  }\n  if (isFunction(value)) {\n    return reIsNative.test(fnToString.call(value));\n  }\n  return isObjectLike(value) && reIsHostCtor.test(value);\n}\n\nmodule.exports = isNative;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/lang/isNative.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/lang/isObject.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/lang/isObject.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // Avoid a V8 JIT bug in Chrome 19-20.\n  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/lang/isObject.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/lang/isString.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/lang/isString.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObjectLike = __webpack_require__(/*! ../internal/isObjectLike */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar stringTag = '[object String]';\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as a `String` primitive or object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isString('abc');\n * // => true\n *\n * _.isString(1);\n * // => false\n */\nfunction isString(value) {\n  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);\n}\n\nmodule.exports = isString;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/lang/isString.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/object/assign.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/object/assign.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignWith = __webpack_require__(/*! ../internal/assignWith */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/assignWith.js\"),\n    baseAssign = __webpack_require__(/*! ../internal/baseAssign */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseAssign.js\"),\n    createAssigner = __webpack_require__(/*! ../internal/createAssigner */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/createAssigner.js\");\n\n/**\n * Assigns own enumerable properties of source object(s) to the destination\n * object. Subsequent sources overwrite property assignments of previous sources.\n * If `customizer` is provided it's invoked to produce the assigned values.\n * The `customizer` is bound to `thisArg` and invoked with five arguments:\n * (objectValue, sourceValue, key, object, source).\n *\n * **Note:** This method mutates `object` and is based on\n * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).\n *\n * @static\n * @memberOf _\n * @alias extend\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @param {Function} [customizer] The function to customize assigned values.\n * @param {*} [thisArg] The `this` binding of `customizer`.\n * @returns {Object} Returns `object`.\n * @example\n *\n * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });\n * // => { 'user': 'fred', 'age': 40 }\n *\n * // using a customizer callback\n * var defaults = _.partialRight(_.assign, function(value, other) {\n *   return _.isUndefined(value) ? other : value;\n * });\n *\n * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });\n * // => { 'user': 'barney', 'age': 36 }\n */\nvar assign = createAssigner(function(object, source, customizer) {\n  return customizer\n    ? assignWith(object, source, customizer)\n    : baseAssign(object, source);\n});\n\nmodule.exports = assign;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/object/assign.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/object/extend.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/object/extend.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./assign */ \"./node_modules/bootstrap-menu/node_modules/lodash/object/assign.js\");\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/object/extend.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/object/keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/object/keys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ../internal/getNative */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/getNative.js\"),\n    isArrayLike = __webpack_require__(/*! ../internal/isArrayLike */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isArrayLike.js\"),\n    isObject = __webpack_require__(/*! ../lang/isObject */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isObject.js\"),\n    shimKeys = __webpack_require__(/*! ../internal/shimKeys */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/shimKeys.js\");\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = getNative(Object, 'keys');\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nvar keys = !nativeKeys ? shimKeys : function(object) {\n  var Ctor = object == null ? undefined : object.constructor;\n  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||\n      (typeof object != 'function' && isArrayLike(object))) {\n    return shimKeys(object);\n  }\n  return isObject(object) ? nativeKeys(object) : [];\n};\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/object/keys.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/object/keysIn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/object/keysIn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArguments = __webpack_require__(/*! ../lang/isArguments */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isArguments.js\"),\n    isArray = __webpack_require__(/*! ../lang/isArray */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isArray.js\"),\n    isIndex = __webpack_require__(/*! ../internal/isIndex */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isIndex.js\"),\n    isLength = __webpack_require__(/*! ../internal/isLength */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/isLength.js\"),\n    isObject = __webpack_require__(/*! ../lang/isObject */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isObject.js\");\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  if (object == null) {\n    return [];\n  }\n  if (!isObject(object)) {\n    object = Object(object);\n  }\n  var length = object.length;\n  length = (length && isLength(length) &&\n    (isArray(object) || isArguments(object)) && length) || 0;\n\n  var Ctor = object.constructor,\n      index = -1,\n      isProto = typeof Ctor == 'function' && Ctor.prototype === object,\n      result = Array(length),\n      skipIndexes = length > 0;\n\n  while (++index < length) {\n    result[index] = (index + '');\n  }\n  for (var key in object) {\n    if (!(skipIndexes && isIndex(key, length)) &&\n        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = keysIn;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/object/keysIn.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/object/values.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/object/values.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseValues = __webpack_require__(/*! ../internal/baseValues */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseValues.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/bootstrap-menu/node_modules/lodash/object/keys.js\");\n\n/**\n * Creates an array of the own enumerable property values of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property values.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.values(new Foo);\n * // => [1, 2] (iteration order is not guaranteed)\n *\n * _.values('hi');\n * // => ['h', 'i']\n */\nfunction values(object) {\n  return baseValues(object, keys(object));\n}\n\nmodule.exports = values;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/object/values.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/utility/identity.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/utility/identity.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument provided to it.\n *\n * @static\n * @memberOf _\n * @category Utility\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'user': 'fred' };\n *\n * _.identity(object) === object;\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/utility/identity.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/utility/noop.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/utility/noop.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A no-operation function that returns `undefined` regardless of the\n * arguments it receives.\n *\n * @static\n * @memberOf _\n * @category Utility\n * @example\n *\n * var object = { 'user': 'fred' };\n *\n * _.noop(object) === undefined;\n * // => true\n */\nfunction noop() {\n  // No operation performed.\n}\n\nmodule.exports = noop;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/utility/noop.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/node_modules/lodash/utility/uniqueId.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-menu/node_modules/lodash/utility/uniqueId.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ../internal/baseToString */ \"./node_modules/bootstrap-menu/node_modules/lodash/internal/baseToString.js\");\n\n/** Used to generate unique IDs. */\nvar idCounter = 0;\n\n/**\n * Generates a unique ID. If `prefix` is provided the ID is appended to it.\n *\n * @static\n * @memberOf _\n * @category Utility\n * @param {string} [prefix] The value to prefix the ID with.\n * @returns {string} Returns the unique ID.\n * @example\n *\n * _.uniqueId('contact_');\n * // => 'contact_104'\n *\n * _.uniqueId();\n * // => '105'\n */\nfunction uniqueId(prefix) {\n  var id = ++idCounter;\n  return baseToString(prefix) + id;\n}\n\nmodule.exports = uniqueId;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/node_modules/lodash/utility/uniqueId.js?");

/***/ }),

/***/ "./node_modules/bootstrap-menu/src/BootstrapMenu.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-menu/src/BootstrapMenu.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classNames = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\nvar $ = __webpack_require__(/*! jquery */ \"jquery\");\n__webpack_require__(/*! jquery-ui/ui/position */ \"./node_modules/jquery-ui/ui/position.js\");\n\n// modular lodash requires\nvar _ = function() {\n  throw new Error('Custom lodash build for BootstrapMenu. lodash chaining is not included');\n};\n\n_.noop = __webpack_require__(/*! lodash/utility/noop */ \"./node_modules/bootstrap-menu/node_modules/lodash/utility/noop.js\");\n_.each = __webpack_require__(/*! lodash/collection/each */ \"./node_modules/bootstrap-menu/node_modules/lodash/collection/each.js\");\n_.contains = __webpack_require__(/*! lodash/collection/contains */ \"./node_modules/bootstrap-menu/node_modules/lodash/collection/contains.js\");\n_.extend = __webpack_require__(/*! lodash/object/extend */ \"./node_modules/bootstrap-menu/node_modules/lodash/object/extend.js\");\n_.uniqueId = __webpack_require__(/*! lodash/utility/uniqueId */ \"./node_modules/bootstrap-menu/node_modules/lodash/utility/uniqueId.js\");\n_.isFunction = __webpack_require__(/*! lodash/lang/isFunction */ \"./node_modules/bootstrap-menu/node_modules/lodash/lang/isFunction.js\");\n\n\nvar defaultOptions = {\n    /* container of the context menu, where it will be created and where\n     * event listeners will be installed. */\n    container: 'body',\n\n    /* user-defined function to obtain specific data about the currently\n     * opened element, to pass it to the rest of user-defined functions\n     * of an action. */\n    fetchElementData: _.noop,\n\n    /* what the source of the context menu should be when opened.\n     * Valid values are 'mouse' and 'element'. */\n    menuSource: 'mouse',\n\n    /* how to calculate the position of the context menu based on its source.\n     * Valid values are 'aboveLeft', 'aboveRight', 'belowLeft', and 'belowRight'. */\n    menuPosition: 'belowLeft',\n\n    /* the event to listen to open the menu.\n     * Valid values are 'click', 'right-click', 'hover' */\n    menuEvent: 'right-click', // TODO rename to menuAction in next mayor version\n\n    /* group actions to render them next to each other, with a separator\n     * between each group. */\n    actionsGroups: [],\n\n    /* message to show when there are no actions to show in a menu\n     * (isShown() returned false on all actions) */\n    noActionsMessage: 'No available actions',\n\n    /* In some weird cases, another plugin may be installing 'click' listeners\n     * in the anchors used for each action of the context menu, and stopping\n     * the event bubbling before it reachs this plugin's listener.\n     *\n     * For those cases, _actionSelectEvent can be used to change the event we\n     * listen to, for example to 'mousedown'.\n     *\n     * Unless the context menu is not working due to this and a workaround is\n     * needed, this option can be safely ignored.\n     */\n    _actionSelectEvent: 'click'\n};\n\nfunction renderMenu(_this) {\n    var $menu = $('<div class=\"dropdown bootstrapMenu\" style=\"z-index:10000;position:absolute;\" />');\n\n    var $ul = $('<ul class=\"dropdown-menu\" style=\"position:static;display:block;font-size:0.9em;\" />');\n\n    // group all actions following the actionsGroups option, to\n    // add a separator between each of them.\n    var groups = [];\n\n    // default group where all ungrouped actions will go\n    groups[0] = [];\n\n    // add the rest of groups\n    _.each(_this.options.actionsGroups, function(groupArr, ind) {\n        groups[ind+1] = [];\n    });\n\n    // find out if any of the actions has an icon\n    var actionsHaveIcon = false;\n\n    // add each action to the group it belongs to, or the default group\n    _.each(_this.options.actions, function(action, actionId) {\n        var addedToGroup = false;\n\n        _.each(_this.options.actionsGroups, function(groupArr, ind) {\n            if (_.contains(groupArr, actionId)) {\n                groups[ind+1].push(actionId);\n                addedToGroup = true;\n            }\n        });\n\n        if (addedToGroup === false) {\n            groups[0].push(actionId);\n        }\n\n        if (typeof action.iconClass !== 'undefined') {\n            actionsHaveIcon = true;\n        }\n    });\n\n    var isFirstNonEmptyGroup = true;\n\n    _.each(groups, function(actionsIds) {\n        if (actionsIds.length == 0)\n            return;\n\n        if (isFirstNonEmptyGroup === false) {\n            $ul.append('<li class=\"divider\"></li>');\n        }\n        isFirstNonEmptyGroup = false;\n\n        _.each(actionsIds, function(actionId) {\n            var action = _this.options.actions[actionId];\n\n            /* At least an action has an icon. Add the icon of the current action,\n             * or room to align it with the actions which do have one. */\n            if (actionsHaveIcon === true) {\n                $ul.append(\n                    '<li role=\"presentation\" data-action=\"'+actionId+'\">' +\n                    '<a href=\"#\" role=\"menuitem\">' +\n                    '<i class=\"fa fa-fw fa-lg ' + (action.iconClass || '') + '\"></i> ' +\n                    '<span class=\"actionName\"></span>' +\n                    '</a>' +\n                    '</li>'\n                );\n            }\n            // neither of the actions have an icon.\n            else {\n                $ul.append(\n                    '<li role=\"presentation\" data-action=\"'+actionId+'\">' +\n                    '<a href=\"#\" role=\"menuitem\"><span class=\"actionName\"></span></a>' +\n                    '</li>'\n                );\n            }\n        });\n\n        $ul.append(\n            '<li role=\"presentation\" class=\"noActionsMessage disabled\">' +\n            '<a href=\"#\" role=\"menuitem\">' +\n            '<span>' + _this.options.noActionsMessage + '</span>' +\n            '</a>' +\n            '</li>'\n        );\n    });\n\n    return $menu.append($ul);\n}\n\nfunction setupOpenEventListeners(_this) {\n    var openEventName = null;\n\n    switch (_this.options.menuEvent) {\n        case 'click':\n            openEventName = 'click';\n            break;\n        case 'right-click':\n            openEventName = 'contextmenu';\n            break;\n        case 'hover':\n            openEventName = 'mouseenter';\n            break;\n        default:\n            throw new Error(\"Unknown BootstrapMenu 'menuEvent' option\");\n    }\n\n    // install the handler for every future elements where\n    // the context menu will open\n    _this.$container.on(openEventName + _this.namespace, _this.selector, function(evt) {\n        var $openTarget = $(this);\n\n        _this.open($openTarget, evt);\n\n        // cancel event propagation, to avoid it bubbling up to this.$container\n        // and closing the context menu as if the user clicked outside the menu.\n        return false;\n    });\n}\n\nfunction clearOpenEventListeners(_this) {\n    _this.$container.off(_this.namespace);\n}\n\nfunction setupActionsEventListeners(_this) {\n    var actionSelectEvent = _this.options._actionSelectEvent + _this.namespace;\n\n    // handler to run when an option is selected\n    _this.$menu.on(actionSelectEvent, function(evt) {\n        evt.preventDefault();\n        evt.stopPropagation();\n\n        var $target = $(evt.target);\n        var $action = $target.closest('[data-action]');\n\n        // check if the clicked element is an action, and its enabled.\n        // if not don't do anything\n        if (!$action || !$action.length || $action.is('.disabled')) {\n            return;\n        }\n\n        var actionId = $action.data('action');\n        var targetData = _this.options.fetchElementData(_this.$openTarget);\n\n        /* call the user click handler. It receives the optional user-defined data,\n         * or undefined. */\n        _this.options.actions[actionId].onClick(targetData);\n\n        // close the menu\n        _this.close();\n    });\n}\n\nfunction clearActionsEventListeners(_this) {\n    _this.$menu.off(_this.namespace);\n}\n\nfunction setupCloseEventListeners(_this) {\n    switch (_this.options.menuEvent) {\n        case 'click':\n            break;\n        case 'right-click':\n            break;\n        case 'hover':\n            // close the menu when the mouse is moved outside both\n            // the element where the context menu was opened, and\n            // the context menu itself.\n            var $elemsToCheck = _this.$openTarget.add(_this.$menu);\n\n            $elemsToCheck.on('mouseleave' + _this.closeNamespace, function(evt) {\n                var destElement = evt.toElement || evt.relatedTarget;\n                if (!_this.$openTarget.is(destElement) && !_this.$menu.is(destElement)) {\n                    $elemsToCheck.off(_this.closeNamespace);\n                    _this.close();\n                }\n            });\n            break;\n        default:\n            throw new Error(\"Unknown BootstrapMenu 'menuEvent' option\");\n    }\n\n    // it the user clicks outside the context menu, close it.\n    _this.$container.on('click' + _this.closeNamespace, function() {\n        _this.close();\n    });\n}\n\nfunction clearCloseEventListeners(_this) {\n    _this.$container.off(_this.closeNamespace);\n}\n\nvar BootstrapMenu = function(selector, options) {\n    this.selector = selector;\n    this.options = _.extend({}, defaultOptions, options);\n\n    // namespaces to use when registering event listeners\n    this.namespace = _.uniqueId('.BootstrapMenu_');\n    this.closeNamespace = _.uniqueId('.BootstrapMenuClose_');\n\n    this.init();\n};\n\nvar existingInstances = [];\n\nBootstrapMenu.prototype.init = function() {\n    this.$container = $(this.options.container);\n\n    // jQuery object of the rendered context menu. Not part of the DOM yet.\n    this.$menu = renderMenu(this);\n    this.$menuList = this.$menu.children();\n\n    /* append the context menu to <body> to be able to use \"position: absolute\"\n     * absolute to the whole window. */\n    this.$menu.hide().appendTo(this.$container);\n\n    /* the element in which the context menu was opened. Updated every time\n     * the menu is opened. */\n    this.$openTarget = null;\n\n    /* event that triggered the context menu to open. Updated every time\n     * the menu is opened. */\n    this.openEvent = null;\n\n    setupOpenEventListeners(this);\n\n    setupActionsEventListeners(this);\n\n    // keep track of all the existing context menu instances in the page\n    existingInstances.push(this);\n};\n\nBootstrapMenu.prototype.updatePosition = function() {\n    var menuLocation = null; // my\n    var relativeToElem = null; // of\n    var relativeToLocation = null; // at\n\n    switch (this.options.menuSource) {\n        case 'element':\n            relativeToElem = this.$openTarget;\n            break;\n        case 'mouse':\n            relativeToElem = this.openEvent;\n            break;\n        default:\n            throw new Error(\"Unknown BootstrapMenu 'menuSource' option\");\n    }\n\n    switch (this.options.menuPosition) {\n        case 'belowRight':\n            menuLocation = 'right top';\n            relativeToLocation = 'right bottom';\n            break;\n        case 'belowLeft':\n            menuLocation = 'left top';\n            relativeToLocation = 'left bottom';\n            break;\n        case 'aboveRight':\n            menuLocation = 'right bottom';\n            relativeToLocation = 'right top';\n            break;\n        case 'aboveLeft':\n            menuLocation = 'left bottom';\n            relativeToLocation = 'left top';\n            break;\n        default:\n            throw new Error(\"Unknown BootstrapMenu 'menuPosition' option\");\n    }\n\n    // update the menu's height and width manually\n    this.$menu.css({ display: 'block' });\n\n    // once the menu is not hidden anymore, we can obtain its content's height and width,\n    // to manually update it in the menu\n    this.$menu.css({\n        height: this.$menuList.height(),\n        width: this.$menuList.width()\n    });\n\n    this.$menu.position({ my: menuLocation, at: relativeToLocation, of: relativeToElem });\n};\n\n// open the context menu\nBootstrapMenu.prototype.open = function($openTarget, event) {\n    var _this = this;\n\n    // first close all open instances of opened context menus in the page\n    BootstrapMenu.closeAll();\n\n    this.$openTarget = $openTarget;\n\n    this.openEvent = event;\n\n    var targetData = _this.options.fetchElementData(_this.$openTarget);\n\n    var $actions = this.$menu.find('[data-action]'),\n        $noActionsMsg = this.$menu.find('.noActionsMessage');\n\n    // clear previously hidden actions, and hide by default the 'No actions' message\n    $actions.show();\n    $noActionsMsg.hide();\n\n    var numShown = 0;\n\n    /* go through all actions to update the text to show, which ones to show\n     * enabled/disabled and which ones to hide. */\n    $actions.each(function() {\n        var $action = $(this);\n\n        var actionId = $action.data('action');\n        var action = _this.options.actions[actionId];\n\n        var classes = action.classNames || null;\n\n        if (classes && _.isFunction(classes))\n            classes = classes(targetData);\n\n        $action.attr('class', classNames(classes || ''));\n\n        if (action.isShown && action.isShown(targetData) === false) {\n            $action.hide();\n            return;\n        } else {\n            numShown++;\n        }\n\n        // the name provided for an action may be dynamic, provided as a function\n        $action.find('.actionName').html(\n            _.isFunction(action.name) && action.name(targetData) || action.name\n        );\n\n        if (action.isEnabled && action.isEnabled(targetData) === false) {\n            $action.addClass('disabled');\n        }\n    });\n\n    if (numShown === 0) {\n        $noActionsMsg.show();\n    }\n\n    // once it is known which actions are or arent being shown\n    // (so we know the final height of the context menu),\n    // calculate its position\n    this.updatePosition();\n\n    this.$menu.show();\n\n    setupCloseEventListeners(this);\n};\n\n// close the context menu\nBootstrapMenu.prototype.close = function() {\n    // hide the menu\n    this.$menu.hide();\n\n    clearCloseEventListeners(this);\n};\n\nBootstrapMenu.prototype.destroy = function() {\n    this.close();\n    clearOpenEventListeners(this);\n    clearActionsEventListeners(this);\n};\n\n// close all instances of context menus\nBootstrapMenu.closeAll = function() {\n    _.each(existingInstances, function(contextMenu) {\n        contextMenu.close();\n    });\n};\n\nmodule.exports = BootstrapMenu;\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-menu/src/BootstrapMenu.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/jquery-ui/ui/position.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery-ui/ui/position.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * jQuery UI Position 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/position/\n */\n\n//>>label: Position\n//>>group: Core\n//>>description: Positions elements relative to other elements.\n//>>docs: http://api.jqueryui.com/position/\n//>>demos: http://jqueryui.com/position/\n\n( function( factory ) {\n\tif ( true ) {\n\n\t\t// AMD. Register as an anonymous module.\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ \"jquery\"), __webpack_require__(/*! ./version */ \"./node_modules/jquery-ui/ui/version.js\") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}( function( $ ) {\n( function() {\nvar cachedScrollbarWidth,\n\tmax = Math.max,\n\tabs = Math.abs,\n\trhorizontal = /left|center|right/,\n\trvertical = /top|center|bottom/,\n\troffset = /[\\+\\-]\\d+(\\.[\\d]+)?%?/,\n\trposition = /^\\w+/,\n\trpercent = /%$/,\n\t_position = $.fn.position;\n\nfunction getOffsets( offsets, width, height ) {\n\treturn [\n\t\tparseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),\n\t\tparseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )\n\t];\n}\n\nfunction parseCss( element, property ) {\n\treturn parseInt( $.css( element, property ), 10 ) || 0;\n}\n\nfunction getDimensions( elem ) {\n\tvar raw = elem[ 0 ];\n\tif ( raw.nodeType === 9 ) {\n\t\treturn {\n\t\t\twidth: elem.width(),\n\t\t\theight: elem.height(),\n\t\t\toffset: { top: 0, left: 0 }\n\t\t};\n\t}\n\tif ( $.isWindow( raw ) ) {\n\t\treturn {\n\t\t\twidth: elem.width(),\n\t\t\theight: elem.height(),\n\t\t\toffset: { top: elem.scrollTop(), left: elem.scrollLeft() }\n\t\t};\n\t}\n\tif ( raw.preventDefault ) {\n\t\treturn {\n\t\t\twidth: 0,\n\t\t\theight: 0,\n\t\t\toffset: { top: raw.pageY, left: raw.pageX }\n\t\t};\n\t}\n\treturn {\n\t\twidth: elem.outerWidth(),\n\t\theight: elem.outerHeight(),\n\t\toffset: elem.offset()\n\t};\n}\n\n$.position = {\n\tscrollbarWidth: function() {\n\t\tif ( cachedScrollbarWidth !== undefined ) {\n\t\t\treturn cachedScrollbarWidth;\n\t\t}\n\t\tvar w1, w2,\n\t\t\tdiv = $( \"<div \" +\n\t\t\t\t\"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>\" +\n\t\t\t\t\"<div style='height:100px;width:auto;'></div></div>\" ),\n\t\t\tinnerDiv = div.children()[ 0 ];\n\n\t\t$( \"body\" ).append( div );\n\t\tw1 = innerDiv.offsetWidth;\n\t\tdiv.css( \"overflow\", \"scroll\" );\n\n\t\tw2 = innerDiv.offsetWidth;\n\n\t\tif ( w1 === w2 ) {\n\t\t\tw2 = div[ 0 ].clientWidth;\n\t\t}\n\n\t\tdiv.remove();\n\n\t\treturn ( cachedScrollbarWidth = w1 - w2 );\n\t},\n\tgetScrollInfo: function( within ) {\n\t\tvar overflowX = within.isWindow || within.isDocument ? \"\" :\n\t\t\t\twithin.element.css( \"overflow-x\" ),\n\t\t\toverflowY = within.isWindow || within.isDocument ? \"\" :\n\t\t\t\twithin.element.css( \"overflow-y\" ),\n\t\t\thasOverflowX = overflowX === \"scroll\" ||\n\t\t\t\t( overflowX === \"auto\" && within.width < within.element[ 0 ].scrollWidth ),\n\t\t\thasOverflowY = overflowY === \"scroll\" ||\n\t\t\t\t( overflowY === \"auto\" && within.height < within.element[ 0 ].scrollHeight );\n\t\treturn {\n\t\t\twidth: hasOverflowY ? $.position.scrollbarWidth() : 0,\n\t\t\theight: hasOverflowX ? $.position.scrollbarWidth() : 0\n\t\t};\n\t},\n\tgetWithinInfo: function( element ) {\n\t\tvar withinElement = $( element || window ),\n\t\t\tisWindow = $.isWindow( withinElement[ 0 ] ),\n\t\t\tisDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,\n\t\t\thasOffset = !isWindow && !isDocument;\n\t\treturn {\n\t\t\telement: withinElement,\n\t\t\tisWindow: isWindow,\n\t\t\tisDocument: isDocument,\n\t\t\toffset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },\n\t\t\tscrollLeft: withinElement.scrollLeft(),\n\t\t\tscrollTop: withinElement.scrollTop(),\n\t\t\twidth: withinElement.outerWidth(),\n\t\t\theight: withinElement.outerHeight()\n\t\t};\n\t}\n};\n\n$.fn.position = function( options ) {\n\tif ( !options || !options.of ) {\n\t\treturn _position.apply( this, arguments );\n\t}\n\n\t// Make a copy, we don't want to modify arguments\n\toptions = $.extend( {}, options );\n\n\tvar atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,\n\t\ttarget = $( options.of ),\n\t\twithin = $.position.getWithinInfo( options.within ),\n\t\tscrollInfo = $.position.getScrollInfo( within ),\n\t\tcollision = ( options.collision || \"flip\" ).split( \" \" ),\n\t\toffsets = {};\n\n\tdimensions = getDimensions( target );\n\tif ( target[ 0 ].preventDefault ) {\n\n\t\t// Force left top to allow flipping\n\t\toptions.at = \"left top\";\n\t}\n\ttargetWidth = dimensions.width;\n\ttargetHeight = dimensions.height;\n\ttargetOffset = dimensions.offset;\n\n\t// Clone to reuse original targetOffset later\n\tbasePosition = $.extend( {}, targetOffset );\n\n\t// Force my and at to have valid horizontal and vertical positions\n\t// if a value is missing or invalid, it will be converted to center\n\t$.each( [ \"my\", \"at\" ], function() {\n\t\tvar pos = ( options[ this ] || \"\" ).split( \" \" ),\n\t\t\thorizontalOffset,\n\t\t\tverticalOffset;\n\n\t\tif ( pos.length === 1 ) {\n\t\t\tpos = rhorizontal.test( pos[ 0 ] ) ?\n\t\t\t\tpos.concat( [ \"center\" ] ) :\n\t\t\t\trvertical.test( pos[ 0 ] ) ?\n\t\t\t\t\t[ \"center\" ].concat( pos ) :\n\t\t\t\t\t[ \"center\", \"center\" ];\n\t\t}\n\t\tpos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : \"center\";\n\t\tpos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : \"center\";\n\n\t\t// Calculate offsets\n\t\thorizontalOffset = roffset.exec( pos[ 0 ] );\n\t\tverticalOffset = roffset.exec( pos[ 1 ] );\n\t\toffsets[ this ] = [\n\t\t\thorizontalOffset ? horizontalOffset[ 0 ] : 0,\n\t\t\tverticalOffset ? verticalOffset[ 0 ] : 0\n\t\t];\n\n\t\t// Reduce to just the positions without the offsets\n\t\toptions[ this ] = [\n\t\t\trposition.exec( pos[ 0 ] )[ 0 ],\n\t\t\trposition.exec( pos[ 1 ] )[ 0 ]\n\t\t];\n\t} );\n\n\t// Normalize collision option\n\tif ( collision.length === 1 ) {\n\t\tcollision[ 1 ] = collision[ 0 ];\n\t}\n\n\tif ( options.at[ 0 ] === \"right\" ) {\n\t\tbasePosition.left += targetWidth;\n\t} else if ( options.at[ 0 ] === \"center\" ) {\n\t\tbasePosition.left += targetWidth / 2;\n\t}\n\n\tif ( options.at[ 1 ] === \"bottom\" ) {\n\t\tbasePosition.top += targetHeight;\n\t} else if ( options.at[ 1 ] === \"center\" ) {\n\t\tbasePosition.top += targetHeight / 2;\n\t}\n\n\tatOffset = getOffsets( offsets.at, targetWidth, targetHeight );\n\tbasePosition.left += atOffset[ 0 ];\n\tbasePosition.top += atOffset[ 1 ];\n\n\treturn this.each( function() {\n\t\tvar collisionPosition, using,\n\t\t\telem = $( this ),\n\t\t\telemWidth = elem.outerWidth(),\n\t\t\telemHeight = elem.outerHeight(),\n\t\t\tmarginLeft = parseCss( this, \"marginLeft\" ),\n\t\t\tmarginTop = parseCss( this, \"marginTop\" ),\n\t\t\tcollisionWidth = elemWidth + marginLeft + parseCss( this, \"marginRight\" ) +\n\t\t\t\tscrollInfo.width,\n\t\t\tcollisionHeight = elemHeight + marginTop + parseCss( this, \"marginBottom\" ) +\n\t\t\t\tscrollInfo.height,\n\t\t\tposition = $.extend( {}, basePosition ),\n\t\t\tmyOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );\n\n\t\tif ( options.my[ 0 ] === \"right\" ) {\n\t\t\tposition.left -= elemWidth;\n\t\t} else if ( options.my[ 0 ] === \"center\" ) {\n\t\t\tposition.left -= elemWidth / 2;\n\t\t}\n\n\t\tif ( options.my[ 1 ] === \"bottom\" ) {\n\t\t\tposition.top -= elemHeight;\n\t\t} else if ( options.my[ 1 ] === \"center\" ) {\n\t\t\tposition.top -= elemHeight / 2;\n\t\t}\n\n\t\tposition.left += myOffset[ 0 ];\n\t\tposition.top += myOffset[ 1 ];\n\n\t\tcollisionPosition = {\n\t\t\tmarginLeft: marginLeft,\n\t\t\tmarginTop: marginTop\n\t\t};\n\n\t\t$.each( [ \"left\", \"top\" ], function( i, dir ) {\n\t\t\tif ( $.ui.position[ collision[ i ] ] ) {\n\t\t\t\t$.ui.position[ collision[ i ] ][ dir ]( position, {\n\t\t\t\t\ttargetWidth: targetWidth,\n\t\t\t\t\ttargetHeight: targetHeight,\n\t\t\t\t\telemWidth: elemWidth,\n\t\t\t\t\telemHeight: elemHeight,\n\t\t\t\t\tcollisionPosition: collisionPosition,\n\t\t\t\t\tcollisionWidth: collisionWidth,\n\t\t\t\t\tcollisionHeight: collisionHeight,\n\t\t\t\t\toffset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],\n\t\t\t\t\tmy: options.my,\n\t\t\t\t\tat: options.at,\n\t\t\t\t\twithin: within,\n\t\t\t\t\telem: elem\n\t\t\t\t} );\n\t\t\t}\n\t\t} );\n\n\t\tif ( options.using ) {\n\n\t\t\t// Adds feedback as second argument to using callback, if present\n\t\t\tusing = function( props ) {\n\t\t\t\tvar left = targetOffset.left - position.left,\n\t\t\t\t\tright = left + targetWidth - elemWidth,\n\t\t\t\t\ttop = targetOffset.top - position.top,\n\t\t\t\t\tbottom = top + targetHeight - elemHeight,\n\t\t\t\t\tfeedback = {\n\t\t\t\t\t\ttarget: {\n\t\t\t\t\t\t\telement: target,\n\t\t\t\t\t\t\tleft: targetOffset.left,\n\t\t\t\t\t\t\ttop: targetOffset.top,\n\t\t\t\t\t\t\twidth: targetWidth,\n\t\t\t\t\t\t\theight: targetHeight\n\t\t\t\t\t\t},\n\t\t\t\t\t\telement: {\n\t\t\t\t\t\t\telement: elem,\n\t\t\t\t\t\t\tleft: position.left,\n\t\t\t\t\t\t\ttop: position.top,\n\t\t\t\t\t\t\twidth: elemWidth,\n\t\t\t\t\t\t\theight: elemHeight\n\t\t\t\t\t\t},\n\t\t\t\t\t\thorizontal: right < 0 ? \"left\" : left > 0 ? \"right\" : \"center\",\n\t\t\t\t\t\tvertical: bottom < 0 ? \"top\" : top > 0 ? \"bottom\" : \"middle\"\n\t\t\t\t\t};\n\t\t\t\tif ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {\n\t\t\t\t\tfeedback.horizontal = \"center\";\n\t\t\t\t}\n\t\t\t\tif ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {\n\t\t\t\t\tfeedback.vertical = \"middle\";\n\t\t\t\t}\n\t\t\t\tif ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {\n\t\t\t\t\tfeedback.important = \"horizontal\";\n\t\t\t\t} else {\n\t\t\t\t\tfeedback.important = \"vertical\";\n\t\t\t\t}\n\t\t\t\toptions.using.call( this, props, feedback );\n\t\t\t};\n\t\t}\n\n\t\telem.offset( $.extend( position, { using: using } ) );\n\t} );\n};\n\n$.ui.position = {\n\tfit: {\n\t\tleft: function( position, data ) {\n\t\t\tvar within = data.within,\n\t\t\t\twithinOffset = within.isWindow ? within.scrollLeft : within.offset.left,\n\t\t\t\touterWidth = within.width,\n\t\t\t\tcollisionPosLeft = position.left - data.collisionPosition.marginLeft,\n\t\t\t\toverLeft = withinOffset - collisionPosLeft,\n\t\t\t\toverRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,\n\t\t\t\tnewOverRight;\n\n\t\t\t// Element is wider than within\n\t\t\tif ( data.collisionWidth > outerWidth ) {\n\n\t\t\t\t// Element is initially over the left side of within\n\t\t\t\tif ( overLeft > 0 && overRight <= 0 ) {\n\t\t\t\t\tnewOverRight = position.left + overLeft + data.collisionWidth - outerWidth -\n\t\t\t\t\t\twithinOffset;\n\t\t\t\t\tposition.left += overLeft - newOverRight;\n\n\t\t\t\t// Element is initially over right side of within\n\t\t\t\t} else if ( overRight > 0 && overLeft <= 0 ) {\n\t\t\t\t\tposition.left = withinOffset;\n\n\t\t\t\t// Element is initially over both left and right sides of within\n\t\t\t\t} else {\n\t\t\t\t\tif ( overLeft > overRight ) {\n\t\t\t\t\t\tposition.left = withinOffset + outerWidth - data.collisionWidth;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tposition.left = withinOffset;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t// Too far left -> align with left edge\n\t\t\t} else if ( overLeft > 0 ) {\n\t\t\t\tposition.left += overLeft;\n\n\t\t\t// Too far right -> align with right edge\n\t\t\t} else if ( overRight > 0 ) {\n\t\t\t\tposition.left -= overRight;\n\n\t\t\t// Adjust based on position and margin\n\t\t\t} else {\n\t\t\t\tposition.left = max( position.left - collisionPosLeft, position.left );\n\t\t\t}\n\t\t},\n\t\ttop: function( position, data ) {\n\t\t\tvar within = data.within,\n\t\t\t\twithinOffset = within.isWindow ? within.scrollTop : within.offset.top,\n\t\t\t\touterHeight = data.within.height,\n\t\t\t\tcollisionPosTop = position.top - data.collisionPosition.marginTop,\n\t\t\t\toverTop = withinOffset - collisionPosTop,\n\t\t\t\toverBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,\n\t\t\t\tnewOverBottom;\n\n\t\t\t// Element is taller than within\n\t\t\tif ( data.collisionHeight > outerHeight ) {\n\n\t\t\t\t// Element is initially over the top of within\n\t\t\t\tif ( overTop > 0 && overBottom <= 0 ) {\n\t\t\t\t\tnewOverBottom = position.top + overTop + data.collisionHeight - outerHeight -\n\t\t\t\t\t\twithinOffset;\n\t\t\t\t\tposition.top += overTop - newOverBottom;\n\n\t\t\t\t// Element is initially over bottom of within\n\t\t\t\t} else if ( overBottom > 0 && overTop <= 0 ) {\n\t\t\t\t\tposition.top = withinOffset;\n\n\t\t\t\t// Element is initially over both top and bottom of within\n\t\t\t\t} else {\n\t\t\t\t\tif ( overTop > overBottom ) {\n\t\t\t\t\t\tposition.top = withinOffset + outerHeight - data.collisionHeight;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tposition.top = withinOffset;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t// Too far up -> align with top\n\t\t\t} else if ( overTop > 0 ) {\n\t\t\t\tposition.top += overTop;\n\n\t\t\t// Too far down -> align with bottom edge\n\t\t\t} else if ( overBottom > 0 ) {\n\t\t\t\tposition.top -= overBottom;\n\n\t\t\t// Adjust based on position and margin\n\t\t\t} else {\n\t\t\t\tposition.top = max( position.top - collisionPosTop, position.top );\n\t\t\t}\n\t\t}\n\t},\n\tflip: {\n\t\tleft: function( position, data ) {\n\t\t\tvar within = data.within,\n\t\t\t\twithinOffset = within.offset.left + within.scrollLeft,\n\t\t\t\touterWidth = within.width,\n\t\t\t\toffsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,\n\t\t\t\tcollisionPosLeft = position.left - data.collisionPosition.marginLeft,\n\t\t\t\toverLeft = collisionPosLeft - offsetLeft,\n\t\t\t\toverRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,\n\t\t\t\tmyOffset = data.my[ 0 ] === \"left\" ?\n\t\t\t\t\t-data.elemWidth :\n\t\t\t\t\tdata.my[ 0 ] === \"right\" ?\n\t\t\t\t\t\tdata.elemWidth :\n\t\t\t\t\t\t0,\n\t\t\t\tatOffset = data.at[ 0 ] === \"left\" ?\n\t\t\t\t\tdata.targetWidth :\n\t\t\t\t\tdata.at[ 0 ] === \"right\" ?\n\t\t\t\t\t\t-data.targetWidth :\n\t\t\t\t\t\t0,\n\t\t\t\toffset = -2 * data.offset[ 0 ],\n\t\t\t\tnewOverRight,\n\t\t\t\tnewOverLeft;\n\n\t\t\tif ( overLeft < 0 ) {\n\t\t\t\tnewOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -\n\t\t\t\t\touterWidth - withinOffset;\n\t\t\t\tif ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {\n\t\t\t\t\tposition.left += myOffset + atOffset + offset;\n\t\t\t\t}\n\t\t\t} else if ( overRight > 0 ) {\n\t\t\t\tnewOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +\n\t\t\t\t\tatOffset + offset - offsetLeft;\n\t\t\t\tif ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {\n\t\t\t\t\tposition.left += myOffset + atOffset + offset;\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\ttop: function( position, data ) {\n\t\t\tvar within = data.within,\n\t\t\t\twithinOffset = within.offset.top + within.scrollTop,\n\t\t\t\touterHeight = within.height,\n\t\t\t\toffsetTop = within.isWindow ? within.scrollTop : within.offset.top,\n\t\t\t\tcollisionPosTop = position.top - data.collisionPosition.marginTop,\n\t\t\t\toverTop = collisionPosTop - offsetTop,\n\t\t\t\toverBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,\n\t\t\t\ttop = data.my[ 1 ] === \"top\",\n\t\t\t\tmyOffset = top ?\n\t\t\t\t\t-data.elemHeight :\n\t\t\t\t\tdata.my[ 1 ] === \"bottom\" ?\n\t\t\t\t\t\tdata.elemHeight :\n\t\t\t\t\t\t0,\n\t\t\t\tatOffset = data.at[ 1 ] === \"top\" ?\n\t\t\t\t\tdata.targetHeight :\n\t\t\t\t\tdata.at[ 1 ] === \"bottom\" ?\n\t\t\t\t\t\t-data.targetHeight :\n\t\t\t\t\t\t0,\n\t\t\t\toffset = -2 * data.offset[ 1 ],\n\t\t\t\tnewOverTop,\n\t\t\t\tnewOverBottom;\n\t\t\tif ( overTop < 0 ) {\n\t\t\t\tnewOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -\n\t\t\t\t\touterHeight - withinOffset;\n\t\t\t\tif ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {\n\t\t\t\t\tposition.top += myOffset + atOffset + offset;\n\t\t\t\t}\n\t\t\t} else if ( overBottom > 0 ) {\n\t\t\t\tnewOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +\n\t\t\t\t\toffset - offsetTop;\n\t\t\t\tif ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {\n\t\t\t\t\tposition.top += myOffset + atOffset + offset;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\tflipfit: {\n\t\tleft: function() {\n\t\t\t$.ui.position.flip.left.apply( this, arguments );\n\t\t\t$.ui.position.fit.left.apply( this, arguments );\n\t\t},\n\t\ttop: function() {\n\t\t\t$.ui.position.flip.top.apply( this, arguments );\n\t\t\t$.ui.position.fit.top.apply( this, arguments );\n\t\t}\n\t}\n};\n\n} )();\n\nreturn $.ui.position;\n\n} ) );\n\n\n//# sourceURL=webpack:///./node_modules/jquery-ui/ui/position.js?");

/***/ }),

/***/ "./node_modules/jquery-ui/ui/version.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/version.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {\n\tif ( true ) {\n\n\t\t// AMD. Register as an anonymous module.\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ \"jquery\") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n} ( function( $ ) {\n\n$.ui = $.ui || {};\n\nreturn $.ui.version = \"1.12.1\";\n\n} ) );\n\n\n//# sourceURL=webpack:///./node_modules/jquery-ui/ui/version.js?");

/***/ }),

/***/ "jquery":
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.jQuery;\n\n//# sourceURL=webpack:///external_%22window.jQuery%22?");

/***/ })

/******/ });
});;