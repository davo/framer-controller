"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Controller");
/**
 * Control forms.
 * When creating a form, use an object to define the form's `fields`.
 * For each field, provide a set of optional properties used to
 * determine the field's `data` entry:
     * - `defaultValue` - a value for new or reset fields
     * - `required` - a boolean (or method that takes the Form's state and returns a boolean)
     * - `validation` - method that takes the field's data value and returns a boolean
     * - `errorText` - a string (or method that takes the Form's state and returns a string)
     * - `hidden` - a boolean (or method that takes the Form's state and returns a boolean)
   * @example```
const controller = new FormController({
  name: {
    defaultValue: "",
    validation: (v) => v.includes(" "),
    errorText: "Please provide a first and last name.",
    required: true,
    hidden: false
  }
})```
 */
class FormController extends Controller_1.Controller {
    constructor(options) {
        super({
            fields: options,
            data: Object.keys(options).reduce((a, id) => (Object.assign({}, a, { [id]: {
                    value: options[id].defaultValue,
                    errorText: "",
                    valid: false,
                    hidden: false,
                    required: false,
                } })), {}),
            ready: false,
        });
        /**
         * Set the value of one of the form's data entries.
         * @param {keyof Form['fields']} id - The data entry's `id`.
         * @param {*} value - The data entry's new value.
         */
        this.setValue = (id, value) => {
            const { data } = this.state;
            const state = this.getComputedState(Object.assign({}, data, { [id]: Object.assign({}, data[id], { value }) }));
            this.setState(state);
        };
        this.setState(this.getComputedState(this.state.data));
    }
    /**
     * Return the next state, given a set of incoming entries.
     * @param incoming
     */
    getComputedState(incoming = {}) {
        let { fields, data } = this.state;
        let ready = true;
        // Merge in new entries
        data = Object.assign({}, data, incoming);
        // Set value-computed properties
        data = Object.keys(data).reduce((a, id) => {
            const field = this.state.fields[id];
            const { value } = data[id];
            const { validation, errorText: fieldErrorText } = field;
            let valid = false;
            let errorText = "";
            // Does the field have value, and does that value pass validation?
            if (value !== undefined && value !== null) {
                valid =
                    validation === undefined ? true : validation(value) ? true : false;
                // If not complete, use error text (as string or function) if provided
                errorText =
                    value && !valid && fieldErrorText
                        ? typeof fieldErrorText === "string"
                            ? fieldErrorText
                            : fieldErrorText(value)
                        : "";
            }
            return Object.assign({}, a, { [id]: {
                    value,
                    valid,
                    errorText,
                    hidden: false,
                    required: false,
                } });
        }, {});
        // Now that the values are all set, set state-computed properties
        for (let id in data) {
            const field = this.state.fields[id];
            data[id].hidden =
                field.hidden === undefined
                    ? false
                    : typeof field.hidden === "boolean"
                        ? field.hidden
                        : field.hidden({
                            fields,
                            data,
                            ready,
                        })
                            ? true
                            : false;
            data[id].required = field.required
                ? typeof field.required === "boolean"
                    ? field.required
                    : field.required({
                        fields,
                        data,
                        ready,
                    })
                : false;
        }
        // Finally, loop through to set ready state
        for (let id in data) {
            let entry = data[id];
            if (entry.required && !entry.hidden && !entry.valid) {
                ready = false;
            }
        }
        return {
            fields,
            data,
            ready,
        };
    }
    /**
     * The form's fields. 	 */
    get fields() {
        return this.state.fields;
    }
    /**
     * The form's data entries. For each field, the
     * - `value` - The entry's value.
     * - `valid` - Whether that value is `valid`, according to its `field.validation`.
     * - `errorText` - Any current `errorText` set on invalid fields.
     * - `required` - Whether the field is currently required.
     * - `hidden` - Whether the field is currently hidden.
     */
    get data() {
        return this.state.data;
    }
    /**
     * Whether all required data entries are valid.
     */
    get ready() {
        return this.state.ready;
    }
}
exports.FormController = FormController;
