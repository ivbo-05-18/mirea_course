
Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

const _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { const target = {}; for (const i in obj) { if (keys.indexOf(i) >= 0) { continue; } if (!Object.prototype.hasOwnProperty.call(obj, i)) { continue; } target[i] = obj[i]; } return target; }

const ALIVE_COLOR = '#a9ff70';
const DEAD_COLOR = 'gray';

exports.default = function (_ref) {
  const { scale } = _ref;
  const { x } = _ref;
  const { y } = _ref;
  const { color } = _ref;
  const { index } = _ref;
  const { dead } = _ref;
  const props = _objectWithoutProperties(_ref, ['scale', 'x', 'y', 'color', 'index', 'dead']);

  return _react2.default.createElement(
    _reactAddonsCssTransitionGroup2.default,
    {
      transitionName: 'segment',
      transitionAppear: true,
      transitionAppearTimeout: 500,
      transitionEnter: false,
      transitionLeave: false,
    },
    _react2.default.createElement('div', {
      className: true,
      style: {
        position: 'absolute',
        top: scale * y,
        left: scale * x,
        height: scale,
        width: scale,
        backgroundColor: dead ? DEAD_COLOR : ALIVE_COLOR,
      },
    }),
  );
};
