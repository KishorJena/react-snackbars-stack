'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var material = require('@mui/material');
var Snackbar = _interopDefault(require('@mui/material/Snackbar'));
var React = require('react');
var React__default = _interopDefault(React);

var SnackbarDefaults = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  maxSnackbars: 4,
  theme: 'light',
  transitionType: 'slide'
};
var OPPOSITE_DIRECTIONS = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up'
};
var DEFAULT_OPTIONS = {
  severity: 'info',
  duration: 3000,
  preventDuplicate: false
};

var SnackbarContext = /*#__PURE__*/React.createContext(undefined);

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    this.listeners = new Set();
    this.active = false;
    this.queue = [];
    this.processing = false;
    this.activeMessages = new Set();
  }
  var _proto = EventEmitter.prototype;
  _proto.emit = /*#__PURE__*/function () {
    var _emit = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(snackbar) {
      var _this = this;
      var _loop;
      return _regeneratorRuntime().wrap(function _callee$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (this.active) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (!(snackbar.preventDuplicate && this.activeMessages.has(snackbar.message))) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return");
          case 4:
            this.queue.push(snackbar);
            if (snackbar.preventDuplicate) {
              this.activeMessages.add(snackbar.message);
            }
            if (this.processing) {
              _context2.next = 14;
              break;
            }
            this.processing = true;
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var next;
              return _regeneratorRuntime().wrap(function _loop$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    next = _this.queue.shift();
                    if (!next) {
                      _context.next = 5;
                      break;
                    }
                    _this.listeners.forEach(function (listener) {
                      return listener(next);
                    });
                    _context.next = 5;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 100);
                    });
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _loop);
            });
          case 9:
            if (!(this.queue.length > 0)) {
              _context2.next = 13;
              break;
            }
            return _context2.delegateYield(_loop(), "t0", 11);
          case 11:
            _context2.next = 9;
            break;
          case 13:
            this.processing = false;
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee, this);
    }));
    function emit(_x) {
      return _emit.apply(this, arguments);
    }
    return emit;
  }();
  _proto.subscribe = function subscribe(listener) {
    var _this2 = this;
    this.listeners.add(listener);
    return function () {
      _this2.listeners["delete"](listener);
      _this2.queue = [];
      _this2.activeMessages.clear();
    };
  };
  _proto.setActive = function setActive(value) {
    this.active = value;
  }
  // Add this to snackbarReducer.ts
  ;
  _proto.removeFromActiveMessages = function removeFromActiveMessages(message) {
    this.activeMessages["delete"](message);
  };
  return EventEmitter;
}();
var eventEmitter = /*#__PURE__*/new EventEmitter();

var snackbarReducer = function snackbarReducer(state, action, maxSnackbars) {
  switch (action.type) {
    case 'ADD_SNACKBAR':
      return [].concat(state, [action.payload]).slice(-maxSnackbars);
    // return [...state, action.payload];
    case 'CLOSE_SNACKBAR':
      return state.map(function (snackbar) {
        if (snackbar.id === action.payload) {
          eventEmitter.removeFromActiveMessages(snackbar.message);
          return _extends({}, snackbar, {
            open: false
          });
        }
        return snackbar;
      });
    case 'REMOVE_SNACKBAR':
      return state.filter(function (snackbar) {
        return snackbar.id !== action.payload;
      });
    case 'CLEAR_ALL':
      state.forEach(function (snackbar) {
        eventEmitter.removeFromActiveMessages(snackbar.message);
      });
      return [];
    default:
      return state;
  }
};

var darkTheme = /*#__PURE__*/material.createTheme({
  palette: {
    mode: 'dark'
  }
});
var lightTheme = /*#__PURE__*/material.createTheme({
  palette: {
    mode: 'light'
  }
});

var oppositeDirections = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up'
};
var SNACKBAR_SPACING = 60;
var transitionComponents = function transitionComponents(transitionType, anchorOrigin) {
  switch (transitionType) {
    case 'slide':
      return function (props) {
        return React__default.createElement(material.Slide, Object.assign({}, props, {
          direction: oppositeDirections[anchorOrigin.horizontal]
        }));
      };
    case 'grow':
      return material.Grow;
    case 'fade':
      return material.Fade;
    case 'zoom':
      return material.Zoom;
    default:
      return material.Slide;
  }
};
// Main component
var Provider = function Provider(_ref) {
  var _style;
  var _ref$anchorOrigin = _ref.anchorOrigin,
    anchorOrigin = _ref$anchorOrigin === void 0 ? SnackbarDefaults.anchorOrigin : _ref$anchorOrigin,
    _ref$maxSnackbars = _ref.maxSnackbars,
    maxSnackbars = _ref$maxSnackbars === void 0 ? SnackbarDefaults.maxSnackbars : _ref$maxSnackbars,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? SnackbarDefaults.theme : _ref$theme,
    _ref$transitionType = _ref.transitionType,
    transitionType = _ref$transitionType === void 0 ? SnackbarDefaults.transitionType : _ref$transitionType,
    icon = _ref.icon,
    children = _ref.children;
  var _useReducer = React.useReducer(function (state, action) {
      return snackbarReducer(state, action, maxSnackbars);
    }, []),
    snackbars = _useReducer[0],
    dispatch = _useReducer[1];
  var instanceId = React.useRef(Date.now());
  React.useEffect(function () {
    // Check for multiple instances
    var providers = document.querySelectorAll('[data-snackbar-provider]');
    if (providers.length > 1) {
      console.warn('Multiple SnackbarProvider instances detected!');
    }
    // Setup event listener
    eventEmitter.setActive(true);
    var unsubscribe = eventEmitter.subscribe(function (newSnackbar) {
      dispatch({
        type: 'ADD_SNACKBAR',
        payload: newSnackbar
      });
    });
    return function () {
      eventEmitter.setActive(false);
      unsubscribe();
      dispatch({
        type: 'CLEAR_ALL'
      });
    };
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  var handleClose = React.useCallback(function (id) {
    return function (_event, reason) {
      if (reason === 'clickaway') return;
      dispatch({
        type: 'CLOSE_SNACKBAR',
        payload: id
      });
      setTimeout(function () {
        dispatch({
          type: 'REMOVE_SNACKBAR',
          payload: id
        });
      }, 150);
    };
  }, []);
  var SnakbarTransition = React.useMemo(function () {
    return transitionComponents(transitionType, anchorOrigin);
  }, [transitionType, anchorOrigin]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  var enqueueSnackbar = React.useCallback(function (message, options) {
    if (options === void 0) {
      options = DEFAULT_OPTIONS;
    }
    var id = Date.now();
    var payload = {
      id: id,
      open: true,
      message: message,
      severity: options.severity,
      duration: options.duration,
      preventDuplicate: options.preventDuplicate
    };
    if (maxSnackbars === snackbars.length) {
      handleClose(snackbars[0].id)();
    }
    dispatch({
      type: 'ADD_SNACKBAR',
      payload: payload
    });
  }, [maxSnackbars, snackbars, handleClose]);
  return React__default.createElement(SnackbarContext.Provider, {
    value: {
      enqueueSnackbar: enqueueSnackbar
    }
  }, React__default.createElement(material.ThemeProvider, {
    theme: theme === 'dark' ? darkTheme : lightTheme
  }, React__default.createElement(material.Portal, null, React__default.createElement("div", {
    "data-snackbar-provider": instanceId.current,
    style: (_style = {
      position: 'fixed'
    }, _style[anchorOrigin.vertical] = 0, _style[anchorOrigin.horizontal] = 0, _style.zIndex = 9999, _style.pointerEvents = 'none', _style)
  }, snackbars.map(function (snackbar, index) {
    var _sx;
    return React__default.createElement(Snackbar, {
      key: snackbar.id,
      open: snackbar.open,
      TransitionComponent: SnakbarTransition,
      autoHideDuration: snackbar.duration,
      onClose: handleClose(snackbar.id),
      anchorOrigin: anchorOrigin,
      sx: (_sx = {
        '& .MuiSnackbar-root': {
          position: 'static'
        },
        pointerEvents: 'auto',
        transition: 'all 0.1s ease-in-out'
      }, _sx[anchorOrigin.vertical] = index * SNACKBAR_SPACING + 24 + "px !important", _sx)
    }, React__default.createElement(material.Alert, {
      variant: "filled",
      onClose: handleClose(snackbar.id),
      severity: snackbar.severity,
      sx: {
        width: '100%'
      },
      icon: icon === true ? undefined : icon
    }, snackbar.message + '00000000000'));
  })))), children);
};
var SnackbarProvider = /*#__PURE__*/React.memo(Provider);

// Helper function to enqueue snackbars
var enqueueSnackbar = function enqueueSnackbar(message, options) {
  if (options === void 0) {
    options = DEFAULT_OPTIONS;
  }
  var snackbarEventEmit = {
    id: Date.now(),
    open: true,
    message: message,
    severity: options.severity,
    duration: options.duration,
    preventDuplicate: options.preventDuplicate
  };
  eventEmitter.emit(snackbarEventEmit);
};

var useSnackbar = function useSnackbar() {
  var context = React.useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
exports.OPPOSITE_DIRECTIONS = OPPOSITE_DIRECTIONS;
exports.SnackbarDefaults = SnackbarDefaults;
exports.SnackbarProvider = SnackbarProvider;
exports.enqueueSnackbar = enqueueSnackbar;
exports.useSnackbar = useSnackbar;
//# sourceMappingURL=react-snackbars-stack.cjs.development.js.map
