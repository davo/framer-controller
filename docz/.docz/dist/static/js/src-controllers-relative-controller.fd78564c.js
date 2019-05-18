(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/controllers/RelativeController.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,s(t).call(this,e))).layout=null,n}var n,a,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;m(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"fetchcontroller"}},"FetchController"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"FetchController")," fetches data from a URL and stores it in its ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"data"),"\nproperty."),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Option"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"DefaultValue"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"input"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"object"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}}),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," The controller's initial ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"state.input")," value.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"converter"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"function"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"(input) => output"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - A function that accepts the input and returns the value of output.")))),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Property"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"input"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"string"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The props to convert.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"output"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"any"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The controller's converted input props.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"converter"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"function"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Get or set a function that accepts the input and returns the value of output.")))),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Method"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"animate()"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Animate the controller's input (and convert it to output).")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"setInput(props, initial)"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Set the controller's input state. If ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"initial")," is true, this method will only fire once.")))),r.a.createElement(o.MDXTag,{name:"p",components:t},"Example:"),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx"}},"import { Override } from 'framer'\nimport { RelativeController } from 'framer-controller'\n\nconst controller = new FetchController({\n    output: (input) => ({\n    frameBLeft: input.left / 2,\n    frameCTop: input.left\n  })\n})\n\nexport const FrameA: Override = (props) => {\n  controller.setInput(props, true)\n  return {\n    left: controller.input.left\n    onClick: () => {\n      controller.animate({\n        left: 100,\n        duration: 2000\n      })\n    }\n  }\n})\n\nexport const FrameB: Override = () => ({\n    left: controller.output.frameBLeft,\n})\n\nexport const FrameC: Override = () => ({\n    left: controller.output.frameCLeft,\n})\n")))}}])&&l(n.prototype,a),p&&l(n,p),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-controllers-relative-controller.e8850a666bd3b65ec991.js.map