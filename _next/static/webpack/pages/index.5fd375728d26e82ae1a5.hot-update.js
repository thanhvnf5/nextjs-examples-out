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
      setLocale(_i18n__WEBPACK_IMPORTED_MODULE_14__["i18n"].language === 'en' ? 'viVN' : 'enUS');
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
BasicLayout.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL0Jhc2ljTGF5b3V0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvdHRvbSIsInNwYWNpbmciLCJyaWdodCIsIlNjcm9sbFRvcCIsInByb3BzIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJjbGFzc2VzIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJhbmNob3IiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQmFzaWNMYXlvdXQiLCJ0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvY2FsZSIsInNldExvY2FsZSIsIm91dGVyVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImxvY2FsZXMiLCJuZXdWYWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImxhbmd1YWdlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInN1YnN0cmluZyIsIndpZHRoIiwicGFyYW1zIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFB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Q0FIUjtBQUlFLGFBQVMsRUFBQyxLQUpaO0FBS0UsZ0JBQVksRUFBRSx3QkFBTSxDQUFHLENBTHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixFQXFCRSxNQUFDLG9FQUFEO0FBQVksU0FBSyxFQUFFLElBQW5CO0FBQXlCLFNBQUssRUFBQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLEVBc0JFLE1BQUMsZ0VBQUQ7QUFBUSxnQkFBWSxFQUFFLENBQXRCO0FBQXlCLFFBQUksRUFBQyxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLEVBdUJHekMsUUF2QkgsQ0FaRixFQXFDRSxNQUFDLFNBQUQseUZBQWVELEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsOERBQUQ7QUFBSyxTQUFLLEVBQUMsV0FBWDtBQUF1QixRQUFJLEVBQUMsT0FBNUI7QUFBb0Msa0JBQVcsb0JBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBckNGLENBRkYsQ0FERjtBQWdERDs7SUFuRFF3QixXOztNQUFBQSxXO0FBcURUQSxXQUFXLENBQUNtQixlQUFaLGlNQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQWE7QUFDekNDLDhCQUFrQixFQUFFLENBQUMsUUFBRDtBQURxQixXQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTlCO0FBSWVDLDZIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCckIsV0FBMUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZmQzNzU3MjhkMjZlODJhZTFhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIG1ha2VTdHlsZXMsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXAnO1xyXG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcclxuaW1wb3J0ICogYXMgbG9jYWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9sb2NhbGUnO1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuaW1wb3J0IFByaW1hcnlTZWFyY2hBcHBCYXIgZnJvbSAnLi4vUHJpbWFyeVNlYXJjaEFwcEJhcic7XHJcbmltcG9ydCB7IFRhYmxlUGFnaW5hdGlvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb24nO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUmF0aW5nJztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFNjcm9sbFRvcChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHdpbmRvdyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIC8vIE5vdGUgdGhhdCB5b3Ugbm9ybWFsbHkgd29uJ3QgbmVlZCB0byBzZXQgdGhlIHdpbmRvdyByZWYgYXMgdXNlU2Nyb2xsVHJpZ2dlclxyXG4gIC8vIHdpbGwgZGVmYXVsdCB0byB3aW5kb3cuXHJcbiAgLy8gVGhpcyBpcyBvbmx5IGJlaW5nIHNldCBoZXJlIGJlY2F1c2UgdGhlIGRlbW8gaXMgaW4gYW4gaWZyYW1lLlxyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgIHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQsXHJcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMTAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgYW5jaG9yID0gKGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKCcjYmFjay10by10b3AtYW5jaG9yJyk7XHJcbiAgICBpZiAoYW5jaG9yKSB7XHJcbiAgICAgIGFuY2hvci5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Wm9vbSBpbj17dHJpZ2dlcn0+XHJcbiAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvWm9vbT5cclxuICApO1xyXG59XHJcblxyXG5TY3JvbGxUb3AucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEluamVjdGVkIGJ5IHRoZSBkb2N1bWVudGF0aW9uIHRvIHdvcmsgaW4gYW4gaWZyYW1lLlxyXG4gICAqIFlvdSB3b24ndCBuZWVkIGl0IG9uIHlvdXIgcHJvamVjdC5cclxuICAgKi9cclxuICB3aW5kb3c6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gQmFzaWNMYXlvdXQocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB0IH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9jYWxlLCBzZXRMb2NhbGVdID0gUmVhY3QudXNlU3RhdGUoJ3ZpVk4nKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9eyhvdXRlclRoZW1lKSA9PiBjcmVhdGVNdWlUaGVtZShvdXRlclRoZW1lLCBsb2NhbGVzW2xvY2FsZV0pfT5cclxuICAgICAgICA8UHJpbWFyeVNlYXJjaEFwcEJhcj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoaTE4bi5sYW5ndWFnZSA9PT0gJ2VuJyA/ICd2aScgOiAnZW4nKTtcclxuICAgICAgICAgICAgc2V0TG9jYWxlKGkxOG4ubGFuZ3VhZ2UgPT09ICdlbicgPyAndmlWTicgOiAnZW5VUycpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dCgnY2hhbmdlLWxhbmd1YWdlJyl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9QcmltYXJ5U2VhcmNoQXBwQmFyPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e09iamVjdC5rZXlzKGxvY2FsZXMpfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KGtleSkgPT4gYCR7a2V5LnN1YnN0cmluZygwLCAyKX0tJHtrZXkuc3Vic3RyaW5nKDIsIDQpfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xvY2FsZX1cclxuICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldExvY2FsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlRlc3RcIiB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIGNvdW50PXsyMDAwfVxyXG4gICAgICAgICAgICByb3dzUGVyUGFnZT17MTB9XHJcbiAgICAgICAgICAgIHBhZ2U9ezF9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17KCkgPT4geyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXsyMDAwfSBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgPFJhdGluZyBkZWZhdWx0VmFsdWU9ezR9IG5hbWU9XCJsb2NhbGVzXCIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8U2Nyb2xsVG9wIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICA8RmFiIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cInNjcm9sbCBiYWNrIHRvIHRvcFwiPlxyXG4gICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPlxyXG4gICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgPC9TY3JvbGxUb3A+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuQmFzaWNMYXlvdXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcclxuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnbGF5b3V0J10sXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2xheW91dCcpKEJhc2ljTGF5b3V0KTsiXSwic291cmNlUm9vdCI6IiJ9