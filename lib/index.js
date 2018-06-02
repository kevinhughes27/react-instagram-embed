"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsonpP = _interopRequireDefault(require("jsonp-p"));

var _queryString = _interopRequireDefault(require("query-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var InstagramEmbed =
/*#__PURE__*/
function (_Component) {
  _inherits(InstagramEmbed, _Component);

  function InstagramEmbed() {
    var _ref;

    var _temp, _this2;

    _classCallCheck(this, InstagramEmbed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this2, (_temp = _this2 = _possibleConstructorReturn(this, (_ref = InstagramEmbed.__proto__ || Object.getPrototypeOf(InstagramEmbed)).call.apply(_ref, [this].concat(args))), _initialiseProps.call(_assertThisInitialized(_this2)), _temp));
  }

  _createClass(InstagramEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (window.instgrm || document.getElementById('react-instagram-embed-script')) {
        this.fetchEmbed(this.getQueryParams(this.props));
      } else {
        if (this.props.injectScript) {
          this.injectScript();
        }

        this.checkAPI().then(function () {
          return _this3.fetchEmbed(_this3.getQueryParams(_this3.props));
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          url = _props.url,
          hideCaption = _props.hideCaption,
          maxWidth = _props.maxWidth,
          containerTagName = _props.containerTagName;

      if (nextProps.url !== url || nextProps.hideCaption !== hideCaption || nextProps.maxWidth !== maxWidth || nextProps.containerTagName !== containerTagName) {
        this.jsonp.cancel();
        this.fetchEmbed(this.getQueryParams(nextProps));
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _props2 = this.props,
          url = _props2.url,
          hideCaption = _props2.hideCaption,
          maxWidth = _props2.maxWidth,
          containerTagName = _props2.containerTagName,
          onLoading = _props2.onLoading,
          onSuccess = _props2.onSuccess,
          onAfterRender = _props2.onAfterRender,
          onFailure = _props2.onFailure;
      var __html = this.state.__html;

      if (nextProps.url !== url || nextProps.hideCaption !== hideCaption || nextProps.maxWidth !== maxWidth || nextProps.containerTagName !== containerTagName || nextProps.onLoading !== onLoading || nextProps.onSuccess !== onSuccess || nextProps.onAfterRender !== onAfterRender || nextProps.onFailure !== onFailure || nextState.__html !== __html) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var Tag = this.props.containerTagName;
      return _react.default.createElement(Tag, _extends({}, this.omitComponentProps(), {
        dangerouslySetInnerHTML: {
          __html: this.state.__html
        }
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancel();
    }
  }, {
    key: "omitComponentProps",
    value: function omitComponentProps() {
      // eslint-disable-next-line no-unused-vars
      var _props3 = this.props,
          url = _props3.url,
          hideCaption = _props3.hideCaption,
          maxWidth = _props3.maxWidth,
          containerTagName = _props3.containerTagName,
          onLoading = _props3.onLoading,
          onSuccess = _props3.onSuccess,
          onAfterRender = _props3.onAfterRender,
          onFailure = _props3.onFailure,
          protocol = _props3.protocol,
          injectScript = _props3.injectScript,
          rest = _objectWithoutProperties(_props3, ["url", "hideCaption", "maxWidth", "containerTagName", "onLoading", "onSuccess", "onAfterRender", "onFailure", "protocol", "injectScript"]);

      return rest;
    }
  }, {
    key: "injectScript",
    value: function injectScript() {
      var protocolToUse = window.location.protocol.indexOf('file') === 0 ? this.props.protocol : '';
      var s = document.createElement('script');
      s.async = s.defer = true;
      s.src = "".concat(protocolToUse, "//platform.instagram.com/en_US/embeds.js");
      s.id = 'react-instagram-embed-script';
      var body = document.body;

      if (body) {
        body.appendChild(s);
      }
    }
  }, {
    key: "checkAPI",
    value: function checkAPI() {
      var _this4 = this;

      return new Promise(function (resolve) {
        (function checkAPI(_this) {
          _this._timer = setTimeout(function () {
            if (window.instgrm) {
              clearTimeout(_this._timer);
              resolve();
            } else {
              checkAPI(_this);
            }
          }, 20);
        })(_this4);
      });
    }
  }, {
    key: "fetchEmbed",
    value: function fetchEmbed(queryParams) {
      this.jsonp = (0, _jsonpP.default)("https://api.instagram.com/oembed/?".concat(queryParams));
      this.props.onLoading && this.props.onLoading();
      this.jsonp.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
    }
  }, {
    key: "getQueryParams",
    value: function getQueryParams(_ref2) {
      var url = _ref2.url,
          hideCaption = _ref2.hideCaption,
          maxWidth = _ref2.maxWidth;
      return _queryString.default.stringify({
        url: url,
        hidecaption: hideCaption,
        maxwidth: typeof maxWidth === 'number' && maxWidth >= 320 ? maxWidth : undefined,
        omitscript: true
      });
    }
  }]);

  return InstagramEmbed;
}(_react.Component);

exports.default = InstagramEmbed;
Object.defineProperty(InstagramEmbed, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hideCaption: false,
    containerTagName: 'div',
    protocol: 'https:',
    injectScript: true
  }
});

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  Object.defineProperty(this, "jsonp", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: void 0
  });
  Object.defineProperty(this, "_timer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: void 0
  });
  Object.defineProperty(this, "state", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      __html: null
    }
  });
  Object.defineProperty(this, "handleFetchSuccess", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(response) {
      _this5.props.onSuccess && _this5.props.onSuccess(response);

      _this5.setState({
        __html: response.html
      }, function () {
        window.instgrm.Embeds.process();
        _this5.props.onAfterRender && _this5.props.onAfterRender();
      });
    }
  });
  Object.defineProperty(this, "handleFetchFailure", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var _this5$props;

      clearTimeout(_this5._timer);
      _this5.props.onFailure && (_this5$props = _this5.props).onFailure.apply(_this5$props, arguments);
    }
  });
  Object.defineProperty(this, "cancel", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      if (_this5.jsonp) {
        _this5.jsonp.cancel();
      }
    }
  });
};