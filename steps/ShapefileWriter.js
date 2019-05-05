import cef from 'ceflib'
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
    input_files (feature) {
        const filename = feature[this.param('filename')]
        var dataset = gdal.open(filename)
        var layer = dataset.layers.get(0)
        var features = layer.features
        // write the feature
        features.forEach(f => )
        this.close('features')
    }
}

export { declaration, ShapefileWriter }