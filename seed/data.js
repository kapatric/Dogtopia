import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://ultimate-tennis1.p.rapidapi.com/rankings/atp/singles/25/current',
  headers: {
    'X-RapidAPI-Key': '3a08616c39mshc4f003a6ecaf137p13c3dfjsn3d1927609e09',
    'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});