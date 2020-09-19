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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "./node_modules/@material-ui/icons/KeyboardArrowUp.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Zoom */ "./node_modules/@material-ui/core/esm/Zoom/index.js");
/* harmony import */ var _PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../PrimarySearchAppBar */ "./components/PrimarySearchAppBar.js");




var _jsxFileName = "D:\\Personal\\Project\\React\\nextjs\\nextjs-examples\\components\\Layouts\\BasicLayout.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
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

  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_10__["default"])({
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

  return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "in": trigger,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, children));
}

_s(ScrollTop, "9Nfgud74OrM4vTJnK2jFFR7w1m0=", false, function () {
  return [useStyles, _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = ScrollTop;
ScrollTop.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element.isRequired,

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
function BasicLayout(props) {
  _s2();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      drawerOpen = _React$useState2[0],
      setDrawerOpen = _React$useState2[1];

  var toggleDrawer = function toggleDrawer(open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setDrawerOpen(open);
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), __jsx(_PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(12)).map(function () {
    return "Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et.";
  }).join('\n'))), __jsx(ScrollTop, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "secondary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }))));
}

_s2(BasicLayout, "gmvwag1i4kBQXqvPVf/B/1jOry4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL0Jhc2ljTGF5b3V0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvdHRvbSIsInNwYWNpbmciLCJyaWdodCIsIlNjcm9sbFRvcCIsInByb3BzIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJjbGFzc2VzIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJhbmNob3IiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQmFzaWNMYXlvdXQiLCJSZWFjdCIsInVzZVN0YXRlIiwiZHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJ0b2dnbGVEcmF3ZXIiLCJvcGVuIiwidHlwZSIsImtleSIsIkFycmF5IiwibWFwIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLE9BRE47QUFFSkMsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBRko7QUFHSkMsV0FBSyxFQUFFTCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBSEg7QUFEaUMsR0FB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QUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLDhEQUFEO0FBQUssU0FBSyxFQUFDLFdBQVg7QUFBdUIsUUFBSSxFQUFDLE9BQTVCO0FBQW9DLGtCQUFXLG9CQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQWhCRixDQURGO0FBd0JEOztJQWxDdUJ3QixXOztNQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjMGFiOWM3ODlmMjRlYmQwOGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1VwJztcclxuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XHJcblxyXG5pbXBvcnQgUHJpbWFyeVNlYXJjaEFwcEJhciBmcm9tICcuLi9QcmltYXJ5U2VhcmNoQXBwQmFyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gU2Nyb2xsVG9wKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgd2luZG93IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgLy8gTm90ZSB0aGF0IHlvdSBub3JtYWxseSB3b24ndCBuZWVkIHRvIHNldCB0aGUgd2luZG93IHJlZiBhcyB1c2VTY3JvbGxUcmlnZ2VyXHJcbiAgLy8gd2lsbCBkZWZhdWx0IHRvIHdpbmRvdy5cclxuICAvLyBUaGlzIGlzIG9ubHkgYmVpbmcgc2V0IGhlcmUgYmVjYXVzZSB0aGUgZGVtbyBpcyBpbiBhbiBpZnJhbWUuXHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoe1xyXG4gICAgdGFyZ2V0OiB3aW5kb3cgPyB3aW5kb3coKSA6IHVuZGVmaW5lZCxcclxuICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkOiAxMDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBhbmNob3IgPSAoZXZlbnQudGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLXRvLXRvcC1hbmNob3InKTtcclxuICAgIGlmIChhbmNob3IpIHtcclxuICAgICAgYW5jaG9yLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxab29tIGluPXt0cmlnZ2VyfT5cclxuICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9ab29tPlxyXG4gICk7XHJcbn1cclxuXHJcblNjcm9sbFRvcC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSW5qZWN0ZWQgYnkgdGhlIGRvY3VtZW50YXRpb24gdG8gd29yayBpbiBhbiBpZnJhbWUuXHJcbiAgICogWW91IHdvbid0IG5lZWQgaXQgb24geW91ciBwcm9qZWN0LlxyXG4gICAqL1xyXG4gIHdpbmRvdzogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY0xheW91dChwcm9wcykge1xyXG4gIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAob3BlbikgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0JykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0RHJhd2VyT3BlbihvcGVuKTtcclxuICB9O1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8UHJpbWFyeVNlYXJjaEFwcEJhcj5cclxuICAgICAgPC9QcmltYXJ5U2VhcmNoQXBwQmFyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggbXk9ezJ9PlxyXG4gICAgICAgICAge1suLi5uZXcgQXJyYXkoMTIpXVxyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICgpID0+IGBDcmFzIG1hdHRpcyBjb25zZWN0ZXR1ciBwdXJ1cyBzaXQgYW1ldCBmZXJtZW50dW0uXHJcbkNyYXMganVzdG8gb2RpbywgZGFwaWJ1cyBhYyBmYWNpbGlzaXMgaW4sIGVnZXN0YXMgZWdldCBxdWFtLlxyXG5Nb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuXHJcblByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ciBldC5gLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxTY3JvbGxUb3Agey4uLnByb3BzfT5cclxuICAgICAgICA8RmFiIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cInNjcm9sbCBiYWNrIHRvIHRvcFwiPlxyXG4gICAgICAgICAgPEtleWJvYXJkQXJyb3dVcEljb24gLz5cclxuICAgICAgICA8L0ZhYj5cclxuICAgICAgPC9TY3JvbGxUb3A+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==