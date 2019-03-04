
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/spin/spin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/spin/spin.js":
/*!***************************!*\
  !*** ./libs/spin/spin.js ***!
  \***************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_spin_js_spin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/spin.js/spin.js */ \"./node_modules/spin.js/spin.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Spinner\", function() { return _node_modules_spin_js_spin_js__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n\n\n//# sourceURL=webpack:///./libs/spin/spin.js?");

/***/ }),

/***/ "./node_modules/spin.js/spin.js":
/*!**************************************!*\
  !*** ./node_modules/spin.js/spin.js ***!
  \**************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Spinner\", function() { return Spinner; });\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\nvar defaults = {\r\n    lines: 12,\r\n    length: 7,\r\n    width: 5,\r\n    radius: 10,\r\n    scale: 1.0,\r\n    corners: 1,\r\n    color: '#000',\r\n    fadeColor: 'transparent',\r\n    animation: 'spinner-line-fade-default',\r\n    rotate: 0,\r\n    direction: 1,\r\n    speed: 1,\r\n    zIndex: 2e9,\r\n    className: 'spinner',\r\n    top: '50%',\r\n    left: '50%',\r\n    shadow: '0 0 1px transparent',\r\n    position: 'absolute',\r\n};\r\nvar Spinner = /** @class */ (function () {\r\n    function Spinner(opts) {\r\n        if (opts === void 0) { opts = {}; }\r\n        this.opts = __assign({}, defaults, opts);\r\n    }\r\n    /**\r\n     * Adds the spinner to the given target element. If this instance is already\r\n     * spinning, it is automatically removed from its previous target by calling\r\n     * stop() internally.\r\n     */\r\n    Spinner.prototype.spin = function (target) {\r\n        this.stop();\r\n        this.el = document.createElement('div');\r\n        this.el.className = this.opts.className;\r\n        this.el.setAttribute('role', 'progressbar');\r\n        css(this.el, {\r\n            position: this.opts.position,\r\n            width: 0,\r\n            zIndex: this.opts.zIndex,\r\n            left: this.opts.left,\r\n            top: this.opts.top,\r\n            transform: \"scale(\" + this.opts.scale + \")\",\r\n        });\r\n        if (target) {\r\n            target.insertBefore(this.el, target.firstChild || null);\r\n        }\r\n        drawLines(this.el, this.opts);\r\n        return this;\r\n    };\r\n    /**\r\n     * Stops and removes the Spinner.\r\n     * Stopped spinners may be reused by calling spin() again.\r\n     */\r\n    Spinner.prototype.stop = function () {\r\n        if (this.el) {\r\n            if (typeof requestAnimationFrame !== 'undefined') {\r\n                cancelAnimationFrame(this.animateId);\r\n            }\r\n            else {\r\n                clearTimeout(this.animateId);\r\n            }\r\n            if (this.el.parentNode) {\r\n                this.el.parentNode.removeChild(this.el);\r\n            }\r\n            this.el = undefined;\r\n        }\r\n        return this;\r\n    };\r\n    return Spinner;\r\n}());\r\n\r\n/**\r\n * Sets multiple style properties at once.\r\n */\r\nfunction css(el, props) {\r\n    for (var prop in props) {\r\n        el.style[prop] = props[prop];\r\n    }\r\n    return el;\r\n}\r\n/**\r\n * Returns the line color from the given string or array.\r\n */\r\nfunction getColor(color, idx) {\r\n    return typeof color == 'string' ? color : color[idx % color.length];\r\n}\r\n/**\r\n * Internal method that draws the individual lines.\r\n */\r\nfunction drawLines(el, opts) {\r\n    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';\r\n    var shadow = 'none';\r\n    if (opts.shadow === true) {\r\n        shadow = '0 2px 4px #000'; // default shadow\r\n    }\r\n    else if (typeof opts.shadow === 'string') {\r\n        shadow = opts.shadow;\r\n    }\r\n    var shadows = parseBoxShadow(shadow);\r\n    for (var i = 0; i < opts.lines; i++) {\r\n        var degrees = ~~(360 / opts.lines * i + opts.rotate);\r\n        var backgroundLine = css(document.createElement('div'), {\r\n            position: 'absolute',\r\n            top: -opts.width / 2 + \"px\",\r\n            width: (opts.length + opts.width) + 'px',\r\n            height: opts.width + 'px',\r\n            background: getColor(opts.fadeColor, i),\r\n            borderRadius: borderRadius,\r\n            transformOrigin: 'left',\r\n            transform: \"rotate(\" + degrees + \"deg) translateX(\" + opts.radius + \"px)\",\r\n        });\r\n        var delay = i * opts.direction / opts.lines / opts.speed;\r\n        delay -= 1 / opts.speed; // so initial animation state will include trail\r\n        var line = css(document.createElement('div'), {\r\n            width: '100%',\r\n            height: '100%',\r\n            background: getColor(opts.color, i),\r\n            borderRadius: borderRadius,\r\n            boxShadow: normalizeShadow(shadows, degrees),\r\n            animation: 1 / opts.speed + \"s linear \" + delay + \"s infinite \" + opts.animation,\r\n        });\r\n        backgroundLine.appendChild(line);\r\n        el.appendChild(backgroundLine);\r\n    }\r\n}\r\nfunction parseBoxShadow(boxShadow) {\r\n    var regex = /^\\s*([a-zA-Z]+\\s+)?(-?\\d+(\\.\\d+)?)([a-zA-Z]*)\\s+(-?\\d+(\\.\\d+)?)([a-zA-Z]*)(.*)$/;\r\n    var shadows = [];\r\n    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {\r\n        var shadow = _a[_i];\r\n        var matches = shadow.match(regex);\r\n        if (matches === null) {\r\n            continue; // invalid syntax\r\n        }\r\n        var x = +matches[2];\r\n        var y = +matches[5];\r\n        var xUnits = matches[4];\r\n        var yUnits = matches[7];\r\n        if (x === 0 && !xUnits) {\r\n            xUnits = yUnits;\r\n        }\r\n        if (y === 0 && !yUnits) {\r\n            yUnits = xUnits;\r\n        }\r\n        if (xUnits !== yUnits) {\r\n            continue; // units must match to use as coordinates\r\n        }\r\n        shadows.push({\r\n            prefix: matches[1] || '',\r\n            x: x,\r\n            y: y,\r\n            xUnits: xUnits,\r\n            yUnits: yUnits,\r\n            end: matches[8],\r\n        });\r\n    }\r\n    return shadows;\r\n}\r\n/**\r\n * Modify box-shadow x/y offsets to counteract rotation\r\n */\r\nfunction normalizeShadow(shadows, degrees) {\r\n    var normalized = [];\r\n    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {\r\n        var shadow = shadows_1[_i];\r\n        var xy = convertOffset(shadow.x, shadow.y, degrees);\r\n        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);\r\n    }\r\n    return normalized.join(', ');\r\n}\r\nfunction convertOffset(x, y, degrees) {\r\n    var radians = degrees * Math.PI / 180;\r\n    var sin = Math.sin(radians);\r\n    var cos = Math.cos(radians);\r\n    return [\r\n        Math.round((x * cos + y * sin) * 1000) / 1000,\r\n        Math.round((-x * sin + y * cos) * 1000) / 1000,\r\n    ];\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/spin.js/spin.js?");

/***/ })

/******/ });
});;