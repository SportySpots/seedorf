
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/nestable/nestable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/nestable/nestable.js":
/*!***********************************!*\
  !*** ./libs/nestable/nestable.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/nestable/jquery.nestable.js */ \"./node_modules/nestable/jquery.nestable.js\");\n\n\n//# sourceURL=webpack:///./libs/nestable/nestable.js?");

/***/ }),

/***/ "./node_modules/nestable/jquery.nestable.js":
/*!**************************************************!*\
  !*** ./node_modules/nestable/jquery.nestable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/\n * Dual-licensed under the BSD or MIT licenses\n */\n;(function($, window, document, undefined)\n{\n    var hasTouch = 'ontouchstart' in document;\n\n    /**\n     * Detect CSS pointer-events property\n     * events are normally disabled on the dragging element to avoid conflicts\n     * https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js\n     */\n    var hasPointerEvents = (function()\n    {\n        var el    = document.createElement('div'),\n            docEl = document.documentElement;\n        if (!('pointerEvents' in el.style)) {\n            return false;\n        }\n        el.style.pointerEvents = 'auto';\n        el.style.pointerEvents = 'x';\n        docEl.appendChild(el);\n        var supports = window.getComputedStyle && window.getComputedStyle(el, '').pointerEvents === 'auto';\n        docEl.removeChild(el);\n        return !!supports;\n    })();\n\n    var defaults = {\n            listNodeName    : 'ol',\n            itemNodeName    : 'li',\n            rootClass       : 'dd',\n            listClass       : 'dd-list',\n            itemClass       : 'dd-item',\n            dragClass       : 'dd-dragel',\n            handleClass     : 'dd-handle',\n            collapsedClass  : 'dd-collapsed',\n            placeClass      : 'dd-placeholder',\n            noDragClass     : 'dd-nodrag',\n            emptyClass      : 'dd-empty',\n            expandBtnHTML   : '<button data-action=\"expand\" type=\"button\">Expand</button>',\n            collapseBtnHTML : '<button data-action=\"collapse\" type=\"button\">Collapse</button>',\n            group           : 0,\n            maxDepth        : 5,\n            threshold       : 20\n        };\n\n    function Plugin(element, options)\n    {\n        this.w  = $(document);\n        this.el = $(element);\n        this.options = $.extend({}, defaults, options);\n        this.init();\n    }\n\n    Plugin.prototype = {\n\n        init: function()\n        {\n            var list = this;\n\n            list.reset();\n\n            list.el.data('nestable-group', this.options.group);\n\n            list.placeEl = $('<div class=\"' + list.options.placeClass + '\"/>');\n\n            $.each(this.el.find(list.options.itemNodeName), function(k, el) {\n                list.setParent($(el));\n            });\n\n            list.el.on('click', 'button', function(e) {\n                if (list.dragEl) {\n                    return;\n                }\n                var target = $(e.currentTarget),\n                    action = target.data('action'),\n                    item   = target.parent(list.options.itemNodeName);\n                if (action === 'collapse') {\n                    list.collapseItem(item);\n                }\n                if (action === 'expand') {\n                    list.expandItem(item);\n                }\n            });\n\n            var onStartEvent = function(e)\n            {\n                var handle = $(e.target);\n                if (!handle.hasClass(list.options.handleClass)) {\n                    if (handle.closest('.' + list.options.noDragClass).length) {\n                        return;\n                    }\n                    handle = handle.closest('.' + list.options.handleClass);\n                }\n\n                if (!handle.length || list.dragEl) {\n                    return;\n                }\n\n                list.isTouch = /^touch/.test(e.type);\n                if (list.isTouch && e.touches.length !== 1) {\n                    return;\n                }\n\n                e.preventDefault();\n                list.dragStart(e.touches ? e.touches[0] : e);\n            };\n\n            var onMoveEvent = function(e)\n            {\n                if (list.dragEl) {\n                    e.preventDefault();\n                    list.dragMove(e.touches ? e.touches[0] : e);\n                }\n            };\n\n            var onEndEvent = function(e)\n            {\n                if (list.dragEl) {\n                    e.preventDefault();\n                    list.dragStop(e.touches ? e.touches[0] : e);\n                }\n            };\n\n            if (hasTouch) {\n                list.el[0].addEventListener('touchstart', onStartEvent, false);\n                window.addEventListener('touchmove', onMoveEvent, false);\n                window.addEventListener('touchend', onEndEvent, false);\n                window.addEventListener('touchcancel', onEndEvent, false);\n            }\n\n            list.el.on('mousedown', onStartEvent);\n            list.w.on('mousemove', onMoveEvent);\n            list.w.on('mouseup', onEndEvent);\n\n        },\n\n        serialize: function()\n        {\n            var data,\n                depth = 0,\n                list  = this;\n                step  = function(level, depth)\n                {\n                    var array = [ ],\n                        items = level.children(list.options.itemNodeName);\n                    items.each(function()\n                    {\n                        var li   = $(this),\n                            item = $.extend({}, li.data()),\n                            sub  = li.children(list.options.listNodeName);\n                        if (sub.length) {\n                            item.children = step(sub, depth + 1);\n                        }\n                        array.push(item);\n                    });\n                    return array;\n                };\n            data = step(list.el.find(list.options.listNodeName).first(), depth);\n            return data;\n        },\n\n        serialise: function()\n        {\n            return this.serialize();\n        },\n\n        reset: function()\n        {\n            this.mouse = {\n                offsetX   : 0,\n                offsetY   : 0,\n                startX    : 0,\n                startY    : 0,\n                lastX     : 0,\n                lastY     : 0,\n                nowX      : 0,\n                nowY      : 0,\n                distX     : 0,\n                distY     : 0,\n                dirAx     : 0,\n                dirX      : 0,\n                dirY      : 0,\n                lastDirX  : 0,\n                lastDirY  : 0,\n                distAxX   : 0,\n                distAxY   : 0\n            };\n            this.isTouch    = false;\n            this.moving     = false;\n            this.dragEl     = null;\n            this.dragRootEl = null;\n            this.dragDepth  = 0;\n            this.hasNewRoot = false;\n            this.pointEl    = null;\n        },\n\n        expandItem: function(li)\n        {\n            li.removeClass(this.options.collapsedClass);\n            li.children('[data-action=\"expand\"]').hide();\n            li.children('[data-action=\"collapse\"]').show();\n            li.children(this.options.listNodeName).show();\n        },\n\n        collapseItem: function(li)\n        {\n            var lists = li.children(this.options.listNodeName);\n            if (lists.length) {\n                li.addClass(this.options.collapsedClass);\n                li.children('[data-action=\"collapse\"]').hide();\n                li.children('[data-action=\"expand\"]').show();\n                li.children(this.options.listNodeName).hide();\n            }\n        },\n\n        expandAll: function()\n        {\n            var list = this;\n            list.el.find(list.options.itemNodeName).each(function() {\n                list.expandItem($(this));\n            });\n        },\n\n        collapseAll: function()\n        {\n            var list = this;\n            list.el.find(list.options.itemNodeName).each(function() {\n                list.collapseItem($(this));\n            });\n        },\n\n        setParent: function(li)\n        {\n            if (li.children(this.options.listNodeName).length) {\n                li.prepend($(this.options.expandBtnHTML));\n                li.prepend($(this.options.collapseBtnHTML));\n            }\n            li.children('[data-action=\"expand\"]').hide();\n        },\n\n        unsetParent: function(li)\n        {\n            li.removeClass(this.options.collapsedClass);\n            li.children('[data-action]').remove();\n            li.children(this.options.listNodeName).remove();\n        },\n\n        dragStart: function(e)\n        {\n            var mouse    = this.mouse,\n                target   = $(e.target),\n                dragItem = target.closest(this.options.itemNodeName);\n\n            this.placeEl.css('height', dragItem.height());\n\n            mouse.offsetX = e.offsetX !== undefined ? e.offsetX : e.pageX - target.offset().left;\n            mouse.offsetY = e.offsetY !== undefined ? e.offsetY : e.pageY - target.offset().top;\n            mouse.startX = mouse.lastX = e.pageX;\n            mouse.startY = mouse.lastY = e.pageY;\n\n            this.dragRootEl = this.el;\n\n            this.dragEl = $(document.createElement(this.options.listNodeName)).addClass(this.options.listClass + ' ' + this.options.dragClass);\n            this.dragEl.css('width', dragItem.width());\n\n            dragItem.after(this.placeEl);\n            dragItem[0].parentNode.removeChild(dragItem[0]);\n            dragItem.appendTo(this.dragEl);\n\n            $(document.body).append(this.dragEl);\n            this.dragEl.css({\n                'left' : e.pageX - mouse.offsetX,\n                'top'  : e.pageY - mouse.offsetY\n            });\n            // total depth of dragging item\n            var i, depth,\n                items = this.dragEl.find(this.options.itemNodeName);\n            for (i = 0; i < items.length; i++) {\n                depth = $(items[i]).parents(this.options.listNodeName).length;\n                if (depth > this.dragDepth) {\n                    this.dragDepth = depth;\n                }\n            }\n        },\n\n        dragStop: function(e)\n        {\n            var el = this.dragEl.children(this.options.itemNodeName).first();\n            el[0].parentNode.removeChild(el[0]);\n            this.placeEl.replaceWith(el);\n\n            this.dragEl.remove();\n            this.el.trigger('change');\n            if (this.hasNewRoot) {\n                this.dragRootEl.trigger('change');\n            }\n            this.reset();\n        },\n\n        dragMove: function(e)\n        {\n            var list, parent, prev, next, depth,\n                opt   = this.options,\n                mouse = this.mouse;\n\n            this.dragEl.css({\n                'left' : e.pageX - mouse.offsetX,\n                'top'  : e.pageY - mouse.offsetY\n            });\n\n            // mouse position last events\n            mouse.lastX = mouse.nowX;\n            mouse.lastY = mouse.nowY;\n            // mouse position this events\n            mouse.nowX  = e.pageX;\n            mouse.nowY  = e.pageY;\n            // distance mouse moved between events\n            mouse.distX = mouse.nowX - mouse.lastX;\n            mouse.distY = mouse.nowY - mouse.lastY;\n            // direction mouse was moving\n            mouse.lastDirX = mouse.dirX;\n            mouse.lastDirY = mouse.dirY;\n            // direction mouse is now moving (on both axis)\n            mouse.dirX = mouse.distX === 0 ? 0 : mouse.distX > 0 ? 1 : -1;\n            mouse.dirY = mouse.distY === 0 ? 0 : mouse.distY > 0 ? 1 : -1;\n            // axis mouse is now moving on\n            var newAx   = Math.abs(mouse.distX) > Math.abs(mouse.distY) ? 1 : 0;\n\n            // do nothing on first move\n            if (!mouse.moving) {\n                mouse.dirAx  = newAx;\n                mouse.moving = true;\n                return;\n            }\n\n            // calc distance moved on this axis (and direction)\n            if (mouse.dirAx !== newAx) {\n                mouse.distAxX = 0;\n                mouse.distAxY = 0;\n            } else {\n                mouse.distAxX += Math.abs(mouse.distX);\n                if (mouse.dirX !== 0 && mouse.dirX !== mouse.lastDirX) {\n                    mouse.distAxX = 0;\n                }\n                mouse.distAxY += Math.abs(mouse.distY);\n                if (mouse.dirY !== 0 && mouse.dirY !== mouse.lastDirY) {\n                    mouse.distAxY = 0;\n                }\n            }\n            mouse.dirAx = newAx;\n\n            /**\n             * move horizontal\n             */\n            if (mouse.dirAx && mouse.distAxX >= opt.threshold) {\n                // reset move distance on x-axis for new phase\n                mouse.distAxX = 0;\n                prev = this.placeEl.prev(opt.itemNodeName);\n                // increase horizontal level if previous sibling exists and is not collapsed\n                if (mouse.distX > 0 && prev.length && !prev.hasClass(opt.collapsedClass)) {\n                    // cannot increase level when item above is collapsed\n                    list = prev.find(opt.listNodeName).last();\n                    // check if depth limit has reached\n                    depth = this.placeEl.parents(opt.listNodeName).length;\n                    if (depth + this.dragDepth <= opt.maxDepth) {\n                        // create new sub-level if one doesn't exist\n                        if (!list.length) {\n                            list = $('<' + opt.listNodeName + '/>').addClass(opt.listClass);\n                            list.append(this.placeEl);\n                            prev.append(list);\n                            this.setParent(prev);\n                        } else {\n                            // else append to next level up\n                            list = prev.children(opt.listNodeName).last();\n                            list.append(this.placeEl);\n                        }\n                    }\n                }\n                // decrease horizontal level\n                if (mouse.distX < 0) {\n                    // we can't decrease a level if an item preceeds the current one\n                    next = this.placeEl.next(opt.itemNodeName);\n                    if (!next.length) {\n                        parent = this.placeEl.parent();\n                        this.placeEl.closest(opt.itemNodeName).after(this.placeEl);\n                        if (!parent.children().length) {\n                            this.unsetParent(parent.parent());\n                        }\n                    }\n                }\n            }\n\n            var isEmpty = false;\n\n            // find list item under cursor\n            if (!hasPointerEvents) {\n                this.dragEl[0].style.visibility = 'hidden';\n            }\n            this.pointEl = $(document.elementFromPoint(e.pageX - document.body.scrollLeft, e.pageY - (window.pageYOffset || document.documentElement.scrollTop)));\n            if (!hasPointerEvents) {\n                this.dragEl[0].style.visibility = 'visible';\n            }\n            if (this.pointEl.hasClass(opt.handleClass)) {\n                this.pointEl = this.pointEl.parent(opt.itemNodeName);\n            }\n            if (this.pointEl.hasClass(opt.emptyClass)) {\n                isEmpty = true;\n            }\n            else if (!this.pointEl.length || !this.pointEl.hasClass(opt.itemClass)) {\n                return;\n            }\n\n            // find parent list of item under cursor\n            var pointElRoot = this.pointEl.closest('.' + opt.rootClass),\n                isNewRoot   = this.dragRootEl.data('nestable-id') !== pointElRoot.data('nestable-id');\n\n            /**\n             * move vertical\n             */\n            if (!mouse.dirAx || isNewRoot || isEmpty) {\n                // check if groups match if dragging over new root\n                if (isNewRoot && opt.group !== pointElRoot.data('nestable-group')) {\n                    return;\n                }\n                // check depth limit\n                depth = this.dragDepth - 1 + this.pointEl.parents(opt.listNodeName).length;\n                if (depth > opt.maxDepth) {\n                    return;\n                }\n                var before = e.pageY < (this.pointEl.offset().top + this.pointEl.height() / 2);\n                    parent = this.placeEl.parent();\n                // if empty create new list to replace empty placeholder\n                if (isEmpty) {\n                    list = $(document.createElement(opt.listNodeName)).addClass(opt.listClass);\n                    list.append(this.placeEl);\n                    this.pointEl.replaceWith(list);\n                }\n                else if (before) {\n                    this.pointEl.before(this.placeEl);\n                }\n                else {\n                    this.pointEl.after(this.placeEl);\n                }\n                if (!parent.children().length) {\n                    this.unsetParent(parent.parent());\n                }\n                if (!this.dragRootEl.find(opt.itemNodeName).length) {\n                    this.dragRootEl.append('<div class=\"' + opt.emptyClass + '\"/>');\n                }\n                // parent root list has changed\n                if (isNewRoot) {\n                    this.dragRootEl = pointElRoot;\n                    this.hasNewRoot = this.el[0] !== this.dragRootEl[0];\n                }\n            }\n        }\n\n    };\n\n    $.fn.nestable = function(params)\n    {\n        var lists  = this,\n            retval = this;\n\n        lists.each(function()\n        {\n            var plugin = $(this).data(\"nestable\");\n\n            if (!plugin) {\n                $(this).data(\"nestable\", new Plugin(this, params));\n                $(this).data(\"nestable-id\", new Date().getTime());\n            } else {\n                if (typeof params === 'string' && typeof plugin[params] === 'function') {\n                    retval = plugin[params]();\n                }\n            }\n        });\n\n        return retval || lists;\n    };\n\n})(window.jQuery || window.Zepto, window, document);\n\n\n//# sourceURL=webpack:///./node_modules/nestable/jquery.nestable.js?");

/***/ })

/******/ });
});;