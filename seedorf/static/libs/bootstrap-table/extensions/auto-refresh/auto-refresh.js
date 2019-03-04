
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/bootstrap-table/extensions/auto-refresh/auto-refresh.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/bootstrap-table/extensions/auto-refresh/auto-refresh.js":
/*!**********************************************************************!*\
  !*** ./libs/bootstrap-table/extensions/auto-refresh/auto-refresh.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../../node_modules/bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh.js */ \"./node_modules/bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh.js\");\n\n\n//# sourceURL=webpack:///./libs/bootstrap-table/extensions/auto-refresh/auto-refresh.js?");

/***/ }),

/***/ "./node_modules/bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @author: Alec Fenichel\n * @webSite: https://fenichelar.com\n * @version: v1.0.0\n */\n\n(function ($) {\n\n    'use strict';\n\n    $.extend($.fn.bootstrapTable.defaults, {\n        autoRefresh: false,\n        autoRefreshInterval: 60,\n        autoRefreshSilent: true,\n        autoRefreshStatus: true,\n        autoRefreshFunction: null\n    });\n\n    $.extend($.fn.bootstrapTable.defaults.icons, {\n        autoRefresh: 'glyphicon-time icon-time'\n    });\n\n    $.extend($.fn.bootstrapTable.locales, {\n        formatAutoRefresh: function() {\n            return 'Auto Refresh';\n        }\n    });\n\n    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);\n\n    var BootstrapTable = $.fn.bootstrapTable.Constructor;\n    var _init = BootstrapTable.prototype.init;\n    var _initToolbar = BootstrapTable.prototype.initToolbar;\n    var sprintf = $.fn.bootstrapTable.utils.sprintf;\n\n    BootstrapTable.prototype.init = function () {\n        _init.apply(this, Array.prototype.slice.apply(arguments));\n\n        if (this.options.autoRefresh && this.options.autoRefreshStatus) {\n            var that = this;\n            this.options.autoRefreshFunction = setInterval(function () {\n                that.refresh({silent: that.options.autoRefreshSilent});\n            }, this.options.autoRefreshInterval*1000);\n        }\n    };\n\n    BootstrapTable.prototype.initToolbar = function() {\n        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));\n\n        if (this.options.autoRefresh) {\n            var $btnGroup = this.$toolbar.find('>.btn-group');\n            var $btnAutoRefresh = $btnGroup.find('.auto-refresh');\n\n            if (!$btnAutoRefresh.length) {\n                $btnAutoRefresh = $([\n                    sprintf('<button class=\"btn btn-default auto-refresh %s\" ', this.options.autoRefreshStatus ? 'enabled' : ''),\n                    'type=\"button\" ',\n                    sprintf('title=\"%s\">', this.options.formatAutoRefresh()),\n                    sprintf('<i class=\"%s %s\"></i>', this.options.iconsPrefix, this.options.icons.autoRefresh),\n                    '</button>'\n                ].join('')).appendTo($btnGroup);\n\n                $btnAutoRefresh.on('click', $.proxy(this.toggleAutoRefresh, this));\n            }\n        }\n    };\n\n    BootstrapTable.prototype.toggleAutoRefresh = function() {\n        if (this.options.autoRefresh) {\n            if (this.options.autoRefreshStatus) {\n                clearInterval(this.options.autoRefreshFunction);\n                this.$toolbar.find('>.btn-group').find('.auto-refresh').removeClass('enabled');\n            } else {\n                var that = this;\n                this.options.autoRefreshFunction = setInterval(function () {\n                    that.refresh({silent: that.options.autoRefreshSilent});\n                }, this.options.autoRefreshInterval*1000);\n                this.$toolbar.find('>.btn-group').find('.auto-refresh').addClass('enabled');\n            }\n            this.options.autoRefreshStatus = !this.options.autoRefreshStatus;\n        }\n    };\n\n})(jQuery);\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh.js?");

/***/ })

/******/ });
});;