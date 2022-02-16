// 이전 방식

// function Cocktail (name, method, glass, garnish, ingredients, amounts) {
//     this.name = name;
//     this.method = method;
//     this.glass = glass;
//     this.garnish = garnish;
//     this.ingredients = ingredients;
//     this.amounts = amounts;
//   }
// }

class Cocktail {
  constructor(name, method, glass, garnish, ingredients, amounts) {
    this.name = name;
    this.method = method;
    this.glass = glass;
    this.garnish = garnish;
    this.ingredients = ingredients;
    this.amounts = amounts;
  }
}

const pousseCafe = new Cocktail(
  'Pousse Café',
  'Float',
  'Steamed Liqueur Glass',
  null,
  ['Grenadine Syrup', 'Crème De Menthe(Green)', 'Brandy'],
  ['1/3 part', '1/3 part', '1/3 part']
);

const container = document.querySelector('.container');
const selectBnts = document.querySelectorAll('.select-bnt');

function generateMasonryGrid(columns, cocktails) {
  container.innerHTML = '';

  // Store all column arrays which contain the relevant cocktails
  let columnWrappers = {};

  // Create column item array and add this to columnWrapper object
  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < cocktails.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(cocktails[i]);
  }

  for (let i = 0; i < columns; i++) {
    let columnCocktails = columnWrappers[`column${i}`];
    let column = document.createElement('div');
    column.classList.add('column');

    columnCocktails.forEach((cocktail) => {
      let cocktailDiv = document.createElement('div');
      cocktailDiv.classList.add('cocktail');
      let image = document.createElement('img');
      image.src = cocktail.image;
      let overlay = document.createElement('div');
      overlay.classList.add('overlay');
      let title = document.createElement('h3');
      title.innerText = cocktail.title;

      overlay.appendChild(title);
      cocktailDiv.append(image, overlay);
      column.appendChild(cocktailDiv);
    });
    container.appendChild(column);
  }
}

selectBnts.forEach((bnt) => {
  bnt.addEventListener('click', (event) => {
    generateMasonryGrid(event.target.innerHTML, cocktail);
  });
});
