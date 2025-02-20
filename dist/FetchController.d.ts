import { Controller } from "./Controller";
interface Options {
    url: string;
    init?: RequestInit;
    parse?: (data: any) => any;
    log?: boolean;
    data?: any;
}
interface State extends Options {
    loading?: boolean;
}
/**
 * Fetch data from an API endpoint (a `url` and optional `init` object),
 * perhaps `parse` the results, and then return it as `data`.
 * Accepts manual `refrseh`ing and handles `loading` state, too.
 */
export declare class FetchController extends Controller<State> {
    constructor(options?: Options);
    onUpdate: (state: any) => Partial<State & {
        controller?: any;
    }>;
    /**
     * Make a fetch request and return the data as a JSON object.
     * @example
     * FetchController.fetch("https://www.myData.com/users")
     */
    static fetch: (url?: string, init?: RequestInit, callback?: (data: any) => void) => Promise<any>;
    /**
     * Load a new set of data from the controller's `url`.
     * @param callback - An optional callback to run once the data arrives.
     * @example
     * controller.refresh()
     * controller.refresh((data) => console.log(data))
     */
    refresh: () => Promise<void>;
    /**
     * The controller's current data endpoint. Setting this property will refresh the controller.
     */
    url: string;
    /**
     * The controller's current data.
     */
    readonly data: any;
    /**
     * Whether or not the controller is waiting for data to arrive.
     */
    readonly loading: boolean;
}
export {};
