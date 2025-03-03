import klayout.db as db
from json import dump
from os import listdir
from os.path import join, isfile
from pya import Region

layout_folder = "./GDS Folder/MUX21X1"

gds_files = [name for name in listdir(layout_folder) if isfile(join(layout_folder, name)) and name.endswith('.gds')]


def get_layout_jsons(file):
    # Load the GDS file
    layout = db.Layout()
    layout.read(file)
    def region(layer,datatype):
        return Region(layout.top_cell().begin_shapes_rec(layout.layer(layer, datatype)))
    layout.top_cell().shapes(layout.layer(1,0)).insert(region(400,0) & region(100,0))
    layout.top_cell().shapes(layout.layer(2,0)).insert(region(402,0) & region(103,0))
    cell_json = {
        'cellName': 'MUX21X1',
        'layers': {},
        'numLayers': len(layout.layer_indices()),
        'cellBbox': [[0, 0], [100, 100]] # All points will be of this form. First array = bottom left coordinates. Second array = top right coordinates
    }  # This will be the json that contains all the cell data for plotting

    # The GDS files have only one cell each, so I'm only taking the top cell.
    top_cell = layout.top_cell()
    print(f'cell bounding box: ({top_cell.bbox().p1.x},{top_cell.bbox().p1.y}) to ({top_cell.bbox().p2.x},{top_cell.bbox().p2.y})')
    cell_json['cellBbox'] = [[top_cell.bbox().p1.x, top_cell.bbox().p1.y], [top_cell.bbox().p2.x, top_cell.bbox().p2.y]]

    def extract_polygons(cell):
        polygons = {}
        layer_infos = layout.layer_infos()
        for layer_index in range(len(layer_infos)):
            shapes = cell.shapes(layer_index)
            polygons[layer_index] = {
                'numShapes': shapes.size(),
                'layerNumber': layer_infos[layer_index].layer,
                'layerDT': layer_infos[layer_index].datatype,
                'data': []
            }
            shape_iter = shapes.each()
            for shape in shape_iter:
                assert shape.is_polygon() or shape.is_box() or shape.is_text(), "All shapes must be either polygons, boxes or text"
                if shape.is_polygon():
                    box =shape.polygon.bbox()
                    data = [[box.p1.x, box.p1.y], [box.p2.x, box.p2.y]]
                elif shape.is_box():
                    box = shape.box
                    data = [[box.p1.x, box.p1.y], [box.p2.x, box.p2.y]]
                else:
                    data = [shape.text.string, shape.text.x, shape.text.y]
                polygons[layer_index]['data'].append(data)
        return polygons

    # Extract polygons from the top cell
    cell_json['layers'] = extract_polygons(top_cell)

    # Save the dictionary as a JSON file
    output_file = f"mux_new/{file.split('/')[-1].split('.')[0]}.json"
    with open(output_file, "w") as f:
        dump(cell_json, f, indent=4)

for gds in gds_files:
    get_layout_jsons(f'{layout_folder}/{gds}')