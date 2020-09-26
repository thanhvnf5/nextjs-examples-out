webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layouts/BasicLayout.js":
/*!*******************************************!*\
  !*** ./components/Layouts/BasicLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "./node_modules/@material-ui/icons/KeyboardArrowUp.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Zoom */ "./node_modules/@material-ui/core/esm/Zoom/index.js");
/* harmony import */ var _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/locale */ "./node_modules/@material-ui/core/locale/index.js");
/* harmony import */ var _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../PrimarySearchAppBar */ "./components/PrimarySearchAppBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "./node_modules/@material-ui/lab/esm/Pagination/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");





var _jsxFileName = "D:\\Personal\\Project\\React\\nextjs\\nextjs-examples\\components\\Layouts\\BasicLayout.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  };
});

function ScrollTop(props) {
  _s();

  var children = props.children,
      window = props.window;
  var classes = useStyles(); // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_8__["default"])({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  var handleClick = function handleClick(event) {
    var anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_12__["default"], {
    "in": trigger,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, children));
}

_s(ScrollTop, "9Nfgud74OrM4vTJnK2jFFR7w1m0=", false, function () {
  return [useStyles, _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = ScrollTop;
ScrollTop.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.element.isRequired,

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};

function BasicLayout(props) {
  _s2();

  var _this = this;

  var children = props.children,
      t = props.t;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState('viVN'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      locale = _React$useState2[0],
      setLocale = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: function theme(outerTheme) {
      return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_13__[locale]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    onClick: function onClick(event, newValue) {
      _i18n__WEBPACK_IMPORTED_MODULE_14__["i18n"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_14__["i18n"].language === 'en' ? 'vi' : 'en');
      setLocale(newValue);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, t('change-language'))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_19__["default"], {
    options: Object.keys(_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_13__),
    getOptionLabel: function getOptionLabel(key) {
      return "".concat(key.substring(0, 2), "-").concat(key.substring(2, 4));
    },
    style: {
      width: 300
    },
    value: locale,
    disableClearable: true,
    onChange: function onChange(event, newValue) {
      setLocale(newValue);
    },
    renderInput: function renderInput(params) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, params, {
        label: "Test",
        variant: "outlined",
        fullWidth: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 15
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TablePagination"], {
    count: 2000,
    rowsPerPage: 10,
    page: 1,
    component: "div",
    onChangePage: function onChangePage() {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_17__["default"], {
    count: 2000,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_18__["default"], {
    defaultValue: 4,
    name: "locales",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }), children), __jsx(ScrollTop, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "secondary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  })))));
}

_s2(BasicLayout, "viDUl31sKU2Ak9rcYBNza6nzi9c=");

_c2 = BasicLayout;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            namespacesRequired: ['layout']
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_14__["withTranslation"])('layout')(BasicLayout));

var _c, _c2;

$RefreshReg$(_c, "ScrollTop");
$RefreshReg$(_c2, "BasicLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL0Jhc2ljTGF5b3V0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvdHRvbSIsInNwYWNpbmciLCJyaWdodCIsIlNjcm9sbFRvcCIsInByb3BzIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJjbGFzc2VzIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJhbmNob3IiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQmFzaWNMYXlvdXQiLCJ0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvY2FsZSIsInNldExvY2FsZSIsIm91dGVyVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImxvY2FsZXMiLCJuZXdWYWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImxhbmd1YWdlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInN1YnN0cmluZyIsIndpZHRoIiwicGFyYW1zIiwiSW5kZXgiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0Ms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LHdCQUFNLENBQUcsQ0FMekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBcUJFLE1BQUMsb0VBQUQ7QUFBWSxTQUFLLEVBQUUsSUFBbkI7QUFBeUIsU0FBSyxFQUFDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUFzQkUsTUFBQyxnRUFBRDtBQUFRLGdCQUFZLEVBQUUsQ0FBdEI7QUFBeUIsUUFBSSxFQUFDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsRUF1Qkd6QyxRQXZCSCxDQVpGLEVBcUNFLE1BQUMsU0FBRCx5RkFBZUQsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBQyw4REFBRDtBQUFLLFNBQUssRUFBQyxXQUFYO0FBQXVCLFFBQUksRUFBQyxPQUE1QjtBQUFvQyxrQkFBVyxvQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FyQ0YsQ0FGRixDQURGO0FBZ0REOztJQW5EUXdCLFc7O01BQUFBLFc7QUFxRFRtQixLQUFLLENBQUNDLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FBYTtBQUNuQ0MsOEJBQWtCLEVBQUUsQ0FBQyxRQUFEO0FBRGUsV0FBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQUllQyw2SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQnRCLFdBQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZjOTI2ZDU5NDk0Y2Q3NzZlMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCBtYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1VwJztcclxuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XHJcbmltcG9ydCAqIGFzIGxvY2FsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvbG9jYWxlJztcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuXHJcbmltcG9ydCBQcmltYXJ5U2VhcmNoQXBwQmFyIGZyb20gJy4uL1ByaW1hcnlTZWFyY2hBcHBCYXInO1xyXG5pbXBvcnQgeyBUYWJsZVBhZ2luYXRpb24sIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1JhdGluZyc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBTY3JvbGxUb3AocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB3aW5kb3cgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAvLyBOb3RlIHRoYXQgeW91IG5vcm1hbGx5IHdvbid0IG5lZWQgdG8gc2V0IHRoZSB3aW5kb3cgcmVmIGFzIHVzZVNjcm9sbFRyaWdnZXJcclxuICAvLyB3aWxsIGRlZmF1bHQgdG8gd2luZG93LlxyXG4gIC8vIFRoaXMgaXMgb25seSBiZWluZyBzZXQgaGVyZSBiZWNhdXNlIHRoZSBkZW1vIGlzIGluIGFuIGlmcmFtZS5cclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICB0YXJnZXQ6IHdpbmRvdyA/IHdpbmRvdygpIDogdW5kZWZpbmVkLFxyXG4gICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQ6IDEwMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGFuY2hvciA9IChldmVudC50YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcignI2JhY2stdG8tdG9wLWFuY2hvcicpO1xyXG4gICAgaWYgKGFuY2hvcikge1xyXG4gICAgICBhbmNob3Iuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFpvb20gaW49e3RyaWdnZXJ9PlxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1pvb20+XHJcbiAgKTtcclxufVxyXG5cclxuU2Nyb2xsVG9wLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBJbmplY3RlZCBieSB0aGUgZG9jdW1lbnRhdGlvbiB0byB3b3JrIGluIGFuIGlmcmFtZS5cclxuICAgKiBZb3Ugd29uJ3QgbmVlZCBpdCBvbiB5b3VyIHByb2plY3QuXHJcbiAgICovXHJcbiAgd2luZG93OiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEJhc2ljTGF5b3V0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IFJlYWN0LnVzZVN0YXRlKCd2aVZOJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXsob3V0ZXJUaGVtZSkgPT4gY3JlYXRlTXVpVGhlbWUob3V0ZXJUaGVtZSwgbG9jYWxlc1tsb2NhbGVdKX0+XHJcbiAgICAgICAgPFByaW1hcnlTZWFyY2hBcHBCYXI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGkxOG4ubGFuZ3VhZ2UgPT09ICdlbicgPyAndmknIDogJ2VuJyk7XHJcbiAgICAgICAgICAgIHNldExvY2FsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0KCdjaGFuZ2UtbGFuZ3VhZ2UnKX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L1ByaW1hcnlTZWFyY2hBcHBCYXI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgb3B0aW9ucz17T2JqZWN0LmtleXMobG9jYWxlcyl9XHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsoa2V5KSA9PiBgJHtrZXkuc3Vic3RyaW5nKDAsIDIpfS0ke2tleS5zdWJzdHJpbmcoMiwgNCl9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17bG9jYWxlfVxyXG4gICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TG9jYWxlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiVGVzdFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgY291bnQ9ezIwMDB9XHJcbiAgICAgICAgICAgIHJvd3NQZXJQYWdlPXsxMH1cclxuICAgICAgICAgICAgcGFnZT17MX1cclxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXsoKSA9PiB7IH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFBhZ2luYXRpb24gY291bnQ9ezIwMDB9IGNvbG9yPVwicHJpbWFyeVwiIC8+XHJcbiAgICAgICAgICA8UmF0aW5nIGRlZmF1bHRWYWx1ZT17NH0gbmFtZT1cImxvY2FsZXNcIiAvPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxTY3JvbGxUb3Agey4uLnByb3BzfT5cclxuICAgICAgICAgIDxGYWIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwic2Nyb2xsIGJhY2sgdG8gdG9wXCI+XHJcbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93VXBJY29uIC8+XHJcbiAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICA8L1Njcm9sbFRvcD5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydsYXlvdXQnXSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignbGF5b3V0JykoQmFzaWNMYXlvdXQpOyJdLCJzb3VyY2VSb290IjoiIn0=