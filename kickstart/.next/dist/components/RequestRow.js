'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Rwc/Desktop/Rachna Programming/solidity/kickstart/components/RequestRow.js';


var Row = _semanticUiReact.Table.Row,
    Cell = _semanticUiReact.Table.Cell;

var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingApprove: false,
      loadingFinalize: false,
      errorMessage: ''
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.setState({ loadingApprove: true });
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

            case 8:
              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              _this.setState({ errorMessage: _context.t0.message });

            case 14:
              _this.setState({ loadingApprove: false });

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 11]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              _this.setState({ loadingFinalize: true });
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context2.sent;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

            case 8:
              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2['catch'](0);

              _this.setState({ errorMessage: _context2.t0.message });

            case 14:
              _this.setState({ loadingFinalize: false });

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 11]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var readyToFinalize = this.props.request.approvalCount > this.props.approversCount / 2;
      return _react2.default.createElement(Row, { disabled: this.props.request.complete, positive: readyToFinalize && !this.props.request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.props.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, this.props.request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.props.request.approvalCount, '/', this.props.approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loadingApprove, basic: true, color: 'green', onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loadingFinalize, basic: true, color: 'red', onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUm91dGVyIiwiUm93IiwiQ2VsbCIsIlJlcXVlc3RSb3ciLCJzdGF0ZSIsImxvYWRpbmdBcHByb3ZlIiwibG9hZGluZ0ZpbmFsaXplIiwiZXJyb3JNZXNzYWdlIiwib25BcHByb3ZlIiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZWFkeVRvRmluYWxpemUiLCJyZXF1ZXN0IiwiYXBwcm92YWxDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUSxBQUFhOzs7Ozs7O0lBRWQsQSxNLEFBQWEsdUJBQWIsQTtJLEFBQUssTyxBQUFRLHVCLEFBQVI7O0lBRU4sQTs7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7c0JBQVEsQUFDVSxBQUNoQjt1QkFGTSxBQUVXLEFBQ2pCO29CQUhNLEFBR1EsQTtBQUhSLEFBQ04sYUFLRixBLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUVSOztvQkFBQSxBQUFLLFNBQVMsRUFBQyxnQkFBZixBQUFjLEFBQWdCLEFBQ3hCO0FBSEUseUJBR1Msd0JBQVMsTUFBQSxBQUFLLE1BSHZCLEFBR1MsQUFBb0I7OEJBSDdCO3FCQUllLGNBQUEsQUFBSyxJQUpwQixBQUllLEFBQVM7O2lCQUExQjtBQUpFLGtDQUFBOzhCQUFBO3FCQUtGLFNBQUEsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDLEtBQUssRUFBQyxNQUFNLFNBTHpELEFBS0YsQUFBb0QsQUFBTyxBQUFTOztpQkFDMUU7NkJBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BQXZDLEFBQTZDLFVBTnJDOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQVNSOztvQkFBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBVHJCLEFBU1IsQUFBYyxBQUFtQjs7aUJBRW5DO29CQUFBLEFBQUssU0FBUyxFQUFDLGdCQVhMLEFBV1YsQUFBYyxBQUFpQjs7aUJBWHJCO2lCQUFBOzhCQUFBOztBQUFBOytCQUFBO0EsZUFhWixBLHNGQUFhLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUVUOztvQkFBQSxBQUFLLFNBQVMsRUFBQyxpQkFBZixBQUFjLEFBQWlCLEFBQ3pCO0FBSEcseUJBR1Esd0JBQVMsTUFBQSxBQUFLLE1BSHRCLEFBR1EsQUFBb0I7K0JBSDVCO3FCQUljLGNBQUEsQUFBSyxJQUpuQixBQUljLEFBQVM7O2lCQUExQjtBQUpHLG1DQUFBOytCQUFBO3FCQUtILFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0QsS0FBSyxFQUFDLE1BQU0sU0FMekQsQUFLSCxBQUFxRCxBQUFPLEFBQVM7O2lCQUMzRTs2QkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFBdkMsQUFBNkMsVUFOcEM7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBU1Q7O29CQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsYUFUcEIsQUFTVCxBQUFjLEFBQW1COztpQkFFbkM7b0JBQUEsQUFBSyxTQUFTLEVBQUMsaUJBWEosQUFXWCxBQUFjLEFBQWtCOztpQkFYckI7aUJBQUE7K0JBQUE7O0FBQUE7Z0NBQUE7QTs7Ozs7NkJBY0osQUFDUDtVQUFNLGtCQUFrQixLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsZ0JBQWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQXRFLEFBQXFGLEFBQ3JGOzZCQUNHLGNBQUQsT0FBSyxVQUFZLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBNUIsQUFBb0MsVUFBVSxVQUFVLG1CQUFtQixDQUFDLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBdkYsQUFBK0Y7b0JBQS9GO3NCQUFBLEFBQ0E7QUFEQTtPQUFBLGtCQUNDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQURaLEFBQ0EsQUFBa0IsQUFDbEIscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxRQUZsQixBQUVBLEFBQTBCLEFBQzFCLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUEvQixBQUF1QyxPQUg5QyxBQUdBLEFBQU8sQUFBK0MsQUFDdEQsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxRQUpsQixBQUlBLEFBQTBCLEFBQzFCLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsUUFBbEIsQUFBMEIsZUFBZ0IsVUFBQSxBQUFLLE1BTC9DLEFBS0EsQUFBcUQsQUFDckQsaUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQztBQUREO0FBQUEsY0FDQyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHVCQUM3QixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLGdCQUFnQixPQUE1QyxNQUFrRCxPQUFsRCxBQUF3RCxTQUFRLFNBQVMsS0FBekUsQUFBOEU7b0JBQTlFO3NCQUFBO0FBQUE7T0FBQSxFQVJGLEFBTUEsQUFFRSxBQUdGLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLGNBQ0MsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFDN0IsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixpQkFBaUIsT0FBN0MsTUFBbUQsT0FBbkQsQUFBeUQsT0FBTSxTQUFTLEtBQXhFLEFBQTZFO29CQUE3RTtzQkFBQTtBQUFBO09BQUEsRUFkSixBQUNFLEFBV0EsQUFFRSxBQU1MOzs7OztBQXhEc0IsQSxBQTJEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUndjL0Rlc2t0b3AvUmFjaG5hIFByb2dyYW1taW5nL3NvbGlkaXR5L2tpY2tzdGFydCJ9