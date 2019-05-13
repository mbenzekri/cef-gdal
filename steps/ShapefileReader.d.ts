import * as cef from 'cef-lib';
export declare const declaration: cef.Declaration;
declare class ShapefileReader extends cef.Step {
    constructor(params: cef.ParamsMap);
    doit(): Promise<void>;
}
export declare function create(params: cef.ParamsMap): ShapefileReader;
export {};
