
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/growl/growl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/growl/growl.js":
/*!*****************************!*\
  !*** ./libs/growl/growl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/jquery.growl/javascripts/jquery.growl.js */ \"./node_modules/jquery.growl/javascripts/jquery.growl.js\");\n\n\n//# sourceURL=webpack:///./libs/growl/growl.js?");

/***/ }),

/***/ "./node_modules/jquery.growl/javascripts/jquery.growl.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery.growl/javascripts/jquery.growl.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Generated by CoffeeScript 2.1.0\n(function () {\n  /*\n  jQuery Growl\n  Copyright 2015 Kevin Sylvestre\n  1.3.5\n  */\n  \"use strict\";\n\n  var $, Animation, Growl;\n\n  $ = jQuery;\n\n  Animation = function () {\n    var Animation = function () {\n      function Animation() {\n        _classCallCheck(this, Animation);\n      }\n\n      _createClass(Animation, null, [{\n        key: \"transition\",\n        value: function transition($el) {\n          var el, ref, result, type;\n          el = $el[0];\n          ref = this.transitions;\n          for (type in ref) {\n            result = ref[type];\n            if (el.style[type] != null) {\n              return result;\n            }\n          }\n        }\n      }]);\n\n      return Animation;\n    }();\n\n    ;\n\n    Animation.transitions = {\n      \"webkitTransition\": \"webkitTransitionEnd\",\n      \"mozTransition\": \"mozTransitionEnd\",\n      \"oTransition\": \"oTransitionEnd\",\n      \"transition\": \"transitionend\"\n    };\n\n    return Animation;\n  }();\n\n  Growl = function () {\n    var Growl = function () {\n      _createClass(Growl, null, [{\n        key: \"growl\",\n        value: function growl() {\n          var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n          return new Growl(settings);\n        }\n      }]);\n\n      function Growl() {\n        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n        _classCallCheck(this, Growl);\n\n        this.render = this.render.bind(this);\n        this.bind = this.bind.bind(this);\n        this.unbind = this.unbind.bind(this);\n        this.mouseEnter = this.mouseEnter.bind(this);\n        this.mouseLeave = this.mouseLeave.bind(this);\n        this.click = this.click.bind(this);\n        this.close = this.close.bind(this);\n        this.cycle = this.cycle.bind(this);\n        this.waitAndDismiss = this.waitAndDismiss.bind(this);\n        this.present = this.present.bind(this);\n        this.dismiss = this.dismiss.bind(this);\n        this.remove = this.remove.bind(this);\n        this.animate = this.animate.bind(this);\n        this.$growls = this.$growls.bind(this);\n        this.$growl = this.$growl.bind(this);\n        this.html = this.html.bind(this);\n        this.content = this.content.bind(this);\n        this.container = this.container.bind(this);\n        this.settings = $.extend({}, Growl.settings, settings);\n        this.initialize(this.settings.location);\n        this.render();\n      }\n\n      _createClass(Growl, [{\n        key: \"initialize\",\n        value: function initialize(location) {\n          var id;\n          id = 'growls-' + location;\n          return $('body:not(:has(#' + id + '))').append('<div id=\"' + id + '\" />');\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          var $growl;\n          $growl = this.$growl();\n          this.$growls(this.settings.location).append($growl);\n          if (this.settings.fixed) {\n            this.present();\n          } else {\n            this.cycle();\n          }\n        }\n      }, {\n        key: \"bind\",\n        value: function bind() {\n          var $growl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$growl();\n\n          $growl.on(\"click\", this.click);\n          if (this.settings.delayOnHover) {\n            $growl.on(\"mouseenter\", this.mouseEnter);\n            $growl.on(\"mouseleave\", this.mouseLeave);\n          }\n          return $growl.on(\"contextmenu\", this.close).find(\".\" + this.settings.namespace + \"-close\").on(\"click\", this.close);\n        }\n      }, {\n        key: \"unbind\",\n        value: function unbind() {\n          var $growl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$growl();\n\n          $growl.off(\"click\", this.click);\n          if (this.settings.delayOnHover) {\n            $growl.off(\"mouseenter\", this.mouseEnter);\n            $growl.off(\"mouseleave\", this.mouseLeave);\n          }\n          return $growl.off(\"contextmenu\", this.close).find(\".\" + this.settings.namespace + \"-close\").off(\"click\", this.close);\n        }\n      }, {\n        key: \"mouseEnter\",\n        value: function mouseEnter(event) {\n          var $growl;\n          $growl = this.$growl();\n          return $growl.stop(true, true);\n        }\n      }, {\n        key: \"mouseLeave\",\n        value: function mouseLeave(event) {\n          return this.waitAndDismiss();\n        }\n      }, {\n        key: \"click\",\n        value: function click(event) {\n          if (this.settings.url != null) {\n            event.preventDefault();\n            event.stopPropagation();\n            return window.open(this.settings.url);\n          }\n        }\n      }, {\n        key: \"close\",\n        value: function close(event) {\n          var $growl;\n          event.preventDefault();\n          event.stopPropagation();\n          $growl = this.$growl();\n          return $growl.stop().queue(this.dismiss).queue(this.remove);\n        }\n      }, {\n        key: \"cycle\",\n        value: function cycle() {\n          var $growl;\n          $growl = this.$growl();\n          return $growl.queue(this.present).queue(this.waitAndDismiss());\n        }\n      }, {\n        key: \"waitAndDismiss\",\n        value: function waitAndDismiss() {\n          var $growl;\n          $growl = this.$growl();\n          return $growl.delay(this.settings.duration).queue(this.dismiss).queue(this.remove);\n        }\n      }, {\n        key: \"present\",\n        value: function present(callback) {\n          var $growl;\n          $growl = this.$growl();\n          this.bind($growl);\n          return this.animate($growl, this.settings.namespace + \"-incoming\", 'out', callback);\n        }\n      }, {\n        key: \"dismiss\",\n        value: function dismiss(callback) {\n          var $growl;\n          $growl = this.$growl();\n          this.unbind($growl);\n          return this.animate($growl, this.settings.namespace + \"-outgoing\", 'in', callback);\n        }\n      }, {\n        key: \"remove\",\n        value: function remove(callback) {\n          this.$growl().remove();\n          return typeof callback === \"function\" ? callback() : void 0;\n        }\n      }, {\n        key: \"animate\",\n        value: function animate($element, name) {\n          var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'in';\n          var callback = arguments[3];\n\n          var transition;\n          transition = Animation.transition($element);\n          $element[direction === 'in' ? 'removeClass' : 'addClass'](name);\n          $element.offset().position;\n          $element[direction === 'in' ? 'addClass' : 'removeClass'](name);\n          if (callback == null) {\n            return;\n          }\n          if (transition != null) {\n            $element.one(transition, callback);\n          } else {\n            callback();\n          }\n        }\n      }, {\n        key: \"$growls\",\n        value: function $growls(location) {\n          var base;\n          if (this.$_growls == null) {\n            this.$_growls = [];\n          }\n          return (base = this.$_growls)[location] != null ? base[location] : base[location] = $('#growls-' + location);\n        }\n      }, {\n        key: \"$growl\",\n        value: function $growl() {\n          return this.$_growl != null ? this.$_growl : this.$_growl = $(this.html());\n        }\n      }, {\n        key: \"html\",\n        value: function html() {\n          return this.container(this.content());\n        }\n      }, {\n        key: \"content\",\n        value: function content() {\n          return \"<div class='\" + this.settings.namespace + \"-close'>\" + this.settings.close + \"</div>\\n<div class='\" + this.settings.namespace + \"-title'>\" + this.settings.title + \"</div>\\n<div class='\" + this.settings.namespace + \"-message'>\" + this.settings.message + \"</div>\";\n        }\n      }, {\n        key: \"container\",\n        value: function container(content) {\n          return \"<div class='\" + this.settings.namespace + \" \" + this.settings.namespace + \"-\" + this.settings.style + \" \" + this.settings.namespace + \"-\" + this.settings.size + \"'>\\n  \" + content + \"\\n</div>\";\n        }\n      }]);\n\n      return Growl;\n    }();\n\n    ;\n\n    Growl.settings = {\n      namespace: 'growl',\n      duration: 3200,\n      close: \"&#215;\",\n      location: \"default\",\n      style: \"default\",\n      size: \"medium\",\n      delayOnHover: true\n    };\n\n    return Growl;\n  }();\n\n  this.Growl = Growl;\n\n  $.growl = function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    return Growl.growl(options);\n  };\n\n  $.growl.error = function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    var settings;\n    settings = {\n      title: \"Error!\",\n      style: \"error\"\n    };\n    return $.growl($.extend(settings, options));\n  };\n\n  $.growl.notice = function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    var settings;\n    settings = {\n      title: \"Notice!\",\n      style: \"notice\"\n    };\n    return $.growl($.extend(settings, options));\n  };\n\n  $.growl.warning = function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    var settings;\n    settings = {\n      title: \"Warning!\",\n      style: \"warning\"\n    };\n    return $.growl($.extend(settings, options));\n  };\n}).call(this);\n\n//# sourceURL=webpack:///./node_modules/jquery.growl/javascripts/jquery.growl.js?");

/***/ })

/******/ });
});;