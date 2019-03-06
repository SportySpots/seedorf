
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/blueimp-gallery/jquery.gallery.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blueimp-gallery":
/*!****************************************!*\
  !*** external "window.blueimpGallery" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.blueimpGallery;\n\n//# sourceURL=webpack:///external_%22window.blueimpGallery%22?");

/***/ }),

/***/ "./libs/blueimp-gallery/jquery.gallery.js":
/*!************************************************!*\
  !*** ./libs/blueimp-gallery/jquery.gallery.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/blueimp-gallery/js/jquery.blueimp-gallery.js */ \"./node_modules/blueimp-gallery/js/jquery.blueimp-gallery.js\");\n\n\n//# sourceURL=webpack:///./libs/blueimp-gallery/jquery.gallery.js?");

/***/ }),

/***/ "./node_modules/blueimp-gallery/js/jquery.blueimp-gallery.js":
/*!*******************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/jquery.blueimp-gallery.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\n * blueimp Gallery jQuery plugin\n * https://github.com/blueimp/Gallery\n *\n * Copyright 2013, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n */\n\n/* global define, window, document */\n\n;(function (factory) {\n  'use strict'\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"jquery\"), __webpack_require__(/*! ./blueimp-gallery */ \"./blueimp-gallery\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n  } else {}\n})(function ($, Gallery) {\n  'use strict'\n\n  // Global click handler to open links with data-gallery attribute\n  // in the Gallery lightbox:\n  $(document).on('click', '[data-gallery]', function (event) {\n    // Get the container id from the data-gallery attribute:\n    var id = $(this).data('gallery')\n    var widget = $(id)\n    var container =\n      (widget.length && widget) || $(Gallery.prototype.options.container)\n    var callbacks = {\n      onopen: function () {\n        container.data('gallery', this).trigger('open')\n      },\n      onopened: function () {\n        container.trigger('opened')\n      },\n      onslide: function () {\n        container.trigger('slide', arguments)\n      },\n      onslideend: function () {\n        container.trigger('slideend', arguments)\n      },\n      onslidecomplete: function () {\n        container.trigger('slidecomplete', arguments)\n      },\n      onclose: function () {\n        container.trigger('close')\n      },\n      onclosed: function () {\n        container.trigger('closed').removeData('gallery')\n      }\n    }\n    var options = $.extend(\n      // Retrieve custom options from data-attributes\n      // on the Gallery widget:\n      container.data(),\n      {\n        container: container[0],\n        index: this,\n        event: event\n      },\n      callbacks\n    )\n    // Select all links with the same data-gallery attribute:\n    var links = $(this)\n      .closest('[data-gallery-group], body')\n      .find('[data-gallery=\"' + id + '\"]')\n    if (options.filter) {\n      links = links.filter(options.filter)\n    }\n    return new Gallery(links, options)\n  })\n})\n\n\n//# sourceURL=webpack:///./node_modules/blueimp-gallery/js/jquery.blueimp-gallery.js?");

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