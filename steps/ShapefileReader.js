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
const gdal = require("gdal");
exports.declaration = {
    gitid: 'mbenzekri/pojoe-gdal/steps/ShapefileReader',
    title: 'ESRI Shapefile reader',
    desc: 'read and output pojos (features) from ESRI Shapefilez (./dbf + .shp)',
    inputs: {
        'files': {
            title: 'a pojo with enough data to produce a <filename>',
            desc: 'this pojo must provide enough data for the step to construct a <filename> (see. filename attribute)'
        }
    },
    outputs: {
        'pojos': {
            title: 'output pojos (features) read from the shapefiles provided',
            desc: 'output features read from the files provided in inputs (attributes pojo with an added "geometry" attibute)'
        }
    },
    parameters: {
        'filename': {
            title: 'provides the shapefile name',
            desc: 'use this property to provide a full path name of the shapefile to read (.dbf file must be in same directory) \n' +
                'this may be constructed dynamicaly using pojo "files"',
            type: 'string',
            default: '/tmp/shapefile.shp',
        },
        'geometry': {
            title: 'property name for the geometry',
            desc: 'property name for the geometry',
            type: 'string',
            default: 'geometry',
        },
        'coordsys': {
            title: 'the coordinate system of the geometries (in "EPSG:####" form)',
            type: 'string',
            default: 'EPSG:4326',
        },
        // 'encoding': {
        //     title: 'encoding of the shapefile text data',
        //     type: 'string',
        //     default: 'utf8',
        //     enum: []
        // },
        'filtered': {
            title: 'checked (true) if bounding box filtering is needed',
            type: 'boolean',
            default: 'false'
        },
        'bbox': {
            title: 'filter bounding box (comma separated coordinates xbottom,ybottom,xtop,ytop)',
            type: 'number[]',
            default: '-180,-90,180,90'
        }
    }
};
class ShapefileReader extends steps_1.Step {
    constructor(params) {
        super(exports.declaration, params);
    }
    input(inport, pjo) {
        return __awaiter(this, void 0, void 0, function* () {
            let dataset;
            try {
                dataset = gdal.open(this.params.filename);
            }
            catch (e) {
                dataset.close();
                this.error(`error opening shapefile ${this.params.filename} due to error ==> \n    ${e.message}`);
            }
            try {
                const features = dataset.layers.get(0).features;
                features.forEach((f) => __awaiter(this, void 0, void 0, function* () {
                    const pojo = f.fields.toObject();
                    pojo.geometry = f.getGeometry().toObject();
                    yield this.output('pojos', pojo);
                }));
            }
            catch (e) {
                dataset.close();
                this.error(`Error reading shapefile ${this.params.filename} due to error ==> \n    ${e.message}`);
            }
        });
    }
}
ShapefileReader.declaration = exports.declaration;
steps_1.Step.register(ShapefileReader);
//# sourceMappingURL=ShapefileReader.js.map