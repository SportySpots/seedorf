
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/bootstrap-sortable/bootstrap-sortable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/bootstrap-sortable/bootstrap-sortable.js":
/*!*******************************************************!*\
  !*** ./libs/bootstrap-sortable/bootstrap-sortable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/bootstrap-sortable/Scripts/bootstrap-sortable.js */ \"./node_modules/bootstrap-sortable/Scripts/bootstrap-sortable.js\");\n\n\n//# sourceURL=webpack:///./libs/bootstrap-sortable/bootstrap-sortable.js?");

/***/ }),

/***/ "./node_modules/bootstrap-sortable/Scripts/bootstrap-sortable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-sortable/Scripts/bootstrap-sortable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__factory, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * adding sorting ability to HTML tables with Bootstrap styling\n * @summary HTML tables sorting ability\n * @version 2.0.1\n * @requires tinysort, moment.js, jQuery\n * @license MIT\n * @author Matus Brlit (drvic10k)\n * @copyright Matus Brlit (drvic10k), bootstrap-sortable contributors\n */\n\n/**\n * TinySort is a small script that sorts HTML elements. It sorts by text- or attribute value, or by that of one of it's children.\n * @summary A nodeElement sorting script.\n * @version 2.3.6\n * @license MIT\n * @author Ron Valstar <ron@ronvalstar.nl>\n * @copyright Ron Valstar <ron@ronvalstar.nl>\n * @namespace tinysort\n */\n!function (e, t) { \"use strict\"; function r() { return t }  true ? !(__WEBPACK_LOCAL_MODULE_0__factory = (r), (__WEBPACK_LOCAL_MODULE_0__module = { id: \"tinysort\", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_LOCAL_MODULE_0__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_0__factory.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module)) : __WEBPACK_LOCAL_MODULE_0__factory), (__WEBPACK_LOCAL_MODULE_0__module.loaded = true), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports)) : undefined }(this, function () { \"use strict\"; function e(e, n) { function s() { 0 === arguments.length ? v({}) : t(arguments, function (e) { v(x(e) ? { selector: e } : e) }), d = $.length } function v(e) { var t = !!e.selector, n = t && \":\" === e.selector[0], o = r(e || {}, m); $.push(r({ hasSelector: t, hasAttr: !(o.attr === l || \"\" === o.attr), hasData: o.data !== l, hasFilter: n, sortReturnNumber: \"asc\" === o.order ? 1 : -1 }, o)) } function S() { t(e, function (e, t) { M ? M !== e.parentNode && (k = !1) : M = e.parentNode; var r = $[0], n = r.hasFilter, o = r.selector, a = !o || n && e.matchesSelector(o) || o && e.querySelector(o), l = a ? R : V, s = { elm: e, pos: t, posn: l.length }; B.push(s), l.push(s) }), D = R.slice(0) } function y(e, t, r) { for (var n = r(e.toString()), o = r(t.toString()), a = 0; n[a] && o[a]; a++) if (n[a] !== o[a]) { var l = Number(n[a]), s = Number(o[a]); return l == n[a] && s == o[a] ? l - s : n[a] > o[a] ? 1 : -1 } return n.length - o.length } function N(e) { for (var t, r, n = [], o = 0, a = -1, l = 0; t = (r = e.charAt(o++)).charCodeAt(0) ;) { var s = 46 == t || t >= 48 && 57 >= t; s !== l && (n[++a] = \"\", l = s), n[a] += r } return n } function C(e, r) { var n = 0; for (0 !== p && (p = 0) ; 0 === n && d > p;) { var l = $[p], s = l.ignoreDashes ? f : u; if (t(h, function (e) { var t = e.prepare; t && t(l) }), l.sortFunction) n = l.sortFunction(e, r); else if (\"rand\" == l.order) n = Math.random() < .5 ? 1 : -1; else { var c = a, g = w(e, l), m = w(r, l), v = \"\" === g || g === o, S = \"\" === m || m === o; if (g === m) n = 0; else if (l.emptyEnd && (v || S)) n = v && S ? 0 : v ? 1 : -1; else { if (!l.forceStrings) { var C = x(g) ? g && g.match(s) : a, b = x(m) ? m && m.match(s) : a; if (C && b) { var A = g.substr(0, g.length - C[0].length), F = m.substr(0, m.length - b[0].length); A == F && (c = !a, g = i(C[0]), m = i(b[0])) } } n = g === o || m === o ? 0 : l.natural && (isNaN(g) || isNaN(m)) ? y(g, m, N) : m > g ? -1 : g > m ? 1 : 0 } } t(h, function (e) { var t = e.sort; t && (n = t(l, c, g, m, n)) }), n *= l.sortReturnNumber, 0 === n && p++ } return 0 === n && (n = e.pos > r.pos ? 1 : -1), n } function b() { var e = R.length === B.length; if (k && e) O ? R.forEach(function (e, t) { e.elm.style.order = t }) : M ? M.appendChild(A()) : console.warn(\"parentNode has been removed\"); else { var t = $[0], r = t.place, n = \"org\" === r, o = \"start\" === r, a = \"end\" === r, l = \"first\" === r, s = \"last\" === r; if (n) R.forEach(F), R.forEach(function (e, t) { E(D[t], e.elm) }); else if (o || a) { var c = D[o ? 0 : D.length - 1], i = c && c.elm.parentNode, u = i && (o && i.firstChild || i.lastChild); u && (u !== c.elm && (c = { elm: u }), F(c), a && i.appendChild(c.ghost), E(c, A())) } else if (l || s) { var f = D[l ? 0 : D.length - 1]; E(F(f), A()) } } } function A() { return R.forEach(function (e) { q.appendChild(e.elm) }), q } function F(e) { var t = e.elm, r = c.createElement(\"div\"); return e.ghost = r, t.parentNode.insertBefore(r, t), e } function E(e, t) { var r = e.ghost, n = r.parentNode; n.insertBefore(t, r), n.removeChild(r), delete e.ghost } function w(e, t) { var r, n = e.elm; return t.selector && (t.hasFilter ? n.matchesSelector(t.selector) || (n = l) : n = n.querySelector(t.selector)), t.hasAttr ? r = n.getAttribute(t.attr) : t.useVal ? r = n.value || n.getAttribute(\"value\") : t.hasData ? r = n.getAttribute(\"data-\" + t.data) : n && (r = n.textContent), x(r) && (t.cases || (r = r.toLowerCase()), r = r.replace(/\\s+/g, \" \")), null === r && (r = g), r } function x(e) { return \"string\" == typeof e } x(e) && (e = c.querySelectorAll(e)), 0 === e.length && console.warn(\"No elements to sort\"); var D, M, q = c.createDocumentFragment(), B = [], R = [], V = [], $ = [], k = !0, z = e.length && e[0].parentNode, L = z.rootNode !== document, O = e.length && (n === o || n.useFlex !== !1) && !L && -1 !== getComputedStyle(z, null).display.indexOf(\"flex\"); return s.apply(l, Array.prototype.slice.call(arguments, 1)), S(), R.sort(C), b(), R.map(function (e) { return e.elm }) } function t(e, t) { for (var r, n = e.length, o = n; o--;) r = n - o - 1, t(e[r], r) } function r(e, t, r) { for (var n in t) (r || e[n] === o) && (e[n] = t[n]); return e } function n(e, t, r) { h.push({ prepare: e, sort: t, sortBy: r }) } var o, a = !1, l = null, s = window, c = s.document, i = parseFloat, u = /(-?\\d+\\.?\\d*)\\s*$/g, f = /(\\d+\\.?\\d*)\\s*$/g, h = [], d = 0, p = 0, g = String.fromCharCode(4095), m = { selector: l, order: \"asc\", attr: l, data: l, useVal: a, place: \"org\", returns: a, cases: a, natural: a, forceStrings: a, ignoreDashes: a, sortFunction: l, useFlex: a, emptyEnd: a }; return s.Element && function (e) { e.matchesSelector = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, r = (t.parentNode || t.document).querySelectorAll(e), n = -1; r[++n] && r[n] != t;); return !!r[n] } }(Element.prototype), r(n, { loop: t }), r(e, { plugin: n, defaults: m }) }());\n\n(function (global, factory) {\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"jquery\"), __WEBPACK_LOCAL_MODULE_0__, __webpack_require__(/*! moment */ \"moment\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n})(this, function ($, tinysort, moment) {\n\n    var $document = $(document),\n        signClass,\n        sortEngine,\n        emptyEnd;\n\n    $.bootstrapSortable = function (options) {\n        if (options == undefined) {\n            initialize({});\n        }\n        else if (options.constructor === Boolean) {\n            initialize({ applyLast: options });\n        }\n        else if (options.sortingHeader !== undefined) {\n            sortByColumn(options.sortingHeader);\n        }\n        else {\n            initialize(options);\n        }\n    };\n\n    function initialize(options) {\n        // Check if moment.js is available\n        var momentJsAvailable = (typeof moment !== 'undefined');\n\n        // Set class based on sign parameter\n        signClass = !options.sign ? \"arrow\" : options.sign;\n\n        // Set sorting algorithm\n        if (options.customSort == 'default')\n            options.customSort = defaultSortEngine;\n        sortEngine = options.customSort || sortEngine || defaultSortEngine;\n\n        emptyEnd = options.emptyEnd;\n\n        // Set attributes needed for sorting\n        $('table.sortable').each(function () {\n            var $this = $(this);\n            var applyLast = (options.applyLast === true);\n            $this.find('span.sign').remove();\n\n            // Add placeholder cells for colspans\n            $this.find('> thead [colspan]').each(function () {\n                var colspan = parseFloat($(this).attr('colspan'));\n                for (var i = 1; i < colspan; i++) {\n                    $(this).after('<th class=\"colspan-compensate\">');\n                }\n            });\n\n            // Add placeholder cells for rowspans in header\n            $this.find('> thead [rowspan]').each(function () {\n                var $cell = $(this);\n                var rowspan = parseFloat($cell.attr('rowspan'));\n                for (var i = 1; i < rowspan; i++) {\n                    var parentRow = $cell.parent('tr');\n                    var nextRow = parentRow.next('tr');\n                    var index = parentRow.children().index($cell);\n                    nextRow.children().eq(index).before('<th class=\"rowspan-compensate\">');\n                }\n            });\n\n            // Set indexes to header cells\n            $this.find('> thead tr').each(function (rowIndex) {\n                $(this).find('th').each(function (columnIndex) {\n                    var $header = $(this);\n                    $header.addClass('nosort').removeClass('up down');\n                    $header.attr('data-sortcolumn', columnIndex);\n                    $header.attr('data-sortkey', columnIndex + '-' + rowIndex);\n                });\n            });\n\n            // Cleanup placeholder cells\n            $this.find('> thead .rowspan-compensate, .colspan-compensate').remove();\n\n            // Initialize sorting values specified in header\n            $this.find('th').each(function () {\n                var $header = $(this);\n                if ($header.attr('data-dateformat') !== undefined && momentJsAvailable) {\n                    var colNumber = parseFloat($header.attr('data-sortcolumn'));\n                    $this.find('td:nth-child(' + (colNumber + 1) + ')').each(function () {\n                        var $cell = $(this);\n                        $cell.attr('data-value', moment($cell.text(), $header.attr('data-dateformat')).format('YYYY/MM/DD/HH/mm/ss'));\n                    });\n                }\n                else if ($header.attr('data-valueprovider') !== undefined) {\n                    var colNumber = parseFloat($header.attr('data-sortcolumn'));\n                    $this.find('td:nth-child(' + (colNumber + 1) + ')').each(function () {\n                        var $cell = $(this);\n                        $cell.attr('data-value', new RegExp($header.attr('data-valueprovider')).exec($cell.text())[0]);\n                    });\n                }\n            });\n\n            // Initialize sorting values\n            $this.find('td').each(function () {\n                var $cell = $(this);\n                if ($cell.attr('data-dateformat') !== undefined && momentJsAvailable) {\n                    $cell.attr('data-value', moment($cell.text(), $cell.attr('data-dateformat')).format('YYYY/MM/DD/HH/mm/ss'));\n                }\n                else if ($cell.attr('data-valueprovider') !== undefined) {\n                    $cell.attr('data-value', new RegExp($cell.attr('data-valueprovider')).exec($cell.text())[0]);\n                }\n                else {\n                    $cell.attr('data-value') === undefined && $cell.attr('data-value', $cell.text());\n                }\n            });\n\n            var context = lookupSortContext($this),\n                bsSort = context.bsSort;\n\n            $this.find('> thead th[data-defaultsort!=\"disabled\"]').each(function (index) {\n                var $header = $(this);\n                var $sortTable = $header.closest('table.sortable');\n                $header.data('sortTable', $sortTable);\n                var sortKey = $header.attr('data-sortkey');\n                var thisLastSort = applyLast ? context.lastSort : -1;\n                bsSort[sortKey] = applyLast ? bsSort[sortKey] : $header.attr('data-defaultsort');\n                if (bsSort[sortKey] !== undefined && (applyLast === (sortKey === thisLastSort))) {\n                    bsSort[sortKey] = bsSort[sortKey] === 'asc' ? 'desc' : 'asc';\n                    doSort($header, $sortTable);\n                }\n            });\n        });\n    }\n\n    // Clean up placeholder cells for rowspans in body\n    function removeRowspanPlaceholders(table) {\n        table.find('> tbody [rowspan-group]').each(function () {\n            var $this = $(this);\n            var id = $this.attr('rowspan-group');\n            var parentRow = $this.parent('tr');\n            var index = parentRow.children().index($this);\n\n            while(true) {\n                var nextRow = parentRow.next('tr');\n                if (!nextRow.is('tr'))\n                    break;\n                var nextCell = nextRow.children().eq(index);\n\n                if (nextCell.attr('rowspan-group') === id) {\n                    var rowspan = parseFloat($this.attr('rowspan')) || 1;\n                    $this.attr('rowspan', rowspan + 1);\n                    nextCell.remove();\n                } else {\n                    break;\n                }\n                parentRow = nextRow;\n            }\n        });\n    }\n\n    // Add placeholder cells for rowspans in body\n    function addRowspanPlaceholders(table) {\n        table.find('> tbody [rowspan]').each(function () {\n            var $cell = $(this);\n            var rowspan = parseFloat($cell.attr('rowspan'));\n            $cell.removeAttr('rowspan');\n            var rowSpanId = $cell.attr('rowspan-group') || guid();\n            $cell.attr('rowspan-group', rowSpanId);\n            $cell.attr('rowspan-value', rowspan);\n            var parentRow = $cell.parent('tr');\n            var index = parentRow.children().index($cell);\n            for (var i = 1; i < rowspan; i++) {\n                var compemnsationCell = $cell.clone(false);\n                var nextRow = parentRow.next('tr');\n                nextRow.children().eq(index).before(compemnsationCell);\n                parentRow = nextRow;\n            }\n        });\n    }\n\n    // Add click event to table header\n    $document.on('click', 'table.sortable>thead th[data-defaultsort!=\"disabled\"]', function (e) {\n        sortByColumn(this);\n    });\n\n    // element is the header of the column to sort (the clicked header)\n    function sortByColumn(element) {\n        var $this = $(element), $table = $this.data('sortTable') || $this.closest('table.sortable');\n        doSort($this, $table);\n    }\n\n    // Look up sorting data appropriate for the specified table (jQuery element).\n    // This allows multiple tables on one page without collisions.\n    function lookupSortContext($table) {\n        var context = $table.data(\"bootstrap-sortable-context\");\n        if (context === undefined) {\n            context = { bsSort: [], lastSort: undefined };\n            $table.find('> thead th[data-defaultsort!=\"disabled\"]').each(function (index) {\n                var $this = $(this);\n                var sortKey = $this.attr('data-sortkey');\n                context.bsSort[sortKey] = $this.attr('data-defaultsort');\n                if (context.bsSort[sortKey] !== undefined) {\n                    context.lastSort = sortKey;\n                }\n            });\n            $table.data(\"bootstrap-sortable-context\", context);\n        }\n        return context;\n    }\n\n    function defaultSortEngine(rows, sortingParams) {\n        tinysort(rows, sortingParams);\n    }\n\n    // Sorting mechanism separated\n    function doSort($this, $table) {\n        $table.trigger('before-sort');\n\n        addRowspanPlaceholders($table);\n\n        var sortColumn = parseFloat($this.attr('data-sortcolumn')),\n            context = lookupSortContext($table),\n            bsSort = context.bsSort;\n\n        var colspan = $this.attr('colspan');\n        if (colspan) {\n            var mainSort = parseFloat($this.data('mainsort')) || 0;\n            var rowIndex = parseFloat($this.data('sortkey').split('-').pop());\n\n            // If there is one more row in header, delve deeper\n            if ($table.find('> thead tr').length - 1 > rowIndex) {\n                doSort($table.find('[data-sortkey=\"' + (sortColumn + mainSort) + '-' + (rowIndex + 1) + '\"]'), $table);\n                return;\n            }\n            // Otherwise, just adjust the sortColumn\n            sortColumn = sortColumn + mainSort;\n        }\n\n        var localSignClass = $this.attr('data-defaultsign') || signClass;\n\n        // update arrow icon\n        $table.find('> thead th').each(function () {\n            $(this).removeClass('up').removeClass('down').addClass('nosort');\n        });\n\n        if ($.browser.mozilla) {\n            var moz_arrow = $table.find('> thead div.mozilla');\n            if (moz_arrow !== undefined) {\n                moz_arrow.find('.sign').remove();\n                moz_arrow.parent().html(moz_arrow.html());\n            }\n            $this.wrapInner('<div class=\"mozilla\"></div>');\n            $this.children().eq(0).append('<span class=\"sign ' + localSignClass + '\"></span>');\n        }\n        else {\n            $table.find('> thead span.sign').remove();\n            $this.append('<span class=\"sign ' + localSignClass + '\"></span>');\n        }\n\n        // sort direction\n        var sortKey = $this.attr('data-sortkey');\n        var initialDirection = $this.attr('data-firstsort') !== 'desc' ? 'desc' : 'asc';\n\n        var newDirection = (bsSort[sortKey] || initialDirection);\n        if (context.lastSort === sortKey || bsSort[sortKey] === undefined) {\n            newDirection = newDirection === 'asc' ? 'desc' : 'asc';\n        }\n        bsSort[sortKey] = newDirection;\n        context.lastSort = sortKey;\n\n        if (bsSort[sortKey] === 'desc') {\n            $this.find('span.sign').addClass('up');\n            $this.addClass('up').removeClass('down nosort');\n        } else {\n            $this.addClass('down').removeClass('up nosort');\n        }\n\n        // remove rows that should not be sorted\n        var rows = $table.children('tbody').children('tr');\n        var fixedRows = [];\n        $(rows.filter('[data-disablesort=\"true\"]').get().reverse()).each(function (index, fixedRow) {\n            var $fixedRow = $(fixedRow);\n            fixedRows.push({ index: rows.index($fixedRow), row: $fixedRow });\n            $fixedRow.remove();\n        });\n\n        // sort rows\n        var rowsToSort = rows.not('[data-disablesort=\"true\"]');\n        if (rowsToSort.length != 0) {\n            var emptySorting = bsSort[sortKey] === 'asc' ? emptyEnd : false;\n            sortEngine(rowsToSort, { emptyEnd: emptySorting, selector: 'td:nth-child(' + (sortColumn + 1) + ')', order: bsSort[sortKey], data: 'value' });\n        }\n\n        // add back the fixed rows\n        $(fixedRows.reverse()).each(function (index, row) {\n            if (row.index === 0) {\n                $table.children('tbody').prepend(row.row);\n            } else {\n                $table.children('tbody').children('tr').eq(row.index - 1).after(row.row);\n            }\n        });\n\n        // add class to sorted column cells\n        $table.find('> tbody > tr > td.sorted,> thead th.sorted').removeClass('sorted');\n        rowsToSort.find('td:eq(' + sortColumn + ')').addClass('sorted');\n        $this.addClass('sorted');\n\n        removeRowspanPlaceholders($table);\n        $table.trigger('sorted');\n    }\n\n    // jQuery 1.9 removed this object\n    if (!$.browser) {\n        $.browser = { chrome: false, mozilla: false, opera: false, msie: false, safari: false };\n        var ua = navigator.userAgent;\n        $.each($.browser, function (c) {\n            $.browser[c] = ((new RegExp(c, 'i').test(ua))) ? true : false;\n            if ($.browser.mozilla && c === 'mozilla') { $.browser.mozilla = ((new RegExp('firefox', 'i').test(ua))) ? true : false; }\n            if ($.browser.chrome && c === 'safari') { $.browser.safari = false; }\n        });\n    }\n\n    function guid() {\n        function s4() {\n            return Math.floor((1 + Math.random()) * 0x10000)\n              .toString(16)\n              .substring(1);\n        }\n        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +\n          s4() + '-' + s4() + s4() + s4();\n    }\n\n    // Initialise on DOM ready\n    $($.bootstrapSortable);\n\n});\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-sortable/Scripts/bootstrap-sortable.js?");

/***/ }),

/***/ "jquery":
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.jQuery;\n\n//# sourceURL=webpack:///external_%22window.jQuery%22?");

/***/ }),

/***/ "moment":
/*!********************************!*\
  !*** external "window.moment" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.moment;\n\n//# sourceURL=webpack:///external_%22window.moment%22?");

/***/ })

/******/ });
});;