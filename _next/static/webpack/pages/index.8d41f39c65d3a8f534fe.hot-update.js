webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layouts/BasicLayout.js":
/*!*******************************************!*\
  !*** ./components/Layouts/BasicLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicLayout; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
/* harmony import */ var _PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../PrimarySearchAppBar */ "./components/PrimarySearchAppBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "./node_modules/@material-ui/lab/esm/Pagination/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");



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
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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

  var children = props.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('viVN'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      locale = _React$useState2[0],
      setLocale = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: function theme(outerTheme) {
      return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])(outerTheme, _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_11__[locale]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params, {
        label: "Test",
        variant: "outlined",
        fullWidth: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TablePagination"], {
    count: 2000,
    rowsPerPage: 10,
    page: 1,
    component: "div",
    onChangePage: function onChangePage() {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_14__["default"], {
    count: 2000,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_15__["default"], {
    defaultValue: 4,
    name: "locales",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), children), __jsx(ScrollTop, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "secondary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })))));
}

_s2(BasicLayout, "viDUl31sKU2Ak9rcYBNza6nzi9c=");

_c2 = BasicLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL0Jhc2ljTGF5b3V0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvdHRvbSIsInNwYWNpbmciLCJyaWdodCIsIlNjcm9sbFRvcCIsInByb3BzIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJjbGFzc2VzIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJhbmNob3IiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQmFzaWNMYXlvdXQiLCJSZWFjdCIsInVzZVN0YXRlIiwibG9jYWxlIiwic2V0TG9jYWxlIiwib3V0ZXJUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwibG9jYWxlcyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJzdWJzdHJpbmciLCJ3aWR0aCIsIm5ld1ZhbHVlIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxPQUROO0FBRUpDLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQUZKO0FBR0pDLFdBQUssRUFB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QUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQTVCRixDQUZGLENBREY7QUF1Q0Q7O0lBMUN1QndCLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQ0MWYzOWM2NWQzYThmNTM0ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCBtYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1VwJztcclxuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XHJcbmltcG9ydCAqIGFzIGxvY2FsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvbG9jYWxlJztcclxuXHJcbmltcG9ydCBQcmltYXJ5U2VhcmNoQXBwQmFyIGZyb20gJy4uL1ByaW1hcnlTZWFyY2hBcHBCYXInO1xyXG5pbXBvcnQgeyBUYWJsZVBhZ2luYXRpb24sIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1JhdGluZyc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBTY3JvbGxUb3AocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB3aW5kb3cgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAvLyBOb3RlIHRoYXQgeW91IG5vcm1hbGx5IHdvbid0IG5lZWQgdG8gc2V0IHRoZSB3aW5kb3cgcmVmIGFzIHVzZVNjcm9sbFRyaWdnZXJcclxuICAvLyB3aWxsIGRlZmF1bHQgdG8gd2luZG93LlxyXG4gIC8vIFRoaXMgaXMgb25seSBiZWluZyBzZXQgaGVyZSBiZWNhdXNlIHRoZSBkZW1vIGlzIGluIGFuIGlmcmFtZS5cclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICB0YXJnZXQ6IHdpbmRvdyA/IHdpbmRvdygpIDogdW5kZWZpbmVkLFxyXG4gICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQ6IDEwMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGFuY2hvciA9IChldmVudC50YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcignI2JhY2stdG8tdG9wLWFuY2hvcicpO1xyXG4gICAgaWYgKGFuY2hvcikge1xyXG4gICAgICBhbmNob3Iuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFpvb20gaW49e3RyaWdnZXJ9PlxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1pvb20+XHJcbiAgKTtcclxufVxyXG5cclxuU2Nyb2xsVG9wLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBJbmplY3RlZCBieSB0aGUgZG9jdW1lbnRhdGlvbiB0byB3b3JrIGluIGFuIGlmcmFtZS5cclxuICAgKiBZb3Ugd29uJ3QgbmVlZCBpdCBvbiB5b3VyIHByb2plY3QuXHJcbiAgICovXHJcbiAgd2luZG93OiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljTGF5b3V0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IFJlYWN0LnVzZVN0YXRlKCd2aVZOJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXsob3V0ZXJUaGVtZSkgPT4gY3JlYXRlTXVpVGhlbWUob3V0ZXJUaGVtZSwgbG9jYWxlc1tsb2NhbGVdKX0+XHJcbiAgICAgICAgPFByaW1hcnlTZWFyY2hBcHBCYXI+XHJcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e09iamVjdC5rZXlzKGxvY2FsZXMpfVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KGtleSkgPT4gYCR7a2V5LnN1YnN0cmluZygwLCAyKX0tJHtrZXkuc3Vic3RyaW5nKDIsIDQpfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xvY2FsZX1cclxuICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldExvY2FsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlRlc3RcIiB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9QcmltYXJ5U2VhcmNoQXBwQmFyPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIGNvdW50PXsyMDAwfVxyXG4gICAgICAgICAgICByb3dzUGVyUGFnZT17MTB9XHJcbiAgICAgICAgICAgIHBhZ2U9ezF9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17KCkgPT4geyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXsyMDAwfSBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgPFJhdGluZyBkZWZhdWx0VmFsdWU9ezR9IG5hbWU9XCJsb2NhbGVzXCIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8U2Nyb2xsVG9wIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICA8RmFiIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cInNjcm9sbCBiYWNrIHRvIHRvcFwiPlxyXG4gICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPlxyXG4gICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgPC9TY3JvbGxUb3A+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9