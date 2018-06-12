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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Rwc/Desktop/Rachna Programming/solidity/kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'showDetails',
    value: function showDetails() {
      var _props = this.props,
          minimumContribution = _props.minimumContribution,
          balance = _props.balance,
          openRequests = _props.openRequests,
          approvers = _props.approvers,
          manager = _props.manager;

      var items = [{
        header: manager,
        description: 'Manager of this Campaign',
        meta: 'This manager can create requests and withdraw money to pay Recipients',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        description: 'Minimum Contribution in Ether',
        meta: 'You need to put in the Minimum Contribution to be able to be a contributor.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: approvers,
        description: 'No of Contributors on this Campaign.',
        meta: 'These are the number of people who are active and have funded into this campaign.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        description: 'Total Balance of Contributions so far in Ether.',
        meta: 'This is total amount funded into this Campaign and hence the total amount that can be used to pay Recipients.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: openRequests,
        description: 'Number of Open Requests',
        meta: 'Open Requests to Pay Contributors.',
        style: { overflowWrap: 'break-word' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Campaign Details '), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, this.showDetails())), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Show Pending Requests '))))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  openRequests: summary[2],
                  approvers: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwib3BlblJlcXVlc3RzIiwiYXBwcm92ZXJzIiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJzaG93RGV0YWlscyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFNOztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O2tDQW1CUzttQkFDNEQsS0FENUQsQUFDaUU7VUFEakUsQUFDTiw2QkFETSxBQUNOO1VBRE0sQUFDZSxpQkFEZixBQUNlO1VBRGYsQUFDd0Isc0JBRHhCLEFBQ3dCO1VBRHhCLEFBQ3NDLG1CQUR0QyxBQUNzQztVQUR0QyxBQUNpRCxpQkFEakQsQUFDaUQsQUFDOUQ7O1VBQU07Z0JBQ04sQUFDVSxBQUNSO3FCQUZGLEFBRWUsQUFDYjtjQUhGLEFBR1EsQUFDTjtlQUFPLEVBQUMsY0FMSSxBQUNkLEFBSVMsQUFBZTtBQUp4QixBQUNFLE9BRlk7Z0JBT2QsQUFDVSxBQUNSO3FCQUZGLEFBRWUsQUFDYjtjQUhGLEFBR1EsQUFDTjtlQUFPLEVBQUMsY0FYSSxBQU9kLEFBSVMsQUFBZTtBQUp4QixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtxQkFGRixBQUVjLEFBQ1o7Y0FIRixBQUdRLEFBQ047ZUFBTyxFQUFDLGNBakJJLEFBYWQsQUFJUyxBQUFlO0FBSnhCLEFBQ0U7Z0JBTVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDdCLEFBQ1UsQUFBNEIsQUFDcEM7cUJBRkYsQUFFYyxBQUNaO2NBSEYsQUFHUSxBQUNOO2VBQU8sRUFBQyxjQXZCSSxBQW1CZCxBQUlTLEFBQWU7QUFKeEIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7cUJBRkYsQUFFYyxBQUNaO2NBSEYsQUFHUSxBQUNOO2VBQU8sRUFBQyxjQTdCVixBQUFjLEFBeUJkLEFBSVMsQUFBZSxBQUkxQjtBQVJFLEFBQ0U7OzJDQU9HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDTjtBQURNO09BQUE7Ozs7NkJBR0ksQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQSxzQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUZGLEFBQ0EsQUFDRSxBQUFLLEFBQUssQUFFWixpQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBTkYsQUFDQSxBQUlBLEFBQ0UsQUFHRjtBQUhFOzRCQUdELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBakJGLEFBQ0UsQUFDQSxBQUVBLEFBU0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQVVIOzs7OzsyR0FuRjRCLEE7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEEsQUFBcUI7O3VCQUVoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixBOzttQkFBOUM7QTs7MkJBSUssTUFBQSxBQUFNLE1BRGYsQUFDcUIsQUFDckI7dUNBQXFCLFFBRnJCLEFBRXFCLEFBQVEsQUFDN0I7MkJBQVMsUUFIVCxBQUdTLEFBQVEsQUFDakI7Z0NBQWMsUUFKZCxBQUljLEFBQVEsQUFDdEI7NkJBQVcsUUFMWCxBQUtXLEFBQVEsQUFDbkI7MkJBQVMsUUFOVCxBQU1TLEFBQVEsQTtBQU5qQixBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVHFCLEEsQUF1RjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL1J3Yy9EZXNrdG9wL1JhY2huYSBQcm9ncmFtbWluZy9zb2xpZGl0eS9raWNrc3RhcnQifQ==