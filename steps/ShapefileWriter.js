"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cef = require("cef-lib");
const gdal_1 = require("gdal");
const declaration = {
    gitid: 'mbenzekri/cef-gdal/steps/ShapefileWriter',
    title: 'ESRI Shapefile writer',
    desc: 'write inputed pojos to an ESRI Shapefile file (.shp)',
    inputs: {
        'pojos': {
            desc: 'features to write in the <filename> shapefile'
        }
    },
    outputs: {},
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
};
class ShapefileWriter extends cef.Step {
    constructor(params) {
        super(declaration, params);
    }
    doit() {
        return __awaiter(this, void 0, void 0, function* () {
            const pojo = yield this.input('files');
            const filename = pojo[this.params.filename];
            var dataset = gdal_1.default.open(filename);
            var layer = dataset.layers.get(0);
            var features = layer.features;
            // write the feature
            // features.forEach(f => )
        });
    }
}
function create(params) { return new ShapefileWriter(params); }
exports.create = create;
;
//# sourceMappingURL=ShapefileWriter.js.map