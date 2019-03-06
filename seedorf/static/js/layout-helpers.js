
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/layout-helpers.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/layout-helpers.es6":
/*!*******************************!*\
  !*** ./js/layout-helpers.es6 ***!
  \*******************************/
/*! exports provided: layoutHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"layoutHelpers\", function() { return layoutHelpers; });\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// Constants\nvar TRANSITION_EVENTS = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd'];\nvar TRANSITION_PROPERTIES = ['transition', 'MozTransition', 'webkitTransition', 'WebkitTransition', 'OTransition'];\nvar INLINE_STYLE = \"\\n.layout-fixed .layout-1 .layout-sidenav,\\n.layout-fixed-offcanvas .layout-1 .layout-sidenav {\\n  top: {navbarHeight}px !important;\\n}\\n.layout-container {\\n  padding-top: {navbarHeight}px !important;\\n}\\n.layout-content {\\n  padding-bottom: {footerHeight}px !important;\\n}\"; // Guard\n\nfunction requiredParam(name) {\n  throw new Error(\"Parameter required\".concat(name ? ': `' + name + '`' : ''));\n}\n\nvar layoutHelpers = {\n  // Root container\n  CONTAINER: typeof window !== 'undefined' ? document.documentElement : null,\n  // Large screens breakpoint\n  LAYOUT_BREAKPOINT: 992,\n  // Resize delay in milliseconds\n  RESIZE_DELAY: 200,\n  // Internal variables\n  _curStyle: null,\n  _styleEl: null,\n  _resizeTimeout: null,\n  _resizeCallback: null,\n  _transitionCallback: null,\n  _transitionCallbackTimeout: null,\n  _listeners: [],\n  _initialized: false,\n  _autoUpdate: false,\n  _lastWindowHeight: 0,\n  // *******************************************************************************\n  // * Utilities\n  // ---\n  // Add class\n  _addClass: function _addClass(cls) {\n    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.CONTAINER;\n    cls.split(' ').forEach(function (c) {\n      return el.classList.add(c);\n    });\n  },\n  // ---\n  // Remove class\n  _removeClass: function _removeClass(cls) {\n    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.CONTAINER;\n    cls.split(' ').forEach(function (c) {\n      return el.classList.remove(c);\n    });\n  },\n  // ---\n  // Has class\n  _hasClass: function _hasClass(cls) {\n    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.CONTAINER;\n    var result = false;\n    cls.split(' ').forEach(function (c) {\n      if (el.classList.contains(c)) result = true;\n    });\n    return result;\n  },\n  // ---\n  // Check for transition support\n  _supportsTransitionEnd: function _supportsTransitionEnd() {\n    if (window.QUnit) return false;\n    var el = document.body || document.documentElement;\n    if (!el) return false;\n    var result = false;\n    TRANSITION_PROPERTIES.forEach(function (evnt) {\n      if (typeof el.style[evnt] !== 'undefined') result = true;\n    });\n    return result;\n  },\n  // ---\n  // Get animation duration of element\n  _getAnimationDuration: function _getAnimationDuration(el) {\n    var duration = window.getComputedStyle(el).transitionDuration;\n    return parseFloat(duration) * (duration.indexOf('ms') !== -1 ? 1 : 1000);\n  },\n  // ---\n  // Trigger window event\n  _triggerWindowEvent: function _triggerWindowEvent(name) {\n    if (typeof window === 'undefined') return;\n\n    if (document.createEvent) {\n      var event;\n\n      if (typeof Event === 'function') {\n        event = new Event(name);\n      } else {\n        event = document.createEvent('Event');\n        event.initEvent(name, false, true);\n      }\n\n      window.dispatchEvent(event);\n    } else {\n      window.fireEvent(\"on\".concat(name), document.createEventObject());\n    }\n  },\n  // ---\n  // Trigger event\n  _triggerEvent: function _triggerEvent(name) {\n    this._triggerWindowEvent(\"layout\".concat(name));\n\n    this._listeners.filter(function (listener) {\n      return listener.event === name;\n    }).forEach(function (listener) {\n      return listener.callback.call(null);\n    });\n  },\n  // ---\n  // Update style\n  _updateInlineStyle: function _updateInlineStyle() {\n    var navbarHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var footerHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n    if (!this._styleEl) {\n      this._styleEl = document.createElement('style');\n      this._styleEl.type = 'text/css';\n      document.head.appendChild(this._styleEl);\n    }\n\n    var newStyle = INLINE_STYLE.replace(/\\{navbarHeight\\}/ig, navbarHeight).replace(/\\{footerHeight\\}/ig, footerHeight);\n\n    if (this._curStyle !== newStyle) {\n      this._curStyle = newStyle;\n      this._styleEl.textContent = newStyle;\n    }\n  },\n  // ---\n  // Remove style\n  _removeInlineStyle: function _removeInlineStyle() {\n    if (this._styleEl) document.head.removeChild(this._styleEl);\n    this._styleEl = null;\n    this._curStyle = null;\n  },\n  // ---\n  // Redraw layout sidenav (Safari bugfix)\n  _redrawLayoutSidenav: function _redrawLayoutSidenav() {\n    var layoutSidenav = this.getLayoutSidenav();\n\n    if (layoutSidenav && layoutSidenav.querySelector('.sidenav')) {\n      var inner = layoutSidenav.querySelector('.sidenav-inner');\n      var scrollTop = inner.scrollTop;\n      var pageScrollTop = document.documentElement.scrollTop;\n      layoutSidenav.style.display = 'none';\n      layoutSidenav.offsetHeight;\n      layoutSidenav.style.display = '';\n      inner.scrollTop = scrollTop;\n      document.documentElement.scrollTop = pageScrollTop;\n      return true;\n    }\n\n    return false;\n  },\n  // ---\n  // Calculate current navbar height\n  _getNavbarHeight: function _getNavbarHeight() {\n    var _this = this;\n\n    var layoutNavbar = this.getLayoutNavbar();\n    if (!layoutNavbar) return 0;\n    if (!this.isSmallScreen()) return layoutNavbar.getBoundingClientRect().height; // Needs some logic to get navbar height on small screens\n\n    var clonedEl = layoutNavbar.cloneNode(true);\n    clonedEl.id = null;\n    clonedEl.style.visibility = 'hidden';\n    clonedEl.style.position = 'absolute';\n    Array.prototype.slice.call(clonedEl.querySelectorAll('.collapse.show')).forEach(function (el) {\n      return _this._removeClass('show', el);\n    });\n    layoutNavbar.parentNode.insertBefore(clonedEl, layoutNavbar);\n    var navbarHeight = clonedEl.getBoundingClientRect().height;\n    clonedEl.parentNode.removeChild(clonedEl);\n    return navbarHeight;\n  },\n  // ---\n  // Get current footer height\n  _getFooterHeight: function _getFooterHeight() {\n    var layoutFooter = this.getLayoutFooter();\n    if (!layoutFooter) return 0;\n    return layoutFooter.getBoundingClientRect().height;\n  },\n  // ---\n  // Add layout sivenav toggle animationEnd event\n  _bindLayoutAnimationEndEvent: function _bindLayoutAnimationEndEvent(modifier, cb) {\n    var _this2 = this;\n\n    var sidenav = this.getSidenav();\n    var duration = sidenav ? this._getAnimationDuration(sidenav) + 50 : 0;\n\n    if (!duration) {\n      modifier.call(this);\n      cb.call(this);\n      return;\n    }\n\n    this._transitionCallback = function (e) {\n      if (e.target !== sidenav) return;\n\n      _this2._unbindLayoutAnimationEndEvent();\n\n      cb.call(_this2);\n    };\n\n    TRANSITION_EVENTS.forEach(function (e) {\n      sidenav.addEventListener(e, _this2._transitionCallback, false);\n    });\n    modifier.call(this);\n    this._transitionCallbackTimeout = setTimeout(function () {\n      _this2._transitionCallback.call(_this2, {\n        target: sidenav\n      });\n    }, duration);\n  },\n  // ---\n  // Remove layout sivenav toggle animationEnd event\n  _unbindLayoutAnimationEndEvent: function _unbindLayoutAnimationEndEvent() {\n    var _this3 = this;\n\n    var sidenav = this.getSidenav();\n\n    if (this._transitionCallbackTimeout) {\n      clearTimeout(this._transitionCallbackTimeout);\n      this._transitionCallbackTimeout = null;\n    }\n\n    if (sidenav && this._transitionCallback) {\n      TRANSITION_EVENTS.forEach(function (e) {\n        sidenav.removeEventListener(e, _this3._transitionCallback, false);\n      });\n    }\n\n    if (this._transitionCallback) {\n      this._transitionCallback = null;\n    }\n  },\n  // ---\n  // Bind delayed window resize event\n  _bindWindowResizeEvent: function _bindWindowResizeEvent() {\n    var _this4 = this;\n\n    this._unbindWindowResizeEvent();\n\n    var cb = function cb() {\n      if (_this4._resizeTimeout) {\n        clearTimeout(_this4._resizeTimeout);\n        _this4._resizeTimeout = null;\n      }\n\n      _this4._triggerEvent('resize');\n    };\n\n    this._resizeCallback = function () {\n      if (_this4._resizeTimeout) clearTimeout(_this4._resizeTimeout);\n      _this4._resizeTimeout = setTimeout(cb, _this4.RESIZE_DELAY);\n    };\n\n    window.addEventListener('resize', this._resizeCallback, false);\n  },\n  // ---\n  // Unbind delayed window resize event\n  _unbindWindowResizeEvent: function _unbindWindowResizeEvent() {\n    if (this._resizeTimeout) {\n      clearTimeout(this._resizeTimeout);\n      this._resizeTimeout = null;\n    }\n\n    if (this._resizeCallback) {\n      window.removeEventListener('resize', this._resizeCallback, false);\n      this._resizeCallback = null;\n    }\n  },\n  // ---\n  // Toggle collapsed\n  _setCollapsed: function _setCollapsed(collapsed) {\n    var _this5 = this;\n\n    if (this.isSmallScreen()) {\n      if (collapsed) {\n        this._removeClass('layout-expanded');\n      } else {\n        setTimeout(function () {\n          _this5._addClass('layout-expanded');\n        }, this._redrawLayoutSidenav() ? 5 : 0);\n      }\n    } else {\n      this[collapsed ? '_addClass' : '_removeClass']('layout-collapsed');\n    }\n  },\n  // *******************************************************************************\n  // * Getters\n  getLayoutSidenav: function getLayoutSidenav() {\n    return document.querySelector('.layout-sidenav');\n  },\n  getSidenav: function getSidenav() {\n    var layoutSidenav = this.getLayoutSidenav();\n    if (!layoutSidenav) return null;\n    return !this._hasClass('sidenav', layoutSidenav) ? layoutSidenav.querySelector('.sidenav') : layoutSidenav;\n  },\n  getLayoutNavbar: function getLayoutNavbar() {\n    return document.querySelector('.layout-navbar');\n  },\n  getLayoutFooter: function getLayoutFooter() {\n    return document.querySelector('.layout-footer');\n  },\n  getLayoutContainer: function getLayoutContainer() {\n    return document.querySelector('.layout-container');\n  },\n  // *******************************************************************************\n  // * Tests\n  isMobileDevice: function isMobileDevice() {\n    return typeof window.orientation !== \"undefined\" || navigator.userAgent.indexOf('IEMobile') !== -1;\n  },\n  isSmallScreen: function isSmallScreen() {\n    return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < this.LAYOUT_BREAKPOINT;\n  },\n  isLayout1: function isLayout1() {\n    return !!document.querySelector('.layout-wrapper.layout-1');\n  },\n  isCollapsed: function isCollapsed() {\n    if (this.isSmallScreen()) {\n      return !this._hasClass('layout-expanded');\n    } else {\n      return this._hasClass('layout-collapsed');\n    }\n  },\n  isFixed: function isFixed() {\n    return this._hasClass('layout-fixed layout-fixed-offcanvas');\n  },\n  isOffcanvas: function isOffcanvas() {\n    return this._hasClass('layout-offcanvas layout-fixed-offcanvas');\n  },\n  isNavbarFixed: function isNavbarFixed() {\n    return this._hasClass('layout-navbar-fixed') || !this.isSmallScreen() && this.isFixed() && this.isLayout1();\n  },\n  isFooterFixed: function isFooterFixed() {\n    return this._hasClass('layout-footer-fixed');\n  },\n  isReversed: function isReversed() {\n    return this._hasClass('layout-reversed');\n  },\n  // *******************************************************************************\n  // * Methods\n  // ---\n  // Collapse / expand layout\n  setCollapsed: function setCollapsed() {\n    var _this6 = this;\n\n    var collapsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('collapsed');\n    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    var layoutSidenav = this.getLayoutSidenav();\n    if (!layoutSidenav) return;\n\n    this._unbindLayoutAnimationEndEvent();\n\n    if (animate && this._supportsTransitionEnd()) {\n      this._addClass('layout-transitioning');\n\n      this._bindLayoutAnimationEndEvent(function () {\n        // Collapse / Expand\n        _this6._setCollapsed(collapsed);\n      }, function () {\n        _this6._removeClass('layout-transitioning');\n\n        _this6._triggerWindowEvent('resize');\n\n        _this6._triggerEvent('toggle');\n      });\n    } else {\n      this._addClass('layout-no-transition'); // Collapse / Expand\n\n\n      this._setCollapsed(collapsed);\n\n      setTimeout(function () {\n        _this6._removeClass('layout-no-transition');\n\n        _this6._triggerWindowEvent('resize');\n\n        _this6._triggerEvent('toggle');\n      }, 1);\n    }\n  },\n  // ---\n  // Toggle layout\n  toggleCollapsed: function toggleCollapsed() {\n    var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    this.setCollapsed(!this.isCollapsed(), animate);\n  },\n  // ---\n  // Set layout positioning\n  setPosition: function setPosition() {\n    var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('fixed');\n    var offcanvas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requiredParam('offcanvas');\n\n    this._removeClass('layout-offcanvas layout-fixed layout-fixed-offcanvas');\n\n    if (!fixed && offcanvas) {\n      this._addClass('layout-offcanvas');\n    } else if (fixed && !offcanvas) {\n      this._addClass('layout-fixed');\n\n      this._redrawLayoutSidenav();\n    } else if (fixed && offcanvas) {\n      this._addClass('layout-fixed-offcanvas');\n\n      this._redrawLayoutSidenav();\n    }\n\n    this.update();\n  },\n  setNavbarFixed: function setNavbarFixed() {\n    var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('fixed');\n    this[fixed ? '_addClass' : '_removeClass']('layout-navbar-fixed');\n    this.update();\n  },\n  setFooterFixed: function setFooterFixed() {\n    var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('fixed');\n    this[fixed ? '_addClass' : '_removeClass']('layout-footer-fixed');\n    this.update();\n  },\n  setReversed: function setReversed() {\n    var reversed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('reversed');\n    this[reversed ? '_addClass' : '_removeClass']('layout-reversed');\n  },\n  // *******************************************************************************\n  // * Update\n  update: function update() {\n    if (this.getLayoutNavbar() && (!this.isSmallScreen() && this.isLayout1() && this.isFixed() || this.isNavbarFixed()) || this.getLayoutFooter() && this.isFooterFixed()) {\n      this._updateInlineStyle(this._getNavbarHeight(), this._getFooterHeight());\n    }\n  },\n  setAutoUpdate: function setAutoUpdate() {\n    var _this7 = this;\n\n    var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('enable');\n\n    if (enable && !this._autoUpdate) {\n      this.on('resize.layoutHelpers:autoUpdate', function () {\n        return _this7.update();\n      });\n      this._autoUpdate = true;\n    } else if (!enable && this._autoUpdate) {\n      this.off('resize.layoutHelpers:autoUpdate');\n      this._autoUpdate = false;\n    }\n  },\n  // *******************************************************************************\n  // * Events\n  on: function on() {\n    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('event');\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requiredParam('callback');\n\n    var _event$split = event.split('.'),\n        _event$split2 = _toArray(_event$split),\n        _event = _event$split2[0],\n        namespace = _event$split2.slice(1);\n\n    namespace = namespace.join('.') || null;\n\n    this._listeners.push({\n      event: _event,\n      namespace: namespace,\n      callback: callback\n    });\n  },\n  off: function off() {\n    var _this8 = this;\n\n    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('event');\n\n    var _event$split3 = event.split('.'),\n        _event$split4 = _toArray(_event$split3),\n        _event = _event$split4[0],\n        namespace = _event$split4.slice(1);\n\n    namespace = namespace.join('.') || null;\n\n    this._listeners.filter(function (listener) {\n      return listener.event === _event && listener.namespace === namespace;\n    }).forEach(function (listener) {\n      return _this8._listeners.splice(_this8._listeners.indexOf(listener), 1);\n    });\n  },\n  // *******************************************************************************\n  // * Life cycle\n  init: function init() {\n    var _this9 = this;\n\n    if (this._initialized) return;\n    this._initialized = true; // Initialize `style` element\n\n    this._updateInlineStyle(0); // Bind window resize event\n\n\n    this._bindWindowResizeEvent(); // Bind init event\n\n\n    this.off('init._layoutHelpers');\n    this.on('init._layoutHelpers', function () {\n      _this9.off('resize._layoutHelpers:redrawSidenav');\n\n      _this9.on('resize._layoutHelpers:redrawSidenav', function () {\n        _this9.isSmallScreen() && !_this9.isCollapsed() && _this9._redrawLayoutSidenav();\n      }); // Force repaint in IE 10\n\n\n      if (typeof document.documentMode === 'number' && document.documentMode < 11) {\n        _this9.off('resize._layoutHelpers:ie10RepaintBody');\n\n        _this9.on('resize._layoutHelpers:ie10RepaintBody', function () {\n          if (_this9.isFixed()) return;\n          var scrollTop = document.documentElement.scrollTop;\n          document.body.style.display = 'none';\n          document.body.offsetHeight;\n          document.body.style.display = 'block';\n          document.documentElement.scrollTop = scrollTop;\n        });\n      }\n    });\n\n    this._triggerEvent('init');\n  },\n  destroy: function destroy() {\n    var _this10 = this;\n\n    if (!this._initialized) return;\n    this._initialized = false;\n\n    this._removeClass('layout-transitioning');\n\n    this._removeInlineStyle();\n\n    this._unbindLayoutAnimationEndEvent();\n\n    this._unbindWindowResizeEvent();\n\n    this.setAutoUpdate(false);\n    this.off('init._layoutHelpers'); // Remove all listeners except `init`\n\n    this._listeners.filter(function (listener) {\n      return listener.event !== 'init';\n    }).forEach(function (listener) {\n      return _this10._listeners.splice(_this10._listeners.indexOf(listener), 1);\n    });\n  }\n}; // *******************************************************************************\n// * Initialization\n\nif (typeof window !== 'undefined') {\n  layoutHelpers.init();\n\n  if (layoutHelpers.isMobileDevice() && window.chrome) {\n    document.documentElement.classList.add('layout-sidenav-100vh');\n  } // Update layout after page load\n\n\n  if (document.readyState === 'complete') layoutHelpers.update();else document.addEventListener('DOMContentLoaded', function onContentLoaded() {\n    layoutHelpers.update();\n    document.removeEventListener('DOMContentLoaded', onContentLoaded);\n  });\n} // ---\n\n\n\n\n//# sourceURL=webpack:///./js/layout-helpers.es6?");

/***/ })

/******/ });
});;