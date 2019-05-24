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
const steps_1 = require("pojoe/steps");
const declaration = {
    gitid: 'mbenzekri/pojoe-gdal/steps/ShapefileWriter',
    title: 'ESRI Shapefile writer',
    desc: 'write inputed pojos to an ESRI Shapefile file (.shp)',
    inputs: {
        'pojos': {
            title: 'features to write in the <filename> shapefile'
        }
    },
    outputs: {},
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
};
class ShapefileWriter extends steps_1.Step {
    constructor(params) {
        super(declaration, params);
    }
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            this.error('NOT IMPLEMENTED !!!');
            // const pojo = await this.input('files')
            // const filename = pojo[this.params.filename]
            // var dataset = gdal.open(filename)
            // var layer = dataset.layers.get(0)
            // var features = layer.features
            // write the feature
            // features.forEach(f => )
        });
    }
}
ShapefileWriter.declaration = declaration;
steps_1.Step.register(ShapefileWriter);
//# sourceMappingURL=ShapefileWriter.js.map