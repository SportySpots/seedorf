
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/blueimp-gallery/gallery-indicator.js");
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

/***/ "./libs/blueimp-gallery/gallery-indicator.js":
/*!***************************************************!*\
  !*** ./libs/blueimp-gallery/gallery-indicator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/blueimp-gallery/js/blueimp-gallery-indicator.js */ \"./node_modules/blueimp-gallery/js/blueimp-gallery-indicator.js\");\n\n\n//# sourceURL=webpack:///./libs/blueimp-gallery/gallery-indicator.js?");

/***/ }),

/***/ "./node_modules/blueimp-gallery/js/blueimp-gallery-indicator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-gallery-indicator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\n * blueimp Gallery Indicator JS\n * https://github.com/blueimp/Gallery\n *\n * Copyright 2013, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n */\n\n/* global define, window, document */\n\n;(function (factory) {\n  'use strict'\n  if (true) {\n    // Register as an anonymous AMD module:\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ \"jquery\"), __webpack_require__(/*! ./blueimp-gallery */ \"./blueimp-gallery\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n  } else {}\n})(function ($, Gallery) {\n  'use strict'\n\n  $.extend(Gallery.prototype.options, {\n    // The tag name, Id, element or querySelector of the indicator container:\n    indicatorContainer: 'ol',\n    // The class for the active indicator:\n    activeIndicatorClass: 'active',\n    // The list object property (or data attribute) with the thumbnail URL,\n    // used as alternative to a thumbnail child element:\n    thumbnailProperty: 'thumbnail',\n    // Defines if the gallery indicators should display a thumbnail:\n    thumbnailIndicators: true\n  })\n\n  var initSlides = Gallery.prototype.initSlides\n  var addSlide = Gallery.prototype.addSlide\n  var resetSlides = Gallery.prototype.resetSlides\n  var handleClick = Gallery.prototype.handleClick\n  var handleSlide = Gallery.prototype.handleSlide\n  var handleClose = Gallery.prototype.handleClose\n\n  $.extend(Gallery.prototype, {\n    createIndicator: function (obj) {\n      var indicator = this.indicatorPrototype.cloneNode(false)\n      var title = this.getItemProperty(obj, this.options.titleProperty)\n      var thumbnailProperty = this.options.thumbnailProperty\n      var thumbnailUrl\n      var thumbnail\n      if (this.options.thumbnailIndicators) {\n        if (thumbnailProperty) {\n          thumbnailUrl = this.getItemProperty(obj, thumbnailProperty)\n        }\n        if (thumbnailUrl === undefined) {\n          thumbnail = obj.getElementsByTagName && $(obj).find('img')[0]\n          if (thumbnail) {\n            thumbnailUrl = thumbnail.src\n          }\n        }\n        if (thumbnailUrl) {\n          indicator.style.backgroundImage = 'url(\"' + thumbnailUrl + '\")'\n        }\n      }\n      if (title) {\n        indicator.title = title\n      }\n      return indicator\n    },\n\n    addIndicator: function (index) {\n      if (this.indicatorContainer.length) {\n        var indicator = this.createIndicator(this.list[index])\n        indicator.setAttribute('data-index', index)\n        this.indicatorContainer[0].appendChild(indicator)\n        this.indicators.push(indicator)\n      }\n    },\n\n    setActiveIndicator: function (index) {\n      if (this.indicators) {\n        if (this.activeIndicator) {\n          this.activeIndicator.removeClass(this.options.activeIndicatorClass)\n        }\n        this.activeIndicator = $(this.indicators[index])\n        this.activeIndicator.addClass(this.options.activeIndicatorClass)\n      }\n    },\n\n    initSlides: function (reload) {\n      if (!reload) {\n        this.indicatorContainer = this.container.find(\n          this.options.indicatorContainer\n        )\n        if (this.indicatorContainer.length) {\n          this.indicatorPrototype = document.createElement('li')\n          this.indicators = this.indicatorContainer[0].children\n        }\n      }\n      initSlides.call(this, reload)\n    },\n\n    addSlide: function (index) {\n      addSlide.call(this, index)\n      this.addIndicator(index)\n    },\n\n    resetSlides: function () {\n      resetSlides.call(this)\n      this.indicatorContainer.empty()\n      this.indicators = []\n    },\n\n    handleClick: function (event) {\n      var target = event.target || event.srcElement\n      var parent = target.parentNode\n      if (parent === this.indicatorContainer[0]) {\n        // Click on indicator element\n        this.preventDefault(event)\n        this.slide(this.getNodeIndex(target))\n      } else if (parent.parentNode === this.indicatorContainer[0]) {\n        // Click on indicator child element\n        this.preventDefault(event)\n        this.slide(this.getNodeIndex(parent))\n      } else {\n        return handleClick.call(this, event)\n      }\n    },\n\n    handleSlide: function (index) {\n      handleSlide.call(this, index)\n      this.setActiveIndicator(index)\n    },\n\n    handleClose: function () {\n      if (this.activeIndicator) {\n        this.activeIndicator.removeClass(this.options.activeIndicatorClass)\n      }\n      handleClose.call(this)\n    }\n  })\n\n  return Gallery\n})\n\n\n//# sourceURL=webpack:///./node_modules/blueimp-gallery/js/blueimp-gallery-indicator.js?");

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