import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div id=${location.id} class="card location col-2">`;
    domString += '<div class="card">';
    domString += '<div class="card-header">Card Title';
    domString += `<h5>${location.name}</h5>`;
    domString += `<h5>${location.address}</h5>`;
    domString += `<div class="image"><img src=${location.imageUrl} style="width:70%"></div>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationsData.locationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
