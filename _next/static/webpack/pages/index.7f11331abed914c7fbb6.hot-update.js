webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PrimarySearchAppBar.js":
/*!*******************************************!*\
  !*** ./components/PrimarySearchAppBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrimarySearchAppBar; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");



var _jsxFileName = "D:\\Personal\\Project\\React\\nextjs\\nextjs-examples\\components\\PrimarySearchAppBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["fade"])(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }),
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: '20ch'
    }),
    sectionDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'none'
    }, theme.breakpoints.up('md'), {
      display: 'flex'
    }),
    sectionMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'flex'
    }, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    }
  };
});
function PrimarySearchAppBar() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      mobileMoreAnchorEl = _React$useState4[0],
      setMobileMoreAnchorEl = _React$useState4[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      drawerOpen = _React$useState6[0],
      setDrawerOpen = _React$useState6[1];

  var toggleDrawer = function toggleDrawer(open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setDrawerOpen(open);
    };
  };

  var list = function list(isMobile) {
    return __jsx("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_19__["default"])(classes.list, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.fullList, isMobile)),
      role: "presentation",
      onClick: toggleDrawer(false),
      onKeyDown: toggleDrawer(false),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["List"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }
    }, ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["ListItem"], {
        button: true,
        key: text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["ListItemIcon"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }, index % 2 === 0 ? __jsx(InboxIcon, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 46
        }
      }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 62
        }
      })), __jsx(ListItemText, {
        primary: text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }
      }));
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 7
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["List"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }
    }, ['All mail', 'Trash', 'Spam'].map(function (text, index) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["ListItem"], {
        button: true,
        key: text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["ListItemIcon"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, index % 2 === 0 ? __jsx(InboxIcon, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 46
        }
      }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 62
        }
      })), __jsx(ListItemText, {
        primary: text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }));
    })));
  };

  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleMobileMenuClose = function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  };

  var handleMenuClose = function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  var handleMobileMenuOpen = function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  var menuId = 'primary-search-account-menu';

  var renderMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, "Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, "My account"));

  var mobileMenuId = 'primary-search-account-menu-mobile';

  var renderMobileMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__["default"], {
    badgeContent: 4,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, "Messages")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__["default"], {
    badgeContent: 11,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, "Notifications")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleProfileMenuOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }, "Profile")));

  return __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "back-to-top-anchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, "Material-UI"), __jsx("div", {
    className: classes.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_8__["default"], {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__["default"], {
    badgeContent: 4,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "show 17 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__["default"], {
    badgeContent: 17,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 15
    }
  }))))), renderMobileMenu, renderMenu, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Drawer"], {
    open: drawerOpen,
    onClose: toggleDrawer(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }
  }, list(false)));
}

_s(PrimarySearchAppBar, "h756tHewfMunVSc26sSkf08rXLc=", false, function () {
  return [useStyles];
});

_c = PrimarySearchAppBar;

var _c;

$RefreshReg$(_c, "PrimarySearchAppBar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmltYXJ5U2VhcmNoQXBwQmFyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImdyb3ciLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImRpc3BsYXkiLCJicmVha3BvaW50cyIsInVwIiwic2VhcmNoIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJzZWFyY2hJY29uIiwicGFkZGluZyIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dFJvb3QiLCJjb2xvciIsImlucHV0SW5wdXQiLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsInNlY3Rpb25EZXNrdG9wIiwic2VjdGlvbk1vYmlsZSIsImxpc3QiLCJmdWxsTGlzdCIsIlByaW1hcnlTZWFyY2hBcHBCYXIiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2JpbGVNb3JlQW5jaG9yRWwiLCJzZXRNb2JpbGVNb3JlQW5jaG9yRWwiLCJpc01lbnVPcGVuIiwiQm9vbGVhbiIsImlzTW9iaWxlTWVudU9wZW4iLCJkcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsInRvZ2dsZURyYXdlciIsIm9wZW4iLCJldmVudCIsInR5cGUiLCJrZXkiLCJpc01vYmlsZSIsImNsc3giLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTW9iaWxlTWVudUNsb3NlIiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTW9iaWxlTWVudU9wZW4iLCJtZW51SWQiLCJyZW5kZXJNZW51IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibW9iaWxlTWVudUlkIiwicmVuZGVyTW9iaWxlTWVudSIsInJvb3QiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURILEtBSjJCO0FBT3ZDQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFO0FBRE4sT0FFRlAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZFLEVBRTJCO0FBQzVCRixhQUFPLEVBQUU7QUFEbUIsS0FGM0IsQ0FQa0M7QUFhdkNHLFVBQU0sRUFBRTtBQUNOQyxjQUFRLEVBQUUsVUFETjtBQUVKQyxrQkFBWSxFQUFFWixLQUFLLENBQUNhLEtBQU4sQ0FBWUQsWUFGdEI7QUFHSkUscUJBQWUsRUFBRUMscUVBQUksQ0FBQ2YsS0FBSyxDQUFDZ0IsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUF0QixFQUE2QixJQUE3QixDQUhqQjtBQUlKLGlCQUFXO0FBQ1RKLHVCQUFlLEVBQUVDLHFFQUFJLENBQUNmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FBdEIsRUFBNkIsSUFBN0I7QUFEWixPQUpQO0FBT0pkLGlCQUFXLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FQVDtBQVFKYyxnQkFB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LEVBV0UsTUFBQyxvRUFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsa0JBQVcseUJBRmI7QUFHRSxxQkFBZWdDLE1BSGpCO0FBSUUscUJBQWMsTUFKaEI7QUFLRSxXQUFPLEVBQUVMLHFCQUxYO0FBTUUsU0FBSyxFQUFDLFNBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBWEYsQ0EzQkYsRUFpREU7QUFBSyxhQUFTLEVBQUV0QixPQUFPLENBQUNKLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0Usa0JBQVcsV0FEYjtBQUVFLHFCQUFlbUMsWUFGakI7QUFHRSxxQkFBYyxNQUhoQjtBQUlFLFdBQU8sRUFBRUwsb0JBSlg7QUFLRSxTQUFLLEVBQUMsU0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQWpERixDQURGLENBREYsRUFnRUdNLGdCQWhFSCxFQWlFR0osVUFqRUgsRUFtRUUsTUFBQyx5REFBRDtBQUFRLFFBQUksRUFBRWxCLFVBQWQ7QUFBMEIsV0FBTyxFQUFFRSxZQUFZLENBQUMsS0FBRCxDQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NmLElBQUksQ0FBQyxLQUFELENBREwsQ0FuRUYsQ0FERjtBQXlFRDs7R0FoTXVCRSxtQjtVQUNOeEMsUzs7O0tBRE13QyxtQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZjExMzMxYWJlZDkxNGM3ZmJiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2UnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2UnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydCc7XHJcbmltcG9ydCB7IERyYXdlciwgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtSWNvbiwgRGl2aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBncm93OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMTUpLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJyksXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICB3aWR0aDogJzIwY2gnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25EZXNrdG9wOiB7XHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uTW9iaWxlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICB3aWR0aDogMjUwLFxyXG4gIH0sXHJcbiAgZnVsbExpc3Q6IHtcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpbWFyeVNlYXJjaEFwcEJhcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9iaWxlTW9yZUFuY2hvckVsLCBzZXRNb2JpbGVNb3JlQW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzTWVudU9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBpc01vYmlsZU1lbnVPcGVuID0gQm9vbGVhbihtb2JpbGVNb3JlQW5jaG9yRWwpO1xyXG4gIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAob3BlbikgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0JykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0RHJhd2VyT3BlbihvcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0ID0gKGlzTW9iaWxlKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxpc3QsIHtcclxuICAgICAgICBbY2xhc3Nlcy5mdWxsTGlzdF06IGlzTW9iaWxlLFxyXG4gICAgICB9KX1cclxuICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihmYWxzZSl9XHJcbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge1snSW5ib3gnLCAnU3RhcnJlZCcsICdTZW5kIGVtYWlsJywgJ0RyYWZ0cyddLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn08L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7WydBbGwgbWFpbCcsICdUcmFzaCcsICdTcGFtJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e3RleHR9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPntpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIGhhbmRsZU1vYmlsZU1lbnVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWVudUlkID0gJ3ByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudSc7XHJcbiAgY29uc3QgcmVuZGVyTWVudSA9IChcclxuICAgIDxNZW51XHJcbiAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICBpZD17bWVudUlkfVxyXG4gICAgICBrZWVwTW91bnRlZFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAncmlnaHQnIH19XHJcbiAgICAgIG9wZW49e2lzTWVudU9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZU1lbnVDbG9zZX1cclxuICAgID5cclxuICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbG9zZX0+UHJvZmlsZTwvTWVudUl0ZW0+XHJcbiAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG1vYmlsZU1lbnVJZCA9ICdwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUtbW9iaWxlJztcclxuICBjb25zdCByZW5kZXJNb2JpbGVNZW51ID0gKFxyXG4gICAgPE1lbnVcclxuICAgICAgYW5jaG9yRWw9e21vYmlsZU1vcmVBbmNob3JFbH1cclxuICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICBpZD17bW9iaWxlTWVudUlkfVxyXG4gICAgICBrZWVwTW91bnRlZFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAncmlnaHQnIH19XHJcbiAgICAgIG9wZW49e2lzTW9iaWxlTWVudU9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZU1vYmlsZU1lbnVDbG9zZX1cclxuICAgID5cclxuICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IDQgbmV3IG1haWxzXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICA8TWFpbEljb24gLz5cclxuICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxwPk1lc3NhZ2VzPC9wPlxyXG4gICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgMTEgbmV3IG5vdGlmaWNhdGlvbnNcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezExfSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cclxuICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XHJcbiAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59PlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudVwiXHJcbiAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxwPlByb2ZpbGU8L3A+XHJcbiAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXIgaWQ9XCJiYWNrLXRvLXRvcC1hbmNob3JcIj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIodHJ1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XHJcbiAgICAgICAgICAgIE1hdGVyaWFsLVVJXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cclxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcclxuICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgNCBuZXcgbWFpbHNcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyAxNyBuZXcgbm90aWZpY2F0aW9uc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezE3fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17bWVudUlkfVxyXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17bW9iaWxlTWVudUlkfVxyXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIHtyZW5kZXJNb2JpbGVNZW51fVxyXG4gICAgICB7cmVuZGVyTWVudX1cclxuICAgICAgXHJcbiAgICAgIDxEcmF3ZXIgb3Blbj17ZHJhd2VyT3Blbn0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKGZhbHNlKX0+XHJcbiAgICAgIHtsaXN0KGZhbHNlKX1cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=