import * as cef from 'cef-lib';
declare class ShapefileWriter extends cef.Step {
    constructor(params: cef.ParamsMap);
    doit(): Promise<void>;
}
export declare function create(params: cef.ParamsMap): ShapefileWriter;
export {};
