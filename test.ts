/* eslint-disable no-template-curly-in-string */
import * as cef from 'cef-lib/step'
process.env.CEF_PATH = __dirname

const flowchart: cef.Flowchart = {
    name: 'Testing DirectoryWalker ',
    title: 'Testing DirectoryWalker',
    args: {},
    globals: {
        PATH : { value: 'D:/data', type: 'string', desc: 'the data root dir' }
    },
    steps: [
        {
            id: 'a',
            gitid: 'cef-fs/DirectoryWalker@mbenzekri',
            params: {
                directory: '${globals.PATH}/geofla',
                pattern: '.*',
                extension: 'SHP|shp',
            },
        },
        {
            id: 'b',
            gitid: './ShapefileReader@mbenzekri',
            params: {
                filename: '${feature.filename}',
                coordsys: 'EPSG:2154',
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
            gitid: 'cef-fs/FileLogger@mbenzekri',
            params: {
                filename: '${globals.PATH}/cef/shplogger.log',
                append: 'false',
                createdir: 'true',
                message: '${JSON.stringify(feature)}',
            },
        },
    ],
    pipes: [
        { from: 'a', outport:'files', to: 'b', inport: 'files' },
        { from: 'b', outport:'features', to: 'c', inport: 'features' },
    ]
}

const batch = new cef.Batch(flowchart)

batch.run();