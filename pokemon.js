const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


for (let i = 1; i<=151; i++){
    const innerContain = document.createElement('div')
    const newImg = document.createElement('img');
    const label = document.createElement('span');
    label.innerText = `#${i}`
    newImg.src = `${baseUrl}${i}.png`;
    innerContain.appendChild(label);
    innerContain.appendChild(newImg);
    container.appendChild(innerContain);
    // innerContain.style.display = 'inline-Block';
    // container.style.display = 'inline-Block';
}