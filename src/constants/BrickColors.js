import PieceDef from '../brix/PieceDef';

export default {
  White: {
    id: 1,
    officialName: 'White',
    commonName: 'White',
    color: 'rgb(255, 255, 255)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 15}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 35}),
        new PieceDef({width: 8, height: 1, cost: 40}),
        new PieceDef({width: 10, height: 1, cost: 45}),
        new PieceDef({width: 12, height: 1, cost: 55}),
        new PieceDef({width: 16, height: 1, cost: 70})
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 10}),
        new PieceDef({width: 4, height: 1, cost: 15}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 25}),
        new PieceDef({width: 10, height: 1, cost: 25}),
        new PieceDef({width: 12, height: 1, cost: 35}),
        new PieceDef({width: 2, height: 2, cost: 15}),
        new PieceDef({width: 3, height: 2, cost: 20}),
        new PieceDef({width: 4, height: 2, cost: 20}),
        new PieceDef({width: 6, height: 2, cost: 25}),
        new PieceDef({width: 8, height: 2, cost: 35}),
        new PieceDef({width: 10, height: 2, cost: 35}),
        new PieceDef({width: 12, height: 2, cost: 40}),
        new PieceDef({width: 16, height: 2, cost: 70}),
        new PieceDef({width: 4, height: 4, cost: 30}),
        new PieceDef({width: 6, height: 4, cost: 60}),
        new PieceDef({width: 8, height: 4, cost: 65}),
        new PieceDef({width: 10, height: 4, cost: 75}),
        new PieceDef({width: 12, height: 4, cost: 80}),
        new PieceDef({width: 6, height: 6, cost: 70}),
        new PieceDef({width: 8, height: 6, cost: 85}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 15}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 25}),
        new PieceDef({height: 10, width: 1, cost: 25}),
        new PieceDef({height: 12, width: 1, cost: 35}),
        new PieceDef({height: 3, width: 2, cost: 20}),
        new PieceDef({height: 4, width: 2, cost: 20}),
        new PieceDef({height: 6, width: 2, cost: 25}),
        new PieceDef({height: 8, width: 2, cost: 35}),
        new PieceDef({height: 10, width: 2, cost: 35}),
        new PieceDef({height: 12, width: 2, cost: 40}),
        new PieceDef({height: 16, width: 2, cost: 70}),
        new PieceDef({height: 6, width: 4, cost: 60}),
        new PieceDef({height: 8, width: 4, cost: 65}),
        new PieceDef({height: 10, width: 4, cost: 75}),
        new PieceDef({height: 12, width: 4, cost: 80}),
        new PieceDef({height: 8, width: 6, cost: 85})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 20}),
        new PieceDef({width: 2, height: 2, cost: 10}),
        new PieceDef({width: 4, height: 2, cost: 30}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 20}),
        new PieceDef({height: 4, width: 1, cost: 20}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 20}),
        new PieceDef({height: 2, width: 2, cost: 10}),
        new PieceDef({height: 4, width: 2, cost: 30})
      ]
    }
  },
  'Brick Yellow': {
    id: 5,
    officialName: 'Brick Yellow',
    commonName: 'Tan',
    color: 'rgb(217, 187, 123)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 15}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 35}),
        new PieceDef({width: 8, height: 1, cost: 40}),
        new PieceDef({width: 10, height: 1, cost: 45})
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 10}),
        new PieceDef({width: 4, height: 1, cost: 15}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 25}),
        new PieceDef({width: 2, height: 2, cost: 15}),
        new PieceDef({width: 3, height: 2, cost: 20}),
        new PieceDef({width: 4, height: 2, cost: 20}),
        new PieceDef({width: 6, height: 2, cost: 25}),
        new PieceDef({width: 8, height: 2, cost: 35}),
        new PieceDef({width: 10, height: 2, cost: 35}),
        new PieceDef({width: 16, height: 2, cost: 70}),
        new PieceDef({width: 4, height: 4, cost: 30}),
        new PieceDef({width: 6, height: 4, cost: 60}),
        new PieceDef({width: 8, height: 4, cost: 65}),
        new PieceDef({width: 6, height: 6, cost: 70}),
        new PieceDef({width: 16, height: 8, cost: 215}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 15}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 25}),
        new PieceDef({height: 3, width: 2, cost: 20}),
        new PieceDef({height: 4, width: 2, cost: 20}),
        new PieceDef({height: 6, width: 2, cost: 25}),
        new PieceDef({height: 8, width: 2, cost: 35}),
        new PieceDef({height: 10, width: 2, cost: 35}),
        new PieceDef({height: 16, width: 2, cost: 70}),
        new PieceDef({height: 6, width: 4, cost: 60}),
        new PieceDef({height: 8, width: 4, cost: 65}),
        new PieceDef({height: 16, width: 8, cost: 215})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 2, height: 2, cost: 10}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 20}),
        new PieceDef({height: 6, width: 1, cost: 20})
      ]
    }
  },
  // Flesh: {
  //   id: 18,
  //   officialName: 'Nougat',
  //   commonName: 'Flesh',
  //   color: 'rgb(214, 114, 64)'
  // },
  Red: {
    id: 21,
    officialName: 'Bright Red',
    commonName: 'Red',
    color: 'rgb(222, 0, 13)'
  },
  Blue: {
    id: 23,
    officialName: 'Bright Blue',
    commonName: 'Blue',
    color: 'rgb(0, 87, 168)'
  },
  Yellow: {
    id: 24,
    officialName: 'Bright Yellow',
    commonName: 'Yellow',
    color: 'rgb(254, 196, 0)'
  },
  Black: {
    id: 26,
    officialName: 'Black',
    commonName: 'Black',
    color: 'rgb(0, 0, 0)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 15}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 35}),
        new PieceDef({width: 8, height: 1, cost: 40}),
        new PieceDef({width: 10, height: 1, cost: 45}),
        new PieceDef({width: 12, height: 1, cost: 55}),
        new PieceDef({width: 16, height: 1, cost: 70})
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 10}),
        new PieceDef({width: 4, height: 1, cost: 15}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 25}),
        new PieceDef({width: 10, height: 1, cost: 25}),
        new PieceDef({width: 2, height: 2, cost: 15}),
        new PieceDef({width: 3, height: 2, cost: 20}),
        new PieceDef({width: 4, height: 2, cost: 20}),
        new PieceDef({width: 6, height: 2, cost: 25}),
        new PieceDef({width: 8, height: 2, cost: 35}),
        new PieceDef({width: 10, height: 2, cost: 35}),
        new PieceDef({width: 12, height: 2, cost: 40}),
        new PieceDef({width: 16, height: 2, cost: 70}),
        new PieceDef({width: 4, height: 4, cost: 30}),
        new PieceDef({width: 6, height: 4, cost: 60}),
        new PieceDef({width: 8, height: 4, cost: 65}),
        new PieceDef({width: 10, height: 4, cost: 75}),
        new PieceDef({width: 12, height: 4, cost: 80}),
        new PieceDef({width: 6, height: 6, cost: 70}),
        new PieceDef({width: 8, height: 6, cost: 85}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 15}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 25}),
        new PieceDef({height: 10, width: 1, cost: 25}),
        new PieceDef({height: 2, width: 2, cost: 15}),
        new PieceDef({height: 3, width: 2, cost: 20}),
        new PieceDef({height: 4, width: 2, cost: 20}),
        new PieceDef({height: 6, width: 2, cost: 25}),
        new PieceDef({height: 8, width: 2, cost: 35}),
        new PieceDef({height: 10, width: 2, cost: 35}),
        new PieceDef({height: 12, width: 2, cost: 40}),
        new PieceDef({height: 16, width: 2, cost: 70}),
        new PieceDef({height: 4, width: 4, cost: 30}),
        new PieceDef({height: 6, width: 4, cost: 60}),
        new PieceDef({height: 8, width: 4, cost: 65}),
        new PieceDef({height: 10, width: 4, cost: 75}),
        new PieceDef({height: 12, width: 4, cost: 80}),
        new PieceDef({height: 6, width: 6, cost: 70}),
        new PieceDef({height: 8, width: 6, cost: 85})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 20}),
        new PieceDef({width: 2, height: 2, cost: 10}),
        new PieceDef({width: 4, height: 2, cost: 30}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 20}),
        new PieceDef({height: 4, width: 1, cost: 20}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 20}),
        new PieceDef({height: 2, width: 2, cost: 10}),
        new PieceDef({height: 4, width: 2, cost: 30})
      ]
    }
  },
  Green: {
    id: 28,
    officialName: 'Dark Green',
    commonName: 'Green',
    color: 'rgb(0, 123, 40)'
  },
  'Bright Green': {
    id: 37,
    officialName: 'Bright Green',
    commonName: 'Bright Green',
    color: 'rgb(0, 150, 36)'
  },
  'Dark Orange': {
    id: 38,
    officialName: 'Dark Orange',
    commonName: 'Dark Orange',
    color: 'rgb(168, 61, 21)'
  },
  'Medium Blue': {
    id: 102,
    officialName: 'Medium Blue',
    commonName: 'Medium Blue',
    color: 'rgb(71, 140, 198)'
  },
  Orange: {
    id: 106,
    officialName: 'Bright Orange',
    commonName: 'Orange',
    color: 'rgb(231, 99, 24)'
  },
  Lime: {
    id: 119,
    officialName: 'Bright Yellowish-Green',
    commonName: 'Lime',
    color: 'rgb(149, 185, 11)'
  },
  Magenta: {
    id: 124,
    officialName: 'Bright Reddish Violet',
    commonName: 'Magenta',
    color: 'rgb(156, 0, 107)'
  },
  'Sand Blue': {
    id: 135,
    officialName: 'Sand Blue',
    commonName: 'Sand Blue',
    color: 'rgb(94, 116, 140)'
  },
  'Dark Tan': {
    id: 138,
    officialName: 'Sand Yellow',
    commonName: 'Dark Tan',
    color: 'rgb(141, 116, 82)'
  },
  'Dark Blue': {
    id: 140,
    officialName: 'Earth Blue',
    commonName: 'Dark Blue',
    color: 'rgb(0, 37, 65)'
  },
  'Dark Green': {
    id: 141,
    officialName: 'Earth Green',
    commonName: 'Dark Green',
    color: 'rgb(0, 52, 22)'
  },
  'Sand Green': {
    id: 151,
    officialName: 'Sand Green',
    commonName: 'Sand Green',
    color: 'rgb(95, 130, 101)'
  },
  'Dark Red': {
    id: 154,
    officialName: 'Dark Red',
    commonName: 'Dark Red',
    color: 'rgb(128, 8, 27)'
  },
  'Bright Light Orange': {
    id: 191,
    officialName: 'Flame Yellowish Orange',
    commonName: 'Bright Light Orange',
    color: 'rgb(244, 155, 0)'
  },
  'Reddish Brown': {
    id: 192,
    officialName: 'Reddish Brown',
    commonName: 'Reddish Brown',
    color: 'rgb(91, 28, 12)'
  },
  'Light Grey': {
    id: 194,
    officialName: 'Medium Stone Grey',
    commonName: 'Light Grey',
    color: 'rgb(156, 146, 145)'
  },
  'Dark Grey': {
    id: 199,
    officialName: 'Dark Stone Grey',
    commonName: 'Dark Grey',
    color: 'rgb(76, 81, 86)'
  },
  // 'Very Light Grey': {
  //   id: 208,
  //   officialName: 'Light Stone Grey',
  //   commonName: 'Very Light Grey',
  //   color: 'rgb(228, 228, 218)'
  // },
  // 'Light Blue': {
  //   id: 212,
  //   officialName: 'Light Royal Blue',
  //   commonName: 'Light Blue',
  //   color: 'rgb(135, 192, 234)'
  // },
  'Bright Pink': {
    id: 221,
    officialName: 'Bright Purple',
    commonName: 'Bright Pink',
    color: 'rgb(222, 55, 139)'
  },
  'Light Pink': {
    id: 222,
    officialName: 'Light Purple',
    commonName: 'Light Pink',
    color: 'rgb(238, 157, 195)'
  },
  Blonde: {
    id: 226,
    officialName: 'Cool Yellow',
    commonName: 'Blonde',
    color: 'rgb(255, 255, 153)'
  },
  'Dark Purple': {
    id: 268,
    officialName: 'Medium Lilac',
    commonName: 'Dark Purple',
    color: 'rgb(44, 21, 119)'
  },
  // 'Light Flesh': {
  //   id: 283,
  //   officialName: 'Light Nougat',
  //   commonName: 'Light Flesh',
  //   color: 'rgb(245, 193, 137)'
  // },
  'Dark Brown': {
    id: 308,
    officialName: 'Dark Brown',
    commonName: 'Dark Brown',
    color: 'rgb(48, 15, 6)'
  },
  // 'Medium Dark Flesh': {
  //   id: 312,
  //   officialName: 'Medium Nougat',
  //   commonName: 'Medium Dark Flesh',
  //   color: 'rgb(170, 125, 85)'
  // },
  'Dark Azur': {
    id: 321,
    officialName: 'Dark Azur',
    commonName: 'Dark Azur',
    color: 'rgb(70, 155, 195)'
  },
  // Azure: {
  //   id: 322,
  //   officialName: 'Medium Azur',
  //   commonName: 'Azure',
  //   color: 'rgb(104, 195, 226)'
  // },
  // 'Unikitty Blue': {
  //   id: 323,
  //   officialName: 'Aqua',
  //   commonName: 'Unikitty Blue',
  //   color: 'rgb(211, 242, 234)'
  // },
  'Medium Lavender': {
    id: 324,
    officialName: 'Medium Lavender',
    commonName: 'Medium Lavender',
    color: 'rgb(160, 110, 185)'
  },
  Lavender: {
    id: 325,
    officialName: 'Lavender',
    commonName: 'Lavender',
    color: 'rgb(205, 164, 222)'
  },
  // 'Glow-in-the-dark': {
  //   id: 329,
  //   officialName: 'White Glow',
  //   commonName: 'Glow-in-the-dark',
  //   color: 'rgb(245, 243, 215)'
  // },
  'Unikitty Green': {
    id: 326,
    officialName: 'Spring Yellowish Green',
    commonName: 'Unikitty Green',
    color: 'rgb(226, 249, 154)'
  },
  'Olive Green': {
    id: 330,
    officialName: 'Olive Green',
    commonName: 'Olive Green',
    color: 'rgb(119, 119, 78)'
  },
  'Dark Lime; Medium Lime': {
    id: 331,
    officialName: 'Medium-Yellowish green',
    commonName: 'Dark Lime; Medium Lime',
    color: 'rgb(150, 185, 59)'
  }
  // 'Pearl Light Grey': {
  //   id: 131,
  //   officialName: 'Silver',
  //   commonName: 'Pearl Light Grey',
  //   color: 'rgb(141, 148, 150)'
  // },
  // 'Pearl Dark Grey': {
  //   id: 148,
  //   officialName: 'Metallic Dark Grey',
  //   commonName: 'Pearl Dark Grey',
  //   color: 'rgb(73, 63, 59)'
  // },
  // 'Glow In Dark Trans Green': {
  //   id: 294,
  //   officialName: 'Phosphorescent Green',
  //   commonName: 'Glow In Dark Trans Green',
  //   color: 'rgb(254, 252, 213)'
  // },
  // 'Pearl Gold': {
  //   id: 297,
  //   officialName: 'Warm Gold',
  //   commonName: 'Pearl Gold',
  //   color: 'rgb(170, 127, 46)'
  // }
  // 'Metalized Silver': {
  //   id: 309,
  //   officialName: 'Metalized Silver',
  //   commonName: 'Metalized Silver',
  //   color: 'rgb(206, 206, 206)'
  // },
  // 'Metalized Gold': {
  //   id: 310,
  //   officialName: 'Metalized Gold',
  //   commonName: 'Metalized Gold',
  //   color: 'rgb(223, 193, 118)'
  // },
  // 'Silver Metallic': {
  //   id: 315,
  //   officialName: 'Silver Metallic',
  //   commonName: 'Silver Metallic',
  //   color: 'rgb(140, 140, 140)'
  // },
  // 'Titanium Metallic': {
  //   id: 316,
  //   officialName: 'Titanium Metallic',
  //   commonName: 'Titanium Metallic',
  //   color: 'rgb(62, 60, 57)'
  // }
};
