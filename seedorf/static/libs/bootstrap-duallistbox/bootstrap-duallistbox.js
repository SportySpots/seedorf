
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/bootstrap-duallistbox/bootstrap-duallistbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/bootstrap-duallistbox/bootstrap-duallistbox.js":
/*!*************************************************************!*\
  !*** ./libs/bootstrap-duallistbox/bootstrap-duallistbox.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/bootstrap-duallistbox/src/jquery.bootstrap-duallistbox.js */ \"./node_modules/bootstrap-duallistbox/src/jquery.bootstrap-duallistbox.js\");\n\n\n//# sourceURL=webpack:///./libs/bootstrap-duallistbox/bootstrap-duallistbox.js?");

/***/ }),

/***/ "./node_modules/bootstrap-duallistbox/src/jquery.bootstrap-duallistbox.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-duallistbox/src/jquery.bootstrap-duallistbox.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";(function ($, window, document, undefined) {\n  // Create the defaults once\n  var pluginName = 'bootstrapDualListbox',\n    defaults = {\n      bootstrap2Compatible: false,\n      filterTextClear: 'show all',\n      filterPlaceHolder: 'Filter',\n      moveSelectedLabel: 'Move selected',\n      moveAllLabel: 'Move all',\n      removeSelectedLabel: 'Remove selected',\n      removeAllLabel: 'Remove all',\n      moveOnSelect: true,                                                                 // true/false (forced true on androids, see the comment later)\n      preserveSelectionOnMove: false,                                                     // 'all' / 'moved' / false\n      selectedListLabel: false,                                                           // 'string', false\n      nonSelectedListLabel: false,                                                        // 'string', false\n      helperSelectNamePostfix: '_helper',                                                 // 'string_of_postfix' / false\n      selectorMinimalHeight: 100,\n      showFilterInputs: true,                                                             // whether to show filter inputs\n      nonSelectedFilter: '',                                                              // string, filter the non selected options\n      selectedFilter: '',                                                                 // string, filter the selected options\n      infoText: 'Showing all {0}',                                                        // text when all options are visible / false for no info text\n      infoTextFiltered: '<span class=\"label label-warning\">Filtered</span> {0} from {1}', // when not all of the options are visible due to the filter\n      infoTextEmpty: 'Empty list',                                                        // when there are no options present in the list\n      filterOnValues: false,                                                              // filter by selector's values, boolean\n      sortByInputOrder: false,\n      eventMoveOverride: false,                                                           // boolean, allows user to unbind default event behaviour and run their own instead\n      eventMoveAllOverride: false,                                                        // boolean, allows user to unbind default event behaviour and run their own instead\n      eventRemoveOverride: false,                                                         // boolean, allows user to unbind default event behaviour and run their own instead\n      eventRemoveAllOverride: false                                                       // boolean, allows user to unbind default event behaviour and run their own instead\n    },\n    // Selections are invisible on android if the containing select is styled with CSS\n    // http://code.google.com/p/android/issues/detail?id=16922\n    isBuggyAndroid = /android/i.test(navigator.userAgent.toLowerCase());\n\n  // The actual plugin constructor\n  function BootstrapDualListbox(element, options) {\n    this.element = $(element);\n    // jQuery has an extend method which merges the contents of two or\n    // more objects, storing the result in the first object. The first object\n    // is generally empty as we don't want to alter the default options for\n    // future instances of the plugin\n    this.settings = $.extend({}, defaults, options);\n    this._defaults = defaults;\n    this._name = pluginName;\n    this.init();\n  }\n\n  function triggerChangeEvent(dualListbox) {\n    dualListbox.element.trigger('change');\n  }\n\n  function updateSelectionStates(dualListbox) {\n    dualListbox.element.find('option').each(function(index, item) {\n      var $item = $(item);\n      if (typeof($item.data('original-index')) === 'undefined') {\n        $item.data('original-index', dualListbox.elementCount++);\n      }\n      if (typeof($item.data('_selected')) === 'undefined') {\n        $item.data('_selected', false);\n      }\n    });\n  }\n\n  function changeSelectionState(dualListbox, original_index, selected) {\n    dualListbox.element.find('option').each(function(index, item) {\n      var $item = $(item);\n      if ($item.data('original-index') === original_index) {\n        $item.prop('selected', selected);\n        if(selected){\n          $item.attr('data-sortindex', dualListbox.sortIndex);\n          dualListbox.sortIndex++;\n        } else {\n          $item.removeAttr('data-sortindex');\n        }\n      }\n    });\n  }\n\n  function formatString(s, args) {\n    return s.replace(/\\{(\\d+)\\}/g, function(match, number) {\n      return typeof args[number] !== 'undefined' ? args[number] : match;\n    });\n  }\n\n  function refreshInfo(dualListbox) {\n    if (!dualListbox.settings.infoText) {\n      return;\n    }\n\n    var visible1 = dualListbox.elements.select1.find('option').length,\n      visible2 = dualListbox.elements.select2.find('option').length,\n      all1 = dualListbox.element.find('option').length - dualListbox.selectedElements,\n      all2 = dualListbox.selectedElements,\n      content = '';\n\n    if (all1 === 0) {\n      content = dualListbox.settings.infoTextEmpty;\n    } else if (visible1 === all1) {\n      content = formatString(dualListbox.settings.infoText, [visible1, all1]);\n    } else {\n      content = formatString(dualListbox.settings.infoTextFiltered, [visible1, all1]);\n    }\n\n    dualListbox.elements.info1.html(content);\n    dualListbox.elements.box1.toggleClass('filtered', !(visible1 === all1 || all1 === 0));\n\n    if (all2 === 0) {\n      content = dualListbox.settings.infoTextEmpty;\n    } else if (visible2 === all2) {\n      content = formatString(dualListbox.settings.infoText, [visible2, all2]);\n    } else {\n      content = formatString(dualListbox.settings.infoTextFiltered, [visible2, all2]);\n    }\n\n    dualListbox.elements.info2.html(content);\n    dualListbox.elements.box2.toggleClass('filtered', !(visible2 === all2 || all2 === 0));\n  }\n\n  function refreshSelects(dualListbox) {\n    dualListbox.selectedElements = 0;\n\n    dualListbox.elements.select1.empty();\n    dualListbox.elements.select2.empty();\n\n    dualListbox.element.find('option').each(function(index, item) {\n      var $item = $(item);\n      if ($item.prop('selected')) {\n        dualListbox.selectedElements++;\n        dualListbox.elements.select2.append($item.clone(true).prop('selected', $item.data('_selected')));\n      } else {\n        dualListbox.elements.select1.append($item.clone(true).prop('selected', $item.data('_selected')));\n      }\n    });\n\n    if (dualListbox.settings.showFilterInputs) {\n      filter(dualListbox, 1);\n      filter(dualListbox, 2);\n    }\n    refreshInfo(dualListbox);\n  }\n\n  function filter(dualListbox, selectIndex) {\n    if (!dualListbox.settings.showFilterInputs) {\n      return;\n    }\n\n    saveSelections(dualListbox, selectIndex);\n\n    dualListbox.elements['select'+selectIndex].empty().scrollTop(0);\n    var regex = new RegExp($.trim(dualListbox.elements['filterInput'+selectIndex].val()), 'gi'),\n      allOptions = dualListbox.element.find('option'),\n      options = dualListbox.element;\n\n    if (selectIndex === 1) {\n      options = allOptions.not(':selected');\n    } else  {\n      options = options.find('option:selected');\n    }\n\n    options.each(function(index, item) {\n      var $item = $(item),\n        isFiltered = true;\n      if (item.text.match(regex) || (dualListbox.settings.filterOnValues && $item.attr('value').match(regex) ) ) {\n        isFiltered = false;\n        dualListbox.elements['select'+selectIndex].append($item.clone(true).prop('selected', $item.data('_selected')));\n      }\n      allOptions.eq($item.data('original-index')).data('filtered'+selectIndex, isFiltered);\n    });\n\n    refreshInfo(dualListbox);\n  }\n\n  function saveSelections(dualListbox, selectIndex) {\n    var options = dualListbox.element.find('option');\n    dualListbox.elements['select'+selectIndex].find('option').each(function(index, item) {\n      var $item = $(item);\n      options.eq($item.data('original-index')).data('_selected', $item.prop('selected'));\n    });\n  }\n\n  function sortOptionsByInputOrder(select){\n    var selectopt = select.children('option');\n\n    selectopt.sort(function(a,b){\n      var an = parseInt(a.getAttribute('data-sortindex')),\n          bn = parseInt(b.getAttribute('data-sortindex'));\n\n          if(an > bn) {\n             return 1;\n          }\n          if(an < bn) {\n            return -1;\n          }\n          return 0;\n    });\n\n    selectopt.detach().appendTo(select);\n  }\n\n  function sortOptions(select) {\n    select.find('option').sort(function(a, b) {\n      return ($(a).data('original-index') > $(b).data('original-index')) ? 1 : -1;\n    }).appendTo(select);\n  }\n\n  function clearSelections(dualListbox) {\n    dualListbox.elements.select1.find('option').each(function() {\n      dualListbox.element.find('option').data('_selected', false);\n    });\n  }\n\n  function move(dualListbox) {\n    if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {\n      saveSelections(dualListbox, 1);\n      saveSelections(dualListbox, 2);\n    } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) {\n      saveSelections(dualListbox, 1);\n    }\n\n    dualListbox.elements.select1.find('option:selected').each(function(index, item) {\n      var $item = $(item);\n      if (!$item.data('filtered1')) {\n        changeSelectionState(dualListbox, $item.data('original-index'), true);\n      }\n    });\n\n    refreshSelects(dualListbox);\n    triggerChangeEvent(dualListbox);\n    if(dualListbox.settings.sortByInputOrder){\n        sortOptionsByInputOrder(dualListbox.elements.select2);\n    } else {\n        sortOptions(dualListbox.elements.select2);\n    }\n  }\n\n  function remove(dualListbox) {\n    if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {\n      saveSelections(dualListbox, 1);\n      saveSelections(dualListbox, 2);\n    } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) {\n      saveSelections(dualListbox, 2);\n    }\n\n    dualListbox.elements.select2.find('option:selected').each(function(index, item) {\n      var $item = $(item);\n      if (!$item.data('filtered2')) {\n        changeSelectionState(dualListbox, $item.data('original-index'), false);\n      }\n    });\n\n    refreshSelects(dualListbox);\n    triggerChangeEvent(dualListbox);\n    sortOptions(dualListbox.elements.select1);\n    if(dualListbox.settings.sortByInputOrder){\n        sortOptionsByInputOrder(dualListbox.elements.select2);\n    }\n  }\n\n  function moveAll(dualListbox) {\n    if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {\n      saveSelections(dualListbox, 1);\n      saveSelections(dualListbox, 2);\n    } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) {\n      saveSelections(dualListbox, 1);\n    }\n\n    dualListbox.element.find('option').each(function(index, item) {\n      var $item = $(item);\n      if (!$item.data('filtered1')) {\n        $item.prop('selected', true);\n        $item.attr('data-sortindex', dualListbox.sortIndex);\n        dualListbox.sortIndex++;\n      }\n    });\n\n    refreshSelects(dualListbox);\n    triggerChangeEvent(dualListbox);\n  }\n\n  function removeAll(dualListbox) {\n    if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {\n      saveSelections(dualListbox, 1);\n      saveSelections(dualListbox, 2);\n    } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) {\n      saveSelections(dualListbox, 2);\n    }\n\n    dualListbox.element.find('option').each(function(index, item) {\n      var $item = $(item);\n      if (!$item.data('filtered2')) {\n        $item.prop('selected', false);\n        $item.removeAttr('data-sortindex');\n      }\n    });\n\n    refreshSelects(dualListbox);\n    triggerChangeEvent(dualListbox);\n  }\n\n  function bindEvents(dualListbox) {\n    dualListbox.elements.form.submit(function(e) {\n      if (dualListbox.elements.filterInput1.is(':focus')) {\n        e.preventDefault();\n        dualListbox.elements.filterInput1.focusout();\n      } else if (dualListbox.elements.filterInput2.is(':focus')) {\n        e.preventDefault();\n        dualListbox.elements.filterInput2.focusout();\n      }\n    });\n\n    dualListbox.element.on('bootstrapDualListbox.refresh', function(e, mustClearSelections){\n      dualListbox.refresh(mustClearSelections);\n    });\n\n    dualListbox.elements.filterClear1.on('click', function() {\n      dualListbox.setNonSelectedFilter('', true);\n    });\n\n    dualListbox.elements.filterClear2.on('click', function() {\n      dualListbox.setSelectedFilter('', true);\n    });\n\n    if (dualListbox.settings.eventMoveOverride === false) {\n      dualListbox.elements.moveButton.on('click', function() {\n        move(dualListbox);\n      });\n    }\n\n    if (dualListbox.settings.eventMoveAllOverride === false) {\n      dualListbox.elements.moveAllButton.on('click', function() {\n        moveAll(dualListbox);\n      });\n    }\n\n    if (dualListbox.settings.eventRemoveOverride === false) {\n      dualListbox.elements.removeButton.on('click', function() {\n        remove(dualListbox);\n      });\n    }\n\n    if (dualListbox.settings.eventRemoveAllOverride === false) {\n      dualListbox.elements.removeAllButton.on('click', function() {\n        removeAll(dualListbox);\n      });\n    }\n\n    dualListbox.elements.filterInput1.on('change keyup', function() {\n      filter(dualListbox, 1);\n    });\n\n    dualListbox.elements.filterInput2.on('change keyup', function() {\n      filter(dualListbox, 2);\n    });\n  }\n\n  BootstrapDualListbox.prototype = {\n    init: function () {\n      // Add the custom HTML template\n      this.container = $('' +\n        '<div class=\"bootstrap-duallistbox-container\">' +\n        ' <div class=\"box1\">' +\n        '   <label></label>' +\n        '   <span class=\"info-container\">' +\n        '     <span class=\"info\"></span>' +\n        '     <button type=\"button\" class=\"btn clear1 pull-right\"></button>' +\n        '   </span>' +\n        '   <input class=\"filter\" type=\"text\">' +\n        '   <div class=\"btn-group buttons\">' +\n        '     <button type=\"button\" class=\"btn moveall\">' +\n        '       <i></i>' +\n        '       <i></i>' +\n        '     </button>' +\n        '     <button type=\"button\" class=\"btn move\">' +\n        '       <i></i>' +\n        '     </button>' +\n        '   </div>' +\n        '   <select multiple=\"multiple\"></select>' +\n        ' </div>' +\n        ' <div class=\"box2\">' +\n        '   <label></label>' +\n        '   <span class=\"info-container\">' +\n        '     <span class=\"info\"></span>' +\n        '     <button type=\"button\" class=\"btn clear2 pull-right\"></button>' +\n        '   </span>' +\n        '   <input class=\"filter\" type=\"text\">' +\n        '   <div class=\"btn-group buttons\">' +\n        '     <button type=\"button\" class=\"btn remove\">' +\n        '       <i></i>' +\n        '     </button>' +\n        '     <button type=\"button\" class=\"btn removeall\">' +\n        '       <i></i>' +\n        '       <i></i>' +\n        '     </button>' +\n        '   </div>' +\n        '   <select multiple=\"multiple\"></select>' +\n        ' </div>' +\n        '</div>')\n        .insertBefore(this.element);\n\n      // Cache the inner elements\n      this.elements = {\n        originalSelect: this.element,\n        box1: $('.box1', this.container),\n        box2: $('.box2', this.container),\n        filterInput1: $('.box1 .filter', this.container),\n        filterInput2: $('.box2 .filter', this.container),\n        filterClear1: $('.box1 .clear1', this.container),\n        filterClear2: $('.box2 .clear2', this.container),\n        label1: $('.box1 > label', this.container),\n        label2: $('.box2 > label', this.container),\n        info1: $('.box1 .info', this.container),\n        info2: $('.box2 .info', this.container),\n        select1: $('.box1 select', this.container),\n        select2: $('.box2 select', this.container),\n        moveButton: $('.box1 .move', this.container),\n        removeButton: $('.box2 .remove', this.container),\n        moveAllButton: $('.box1 .moveall', this.container),\n        removeAllButton: $('.box2 .removeall', this.container),\n        form: $($('.box1 .filter', this.container)[0].form)\n      };\n\n      // Set select IDs\n      this.originalSelectName = this.element.attr('name') || '';\n      var select1Id = 'bootstrap-duallistbox-nonselected-list_' + this.originalSelectName,\n        select2Id = 'bootstrap-duallistbox-selected-list_' + this.originalSelectName;\n      this.elements.select1.attr('id', select1Id);\n      this.elements.select2.attr('id', select2Id);\n      this.elements.label1.attr('for', select1Id);\n      this.elements.label2.attr('for', select2Id);\n\n      // Apply all settings\n      this.selectedElements = 0;\n      this.sortIndex = 0;\n      this.elementCount = 0;\n      this.setBootstrap2Compatible(this.settings.bootstrap2Compatible);\n      this.setFilterTextClear(this.settings.filterTextClear);\n      this.setFilterPlaceHolder(this.settings.filterPlaceHolder);\n      this.setMoveSelectedLabel(this.settings.moveSelectedLabel);\n      this.setMoveAllLabel(this.settings.moveAllLabel);\n      this.setRemoveSelectedLabel(this.settings.removeSelectedLabel);\n      this.setRemoveAllLabel(this.settings.removeAllLabel);\n      this.setMoveOnSelect(this.settings.moveOnSelect);\n      this.setPreserveSelectionOnMove(this.settings.preserveSelectionOnMove);\n      this.setSelectedListLabel(this.settings.selectedListLabel);\n      this.setNonSelectedListLabel(this.settings.nonSelectedListLabel);\n      this.setHelperSelectNamePostfix(this.settings.helperSelectNamePostfix);\n      this.setSelectOrMinimalHeight(this.settings.selectorMinimalHeight);\n\n      updateSelectionStates(this);\n\n      this.setShowFilterInputs(this.settings.showFilterInputs);\n      this.setNonSelectedFilter(this.settings.nonSelectedFilter);\n      this.setSelectedFilter(this.settings.selectedFilter);\n      this.setInfoText(this.settings.infoText);\n      this.setInfoTextFiltered(this.settings.infoTextFiltered);\n      this.setInfoTextEmpty(this.settings.infoTextEmpty);\n      this.setFilterOnValues(this.settings.filterOnValues);\n      this.setSortByInputOrder(this.settings.sortByInputOrder);\n      this.setEventMoveOverride(this.settings.eventMoveOverride);\n      this.setEventMoveAllOverride(this.settings.eventMoveAllOverride);\n      this.setEventRemoveOverride(this.settings.eventRemoveOverride);\n      this.setEventRemoveAllOverride(this.settings.eventRemoveAllOverride);\n\n      // Hide the original select\n      this.element.hide();\n\n      bindEvents(this);\n      refreshSelects(this);\n\n      return this.element;\n    },\n    setBootstrap2Compatible: function(value, refresh) {\n      this.settings.bootstrap2Compatible = value;\n      if (value) {\n        this.container.removeClass('row').addClass('row-fluid bs2compatible');\n        this.container.find('.box1, .box2').removeClass('col-md-6').addClass('span6');\n        this.container.find('.clear1, .clear2').removeClass('btn-default btn-xs').addClass('btn-mini');\n        this.container.find('input, select').removeClass('form-control');\n        this.container.find('.btn').removeClass('btn-default');\n        this.container.find('.moveall > i, .move > i').removeClass('glyphicon glyphicon-arrow-right').addClass('icon-arrow-right');\n        this.container.find('.removeall > i, .remove > i').removeClass('glyphicon glyphicon-arrow-left').addClass('icon-arrow-left');\n      } else {\n        this.container.removeClass('row-fluid bs2compatible').addClass('row');\n        this.container.find('.box1, .box2').removeClass('span6').addClass('col-md-6');\n        this.container.find('.clear1, .clear2').removeClass('btn-mini').addClass('btn-default btn-xs');\n        this.container.find('input, select').addClass('form-control');\n        this.container.find('.btn').addClass('btn-default');\n        this.container.find('.moveall > i, .move > i').removeClass('icon-arrow-right').addClass('glyphicon glyphicon-arrow-right');\n        this.container.find('.removeall > i, .remove > i').removeClass('icon-arrow-left').addClass('glyphicon glyphicon-arrow-left');\n      }\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setFilterTextClear: function(value, refresh) {\n      this.settings.filterTextClear = value;\n      this.elements.filterClear1.html(value);\n      this.elements.filterClear2.html(value);\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setFilterPlaceHolder: function(value, refresh) {\n      this.settings.filterPlaceHolder = value;\n      this.elements.filterInput1.attr('placeholder', value);\n      this.elements.filterInput2.attr('placeholder', value);\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setMoveSelectedLabel: function(value, refresh) {\n      this.settings.moveSelectedLabel = value;\n      this.elements.moveButton.attr('title', value);\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setMoveAllLabel: function(value, refresh) {\n      this.settings.moveAllLabel = value;\n      this.elements.moveAllButton.attr('title', value);\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setRemoveSelectedLabel: function(value, refresh) {\n      this.settings.removeSelectedLabel = value;\n      this.elements.removeButton.attr('title', value);\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setRemoveAllLabel: function(value, refresh) {\n      this.settings.removeAllLabel = value;\n      this.elements.removeAllButton.attr('title', value);\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setMoveOnSelect: function(value, refresh) {\n      if (isBuggyAndroid) {\n        value = true;\n      }\n      this.settings.moveOnSelect = value;\n      if (this.settings.moveOnSelect) {\n        this.container.addClass('moveonselect');\n        var self = this;\n        this.elements.select1.on('change', function() {\n          move(self);\n        });\n        this.elements.select2.on('change', function() {\n          remove(self);\n        });\n      } else {\n        this.container.removeClass('moveonselect');\n        this.elements.select1.off('change');\n        this.elements.select2.off('change');\n      }\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setPreserveSelectionOnMove: function(value, refresh) {\n      // We are forcing to move on select and disabling preserveSelectionOnMove on Android\n      if (isBuggyAndroid) {\n        value = false;\n      }\n      this.settings.preserveSelectionOnMove = value;\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setSelectedListLabel: function(value, refresh) {\n      this.settings.selectedListLabel = value;\n      if (value) {\n        this.elements.label2.show().html(value);\n      } else {\n        this.elements.label2.hide().html(value);\n      }\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setNonSelectedListLabel: function(value, refresh) {\n      this.settings.nonSelectedListLabel = value;\n      if (value) {\n        this.elements.label1.show().html(value);\n      } else {\n        this.elements.label1.hide().html(value);\n      }\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setHelperSelectNamePostfix: function(value, refresh) {\n      this.settings.helperSelectNamePostfix = value;\n      if (value) {\n        this.elements.select1.attr('name', this.originalSelectName + value + '1');\n        this.elements.select2.attr('name', this.originalSelectName + value + '2');\n      } else {\n        this.elements.select1.removeAttr('name');\n        this.elements.select2.removeAttr('name');\n      }\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setSelectOrMinimalHeight: function(value, refresh) {\n      this.settings.selectorMinimalHeight = value;\n      var height = this.element.height();\n      if (this.element.height() < value) {\n        height = value;\n      }\n      this.elements.select1.height(height);\n      this.elements.select2.height(height);\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setShowFilterInputs: function(value, refresh) {\n      if (!value) {\n        this.setNonSelectedFilter('');\n        this.setSelectedFilter('');\n        refreshSelects(this);\n        this.elements.filterInput1.hide();\n        this.elements.filterInput2.hide();\n      } else {\n        this.elements.filterInput1.show();\n        this.elements.filterInput2.show();\n      }\n      this.settings.showFilterInputs = value;\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setNonSelectedFilter: function(value, refresh) {\n      if (this.settings.showFilterInputs) {\n        this.settings.nonSelectedFilter = value;\n        this.elements.filterInput1.val(value);\n        if (refresh) {\n          refreshSelects(this);\n        }\n        return this.element;\n      }\n    },\n    setSelectedFilter: function(value, refresh) {\n      if (this.settings.showFilterInputs) {\n        this.settings.selectedFilter = value;\n        this.elements.filterInput2.val(value);\n        if (refresh) {\n          refreshSelects(this);\n        }\n        return this.element;\n      }\n    },\n    setInfoText: function(value, refresh) {\n      this.settings.infoText = value;\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setInfoTextFiltered: function(value, refresh) {\n      this.settings.infoTextFiltered = value;\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setInfoTextEmpty: function(value, refresh) {\n      this.settings.infoTextEmpty = value;\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setFilterOnValues: function(value, refresh) {\n      this.settings.filterOnValues = value;\n      if (refresh) {\n        refreshSelects(this);\n      }\n      return this.element;\n    },\n    setSortByInputOrder: function(value, refresh){\n        this.settings.sortByInputOrder = value;\n        if (refresh) {\n          refreshSelects(this);\n        }\n        return this.element;\n    },\n    setEventMoveOverride: function(value, refresh) {\n        this.settings.eventMoveOverride = value;\n        if (refresh) {\n          refreshSelects(this);\n        }\n        return this.element;\n    },\n    setEventMoveAllOverride: function(value, refresh) {\n        this.settings.eventMoveAllOverride = value;\n        if (refresh) {\n          refreshSelects(this);\n        }\n        return this.element;\n    },\n    setEventRemoveOverride: function(value, refresh) {\n        this.settings.eventRemoveOverride = value;\n        if (refresh) {\n          refreshSelects(this);\n        }\n        return this.element;\n    },\n    setEventRemoveAllOverride: function(value, refresh) {\n        this.settings.eventRemoveAllOverride = value;\n        if (refresh) {\n          refreshSelects(this);\n        }\n        return this.element;\n    },\n    getContainer: function() {\n      return this.container;\n    },\n    refresh: function(mustClearSelections) {\n      updateSelectionStates(this);\n\n      if (!mustClearSelections) {\n        saveSelections(this, 1);\n        saveSelections(this, 2);\n      } else {\n        clearSelections(this);\n      }\n\n      refreshSelects(this);\n    },\n    destroy: function() {\n      this.container.remove();\n      this.element.show();\n      $.data(this, 'plugin_' + pluginName, null);\n      return this.element;\n    }\n  };\n\n  // A really lightweight plugin wrapper around the constructor,\n  // preventing against multiple instantiations\n  $.fn[ pluginName ] = function (options) {\n    var args = arguments;\n\n    // Is the first parameter an object (options), or was omitted, instantiate a new instance of the plugin.\n    if (options === undefined || typeof options === 'object') {\n      return this.each(function () {\n        // If this is not a select\n        if (!$(this).is('select')) {\n          $(this).find('select').each(function(index, item) {\n            // For each nested select, instantiate the Dual List Box\n            $(item).bootstrapDualListbox(options);\n          });\n        } else if (!$.data(this, 'plugin_' + pluginName)) {\n          // Only allow the plugin to be instantiated once so we check that the element has no plugin instantiation yet\n\n          // if it has no instance, create a new one, pass options to our plugin constructor,\n          // and store the plugin instance in the elements jQuery data object.\n          $.data(this, 'plugin_' + pluginName, new BootstrapDualListbox(this, options));\n        }\n      });\n      // If the first parameter is a string and it doesn't start with an underscore or \"contains\" the `init`-function,\n      // treat this as a call to a public method.\n    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {\n\n      // Cache the method call to make it possible to return a value\n      var returns;\n\n      this.each(function () {\n        var instance = $.data(this, 'plugin_' + pluginName);\n        // Tests that there's already a plugin-instance and checks that the requested public method exists\n        if (instance instanceof BootstrapDualListbox && typeof instance[options] === 'function') {\n          // Call the method of our plugin instance, and pass it the supplied arguments.\n          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));\n        }\n      });\n\n      // If the earlier cached method gives a value back return the value,\n      // otherwise return this to preserve chainability.\n      return returns !== undefined ? returns : this;\n    }\n\n  };\n\n})(jQuery, window, document);\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-duallistbox/src/jquery.bootstrap-duallistbox.js?");

/***/ })

/******/ });
});;