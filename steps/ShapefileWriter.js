import cef from 'ceflib'

declaration = new cef.Declaration ({
    gitid : 'ShapefileWriter@mbenzekri/gdal',
    title: 'ESRI Shapefile writer',
    desc: 'write and output features to a ESRI Shapefile file (.shp)',
    inputs: {
        'features' : {
            desc: 'features to write in the <filename> shapefile',
        },
    },
    parameters: {
        'filename': { 
            desc: 'shapefile name to write',
            type : 'string'
        },
    },
    fields : [
        {
            key: 'filename',
            type: 'text',
            templateOptions: {
                label: 'Filename',
                required: true,
            }
        }
    ],
});

class ShapefileWriter extends cef.Step {
    constructor() {
        super(def_opts)
    }
    input_files(feature) {
        const filename = feature[this.param('filename')]
        var dataset = gdal.open(filename);
        var layer = dataset.layers.get(0);
        var features = layer.features
        // write the feature
        this.close('features');
    }
}

export { declaration, ShapefileWriter };