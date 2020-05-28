// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default = _default;

// var _react = _interopRequireDefault(require("react"));

// var _reactDom = _interopRequireDefault(require("react-dom"));

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function _default() {
//   _reactDom.default.render( /*#__PURE__*/_react.default.createElement("h1", null, "Hello, world!"), document.getElementById('react-root'));
// }

import React from 'react';
import ReactDOM from 'react-dom';

export default function () {
  ReactDOM.render(
    <h1>Hello, world from React!</h1>,
    document.getElementById('react-root')
  );
}