import axios from 'axios';

const locationsData = () => axios.get('../db/locations.json');

export default { locationsData };
