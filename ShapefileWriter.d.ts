import * as cef from 'cef-lib/step';
declare class ShapefileWriter extends cef.Step {
    constructor(params: cef.ParamsMap);
    input_files(feature: any): void;
    start(): void;
    end(): void;
}
export declare function create(params: cef.ParamsMap): ShapefileWriter;
export {};
