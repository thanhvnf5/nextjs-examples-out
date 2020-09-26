webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layouts/BasicLayout.js":
/*!*******************************************!*\
  !*** ./components/Layouts/BasicLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "./node_modules/@material-ui/icons/KeyboardArrowUp.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Zoom */ "./node_modules/@material-ui/core/esm/Zoom/index.js");
/* harmony import */ var _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/locale */ "./node_modules/@material-ui/core/locale/index.js");
/* harmony import */ var _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../PrimarySearchAppBar */ "./components/PrimarySearchAppBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "./node_modules/@material-ui/lab/esm/Pagination/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");



var _jsxFileName = "D:\\Personal\\Project\\React\\nextjs\\nextjs-examples\\components\\Layouts\\BasicLayout.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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

  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_6__["default"])({
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

  return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  return [useStyles, _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = ScrollTop;
ScrollTop.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired,

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

function BasicLayout(props) {
  _s2();

  var _this = this;

  var children = props.children,
      t = props.t;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('viVN'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      locale = _React$useState2[0],
      setLocale = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: function theme(outerTheme) {
      return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_11__[locale]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    onClick: function onClick(event, newValue) {
      _i18n__WEBPACK_IMPORTED_MODULE_12__["i18n"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_12__["i18n"].language === 'en' ? 'vi' : 'en');
      setLocale(newValue);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, t('change-language'))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_17__["default"], {
    options: Object.keys(_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_11__),
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
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
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
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["TablePagination"], {
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
  }), __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
    count: 2000,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_16__["default"], {
    defaultValue: 4,
    name: "locales",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }), children), __jsx(ScrollTop, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "secondary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_12__["withTranslation"])('common')(BasicLayout));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL0Jhc2ljTGF5b3V0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvdHRvbSIsInNwYWNpbmciLCJyaWdodCIsIlNjcm9sbFRvcCIsInByb3BzIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJjbGFzc2VzIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJhbmNob3IiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQmFzaWNMYXlvdXQiLCJ0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvY2FsZSIsInNldExvY2FsZSIsIm91dGVyVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImxvY2FsZXMiLCJuZXdWYWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImxhbmd1YWdlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInN1YnN0cmluZyIsIndpZHRoIiwicGFyYW1zIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxPQURO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LElBZEYsRUFxQkUsTUFBQyxvRUFBRDtBQUFZLFNBQUssRUFBRSxJQUFuQjtBQUF5QixTQUFLLEVBQUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixFQXNCRSxNQUFDLGdFQUFEO0FBQVEsZ0JBQVksRUFBRSxDQUF0QjtBQUF5QixRQUFJLEVBQUMsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQXVCR3pDLFFBdkJILENBWkYsRUFxQ0UsTUFBQyxTQUFELHlGQUFlRCxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLDZEQUFEO0FBQUssU0FBSyxFQUFDLFdBQVg7QUFBdUIsUUFBSSxFQUFDLE9BQTVCO0FBQW9DLGtCQUFXLG9CQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQXJDRixDQUZGLENBREY7QUFnREQ7O0lBbkRRd0IsVzs7TUFBQUEsVztBQXFETW1CLDZIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCbkIsV0FBMUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYTZkMTQ5ZmNiNDZiOTU4YzgxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIG1ha2VTdHlsZXMsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXAnO1xyXG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcclxuaW1wb3J0ICogYXMgbG9jYWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9sb2NhbGUnO1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuaW1wb3J0IFByaW1hcnlTZWFyY2hBcHBCYXIgZnJvbSAnLi4vUHJpbWFyeVNlYXJjaEFwcEJhcic7XHJcbmltcG9ydCB7IFRhYmxlUGFnaW5hdGlvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb24nO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUmF0aW5nJztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFNjcm9sbFRvcChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHdpbmRvdyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIC8vIE5vdGUgdGhhdCB5b3Ugbm9ybWFsbHkgd29uJ3QgbmVlZCB0byBzZXQgdGhlIHdpbmRvdyByZWYgYXMgdXNlU2Nyb2xsVHJpZ2dlclxyXG4gIC8vIHdpbGwgZGVmYXVsdCB0byB3aW5kb3cuXHJcbiAgLy8gVGhpcyBpcyBvbmx5IGJlaW5nIHNldCBoZXJlIGJlY2F1c2UgdGhlIGRlbW8gaXMgaW4gYW4gaWZyYW1lLlxyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgIHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQsXHJcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMTAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgYW5jaG9yID0gKGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKCcjYmFjay10by10b3AtYW5jaG9yJyk7XHJcbiAgICBpZiAoYW5jaG9yKSB7XHJcbiAgICAgIGFuY2hvci5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Wm9vbSBpbj17dHJpZ2dlcn0+XHJcbiAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvWm9vbT5cclxuICApO1xyXG59XHJcblxyXG5TY3JvbGxUb3AucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEluamVjdGVkIGJ5IHRoZSBkb2N1bWVudGF0aW9uIHRvIHdvcmsgaW4gYW4gaWZyYW1lLlxyXG4gICAqIFlvdSB3b24ndCBuZWVkIGl0IG9uIHlvdXIgcHJvamVjdC5cclxuICAgKi9cclxuICB3aW5kb3c6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gQmFzaWNMYXlvdXQocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB0IH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9jYWxlLCBzZXRMb2NhbGVdID0gUmVhY3QudXNlU3RhdGUoJ3ZpVk4nKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9eyhvdXRlclRoZW1lKSA9PiBjcmVhdGVNdWlUaGVtZShvdXRlclRoZW1lLCBsb2NhbGVzW2xvY2FsZV0pfT5cclxuICAgICAgICA8UHJpbWFyeVNlYXJjaEFwcEJhcj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoaTE4bi5sYW5ndWFnZSA9PT0gJ2VuJyA/ICd2aScgOiAnZW4nKTtcclxuICAgICAgICAgICAgc2V0TG9jYWxlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3QoJ2NoYW5nZS1sYW5ndWFnZScpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUHJpbWFyeVNlYXJjaEFwcEJhcj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBvcHRpb25zPXtPYmplY3Qua2V5cyhsb2NhbGVzKX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhrZXkpID0+IGAke2tleS5zdWJzdHJpbmcoMCwgMil9LSR7a2V5LnN1YnN0cmluZygyLCA0KX1gfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzAwIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMb2NhbGUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJUZXN0XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgICBjb3VudD17MjAwMH1cclxuICAgICAgICAgICAgcm93c1BlclBhZ2U9ezEwfVxyXG4gICAgICAgICAgICBwYWdlPXsxfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZVBhZ2U9eygpID0+IHsgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UGFnaW5hdGlvbiBjb3VudD17MjAwMH0gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgIDxSYXRpbmcgZGVmYXVsdFZhbHVlPXs0fSBuYW1lPVwibG9jYWxlc1wiIC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPFNjcm9sbFRvcCB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgPEZhYiBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJzY3JvbGwgYmFjayB0byB0b3BcIj5cclxuICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dVcEljb24gLz5cclxuICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgIDwvU2Nyb2xsVG9wPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29tbW9uJykoQmFzaWNMYXlvdXQpOyJdLCJzb3VyY2VSb290IjoiIn0=