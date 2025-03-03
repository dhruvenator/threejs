export const layerPropertiesOld = {
    800: { color: 0xFD68B3, opacity: 1, offset: 0, height: 5, shape: "box", name: 'bspdn' },
    404: { color: 0xFF0000, opacity: 1, offset: 4, height: 12, shape: "box", name: 'tsvbar' },
    400: { color: 0x37FEFD, opacity: 1, offset: 8, height: 6, shape: "box", name: 'nli' },
    100: { color: 0xFF9966, opacity: 1, offset: 6, height: 10, shape: "diamond", name: 'nmos_ns' },
    305: { color: 0x30B0B0, opacity: 1, offset: 8, height: 8, shape: "box", name: 'poly_n' },
    307: { color: 0x46C773, opacity: 1, offset: 16, height: 8, shape: "box", name: 'poly_p' },
    350: { color: 0xFFD6D6, opacity: 1, offset: 14, height: 4, shape: "box", name: 'diffusion_break' },
    402: { color: 0x61CB21, opacity: 1, offset: 16, height: 6, shape: "box", name: 'pli' },
    600: { color: 0x62FF00, opacity: 1, offset: 14, height: 2, shape: "box", name: 'via_li' },
    103: { color: 0x444444, opacity: 1, offset: 14, height: 10, shape: "diamond", name: 'pmos_ns' },
    700: { color: 0xFF0080, opacity: 1, offset: 22, height: 10, shape: "box", name: 'vct' },
    701: { color: 0xFF00FF, opacity: 1, offset: 24, height: 8, shape: "box", name: 'vg' },
    702: { color: 0xD133FF, opacity: 1, offset: 14, height: 18, shape: "box", name: 'via_nm0' },
    703: { color: 0x8D0000, opacity: 1, offset: 16, height: 16, shape: "box", name: '' },
    1000: { color: 0xF0FF69, opacity: 1, offset: 32, height: 5, shape: "box", name: 'm0' },
    10000: { color: 0xEFEFEF, opacity: 1, offset: -5, height: 5, shape: "box", name: 'cell_boundary' },
    // 2000: { color: 0x8F33FF, opacity: 0, offset: 10, height: 10, shape: "box", name: 'routing_tracks' }
};

export const layerProperties = {
    1: { 'color': 0xFF5733, 'opacity': 1, 'offset': 125, 'height': 250, 'shape': 'diamond', 'name': 'NMOS Diamond Nanosheet' },
    2: { 'color': 0xFF5733, 'opacity': 1, 'offset': 525, 'height': 250, 'shape': 'diamond', 'name': 'PMOS Diamond Nanosheet' },
    800: { 'color': 0xFD68B3, 'opacity': 1, 'offset': 0, 'height': 100, 'shape': 'box', 'name': 'M2_BACKSIDE_POWER_LINES' },
    400: { 'color': 0x37FEFD, 'opacity': 1, 'offset': 250, 'height': 150, 'shape': 'box', 'name': 'NMOS_INTERCONNECT' },
    100: { 'color': 0xFF9966, 'opacity': 1, 'offset': 200, 'height': 10, 'shape': 'box', 'name': 'NMOS_NANOSHEET' },
    404: { 'color': 0xFF0000, 'opacity': 1, 'offset': 100, 'height': 150, 'shape': 'box', 'name': 'VIA_FROM_INTERCONNECT_TO_BACKSIDE_POWER_TSVBAR' },
    305: { 'color': 0x30B0B0, 'opacity': 1, 'offset': 250, 'height': 275, 'shape': 'box', 'name': 'NMOS_GATE' },
    307: { 'color': 0x46C773, 'opacity': 1, 'offset': 525, 'height': 275, 'shape': 'box', 'name': 'PMOS_GATE' },
    // #350: { 'color': 0xFFD6D6, 'opacity': 1, 'offset': 14, 'height': 4, 'shape': 'box', 'name': 'DIFFUSION_BREAK' },
    402: { 'color': 0x61CB21, 'opacity': 1, 'offset': 650, 'height': 150, 'shape': 'box', 'name': 'PMOS_INTERCONNECT' },
    600: { 'color': 0x62FF00, 'opacity': 1, 'offset': 400, 'height': 250, 'shape': 'box', 'name': 'VIA_FROM_PMOS_INTERCONNECT_TO_NMOS_INTERCONNECT' },
    103: { 'color': 0x444444, 'opacity': 1, 'offset': 600, 'height': 10, 'shape': 'box', 'name': 'PMOS_NANOSHEET' },
    700: { 'color': 0xFF0080, 'opacity': 1, 'offset': 800, 'height': 125, 'shape': 'box', 'name': 'VIA_FROM_M0_TO_PMOS_INTERCONNECT_VCT' },
    701: { 'color': 0xFF00FF, 'opacity': 1, 'offset': 775, 'height': 150, 'shape': 'box', 'name': 'VIA_FROM_M0_TO_PMOS_GATE_VG' },
    //  #702: { 'color': 0xD133FF, 'opacity': 1, 'offset': 14, 'height': 18, 'shape': 'box', 'name': 'via_nm0' },
    702: { 'color': 0xD133FF, 'opacity': 1, 'offset': 350, 'height': 575, 'shape': 'box', 'name': 'VIA_FROM_M0_TO_PMOS_INTERCONNECT_VCT' },
    703: { 'color': 0x8D0000, 'opacity': 1, 'offset': 525, 'height': 400, 'shape': 'box', 'name': 'VIA_FROM_M0_TO_NMOS_INTERCONNECT_VCT' },
    1000: { 'color': 0xF0FF69, 'opacity': 1, 'offset': 925, 'height': 100, 'shape': 'box', 'name': 'M0' },
    // # "10000/0": { 'color': 0xEFEFEF, 'opacity': 1, 'offset': -5, 'height': 5, 'shape': 'box', 'name': 'CELL_BOUNDARY' },
    //  # 2000: { 'color': 0x8F33FF, 'opacity': 0, 'offset': 10, 'height': 10, 'shape': 'box', 'name': 'ROUTING_TRACKS' }
}

export const MUX21X1Data = {
    "cellName": "MUX21X1",
    "layers": {
        "0": {
            "numShapes": 9,
            "layerNumber": 400,
            "layerDT": 0,
            "data": [[[234, -55], [306, 75]], [[954, -55], [1026, 75]], [[594, -75], [666, 525]], [[774, -75], [846, 525]], [[234, 183], [306, 505]], [[954, 183], [1026, 505]], [[54, -75], [126, 525]], [[1134, -75], [1206, 525]], [[414, -75], [486, 525]]]
        },
        "1": {
            "numShapes": 7,
            "layerNumber": 402,
            "layerDT": 0,
            "data": [[[774, -75], [846, 525]], [[234, -55], [306, 267]], [[954, -55], [1026, 267]], [[414, -75], [486, 525]], [[594, -75], [666, 525]], [[54, -75], [126, 525]], [[1134, -75], [1206, 525]]]
        },
        "2": {
            "numShapes": 6,
            "layerNumber": 305,
            "layerDT": 0,
            "data": [[[870, -59], [930, 509]], [[690, -59], [750, 509]], [[150, -59], [210, 509]], [[510, -59], [570, 509]], [[330, -59], [390, 509]], [[1050, -59], [1110, 509]]]
        },
        "3": {
            "numShapes": 6,
            "layerNumber": 307,
            "layerDT": 0,
            "data": [[[870, -59], [930, 509]], [[510, -59], [570, 327]], [[150, -59], [210, 509]], [[690, 123], [750, 509]], [[330, -59], [390, 509]], [[1050, -59], [1110, 509]]]
        },
        "4": {
            "numShapes": 4,
            "layerNumber": 404,
            "layerDT": 0,
            "data": [[[234, -45], [306, 65]], [[954, -45], [1026, 65]], [[234, 385], [306, 495]], [[954, 385], [1026, 495]]]
        },
        "5": {
            "numShapes": 6,
            "layerNumber": 701,
            "layerDT": 0,
            "data": [[[140, -59], [220, 9]], [[500, -59], [580, 9]], [[320, 241], [400, 309]], [[1040, 341], [1120, 409]], [[680, 441], [760, 509]], [[860, 441], [940, 509]]]
        },
        "6": {
            "numShapes": 2,
            "layerNumber": 703,
            "layerDT": 0,
            "data": [[[680, -59], [760, 9]], [[500, 441], [580, 509]]]
        },
        "7": {
            "numShapes": 6,
            "layerNumber": 1000,
            "layerDT": 0,
            "data": [[[140, -49], [760, -1]], [[320, 251], [400, 299]], [[584, 351], [1120, 399]], [[44, 451], [760, 499]], [[860, 451], [940, 499]], [[1124, 451], [1216, 499]]]
        },
        "8": {
            "numShapes": 6,
            "layerNumber": 1000,
            "layerDT": 1,
            "data": [["S_BAR", 472, 475], ["S", 495, -25], ["G#", 855, 375], ["Q", 1170, 475], ["D1", 900, 475], ["D2", 360, 275]]
        },
        "9": {
            "numShapes": 3,
            "layerNumber": 700,
            "layerDT": 0,
            "data": [[[584, 341], [676, 409]], [[44, 441], [136, 509]], [[1124, 441], [1216, 509]]]
        },
        "10": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 0,
            "data": [[[0, 375], [1260, 525]], [[0, -75], [1260, 75]]]
        },
        "11": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 1,
            "data": [["VSS", 630, 450], ["VDD", 630, 0]]
        },
        "12": {
            "numShapes": 1,
            "layerNumber": 103,
            "layerDT": 0,
            "data": [[[0, 183], [1260, 267]]]
        },
        "13": {
            "numShapes": 1,
            "layerNumber": 100,
            "layerDT": 0,
            "data": [[[0, 183], [1260, 267]]]
        },
        "14": {
            "numShapes": 3,
            "layerNumber": 600,
            "layerDT": 0,
            "data": [[[54, -16], [126, 66]], [[594, -16], [666, 66]], [[1134, -16], [1206, 66]]]
        },
        "15": {
            "numShapes": 1,
            "layerNumber": 10000,
            "layerDT": 0,
            "data": [[[0, -75], [1260, 525]]]
        },
        "16": {
            "numShapes": 6,
            "layerNumber": 2000,
            "layerDT": 0,
            "data": [[[0, -50], [1260, 0]], [[0, 50], [1260, 100]], [[0, 150], [1260, 200]], [[0, 250], [1260, 300]], [[0, 350], [1260, 400]], [[0, 450], [1260, 500]]]
        },
        "17": {
            "numShapes": 1,
            "layerNumber": 350,
            "layerDT": 0,
            "data": [[[450, -59], [810, 509]]]
        },
        "18": {
            "numShapes": 2,
            "layerNumber": 310,
            "layerDT": 0,
            "data": [[[-30, -75], [30, 525]], [[1230, -75], [1290, 525]]]
        },
        "19": {
            "numShapes": 2,
            "layerNumber": 601,
            "layerDT": 0,
            "data": [[[234, -45], [306, 65]], [[954, -45], [1026, 65]]]
        }
    },
    "numLayers": 20,
    "cellBbox": [[-30, -75], [1290, 525]]
};

export const MUXNEW = {
    "cellName": "MUX21X1",
    "layers": {
        "0": {
            "numShapes": 11,
            "layerNumber": 400,
            "layerDT": 0,
            "data": [
                [
                    [
                        54,
                        -64
                    ],
                    [
                        126,
                        64
                    ]
                ],
                [
                    [
                        414,
                        -64
                    ],
                    [
                        486,
                        64
                    ]
                ],
                [
                    [
                        1134,
                        -64
                    ],
                    [
                        1206,
                        64
                    ]
                ],
                [
                    [
                        54,
                        -514
                    ],
                    [
                        126,
                        -183
                    ]
                ],
                [
                    [
                        414,
                        -514
                    ],
                    [
                        486,
                        -183
                    ]
                ],
                [
                    [
                        1134,
                        -514
                    ],
                    [
                        1206,
                        -183
                    ]
                ],
                [
                    [
                        234,
                        -525
                    ],
                    [
                        306,
                        75
                    ]
                ],
                [
                    [
                        594,
                        -525
                    ],
                    [
                        666,
                        75
                    ]
                ],
                [
                    [
                        774,
                        -525
                    ],
                    [
                        846,
                        75
                    ]
                ],
                [
                    [
                        954,
                        -525
                    ],
                    [
                        1026,
                        75
                    ]
                ],
                [
                    [
                        1314,
                        -525
                    ],
                    [
                        1386,
                        75
                    ]
                ]
            ]
        },
        "1": {
            "numShapes": 8,
            "layerNumber": 402,
            "layerDT": 0,
            "data": [
                [
                    [
                        54,
                        -267
                    ],
                    [
                        126,
                        64
                    ]
                ],
                [
                    [
                        414,
                        -267
                    ],
                    [
                        486,
                        64
                    ]
                ],
                [
                    [
                        1134,
                        -267
                    ],
                    [
                        1206,
                        64
                    ]
                ],
                [
                    [
                        234,
                        -525
                    ],
                    [
                        306,
                        75
                    ]
                ],
                [
                    [
                        594,
                        -525
                    ],
                    [
                        666,
                        75
                    ]
                ],
                [
                    [
                        774,
                        -525
                    ],
                    [
                        846,
                        75
                    ]
                ],
                [
                    [
                        954,
                        -525
                    ],
                    [
                        1026,
                        75
                    ]
                ],
                [
                    [
                        1314,
                        -525
                    ],
                    [
                        1386,
                        75
                    ]
                ]
            ]
        },
        "2": {
            "numShapes": 7,
            "layerNumber": 305,
            "layerDT": 0,
            "data": [
                [
                    [
                        330,
                        -327
                    ],
                    [
                        390,
                        -123
                    ]
                ],
                [
                    [
                        150,
                        -525
                    ],
                    [
                        210,
                        75
                    ]
                ],
                [
                    [
                        510,
                        -525
                    ],
                    [
                        570,
                        75
                    ]
                ],
                [
                    [
                        690,
                        -525
                    ],
                    [
                        750,
                        75
                    ]
                ],
                [
                    [
                        870,
                        -525
                    ],
                    [
                        930,
                        75
                    ]
                ],
                [
                    [
                        1050,
                        -525
                    ],
                    [
                        1110,
                        75
                    ]
                ],
                [
                    [
                        1230,
                        -525
                    ],
                    [
                        1290,
                        75
                    ]
                ]
            ]
        },
        "3": {
            "numShapes": 7,
            "layerNumber": 307,
            "layerDT": 0,
            "data": [
                [
                    [
                        330,
                        -327
                    ],
                    [
                        390,
                        -123
                    ]
                ],
                [
                    [
                        690,
                        -419
                    ],
                    [
                        750,
                        75
                    ]
                ],
                [
                    [
                        150,
                        -525
                    ],
                    [
                        210,
                        75
                    ]
                ],
                [
                    [
                        510,
                        -525
                    ],
                    [
                        570,
                        75
                    ]
                ],
                [
                    [
                        870,
                        -525
                    ],
                    [
                        930,
                        -31
                    ]
                ],
                [
                    [
                        1050,
                        -525
                    ],
                    [
                        1110,
                        75
                    ]
                ],
                [
                    [
                        1230,
                        -525
                    ],
                    [
                        1290,
                        75
                    ]
                ]
            ]
        },
        "4": {
            "numShapes": 6,
            "layerNumber": 404,
            "layerDT": 0,
            "data": [
                [
                    [
                        54,
                        -64
                    ],
                    [
                        126,
                        64
                    ]
                ],
                [
                    [
                        414,
                        -64
                    ],
                    [
                        486,
                        64
                    ]
                ],
                [
                    [
                        1134,
                        -64
                    ],
                    [
                        1206,
                        64
                    ]
                ],
                [
                    [
                        54,
                        -514
                    ],
                    [
                        126,
                        -386
                    ]
                ],
                [
                    [
                        414,
                        -514
                    ],
                    [
                        486,
                        -386
                    ]
                ],
                [
                    [
                        1134,
                        -514
                    ],
                    [
                        1206,
                        -386
                    ]
                ]
            ]
        },
        "5": {
            "numShapes": 6,
            "layerNumber": 701,
            "layerDT": 0,
            "data": [
                [
                    [
                        140,
                        -9
                    ],
                    [
                        220,
                        59
                    ]
                ],
                [
                    [
                        680,
                        -9
                    ],
                    [
                        760,
                        59
                    ]
                ],
                [
                    [
                        1220,
                        -109
                    ],
                    [
                        1300,
                        -41
                    ]
                ],
                [
                    [
                        500,
                        -409
                    ],
                    [
                        580,
                        -341
                    ]
                ],
                [
                    [
                        860,
                        -509
                    ],
                    [
                        940,
                        -441
                    ]
                ],
                [
                    [
                        1040,
                        -509
                    ],
                    [
                        1120,
                        -441
                    ]
                ]
            ]
        },
        "6": {
            "numShapes": 2,
            "layerNumber": 703,
            "layerDT": 0,
            "data": [
                [
                    [
                        860,
                        -9
                    ],
                    [
                        940,
                        59
                    ]
                ],
                [
                    [
                        680,
                        -509
                    ],
                    [
                        760,
                        -441
                    ]
                ]
            ]
        },
        "7": {
            "numShapes": 6,
            "layerNumber": 1000,
            "layerDT": 0,
            "data": [
                [
                    [
                        140,
                        1
                    ],
                    [
                        940,
                        49
                    ]
                ],
                [
                    [
                        764,
                        -99
                    ],
                    [
                        1300,
                        -51
                    ]
                ],
                [
                    [
                        500,
                        -399
                    ],
                    [
                        580,
                        -351
                    ]
                ],
                [
                    [
                        224,
                        -499
                    ],
                    [
                        940,
                        -451
                    ]
                ],
                [
                    [
                        1040,
                        -499
                    ],
                    [
                        1120,
                        -451
                    ]
                ],
                [
                    [
                        1304,
                        -499
                    ],
                    [
                        1396,
                        -451
                    ]
                ]
            ]
        },
        "8": {
            "numShapes": 6,
            "layerNumber": 1000,
            "layerDT": 1,
            "data": [
                [
                    "S",
                    630,
                    25
                ],
                [
                    "S_BAR",
                    652,
                    -475
                ],
                [
                    "G#",
                    1035,
                    -75
                ],
                [
                    "D1",
                    540,
                    -375
                ],
                [
                    "D2",
                    1080,
                    -475
                ],
                [
                    "Q",
                    1350,
                    -475
                ]
            ]
        },
        "9": {
            "numShapes": 4,
            "layerNumber": 1000,
            "layerDT": 2,
            "data": [
                [
                    [
                        140,
                        1
                    ],
                    [
                        940,
                        49
                    ]
                ],
                [
                    [
                        500,
                        -399
                    ],
                    [
                        580,
                        -351
                    ]
                ],
                [
                    [
                        1040,
                        -499
                    ],
                    [
                        1120,
                        -451
                    ]
                ],
                [
                    [
                        1304,
                        -499
                    ],
                    [
                        1396,
                        -451
                    ]
                ]
            ]
        },
        "10": {
            "numShapes": 4,
            "layerNumber": 1000,
            "layerDT": 3,
            "data": [
                [
                    "S",
                    630,
                    25
                ],
                [
                    "D1",
                    540,
                    -375
                ],
                [
                    "D2",
                    1080,
                    -475
                ],
                [
                    "Q",
                    1350,
                    -475
                ]
            ]
        },
        "11": {
            "numShapes": 3,
            "layerNumber": 700,
            "layerDT": 0,
            "data": [
                [
                    [
                        764,
                        -109
                    ],
                    [
                        856,
                        -41
                    ]
                ],
                [
                    [
                        224,
                        -509
                    ],
                    [
                        316,
                        -441
                    ]
                ],
                [
                    [
                        1304,
                        -509
                    ],
                    [
                        1396,
                        -441
                    ]
                ]
            ]
        },
        "12": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -75
                    ],
                    [
                        1440,
                        75
                    ]
                ],
                [
                    [
                        0,
                        -525
                    ],
                    [
                        1440,
                        -375
                    ]
                ]
            ]
        },
        "13": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 1,
            "data": [
                [
                    "VSS",
                    720,
                    -450
                ],
                [
                    "VDD",
                    720,
                    0
                ]
            ]
        },
        "14": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 2,
            "data": [
                [
                    [
                        0,
                        -75
                    ],
                    [
                        1440,
                        75
                    ]
                ],
                [
                    [
                        0,
                        -525
                    ],
                    [
                        1440,
                        -375
                    ]
                ]
            ]
        },
        "15": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 3,
            "data": [
                [
                    "VSS",
                    720,
                    -450
                ],
                [
                    "VDD",
                    720,
                    0
                ]
            ]
        },
        "16": {
            "numShapes": 3,
            "layerNumber": 600,
            "layerDT": 0,
            "data": [
                [
                    [
                        234,
                        -66
                    ],
                    [
                        306,
                        16
                    ]
                ],
                [
                    [
                        774,
                        -66
                    ],
                    [
                        846,
                        16
                    ]
                ],
                [
                    [
                        1314,
                        -66
                    ],
                    [
                        1386,
                        16
                    ]
                ]
            ]
        },
        "17": {
            "numShapes": 2,
            "layerNumber": 100,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -267
                    ],
                    [
                        330,
                        -183
                    ]
                ],
                [
                    [
                        390,
                        -267
                    ],
                    [
                        1440,
                        -183
                    ]
                ]
            ]
        },
        "18": {
            "numShapes": 2,
            "layerNumber": 103,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -267
                    ],
                    [
                        330,
                        -183
                    ]
                ],
                [
                    [
                        390,
                        -267
                    ],
                    [
                        1440,
                        -183
                    ]
                ]
            ]
        },
        "19": {
            "numShapes": 1,
            "layerNumber": 10000,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -525
                    ],
                    [
                        1440,
                        75
                    ]
                ]
            ]
        },
        "20": {
            "numShapes": 6,
            "layerNumber": 2000,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        0
                    ],
                    [
                        1440,
                        50
                    ]
                ],
                [
                    [
                        0,
                        -100
                    ],
                    [
                        1440,
                        -50
                    ]
                ],
                [
                    [
                        0,
                        -200
                    ],
                    [
                        1440,
                        -150
                    ]
                ],
                [
                    [
                        0,
                        -300
                    ],
                    [
                        1440,
                        -250
                    ]
                ],
                [
                    [
                        0,
                        -400
                    ],
                    [
                        1440,
                        -350
                    ]
                ],
                [
                    [
                        0,
                        -500
                    ],
                    [
                        1440,
                        -450
                    ]
                ]
            ]
        },
        "21": {
            "numShapes": 1,
            "layerNumber": 350,
            "layerDT": 0,
            "data": [
                [
                    [
                        630,
                        -525
                    ],
                    [
                        990,
                        75
                    ]
                ]
            ]
        },
        "22": {
            "numShapes": 2,
            "layerNumber": 310,
            "layerDT": 0,
            "data": [
                [
                    [
                        -30,
                        -525
                    ],
                    [
                        30,
                        75
                    ]
                ],
                [
                    [
                        1410,
                        -525
                    ],
                    [
                        1470,
                        75
                    ]
                ]
            ]
        },
        "23": {
            "numShapes": 3,
            "layerNumber": 601,
            "layerDT": 0,
            "data": [
                [
                    [
                        54,
                        -64
                    ],
                    [
                        126,
                        64
                    ]
                ],
                [
                    [
                        414,
                        -64
                    ],
                    [
                        486,
                        64
                    ]
                ],
                [
                    [
                        1134,
                        -64
                    ],
                    [
                        1206,
                        64
                    ]
                ]
            ]
        },
        "24": {
            "numShapes": 11,
            "layerNumber": 2050,
            "layerDT": 0,
            "data": [
                [
                    [
                        95,
                        -525
                    ],
                    [
                        145,
                        75
                    ]
                ],
                [
                    [
                        215,
                        -525
                    ],
                    [
                        265,
                        75
                    ]
                ],
                [
                    [
                        335,
                        -525
                    ],
                    [
                        385,
                        75
                    ]
                ],
                [
                    [
                        455,
                        -525
                    ],
                    [
                        505,
                        75
                    ]
                ],
                [
                    [
                        575,
                        -525
                    ],
                    [
                        625,
                        75
                    ]
                ],
                [
                    [
                        695,
                        -525
                    ],
                    [
                        745,
                        75
                    ]
                ],
                [
                    [
                        815,
                        -525
                    ],
                    [
                        865,
                        75
                    ]
                ],
                [
                    [
                        935,
                        -525
                    ],
                    [
                        985,
                        75
                    ]
                ],
                [
                    [
                        1055,
                        -525
                    ],
                    [
                        1105,
                        75
                    ]
                ],
                [
                    [
                        1175,
                        -525
                    ],
                    [
                        1225,
                        75
                    ]
                ],
                [
                    [
                        1295,
                        -525
                    ],
                    [
                        1345,
                        75
                    ]
                ]
            ]
        },
        "25": {
            "numShapes": 8,
            "layerNumber": 1,
            "layerDT": 0,
            "data": [
                [
                    [
                        1314,
                        -267
                    ],
                    [
                        1386,
                        -183
                    ]
                ],
                [
                    [
                        594,
                        -267
                    ],
                    [
                        666,
                        -183
                    ]
                ],
                [
                    [
                        54,
                        -267
                    ],
                    [
                        126,
                        -183
                    ]
                ],
                [
                    [
                        234,
                        -267
                    ],
                    [
                        306,
                        -183
                    ]
                ],
                [
                    [
                        414,
                        -267
                    ],
                    [
                        486,
                        -183
                    ]
                ],
                [
                    [
                        954,
                        -267
                    ],
                    [
                        1026,
                        -183
                    ]
                ],
                [
                    [
                        774,
                        -267
                    ],
                    [
                        846,
                        -183
                    ]
                ],
                [
                    [
                        1134,
                        -267
                    ],
                    [
                        1206,
                        -183
                    ]
                ]
            ],

        },
        "26": {
            "numShapes": 8,
            "layerNumber": 2,
            "layerDT": 0,
            "data": [
                [
                    [
                        1314,
                        -267
                    ],
                    [
                        1386,
                        -183
                    ]
                ],
                [
                    [
                        594,
                        -267
                    ],
                    [
                        666,
                        -183
                    ]
                ],
                [
                    [
                        54,
                        -267
                    ],
                    [
                        126,
                        -183
                    ]
                ],
                [
                    [
                        234,
                        -267
                    ],
                    [
                        306,
                        -183
                    ]
                ],
                [
                    [
                        414,
                        -267
                    ],
                    [
                        486,
                        -183
                    ]
                ],
                [
                    [
                        954,
                        -267
                    ],
                    [
                        1026,
                        -183
                    ]
                ],
                [
                    [
                        774,
                        -267
                    ],
                    [
                        846,
                        -183
                    ]
                ],
                [
                    [
                        1134,
                        -267
                    ],
                    [
                        1206,
                        -183
                    ]
                ]
            ]

        },
    },

    "numLayers": 27,
    "cellBbox": [
        [
            -30,
            -525
        ],
        [
            1470,
            75
        ]
    ]
}


export const INVD4Data = {
    "cellName": "INVD4",
    "layers": {
        "0": {
            "numShapes": 7,
            "layerNumber": 400,
            "layerDT": 0,
            "data": [
                [[234, -55], [306, 75]],
                [[594, -55], [666, 75]],
                [[54, -75], [126, 525]],
                [[414, -75], [486, 525]],
                [[774, -75], [846, 525]],
                [[234, 183], [306, 505]],
                [[594, 183], [666, 505]]
            ]
        },
        "1": {
            "numShapes": 5,
            "layerNumber": 402,
            "layerDT": 0,
            "data": [
                [[54, -75], [126, 525]],
                [[414, -75], [486, 525]],
                [[774, -75], [846, 525]],
                [[234, -55], [306, 267]],
                [[594, -55], [666, 267]]
            ]
        },
        "2": {
            "numShapes": 4,
            "layerNumber": 305,
            "layerDT": 0,
            "data": [
                [[150, -59], [210, 509]],
                [[330, -59], [390, 509]],
                [[510, -59], [570, 509]],
                [[690, -59], [750, 509]]
            ]
        },
        "3": {
            "numShapes": 4,
            "layerNumber": 307,
            "layerDT": 0,
            "data": [
                [[150, -59], [210, 509]],
                [[330, -59], [390, 509]],
                [[510, -59], [570, 509]],
                [[690, -59], [750, 509]]
            ]
        },
        "4": {
            "numShapes": 4,
            "layerNumber": 404,
            "layerDT": 0,
            "data": [
                [[234, -45], [306, 65]],
                [[594, -45], [666, 65]],
                [[234, 385], [306, 495]],
                [[594, 385], [666, 495]]
            ]
        },
        "5": {
            "numShapes": 4,
            "layerNumber": 701,
            "layerDT": 0,
            "data": [
                [[140, 441], [220, 509]],
                [[320, 441], [400, 509]],
                [[500, 441], [580, 509]],
                [[680, 441], [760, 509]]
            ]
        },
        "6": {
            "numShapes": 2,
            "layerNumber": 1000,
            "layerDT": 0,
            "data": [
                [[44, -49], [856, -1]],
                [[140, 451], [760, 499]]
            ]
        },
        "7": {
            "numShapes": 2,
            "layerNumber": 1000,
            "layerDT": 1,
            "data": [
                ["OUT", 450, -25],
                ["IN", 450, 475]
            ]
        },
        "8": {
            "numShapes": 3,
            "layerNumber": 700,
            "layerDT": 0,
            "data": [
                [[44, -59], [136, 9]],
                [[404, -59], [496, 9]],
                [[764, -59], [856, 9]]
            ]
        },
        "9": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 0,
            "data": [
                [[0, -75], [900, 75]],
                [[0, 375], [900, 525]]
            ]
        },
        "10": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 1,
            "data": [
                ["VSS", 450, 450],
                ["VDD", 450, 0]
            ]
        },
        "11": {
            "numShapes": 1,
            "layerNumber": 103,
            "layerDT": 0,
            "data": [
                [[0, 183], [900, 267]]
            ]
        },
        "12": {
            "numShapes": 1,
            "layerNumber": 100,
            "layerDT": 0,
            "data": [
                [[0, 183], [900, 267]]
            ]
        },
        "13": {
            "numShapes": 3,
            "layerNumber": 600,
            "layerDT": 0,
            "data": [
                [[54, -16], [126, 66]],
                [[414, -16], [486, 66]],
                [[774, -16], [846, 66]]
            ]
        },
        "14": {
            "numShapes": 1,
            "layerNumber": 10000,
            "layerDT": 0,
            "data": [
                [[0, -75], [900, 525]]
            ]
        },
        "15": {
            "numShapes": 6,
            "layerNumber": 2000,
            "layerDT": 0,
            "data": [
                [[0, -50], [900, 0]],
                [[0, 50], [900, 100]],
                [[0, 150], [900, 200]],
                [[0, 250], [900, 300]],
                [[0, 350], [900, 400]],
                [[0, 450], [900, 500]]
            ]
        },
        "16": {
            "numShapes": 2,
            "layerNumber": 310,
            "layerDT": 0,
            "data": [
                [[-30, -75], [30, 525]],
                [[870, -75], [930, 525]]
            ]
        },
        "17": {
            "numShapes": 2,
            "layerNumber": 601,
            "layerDT": 0,
            "data": [
                [[234, -45], [306, 65]],
                [[594, -45], [666, 65]]
            ]
        }
    },
    "numLayers": 18,
    "cellBbox": [
        [-30, -75],
        [930, 525]
    ]
};

export const DFFSRData = {
    "cellName": "DFFSR",
    "layers": {
        "0": {
            "numShapes": 30,
            "layerNumber": 400,
            "layerDT": 0,
            "data": [
                [
                    [
                        54,
                        -55
                    ],
                    [
                        126,
                        75
                    ]
                ],
                [
                    [
                        414,
                        -55
                    ],
                    [
                        486,
                        75
                    ]
                ],
                [
                    [
                        774,
                        -55
                    ],
                    [
                        846,
                        75
                    ]
                ],
                [
                    [
                        1674,
                        -55
                    ],
                    [
                        1746,
                        75
                    ]
                ],
                [
                    [
                        1854,
                        -55
                    ],
                    [
                        1926,
                        75
                    ]
                ],
                [
                    [
                        2934,
                        -55
                    ],
                    [
                        3006,
                        75
                    ]
                ],
                [
                    [
                        3114,
                        -55
                    ],
                    [
                        3186,
                        75
                    ]
                ],
                [
                    [
                        3654,
                        -55
                    ],
                    [
                        3726,
                        75
                    ]
                ],
                [
                    [
                        54,
                        233
                    ],
                    [
                        126,
                        605
                    ]
                ],
                [
                    [
                        414,
                        233
                    ],
                    [
                        486,
                        605
                    ]
                ],
                [
                    [
                        774,
                        233
                    ],
                    [
                        846,
                        605
                    ]
                ],
                [
                    [
                        1494,
                        233
                    ],
                    [
                        1566,
                        605
                    ]
                ],
                [
                    [
                        2034,
                        233
                    ],
                    [
                        2106,
                        605
                    ]
                ],
                [
                    [
                        2754,
                        233
                    ],
                    [
                        2826,
                        605
                    ]
                ],
                [
                    [
                        3114,
                        233
                    ],
                    [
                        3186,
                        605
                    ]
                ],
                [
                    [
                        3474,
                        233
                    ],
                    [
                        3546,
                        605
                    ]
                ],
                [
                    [
                        3654,
                        233
                    ],
                    [
                        3726,
                        605
                    ]
                ],
                [
                    [
                        594,
                        -75
                    ],
                    [
                        666,
                        625
                    ]
                ],
                [
                    [
                        234,
                        -75
                    ],
                    [
                        306,
                        625
                    ]
                ],
                [
                    [
                        3294,
                        -75
                    ],
                    [
                        3366,
                        625
                    ]
                ],
                [
                    [
                        2394,
                        -75
                    ],
                    [
                        2466,
                        625
                    ]
                ],
                [
                    [
                        2574,
                        -75
                    ],
                    [
                        2646,
                        625
                    ]
                ],
                [
                    [
                        2934,
                        85
                    ],
                    [
                        3006,
                        625
                    ]
                ],
                [
                    [
                        1314,
                        -75
                    ],
                    [
                        1386,
                        625
                    ]
                ],
                [
                    [
                        1674,
                        85
                    ],
                    [
                        1746,
                        625
                    ]
                ],
                [
                    [
                        954,
                        -75
                    ],
                    [
                        1026,
                        625
                    ]
                ],
                [
                    [
                        1854,
                        85
                    ],
                    [
                        1926,
                        625
                    ]
                ],
                [
                    [
                        2214,
                        -75
                    ],
                    [
                        2286,
                        625
                    ]
                ],
                [
                    [
                        1134,
                        -75
                    ],
                    [
                        1206,
                        625
                    ]
                ],
                [
                    [
                        3834,
                        -75
                    ],
                    [
                        3906,
                        625
                    ]
                ]
            ]
        },
        "1": {
            "numShapes": 22,
            "layerNumber": 402,
            "layerDT": 0,
            "data": [
                [
                    [
                        3294,
                        -75
                    ],
                    [
                        3366,
                        317
                    ]
                ],
                [
                    [
                        594,
                        -75
                    ],
                    [
                        666,
                        625
                    ]
                ],
                [
                    [
                        234,
                        -75
                    ],
                    [
                        306,
                        625
                    ]
                ],
                [
                    [
                        54,
                        -55
                    ],
                    [
                        126,
                        317
                    ]
                ],
                [
                    [
                        414,
                        -55
                    ],
                    [
                        486,
                        317
                    ]
                ],
                [
                    [
                        774,
                        -55
                    ],
                    [
                        846,
                        317
                    ]
                ],
                [
                    [
                        1674,
                        -55
                    ],
                    [
                        1746,
                        317
                    ]
                ],
                [
                    [
                        1854,
                        -55
                    ],
                    [
                        1926,
                        317
                    ]
                ],
                [
                    [
                        2934,
                        -55
                    ],
                    [
                        3006,
                        317
                    ]
                ],
                [
                    [
                        3114,
                        -55
                    ],
                    [
                        3186,
                        317
                    ]
                ],
                [
                    [
                        3654,
                        -55
                    ],
                    [
                        3726,
                        317
                    ]
                ],
                [
                    [
                        3474,
                        -75
                    ],
                    [
                        3546,
                        317
                    ]
                ],
                [
                    [
                        2394,
                        -75
                    ],
                    [
                        2466,
                        625
                    ]
                ],
                [
                    [
                        2574,
                        -75
                    ],
                    [
                        2646,
                        625
                    ]
                ],
                [
                    [
                        1314,
                        -75
                    ],
                    [
                        1386,
                        625
                    ]
                ],
                [
                    [
                        1494,
                        -75
                    ],
                    [
                        1566,
                        317
                    ]
                ],
                [
                    [
                        954,
                        -75
                    ],
                    [
                        1026,
                        625
                    ]
                ],
                [
                    [
                        2214,
                        -75
                    ],
                    [
                        2286,
                        625
                    ]
                ],
                [
                    [
                        1134,
                        -75
                    ],
                    [
                        1206,
                        625
                    ]
                ],
                [
                    [
                        2754,
                        -75
                    ],
                    [
                        2826,
                        317
                    ]
                ],
                [
                    [
                        3834,
                        -75
                    ],
                    [
                        3906,
                        625
                    ]
                ],
                [
                    [
                        2034,
                        -75
                    ],
                    [
                        2106,
                        317
                    ]
                ]
            ]
        },
        "2": {
            "numShapes": 21,
            "layerNumber": 305,
            "layerDT": 0,
            "data": [
                [
                    [
                        330,
                        -75
                    ],
                    [
                        390,
                        625
                    ]
                ],
                [
                    [
                        690,
                        -75
                    ],
                    [
                        750,
                        625
                    ]
                ],
                [
                    [
                        1770,
                        -75
                    ],
                    [
                        1830,
                        625
                    ]
                ],
                [
                    [
                        3030,
                        -75
                    ],
                    [
                        3090,
                        625
                    ]
                ],
                [
                    [
                        3570,
                        -75
                    ],
                    [
                        3630,
                        625
                    ]
                ],
                [
                    [
                        510,
                        -59
                    ],
                    [
                        570,
                        609
                    ]
                ],
                [
                    [
                        1410,
                        -59
                    ],
                    [
                        1470,
                        609
                    ]
                ],
                [
                    [
                        3210,
                        -59
                    ],
                    [
                        3270,
                        609
                    ]
                ],
                [
                    [
                        3390,
                        -59
                    ],
                    [
                        3450,
                        609
                    ]
                ],
                [
                    [
                        2130,
                        -59
                    ],
                    [
                        2190,
                        609
                    ]
                ],
                [
                    [
                        2670,
                        -59
                    ],
                    [
                        2730,
                        609
                    ]
                ],
                [
                    [
                        870,
                        -59
                    ],
                    [
                        930,
                        609
                    ]
                ],
                [
                    [
                        1950,
                        -59
                    ],
                    [
                        2010,
                        609
                    ]
                ],
                [
                    [
                        150,
                        -59
                    ],
                    [
                        210,
                        609
                    ]
                ],
                [
                    [
                        1230,
                        -59
                    ],
                    [
                        1290,
                        609
                    ]
                ],
                [
                    [
                        2310,
                        -59
                    ],
                    [
                        2370,
                        609
                    ]
                ],
                [
                    [
                        1590,
                        -59
                    ],
                    [
                        1650,
                        609
                    ]
                ],
                [
                    [
                        1050,
                        -59
                    ],
                    [
                        1110,
                        609
                    ]
                ],
                [
                    [
                        2490,
                        -59
                    ],
                    [
                        2550,
                        609
                    ]
                ],
                [
                    [
                        2850,
                        -59
                    ],
                    [
                        2910,
                        609
                    ]
                ],
                [
                    [
                        3750,
                        -59
                    ],
                    [
                        3810,
                        609
                    ]
                ]
            ]
        },
        "3": {
            "numShapes": 21,
            "layerNumber": 307,
            "layerDT": 0,
            "data": [
                [
                    [
                        330,
                        -75
                    ],
                    [
                        390,
                        625
                    ]
                ],
                [
                    [
                        690,
                        -75
                    ],
                    [
                        750,
                        625
                    ]
                ],
                [
                    [
                        1770,
                        -75
                    ],
                    [
                        1830,
                        625
                    ]
                ],
                [
                    [
                        3030,
                        -75
                    ],
                    [
                        3090,
                        625
                    ]
                ],
                [
                    [
                        3570,
                        -75
                    ],
                    [
                        3630,
                        625
                    ]
                ],
                [
                    [
                        510,
                        -59
                    ],
                    [
                        570,
                        609
                    ]
                ],
                [
                    [
                        1410,
                        -59
                    ],
                    [
                        1470,
                        609
                    ]
                ],
                [
                    [
                        3210,
                        -59
                    ],
                    [
                        3270,
                        609
                    ]
                ],
                [
                    [
                        3390,
                        -59
                    ],
                    [
                        3450,
                        609
                    ]
                ],
                [
                    [
                        2130,
                        -59
                    ],
                    [
                        2190,
                        609
                    ]
                ],
                [
                    [
                        2670,
                        -59
                    ],
                    [
                        2730,
                        609
                    ]
                ],
                [
                    [
                        870,
                        -59
                    ],
                    [
                        930,
                        609
                    ]
                ],
                [
                    [
                        1950,
                        -59
                    ],
                    [
                        2010,
                        609
                    ]
                ],
                [
                    [
                        150,
                        -59
                    ],
                    [
                        210,
                        609
                    ]
                ],
                [
                    [
                        1050,
                        173
                    ],
                    [
                        1110,
                        609
                    ]
                ],
                [
                    [
                        2490,
                        173
                    ],
                    [
                        2550,
                        609
                    ]
                ],
                [
                    [
                        1590,
                        -59
                    ],
                    [
                        1650,
                        609
                    ]
                ],
                [
                    [
                        1230,
                        -59
                    ],
                    [
                        1290,
                        377
                    ]
                ],
                [
                    [
                        2310,
                        -59
                    ],
                    [
                        2370,
                        377
                    ]
                ],
                [
                    [
                        2850,
                        -59
                    ],
                    [
                        2910,
                        609
                    ]
                ],
                [
                    [
                        3750,
                        -59
                    ],
                    [
                        3810,
                        609
                    ]
                ]
            ]
        },
        "4": {
            "numShapes": 17,
            "layerNumber": 404,
            "layerDT": 0,
            "data": [
                [
                    [
                        54,
                        -45
                    ],
                    [
                        126,
                        65
                    ]
                ],
                [
                    [
                        414,
                        -45
                    ],
                    [
                        486,
                        65
                    ]
                ],
                [
                    [
                        774,
                        -45
                    ],
                    [
                        846,
                        65
                    ]
                ],
                [
                    [
                        1674,
                        -45
                    ],
                    [
                        1746,
                        65
                    ]
                ],
                [
                    [
                        1854,
                        -45
                    ],
                    [
                        1926,
                        65
                    ]
                ],
                [
                    [
                        2934,
                        -45
                    ],
                    [
                        3006,
                        65
                    ]
                ],
                [
                    [
                        3114,
                        -45
                    ],
                    [
                        3186,
                        65
                    ]
                ],
                [
                    [
                        3654,
                        -45
                    ],
                    [
                        3726,
                        65
                    ]
                ],
                [
                    [
                        54,
                        485
                    ],
                    [
                        126,
                        595
                    ]
                ],
                [
                    [
                        414,
                        485
                    ],
                    [
                        486,
                        595
                    ]
                ],
                [
                    [
                        774,
                        485
                    ],
                    [
                        846,
                        595
                    ]
                ],
                [
                    [
                        1494,
                        485
                    ],
                    [
                        1566,
                        595
                    ]
                ],
                [
                    [
                        2034,
                        485
                    ],
                    [
                        2106,
                        595
                    ]
                ],
                [
                    [
                        2754,
                        485
                    ],
                    [
                        2826,
                        595
                    ]
                ],
                [
                    [
                        3114,
                        485
                    ],
                    [
                        3186,
                        595
                    ]
                ],
                [
                    [
                        3474,
                        485
                    ],
                    [
                        3546,
                        595
                    ]
                ],
                [
                    [
                        3654,
                        485
                    ],
                    [
                        3726,
                        595
                    ]
                ]
            ]
        },
        "5": {
            "numShapes": 17,
            "layerNumber": 701,
            "layerDT": 0,
            "data": [
                [
                    [
                        500,
                        -59
                    ],
                    [
                        580,
                        9
                    ]
                ],
                [
                    [
                        1220,
                        -59
                    ],
                    [
                        1300,
                        9
                    ]
                ],
                [
                    [
                        2300,
                        -59
                    ],
                    [
                        2380,
                        9
                    ]
                ],
                [
                    [
                        2840,
                        -59
                    ],
                    [
                        2920,
                        9
                    ]
                ],
                [
                    [
                        3740,
                        -59
                    ],
                    [
                        3820,
                        9
                    ]
                ],
                [
                    [
                        1400,
                        41
                    ],
                    [
                        1480,
                        109
                    ]
                ],
                [
                    [
                        3200,
                        41
                    ],
                    [
                        3280,
                        109
                    ]
                ],
                [
                    [
                        1940,
                        141
                    ],
                    [
                        2020,
                        209
                    ]
                ],
                [
                    [
                        3380,
                        141
                    ],
                    [
                        3460,
                        209
                    ]
                ],
                [
                    [
                        860,
                        341
                    ],
                    [
                        940,
                        409
                    ]
                ],
                [
                    [
                        2120,
                        341
                    ],
                    [
                        2200,
                        409
                    ]
                ],
                [
                    [
                        2660,
                        341
                    ],
                    [
                        2740,
                        409
                    ]
                ],
                [
                    [
                        140,
                        441
                    ],
                    [
                        220,
                        509
                    ]
                ],
                [
                    [
                        1580,
                        441
                    ],
                    [
                        1660,
                        509
                    ]
                ],
                [
                    [
                        500,
                        541
                    ],
                    [
                        580,
                        609
                    ]
                ],
                [
                    [
                        1040,
                        541
                    ],
                    [
                        1120,
                        609
                    ]
                ],
                [
                    [
                        2480,
                        541
                    ],
                    [
                        2560,
                        609
                    ]
                ]
            ]
        },
        "6": {
            "numShapes": 5,
            "layerNumber": 703,
            "layerDT": 0,
            "data": [
                [
                    [
                        1040,
                        -59
                    ],
                    [
                        1120,
                        9
                    ]
                ],
                [
                    [
                        2480,
                        -59
                    ],
                    [
                        2560,
                        9
                    ]
                ],
                [
                    [
                        1040,
                        41
                    ],
                    [
                        1120,
                        109
                    ]
                ],
                [
                    [
                        1220,
                        541
                    ],
                    [
                        1300,
                        609
                    ]
                ],
                [
                    [
                        2300,
                        541
                    ],
                    [
                        2380,
                        609
                    ]
                ]
            ]
        },
        "7": {
            "numShapes": 15,
            "layerNumber": 1000,
            "layerDT": 0,
            "data": [
                [
                    [
                        224,
                        -49
                    ],
                    [
                        580,
                        -1
                    ]
                ],
                [
                    [
                        1040,
                        -49
                    ],
                    [
                        2560,
                        -1
                    ]
                ],
                [
                    [
                        2840,
                        -49
                    ],
                    [
                        3820,
                        -1
                    ]
                ],
                [
                    [
                        584,
                        51
                    ],
                    [
                        1120,
                        99
                    ]
                ],
                [
                    [
                        1400,
                        51
                    ],
                    [
                        3280,
                        99
                    ]
                ],
                [
                    [
                        1124,
                        151
                    ],
                    [
                        2020,
                        199
                    ]
                ],
                [
                    [
                        2384,
                        151
                    ],
                    [
                        3460,
                        199
                    ]
                ],
                [
                    [
                        3824,
                        151
                    ],
                    [
                        3916,
                        199
                    ]
                ],
                [
                    [
                        860,
                        351
                    ],
                    [
                        940,
                        399
                    ]
                ],
                [
                    [
                        1304,
                        351
                    ],
                    [
                        1756,
                        399
                    ]
                ],
                [
                    [
                        2120,
                        351
                    ],
                    [
                        2740,
                        399
                    ]
                ],
                [
                    [
                        140,
                        451
                    ],
                    [
                        220,
                        499
                    ]
                ],
                [
                    [
                        1580,
                        451
                    ],
                    [
                        2296,
                        499
                    ]
                ],
                [
                    [
                        2564,
                        451
                    ],
                    [
                        3016,
                        499
                    ]
                ],
                [
                    [
                        500,
                        551
                    ],
                    [
                        2560,
                        599
                    ]
                ]
            ]
        },
        "8": {
            "numShapes": 15,
            "layerNumber": 1000,
            "layerDT": 1,
            "data": [
                [
                    "A_47_71#",
                    405,
                    -25
                ],
                [
                    "A_47_71#",
                    1552,
                    575
                ],
                [
                    "A_47_4#",
                    1800,
                    -25
                ],
                [
                    "A_47_4#",
                    855,
                    75
                ],
                [
                    "A_10_61#",
                    1912,
                    475
                ],
                [
                    "A_113_6#",
                    2790,
                    475
                ],
                [
                    "A_2_6#",
                    1530,
                    375
                ],
                [
                    "A_122_6#",
                    3390,
                    -25
                ],
                [
                    "R",
                    2340,
                    75
                ],
                [
                    "A_105_6#",
                    2925,
                    175
                ],
                [
                    "A_23_27#",
                    1575,
                    175
                ],
                [
                    "S",
                    2430,
                    375
                ],
                [
                    "Q",
                    3870,
                    175
                ],
                [
                    "D",
                    900,
                    375
                ],
                [
                    "CLK",
                    180,
                    475
                ]
            ]
        },
        "9": {
            "numShapes": 9,
            "layerNumber": 700,
            "layerDT": 0,
            "data": [
                [
                    [
                        224,
                        -59
                    ],
                    [
                        316,
                        9
                    ]
                ],
                [
                    [
                        3464,
                        -59
                    ],
                    [
                        3556,
                        9
                    ]
                ],
                [
                    [
                        584,
                        41
                    ],
                    [
                        676,
                        109
                    ]
                ],
                [
                    [
                        1124,
                        141
                    ],
                    [
                        1216,
                        209
                    ]
                ],
                [
                    [
                        2384,
                        141
                    ],
                    [
                        2476,
                        209
                    ]
                ],
                [
                    [
                        3824,
                        141
                    ],
                    [
                        3916,
                        209
                    ]
                ],
                [
                    [
                        1304,
                        341
                    ],
                    [
                        1396,
                        409
                    ]
                ],
                [
                    [
                        2204,
                        441
                    ],
                    [
                        2296,
                        509
                    ]
                ],
                [
                    [
                        2564,
                        441
                    ],
                    [
                        2656,
                        509
                    ]
                ]
            ]
        },
        "10": {
            "numShapes": 4,
            "layerNumber": 702,
            "layerDT": 0,
            "data": [
                [
                    [
                        3284,
                        -59
                    ],
                    [
                        3376,
                        9
                    ]
                ],
                [
                    [
                        1664,
                        341
                    ],
                    [
                        1756,
                        409
                    ]
                ],
                [
                    [
                        1844,
                        441
                    ],
                    [
                        1936,
                        509
                    ]
                ],
                [
                    [
                        2924,
                        441
                    ],
                    [
                        3016,
                        509
                    ]
                ]
            ]
        },
        "11": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -75
                    ],
                    [
                        3960,
                        75
                    ]
                ],
                [
                    [
                        0,
                        475
                    ],
                    [
                        3960,
                        625
                    ]
                ]
            ]
        },
        "12": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 1,
            "data": [
                [
                    "VSS",
                    1980,
                    550
                ],
                [
                    "VDD",
                    1980,
                    0
                ]
            ]
        },
        "13": {
            "numShapes": 9,
            "layerNumber": 600,
            "layerDT": 0,
            "data": [
                [
                    [
                        234,
                        -16
                    ],
                    [
                        306,
                        66
                    ]
                ],
                [
                    [
                        594,
                        -16
                    ],
                    [
                        666,
                        66
                    ]
                ],
                [
                    [
                        954,
                        -16
                    ],
                    [
                        1026,
                        66
                    ]
                ],
                [
                    [
                        1134,
                        -16
                    ],
                    [
                        1206,
                        66
                    ]
                ],
                [
                    [
                        1314,
                        -16
                    ],
                    [
                        1386,
                        66
                    ]
                ],
                [
                    [
                        2214,
                        -16
                    ],
                    [
                        2286,
                        66
                    ]
                ],
                [
                    [
                        2394,
                        -16
                    ],
                    [
                        2466,
                        66
                    ]
                ],
                [
                    [
                        2574,
                        -16
                    ],
                    [
                        2646,
                        66
                    ]
                ],
                [
                    [
                        3834,
                        -16
                    ],
                    [
                        3906,
                        66
                    ]
                ]
            ]
        },
        "14": {
            "numShapes": 1,
            "layerNumber": 100,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        233
                    ],
                    [
                        3960,
                        317
                    ]
                ]
            ]
        },
        "15": {
            "numShapes": 1,
            "layerNumber": 103,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        233
                    ],
                    [
                        3960,
                        317
                    ]
                ]
            ]
        },
        "16": {
            "numShapes": 1,
            "layerNumber": 10000,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -75
                    ],
                    [
                        3960,
                        625
                    ]
                ]
            ]
        },
        "17": {
            "numShapes": 7,
            "layerNumber": 2000,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -50
                    ],
                    [
                        3960,
                        0
                    ]
                ],
                [
                    [
                        0,
                        50
                    ],
                    [
                        3960,
                        100
                    ]
                ],
                [
                    [
                        0,
                        150
                    ],
                    [
                        3960,
                        200
                    ]
                ],
                [
                    [
                        0,
                        250
                    ],
                    [
                        3960,
                        300
                    ]
                ],
                [
                    [
                        0,
                        350
                    ],
                    [
                        3960,
                        400
                    ]
                ],
                [
                    [
                        0,
                        450
                    ],
                    [
                        3960,
                        500
                    ]
                ],
                [
                    [
                        0,
                        550
                    ],
                    [
                        3960,
                        600
                    ]
                ]
            ]
        },
        "18": {
            "numShapes": 2,
            "layerNumber": 350,
            "layerDT": 0,
            "data": [
                [
                    [
                        990,
                        -59
                    ],
                    [
                        1350,
                        609
                    ]
                ],
                [
                    [
                        2250,
                        -59
                    ],
                    [
                        2610,
                        609
                    ]
                ]
            ]
        },
        "19": {
            "numShapes": 2,
            "layerNumber": 310,
            "layerDT": 0,
            "data": [
                [
                    [
                        -30,
                        -75
                    ],
                    [
                        30,
                        625
                    ]
                ],
                [
                    [
                        3930,
                        -75
                    ],
                    [
                        3990,
                        625
                    ]
                ]
            ]
        },
        "20": {
            "numShapes": 8,
            "layerNumber": 601,
            "layerDT": 0,
            "data": [
                [
                    [
                        54,
                        -45
                    ],
                    [
                        126,
                        65
                    ]
                ],
                [
                    [
                        414,
                        -45
                    ],
                    [
                        486,
                        65
                    ]
                ],
                [
                    [
                        774,
                        -45
                    ],
                    [
                        846,
                        65
                    ]
                ],
                [
                    [
                        1674,
                        -45
                    ],
                    [
                        1746,
                        65
                    ]
                ],
                [
                    [
                        1854,
                        -45
                    ],
                    [
                        1926,
                        65
                    ]
                ],
                [
                    [
                        2934,
                        -45
                    ],
                    [
                        3006,
                        65
                    ]
                ],
                [
                    [
                        3114,
                        -45
                    ],
                    [
                        3186,
                        65
                    ]
                ],
                [
                    [
                        3654,
                        -45
                    ],
                    [
                        3726,
                        65
                    ]
                ]
            ]
        }
    },
    "numLayers": 21,
    "cellBbox": [
        [
            -30,
            -75
        ],
        [
            3990,
            625
        ]
    ]
}

export const HAXData = {
    "cellName": "HAX1",
    "layers": {
        "0": {
            "numShapes": 12,
            "layerNumber": 400,
            "layerDT": 0,
            "data": [
                [
                    [
                        234,
                        375
                    ],
                    [
                        306,
                        505
                    ]
                ],
                [
                    [
                        774,
                        375
                    ],
                    [
                        846,
                        505
                    ]
                ],
                [
                    [
                        1134,
                        375
                    ],
                    [
                        1206,
                        505
                    ]
                ],
                [
                    [
                        954,
                        -75
                    ],
                    [
                        1026,
                        525
                    ]
                ],
                [
                    [
                        414,
                        -75
                    ],
                    [
                        486,
                        525
                    ]
                ],
                [
                    [
                        594,
                        -75
                    ],
                    [
                        666,
                        525
                    ]
                ],
                [
                    [
                        774,
                        -75
                    ],
                    [
                        846,
                        267
                    ]
                ],
                [
                    [
                        1134,
                        -75
                    ],
                    [
                        1206,
                        267
                    ]
                ],
                [
                    [
                        54,
                        -75
                    ],
                    [
                        126,
                        525
                    ]
                ],
                [
                    [
                        234,
                        -55
                    ],
                    [
                        306,
                        267
                    ]
                ],
                [
                    [
                        1314,
                        -55
                    ],
                    [
                        1386,
                        267
                    ]
                ],
                [
                    [
                        1494,
                        -75
                    ],
                    [
                        1566,
                        525
                    ]
                ]
            ]
        },
        "1": {
            "numShapes": 8,
            "layerNumber": 402,
            "layerDT": 0,
            "data": [
                [
                    [
                        594,
                        -75
                    ],
                    [
                        666,
                        409
                    ]
                ],
                [
                    [
                        954,
                        141
                    ],
                    [
                        1026,
                        525
                    ]
                ],
                [
                    [
                        414,
                        -75
                    ],
                    [
                        486,
                        525
                    ]
                ],
                [
                    [
                        54,
                        -75
                    ],
                    [
                        126,
                        525
                    ]
                ],
                [
                    [
                        234,
                        183
                    ],
                    [
                        306,
                        505
                    ]
                ],
                [
                    [
                        774,
                        183
                    ],
                    [
                        846,
                        505
                    ]
                ],
                [
                    [
                        1134,
                        183
                    ],
                    [
                        1206,
                        505
                    ]
                ],
                [
                    [
                        1314,
                        85
                    ],
                    [
                        1386,
                        525
                    ]
                ]
            ]
        },
        "2": {
            "numShapes": 8,
            "layerNumber": 305,
            "layerDT": 0,
            "data": [
                [
                    [
                        690,
                        -75
                    ],
                    [
                        750,
                        525
                    ]
                ],
                [
                    [
                        510,
                        -75
                    ],
                    [
                        570,
                        525
                    ]
                ],
                [
                    [
                        1050,
                        -75
                    ],
                    [
                        1110,
                        525
                    ]
                ],
                [
                    [
                        330,
                        -75
                    ],
                    [
                        390,
                        525
                    ]
                ],
                [
                    [
                        870,
                        -75
                    ],
                    [
                        930,
                        525
                    ]
                ],
                [
                    [
                        150,
                        -75
                    ],
                    [
                        210,
                        525
                    ]
                ],
                [
                    [
                        1230,
                        -75
                    ],
                    [
                        1290,
                        525
                    ]
                ],
                [
                    [
                        1410,
                        -75
                    ],
                    [
                        1470,
                        525
                    ]
                ]
            ]
        },
        "3": {
            "numShapes": 8,
            "layerNumber": 307,
            "layerDT": 0,
            "data": [
                [
                    [
                        1410,
                        -75
                    ],
                    [
                        1470,
                        525
                    ]
                ],
                [
                    [
                        510,
                        -75
                    ],
                    [
                        570,
                        525
                    ]
                ],
                [
                    [
                        1050,
                        -75
                    ],
                    [
                        1110,
                        525
                    ]
                ],
                [
                    [
                        330,
                        -75
                    ],
                    [
                        390,
                        525
                    ]
                ],
                [
                    [
                        870,
                        -75
                    ],
                    [
                        930,
                        525
                    ]
                ],
                [
                    [
                        150,
                        -75
                    ],
                    [
                        210,
                        525
                    ]
                ],
                [
                    [
                        1230,
                        -75
                    ],
                    [
                        1290,
                        525
                    ]
                ],
                [
                    [
                        690,
                        123
                    ],
                    [
                        750,
                        525
                    ]
                ]
            ]
        },
        "4": {
            "numShapes": 5,
            "layerNumber": 404,
            "layerDT": 0,
            "data": [
                [
                    [
                        234,
                        385
                    ],
                    [
                        306,
                        495
                    ]
                ],
                [
                    [
                        774,
                        385
                    ],
                    [
                        846,
                        495
                    ]
                ],
                [
                    [
                        1134,
                        385
                    ],
                    [
                        1206,
                        495
                    ]
                ],
                [
                    [
                        234,
                        -45
                    ],
                    [
                        306,
                        65
                    ]
                ],
                [
                    [
                        1314,
                        -45
                    ],
                    [
                        1386,
                        65
                    ]
                ]
            ]
        },
        "5": {
            "numShapes": 7,
            "layerNumber": 701,
            "layerDT": 0,
            "data": [
                [
                    [
                        140,
                        -59
                    ],
                    [
                        220,
                        9
                    ]
                ],
                [
                    [
                        1220,
                        -59
                    ],
                    [
                        1300,
                        9
                    ]
                ],
                [
                    [
                        500,
                        241
                    ],
                    [
                        580,
                        309
                    ]
                ],
                [
                    [
                        1040,
                        241
                    ],
                    [
                        1120,
                        309
                    ]
                ],
                [
                    [
                        320,
                        341
                    ],
                    [
                        400,
                        409
                    ]
                ],
                [
                    [
                        860,
                        341
                    ],
                    [
                        940,
                        409
                    ]
                ],
                [
                    [
                        680,
                        441
                    ],
                    [
                        760,
                        509
                    ]
                ]
            ]
        },
        "6": {
            "numShapes": 1,
            "layerNumber": 703,
            "layerDT": 0,
            "data": [
                [
                    [
                        1400,
                        -59
                    ],
                    [
                        1480,
                        9
                    ]
                ]
            ]
        },
        "7": {
            "numShapes": 9,
            "layerNumber": 1000,
            "layerDT": 0,
            "data": [
                [
                    [
                        140,
                        -49
                    ],
                    [
                        676,
                        -1
                    ]
                ],
                [
                    [
                        944,
                        -49
                    ],
                    [
                        1480,
                        -1
                    ]
                ],
                [
                    [
                        584,
                        51
                    ],
                    [
                        1036,
                        99
                    ]
                ],
                [
                    [
                        764,
                        151
                    ],
                    [
                        1216,
                        199
                    ]
                ],
                [
                    [
                        44,
                        251
                    ],
                    [
                        136,
                        299
                    ]
                ],
                [
                    [
                        500,
                        251
                    ],
                    [
                        1120,
                        299
                    ]
                ],
                [
                    [
                        320,
                        351
                    ],
                    [
                        940,
                        399
                    ]
                ],
                [
                    [
                        584,
                        451
                    ],
                    [
                        1036,
                        499
                    ]
                ],
                [
                    [
                        1304,
                        451
                    ],
                    [
                        1576,
                        499
                    ]
                ]
            ]
        },
        "8": {
            "numShapes": 9,
            "layerNumber": 1000,
            "layerDT": 1,
            "data": [
                [
                    "A_2_74#",
                    1237,
                    -25
                ],
                [
                    "A_2_74#",
                    765,
                    475
                ],
                [
                    "A_41_74#",
                    405,
                    -25
                ],
                [
                    "A_41_74#",
                    810,
                    75
                ],
                [
                    "YC",
                    1440,
                    475
                ],
                [
                    "A_38_6#",
                    990,
                    175
                ],
                [
                    "A",
                    630,
                    375
                ],
                [
                    "B",
                    810,
                    275
                ],
                [
                    "YS",
                    90,
                    275
                ]
            ]
        },
        "9": {
            "numShapes": 6,
            "layerNumber": 700,
            "layerDT": 0,
            "data": [
                [
                    [
                        584,
                        -59
                    ],
                    [
                        676,
                        9
                    ]
                ],
                [
                    [
                        944,
                        -59
                    ],
                    [
                        1036,
                        9
                    ]
                ],
                [
                    [
                        584,
                        41
                    ],
                    [
                        676,
                        109
                    ]
                ],
                [
                    [
                        44,
                        241
                    ],
                    [
                        136,
                        309
                    ]
                ],
                [
                    [
                        944,
                        441
                    ],
                    [
                        1036,
                        509
                    ]
                ],
                [
                    [
                        1304,
                        441
                    ],
                    [
                        1396,
                        509
                    ]
                ]
            ]
        },
        "10": {
            "numShapes": 5,
            "layerNumber": 702,
            "layerDT": 0,
            "data": [
                [
                    [
                        944,
                        41
                    ],
                    [
                        1036,
                        109
                    ]
                ],
                [
                    [
                        764,
                        141
                    ],
                    [
                        856,
                        209
                    ]
                ],
                [
                    [
                        1124,
                        141
                    ],
                    [
                        1216,
                        209
                    ]
                ],
                [
                    [
                        584,
                        441
                    ],
                    [
                        676,
                        509
                    ]
                ],
                [
                    [
                        1484,
                        441
                    ],
                    [
                        1576,
                        509
                    ]
                ]
            ]
        },
        "11": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -75
                    ],
                    [
                        1620,
                        75
                    ]
                ],
                [
                    [
                        0,
                        375
                    ],
                    [
                        1620,
                        525
                    ]
                ]
            ]
        },
        "12": {
            "numShapes": 2,
            "layerNumber": 800,
            "layerDT": 1,
            "data": [
                [
                    "VDD",
                    810,
                    450
                ],
                [
                    "VSS",
                    810,
                    0
                ]
            ]
        },
        "13": {
            "numShapes": 1,
            "layerNumber": 600,
            "layerDT": 0,
            "data": [
                [
                    [
                        54,
                        -16
                    ],
                    [
                        126,
                        66
                    ]
                ]
            ]
        },
        "14": {
            "numShapes": 2,
            "layerNumber": 100,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        183
                    ],
                    [
                        690,
                        267
                    ]
                ],
                [
                    [
                        750,
                        183
                    ],
                    [
                        1620,
                        267
                    ]
                ]
            ]
        },
        "15": {
            "numShapes": 2,
            "layerNumber": 103,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        183
                    ],
                    [
                        1410,
                        267
                    ]
                ],
                [
                    [
                        1470,
                        183
                    ],
                    [
                        1620,
                        267
                    ]
                ]
            ]
        },
        "16": {
            "numShapes": 1,
            "layerNumber": 10000,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -75
                    ],
                    [
                        1620,
                        525
                    ]
                ]
            ]
        },
        "17": {
            "numShapes": 6,
            "layerNumber": 2000,
            "layerDT": 0,
            "data": [
                [
                    [
                        0,
                        -50
                    ],
                    [
                        1620,
                        0
                    ]
                ],
                [
                    [
                        0,
                        50
                    ],
                    [
                        1620,
                        100
                    ]
                ],
                [
                    [
                        0,
                        150
                    ],
                    [
                        1620,
                        200
                    ]
                ],
                [
                    [
                        0,
                        250
                    ],
                    [
                        1620,
                        300
                    ]
                ],
                [
                    [
                        0,
                        350
                    ],
                    [
                        1620,
                        400
                    ]
                ],
                [
                    [
                        0,
                        450
                    ],
                    [
                        1620,
                        500
                    ]
                ]
            ]
        },
        "18": {
            "numShapes": 2,
            "layerNumber": 350,
            "layerDT": 0,
            "data": [
                [
                    [
                        630,
                        -59
                    ],
                    [
                        810,
                        509
                    ]
                ],
                [
                    [
                        1350,
                        -59
                    ],
                    [
                        1530,
                        509
                    ]
                ]
            ]
        },
        "19": {
            "numShapes": 2,
            "layerNumber": 310,
            "layerDT": 0,
            "data": [
                [
                    [
                        -30,
                        -75
                    ],
                    [
                        30,
                        525
                    ]
                ],
                [
                    [
                        1590,
                        -75
                    ],
                    [
                        1650,
                        525
                    ]
                ]
            ]
        },
        "20": {
            "numShapes": 3,
            "layerNumber": 601,
            "layerDT": 0,
            "data": [
                [
                    [
                        234,
                        385
                    ],
                    [
                        306,
                        495
                    ]
                ],
                [
                    [
                        774,
                        385
                    ],
                    [
                        846,
                        495
                    ]
                ],
                [
                    [
                        1134,
                        385
                    ],
                    [
                        1206,
                        495
                    ]
                ]
            ]
        },
        "21": {
            "numShapes": 13,
            "layerNumber": 2050,
            "layerDT": 0,
            "data": [
                [
                    [
                        95,
                        -75
                    ],
                    [
                        145,
                        525
                    ]
                ],
                [
                    [
                        215,
                        -75
                    ],
                    [
                        265,
                        525
                    ]
                ],
                [
                    [
                        335,
                        -75
                    ],
                    [
                        385,
                        525
                    ]
                ],
                [
                    [
                        455,
                        -75
                    ],
                    [
                        505,
                        525
                    ]
                ],
                [
                    [
                        575,
                        -75
                    ],
                    [
                        625,
                        525
                    ]
                ],
                [
                    [
                        695,
                        -75
                    ],
                    [
                        745,
                        525
                    ]
                ],
                [
                    [
                        815,
                        -75
                    ],
                    [
                        865,
                        525
                    ]
                ],
                [
                    [
                        935,
                        -75
                    ],
                    [
                        985,
                        525
                    ]
                ],
                [
                    [
                        1055,
                        -75
                    ],
                    [
                        1105,
                        525
                    ]
                ],
                [
                    [
                        1175,
                        -75
                    ],
                    [
                        1225,
                        525
                    ]
                ],
                [
                    [
                        1295,
                        -75
                    ],
                    [
                        1345,
                        525
                    ]
                ],
                [
                    [
                        1415,
                        -75
                    ],
                    [
                        1465,
                        525
                    ]
                ],
                [
                    [
                        1535,
                        -75
                    ],
                    [
                        1585,
                        525
                    ]
                ]
            ]
        }
    },
    "numLayers": 22,
    "cellBbox": [
        [
            -30,
            -75
        ],
        [
            1650,
            525
        ]
    ]
}