
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/bootstrap-maxlength/bootstrap-maxlength.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/bootstrap-maxlength/bootstrap-maxlength.js":
/*!*********************************************************!*\
  !*** ./libs/bootstrap-maxlength/bootstrap-maxlength.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/bootstrap-maxlength/src/bootstrap-maxlength.js */ \"./node_modules/bootstrap-maxlength/src/bootstrap-maxlength.js\");\n\n\n//# sourceURL=webpack:///./libs/bootstrap-maxlength/bootstrap-maxlength.js?");

/***/ }),

/***/ "./node_modules/bootstrap-maxlength/src/bootstrap-maxlength.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-maxlength/src/bootstrap-maxlength.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  'use strict';\n  /**\n   * We need an event when the elements are destroyed\n   * because if an input is removed, we have to remove the\n   * maxlength object associated (if any).\n   * From:\n   * http://stackoverflow.com/questions/2200494/jquery-trigger-event-when-an-element-is-removed-from-the-dom\n   */\n  if (!$.event.special.destroyed) {\n    $.event.special.destroyed = {\n      remove: function (o) {\n        if (o.handler) {\n          o.handler();\n        }\n      }\n    };\n  }\n\n\n  $.fn.extend({\n    maxlength: function (options, callback) {\n      var documentBody = $('body'),\n        defaults = {\n          showOnReady: false, // true to always show when indicator is ready\n          alwaysShow: false, // if true the indicator it's always shown.\n          threshold: 10, // Represents how many chars left are needed to show up the counter\n          warningClass: 'label label-success',\n          limitReachedClass: 'label label-important label-danger',\n          separator: ' / ',\n          preText: '',\n          postText: '',\n          showMaxLength: true,\n          placement: 'bottom',\n          message: null, // an alternative way to provide the message text\n          showCharsTyped: true, // show the number of characters typed and not the number of characters remaining\n          validate: false, // if the browser doesn't support the maxlength attribute, attempt to type more than\n          // the indicated chars, will be prevented.\n          utf8: false, // counts using bytesize rather than length. eg: '£' is counted as 2 characters.\n          appendToParent: false, // append the indicator to the input field's parent instead of body\n          twoCharLinebreak: true,  // count linebreak as 2 characters to match IE/Chrome textarea validation. As well as DB storage.\n          allowOverMax: false  // false = use maxlength attribute and browswer functionality.\n          // true = removes maxlength attribute and replaces with 'data-bs-mxl'.\n          // Form submit validation is handled on your own.  when maxlength has been exceeded 'overmax' class added to element\n        };\n\n      if ($.isFunction(options) && !callback) {\n        callback = options;\n        options = {};\n      }\n      options = $.extend(defaults, options);\n\n      /**\n      * Return the length of the specified input.\n      *\n      * @param input\n      * @return {number}\n      */\n      function inputLength(input) {\n        var text = input.val();\n\n        if (options.twoCharLinebreak) {\n          // Count all line breaks as 2 characters\n          text = text.replace(/\\r(?!\\n)|\\n(?!\\r)/g, '\\r\\n');\n        } else {\n          // Remove all double-character (\\r\\n) linebreaks, so they're counted only once.\n          text = text.replace(new RegExp('\\r?\\n', 'g'), '\\n');\n        }\n\n        var currentLength = 0;\n\n        if (options.utf8) {\n          currentLength = utf8Length(text);\n        } else {\n          currentLength = text.length;\n        }\n        return currentLength;\n      }\n\n      /**\n      * Truncate the text of the specified input.\n      *\n      * @param input\n      * @param limit\n      */\n      function truncateChars(input, maxlength) {\n        var text = input.val();\n        var newlines = 0;\n\n        if (options.twoCharLinebreak) {\n          text = text.replace(/\\r(?!\\n)|\\n(?!\\r)/g, '\\r\\n');\n\n          if (text.substr(text.length - 1) === '\\n' && text.length % 2 === 1) {\n            newlines = 1;\n          }\n        }\n\n        input.val(text.substr(0, maxlength - newlines));\n      }\n\n      /**\n      * Return the length of the specified input in UTF8 encoding.\n      *\n      * @param input\n      * @return {number}\n      */\n      function utf8Length(string) {\n        var utf8length = 0;\n        for (var n = 0; n < string.length; n++) {\n          var c = string.charCodeAt(n);\n          if (c < 128) {\n            utf8length++;\n          }\n          else if ((c > 127) && (c < 2048)) {\n            utf8length = utf8length + 2;\n          }\n          else {\n            utf8length = utf8length + 3;\n          }\n        }\n        return utf8length;\n      }\n\n      /**\n       * Return true if the indicator should be showing up.\n       *\n       * @param input\n       * @param thereshold\n       * @param maxlength\n       * @return {number}\n       */\n      function charsLeftThreshold(input, thereshold, maxlength) {\n        var output = true;\n        if (!options.alwaysShow && (maxlength - inputLength(input) > thereshold)) {\n          output = false;\n        }\n        return output;\n      }\n\n      /**\n       * Returns how many chars are left to complete the fill up of the form.\n       *\n       * @param input\n       * @param maxlength\n       * @return {number}\n       */\n      function remainingChars(input, maxlength) {\n        var length = maxlength - inputLength(input);\n        return length;\n      }\n\n      /**\n       * When called displays the indicator.\n       *\n       * @param indicator\n       */\n      function showRemaining(currentInput, indicator) {\n        indicator.css({\n          display: 'block'\n        });\n        currentInput.trigger('maxlength.shown');\n      }\n\n      /**\n       * When called shows the indicator.\n       *\n       * @param indicator\n       */\n      function hideRemaining(currentInput, indicator) {\n        indicator.css({\n          display: 'none'\n        });\n        currentInput.trigger('maxlength.hidden');\n      }\n\n      /**\n      * This function updates the value in the indicator\n      *\n      * @param maxLengthThisInput\n      * @param typedChars\n      * @return String\n      */\n      function updateMaxLengthHTML(currentInputText, maxLengthThisInput, typedChars) {\n        var output = '';\n        if (options.message) {\n          if (typeof options.message === 'function') {\n            output = options.message(currentInputText, maxLengthThisInput);\n          } else {\n            output = options.message.replace('%charsTyped%', typedChars)\n              .replace('%charsRemaining%', maxLengthThisInput - typedChars)\n              .replace('%charsTotal%', maxLengthThisInput);\n          }\n        } else {\n          if (options.preText) {\n            output += options.preText;\n          }\n          if (!options.showCharsTyped) {\n            output += maxLengthThisInput - typedChars;\n          }\n          else {\n            output += typedChars;\n          }\n          if (options.showMaxLength) {\n            output += options.separator + maxLengthThisInput;\n          }\n          if (options.postText) {\n            output += options.postText;\n          }\n        }\n        return output;\n      }\n\n      /**\n       * This function updates the value of the counter in the indicator.\n       * Wants as parameters: the number of remaining chars, the element currently managed,\n       * the maxLength for the current input and the indicator generated for it.\n       *\n       * @param remaining\n       * @param currentInput\n       * @param maxLengthCurrentInput\n       * @param maxLengthIndicator\n       */\n      function manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator) {\n        if (maxLengthIndicator) {\n          maxLengthIndicator.html(updateMaxLengthHTML(currentInput.val(), maxLengthCurrentInput, (maxLengthCurrentInput - remaining)));\n\n          if (remaining > 0) {\n            if (charsLeftThreshold(currentInput, options.threshold, maxLengthCurrentInput)) {\n              showRemaining(currentInput, maxLengthIndicator.removeClass(options.limitReachedClass).addClass(options.warningClass));\n            } else {\n              hideRemaining(currentInput, maxLengthIndicator);\n            }\n          } else {\n            showRemaining(currentInput, maxLengthIndicator.removeClass(options.warningClass).addClass(options.limitReachedClass));\n          }\n        }\n\n        if (options.allowOverMax) {\n          // class to use for form validation on custom maxlength attribute\n          if (remaining < 0) {\n            currentInput.addClass('overmax');\n          } else {\n            currentInput.removeClass('overmax');\n          }\n        }\n      }\n\n      /**\n       * This function returns an object containing all the\n       * informations about the position of the current input\n       *\n       * @param currentInput\n       * @return object {bottom height left right top width}\n       *\n       */\n      function getPosition(currentInput) {\n        var el = currentInput[0];\n        return $.extend({}, (typeof el.getBoundingClientRect === 'function') ? el.getBoundingClientRect() : {\n          width: el.offsetWidth,\n          height: el.offsetHeight\n        }, currentInput.offset());\n      }\n\n      /**\n       * This function places the maxLengthIndicator at the\n       * top / bottom / left / right of the currentInput\n       *\n       * @param currentInput\n       * @param maxLengthIndicator\n       * @return null\n       *\n       */\n      function place(currentInput, maxLengthIndicator) {\n        var pos = getPosition(currentInput);\n\n        // Supports custom placement handler\n        if ($.type(options.placement) === 'function'){\n          options.placement(currentInput, maxLengthIndicator, pos);\n          return;\n        }\n\n        // Supports custom placement via css positional properties\n        if ($.isPlainObject(options.placement)){\n          placeWithCSS(options.placement, maxLengthIndicator);\n          return;\n        }\n\n        var inputOuter = currentInput.outerWidth(),\n          outerWidth = maxLengthIndicator.outerWidth(),\n          actualWidth = maxLengthIndicator.width(),\n          actualHeight = maxLengthIndicator.height();\n\n        // get the right position if the indicator is appended to the input's parent\n        if (options.appendToParent) {\n          pos.top -= currentInput.parent().offset().top;\n          pos.left -= currentInput.parent().offset().left;\n        }\n\n        switch (options.placement) {\n          case 'bottom':\n            maxLengthIndicator.css({ top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 });\n            break;\n          case 'top':\n            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 });\n            break;\n          case 'left':\n            maxLengthIndicator.css({ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth });\n            break;\n          case 'right':\n            maxLengthIndicator.css({ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width });\n            break;\n          case 'bottom-right':\n            maxLengthIndicator.css({ top: pos.top + pos.height, left: pos.left + pos.width });\n            break;\n          case 'top-right':\n            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left + inputOuter });\n            break;\n          case 'top-left':\n            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left - outerWidth });\n            break;\n          case 'bottom-left':\n            maxLengthIndicator.css({ top: pos.top + currentInput.outerHeight(), left: pos.left - outerWidth });\n            break;\n          case 'centered-right':\n            maxLengthIndicator.css({ top: pos.top + (actualHeight / 2), left: pos.left + inputOuter - outerWidth - 3 });\n            break;\n\n            // Some more options for placements\n          case 'bottom-right-inside':\n            maxLengthIndicator.css({ top: pos.top + pos.height, left: pos.left + pos.width - outerWidth });\n            break;\n          case 'top-right-inside':\n            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left + inputOuter - outerWidth });\n            break;\n          case 'top-left-inside':\n            maxLengthIndicator.css({ top: pos.top - actualHeight, left: pos.left });\n            break;\n          case 'bottom-left-inside':\n            maxLengthIndicator.css({ top: pos.top + currentInput.outerHeight(), left: pos.left });\n            break;\n        }\n      }\n\n      /**\n       * This function places the maxLengthIndicator based on placement config object.\n       *\n       * @param {object} placement\n       * @param {$} maxLengthIndicator\n       * @return null\n       *\n       */\n      function placeWithCSS(placement, maxLengthIndicator) {\n        if (!placement || !maxLengthIndicator){\n          return;\n        }\n\n        var POSITION_KEYS = [\n          'top',\n          'bottom',\n          'left',\n          'right',\n          'position'\n        ];\n\n        var cssPos = {};\n\n        // filter css properties to position\n        $.each(POSITION_KEYS, function (i, key) {\n          var val = options.placement[key];\n          if (typeof val !== 'undefined'){\n            cssPos[key] = val;\n          }\n        });\n\n        maxLengthIndicator.css(cssPos);\n\n        return;\n      }\n\n      /**\n       * This function retrieves the maximum length of currentInput\n       *\n       * @param currentInput\n       * @return {number}\n       *\n       */\n      function getMaxLength(currentInput) {\n        var attr = 'maxlength';\n        if (options.allowOverMax) {\n          attr = 'data-bs-mxl';\n        }\n        return currentInput.attr(attr) || currentInput.attr('size');\n      }\n\n      return this.each(function () {\n\n        var currentInput = $(this),\n          maxLengthCurrentInput,\n          maxLengthIndicator;\n\n        $(window).resize(function () {\n          if (maxLengthIndicator) {\n            place(currentInput, maxLengthIndicator);\n          }\n        });\n\n        if (options.allowOverMax) {\n          $(this).attr('data-bs-mxl', $(this).attr('maxlength'));\n          $(this).removeAttr('maxlength');\n        }\n\n        function firstInit() {\n          var maxlengthContent = updateMaxLengthHTML(currentInput.val(), maxLengthCurrentInput, '0');\n          maxLengthCurrentInput = getMaxLength(currentInput);\n\n          if (!maxLengthIndicator) {\n            maxLengthIndicator = $('<span class=\"bootstrap-maxlength\"></span>').css({\n              display: 'none',\n              position: 'absolute',\n              whiteSpace: 'nowrap',\n              zIndex: 1099\n            }).html(maxlengthContent);\n          }\n\n          // We need to detect resizes if we are dealing with a textarea:\n          if (currentInput.is('textarea')) {\n            currentInput.data('maxlenghtsizex', currentInput.outerWidth());\n            currentInput.data('maxlenghtsizey', currentInput.outerHeight());\n\n            currentInput.mouseup(function () {\n              if (currentInput.outerWidth() !== currentInput.data('maxlenghtsizex') || currentInput.outerHeight() !== currentInput.data('maxlenghtsizey')) {\n                place(currentInput, maxLengthIndicator);\n              }\n\n              currentInput.data('maxlenghtsizex', currentInput.outerWidth());\n              currentInput.data('maxlenghtsizey', currentInput.outerHeight());\n            });\n          }\n\n          if (options.appendToParent) {\n            currentInput.parent().append(maxLengthIndicator);\n            currentInput.parent().css('position', 'relative');\n          } else {\n            documentBody.append(maxLengthIndicator);\n          }\n\n          var remaining = remainingChars(currentInput, getMaxLength(currentInput));\n          manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);\n          place(currentInput, maxLengthIndicator);\n        }\n\n        if (options.showOnReady) {\n          currentInput.ready(function () {\n            firstInit();\n          });\n        } else {\n          currentInput.focus(function () {\n            firstInit();\n          });\n        }\n\n        currentInput.on('maxlength.reposition', function () {\n          place(currentInput, maxLengthIndicator);\n        });\n\n\n        currentInput.on('destroyed', function () {\n          if (maxLengthIndicator) {\n            maxLengthIndicator.remove();\n          }\n        });\n\n        currentInput.on('blur', function () {\n          if (maxLengthIndicator && !options.showOnReady) {\n            maxLengthIndicator.remove();\n          }\n        });\n\n        currentInput.on('input', function () {\n          var maxlength = getMaxLength(currentInput),\n            remaining = remainingChars(currentInput, maxlength),\n            output = true;\n\n          if (options.validate && remaining < 0) {\n            truncateChars(currentInput, maxlength);\n            output = false;\n          } else {\n            manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);\n          }\n\n          //reposition the indicator if placement \"bottom-right-inside\" & \"top-right-inside\" is used\n          if (options.placement === 'bottom-right-inside' || options.placement === 'top-right-inside') {\n            place(currentInput, maxLengthIndicator);\n          }\n\n          return output;\n        });\n      });\n    }\n  });\n}(jQuery));\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-maxlength/src/bootstrap-maxlength.js?");

/***/ })

/******/ });
});;