
Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { const target = {}; for (const i in obj) { if (keys.indexOf(i) >= 0) { continue; } if (!Object.prototype.hasOwnProperty.call(obj, i)) { continue; } target[i] = obj[i]; } return target; }

const ALIVE_COLOR = 'red';
const DEAD_COLOR = 'gray';

exports.default = function (_ref) {
  const { scale } = _ref;
  const { x } = _ref;
  const { y } = _ref;
  const { dead } = _ref;
  const props = _objectWithoutProperties(_ref, ['scale', 'x', 'y', 'dead']);

  if (props.food == null) { return false; }
  return _react2.default.createElement('div', {
    className: 'food',
    style: {
      position: 'absolute',
      borderRadius: scale,
      top: scale * y,
      left: scale * x,
      height: scale / 2,
      width: scale / 2,
      marginTop: scale / 4,
      marginLeft: scale / 4,
      backgroundColor: dead ? DEAD_COLOR : ALIVE_COLOR,
    },
  });
};
