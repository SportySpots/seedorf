
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/pace.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/pace.es6":
/*!*********************!*\
  !*** ./js/pace.es6 ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pace_js_pace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pace-js/pace.js */ \"./node_modules/pace-js/pace.js\");\n/* harmony import */ var pace_js_pace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pace_js_pace_js__WEBPACK_IMPORTED_MODULE_0__);\nwindow.paceOptions = {\n  startOnPageLoad: false\n};\n\n\nfunction appendStylesheets() {\n  if (document.getElementById('pace-js-stylesheets')) return;\n  var style = document.createElement('style');\n  style.type = 'text/css';\n  style.id = 'pace-js-stylesheets';\n  style.innerHTML = \"\\n  .pace {\\n    display: block !important;\\n  }\\n  .page-loader {\\n    display: none;\\n    position: fixed;\\n    height: 2px;\\n    overflow: hidden;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    z-index: 999999;\\n  }\\n  .page-loader div {\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    transform: translate3d(0, 0, 0);\\n  }\\n  .pace-running:not(.pace-done) .page-loader {\\n    display: block;\\n  }\\n  .pace-running:not(.pace-done) .page-loader div {\\n    animation-duration: 1.2s;\\n    animation-name: pageLoaderAnimation;\\n    animation-iteration-count: infinite;\\n    animation-timing-function: ease-in-out;\\n  }\\n  .turbolinks-progress-bar {\\n    visibility: hidden !important;\\n  }\\n  [dir=rtl] .pace-running:not(.pace-done) .page-loader div,\\n  [dir=rtl].pace-running:not(.pace-done) .page-loader div {\\n    animation-name: pageLoaderAnimationRTL;\\n  }\\n  @-webkit-keyframes pageLoaderAnimation {\\n    0% { right: 100%; left: 0; }\\n    40% { right: 0; left: 0; }\\n    60% { left: 0; right: 0; }\\n    100% { left: 100%; right: 0; }\\n  }\\n  @keyframes pageLoaderAnimation {\\n    0% { right: 100%; left: 0; }\\n    40% { right: 0; left: 0; }\\n    60% { left: 0; right: 0; }\\n    100% { left: 100%; right: 0; }\\n  }\\n  @-webkit-keyframes pageLoaderAnimationRTL {\\n    0% { left: 100%; right: 0; }\\n    40% { left: 0; right: 0; }\\n    60% { right: 0; left: 0; }\\n    100% { right: 100%; left: 0; }\\n  }\\n  @keyframes pageLoaderAnimationRTL {\\n    0% { left: 100%; right: 0; }\\n    40% { left: 0; right: 0; }\\n    60% { right: 0; left: 0; }\\n    100% { right: 100%; left: 0; }\\n  }\\n  \";\n  document.querySelector('head').appendChild(style);\n}\n\nappendStylesheets();\npace_js_pace_js__WEBPACK_IMPORTED_MODULE_0__[\"start\"](); // Ensure that Pace.js will be hidden on page loaded\n\nfunction hidePaceLoader() {\n  setTimeout(function () {\n    pace_js_pace_js__WEBPACK_IMPORTED_MODULE_0__[\"stop\"]();\n  }, 3000);\n}\n\nif (document.readyState === 'complete') hidePaceLoader();else document.addEventListener('DOMContentLoaded', hidePaceLoader);\n\n//# sourceURL=webpack:///./js/pace.es6?");

/***/ }),

/***/ "./node_modules/pace-js/pace.js":
/*!**************************************!*\
  !*** ./node_modules/pace-js/pace.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {\n  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,\n    __slice = [].slice,\n    __hasProp = {}.hasOwnProperty,\n    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\n  defaultOptions = {\n    catchupTime: 100,\n    initialRate: .03,\n    minTime: 250,\n    ghostTime: 100,\n    maxProgressPerFrame: 20,\n    easeFactor: 1.25,\n    startOnPageLoad: true,\n    restartOnPushState: true,\n    restartOnRequestAfter: 500,\n    target: 'body',\n    elements: {\n      checkInterval: 100,\n      selectors: ['body']\n    },\n    eventLag: {\n      minSamples: 10,\n      sampleCount: 3,\n      lagThreshold: 3\n    },\n    ajax: {\n      trackMethods: ['GET'],\n      trackWebSockets: true,\n      ignoreURLs: []\n    }\n  };\n\n  now = function() {\n    var _ref;\n    return (_ref = typeof performance !== \"undefined\" && performance !== null ? typeof performance.now === \"function\" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);\n  };\n\n  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\n\n  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;\n\n  if (requestAnimationFrame == null) {\n    requestAnimationFrame = function(fn) {\n      return setTimeout(fn, 50);\n    };\n    cancelAnimationFrame = function(id) {\n      return clearTimeout(id);\n    };\n  }\n\n  runAnimation = function(fn) {\n    var last, tick;\n    last = now();\n    tick = function() {\n      var diff;\n      diff = now() - last;\n      if (diff >= 33) {\n        last = now();\n        return fn(diff, function() {\n          return requestAnimationFrame(tick);\n        });\n      } else {\n        return setTimeout(tick, 33 - diff);\n      }\n    };\n    return tick();\n  };\n\n  result = function() {\n    var args, key, obj;\n    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];\n    if (typeof obj[key] === 'function') {\n      return obj[key].apply(obj, args);\n    } else {\n      return obj[key];\n    }\n  };\n\n  extend = function() {\n    var key, out, source, sources, val, _i, _len;\n    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n    for (_i = 0, _len = sources.length; _i < _len; _i++) {\n      source = sources[_i];\n      if (source) {\n        for (key in source) {\n          if (!__hasProp.call(source, key)) continue;\n          val = source[key];\n          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {\n            extend(out[key], val);\n          } else {\n            out[key] = val;\n          }\n        }\n      }\n    }\n    return out;\n  };\n\n  avgAmplitude = function(arr) {\n    var count, sum, v, _i, _len;\n    sum = count = 0;\n    for (_i = 0, _len = arr.length; _i < _len; _i++) {\n      v = arr[_i];\n      sum += Math.abs(v);\n      count++;\n    }\n    return sum / count;\n  };\n\n  getFromDOM = function(key, json) {\n    var data, e, el;\n    if (key == null) {\n      key = 'options';\n    }\n    if (json == null) {\n      json = true;\n    }\n    el = document.querySelector(\"[data-pace-\" + key + \"]\");\n    if (!el) {\n      return;\n    }\n    data = el.getAttribute(\"data-pace-\" + key);\n    if (!json) {\n      return data;\n    }\n    try {\n      return JSON.parse(data);\n    } catch (_error) {\n      e = _error;\n      return typeof console !== \"undefined\" && console !== null ? console.error(\"Error parsing inline pace options\", e) : void 0;\n    }\n  };\n\n  Evented = (function() {\n    function Evented() {}\n\n    Evented.prototype.on = function(event, handler, ctx, once) {\n      var _base;\n      if (once == null) {\n        once = false;\n      }\n      if (this.bindings == null) {\n        this.bindings = {};\n      }\n      if ((_base = this.bindings)[event] == null) {\n        _base[event] = [];\n      }\n      return this.bindings[event].push({\n        handler: handler,\n        ctx: ctx,\n        once: once\n      });\n    };\n\n    Evented.prototype.once = function(event, handler, ctx) {\n      return this.on(event, handler, ctx, true);\n    };\n\n    Evented.prototype.off = function(event, handler) {\n      var i, _ref, _results;\n      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {\n        return;\n      }\n      if (handler == null) {\n        return delete this.bindings[event];\n      } else {\n        i = 0;\n        _results = [];\n        while (i < this.bindings[event].length) {\n          if (this.bindings[event][i].handler === handler) {\n            _results.push(this.bindings[event].splice(i, 1));\n          } else {\n            _results.push(i++);\n          }\n        }\n        return _results;\n      }\n    };\n\n    Evented.prototype.trigger = function() {\n      var args, ctx, event, handler, i, once, _ref, _ref1, _results;\n      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {\n        i = 0;\n        _results = [];\n        while (i < this.bindings[event].length) {\n          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;\n          handler.apply(ctx != null ? ctx : this, args);\n          if (once) {\n            _results.push(this.bindings[event].splice(i, 1));\n          } else {\n            _results.push(i++);\n          }\n        }\n        return _results;\n      }\n    };\n\n    return Evented;\n\n  })();\n\n  Pace = window.Pace || {};\n\n  window.Pace = Pace;\n\n  extend(Pace, Evented.prototype);\n\n  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());\n\n  _ref = ['ajax', 'document', 'eventLag', 'elements'];\n  for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n    source = _ref[_i];\n    if (options[source] === true) {\n      options[source] = defaultOptions[source];\n    }\n  }\n\n  NoTargetError = (function(_super) {\n    __extends(NoTargetError, _super);\n\n    function NoTargetError() {\n      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);\n      return _ref1;\n    }\n\n    return NoTargetError;\n\n  })(Error);\n\n  Bar = (function() {\n    function Bar() {\n      this.progress = 0;\n    }\n\n    Bar.prototype.getElement = function() {\n      var targetElement;\n      if (this.el == null) {\n        targetElement = document.querySelector(options.target);\n        if (!targetElement) {\n          throw new NoTargetError;\n        }\n        this.el = document.createElement('div');\n        this.el.className = \"pace pace-active\";\n        document.body.className = document.body.className.replace(/pace-done/g, '');\n        document.body.className += ' pace-running';\n        this.el.innerHTML = '<div class=\"pace-progress\">\\n  <div class=\"pace-progress-inner\"></div>\\n</div>\\n<div class=\"pace-activity\"></div>';\n        if (targetElement.firstChild != null) {\n          targetElement.insertBefore(this.el, targetElement.firstChild);\n        } else {\n          targetElement.appendChild(this.el);\n        }\n      }\n      return this.el;\n    };\n\n    Bar.prototype.finish = function() {\n      var el;\n      el = this.getElement();\n      el.className = el.className.replace('pace-active', '');\n      el.className += ' pace-inactive';\n      document.body.className = document.body.className.replace('pace-running', '');\n      return document.body.className += ' pace-done';\n    };\n\n    Bar.prototype.update = function(prog) {\n      this.progress = prog;\n      return this.render();\n    };\n\n    Bar.prototype.destroy = function() {\n      try {\n        this.getElement().parentNode.removeChild(this.getElement());\n      } catch (_error) {\n        NoTargetError = _error;\n      }\n      return this.el = void 0;\n    };\n\n    Bar.prototype.render = function() {\n      var el, key, progressStr, transform, _j, _len1, _ref2;\n      if (document.querySelector(options.target) == null) {\n        return false;\n      }\n      el = this.getElement();\n      transform = \"translate3d(\" + this.progress + \"%, 0, 0)\";\n      _ref2 = ['webkitTransform', 'msTransform', 'transform'];\n      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n        key = _ref2[_j];\n        el.children[0].style[key] = transform;\n      }\n      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {\n        el.children[0].setAttribute('data-progress-text', \"\" + (this.progress | 0) + \"%\");\n        if (this.progress >= 100) {\n          progressStr = '99';\n        } else {\n          progressStr = this.progress < 10 ? \"0\" : \"\";\n          progressStr += this.progress | 0;\n        }\n        el.children[0].setAttribute('data-progress', \"\" + progressStr);\n      }\n      return this.lastRenderedProgress = this.progress;\n    };\n\n    Bar.prototype.done = function() {\n      return this.progress >= 100;\n    };\n\n    return Bar;\n\n  })();\n\n  Events = (function() {\n    function Events() {\n      this.bindings = {};\n    }\n\n    Events.prototype.trigger = function(name, val) {\n      var binding, _j, _len1, _ref2, _results;\n      if (this.bindings[name] != null) {\n        _ref2 = this.bindings[name];\n        _results = [];\n        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n          binding = _ref2[_j];\n          _results.push(binding.call(this, val));\n        }\n        return _results;\n      }\n    };\n\n    Events.prototype.on = function(name, fn) {\n      var _base;\n      if ((_base = this.bindings)[name] == null) {\n        _base[name] = [];\n      }\n      return this.bindings[name].push(fn);\n    };\n\n    return Events;\n\n  })();\n\n  _XMLHttpRequest = window.XMLHttpRequest;\n\n  _XDomainRequest = window.XDomainRequest;\n\n  _WebSocket = window.WebSocket;\n\n  extendNative = function(to, from) {\n    var e, key, _results;\n    _results = [];\n    for (key in from.prototype) {\n      try {\n        if ((to[key] == null) && typeof from[key] !== 'function') {\n          if (typeof Object.defineProperty === 'function') {\n            _results.push(Object.defineProperty(to, key, {\n              get: function() {\n                return from.prototype[key];\n              },\n              configurable: true,\n              enumerable: true\n            }));\n          } else {\n            _results.push(to[key] = from.prototype[key]);\n          }\n        } else {\n          _results.push(void 0);\n        }\n      } catch (_error) {\n        e = _error;\n      }\n    }\n    return _results;\n  };\n\n  ignoreStack = [];\n\n  Pace.ignore = function() {\n    var args, fn, ret;\n    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n    ignoreStack.unshift('ignore');\n    ret = fn.apply(null, args);\n    ignoreStack.shift();\n    return ret;\n  };\n\n  Pace.track = function() {\n    var args, fn, ret;\n    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n    ignoreStack.unshift('track');\n    ret = fn.apply(null, args);\n    ignoreStack.shift();\n    return ret;\n  };\n\n  shouldTrack = function(method) {\n    var _ref2;\n    if (method == null) {\n      method = 'GET';\n    }\n    if (ignoreStack[0] === 'track') {\n      return 'force';\n    }\n    if (!ignoreStack.length && options.ajax) {\n      if (method === 'socket' && options.ajax.trackWebSockets) {\n        return true;\n      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  RequestIntercept = (function(_super) {\n    __extends(RequestIntercept, _super);\n\n    function RequestIntercept() {\n      var monitorXHR,\n        _this = this;\n      RequestIntercept.__super__.constructor.apply(this, arguments);\n      monitorXHR = function(req) {\n        var _open;\n        _open = req.open;\n        return req.open = function(type, url, async) {\n          if (shouldTrack(type)) {\n            _this.trigger('request', {\n              type: type,\n              url: url,\n              request: req\n            });\n          }\n          return _open.apply(req, arguments);\n        };\n      };\n      window.XMLHttpRequest = function(flags) {\n        var req;\n        req = new _XMLHttpRequest(flags);\n        monitorXHR(req);\n        return req;\n      };\n      try {\n        extendNative(window.XMLHttpRequest, _XMLHttpRequest);\n      } catch (_error) {}\n      if (_XDomainRequest != null) {\n        window.XDomainRequest = function() {\n          var req;\n          req = new _XDomainRequest;\n          monitorXHR(req);\n          return req;\n        };\n        try {\n          extendNative(window.XDomainRequest, _XDomainRequest);\n        } catch (_error) {}\n      }\n      if ((_WebSocket != null) && options.ajax.trackWebSockets) {\n        window.WebSocket = function(url, protocols) {\n          var req;\n          if (protocols != null) {\n            req = new _WebSocket(url, protocols);\n          } else {\n            req = new _WebSocket(url);\n          }\n          if (shouldTrack('socket')) {\n            _this.trigger('request', {\n              type: 'socket',\n              url: url,\n              protocols: protocols,\n              request: req\n            });\n          }\n          return req;\n        };\n        try {\n          extendNative(window.WebSocket, _WebSocket);\n        } catch (_error) {}\n      }\n    }\n\n    return RequestIntercept;\n\n  })(Events);\n\n  _intercept = null;\n\n  getIntercept = function() {\n    if (_intercept == null) {\n      _intercept = new RequestIntercept;\n    }\n    return _intercept;\n  };\n\n  shouldIgnoreURL = function(url) {\n    var pattern, _j, _len1, _ref2;\n    _ref2 = options.ajax.ignoreURLs;\n    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n      pattern = _ref2[_j];\n      if (typeof pattern === 'string') {\n        if (url.indexOf(pattern) !== -1) {\n          return true;\n        }\n      } else {\n        if (pattern.test(url)) {\n          return true;\n        }\n      }\n    }\n    return false;\n  };\n\n  getIntercept().on('request', function(_arg) {\n    var after, args, request, type, url;\n    type = _arg.type, request = _arg.request, url = _arg.url;\n    if (shouldIgnoreURL(url)) {\n      return;\n    }\n    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {\n      args = arguments;\n      after = options.restartOnRequestAfter || 0;\n      if (typeof after === 'boolean') {\n        after = 0;\n      }\n      return setTimeout(function() {\n        var stillActive, _j, _len1, _ref2, _ref3, _results;\n        if (type === 'socket') {\n          stillActive = request.readyState < 2;\n        } else {\n          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);\n        }\n        if (stillActive) {\n          Pace.restart();\n          _ref3 = Pace.sources;\n          _results = [];\n          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {\n            source = _ref3[_j];\n            if (source instanceof AjaxMonitor) {\n              source.watch.apply(source, args);\n              break;\n            } else {\n              _results.push(void 0);\n            }\n          }\n          return _results;\n        }\n      }, after);\n    }\n  });\n\n  AjaxMonitor = (function() {\n    function AjaxMonitor() {\n      var _this = this;\n      this.elements = [];\n      getIntercept().on('request', function() {\n        return _this.watch.apply(_this, arguments);\n      });\n    }\n\n    AjaxMonitor.prototype.watch = function(_arg) {\n      var request, tracker, type, url;\n      type = _arg.type, request = _arg.request, url = _arg.url;\n      if (shouldIgnoreURL(url)) {\n        return;\n      }\n      if (type === 'socket') {\n        tracker = new SocketRequestTracker(request);\n      } else {\n        tracker = new XHRRequestTracker(request);\n      }\n      return this.elements.push(tracker);\n    };\n\n    return AjaxMonitor;\n\n  })();\n\n  XHRRequestTracker = (function() {\n    function XHRRequestTracker(request) {\n      var event, size, _j, _len1, _onreadystatechange, _ref2,\n        _this = this;\n      this.progress = 0;\n      if (window.ProgressEvent != null) {\n        size = null;\n        request.addEventListener('progress', function(evt) {\n          if (evt.lengthComputable) {\n            return _this.progress = 100 * evt.loaded / evt.total;\n          } else {\n            return _this.progress = _this.progress + (100 - _this.progress) / 2;\n          }\n        }, false);\n        _ref2 = ['load', 'abort', 'timeout', 'error'];\n        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n          event = _ref2[_j];\n          request.addEventListener(event, function() {\n            return _this.progress = 100;\n          }, false);\n        }\n      } else {\n        _onreadystatechange = request.onreadystatechange;\n        request.onreadystatechange = function() {\n          var _ref3;\n          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {\n            _this.progress = 100;\n          } else if (request.readyState === 3) {\n            _this.progress = 50;\n          }\n          return typeof _onreadystatechange === \"function\" ? _onreadystatechange.apply(null, arguments) : void 0;\n        };\n      }\n    }\n\n    return XHRRequestTracker;\n\n  })();\n\n  SocketRequestTracker = (function() {\n    function SocketRequestTracker(request) {\n      var event, _j, _len1, _ref2,\n        _this = this;\n      this.progress = 0;\n      _ref2 = ['error', 'open'];\n      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n        event = _ref2[_j];\n        request.addEventListener(event, function() {\n          return _this.progress = 100;\n        }, false);\n      }\n    }\n\n    return SocketRequestTracker;\n\n  })();\n\n  ElementMonitor = (function() {\n    function ElementMonitor(options) {\n      var selector, _j, _len1, _ref2;\n      if (options == null) {\n        options = {};\n      }\n      this.elements = [];\n      if (options.selectors == null) {\n        options.selectors = [];\n      }\n      _ref2 = options.selectors;\n      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n        selector = _ref2[_j];\n        this.elements.push(new ElementTracker(selector));\n      }\n    }\n\n    return ElementMonitor;\n\n  })();\n\n  ElementTracker = (function() {\n    function ElementTracker(selector) {\n      this.selector = selector;\n      this.progress = 0;\n      this.check();\n    }\n\n    ElementTracker.prototype.check = function() {\n      var _this = this;\n      if (document.querySelector(this.selector)) {\n        return this.done();\n      } else {\n        return setTimeout((function() {\n          return _this.check();\n        }), options.elements.checkInterval);\n      }\n    };\n\n    ElementTracker.prototype.done = function() {\n      return this.progress = 100;\n    };\n\n    return ElementTracker;\n\n  })();\n\n  DocumentMonitor = (function() {\n    DocumentMonitor.prototype.states = {\n      loading: 0,\n      interactive: 50,\n      complete: 100\n    };\n\n    function DocumentMonitor() {\n      var _onreadystatechange, _ref2,\n        _this = this;\n      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;\n      _onreadystatechange = document.onreadystatechange;\n      document.onreadystatechange = function() {\n        if (_this.states[document.readyState] != null) {\n          _this.progress = _this.states[document.readyState];\n        }\n        return typeof _onreadystatechange === \"function\" ? _onreadystatechange.apply(null, arguments) : void 0;\n      };\n    }\n\n    return DocumentMonitor;\n\n  })();\n\n  EventLagMonitor = (function() {\n    function EventLagMonitor() {\n      var avg, interval, last, points, samples,\n        _this = this;\n      this.progress = 0;\n      avg = 0;\n      samples = [];\n      points = 0;\n      last = now();\n      interval = setInterval(function() {\n        var diff;\n        diff = now() - last - 50;\n        last = now();\n        samples.push(diff);\n        if (samples.length > options.eventLag.sampleCount) {\n          samples.shift();\n        }\n        avg = avgAmplitude(samples);\n        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {\n          _this.progress = 100;\n          return clearInterval(interval);\n        } else {\n          return _this.progress = 100 * (3 / (avg + 3));\n        }\n      }, 50);\n    }\n\n    return EventLagMonitor;\n\n  })();\n\n  Scaler = (function() {\n    function Scaler(source) {\n      this.source = source;\n      this.last = this.sinceLastUpdate = 0;\n      this.rate = options.initialRate;\n      this.catchup = 0;\n      this.progress = this.lastProgress = 0;\n      if (this.source != null) {\n        this.progress = result(this.source, 'progress');\n      }\n    }\n\n    Scaler.prototype.tick = function(frameTime, val) {\n      var scaling;\n      if (val == null) {\n        val = result(this.source, 'progress');\n      }\n      if (val >= 100) {\n        this.done = true;\n      }\n      if (val === this.last) {\n        this.sinceLastUpdate += frameTime;\n      } else {\n        if (this.sinceLastUpdate) {\n          this.rate = (val - this.last) / this.sinceLastUpdate;\n        }\n        this.catchup = (val - this.progress) / options.catchupTime;\n        this.sinceLastUpdate = 0;\n        this.last = val;\n      }\n      if (val > this.progress) {\n        this.progress += this.catchup * frameTime;\n      }\n      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);\n      this.progress += scaling * this.rate * frameTime;\n      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);\n      this.progress = Math.max(0, this.progress);\n      this.progress = Math.min(100, this.progress);\n      this.lastProgress = this.progress;\n      return this.progress;\n    };\n\n    return Scaler;\n\n  })();\n\n  sources = null;\n\n  scalers = null;\n\n  bar = null;\n\n  uniScaler = null;\n\n  animation = null;\n\n  cancelAnimation = null;\n\n  Pace.running = false;\n\n  handlePushState = function() {\n    if (options.restartOnPushState) {\n      return Pace.restart();\n    }\n  };\n\n  if (window.history.pushState != null) {\n    _pushState = window.history.pushState;\n    window.history.pushState = function() {\n      handlePushState();\n      return _pushState.apply(window.history, arguments);\n    };\n  }\n\n  if (window.history.replaceState != null) {\n    _replaceState = window.history.replaceState;\n    window.history.replaceState = function() {\n      handlePushState();\n      return _replaceState.apply(window.history, arguments);\n    };\n  }\n\n  SOURCE_KEYS = {\n    ajax: AjaxMonitor,\n    elements: ElementMonitor,\n    document: DocumentMonitor,\n    eventLag: EventLagMonitor\n  };\n\n  (init = function() {\n    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;\n    Pace.sources = sources = [];\n    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];\n    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n      type = _ref2[_j];\n      if (options[type] !== false) {\n        sources.push(new SOURCE_KEYS[type](options[type]));\n      }\n    }\n    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];\n    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {\n      source = _ref4[_k];\n      sources.push(new source(options));\n    }\n    Pace.bar = bar = new Bar;\n    scalers = [];\n    return uniScaler = new Scaler;\n  })();\n\n  Pace.stop = function() {\n    Pace.trigger('stop');\n    Pace.running = false;\n    bar.destroy();\n    cancelAnimation = true;\n    if (animation != null) {\n      if (typeof cancelAnimationFrame === \"function\") {\n        cancelAnimationFrame(animation);\n      }\n      animation = null;\n    }\n    return init();\n  };\n\n  Pace.restart = function() {\n    Pace.trigger('restart');\n    Pace.stop();\n    return Pace.start();\n  };\n\n  Pace.go = function() {\n    var start;\n    Pace.running = true;\n    bar.render();\n    start = now();\n    cancelAnimation = false;\n    return animation = runAnimation(function(frameTime, enqueueNextFrame) {\n      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;\n      remaining = 100 - bar.progress;\n      count = sum = 0;\n      done = true;\n      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {\n        source = sources[i];\n        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];\n        elements = (_ref2 = source.elements) != null ? _ref2 : [source];\n        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {\n          element = elements[j];\n          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);\n          done &= scaler.done;\n          if (scaler.done) {\n            continue;\n          }\n          count++;\n          sum += scaler.tick(frameTime);\n        }\n      }\n      avg = sum / count;\n      bar.update(uniScaler.tick(frameTime, avg));\n      if (bar.done() || done || cancelAnimation) {\n        bar.update(100);\n        Pace.trigger('done');\n        return setTimeout(function() {\n          bar.finish();\n          Pace.running = false;\n          return Pace.trigger('hide');\n        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));\n      } else {\n        return enqueueNextFrame();\n      }\n    });\n  };\n\n  Pace.start = function(_options) {\n    extend(options, _options);\n    Pace.running = true;\n    try {\n      bar.render();\n    } catch (_error) {\n      NoTargetError = _error;\n    }\n    if (!document.querySelector('.pace')) {\n      return setTimeout(Pace.start, 50);\n    } else {\n      Pace.trigger('start');\n      return Pace.go();\n    }\n  };\n\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! pace */ \"pace\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n      return Pace;\n    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n\n}).call(this);\n\n\n//# sourceURL=webpack:///./node_modules/pace-js/pace.js?");

/***/ }),

/***/ "pace":
/*!************************************!*\
  !*** external "\"pace-progress\"" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"pace-progress\";\n\n//# sourceURL=webpack:///external_%22\\%22pace-progress\\%22%22?");

/***/ })

/******/ });
});;