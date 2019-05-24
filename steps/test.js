"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-template-curly-in-string */
const steps_1 = require("pojoe/steps");
require("./ShapefileReader");
require("./ShapefileWriter");
const tests = [
    {
        stepid: 'mbenzekri/pojoe-gdal/steps/ShapefileReader',
        title: 'simple point layer reading ',
        params: {
            filename: '${pojo.shapefile}',
            geometry: 'geom',
            coordsys: 'EPSG:4326',
            filtered: 'false',
            bbox: '-180,-90,180,90',
        },
        injected: {
            files: [
                { shapefile: __dirname + '/../data/sample.shp' }
            ]
        },
        expected: {
            'pojos': [
                {
                    "id": 1,
                    "text": "PARIS",
                    "integer": 1,
                    "float": 0.123,
                    "date": {
                        "year": 2019,
                        "month": 5,
                        "day": 24
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            2.337956373762412,
                            48.85681156805855
                        ]
                    }
                },
                {
                    "id": 2,
                    "text": "LONDRES",
                    "integer": 2,
                    "float": 0.125,
                    "date": {
                        "year": 2019,
                        "month": 5,
                        "day": 24
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -0.136469262670197,
                            51.50203438464012
                        ]
                    }
                },
                {
                    "id": 3,
                    "text": "MADRID",
                    "integer": 3,
                    "float": 0.124,
                    "date": {
                        "year": 2019,
                        "month": 5,
                        "day": 24
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -3.661174120889405,
                            40.411848991825785
                        ]
                    }
                }
            ]
        }
    },
];
steps_1.Testbed.run(tests).then(() => console.log('TEST TERMINATED')).catch(() => console.log('TEST TERMINATED'));
//# sourceMappingURL=test.js.map