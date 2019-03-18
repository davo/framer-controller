(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/controllers/SelectionController.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,s(t).call(this,e))).layout=null,n}var n,a,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;l(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"selectioncontroller"}},"SelectionController"),o.a.createElement(r.MDXTag,{name:"p",components:t},"A ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SelectionController")," tracks one or more selected values."),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Option"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"DefaultValue"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"selected"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"string or string[]"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"null or []"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The controller's initial ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"selected")," value.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"validation"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"function"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"(any) => boolean"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - A function that accepts a value from the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"select")," method and returns whether or not to add this value to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"selected"),".")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"toggle"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - When ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true"),", selecting an already-selected item will deselect it instead.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"multiple"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - When ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true"),", the controller will track multiple selected values.")))),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Property"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"multiple"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the controller will support multiple selections at once.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"toggle"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the controller will toggle selections.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"hasSelected"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the controller has a selected value")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"validation"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"(any) => boolean"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"A method for validating values passed to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"select")," method.")))),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Method"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"select(item: any)"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Select an item. If the controller has a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"validation")," method, the item will only be selected if this method returns ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true"),". If ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"multiple")," is selected, the value will be added to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"selected")," array; if not, the new value will replace the old one. If ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"toggle")," is enabled, selecting an already-selected item will ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"deselect")," it instead.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"deselect(item: any)"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Deselect an item.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"isSelected(item: any)"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the given item is selected.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"clear()"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Remove any selected item(s).")))),o.a.createElement(r.MDXTag,{name:"p",components:t},"Example:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx"}},'import { Override } from "framer"\nimport { SelectionController } from "framer-controller"\n\nconst controller = new SelectionController({\n    selected: "A",\n    toggle: true,\n})\n\nexport const ItemA: Override = () => ({\n    opacity: controller.isSelected("A") ? 1 : 0.5,\n    onClick: () => controller.select("A"),\n})\n\nexport const ItemB: Override = () => ({\n    opacity: controller.isSelected("B") ? 1 : 0.5,\n    onClick: () => controller.select("B"),\n})\n\nexport const ClearButton: Override = () => ({\n    opacity: controller.hasSelected ? 1 : 0.5,\n    onClick: controller.clear,\n})\n')))}}])&&p(n.prototype,a),m&&p(n,m),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-controllers-selection-controller.d6eea6377399bccb707c.js.map