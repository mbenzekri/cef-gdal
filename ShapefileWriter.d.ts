import * as cef from 'cef-lib/step';
declare class ShapefileWriter extends cef.Step {
    constructor(params: any, batch: any);
    input_files(feature: any): void;
    start(): void;
    end(): void;
}
export declare function create(params: any, batch: any): ShapefileWriter;
export {};
