"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-template-curly-in-string */
const cef = require("cef-lib/step");
process.env['CEF_PATH'] = __dirname + '/../..';
const flowchart = {
    name: 'Testing DirectoryWalker ',
    title: 'Testing DirectoryWalker',
    args: {},
    globals: {},
    steps: [
        {
            id: 'a',
            gitid: 'mbenzekri/cef-lib/steps/POJOProducer',
            params: {
                literal: `{ filename: "${__dirname.replace(/\\/g, '')}/../data/iles.shp" }`,
            },
        },
        {
            id: 'b',
            gitid: 'mbenzekri/cef-gdal/steps/ShapefileReader',
            params: {
                filename: '${feature.filename}',
                coordsys: 'EPSG:4326',
                encoding: 'utf-8',
                filtered: 'false',
                x1bbox: '0',
                y1bbox: '0',
                x2bbox: '0',
                y2bbox: '0',
            },
        },
        {
            id: 'c',
            gitid: 'mbenzekri/cef-lib/steps/POJOLogger',
            params: {
                expression: '${JSON.stringify(feature)}',
            },
        },
    ],
    pipes: [
        { from: 'a', outport: 'pojo', to: 'b', inport: 'files' },
        { from: 'b', outport: 'features', to: 'c', inport: 'pojos' },
    ]
};
const batch = new cef.Batch(flowchart);
batch.run();
//# sourceMappingURL=test.js.map