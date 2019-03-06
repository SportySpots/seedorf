
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/autosize/autosize.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/autosize/autosize.js":
/*!***********************************!*\
  !*** ./libs/autosize/autosize.js ***!
  \***********************************/
/*! exports provided: autosize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_autosize_dist_autosize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/autosize/dist/autosize.js */ \"./node_modules/autosize/dist/autosize.js\");\n/* harmony import */ var _node_modules_autosize_dist_autosize_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_autosize_dist_autosize_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"autosize\", function() { return _node_modules_autosize_dist_autosize_js__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n\n\n//# sourceURL=webpack:///./libs/autosize/autosize.js?");

/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tautosize 4.0.2\n\tlicense: MIT\n\thttp://www.jacklmoore.com/autosize\n*/\n(function (global, factory) {\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else { var mod; }\n})(this, function (module, exports) {\n\t'use strict';\n\n\tvar map = typeof Map === \"function\" ? new Map() : function () {\n\t\tvar keys = [];\n\t\tvar values = [];\n\n\t\treturn {\n\t\t\thas: function has(key) {\n\t\t\t\treturn keys.indexOf(key) > -1;\n\t\t\t},\n\t\t\tget: function get(key) {\n\t\t\t\treturn values[keys.indexOf(key)];\n\t\t\t},\n\t\t\tset: function set(key, value) {\n\t\t\t\tif (keys.indexOf(key) === -1) {\n\t\t\t\t\tkeys.push(key);\n\t\t\t\t\tvalues.push(value);\n\t\t\t\t}\n\t\t\t},\n\t\t\tdelete: function _delete(key) {\n\t\t\t\tvar index = keys.indexOf(key);\n\t\t\t\tif (index > -1) {\n\t\t\t\t\tkeys.splice(index, 1);\n\t\t\t\t\tvalues.splice(index, 1);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t}();\n\n\tvar createEvent = function createEvent(name) {\n\t\treturn new Event(name, { bubbles: true });\n\t};\n\ttry {\n\t\tnew Event('test');\n\t} catch (e) {\n\t\t// IE does not support `new Event()`\n\t\tcreateEvent = function createEvent(name) {\n\t\t\tvar evt = document.createEvent('Event');\n\t\t\tevt.initEvent(name, true, false);\n\t\t\treturn evt;\n\t\t};\n\t}\n\n\tfunction assign(ta) {\n\t\tif (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;\n\n\t\tvar heightOffset = null;\n\t\tvar clientWidth = null;\n\t\tvar cachedHeight = null;\n\n\t\tfunction init() {\n\t\t\tvar style = window.getComputedStyle(ta, null);\n\n\t\t\tif (style.resize === 'vertical') {\n\t\t\t\tta.style.resize = 'none';\n\t\t\t} else if (style.resize === 'both') {\n\t\t\t\tta.style.resize = 'horizontal';\n\t\t\t}\n\n\t\t\tif (style.boxSizing === 'content-box') {\n\t\t\t\theightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));\n\t\t\t} else {\n\t\t\t\theightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);\n\t\t\t}\n\t\t\t// Fix when a textarea is not on document body and heightOffset is Not a Number\n\t\t\tif (isNaN(heightOffset)) {\n\t\t\t\theightOffset = 0;\n\t\t\t}\n\n\t\t\tupdate();\n\t\t}\n\n\t\tfunction changeOverflow(value) {\n\t\t\t{\n\t\t\t\t// Chrome/Safari-specific fix:\n\t\t\t\t// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space\n\t\t\t\t// made available by removing the scrollbar. The following forces the necessary text reflow.\n\t\t\t\tvar width = ta.style.width;\n\t\t\t\tta.style.width = '0px';\n\t\t\t\t// Force reflow:\n\t\t\t\t/* jshint ignore:start */\n\t\t\t\tta.offsetWidth;\n\t\t\t\t/* jshint ignore:end */\n\t\t\t\tta.style.width = width;\n\t\t\t}\n\n\t\t\tta.style.overflowY = value;\n\t\t}\n\n\t\tfunction getParentOverflows(el) {\n\t\t\tvar arr = [];\n\n\t\t\twhile (el && el.parentNode && el.parentNode instanceof Element) {\n\t\t\t\tif (el.parentNode.scrollTop) {\n\t\t\t\t\tarr.push({\n\t\t\t\t\t\tnode: el.parentNode,\n\t\t\t\t\t\tscrollTop: el.parentNode.scrollTop\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\tel = el.parentNode;\n\t\t\t}\n\n\t\t\treturn arr;\n\t\t}\n\n\t\tfunction resize() {\n\t\t\tif (ta.scrollHeight === 0) {\n\t\t\t\t// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar overflows = getParentOverflows(ta);\n\t\t\tvar docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)\n\n\t\t\tta.style.height = '';\n\t\t\tta.style.height = ta.scrollHeight + heightOffset + 'px';\n\n\t\t\t// used to check if an update is actually necessary on window.resize\n\t\t\tclientWidth = ta.clientWidth;\n\n\t\t\t// prevents scroll-position jumping\n\t\t\toverflows.forEach(function (el) {\n\t\t\t\tel.node.scrollTop = el.scrollTop;\n\t\t\t});\n\n\t\t\tif (docTop) {\n\t\t\t\tdocument.documentElement.scrollTop = docTop;\n\t\t\t}\n\t\t}\n\n\t\tfunction update() {\n\t\t\tresize();\n\n\t\t\tvar styleHeight = Math.round(parseFloat(ta.style.height));\n\t\t\tvar computed = window.getComputedStyle(ta, null);\n\n\t\t\t// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box\n\t\t\tvar actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;\n\n\t\t\t// The actual height not matching the style height (set via the resize method) indicates that \n\t\t\t// the max-height has been exceeded, in which case the overflow should be allowed.\n\t\t\tif (actualHeight < styleHeight) {\n\t\t\t\tif (computed.overflowY === 'hidden') {\n\t\t\t\t\tchangeOverflow('scroll');\n\t\t\t\t\tresize();\n\t\t\t\t\tactualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.\n\t\t\t\tif (computed.overflowY !== 'hidden') {\n\t\t\t\t\tchangeOverflow('hidden');\n\t\t\t\t\tresize();\n\t\t\t\t\tactualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (cachedHeight !== actualHeight) {\n\t\t\t\tcachedHeight = actualHeight;\n\t\t\t\tvar evt = createEvent('autosize:resized');\n\t\t\t\ttry {\n\t\t\t\t\tta.dispatchEvent(evt);\n\t\t\t\t} catch (err) {\n\t\t\t\t\t// Firefox will throw an error on dispatchEvent for a detached element\n\t\t\t\t\t// https://bugzilla.mozilla.org/show_bug.cgi?id=889376\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tvar pageResize = function pageResize() {\n\t\t\tif (ta.clientWidth !== clientWidth) {\n\t\t\t\tupdate();\n\t\t\t}\n\t\t};\n\n\t\tvar destroy = function (style) {\n\t\t\twindow.removeEventListener('resize', pageResize, false);\n\t\t\tta.removeEventListener('input', update, false);\n\t\t\tta.removeEventListener('keyup', update, false);\n\t\t\tta.removeEventListener('autosize:destroy', destroy, false);\n\t\t\tta.removeEventListener('autosize:update', update, false);\n\n\t\t\tObject.keys(style).forEach(function (key) {\n\t\t\t\tta.style[key] = style[key];\n\t\t\t});\n\n\t\t\tmap.delete(ta);\n\t\t}.bind(ta, {\n\t\t\theight: ta.style.height,\n\t\t\tresize: ta.style.resize,\n\t\t\toverflowY: ta.style.overflowY,\n\t\t\toverflowX: ta.style.overflowX,\n\t\t\twordWrap: ta.style.wordWrap\n\t\t});\n\n\t\tta.addEventListener('autosize:destroy', destroy, false);\n\n\t\t// IE9 does not fire onpropertychange or oninput for deletions,\n\t\t// so binding to onkeyup to catch most of those events.\n\t\t// There is no way that I know of to detect something like 'cut' in IE9.\n\t\tif ('onpropertychange' in ta && 'oninput' in ta) {\n\t\t\tta.addEventListener('keyup', update, false);\n\t\t}\n\n\t\twindow.addEventListener('resize', pageResize, false);\n\t\tta.addEventListener('input', update, false);\n\t\tta.addEventListener('autosize:update', update, false);\n\t\tta.style.overflowX = 'hidden';\n\t\tta.style.wordWrap = 'break-word';\n\n\t\tmap.set(ta, {\n\t\t\tdestroy: destroy,\n\t\t\tupdate: update\n\t\t});\n\n\t\tinit();\n\t}\n\n\tfunction destroy(ta) {\n\t\tvar methods = map.get(ta);\n\t\tif (methods) {\n\t\t\tmethods.destroy();\n\t\t}\n\t}\n\n\tfunction update(ta) {\n\t\tvar methods = map.get(ta);\n\t\tif (methods) {\n\t\t\tmethods.update();\n\t\t}\n\t}\n\n\tvar autosize = null;\n\n\t// Do nothing in Node.js environment and IE8 (or lower)\n\tif (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {\n\t\tautosize = function autosize(el) {\n\t\t\treturn el;\n\t\t};\n\t\tautosize.destroy = function (el) {\n\t\t\treturn el;\n\t\t};\n\t\tautosize.update = function (el) {\n\t\t\treturn el;\n\t\t};\n\t} else {\n\t\tautosize = function autosize(el, options) {\n\t\t\tif (el) {\n\t\t\t\tArray.prototype.forEach.call(el.length ? el : [el], function (x) {\n\t\t\t\t\treturn assign(x, options);\n\t\t\t\t});\n\t\t\t}\n\t\t\treturn el;\n\t\t};\n\t\tautosize.destroy = function (el) {\n\t\t\tif (el) {\n\t\t\t\tArray.prototype.forEach.call(el.length ? el : [el], destroy);\n\t\t\t}\n\t\t\treturn el;\n\t\t};\n\t\tautosize.update = function (el) {\n\t\t\tif (el) {\n\t\t\t\tArray.prototype.forEach.call(el.length ? el : [el], update);\n\t\t\t}\n\t\t\treturn el;\n\t\t};\n\t}\n\n\texports.default = autosize;\n\tmodule.exports = exports['default'];\n});\n\n//# sourceURL=webpack:///./node_modules/autosize/dist/autosize.js?");

/***/ })

/******/ });
});;