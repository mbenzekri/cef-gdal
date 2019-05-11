import * as cef from 'cef-lib/step';
export declare const declaration: cef.Declaration;
declare class ShapefileReader extends cef.Step {
    constructor(params: cef.ParamsMap);
    start(): void;
    input_files(_feature: any): void;
    end(): void;
}
export declare function create(params: cef.ParamsMap): ShapefileReader;
export {};
