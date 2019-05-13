"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-template-curly-in-string */
const cef = require("cef-lib");
const flowchart = {
    name: 'Testing ShapefileReader ',
    title: 'Testing ShapefileReader',
    args: {},
    globals: {
        ROOT: { value: `${__dirname.replace(/\\/g, '')}/..`, desc: 'the root data path', type: 'string' },
    },
    steps: [
        {
            id: 'a1',
            gitid: 'mbenzekri/cef-js/steps/POJOProducer',
            params: {
                json: '{ "filename": "${globals.ROOT}/data/iles.shp" }',
            },
        },
        {
            id: 'a2',
            gitid: 'mbenzekri/cef-js/steps/POJOProducer',
            params: {
                json: '{ "filename": "${globals.ROOT}/data/ne_110m_populated_places_simple.shp" }',
            },
        },
        {
            id: 'b',
            gitid: 'mbenzekri/cef-gdal/steps/ShapefileReader',
            params: {
                filename: '${pojo.filename}',
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
            gitid: 'mbenzekri/cef-js/steps/POJOLogger',
            params: {
                expression: '${JSON.stringify(pojo)}',
            },
        },
    ],
    pipes: [
        { from: 'a1', outport: 'pojo', to: 'b', inport: 'files' },
        { from: 'a2', outport: 'pojo', to: 'b', inport: 'files' },
        { from: 'b', outport: 'pojos', to: 'c', inport: 'pojos' },
    ]
};
const batch = new cef.Batch(flowchart);
batch.run();
//# sourceMappingURL=test.js.map