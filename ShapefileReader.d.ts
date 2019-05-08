import * as cef from 'ceflib/step';
declare class ShapefileReader extends cef.Step {
    constructor(params: cef.ParamsMap, batch: cef.Batch);
    start(): void;
    input_files(feature: any): void;
    end(): void;
}
export declare function create(params: cef.ParamsMap, batch: cef.Batch): ShapefileReader;
export {};
