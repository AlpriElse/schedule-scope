var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import hash from 'js-hash-code';

var cardStyles = {
  marginBottom: "20px",
  borderRadius: "0",
  border: "none",
  backgroundColor: "rgb(255, 255, 255)"
};
var colors = ["#52A6FF", "#E87F3B", "#8FDE82", "#E5615B", "#E597D6", "#E5DB9F", "#9194E5", "#735A54"];

var assignColor = function assignColor(course) {
  var code = hash(course.department_code + course.course_number);
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
      return React.createElement(
        'div',
        { className: 'col-md-4' },
        React.createElement(
          'div',
          { className: 'card', 'data-aos': 'fade-up', style: cardStyles, onMouseEnter: this.mouseEnter, onMouseLeave: this.mouseLeave },
          React.createElement(
            'div',
            { className: 'card-body' },
            React.createElement(
              'h5',
              { className: 'card-title text-center mx-auto text-white', style: courseLabelStyle(assignColor(course)) },
              course.department_code,
              ' ',
              course.course_number
            ),
            React.createElement(
              'p',
              { className: 'card-text', style: courseNameStyle },
              course.course_title
            ),
            React.createElement(
              'p',
              { className: 'card-text', style: courseDescriptionStyle },
              course.course_description
            )
          ),
          React.createElement(
            'div',
            { style: overlay(this.state.isHover, assignColor(course)) },
            React.createElement(
              'div',
              null,
              React.createElement(
                'div',
                { className: 'text-center text-white', style: overlayText },
                course.department_code,
                ' ',
                course.course_number
              ),
              React.createElement('br', null),
              React.createElement(
                'div',
                { style: overlaycontainer },
                React.createElement(
                  'button',
                  { className: 'btn btn-outline-special' },
                  'Go to Course'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CourseCard;
}(React.Component);

export default CourseCard;