
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/blueimp-gallery/gallery-video.js");
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

/***/ "./libs/blueimp-gallery/gallery-video.js":
/*!***********************************************!*\
  !*** ./libs/blueimp-gallery/gallery-video.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/blueimp-gallery/js/blueimp-gallery-video.js */ \"./node_modules/blueimp-gallery/js/blueimp-gallery-video.js\");\n\n\n//# sourceURL=webpack:///./libs/blueimp-gallery/gallery-video.js?");

/***/ }),

/***/ "./node_modules/blueimp-gallery/js/blueimp-gallery-video.js":
/*!******************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-gallery-video.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\n * blueimp Gallery Video Factory JS\n * https://github.com/blueimp/Gallery\n *\n * Copyright 2013, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n */\n\n/* global define, window, document */\n\n;(function (factory) {\n  'use strict'\n  if (true) {\n    // Register as an anonymous AMD module:\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ \"jquery\"), __webpack_require__(/*! ./blueimp-gallery */ \"./blueimp-gallery\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n  } else {}\n})(function ($, Gallery) {\n  'use strict'\n\n  $.extend(Gallery.prototype.options, {\n    // The class for video content elements:\n    videoContentClass: 'video-content',\n    // The class for video when it is loading:\n    videoLoadingClass: 'video-loading',\n    // The class for video when it is playing:\n    videoPlayingClass: 'video-playing',\n    // The list object property (or data attribute) for the video poster URL:\n    videoPosterProperty: 'poster',\n    // The list object property (or data attribute) for the video sources array:\n    videoSourcesProperty: 'sources'\n  })\n\n  var handleSlide = Gallery.prototype.handleSlide\n\n  $.extend(Gallery.prototype, {\n    handleSlide: function (index) {\n      handleSlide.call(this, index)\n      if (this.playingVideo) {\n        this.playingVideo.pause()\n      }\n    },\n\n    videoFactory: function (obj, callback, videoInterface) {\n      var that = this\n      var options = this.options\n      var videoContainerNode = this.elementPrototype.cloneNode(false)\n      var videoContainer = $(videoContainerNode)\n      var errorArgs = [\n        {\n          type: 'error',\n          target: videoContainerNode\n        }\n      ]\n      var video = videoInterface || document.createElement('video')\n      var url = this.getItemProperty(obj, options.urlProperty)\n      var type = this.getItemProperty(obj, options.typeProperty)\n      var title = this.getItemProperty(obj, options.titleProperty)\n      var altText =\n        this.getItemProperty(obj, this.options.altTextProperty) || title\n      var posterUrl = this.getItemProperty(obj, options.videoPosterProperty)\n      var posterImage\n      var sources = this.getItemProperty(obj, options.videoSourcesProperty)\n      var source\n      var playMediaControl\n      var isLoading\n      var hasControls\n      videoContainer.addClass(options.videoContentClass)\n      if (title) {\n        videoContainerNode.title = title\n      }\n      if (video.canPlayType) {\n        if (url && type && video.canPlayType(type)) {\n          video.src = url\n        } else if (sources) {\n          while (sources.length) {\n            source = sources.shift()\n            url = this.getItemProperty(source, options.urlProperty)\n            type = this.getItemProperty(source, options.typeProperty)\n            if (url && type && video.canPlayType(type)) {\n              video.src = url\n              break\n            }\n          }\n        }\n      }\n      if (posterUrl) {\n        video.poster = posterUrl\n        posterImage = this.imagePrototype.cloneNode(false)\n        $(posterImage).addClass(options.toggleClass)\n        posterImage.src = posterUrl\n        posterImage.draggable = false\n        posterImage.alt = altText\n        videoContainerNode.appendChild(posterImage)\n      }\n      playMediaControl = document.createElement('a')\n      playMediaControl.setAttribute('target', '_blank')\n      if (!videoInterface) {\n        playMediaControl.setAttribute('download', title)\n      }\n      playMediaControl.href = url\n      if (video.src) {\n        video.controls = true\n        ;(videoInterface || $(video))\n          .on('error', function () {\n            that.setTimeout(callback, errorArgs)\n          })\n          .on('pause', function () {\n            if (video.seeking) return\n            isLoading = false\n            videoContainer\n              .removeClass(that.options.videoLoadingClass)\n              .removeClass(that.options.videoPlayingClass)\n            if (hasControls) {\n              that.container.addClass(that.options.controlsClass)\n            }\n            delete that.playingVideo\n            if (that.interval) {\n              that.play()\n            }\n          })\n          .on('playing', function () {\n            isLoading = false\n            videoContainer\n              .removeClass(that.options.videoLoadingClass)\n              .addClass(that.options.videoPlayingClass)\n            if (that.container.hasClass(that.options.controlsClass)) {\n              hasControls = true\n              that.container.removeClass(that.options.controlsClass)\n            } else {\n              hasControls = false\n            }\n          })\n          .on('play', function () {\n            window.clearTimeout(that.timeout)\n            isLoading = true\n            videoContainer.addClass(that.options.videoLoadingClass)\n            that.playingVideo = video\n          })\n        $(playMediaControl).on('click', function (event) {\n          that.preventDefault(event)\n          if (isLoading) {\n            video.pause()\n          } else {\n            video.play()\n          }\n        })\n        videoContainerNode.appendChild(\n          (videoInterface && videoInterface.element) || video\n        )\n      }\n      videoContainerNode.appendChild(playMediaControl)\n      this.setTimeout(callback, [\n        {\n          type: 'load',\n          target: videoContainerNode\n        }\n      ])\n      return videoContainerNode\n    }\n  })\n\n  return Gallery\n})\n\n\n//# sourceURL=webpack:///./node_modules/blueimp-gallery/js/blueimp-gallery-video.js?");

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