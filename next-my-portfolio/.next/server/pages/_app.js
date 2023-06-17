"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/themes/default.js
/* harmony default export */ const themes_default = ({
    // Temp fonts
    fonts: {
        title: "Space Grotesk, sans-serif",
        main: "Space Grotesk, sans-serif"
    },
    // Colors for layout
    colors: {
        primary1: "hsl(204,23.8%,95.9%)",
        background1: "#0F1624",
        accent1: "hsl(34.9,98.6%,72.9%)",
        button: "hsl(205.1,100%,36.1%)",
        background2: "hsl(232.7,27.3%,23.7%)"
    },
    // Breakpoints for responsive design
    breakpoints: {
        sm: "screen and (max-width: 640px)",
        md: "screen and (max-width: 768px)",
        lg: "screen and (max-width: 1024px)",
        xl: "screen and (max-width: 1280px)"
    }
});

;// CONCATENATED MODULE: external "styled-normalize"
const external_styled_normalize_namespaceObject = require("styled-normalize");
;// CONCATENATED MODULE: ./src/styles/globals.js


const GlobalStyles = external_styled_components_.createGlobalStyle`
  ${external_styled_normalize_namespaceObject.normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props)=>props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props)=>props.theme.colors.background1};
    color: ${(props)=>props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props)=>props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;
/* harmony default export */ const globals = (GlobalStyles);

;// CONCATENATED MODULE: ./src/styles/theme.js




const Theme = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(external_styled_components_.ThemeProvider, {
        theme: themes_default,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(globals, {}),
            children
        ]
    });
/* harmony default export */ const theme = (Theme);

;// CONCATENATED MODULE: ./src/pages/_app.js


function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(theme, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(133)));
module.exports = __webpack_exports__;

})();