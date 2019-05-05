import cef from 'ceflib'

declaration = new cef.Declaration ({
    gitid : 'ShapefileReader@mbenzekri/gdal',
    title: 'ESRI Shapefile reader',
    desc: 'read and output features from a ESRI Shapefile file (.shp)',
    inputs: {
        'files' : {
            desc: 'file features having a <filename> attribute',
        },
    },
    outputs: {
        'features' : {
            desc: 'output features read from the files provided in inputs',
        },
    },
    parameters: {
        'filename': { 
            desc: 'attribute name of the  file name (full path, name and extension)',
            type : 'string'
        },
        'coordsys': { 
            desc: 'the coordinate system of the geometries',
            type : 'string'
        },
        'encoding': { 
            desc: 'encoding of the shapefile text data',
            type : 'string'
        },
        'filtered': { 
            desc: 'checked (true) if bounding box filtering is needed',
            type : 'boolean'
        },
        'x1bbox': { 
            desc: 'x low/high coordinate of the bounding box',
            type : 'number'
        },
        'y1bbox': { 
            desc: 'y low/high coordinate of the bounding box',
            type : 'number'
        },
        'x2bbox': { 
            desc: 'x low/high coordinate of the bounding box',
            type : 'number'
        },
        'y2bbox': { 
            desc: 'y low/high coordinate of the bounding box',
            type : 'number'
        },
    },
    fields : [
        {
            key: 'filename',
            type: 'text',
            templateOptions: {
                label: 'Filename attribute',
                required: true,
                pattern: /[_A-Za-z]\w*/,
            }
        },
        {
            key: 'coordsys',
            type: 'select',
            defaultValue: 'EPSG:4326',
            templateOptions: {
                label: 'Coordinate System',
                required: true,
                options: [
                    { label: 'WGS 84', value: 'EPSG:4326' },
                    { label: 'web mercator', value: 'EPSG:3857' },
                    { label: 'Lambert', value: 'EPSG:2154' },
                ],
            },
        },
        {
            key: 'encoding',
            type: 'select',
            defaultValue: 'UTF-8',
            templateOptions: {
                label: 'File encoding',
                required: true,
                options: [
                    { label: 'ISO-8859–1', value: 'ISO-8859–1' },
                    { label: 'UTF-8', value: 'UTF-8' },
                    { label: 'cp1253', value: 'cp1253' },
                ],
            },
        },
        {
            key: 'filtered',
            type: 'checkbox',
            defaultValue: false,
            templateOptions: {
                label: 'bbox filtering needed'
            },
            expressionProperties: {
                'templateOptions.disabled': 'formState.awesomeIsForced',
            },
        },
        {
            key: 'x1bbox',
            type: 'number',
            hideExpression: '!model.filtered',
            templateOptions: {
                label: 'X1 bbox',
            },
        },
        {
            key: 'y1bbox',
            type: 'number',
            hideExpression: '!model.filtered',
            templateOptions: {
                label: 'Y1 bbox',
            },
        },
        {
            key: 'x2bbox',
            type: 'number',
            hideExpression: '!model.filtered',
            templateOptions: {
                label: 'X2 bbox',
            },
        },
        {
            key: 'y2bbox',
            type: 'number',
            hideExpression: '!model.filtered',
            templateOptions: {
                label: 'Y2 bbox',
            },
        },
    ],
});

class ShapefileReader extends cef.Step {
    constructor() {
        super(def_opts)
    }
    input_files(feature) {
        const filename = feature[this.param('filename')]
        var dataset = gdal.open(filename);
        var layer = dataset.layers.get(0);
        var features = layer.features
        features.forEach(f => {
            const feature = {
                type : 'Feature',
                properties : f.fields.toObject(),
                geometry : f.getGeometry().toObject(),
            }
            this.output('features',feature)
        })
        this.close('features');
    }
}

export { declaration, ShapefileReader };