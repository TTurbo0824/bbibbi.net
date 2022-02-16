const cocktail = [];

let cocktailList = [
  '01_Pousse Café',
  '02_Manhattan',
  '03_Dry Martini',
  '04_Old Fashioned',
  '05_Brandy Alexander',
  '06_Singapore Sling',
  '07_Black Russian',
  '08_Margarita',
  '09_Rusty Nail',
  '10_Whiskey Sour',
];

for (let i = 0; i < cocktailList.length; i++) {
  let item = {
    id: i + 1,
    title: cocktailList[i].split('_')[1],
    image: `./images/${cocktailList[i].split('_')[0]}.jpeg`,
  };

  cocktail.push(item);
}
