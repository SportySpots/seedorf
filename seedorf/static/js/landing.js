
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/landing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/landing.js":
/*!***********************!*\
  !*** ./js/landing.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function() {\n\n  // Navbar\n  //\n\n  var navbarScrollThreshold = 20;\n  var navbarBreakpoint = 992;\n\n  // Custom classes that will be applied depending on page scrollTop value\n  var navbarCustomClasses = {\n    // when user is on the top of the page\n    default: {},\n\n    // when page scrollTop value > navbarScrollThreshold\n    alt: {}\n  };\n\n  // Set custom classes depending on landing variant\n  if ($('html').hasClass('landing-1') || $('html').hasClass('landing-3')) {\n\n    navbarCustomClasses = {\n      default: {\n        variant: 'navbar-light',\n        classes: 'pt-lg-4'\n      },\n      alt: {\n        variant: 'bg-white',\n        classes: 'py-1'\n      }\n    };\n\n  } else if ($('html').hasClass('landing-2') || $('html').hasClass('landing-4')) {\n\n    navbarCustomClasses = {\n      default: {\n        variant: 'navbar-dark',\n        classes: 'pt-lg-4'\n      },\n      alt: {\n        variant: 'bg-dark',\n        classes: 'py-1'\n      }\n    };\n\n  }\n\n  // Navbar scroll behaviour\n  //\n\n  var $navbar = $('.landing-navbar');\n  var $navbarCollapse = $('#landing-navbar-collapse');\n\n  $(document).on('scroll', function(e) {\n    var scrollTop = $(document).scrollTop();\n\n    if (scrollTop > navbarScrollThreshold && !$navbar.hasClass('landing-navbar-alt')) {\n      $navbar\n        .addClass('landing-navbar-alt')\n        .removeClass(navbarCustomClasses.default.variant + ' ' + navbarCustomClasses.default.classes)\n        .addClass(navbarCustomClasses.alt.variant + ' ' + navbarCustomClasses.alt.classes)\n        .find('> div')\n        .removeClass('container-fluid')\n        .addClass('container');\n    } else if (scrollTop <= navbarScrollThreshold && $navbar.hasClass('landing-navbar-alt')) {\n      $navbar.removeClass('landing-navbar-alt')\n        .addClass(navbarCustomClasses.default.classes)\n        .removeClass(navbarCustomClasses.alt.classes)\n        .find('> div')\n        .addClass('container-fluid')\n        .removeClass('container');\n\n        if ($(window).outerWidth() >= navbarBreakpoint || !$navbarCollapse.hasClass('show')) {\n          $navbar\n            .addClass(navbarCustomClasses.default.variant)\n            .removeClass(navbarCustomClasses.alt.variant);\n        }\n    }\n  });\n\n  $navbarCollapse.on('show.bs.collapse hidden.bs.collapse', function(e) {\n    if ($navbar.hasClass('landing-navbar-alt')) return;\n\n    $navbar[e.type === 'show' ? 'removeClass' : 'addClass'](\n      navbarCustomClasses.default.variant\n    );\n\n    $navbar[e.type === 'show' ? 'addClass' : 'removeClass'](\n      navbarCustomClasses.alt.variant\n    );\n  });\n\n  $(window).on('resize', function() {\n    if ($navbar.hasClass('landing-navbar-alt')) return;\n\n    var sm = $(this).outerWidth() < navbarBreakpoint;\n    var alt = $navbar.hasClass(navbarCustomClasses.alt.variant);\n\n    if (sm && !alt && $navbarCollapse.hasClass('show')) {\n      $navbar\n        .removeClass(navbarCustomClasses.default.variant)\n        .addClass(navbarCustomClasses.alt.variant);\n    } else if (!sm && alt) {\n      $navbar\n        .removeClass(navbarCustomClasses.alt.variant)\n        .addClass(navbarCustomClasses.default.variant);\n    }\n  });\n\n  // Anchor links\n  //\n\n  $('body').on('click', '.anchor-link', function(e) {\n    e.preventDefault();\n    $(\"html, body\").stop().animate({\n      scrollTop: Math.round($(this.getAttribute('href')).offset().top) + 'px'\n    }, 500);\n  });\n\n  // Main slider\n  //\n\n  $('#landing-slider').each(function() {\n    new Swiper(this, {\n      autoHeight: true,\n      speed: 1000,\n      followFinger: false,\n      threshold: 50,\n      preventClicks: true,\n      navigation: {\n        nextEl: '#landing-slider-next',\n        prevEl: '#landing-slider-prev'\n      }\n    });\n  });\n\n  $('#landing-slider-parallax').each(function() {\n    new Swiper(this, {\n      parallax: true,\n      autoHeight: true,\n      speed: 1000,\n      followFinger: false,\n      threshold: 50,\n      preventClicks: true,\n      navigation: {\n        nextEl: '#landing-slider-next',\n        prevEl: '#landing-slider-prev'\n      }\n    });\n  });\n\n  // Introducing video\n  //\n  plyr.default.setup(document.querySelectorAll(\".plyr-video\"));\n\n  $('#landing-video').each(function() {\n    plyr.setup(this, {\n      tooltips: {\n        controls: false,\n        seek: true\n      }\n    })[0];\n  });\n\n  // App preview\n  //\n\n  $('#landing-preview-slider').each(function() {\n    new Swiper(this, {\n      slidesPerView: 3,\n      spaceBetween: 0,\n      threshold: 50,\n      speed: 400,\n      centeredSlides: true,\n      slideToClickedSlide: true,\n      breakpoints: {\n        992: {\n          slidesPerView: 1,\n          spaceBetween: 20\n        }\n      },\n      pagination: {\n        el: '.swiper-pagination',\n        clickable: true\n      }\n    });\n  });\n\n  // Reviews\n  //\n\n  $('#landing-testimonials-slider').each(function() {\n    new Swiper(this, {\n      navigation: {\n        nextEl: '#landing-testimonials-slider-next',\n        prevEl: '#landing-testimonials-slider-prev'\n      }\n    });\n  });\n\n  // Logos\n  //\n\n  $('#landing-logos-slider').each(function() {\n    new Swiper(this, {\n      slidesPerView: 8,\n      spaceBetween: 30,\n      breakpoints: {\n        1200: {\n          slidesPerView: 7,\n        },\n        992: {\n          slidesPerView: 6,\n          spaceBetween: 20,\n        },\n        768: {\n          slidesPerView: 4,\n          spaceBetween: 10,\n        },\n        576: {\n          spaceBetween: 0,\n        },\n        480: {\n          slidesPerView: 3\n        },\n        380: {\n          slidesPerView: 2\n        }\n      },\n      navigation: {\n        nextEl: '#landing-logos-slider-next',\n        prevEl: '#landing-logos-slider-prev'\n      }\n    });\n  });\n\n});\n\n\n//# sourceURL=webpack:///./js/landing.js?");

/***/ })

/******/ });
});;