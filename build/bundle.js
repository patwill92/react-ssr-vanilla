/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';
var FETCH_ADMINS = exports.FETCH_ADMINS = 'FETCH_ADMINS';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;


              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(24);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(25);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _AdminsListPage = __webpack_require__(26);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

var _ErrorPage = __webpack_require__(28);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _AdminsListPage2.default, {
    path: '/admins'
  }), _extends({}, _UsersListPage2.default, {
    path: '/users'
  }), _extends({}, _ErrorPage2.default)]
})];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/AccountCircle");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(8);

var _reactJss = __webpack_require__(1);

var _expressHttpProxy = __webpack_require__(18);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(29);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(34);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve) {
        promise.then(resolve).catch(resolve);
      });
    }
  });
  console.log(promises);
  Promise.all(promises).then(function () {
    var context = {};
    var sheetsRegistry = new _reactJss.SheetsRegistry();
    var generateClassName = (0, _reactJss.createGenerateClassName)();
    var content = (0, _renderer2.default)(req, store, context, sheetsRegistry, generateClassName);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(8);

var _reactJss = __webpack_require__(1);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Header = __webpack_require__(20);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  root: {
    margin: 0
  }
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          route = _props.route,
          classes = _props.classes;

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = {
  component: (0, _reactJss2.default)(style)(App),
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(3);

var _reactJss = __webpack_require__(1);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _AppBar = __webpack_require__(21);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(22);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(23);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    width: '100%',
    marginBottom: 30
  },
  flex: {
    flex: 1,
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none !important'
    }
  },
  link: {
    textDecoration: 'none !important',
    color: '#fff'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  buttons: {
    '& a': {
      color: '#fff !important',
      textDecoration: 'none !important'
    }
  }
};

var Header = function Header(props) {
  var classes = props.classes,
      auth = props.auth;

  console.log(auth);
  var authButton = auth ? _react2.default.createElement(
    _Button2.default,
    { color: 'contrast' },
    _react2.default.createElement(
      'a',
      { href: '/api/logout' },
      'logout'
    )
  ) : _react2.default.createElement(
    _Button2.default,
    { color: 'contrast' },
    _react2.default.createElement(
      'a',
      { href: '/api/auth/google' },
      'login'
    )
  );
  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'static' },
      _react2.default.createElement(
        _Toolbar2.default,
        { className: classes.toolbar },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: classes.link, to: '/' },
          _react2.default.createElement(
            _Typography2.default,
            { type: 'title', color: 'inherit', className: classes.flex },
            'React SSR'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classes.buttons },
          _react2.default.createElement(
            _Button2.default,
            { color: 'contrast' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/users' },
              'users'
            )
          ),
          _react2.default.createElement(
            _Button2.default,
            { color: 'contrast' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/admins' },
              'admins'
            )
          ),
          authButton
        )
      )
    )
  );
};

function mapStateToProps(_ref) {
  var auth = _ref.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactJss2.default)(styles)(Header));

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactJss = __webpack_require__(1);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _reactHelmet = __webpack_require__(5);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Paper = __webpack_require__(6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = __webpack_require__(7);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = function style(theme) {
  return {
    paper: {
      marginTop: 50,
      paddingTop: 50,
      paddingBottom: 50
    },
    text: {
      fontWeight: theme.typography.fontWeightLight
    }
  };
};

var Home = function Home(props) {
  var classes = props.classes;

  var head = function head() {
    return _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Home'
      ),
      _react2.default.createElement('meta', { property: 'og:title', content: 'Home Page' })
    );
  };
  return _react2.default.createElement(
    _Grid2.default,
    { container: true, justify: 'center' },
    head(),
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 11 },
      _react2.default.createElement(
        _Paper2.default,
        { className: classes.paper },
        _react2.default.createElement(
          _Typography2.default,
          { className: classes.text, type: 'display1', gutterBottom: true, align: 'center' },
          'Home Component'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { gutterBottom: true, align: 'center' },
          'Check out these awesome features'
        )
      )
    )
  );
};

exports.default = {
  component: (0, _reactJss2.default)(style)(Home)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(5);

var _reactJss = __webpack_require__(1);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _List = __webpack_require__(11);

var _List2 = _interopRequireDefault(_List);

var _Paper = __webpack_require__(6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = __webpack_require__(7);

var _Grid2 = _interopRequireDefault(_Grid);

var _Avatar = __webpack_require__(12);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _AccountCircle = __webpack_require__(13);

var _AccountCircle2 = _interopRequireDefault(_AccountCircle);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    background: '#fff'
  },
  title: {
    padding: 16
  },
  paper: {
    padding: 30
  }
};

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList() {
    _classCallCheck(this, UsersList);

    return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
  }

  _createClass(UsersList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      return this.props.users.map(function (user) {
        return _react2.default.createElement(
          _List.ListItem,
          { key: user.id, button: true },
          _react2.default.createElement(
            _List.ListItemAvatar,
            null,
            _react2.default.createElement(
              _Avatar2.default,
              null,
              _react2.default.createElement(_AccountCircle2.default, null)
            )
          ),
          _react2.default.createElement(_List.ListItemText, {
            primary: user.name
          })
        );
      });
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Users (' + this.props.users.length + ')'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        { style: { marginTop: 50 } },
        this.head(),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, justify: 'center' },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 11, md: 6 },
            _react2.default.createElement(
              _Paper2.default,
              { className: classes.paper },
              _react2.default.createElement(
                _Typography2.default,
                { type: 'display1', className: classes.title,
                  style: { paddingTop: 0 } },
                'Users'
              ),
              _react2.default.createElement(
                'div',
                { className: classes.demo },
                _react2.default.createElement(
                  _List2.default,
                  { dense: true },
                  this.renderUsers()
                )
              )
            )
          )
        )
      );
    }
  }]);

  return UsersList;
}(_react.Component);

function mapStateToProps(_ref) {
  var users = _ref.users;

  return {
    users: users
  };
}

function loadData(store) {
  return store.dispatch((0, _index.fetchUsers)());
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _index.fetchUsers })((0, _reactJss2.default)(styles)(UsersList)),
  loadData: loadData
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _requireAuth = __webpack_require__(27);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _reactHelmet = __webpack_require__(5);

var _reactJss = __webpack_require__(1);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _List = __webpack_require__(11);

var _List2 = _interopRequireDefault(_List);

var _Paper = __webpack_require__(6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = __webpack_require__(7);

var _Grid2 = _interopRequireDefault(_Grid);

var _Avatar = __webpack_require__(12);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _AccountCircle = __webpack_require__(13);

var _AccountCircle2 = _interopRequireDefault(_AccountCircle);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    background: '#fff'
  },
  title: {
    padding: 16
  },
  paper: {
    padding: 30
  }
};

var AdminsListPage = function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: 'renderAdmins',
    value: function renderAdmins() {
      return this.props.admins.map(function (admin) {
        return _react2.default.createElement(
          _List.ListItem,
          { key: admin.id, button: true },
          _react2.default.createElement(
            _List.ListItemAvatar,
            null,
            _react2.default.createElement(
              _Avatar2.default,
              null,
              _react2.default.createElement(_AccountCircle2.default, null)
            )
          ),
          _react2.default.createElement(_List.ListItemText, {
            primary: admin.name
          })
        );
      });
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Admin'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Admins Page' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        { style: { marginTop: 50 } },
        this.head(),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, justify: 'center' },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 11, md: 6 },
            _react2.default.createElement(
              _Paper2.default,
              { className: classes.paper },
              _react2.default.createElement(
                _Typography2.default,
                { type: 'display1', className: classes.title, style: { paddingTop: 0 } },
                'Admins'
              ),
              _react2.default.createElement(
                'div',
                { className: classes.demo },
                _react2.default.createElement(
                  _List2.default,
                  { dense: true },
                  this.renderAdmins()
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var admins = _ref.admins;

  return {
    admins: admins
  };
}

function loadData(store) {
  return store.dispatch((0, _index.fetchAdmins)());
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _index.fetchAdmins })((0, _reactJss2.default)(styles)((0, _requireAuth2.default)(AdminsListPage))),
  loadData: loadData
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'render',
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          case null:
            return _react2.default.createElement(
              'div',
              null,
              'Loading...'
            );
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }
  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactJss = __webpack_require__(1);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _reactHelmet = __webpack_require__(5);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Grid = __webpack_require__(7);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(6);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  root: {
    marginTop: 50
  },
  paper: {
    paddingTop: 50,
    paddingBottom: 50
  }
};

var ErrorPage = function ErrorPage(_ref) {
  var classes = _ref.classes,
      _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  var head = function head() {
    return _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Error'
      ),
      _react2.default.createElement('meta', { property: 'og:title', content: 'Error Page' })
    );
  };
  return _react2.default.createElement(
    _Grid2.default,
    { className: classes.root, container: true, justify: 'center' },
    head(),
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 11 },
      _react2.default.createElement(
        _Paper2.default,
        { className: classes.paper },
        _react2.default.createElement(
          _Typography2.default,
          { type: 'display1', align: 'center', gutterBottom: true },
          'NOT FOUND'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { type: 'title', align: 'center', color: 'error' },
          '404'
        )
      )
    )
  );
};

exports.default = {
  component: (0, _reactJss2.default)(style)(ErrorPage)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(30);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(8);

var _serializeJavascript = __webpack_require__(31);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactJss = __webpack_require__(1);

var _styles = __webpack_require__(32);

var _colors = __webpack_require__(33);

var _reactHelmet = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context, sheetsRegistry, generateClassName) {

  var theme = (0, _styles.createMuiTheme)({
    palette: {
      primary: _colors.blue
    }
  });

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(
        _reactJss.JssProvider,
        { registry: sheetsRegistry, generateClassName: generateClassName },
        _react2.default.createElement(
          _styles.MuiThemeProvider,
          { theme: theme },
          _react2.default.createElement(
            'div',
            null,
            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
          )
        )
      )
    )
  ));

  var css = sheetsRegistry.toString();
  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n      </head>\n      <style>body {margin: 0;}</style>\n      <body>\n        <div id="root">' + content + '</div>\n        <style id="jss-server-side">' + css + '</style>\n        <script >\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(35);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(36);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(37);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  //pass in server axios header to redux-thunk
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });
  //return store
  return (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _usersReducer = __webpack_require__(38);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(39);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(40);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  auth: _authReducer2.default,
  admins: _adminsReducer2.default
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _index = __webpack_require__(2);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ })
/******/ ]);