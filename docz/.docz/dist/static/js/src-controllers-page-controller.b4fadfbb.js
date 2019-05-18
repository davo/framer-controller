(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/controllers/PageController.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,s(t).call(this,e))).layout=null,n}var n,a,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;p(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"pagecontroller"}},"PageController"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"PageController")," is specially written to control Framer's Page component. See the example for proper usage."),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Option"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"DefaultValue"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"currentPage"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"number"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"0"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The initial currentPage for the controller.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"loop"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"false"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - When true, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"snapToNextPage")," will move from the last page to the first page, and vis versa.")))),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Property"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"currentPage"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"number"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The controller's current page.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"totalPages"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"number"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The controller's total number of pages.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"progress"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"number"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"A normalized value, 0 when the current page is the pager's first page and 1 when the current page is the pager's last page.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"loop"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the page controller can navigate from the last page to the first page, and vis versa.")))),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Method"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"snapToNextPage(direction: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"left")," or ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"right"),")"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Change the page ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"left")," or ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"right"),".")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"snapToPage(page: number)"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Change the page to the given page index.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"changePage(delta: number)"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Change the current page by the given number.")))),r.a.createElement(o.MDXTag,{name:"p",components:t},"Example:"),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx"}},'import { Override } from "framer"\nimport { PageController } from "framer-controller"\n\nconst controller = new PageController()\n\nexport const PageComponent: Override = () => controller.state\n\nexport const NextPage: Override = () => ({\n    opacity: controller.progress < 1 ? 1 : 0.5,\n    onClick: () => controller.snapToNextPage("right"),\n})\n\nexport const PrevPage: Override = () => ({\n    opacity: controller.progress > 0 ? 1 : 0.5,\n    onClick: () => controller.snapToNextPage("left"),\n})\n\n// Apply this one to a text element\nexport const PageNumber: Override = () => ({\n    text: controller.currentPage,\n})\n')))}}])&&l(n.prototype,a),m&&l(n,m),t}();i.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-controllers-page-controller.bf42ddb2222f036bbe98.js.map