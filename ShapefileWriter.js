"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cef = require("cef-lib/step");
const gdal_1 = require("gdal");
const declaration = {
    gitid: 'ShapefileWriter@mbenzekri/gdal',
    title: 'ESRI Shapefile writer',
    desc: 'write and output features to a ESRI Shapefile file (.shp)',
    inputs: {
        'features': {
            desc: 'features to write in the <filename> shapefile'
        }
    },
    outputs: {},
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
};
class ShapefileWriter extends cef.Step {
    constructor(params) {
        super(declaration, params);
    }
    input_files(feature) {
        const filename = feature[this.params.filename];
        var dataset = gdal_1.default.open(filename);
        var layer = dataset.layers.get(0);
        var features = layer.features;
        // write the feature
        // features.forEach(f => )
        this.close('features');
    }
    start() {
    }
    end() {
    }
}
function create(params) { return new ShapefileWriter(params); }
exports.create = create;
;
//# sourceMappingURL=ShapefileWriter.js.map