// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++){
	const eachPokemon = document.createElement('div');
	eachPokemon.classList.add('eachPokemon');
	const label = document.createElement('span');
	// label.classList.add('label');
	label.innerText = `#${i}`;
	const newImg = document.createElement('img');
	// newImg.classList.add('newImg');
	newImg.src = `${baseURL}${i}.png`

	eachPokemon.appendChild(newImg);
	eachPokemon.appendChild(label);
	container.appendChild(eachPokemon)
}
