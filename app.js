const menu = {
   _courses: {
    appetizers: [],
      mains: [], 
        desserts: []
  },
  
  get appetizers() {return this._courses.appetizers;},
  get mains() {return this._courses.mains;},
  get desserts() {return this._courses.desserts;}, 
  
  
  set appetizers(appetizers) {
      appetizers = this._courses.appetizers;
        },
  set mains(mains) {
      mains = this._courses.mains; 
        },
  set desserts(desserts) {
      desserts = this._courses.desserts;
        },
  
  get courses() {
                return {
                  appetizers: this.appetizers,
                  mains: this.mains,
                  desserts: this.desserts,
                };
              },
  
  addDishToCourse (courseName, dishName, dishPrice) {
                  const dish = {
                    name: dishName,
                    price: dishPrice,
                  };
                   return this._courses[courseName].push(dish);
                },
                  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
    generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }        
  
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Cheese Nachos', 3.25);
menu.addDishToCourse('appetizers', 'Greek Salad', 5.25);

menu.addDishToCourse('mains', 'Spagetti', 10.5);
menu.addDishToCourse('mains', 'Steak', 18.5);
menu.addDishToCourse('mains', 'Chicken', 15.5);

menu.addDishToCourse('desserts', 'Ice cream', 3.25);
menu.addDishToCourse('desserts', 'Brownies', 4.25);


let meal = menu.generateRandomMeal();
console.log(meal);



