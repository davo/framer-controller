(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/controllers/FormController.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a("./node_modules/react/index.js"),r=a.n(n),o=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=c(this,s(t).call(this,e))).layout=null,a}var a,n,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;l(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"formcontroller"}},"FormController"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"FormController")," manages a form's state. Its constructor takes an ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"options")," object comprised of ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"FormField")," objects."),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Property"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"DefaultValue"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"defaultValue"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"any"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"null"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - The field's initial value.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"validation"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"(value) => boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"(state) => true"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - method that takes the field's data value and returns a boolean, determining whether the field is valid.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"hidden"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"(state) => boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"(state) => false"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - a boolean (or method that takes the Form's state and returns a boolean) determining whether the field should be hidden.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"required"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean or (state) => boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"false"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - a boolean (or method that takes the Form's state and returns a boolean) determining whether the field is required.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"errorText"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"string or (value) => string"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"null"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"Optional")," - a string (or method that takes the field's value and returns a string) to show when the field is invalid.")))),r.a.createElement(o.MDXTag,{name:"p",components:t},"Each object will be stored in state under ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"data")," as an object with the following properties:"),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Property"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"value"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"any"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The field's current value - either its ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"defaultValue")," or the value set using the controller's ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"setValue")," method.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"valid"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the field's value has passed its validation check.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"errorText"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"string"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The field's current error text, if any, depending on its value.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"required"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the field is currently required.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"hidden"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the field is currently hidden.")))),r.a.createElement(o.MDXTag,{name:"p",components:t},"The ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"FormController")," itself has the following properties and methods:"),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Property"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"fields"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"object"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The controller's current fields.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"data"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"object"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"The controller's current data, with a state for each field.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"ready"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"boolean"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Whether the form is complete. A form is complete when each of its required, non-hidden data states are valid.")))),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Method"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"left"}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"setValue(id, value)"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"left"}},"Set the value of the given field.")))),r.a.createElement(o.MDXTag,{name:"p",components:t},"Example:"),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx"}},'import { Override } from "framer"\nimport { FormController } from "framer-controller"\n\nconst controller = new FormController({\n    name: {\n        defaultValue: "",\n        required: true,\n        validation: v => v.includes(" "),\n        errorText: (v) => {\n      if (v.split("").length > 2) {\n        "Please enter only your first and last name.",\n      } else {\n        "Please enter your first and last name.",\n      }\n    },\n    email: {\n        defaultValue: "",\n        validation: v => v.includes("@") && v.includes("."),\n        errorText: () => "Please enter a valid email address.",\n        required: true,\n    },\n})\n\n// Name\n\nexport const NameErrorText: Override = () => ({\n    $value: controller.data.name.errorText,\n})\n\nexport const NameInput: Override = () => ({\n    value: controller.data.name.value,\n    onValueChange: value => controller.setValue("name", value),\n})\n\n// Email\n\nexport const EmailErrorText: Override = () => ({\n    $value: controller.data.email.errorText,\n})\n\nexport const EmailInput: Override = () => ({\n    value: controller.data.email.value,\n    onValueChange: value => controller.setValue("email", value),\n})\n\n// Button\n\nexport const ContinueButton: Override = () => ({\n    disabled: !controller.ready,\n})\n')))}}])&&p(a.prototype,n),m&&p(a,m),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-controllers-form-controller.d6eea6377399bccb707c.js.map