// 이전 방식
```
function Cocktail (name, method, glass, garnish, ingredients, amounts) {
    this.name = name;
    this.method = method;
    this.glass = glass;
    this.garnish = garnish;
    this.ingredients = ingredients;
    this.amounts = amounts;
  }
}
```

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
