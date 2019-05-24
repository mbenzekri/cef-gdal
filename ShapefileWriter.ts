import { Declaration, Step, ParamsMap} from 'pojoe/steps'
import gdal from 'gdal'

const declaration: Declaration = {
    gitid: 'mbenzekri/pojoe-gdal/steps/ShapefileWriter',
    title: 'ESRI Shapefile writer',
    desc: 'write inputed pojos to an ESRI Shapefile file (.shp)',
    inputs: {
        'pojos': {
            title: 'features to write in the <filename> shapefile'
        }
    },
    outputs: {
    },
    parameters: {
        'filename': {
            title: 'shapefile name to write',
            type: 'string',
            default: '/tmp/sample.shp'
        },
        'geometry': {
            title: 'geometry property in inputed pojos',
            type: 'string',
            default: 'geometry',
        }
    }
}

class ShapefileWriter extends Step {
    static readonly declaration = declaration
    constructor (params:ParamsMap) {
        super(declaration, params)
    }
    async process () {
        this.error('NOT IMPLEMENTED !!!')
        // const pojo = await this.input('files')
        // const filename = pojo[this.params.filename]
        // var dataset = gdal.open(filename)
        // var layer = dataset.layers.get(0)
        // var features = layer.features
        // write the feature
        // features.forEach(f => )
    }
}

Step.register(ShapefileWriter)
