# Dogtopia - API Project

## Description
- A JSON API that pulls various dogs breeds and corresponding information 

- Using an application like Postman one can 

### Code Snippets ###

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fbfc9545a2msh70ceca3a86f8c18p1a8c9ejsnd9bc74533654',
		'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
	}
};

fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/Cretan%20Hound', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

### Example Response ###

"_id": "63517bf0e506fa31bcb3dcee",
    "id": [],
    "breed": "Akbash",
    "origin": "Turkey",
    "url": "https://en.wikipedia.org/wiki/Akbash",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Akbash_Dog_male_2016.jpg/220px-Akbash_Dog_male_2016.jpg",
    "height": {
        "dogs": "28–32 in (71–81 cm)",
        "bitches": "27–30 in (69–76 cm)"
    },
    "weight": {
        "dogs": "90–140 lb (41–64 kg)",
        "bitches": "75–105 lb (34–48 kg)"
    },
    "coat": "Medium or long double coat",
    "__v": 0
}

## Technical Requirements
- Be built using Express and Mongoose.
- Have at least one model.
- Have complete CRUD functionality implemented with RESTful routes. (You may logically distribute CRUD functionality across models, should you decide to implement more than one. This is only allowed when it does not make sense in the context of your application to have full CRUD on one model).



### Contributions
- Partial source code borrow from Harry Potter API lab
- Dog breeds API Documentation - https://rapidapi.com/myapos--FqlEzvrlv/api/dog-breeds2