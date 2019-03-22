(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/controllers/FetchController.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,s(t).call(this,e))).layout=null,n}var n,a,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;p(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"fetchcontroller"}},"FetchController"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"FetchController")," fetches data from a URL and stores it in its ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"data")," property."),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Option"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"DefaultValue"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"url"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"string"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}}),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The URL to fetch data from.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"init"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"object"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"{}"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - A ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters"}},"fetch RequestInit object")," containing any custom settings to apply to the request.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"parse"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"function"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"(data) => data"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - A function that accepts the raw fetched data and returns the data to store as ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"data"),".")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"log"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"false"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - When ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true"),", the controller will log its ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"data")," on each change.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"data"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"any"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"false"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - An initial value for the controller's ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"data")," property.")))),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Property"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"url"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"string"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The controller's current URL for data fetching. Changing this property will load new data from the new URL.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"data"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"any"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The controller's data, stored from its last fetch request.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"loading"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the controller is waiting for new data.")))),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Method"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"refresh()"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Load new data from the current URL.")))),r.a.createElement(o.MDXTag,{name:"p",components:t},"Example:"),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx"}},'import { Override } from "framer"\nimport { FetchController } from "framer-controller"\n\nconst controller = new FetchController({\n    url: "https://randomuser.me/api/",\n    init: {\n        mode: "no-cors",\n    },\n    parse: data => data.results[0],\n})\n\nexport const ImageContainer: Override = () => ({\n    background: controller.data && `url(${controller.data.picture.large})`,\n})\n\nexport const FetchButton: Override = () => ({\n    onClick: controller.refresh,\n})\n')))}}])&&l(n.prototype,a),m&&l(n,m),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-controllers-fetch-controller.6431fb108c9d60a09f4e.js.map