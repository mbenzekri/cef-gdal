import { Step, Declaration, ParamsMap } from 'pojoe/steps'
import * as gdal from 'gdal'

export const declaration: Declaration = {
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
            title : 'provides the shapefile name',
            desc:   'use this property to provide a full path name of the shapefile to read (.dbf file must be in same directory) \n' +
                    'this may be constructed dynamicaly using pojo "files"',
            type: 'string',
            default: '/tmp/shapefile.shp',
            examples: []
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
}

class ShapefileReader extends Step {
    static readonly declaration = declaration
    constructor(params: ParamsMap) {
        super(declaration, params)
    }
    async input(inport: string, pjo: any) {
        let dataset;
        try {
            dataset = gdal.open(this.params.filename)
        } catch (e) {
            dataset.close()
            this.error(`error opening shapefile ${this.params.filename} due to error ==> \n    ${e.message}`)
        }
        try {
            const features = dataset.layers.get(0).features
            features.forEach(async f => {
                const pojo = f.fields.toObject();
                pojo.geometry = f.getGeometry().toObject()
                await this.output('pojos', pojo)
            })
        } catch (e) {
            dataset.close()
            this.error(`Error reading shapefile ${this.params.filename} due to error ==> \n    ${e.message}`)
        }
    }
}

Step.register(ShapefileReader)
