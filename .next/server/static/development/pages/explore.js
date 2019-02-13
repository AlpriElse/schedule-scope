module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: updateFilter, fetchCourseBatch, addCourse, addCourseBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilter", function() { return updateFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCourseBatch", function() { return fetchCourseBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCourse", function() { return addCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCourseBatch", function() { return addCourseBatch; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var updateFilter = function updateFilter(filter, value) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER"],
    filter: filter,
    value: value
  };
};

var fetchCourseBatchRequest = function fetchCourseBatchRequest() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_COURSE_BATCH"].REQUEST
  };
};

var fetchCourseBatchSuccess = function fetchCourseBatchSuccess() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_COURSE_BATCH"].SUCCESS
  };
};

var fetchCourseBatchFailure = function fetchCourseBatchFailure(err) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_COURSE_BATCH"].FAILURE,
    err: err
  };
};

var fetchCourseBatch = function fetchCourseBatch(batch) {
  return function (dispatch) {
    dispatch(fetchCourseBatchRequest());
    return fetch('http://localhost:5000/api/courses/batch/' + batch).then(function (res) {
      dispatch(fetchCourseBatchSuccess);
      res.text().then(function (text) {
        dispatch(fetchCourseBatchSuccess());
        dispatch(addCourseBatch(JSON.parse(text)));
      });
    }, function (err) {
      dispatch(fetchCourseBatchFailure(err.data));
    });
  };
};
var addCourse = function addCourse(course) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_COURSE"],
    course: course
  };
};
var addCourseBatch = function addCourseBatch(batch) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_COURSE_BATCH"],
    batch: batch
  };
};

/***/ }),

/***/ "./components/CourseCard.js":
/*!**********************************!*\
  !*** ./components/CourseCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_hash_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-hash-code */ "js-hash-code");
/* harmony import */ var js_hash_code__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_hash_code__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}



var cardStyles = {
  marginBottom: "20px",
  borderRadius: "0",
  border: "none",
  backgroundColor: "rgb(255, 255, 255)"
};
var colors = ["#52A6FF", "#E87F3B", "#8FDE82", "#E5615B", "#E597D6", "#E5DB9F", "#9194E5", "#735A54"];

var assignColor = function assignColor(course) {
  var code = js_hash_code__WEBPACK_IMPORTED_MODULE_1___default()(course.department_code + course.course_number);
  var color = colors[Math.abs(parseInt(code)) % colors.length];
  return color;
};

var courseLabelStyle = function courseLabelStyle(color) {
  return {
    backgroundColor: color,
    display: "inline-block",
    padding: "5px",
    fontWeight: "200"
  };
};

var courseNameStyle = {
  fontWeight: "600"
};
var courseDescriptionStyle = {
  fontWeight: "300"
};

var overlay = function overlay(isVisible, color) {
  if (isVisible) {
    return {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      opacity: 1,
      transition: ".5s ease",
      backgroundColor: color,
      padding: -10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
  } else {
    return {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      opacity: 0,
      transition: ".5s ease",
      backgroundColor: color,
      padding: -10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
  }
};

var overlaycontainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var overlayText = {
  fontWeight: "200",
  fontSize: "1.75em"
};

var CourseCard = function (_React$Component) {
  _inherits(CourseCard, _React$Component);

  function CourseCard(props) {
    _classCallCheck(this, CourseCard);

    var _this = _possibleConstructorReturn(this, (CourseCard.__proto__ || Object.getPrototypeOf(CourseCard)).call(this, props));

    _this.state = {
      isHover: false
    };
    _this.mouseEnter = _this.mouseEnter.bind(_this);
    _this.mouseLeave = _this.mouseLeave.bind(_this);
    return _this;
  }

  _createClass(CourseCard, [{
    key: 'mouseEnter',
    value: function mouseEnter() {
      this.setState({
        isHover: true
      });
    }
  }, {
    key: 'mouseLeave',
    value: function mouseLeave() {
      this.setState({
        isHover: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var course = this.props;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
        className: 'col-md-4'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
        className: 'card',
        'data-aos': 'fade-up',
        style: cardStyles,
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
        className: 'card-body'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('h5', {
        className: 'card-title text-center mx-auto text-white',
        style: courseLabelStyle(assignColor(course))
      }, course.department_code, ' ', course.course_number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', {
        className: 'card-text',
        style: courseNameStyle
      }, course.course_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', {
        className: 'card-text',
        style: courseDescriptionStyle
      }, course.course_description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
        style: overlay(this.state.isHover, assignColor(course))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
        className: 'text-center text-white',
        style: overlayText
      }, course.department_code, ' ', course.course_number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
        style: overlaycontainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
        className: 'btn btn-outline-special'
      }, 'Go to Course'))))));
    }
  }]);

  return CourseCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CourseCard);

/***/ }),

/***/ "./constants/ActionTypes.js":
/*!**********************************!*\
  !*** ./constants/ActionTypes.js ***!
  \**********************************/
/*! exports provided: UPDATE_FILTER, ADD_COURSE, ADD_COURSE_BATCH, FETCH_COURSE_BATCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER", function() { return UPDATE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COURSE", function() { return ADD_COURSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COURSE_BATCH", function() { return ADD_COURSE_BATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COURSE_BATCH", function() { return FETCH_COURSE_BATCH; });
var createAsyncActionStrings = function createAsyncActionStrings(action) {
  return {
    REQUEST: action + "_REQUEST",
    SUCCESS: action + "_SUCCESS",
    FAILURE: action + "_FAILURE"
  };
};

var UPDATE_FILTER = "UPDATE_FILTER";
var ADD_COURSE = "ADD_COURSE";
var ADD_COURSE_BATCH = "ADD_COURSE_BATCH";
var FETCH_COURSE_BATCH = createAsyncActionStrings("FETCH_COURSE_BATCH");

/***/ }),

/***/ "./containers/Filter.js":
/*!******************************!*\
  !*** ./containers/Filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

var Filter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Filter).call(this, props));
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: Style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Filter));

/***/ }),

/***/ "./pages/explore.js":
/*!**************************!*\
  !*** ./pages/explore.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-masonry-component */ "react-masonry-component");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CourseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CourseCard */ "./components/CourseCard.js");
/* harmony import */ var _containers_Filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Filter */ "./containers/Filter.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var ExplorePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExplorePage, _React$Component);

  function ExplorePage(props) {
    var _this;

    _classCallCheck(this, ExplorePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExplorePage).call(this, props));
    _this.state = {
      batchNumber: 0
    };
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ExplorePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.loadCoursesBatch(this.props.courses.batchNumber);
      window.addEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      if (document.offsetHeight + document.scrollTop > document.scrollHeight - 100 && !this.props.courses.isFetching) {
        this.props.loadCoursesBatch(this.props.courses.batchNumber++);
        console.log(this.props.courses.batchNumber);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Filter__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_masonry_component__WEBPACK_IMPORTED_MODULE_3___default.a, null, this.props.courseList.map(function (course) {
        if (course.department_code == undefined) {
          console.log(course);
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          department_code: course.department_code,
          course_number: course.course_number,
          course_title: course.course_title,
          course_description: course.course_description
        });
      })))));
    }
  }]);

  return ExplorePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    courseList: state.courseList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadCoursesBatch: function loadCoursesBatch(batch) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchCourseBatch"])(batch));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ExplorePage));

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/explore.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/explore.js */"./pages/explore.js");


/***/ }),

/***/ "js-hash-code":
/*!*******************************!*\
  !*** external "js-hash-code" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-hash-code");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-masonry-component":
/*!******************************************!*\
  !*** external "react-masonry-component" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=explore.js.map