/* eslint-disable no-template-curly-in-string */
import * as cef from 'cef-lib/step'
process.env['CEF_PATH'] = __dirname+'/../..'

const flowchart: cef.Flowchart = {
    name: 'Testing DirectoryWalker ',
    title: 'Testing DirectoryWalker',
    args: {},
    globals: {
        ROOT : { value: `${__dirname.replace(/\\/g,'') }/..`, desc:'the root data path', type:'string' },
    },
    steps: [
        {
            id: 'a',
            gitid: 'mbenzekri/cef-lib/steps/POJOProducer',
            params: {
                json: '{ "filename": "${globals.ROOT}/data/iles.shp" }',
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
        { from: 'a', outport:'pojo', to: 'b', inport: 'files' },
        { from: 'b', outport:'features', to: 'c', inport: 'pojos' },
    ]
}

const batch = new cef.Batch(flowchart)

batch.run();