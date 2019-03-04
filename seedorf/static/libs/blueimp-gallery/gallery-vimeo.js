
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/blueimp-gallery/gallery-vimeo.js");
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

/***/ "./libs/blueimp-gallery/gallery-vimeo.js":
/*!***********************************************!*\
  !*** ./libs/blueimp-gallery/gallery-vimeo.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/blueimp-gallery/js/blueimp-gallery-vimeo.js */ \"./node_modules/blueimp-gallery/js/blueimp-gallery-vimeo.js\");\n\n\n//# sourceURL=webpack:///./libs/blueimp-gallery/gallery-vimeo.js?");

/***/ }),

/***/ "./node_modules/blueimp-gallery/js/blueimp-gallery-vimeo.js":
/*!******************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-gallery-vimeo.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\n * blueimp Gallery Vimeo Video Factory JS\n * https://github.com/blueimp/Gallery\n *\n * Copyright 2013, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n */\n\n/* global define, window, document, $f */\n\n;(function (factory) {\n  'use strict'\n  if (true) {\n    // Register as an anonymous AMD module:\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ \"jquery\"), __webpack_require__(/*! ./blueimp-gallery-video */ \"./blueimp-gallery\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n  } else {}\n})(function ($, Gallery) {\n  'use strict'\n\n  if (!window.postMessage) {\n    return Gallery\n  }\n\n  $.extend(Gallery.prototype.options, {\n    // The list object property (or data attribute) with the Vimeo video id:\n    vimeoVideoIdProperty: 'vimeo',\n    // The URL for the Vimeo video player, can be extended with custom parameters:\n    // https://developer.vimeo.com/player/embedding\n    vimeoPlayerUrl:\n      '//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID',\n    // The prefix for the Vimeo video player ID:\n    vimeoPlayerIdPrefix: 'vimeo-player-',\n    // Require a click on the native Vimeo player for the initial playback:\n    vimeoClickToPlay: true\n  })\n\n  var textFactory =\n    Gallery.prototype.textFactory || Gallery.prototype.imageFactory\n  var VimeoPlayer = function (url, videoId, playerId, clickToPlay) {\n    this.url = url\n    this.videoId = videoId\n    this.playerId = playerId\n    this.clickToPlay = clickToPlay\n    this.element = document.createElement('div')\n    this.listeners = {}\n  }\n  var counter = 0\n\n  $.extend(VimeoPlayer.prototype, {\n    canPlayType: function () {\n      return true\n    },\n\n    on: function (type, func) {\n      this.listeners[type] = func\n      return this\n    },\n\n    loadAPI: function () {\n      var that = this\n      var apiUrl = '//f.vimeocdn.com/js/froogaloop2.min.js'\n      var scriptTags = document.getElementsByTagName('script')\n      var i = scriptTags.length\n      var scriptTag\n      var called\n      function callback () {\n        if (!called && that.playOnReady) {\n          that.play()\n        }\n        called = true\n      }\n      while (i) {\n        i -= 1\n        if (scriptTags[i].src === apiUrl) {\n          scriptTag = scriptTags[i]\n          break\n        }\n      }\n      if (!scriptTag) {\n        scriptTag = document.createElement('script')\n        scriptTag.src = apiUrl\n      }\n      $(scriptTag).on('load', callback)\n      scriptTags[0].parentNode.insertBefore(scriptTag, scriptTags[0])\n      // Fix for cached scripts on IE 8:\n      if (/loaded|complete/.test(scriptTag.readyState)) {\n        callback()\n      }\n    },\n\n    onReady: function () {\n      var that = this\n      this.ready = true\n      this.player.addEvent('play', function () {\n        that.hasPlayed = true\n        that.onPlaying()\n      })\n      this.player.addEvent('pause', function () {\n        that.onPause()\n      })\n      this.player.addEvent('finish', function () {\n        that.onPause()\n      })\n      if (this.playOnReady) {\n        this.play()\n      }\n    },\n\n    onPlaying: function () {\n      if (this.playStatus < 2) {\n        this.listeners.playing()\n        this.playStatus = 2\n      }\n    },\n\n    onPause: function () {\n      this.listeners.pause()\n      delete this.playStatus\n    },\n\n    insertIframe: function () {\n      var iframe = document.createElement('iframe')\n      iframe.src = this.url\n        .replace('VIDEO_ID', this.videoId)\n        .replace('PLAYER_ID', this.playerId)\n      iframe.id = this.playerId\n      this.element.parentNode.replaceChild(iframe, this.element)\n      this.element = iframe\n    },\n\n    play: function () {\n      var that = this\n      if (!this.playStatus) {\n        this.listeners.play()\n        this.playStatus = 1\n      }\n      if (this.ready) {\n        if (\n          !this.hasPlayed &&\n          (this.clickToPlay ||\n            (window.navigator &&\n              /iP(hone|od|ad)/.test(window.navigator.platform)))\n        ) {\n          // Manually trigger the playing callback if clickToPlay\n          // is enabled and to workaround a limitation in iOS,\n          // which requires synchronous user interaction to start\n          // the video playback:\n          this.onPlaying()\n        } else {\n          this.player.api('play')\n        }\n      } else {\n        this.playOnReady = true\n        if (!window.$f) {\n          this.loadAPI()\n        } else if (!this.player) {\n          this.insertIframe()\n          this.player = $f(this.element)\n          this.player.addEvent('ready', function () {\n            that.onReady()\n          })\n        }\n      }\n    },\n\n    pause: function () {\n      if (this.ready) {\n        this.player.api('pause')\n      } else if (this.playStatus) {\n        delete this.playOnReady\n        this.listeners.pause()\n        delete this.playStatus\n      }\n    }\n  })\n\n  $.extend(Gallery.prototype, {\n    VimeoPlayer: VimeoPlayer,\n\n    textFactory: function (obj, callback) {\n      var options = this.options\n      var videoId = this.getItemProperty(obj, options.vimeoVideoIdProperty)\n      if (videoId) {\n        if (this.getItemProperty(obj, options.urlProperty) === undefined) {\n          obj[options.urlProperty] = '//vimeo.com/' + videoId\n        }\n        counter += 1\n        return this.videoFactory(\n          obj,\n          callback,\n          new VimeoPlayer(\n            options.vimeoPlayerUrl,\n            videoId,\n            options.vimeoPlayerIdPrefix + counter,\n            options.vimeoClickToPlay\n          )\n        )\n      }\n      return textFactory.call(this, obj, callback)\n    }\n  })\n\n  return Gallery\n})\n\n\n//# sourceURL=webpack:///./node_modules/blueimp-gallery/js/blueimp-gallery-vimeo.js?");

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