import * as cef from 'cef-lib'
import gdal from 'gdal'

const declaration: cef.Declaration = {
    gitid: 'mbenzekri/cef-gdal/steps/ShapefileWriter',
    title: 'ESRI Shapefile writer',
    desc: 'write inputed pojos to an ESRI Shapefile file (.shp)',
    inputs: {
        'pojos': {
            desc: 'features to write in the <filename> shapefile'
        }
    },
    outputs: {
    },
    parameters: {
        'filename': {
            desc: 'shapefile name to write',
            type: 'string'
        },
        'geometry': {
            desc: 'geometry property in inputed pojos',
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
    async doit () {
        const pojo = await this.input('files')
        const filename = pojo[this.params.filename]
        var dataset = gdal.open(filename)
        var layer = dataset.layers.get(0)
        var features = layer.features
        // write the feature
        // features.forEach(f => )
    }
}

export function create (params: cef.ParamsMap) { return new ShapefileWriter(params) };
