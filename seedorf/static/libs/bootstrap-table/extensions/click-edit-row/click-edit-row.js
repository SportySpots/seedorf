
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/bootstrap-table/extensions/click-edit-row/click-edit-row.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/bootstrap-table/extensions/click-edit-row/click-edit-row.js":
/*!**************************************************************************!*\
  !*** ./libs/bootstrap-table/extensions/click-edit-row/click-edit-row.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../../node_modules/bootstrap-table/src/extensions/click-edit-row/bootstrap-table-click-edit-row.js */ \"./node_modules/bootstrap-table/src/extensions/click-edit-row/bootstrap-table-click-edit-row.js\");\n\n\n//# sourceURL=webpack:///./libs/bootstrap-table/extensions/click-edit-row/click-edit-row.js?");

/***/ }),

/***/ "./node_modules/bootstrap-table/src/extensions/click-edit-row/bootstrap-table-click-edit-row.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bootstrap-table/src/extensions/click-edit-row/bootstrap-table-click-edit-row.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @author horken wong <horken.wong@gmail.com>\n * @version: v1.0.0\n * https://github.com/horkenw/bootstrap-table\n * Click to edit row for bootstrap-table\n */\n\n(function ($) {\n    'use strict';\n\n    $.extend($.fn.bootstrapTable.defaults, {\n        clickEdit: false\n    });\n\n    function setDivision(node, options){\n        var $option = $('<option />');\n        if(options){\n            $(options).each(function(i, v){\n                $option.clone().text(v.idxNum + ' ' +v.name).val(v.idxNum).appendTo(node);\n            })\n        }\n        else{\n            console.log('Please setup options first!!')\n        }\n    }\n\n    function clikcToEdit(evt, tarNode){\n        var txt = [], table = evt,\n            submit = '<button type=\"button\" class=\"btn btn-primary btn-sm editable-submit\"><i class=\"glyphicon glyphicon-ok\"></i></button>',\n            cancel = '<button type=\"button\" class=\"btn btn-default btn-sm editable-cancel\"><i class=\"glyphicon glyphicon-remove\"></i></button>';\n\n        var replaceData = function(){\n            txt = [];\n            tarNode.find('td').find('input[type=\"text\"]').each(function(i, td){\n                txt.push($(td).eq(0).val());\n            });\n            tarNode.find('select').each(function(i, td){\n                txt.push($('#'+td.id+' option:selected').val());\n            });\n            $('#table').bootstrapTable('updateRow', {\n                index: table.$data.thId,\n                row: {\n                    noOld: txt[0],\n                    area: tarNode.find('select').eq(0).children(':selected').text(),\n                    town: tarNode.find('select').eq(1).children(':selected').text(),\n                    address: txt[1]\n                }\n            });\n            $('#tooling').remove();\n            table.editing = true;\n            // updateToServerSide(table.$data.itemid, txt);\n            return false;\n        };\n\n        var recoveryData = function(){\n          $('#table').bootstrapTable('updateRow', {\n                index: table.$data.thId,\n                row: {},\n            });\n          $('#tooling').remove();\n          table.editing = true;\n          return false;\n        };\n\n        if(table.editing){\n            var  rootid = 0;\n            table.editing = false;\n            table.columns.forEach(function(column, i){\n                if (!column.editable) return;\n\n                switch(column.editable){\n                    case 'input':\n                        var div=$('<div class=\"editable-input col-md-12 col-sm-12 col-xs-12\" style=\"position: relative;\"/>');\n                        txt.push(tarNode.find('td').eq(column.fieldIndex).text());\n                        div.append($('<input type=\"text\" class=\"form-control input-sm\"/>'));\n                        div.append($('<span class=\"clear\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></span>'));\n                        tarNode.find('td').eq(column.fieldIndex).text('').append(div);\n                        break;\n                    case 'select':\n                        var select=$('<select id=\"'+column.field+'\">'), options = $.selectArray[column.field];\n                        tarNode.find('td').eq(column.fieldIndex).text('').append(select);\n                        setDivision($('#'+column.field), options);\n                        break;\n                    case 'textarea':\n                        break;\n                    default:\n                        console.log(column.fieldIndex+' '+column.editable);\n                }\n\n            }, evt);\n            for(var i=0, l=txt.length; i<l; i++){\n                tarNode.find('input[type=\"text\"]').eq(i).val(txt[i]);\n            }\n            tarNode.find('td').last().append('<div id=\"tooling\" class=\"editable-buttons\"/>');\n            $('.clear').on('click', function(){ $(this).parent().find('input').val('');});\n            $(submit).on('click', replaceData).appendTo('#tooling');\n            $(cancel).on('click', recoveryData).appendTo('#tooling');\n        }\n    }\n\n    function updateToServerSide(item, data){\n        var itemid = $(item).find('a').attr('href').match(/\\d+/g)[0];\n        var datas = {'treeId': itemid, 'oldTreeSerialNo': data[0], 'adminDivision': data[2], 'adminUnit': data[3], 'treeAddr': data[1]}; //傳送至伺服器端的Data產生處，需手動修改對應表格\n        store( 'data/update', datas)\n    }\n\n    var BootstrapTable = $.fn.bootstrapTable.Constructor,\n        _initTable = BootstrapTable.prototype.initTable,\n        _initBody = BootstrapTable.prototype.initBody;\n\n    BootstrapTable.prototype.initTable = function(){\n        var that = this;\n        this.$data = {};\n        _initTable.apply(this, Array.prototype.slice.apply(arguments));\n\n        if (!this.options.clickEdit) {\n            return;\n        }\n\n    };\n\n    BootstrapTable.prototype.initBody = function () {\n        var that = this;\n        _initBody.apply(this, Array.prototype.slice.apply(arguments));\n\n        if (!this.options.clickEdit) {\n            return;\n        }\n\n        var table = this.$tableBody.find('table');\n        that.editing=true;\n\n        table.on('click-row.bs.table', function (e, row, $element, field) {\n            if(field ==='no') return; //|| field ==='noOld'\n            this.$data.thId = $element.data().index;\n            this.$data.itemid = $element.data().uniqueid;\n            this.$data.divi = parseInt(row.area);\n            this.$data.town=parseInt(row.town);\n            clikcToEdit(this, $element);\n        }.bind(this));\n    };\n})(jQuery);\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-table/src/extensions/click-edit-row/bootstrap-table-click-edit-row.js?");

/***/ })

/******/ });
});;