import axios from "axios";
import { promises as fsPromises } from 'fs';

const options = {
  method: 'GET',
  url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
  headers: {
    'X-RapidAPI-Key': 'fbfc9545a2msh70ceca3a86f8c18p1a8c9ejsnd9bc74533654',
    'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
  }
};

axios.request(options).then((response) => {
  fsPromises.writeFile("breeds.json", JSON.stringify(response.data))
}).catch((error) => {
	console.error(error);
});

// fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds')
//   .then(response=> response.json())
//   .then(data => fsPromises.writeFile("./breeds.json", JSON.stringify(data)))
//   .catch(error => console.error(error))
  
  