import 'ol/ol.css';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import MousePosition from 'ol/control/MousePosition';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import { createStringXY } from 'ol/coordinate';
import View from 'ol/View';
import {getCenter} from 'ol/extent';
import {defaults as defaultControls} from 'ol/control';

import overworld from "./overworld/overworld.png"
import mtMoon from "./inside_images/Mt.Moon.png"
import mtMoon3 from "./inside_images/Mt.Moon3.png"
import viridianForest from "./inside_images/Viridian_Forest.png"
import viridianCityGym from "./inside_images/Viridian_City_Gym.png"
import pewterCityGym from "./inside_images/Pewter_City_Gym.png"
import lab from "./inside_images/Lab.png"
import ceruleanCityGym from "./inside_images/Cerulean_City_Gym.png"
import surge from "./inside_images/Surge.png"
import erika from "./inside_images/Erika.png"
import sabrina from "./inside_images/Sabrina.png"
import dojo from "./inside_images/Dojo.png"

// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.
const extent = [0, 0, 6528, 6400];
const projection = new Projection({
  code: 'xkcd-image',
  units: 'pixels',
  extent: extent,
});

labExtent = [1192, 2017, 1192 + 65, 2017 + 70]
viridianForestExtent = [870, 4080, 870 + 313, 4080 + 400]
viridianCityGymExtent = [1300, 3350, 1300 + 90, 3350 + 108]
pewterCityGymExtent = [964, 5165, 964 + 104, 5165 + 128]
mtMoonExtent = [2760 , 5510, 2952, 5670]
mtMoon3Extent = [2760 + 192 , 5510, 2952 + 192, 5670]
ceruleanCityGymExtent = [4675, 5405, 4675 + 107, 5405 + 126]
surgeExtent = [4430, 2780,4430 + 55,2780 + 105]
erikaExtent = [3040, 3970,3040 + 65,3970 + 100]
sabrinaExtent = [4755, 4385,4755 + 116, 4385 + 100]
dojoExtent = [4664, 4385, 4664 + 78, 4385 + 96]

const mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: 'EPSG:4326',
  // comment the following two lines to have the mouse position
  // be placed within the map.
  // className: 'custom-mouse-position',
  // target: document.getElementById('mouse-position'),
});

const map = new Map({
  controls: defaultControls().extend([mousePositionControl]),
  layers: [
    new ImageLayer({
      maxZoom: 7,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: overworld,
        projection: projection,
        imageExtent: extent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: mtMoon,
        projection: projection,
        imageExtent: mtMoonExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: mtMoon3,
        projection: projection,
        imageExtent: mtMoon3Extent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: viridianForest,
        projection: projection,
        imageExtent: viridianForestExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: pewterCityGym,
        projection: projection,
        imageExtent: pewterCityGymExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: viridianCityGym,
        projection: projection,
        imageExtent: viridianCityGymExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: lab,
        projection: projection,
        imageExtent: labExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: ceruleanCityGym,
        projection: projection,
        imageExtent: ceruleanCityGymExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: surge,
        projection: projection,
        imageExtent: surgeExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: erika,
        projection: projection,
        imageExtent: erikaExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: sabrina,
        projection: projection,
        imageExtent: sabrinaExtent,
      }),
    }),
    new ImageLayer({
      minZoom: 5,
      source: new Static({
        attributions: 'Made by <a href="https://twitch.tv/QwarZach">QwarZach</a>',
        url: dojo,
        projection: projection,
        imageExtent: dojoExtent,
      }),
    }),
    
  ],
  target: 'map',
  view: new View({
    projection: projection,
    center: getCenter(extent),
    zoom: 2,
    maxZoom: 20,
  }),
});

const projectionSelect = document.getElementById('projection');
projectionSelect.addEventListener('change', function (event) {
  mousePositionControl.setProjection(event.target.value);
});

const precisionInput = document.getElementById('precision');
precisionInput.addEventListener('change', function (event) {
  const format = createStringXY(event.target.valueAsNumber);
  mousePositionControl.setCoordinateFormat(format);
});