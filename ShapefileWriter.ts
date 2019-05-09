import * as cef from 'cef-lib/step'
import gdal from 'gdal'

const declaration: cef.Declaration = {
    gitid: 'mbenzekri/cef-gdal/steps/ShapefileWriter',
    title: 'ESRI Shapefile writer',
    desc: 'write and output features to a ESRI Shapefile file (.shp)',
    inputs: {
        'features': {
            desc: 'features to write in the <filename> shapefile'
        }
    },
    outputs: {
    },
    parameters: {
        'filename': {
            desc: 'shapefile name to write',
            type: 'string'
        }
    },
    fields: [
        {
            key: 'filename',
            type: 'text',
            templateOptions: {
                label: 'Filename',
                required: true
            }
        }
    ]
}

class ShapefileWriter extends cef.Step {
    constructor (params:cef.ParamsMap) {
        super(declaration, params)
    }
    input_files (feature) {
        const filename = feature[this.params.filename]
        var dataset = gdal.open(filename)
        var layer = dataset.layers.get(0)
        var features = layer.features
        // write the feature
        // features.forEach(f => )
        this.close('features')
    }
    start() {
        
    }
    end() {
        
    }
}

export function create (params: cef.ParamsMap) { return new ShapefileWriter(params) };
