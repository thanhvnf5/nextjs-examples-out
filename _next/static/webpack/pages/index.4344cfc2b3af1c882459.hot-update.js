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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);



var _jsxFileName = "D:\\Personal\\Project\\React\\nextjs\\nextjs-examples\\components\\PrimarySearchAppBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement;



















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
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
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.common.white, 0.25)
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_20___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_20___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      mobileMoreAnchorEl = _React$useState4[0],
      setMobileMoreAnchorEl = _React$useState4[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_20___default.a.useState(true),
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
        lineNumber: 108,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }
    }, ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
        button: true,
        key: text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }
      }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 46
        }
      }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 62
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
        primary: text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }
      }));
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }
    }, ['All mail', 'Trash', 'Spam'].map(function (text, index) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
        button: true,
        key: text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 46
        }
      }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 62
        }
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
        primary: text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
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

  var renderMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 155,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, "Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, "My account"));

  var mobileMenuId = 'primary-search-account-menu-mobile';

  var renderMobileMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 171,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    badgeContent: 4,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, "Messages")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    badgeContent: 11,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, "Notifications")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleProfileMenuOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, "Profile")));

  return __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 5
    }
  }, "aaa1111111111111111", __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "back-to-top-anchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, "Material-UI"), __jsx("div", {
    className: classes.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 230,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    badgeContent: 4,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "show 17 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    badgeContent: 17,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 15
    }
  }))))), renderMobileMenu, renderMenu, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    open: drawerOpen,
    onClose: toggleDrawer(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmltYXJ5U2VhcmNoQXBwQmFyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImdyb3ciLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImRpc3BsYXkiLCJicmVha3BvaW50cyIsInVwIiwic2VhcmNoIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJzZWFyY2hJY29uIiwicGFkZGluZyIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbnB1dFJvb3QiLCJjb2xvciIsImlucHV0SW5wdXQiLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsInNlY3Rpb25EZXNrdG9wIiwic2VjdGlvbk1vYmlsZSIsImxpc3QiLCJmdWxsTGlzdCIsIlByaW1hcnlTZWFyY2hBcHBCYXIiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2JpbGVNb3JlQW5jaG9yRWwiLCJzZXRNb2JpbGVNb3JlQW5jaG9yRWwiLCJpc01lbnVPcGVuIiwiQm9vbGVhbiIsImlzTW9iaWxlTWVudU9wZW4iLCJkcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsInRvZ2dsZURyYXdlciIsIm9wZW4iLCJldmVudCIsInR5cGUiLCJrZXkiLCJpc01vYmlsZSIsImNsc3giLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTW9iaWxlTWVudUNsb3NlIiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTW9iaWxlTWVudU9wZW4iLCJtZW51SWQiLCJyZW5kZXJNZW51IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibW9iaWxlTWVudUlkIiwicmVuZGVyTW9iaWxlTWVudSIsInJvb3QiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURpQztBQUl2Q0MsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFESCxLQUoyQjtBQU92Q0MsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRTtBQUROLE9BRUZQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGRSxFQUUyQjtBQUM1QkYsYUFBTyxFQUFFO0FBRG1CLEtBRjNCLENBUGtDO0FBYXZDRyxVQUFNLEVBQUU7QUFDTkMsY0FBUSxFQUFFLFVBRE47QUFFSkMsa0JBQVksRUFBRVosS0FBSyxDQUFDYSxLQUFOLENBQVlELFlBRnRCO0FBR0pFLHFCQUFlLEVBQUVDLHFFQUFJLENBQUNmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FBdEIsRUFBNkIsSUFBN0IsQ0FIakI7QUFJSixpQkFBVztBQUNUSix1QkFBZSxFQUFFQyxxRUFBSSxDQUFDZixLQUFLLENBQUNnQixPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBQXRCLEVBQTZCLElBQTdCO0FBRFosT0FKUDtBQU9KZCxpQkFBVyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBUFQ7QUFR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REYsQ0FERixDQU5GLEVBV0UsTUFBQyxvRUFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsa0JBQVcseUJBRmI7QUFHRSxxQkFBZWdDLE1BSGpCO0FBSUUscUJBQWMsTUFKaEI7QUFLRSxXQUFPLEVBQUVMLHFCQUxYO0FBTUUsU0FBSyxFQUFDLFNBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBWEYsQ0EzQkYsRUFpREU7QUFBSyxhQUFTLEVBQUV0QixPQUFPLENBQUNKLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0Usa0JBQVcsV0FEYjtBQUVFLHFCQUFlbUMsWUFGakI7QUFHRSxxQkFBYyxNQUhoQjtBQUlFLFdBQU8sRUFBRUwsb0JBSlg7QUFLRSxTQUFLLEVBQUMsU0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQWpERixDQURGLENBREYsRUFnRUdNLGdCQWhFSCxFQWlFR0osVUFqRUgsRUFtRUUsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBRWxCLFVBQWQ7QUFBMEIsV0FBTyxFQUFFRSxZQUFZLENBQUMsS0FBRCxDQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NmLElBQUksQ0FBQyxLQUFELENBREwsQ0FuRUYsQ0FERjtBQXlFRDs7R0FoTXVCRSxtQjtVQUNOeEMsUzs7O0tBRE13QyxtQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MzQ0Y2ZjMmIzYWYxYzg4MjQ1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGl2aWRlciwgRHJhd2VyLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydCc7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6ICdpbmhlcml0JyxcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcpLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgd2lkdGg6ICcyMGNoJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uRGVza3RvcDoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgd2lkdGg6IDI1MCxcclxuICB9LFxyXG4gIGZ1bGxMaXN0OiB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaW1hcnlTZWFyY2hBcHBCYXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vYmlsZU1vcmVBbmNob3JFbCwgc2V0TW9iaWxlTW9yZUFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBpc01lbnVPcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaXNNb2JpbGVNZW51T3BlbiA9IEJvb2xlYW4obW9iaWxlTW9yZUFuY2hvckVsKTtcclxuICBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldERyYXdlck9wZW4ob3Blbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdCA9IChpc01vYmlsZSkgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5saXN0LCB7XHJcbiAgICAgICAgW2NsYXNzZXMuZnVsbExpc3RdOiBpc01vYmlsZSxcclxuICAgICAgfSl9XHJcbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfVxyXG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtbJ0luYm94JywgJ1N0YXJyZWQnLCAnU2VuZCBlbWFpbCcsICdEcmFmdHMnXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17dGV4dH0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+e2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge1snQWxsIG1haWwnLCAnVHJhc2gnLCAnU3BhbSddLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj57aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn08L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51T3BlbiA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTW9yZUFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVJZCA9ICdwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnUnO1xyXG4gIGNvbnN0IHJlbmRlck1lbnUgPSAoXHJcbiAgICA8TWVudVxyXG4gICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdyaWdodCcgfX1cclxuICAgICAgaWQ9e21lbnVJZH1cclxuICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICBvcGVuPXtpc01lbnVPcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xvc2V9PlByb2ZpbGU8L01lbnVJdGVtPlxyXG4gICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTWVudUNsb3NlfT5NeSBhY2NvdW50PC9NZW51SXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG5cclxuICBjb25zdCBtb2JpbGVNZW51SWQgPSAncHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51LW1vYmlsZSc7XHJcbiAgY29uc3QgcmVuZGVyTW9iaWxlTWVudSA9IChcclxuICAgIDxNZW51XHJcbiAgICAgIGFuY2hvckVsPXttb2JpbGVNb3JlQW5jaG9yRWx9XHJcbiAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdyaWdodCcgfX1cclxuICAgICAgaWQ9e21vYmlsZU1lbnVJZH1cclxuICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICBvcGVuPXtpc01vYmlsZU1lbnVPcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVNb2JpbGVNZW51Q2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17NH0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8cD5NZXNzYWdlczwvcD5cclxuICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IDExIG5ldyBub3RpZmljYXRpb25zXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXsxMX0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8cD5Ob3RpZmljYXRpb25zPC9wPlxyXG4gICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlUHJvZmlsZU1lbnVPcGVufT5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnVcIlxyXG4gICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWNjb3VudENpcmNsZSAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8cD5Qcm9maWxlPC9wPlxyXG4gICAgICA8L01lbnVJdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5hYWExMTExMTExMTExMTExMTExXHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICA8VG9vbGJhciBpZD1cImJhY2stdG8tdG9wLWFuY2hvclwiPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcih0cnVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cclxuICAgICAgICAgICAgTWF0ZXJpYWwtVUlcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2VhcmNoJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8TWFpbEljb24gLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IDE3IG5ldyBub3RpZmljYXRpb25zXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MTd9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXttZW51SWR9XHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByb2ZpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyBtb3JlXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXttb2JpbGVNZW51SWR9XHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVPcGVufVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TW9yZUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAge3JlbmRlck1vYmlsZU1lbnV9XHJcbiAgICAgIHtyZW5kZXJNZW51fVxyXG4gICAgICBcclxuICAgICAgPERyYXdlciBvcGVuPXtkcmF3ZXJPcGVufSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfT5cclxuICAgICAge2xpc3QoZmFsc2UpfVxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==