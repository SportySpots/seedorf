
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/dragula/dragula.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/dragula/dragula.js":
/*!*********************************!*\
  !*** ./libs/dragula/dragula.js ***!
  \*********************************/
/*! exports provided: dragula */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_dragula_dragula_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/dragula/dragula.js */ \"./node_modules/dragula/dragula.js\");\n/* harmony import */ var _node_modules_dragula_dragula_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_dragula_dragula_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"dragula\", function() { return _node_modules_dragula_dragula_js__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n\n\n//# sourceURL=webpack:///./libs/dragula/dragula.js?");

/***/ }),

/***/ "./node_modules/atoa/atoa.js":
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }\n\n\n//# sourceURL=webpack:///./node_modules/atoa/atoa.js?");

/***/ }),

/***/ "./node_modules/contra/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ticky = __webpack_require__(/*! ticky */ \"./node_modules/ticky/ticky-browser.js\");\n\nmodule.exports = function debounce (fn, args, ctx) {\n  if (!fn) { return; }\n  ticky(function run () {\n    fn.apply(ctx || null, args || []);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/contra/debounce.js?");

/***/ }),

/***/ "./node_modules/contra/emitter.js":
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar atoa = __webpack_require__(/*! atoa */ \"./node_modules/atoa/atoa.js\");\nvar debounce = __webpack_require__(/*! ./debounce */ \"./node_modules/contra/debounce.js\");\n\nmodule.exports = function emitter (thing, options) {\n  var opts = options || {};\n  var evt = {};\n  if (thing === undefined) { thing = {}; }\n  thing.on = function (type, fn) {\n    if (!evt[type]) {\n      evt[type] = [fn];\n    } else {\n      evt[type].push(fn);\n    }\n    return thing;\n  };\n  thing.once = function (type, fn) {\n    fn._once = true; // thing.off(fn) still works!\n    thing.on(type, fn);\n    return thing;\n  };\n  thing.off = function (type, fn) {\n    var c = arguments.length;\n    if (c === 1) {\n      delete evt[type];\n    } else if (c === 0) {\n      evt = {};\n    } else {\n      var et = evt[type];\n      if (!et) { return thing; }\n      et.splice(et.indexOf(fn), 1);\n    }\n    return thing;\n  };\n  thing.emit = function () {\n    var args = atoa(arguments);\n    return thing.emitterSnapshot(args.shift()).apply(this, args);\n  };\n  thing.emitterSnapshot = function (type) {\n    var et = (evt[type] || []).slice(0);\n    return function () {\n      var args = atoa(arguments);\n      var ctx = this || thing;\n      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }\n      et.forEach(function emitter (listen) {\n        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }\n        if (listen._once) { thing.off(type, listen); }\n      });\n      return thing;\n    };\n  };\n  return thing;\n};\n\n\n//# sourceURL=webpack:///./node_modules/contra/emitter.js?");

/***/ }),

/***/ "./node_modules/crossvent/src/crossvent.js":
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar customEvent = __webpack_require__(/*! custom-event */ \"./node_modules/custom-event/index.js\");\nvar eventmap = __webpack_require__(/*! ./eventmap */ \"./node_modules/crossvent/src/eventmap.js\");\nvar doc = global.document;\nvar addEvent = addEventEasy;\nvar removeEvent = removeEventEasy;\nvar hardCache = [];\n\nif (!global.addEventListener) {\n  addEvent = addEventHard;\n  removeEvent = removeEventHard;\n}\n\nmodule.exports = {\n  add: addEvent,\n  remove: removeEvent,\n  fabricate: fabricateEvent\n};\n\nfunction addEventEasy (el, type, fn, capturing) {\n  return el.addEventListener(type, fn, capturing);\n}\n\nfunction addEventHard (el, type, fn) {\n  return el.attachEvent('on' + type, wrap(el, type, fn));\n}\n\nfunction removeEventEasy (el, type, fn, capturing) {\n  return el.removeEventListener(type, fn, capturing);\n}\n\nfunction removeEventHard (el, type, fn) {\n  var listener = unwrap(el, type, fn);\n  if (listener) {\n    return el.detachEvent('on' + type, listener);\n  }\n}\n\nfunction fabricateEvent (el, type, model) {\n  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();\n  if (el.dispatchEvent) {\n    el.dispatchEvent(e);\n  } else {\n    el.fireEvent('on' + type, e);\n  }\n  function makeClassicEvent () {\n    var e;\n    if (doc.createEvent) {\n      e = doc.createEvent('Event');\n      e.initEvent(type, true, true);\n    } else if (doc.createEventObject) {\n      e = doc.createEventObject();\n    }\n    return e;\n  }\n  function makeCustomEvent () {\n    return new customEvent(type, { detail: model });\n  }\n}\n\nfunction wrapperFactory (el, type, fn) {\n  return function wrapper (originalEvent) {\n    var e = originalEvent || global.event;\n    e.target = e.target || e.srcElement;\n    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };\n    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };\n    e.which = e.which || e.keyCode;\n    fn.call(el, e);\n  };\n}\n\nfunction wrap (el, type, fn) {\n  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);\n  hardCache.push({\n    wrapper: wrapper,\n    element: el,\n    type: type,\n    fn: fn\n  });\n  return wrapper;\n}\n\nfunction unwrap (el, type, fn) {\n  var i = find(el, type, fn);\n  if (i) {\n    var wrapper = hardCache[i].wrapper;\n    hardCache.splice(i, 1); // free up a tad of memory\n    return wrapper;\n  }\n}\n\nfunction find (el, type, fn) {\n  var i, item;\n  for (i = 0; i < hardCache.length; i++) {\n    item = hardCache[i];\n    if (item.element === el && item.type === type && item.fn === fn) {\n      return i;\n    }\n  }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/crossvent/src/crossvent.js?");

/***/ }),

/***/ "./node_modules/crossvent/src/eventmap.js":
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar eventmap = [];\nvar eventname = '';\nvar ron = /^on/;\n\nfor (eventname in global) {\n  if (ron.test(eventname)) {\n    eventmap.push(eventname.slice(2));\n  }\n}\n\nmodule.exports = eventmap;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/crossvent/src/eventmap.js?");

/***/ }),

/***/ "./node_modules/custom-event/index.js":
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {\nvar NativeCustomEvent = global.CustomEvent;\n\nfunction useNative () {\n  try {\n    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });\n    return  'cat' === p.type && 'bar' === p.detail.foo;\n  } catch (e) {\n  }\n  return false;\n}\n\n/**\n * Cross-browser `CustomEvent` constructor.\n *\n * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent\n *\n * @public\n */\n\nmodule.exports = useNative() ? NativeCustomEvent :\n\n// IE >= 9\n'function' === typeof document.createEvent ? function CustomEvent (type, params) {\n  var e = document.createEvent('CustomEvent');\n  if (params) {\n    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);\n  } else {\n    e.initCustomEvent(type, false, false, void 0);\n  }\n  return e;\n} :\n\n// IE <= 8\nfunction CustomEvent (type, params) {\n  var e = document.createEventObject();\n  e.type = type;\n  if (params) {\n    e.bubbles = Boolean(params.bubbles);\n    e.cancelable = Boolean(params.cancelable);\n    e.detail = params.detail;\n  } else {\n    e.bubbles = false;\n    e.cancelable = false;\n    e.detail = void 0;\n  }\n  return e;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/custom-event/index.js?");

/***/ }),

/***/ "./node_modules/dragula/classes.js":
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cache = {};\nvar start = '(?:^|\\\\s)';\nvar end = '(?:\\\\s|$)';\n\nfunction lookupClass (className) {\n  var cached = cache[className];\n  if (cached) {\n    cached.lastIndex = 0;\n  } else {\n    cache[className] = cached = new RegExp(start + className + end, 'g');\n  }\n  return cached;\n}\n\nfunction addClass (el, className) {\n  var current = el.className;\n  if (!current.length) {\n    el.className = className;\n  } else if (!lookupClass(className).test(current)) {\n    el.className += ' ' + className;\n  }\n}\n\nfunction rmClass (el, className) {\n  el.className = el.className.replace(lookupClass(className), ' ').trim();\n}\n\nmodule.exports = {\n  add: addClass,\n  rm: rmClass\n};\n\n\n//# sourceURL=webpack:///./node_modules/dragula/classes.js?");

/***/ }),

/***/ "./node_modules/dragula/dragula.js":
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar emitter = __webpack_require__(/*! contra/emitter */ \"./node_modules/contra/emitter.js\");\nvar crossvent = __webpack_require__(/*! crossvent */ \"./node_modules/crossvent/src/crossvent.js\");\nvar classes = __webpack_require__(/*! ./classes */ \"./node_modules/dragula/classes.js\");\nvar doc = document;\nvar documentElement = doc.documentElement;\n\nfunction dragula (initialContainers, options) {\n  var len = arguments.length;\n  if (len === 1 && Array.isArray(initialContainers) === false) {\n    options = initialContainers;\n    initialContainers = [];\n  }\n  var _mirror; // mirror image\n  var _source; // source container\n  var _item; // item being dragged\n  var _offsetX; // reference x\n  var _offsetY; // reference y\n  var _moveX; // reference move x\n  var _moveY; // reference move y\n  var _initialSibling; // reference sibling when grabbed\n  var _currentSibling; // reference sibling now\n  var _copy; // item used for copying\n  var _renderTimer; // timer for setTimeout renderMirrorImage\n  var _lastDropTarget = null; // last container item was over\n  var _grabbed; // holds mousedown context until first mousemove\n\n  var o = options || {};\n  if (o.moves === void 0) { o.moves = always; }\n  if (o.accepts === void 0) { o.accepts = always; }\n  if (o.invalid === void 0) { o.invalid = invalidTarget; }\n  if (o.containers === void 0) { o.containers = initialContainers || []; }\n  if (o.isContainer === void 0) { o.isContainer = never; }\n  if (o.copy === void 0) { o.copy = false; }\n  if (o.copySortSource === void 0) { o.copySortSource = false; }\n  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }\n  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }\n  if (o.direction === void 0) { o.direction = 'vertical'; }\n  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }\n  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }\n\n  var drake = emitter({\n    containers: o.containers,\n    start: manualStart,\n    end: end,\n    cancel: cancel,\n    remove: remove,\n    destroy: destroy,\n    canMove: canMove,\n    dragging: false\n  });\n\n  if (o.removeOnSpill === true) {\n    drake.on('over', spillOver).on('out', spillOut);\n  }\n\n  events();\n\n  return drake;\n\n  function isContainer (el) {\n    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);\n  }\n\n  function events (remove) {\n    var op = remove ? 'remove' : 'add';\n    touchy(documentElement, op, 'mousedown', grab);\n    touchy(documentElement, op, 'mouseup', release);\n  }\n\n  function eventualMovements (remove) {\n    var op = remove ? 'remove' : 'add';\n    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);\n  }\n\n  function movements (remove) {\n    var op = remove ? 'remove' : 'add';\n    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8\n    crossvent[op](documentElement, 'click', preventGrabbed);\n  }\n\n  function destroy () {\n    events(true);\n    release({});\n  }\n\n  function preventGrabbed (e) {\n    if (_grabbed) {\n      e.preventDefault();\n    }\n  }\n\n  function grab (e) {\n    _moveX = e.clientX;\n    _moveY = e.clientY;\n\n    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;\n    if (ignore) {\n      return; // we only care about honest-to-god left clicks and touch events\n    }\n    var item = e.target;\n    var context = canStart(item);\n    if (!context) {\n      return;\n    }\n    _grabbed = context;\n    eventualMovements();\n    if (e.type === 'mousedown') {\n      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208\n        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176\n      } else {\n        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155\n      }\n    }\n  }\n\n  function startBecauseMouseMoved (e) {\n    if (!_grabbed) {\n      return;\n    }\n    if (whichMouseButton(e) === 0) {\n      release({});\n      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope\n    }\n    // truthy check fixes #239, equality fixes #207\n    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {\n      return;\n    }\n    if (o.ignoreInputTextSelection) {\n      var clientX = getCoord('clientX', e);\n      var clientY = getCoord('clientY', e);\n      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);\n      if (isInput(elementBehindCursor)) {\n        return;\n      }\n    }\n\n    var grabbed = _grabbed; // call to end() unsets _grabbed\n    eventualMovements(true);\n    movements();\n    end();\n    start(grabbed);\n\n    var offset = getOffset(_item);\n    _offsetX = getCoord('pageX', e) - offset.left;\n    _offsetY = getCoord('pageY', e) - offset.top;\n\n    classes.add(_copy || _item, 'gu-transit');\n    renderMirrorImage();\n    drag(e);\n  }\n\n  function canStart (item) {\n    if (drake.dragging && _mirror) {\n      return;\n    }\n    if (isContainer(item)) {\n      return; // don't drag container itself\n    }\n    var handle = item;\n    while (getParent(item) && isContainer(getParent(item)) === false) {\n      if (o.invalid(item, handle)) {\n        return;\n      }\n      item = getParent(item); // drag target should be a top element\n      if (!item) {\n        return;\n      }\n    }\n    var source = getParent(item);\n    if (!source) {\n      return;\n    }\n    if (o.invalid(item, handle)) {\n      return;\n    }\n\n    var movable = o.moves(item, source, handle, nextEl(item));\n    if (!movable) {\n      return;\n    }\n\n    return {\n      item: item,\n      source: source\n    };\n  }\n\n  function canMove (item) {\n    return !!canStart(item);\n  }\n\n  function manualStart (item) {\n    var context = canStart(item);\n    if (context) {\n      start(context);\n    }\n  }\n\n  function start (context) {\n    if (isCopy(context.item, context.source)) {\n      _copy = context.item.cloneNode(true);\n      drake.emit('cloned', _copy, context.item, 'copy');\n    }\n\n    _source = context.source;\n    _item = context.item;\n    _initialSibling = _currentSibling = nextEl(context.item);\n\n    drake.dragging = true;\n    drake.emit('drag', _item, _source);\n  }\n\n  function invalidTarget () {\n    return false;\n  }\n\n  function end () {\n    if (!drake.dragging) {\n      return;\n    }\n    var item = _copy || _item;\n    drop(item, getParent(item));\n  }\n\n  function ungrab () {\n    _grabbed = false;\n    eventualMovements(true);\n    movements(true);\n  }\n\n  function release (e) {\n    ungrab();\n\n    if (!drake.dragging) {\n      return;\n    }\n    var item = _copy || _item;\n    var clientX = getCoord('clientX', e);\n    var clientY = getCoord('clientY', e);\n    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);\n    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);\n    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {\n      drop(item, dropTarget);\n    } else if (o.removeOnSpill) {\n      remove();\n    } else {\n      cancel();\n    }\n  }\n\n  function drop (item, target) {\n    var parent = getParent(item);\n    if (_copy && o.copySortSource && target === _source) {\n      parent.removeChild(_item);\n    }\n    if (isInitialPlacement(target)) {\n      drake.emit('cancel', item, _source, _source);\n    } else {\n      drake.emit('drop', item, target, _source, _currentSibling);\n    }\n    cleanup();\n  }\n\n  function remove () {\n    if (!drake.dragging) {\n      return;\n    }\n    var item = _copy || _item;\n    var parent = getParent(item);\n    if (parent) {\n      parent.removeChild(item);\n    }\n    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);\n    cleanup();\n  }\n\n  function cancel (revert) {\n    if (!drake.dragging) {\n      return;\n    }\n    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;\n    var item = _copy || _item;\n    var parent = getParent(item);\n    var initial = isInitialPlacement(parent);\n    if (initial === false && reverts) {\n      if (_copy) {\n        if (parent) {\n          parent.removeChild(_copy);\n        }\n      } else {\n        _source.insertBefore(item, _initialSibling);\n      }\n    }\n    if (initial || reverts) {\n      drake.emit('cancel', item, _source, _source);\n    } else {\n      drake.emit('drop', item, parent, _source, _currentSibling);\n    }\n    cleanup();\n  }\n\n  function cleanup () {\n    var item = _copy || _item;\n    ungrab();\n    removeMirrorImage();\n    if (item) {\n      classes.rm(item, 'gu-transit');\n    }\n    if (_renderTimer) {\n      clearTimeout(_renderTimer);\n    }\n    drake.dragging = false;\n    if (_lastDropTarget) {\n      drake.emit('out', item, _lastDropTarget, _source);\n    }\n    drake.emit('dragend', item);\n    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;\n  }\n\n  function isInitialPlacement (target, s) {\n    var sibling;\n    if (s !== void 0) {\n      sibling = s;\n    } else if (_mirror) {\n      sibling = _currentSibling;\n    } else {\n      sibling = nextEl(_copy || _item);\n    }\n    return target === _source && sibling === _initialSibling;\n  }\n\n  function findDropTarget (elementBehindCursor, clientX, clientY) {\n    var target = elementBehindCursor;\n    while (target && !accepted()) {\n      target = getParent(target);\n    }\n    return target;\n\n    function accepted () {\n      var droppable = isContainer(target);\n      if (droppable === false) {\n        return false;\n      }\n\n      var immediate = getImmediateChild(target, elementBehindCursor);\n      var reference = getReference(target, immediate, clientX, clientY);\n      var initial = isInitialPlacement(target, reference);\n      if (initial) {\n        return true; // should always be able to drop it right back where it was\n      }\n      return o.accepts(_item, target, _source, reference);\n    }\n  }\n\n  function drag (e) {\n    if (!_mirror) {\n      return;\n    }\n    e.preventDefault();\n\n    var clientX = getCoord('clientX', e);\n    var clientY = getCoord('clientY', e);\n    var x = clientX - _offsetX;\n    var y = clientY - _offsetY;\n\n    _mirror.style.left = x + 'px';\n    _mirror.style.top = y + 'px';\n\n    var item = _copy || _item;\n    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);\n    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);\n    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;\n    if (changed || dropTarget === null) {\n      out();\n      _lastDropTarget = dropTarget;\n      over();\n    }\n    var parent = getParent(item);\n    if (dropTarget === _source && _copy && !o.copySortSource) {\n      if (parent) {\n        parent.removeChild(item);\n      }\n      return;\n    }\n    var reference;\n    var immediate = getImmediateChild(dropTarget, elementBehindCursor);\n    if (immediate !== null) {\n      reference = getReference(dropTarget, immediate, clientX, clientY);\n    } else if (o.revertOnSpill === true && !_copy) {\n      reference = _initialSibling;\n      dropTarget = _source;\n    } else {\n      if (_copy && parent) {\n        parent.removeChild(item);\n      }\n      return;\n    }\n    if (\n      (reference === null && changed) ||\n      reference !== item &&\n      reference !== nextEl(item)\n    ) {\n      _currentSibling = reference;\n      dropTarget.insertBefore(item, reference);\n      drake.emit('shadow', item, dropTarget, _source);\n    }\n    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }\n    function over () { if (changed) { moved('over'); } }\n    function out () { if (_lastDropTarget) { moved('out'); } }\n  }\n\n  function spillOver (el) {\n    classes.rm(el, 'gu-hide');\n  }\n\n  function spillOut (el) {\n    if (drake.dragging) { classes.add(el, 'gu-hide'); }\n  }\n\n  function renderMirrorImage () {\n    if (_mirror) {\n      return;\n    }\n    var rect = _item.getBoundingClientRect();\n    _mirror = _item.cloneNode(true);\n    _mirror.style.width = getRectWidth(rect) + 'px';\n    _mirror.style.height = getRectHeight(rect) + 'px';\n    classes.rm(_mirror, 'gu-transit');\n    classes.add(_mirror, 'gu-mirror');\n    o.mirrorContainer.appendChild(_mirror);\n    touchy(documentElement, 'add', 'mousemove', drag);\n    classes.add(o.mirrorContainer, 'gu-unselectable');\n    drake.emit('cloned', _mirror, _item, 'mirror');\n  }\n\n  function removeMirrorImage () {\n    if (_mirror) {\n      classes.rm(o.mirrorContainer, 'gu-unselectable');\n      touchy(documentElement, 'remove', 'mousemove', drag);\n      getParent(_mirror).removeChild(_mirror);\n      _mirror = null;\n    }\n  }\n\n  function getImmediateChild (dropTarget, target) {\n    var immediate = target;\n    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {\n      immediate = getParent(immediate);\n    }\n    if (immediate === documentElement) {\n      return null;\n    }\n    return immediate;\n  }\n\n  function getReference (dropTarget, target, x, y) {\n    var horizontal = o.direction === 'horizontal';\n    var reference = target !== dropTarget ? inside() : outside();\n    return reference;\n\n    function outside () { // slower, but able to figure out any position\n      var len = dropTarget.children.length;\n      var i;\n      var el;\n      var rect;\n      for (i = 0; i < len; i++) {\n        el = dropTarget.children[i];\n        rect = el.getBoundingClientRect();\n        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }\n        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }\n      }\n      return null;\n    }\n\n    function inside () { // faster, but only available if dropped inside a child element\n      var rect = target.getBoundingClientRect();\n      if (horizontal) {\n        return resolve(x > rect.left + getRectWidth(rect) / 2);\n      }\n      return resolve(y > rect.top + getRectHeight(rect) / 2);\n    }\n\n    function resolve (after) {\n      return after ? nextEl(target) : target;\n    }\n  }\n\n  function isCopy (item, container) {\n    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);\n  }\n}\n\nfunction touchy (el, op, type, fn) {\n  var touch = {\n    mouseup: 'touchend',\n    mousedown: 'touchstart',\n    mousemove: 'touchmove'\n  };\n  var pointers = {\n    mouseup: 'pointerup',\n    mousedown: 'pointerdown',\n    mousemove: 'pointermove'\n  };\n  var microsoft = {\n    mouseup: 'MSPointerUp',\n    mousedown: 'MSPointerDown',\n    mousemove: 'MSPointerMove'\n  };\n  if (global.navigator.pointerEnabled) {\n    crossvent[op](el, pointers[type], fn);\n  } else if (global.navigator.msPointerEnabled) {\n    crossvent[op](el, microsoft[type], fn);\n  } else {\n    crossvent[op](el, touch[type], fn);\n    crossvent[op](el, type, fn);\n  }\n}\n\nfunction whichMouseButton (e) {\n  if (e.touches !== void 0) { return e.touches.length; }\n  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261\n  if (e.buttons !== void 0) { return e.buttons; }\n  var button = e.button;\n  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575\n    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);\n  }\n}\n\nfunction getOffset (el) {\n  var rect = el.getBoundingClientRect();\n  return {\n    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),\n    top: rect.top + getScroll('scrollTop', 'pageYOffset')\n  };\n}\n\nfunction getScroll (scrollProp, offsetProp) {\n  if (typeof global[offsetProp] !== 'undefined') {\n    return global[offsetProp];\n  }\n  if (documentElement.clientHeight) {\n    return documentElement[scrollProp];\n  }\n  return doc.body[scrollProp];\n}\n\nfunction getElementBehindPoint (point, x, y) {\n  var p = point || {};\n  var state = p.className;\n  var el;\n  p.className += ' gu-hide';\n  el = doc.elementFromPoint(x, y);\n  p.className = state;\n  return el;\n}\n\nfunction never () { return false; }\nfunction always () { return true; }\nfunction getRectWidth (rect) { return rect.width || (rect.right - rect.left); }\nfunction getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }\nfunction getParent (el) { return el.parentNode === doc ? null : el.parentNode; }\nfunction isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }\nfunction isEditable (el) {\n  if (!el) { return false; } // no parents were editable\n  if (el.contentEditable === 'false') { return false; } // stop the lookup\n  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain\n  return isEditable(getParent(el)); // contentEditable is set to 'inherit'\n}\n\nfunction nextEl (el) {\n  return el.nextElementSibling || manually();\n  function manually () {\n    var sibling = el;\n    do {\n      sibling = sibling.nextSibling;\n    } while (sibling && sibling.nodeType !== 1);\n    return sibling;\n  }\n}\n\nfunction getEventHost (e) {\n  // on touchend event, we have to use `e.changedTouches`\n  // see http://stackoverflow.com/questions/7192563/touchend-event-properties\n  // see https://github.com/bevacqua/dragula/issues/34\n  if (e.targetTouches && e.targetTouches.length) {\n    return e.targetTouches[0];\n  }\n  if (e.changedTouches && e.changedTouches.length) {\n    return e.changedTouches[0];\n  }\n  return e;\n}\n\nfunction getCoord (coord, e) {\n  var host = getEventHost(e);\n  var missMap = {\n    pageX: 'clientX', // IE8\n    pageY: 'clientY' // IE8\n  };\n  if (coord in missMap && !(coord in host) && missMap[coord] in host) {\n    coord = missMap[coord];\n  }\n  return host[coord];\n}\n\nmodule.exports = dragula;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/dragula/dragula.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/setimmediate/setImmediate.js?");

/***/ }),

/***/ "./node_modules/ticky/ticky-browser.js":
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(setImmediate) {var si = typeof setImmediate === 'function', tick;\nif (si) {\n  tick = function (fn) { setImmediate(fn); };\n} else {\n  tick = function (fn) { setTimeout(fn, 0); };\n}\n\nmodule.exports = tick;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ \"./node_modules/timers-browserify/main.js\").setImmediate))\n\n//# sourceURL=webpack:///./node_modules/ticky/ticky-browser.js?");

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(scope, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(/*! setimmediate */ \"./node_modules/setimmediate/setImmediate.js\");\n// On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/timers-browserify/main.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });
});;