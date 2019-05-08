import * as cef from 'cef-lib/step'
import gdal from 'gdal'

const declaration = new cef.Declaration({
    gitid: 'ShapefileWriter@mbenzekri/gdal',
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
})

class ShapefileWriter extends cef.Step {
    constructor (params, batch) {
        super(new cef.Declaration(declaration), params, batch)
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

export function create (params, batch) { return new ShapefileWriter(params, batch) };
