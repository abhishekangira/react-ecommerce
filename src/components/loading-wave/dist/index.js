"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  animation: ", " 2s ease infinite;\n  animation-delay: ", "\n  &::before {\n    content: '\uD83D\uDD95'\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 1px;\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  background-color: ", "\n  animation: ", " 2s ease infinite, ", " 2s ease infinite;\n  animation-delay: ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0%, 40%, 100% {\n    background-color: ", "\n  }\n  10% {\n    background-color: ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0%, 40%, 100% {\n    transform: translate(0, 0);\n  }\n  10% {\n    transform: translate(0, -15px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var COLORS = {
  primary: '#0d6efd',
  secondary: '#28a745'
};

var wave = function wave(props) {
  return (0, _styledComponents.keyframes)(_templateObject());
};

var waveColors = function waveColors(props) {
  return (0, _styledComponents.keyframes)(_templateObject2(), props.primaryColor, props.secondaryColor);
};

var Dot = _styledComponents.default.span(_templateObject3(), function (props) {
  return props.primaryColor;
}, wave, waveColors, function (props) {
  return "".concat(100 * props.index, "ms");
});

var MiddleFinger = _styledComponents.default.span(_templateObject4(), wave, function (props) {
  return "".concat(100 * props.index, "ms");
});

var Wrapper = _styledComponents.default.div(_templateObject5());

var LoadingWave = function LoadingWave(props) {
  var Item = props.angry ? MiddleFinger : Dot;
  return _react.default.createElement(Wrapper, null, _toConsumableArray(Array(8).keys()).map(function (x, index) {
    return _react.default.createElement(Item, _extends({}, props, {
      key: index,
      index: index
    }));
  }));
};

LoadingWave.defaultProps = {
  primaryColor: COLORS.primary,
  secondaryColor: COLORS.secondary,
  angry: false
};
var _default = LoadingWave;
exports.default = _default;

//# sourceMappingURL=index.js.map