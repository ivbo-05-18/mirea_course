
Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _Segment = require('./Segment');

const _Segment2 = _interopRequireDefault(_Segment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { const target = {}; for (const i in obj) { if (keys.indexOf(i) >= 0) { continue; } if (!Object.prototype.hasOwnProperty.call(obj, i)) { continue; } target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  const { segments } = _ref;
	    const props = _objectWithoutProperties(_ref, ['segments']);

  return _react2.default.createElement(
    'div',
    null,
    segments.map((position, i) => _react2.default.createElement(_Segment2.default, {
      key: `segment-${i}`,
      index: i,
      ...position,
      ...props,
    })),
  );
};
