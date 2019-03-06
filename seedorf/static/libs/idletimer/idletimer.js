
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/idletimer/idletimer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/idletimer/idletimer.js":
/*!*************************************!*\
  !*** ./libs/idletimer/idletimer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/jquery-idletimer/dist/idle-timer.js */ \"./node_modules/jquery-idletimer/dist/idle-timer.js\");\n\n\n//# sourceURL=webpack:///./libs/idletimer/idletimer.js?");

/***/ }),

/***/ "./node_modules/jquery-idletimer/dist/idle-timer.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery-idletimer/dist/idle-timer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! Idle Timer - v1.1.0 - 2016-03-21\n* https://github.com/thorst/jquery-idletimer\n* Copyright (c) 2016 Paul Irish; Licensed MIT */\n/*\n\tmousewheel (deprecated) -> IE6.0, Chrome, Opera, Safari\n\tDOMMouseScroll (deprecated) -> Firefox 1.0\n\twheel (standard) -> Chrome 31, Firefox 17, IE9, Firefox Mobile 17.0\n\n\t//No need to use, use DOMMouseScroll\n\tMozMousePixelScroll -> Firefox 3.5, Firefox Mobile 1.0\n\n\t//Events\n\tWheelEvent -> see wheel\n\tMouseWheelEvent -> see mousewheel\n\tMouseScrollEvent -> Firefox 3.5, Firefox Mobile 1.0\n*/\n(function ($) {\n\n    $.idleTimer = function (firstParam, elem) {\n        var opts;\n        if ( typeof firstParam === \"object\" ) {\n            opts = firstParam;\n            firstParam = null;\n        } else if (typeof firstParam === \"number\") {\n            opts = { timeout: firstParam };\n            firstParam = null;\n        }\n\n        // element to watch\n        elem = elem || document;\n\n        // defaults that are to be stored as instance props on the elem\n        opts = $.extend({\n            idle: false,                // indicates if the user is idle\n            timeout: 30000,             // the amount of time (ms) before the user is considered idle\n            events: \"mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove\" // define active events\n        }, opts);\n\n        var jqElem = $(elem),\n            obj = jqElem.data(\"idleTimerObj\") || {},\n\n            /* (intentionally not documented)\n             * Toggles the idle state and fires an appropriate event.\n             * @return {void}\n             */\n            toggleIdleState = function (e) {\n                var obj = $.data(elem, \"idleTimerObj\") || {};\n\n                // toggle the state\n                obj.idle = !obj.idle;\n\n                // store toggle state date time\n                obj.olddate = +new Date();\n\n                // create a custom event, with state and name space\n                var event = $.Event((obj.idle ? \"idle\" : \"active\") + \".idleTimer\");\n\n                // trigger event on object with elem and copy of obj\n                $(elem).trigger(event, [elem, $.extend({}, obj), e]);\n            },\n            /**\n             * Handle event triggers\n             * @return {void}\n             * @method event\n             * @static\n             */\n            handleEvent = function (e) {\n                var obj = $.data(elem, \"idleTimerObj\") || {};\n\n                if (e.type === \"storage\" && e.originalEvent.key !== obj.timerSyncId) {\n                    return;\n                }\n\n                // this is already paused, ignore events for now\n                if (obj.remaining != null) { return; }\n\n                /*\n                mousemove is kinda buggy, it can be triggered when it should be idle.\n                Typically is happening between 115 - 150 milliseconds after idle triggered.\n                @psyafter & @kaellis report \"always triggered if using modal (jQuery ui, with overlay)\"\n                @thorst has similar issues on ios7 \"after $.scrollTop() on text area\"\n                */\n                if (e.type === \"mousemove\") {\n                    // if coord are same, it didn't move\n                    if (e.pageX === obj.pageX && e.pageY === obj.pageY) {\n                        return;\n                    }\n                    // if coord don't exist how could it move\n                    if (typeof e.pageX === \"undefined\" && typeof e.pageY === \"undefined\") {\n                        return;\n                    }\n                    // under 200 ms is hard to do, and you would have to stop, as continuous activity will bypass this\n                    var elapsed = (+new Date()) - obj.olddate;\n                    if (elapsed < 200) {\n                        return;\n                    }\n                }\n\n                // clear any existing timeout\n                clearTimeout(obj.tId);\n\n                // if the idle timer is enabled, flip\n                if (obj.idle) {\n                    toggleIdleState(e);\n                }\n\n                // store when user was last active\n                obj.lastActive = +new Date();\n\n                // update mouse coord\n                obj.pageX = e.pageX;\n                obj.pageY = e.pageY;\n\n                // sync lastActive\n                if (e.type !== \"storage\" && obj.timerSyncId) {\n                  if (typeof(localStorage) !== \"undefined\") {\n                    localStorage.setItem(obj.timerSyncId, obj.lastActive);\n                  }\n                }\n\n                // set a new timeout\n                obj.tId = setTimeout(toggleIdleState, obj.timeout);\n            },\n            /**\n             * Restore initial settings and restart timer\n             * @return {void}\n             * @method reset\n             * @static\n             */\n            reset = function () {\n\n                var obj = $.data(elem, \"idleTimerObj\") || {};\n\n                // reset settings\n                obj.idle = obj.idleBackup;\n                obj.olddate = +new Date();\n                obj.lastActive = obj.olddate;\n                obj.remaining = null;\n\n                // reset Timers\n                clearTimeout(obj.tId);\n                if (!obj.idle) {\n                    obj.tId = setTimeout(toggleIdleState, obj.timeout);\n                }\n\n            },\n            /**\n             * Store remaining time, stop timer\n             * You can pause from an idle OR active state\n             * @return {void}\n             * @method pause\n             * @static\n             */\n            pause = function () {\n\n                var obj = $.data(elem, \"idleTimerObj\") || {};\n\n                // this is already paused\n                if ( obj.remaining != null ) { return; }\n\n                // define how much is left on the timer\n                obj.remaining = obj.timeout - ((+new Date()) - obj.olddate);\n\n                // clear any existing timeout\n                clearTimeout(obj.tId);\n            },\n            /**\n             * Start timer with remaining value\n             * @return {void}\n             * @method resume\n             * @static\n             */\n            resume = function () {\n\n                var obj = $.data(elem, \"idleTimerObj\") || {};\n\n                // this isn't paused yet\n                if ( obj.remaining == null ) { return; }\n\n                // start timer\n                if ( !obj.idle ) {\n                    obj.tId = setTimeout(toggleIdleState, obj.remaining);\n                }\n\n                // clear remaining\n                obj.remaining = null;\n            },\n            /**\n             * Stops the idle timer. This removes appropriate event handlers\n             * and cancels any pending timeouts.\n             * @return {void}\n             * @method destroy\n             * @static\n             */\n            destroy = function () {\n\n                var obj = $.data(elem, \"idleTimerObj\") || {};\n\n                //clear any pending timeouts\n                clearTimeout(obj.tId);\n\n                //Remove data\n                jqElem.removeData(\"idleTimerObj\");\n\n                //detach the event handlers\n                jqElem.off(\"._idleTimer\");\n            },\n            /**\n            * Returns the time until becoming idle\n            * @return {number}\n            * @method remainingtime\n            * @static\n            */\n            remainingtime = function () {\n\n                var obj = $.data(elem, \"idleTimerObj\") || {};\n\n                //If idle there is no time remaining\n                if ( obj.idle ) { return 0; }\n\n                //If its paused just return that\n                if ( obj.remaining != null ) { return obj.remaining; }\n\n                //Determine remaining, if negative idle didn't finish flipping, just return 0\n                var remaining = obj.timeout - ((+new Date()) - obj.lastActive);\n                if (remaining < 0) { remaining = 0; }\n\n                //If this is paused return that number, else return current remaining\n                return remaining;\n            };\n\n\n        // determine which function to call\n        if (firstParam === null && typeof obj.idle !== \"undefined\") {\n            // they think they want to init, but it already is, just reset\n            reset();\n            return jqElem;\n        } else if (firstParam === null) {\n            // they want to init\n        } else if (firstParam !== null && typeof obj.idle === \"undefined\") {\n            // they want to do something, but it isnt init\n            // not sure the best way to handle this\n            return false;\n        } else if (firstParam === \"destroy\") {\n            destroy();\n            return jqElem;\n        } else if (firstParam === \"pause\") {\n            pause();\n            return jqElem;\n        } else if (firstParam === \"resume\") {\n            resume();\n            return jqElem;\n        } else if (firstParam === \"reset\") {\n            reset();\n            return jqElem;\n        } else if (firstParam === \"getRemainingTime\") {\n            return remainingtime();\n        } else if (firstParam === \"getElapsedTime\") {\n            return (+new Date()) - obj.olddate;\n        } else if (firstParam === \"getLastActiveTime\") {\n            return obj.lastActive;\n        } else if (firstParam === \"isIdle\") {\n            return obj.idle;\n        }\n\n        /* (intentionally not documented)\n         * Handles a user event indicating that the user isn't idle. namespaced with internal idleTimer\n         * @param {Event} event A DOM2-normalized event object.\n         * @return {void}\n         */\n        jqElem.on($.trim((opts.events + \" \").split(\" \").join(\"._idleTimer \")), function (e) {\n            handleEvent(e);\n        });\n\n        if (opts.timerSyncId) {\n            $(window).bind(\"storage\", handleEvent);\n        }\n\n        // Internal Object Properties, This isn't all necessary, but we\n        // explicitly define all keys here so we know what we are working with\n        obj = $.extend({}, {\n            olddate : +new Date(),          // the last time state changed\n            lastActive: +new Date(),       // the last time timer was active\n            idle : opts.idle,               // current state\n            idleBackup : opts.idle,         // backup of idle parameter since it gets modified\n            timeout : opts.timeout,         // the interval to change state\n            remaining : null,               // how long until state changes\n            timerSyncId : opts.timerSyncId, // localStorage key to use for syncing this timer\n            tId : null,                     // the idle timer setTimeout\n            pageX : null,                   // used to store the mouse coord\n            pageY : null\n        });\n\n        // set a timeout to toggle state. May wish to omit this in some situations\n        if (!obj.idle) {\n            obj.tId = setTimeout(toggleIdleState, obj.timeout);\n        }\n\n        // store our instance on the object\n        $.data(elem, \"idleTimerObj\", obj);\n\n        return jqElem;\n    };\n\n    // This allows binding to element\n    $.fn.idleTimer = function (firstParam) {\n        if (this[0]) {\n            return $.idleTimer(firstParam, this[0]);\n        }\n\n        return this;\n    };\n\n})(jQuery);\n\n\n//# sourceURL=webpack:///./node_modules/jquery-idletimer/dist/idle-timer.js?");

/***/ })

/******/ });
});;