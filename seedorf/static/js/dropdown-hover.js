
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/dropdown-hover.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dropdown-hover.es6":
/*!*******************************!*\
  !*** ./js/dropdown-hover.es6 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Add onHover event for dropdowns\n(function ($) {\n  if (!$ || !$.fn) return;\n  var SELECTOR = '[data-toggle=dropdown][data-trigger=hover]';\n  var TIMEOUT = 150;\n\n  function openDropdown($i) {\n    var t = $i.data('dd-timeout');\n\n    if (t) {\n      clearTimeout(t);\n      t = null;\n      $i.data('dd-timeout', t);\n    }\n\n    if ($i.attr('aria-expanded') !== 'true') $i.dropdown('toggle');\n  }\n\n  function closeDropdown($i) {\n    var t = $i.data('dd-timeout');\n    if (t) clearTimeout(t);\n    t = setTimeout(function () {\n      var t2 = $i.data('dd-timeout');\n\n      if (t2) {\n        clearTimeout(t2);\n        t2 = null;\n        $i.data('dd-timeout', t2);\n      }\n\n      if ($i.attr('aria-expanded') === 'true') $i.dropdown('toggle');\n    }, TIMEOUT);\n    $i.data('dd-timeout', t);\n  }\n\n  $(function () {\n    $('body').on('mouseenter', \"\".concat(SELECTOR, \", \").concat(SELECTOR, \" ~ .dropdown-menu\"), function () {\n      var $toggle = $(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle');\n      var $dropdown = $(this).hasClass('dropdown-menu') ? $(this) : $(this).next('.dropdown-menu');\n      if (window.getComputedStyle($dropdown[0], null).getPropertyValue('position') === 'static') return; // Set hovered flag\n\n      if ($(this).is(SELECTOR)) {\n        $(this).data('hovered', true);\n      }\n\n      openDropdown($(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle'));\n    }).on('mouseleave', \"\".concat(SELECTOR, \", \").concat(SELECTOR, \" ~ .dropdown-menu\"), function () {\n      var $toggle = $(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle');\n      var $dropdown = $(this).hasClass('dropdown-menu') ? $(this) : $(this).next('.dropdown-menu');\n      if (window.getComputedStyle($dropdown[0], null).getPropertyValue('position') === 'static') return; // Remove hovered flag\n\n      if ($(this).is(SELECTOR)) {\n        $(this).data('hovered', false);\n      }\n\n      closeDropdown($(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle'));\n    }).on('hide.bs.dropdown', function (e) {\n      if ($(this).find(SELECTOR).data('hovered')) e.preventDefault();\n    });\n  });\n})(window.jQuery);\n\n//# sourceURL=webpack:///./js/dropdown-hover.es6?");

/***/ })

/******/ });
});;