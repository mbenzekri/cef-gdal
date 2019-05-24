
# pojoe-gdal: spatial data steps
>this module provides Pojoes steps for spatial data readers/writers (based on gdal library)
# install

>`npm install mbenzekri/pojoe-gdal`

# included steps 
>- [ShapefileReader](#shapefilereader-esri-shapefile-reader) : ESRI Shapefile reader
>- [ShapefileWriter](#shapefilewriter-esri-shapefile-writer) : ESRI Shapefile writer
# ShapefileReader ESRI Shapefile reader
>

## goal

>read and output pojos (features) from ESRI Shapefilez (./dbf + .shp)

---
## parameters
> **filename** *{string}* -- provides the shapefile name  -- default = `/tmp/shapefile.shp`
> 
> **geometry** *{string}* -- property name for the geometry  -- default = `geometry`
> 
> **coordsys** *{string}* -- the coordinate system of the geometries (in "EPSG:####" form)  -- default = `EPSG:4326`
> 
> **filtered** *{boolean}* -- checked (true) if bounding box filtering is needed  -- default = `false`
> 
> **bbox** *{number[]}* -- filter bounding box (comma separated coordinates xbottom,ybottom,xtop,ytop)  -- default = `-180,-90,180,90`
> 
## inputs
>- **files** -- a pojo with enough data to produce a <filename> 

## outputs
>- **pojos** -- output pojos (features) read from the shapefiles provided 


---

# ShapefileWriter ESRI Shapefile writer
>

## goal

>write inputed pojos to an ESRI Shapefile file (.shp)

---
## parameters
> **filename** *{string}* -- shapefile name to write  -- default = `/tmp/sample.shp`
> 
> **geometry** *{string}* -- geometry property in inputed pojos  -- default = `geometry`
> 
## inputs
>- **pojos** -- features to write in the <filename> shapefile 



---

---
