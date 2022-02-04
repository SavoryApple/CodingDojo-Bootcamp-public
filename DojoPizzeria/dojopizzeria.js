function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("pizza1:", pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("pizza2:", pizza2);

var pizza3 = pizzaOven("regular", "white", ["parmesan", "asagio"], ["pineapple", "bacon", "red pepper flakes"]);
console.log("pizza3:", pizza3);

var pizza4 = pizzaOven("extra thin", "pesto", ["mozarella", "goat cheese"], ["sliced tomatoes", "roasted garlic", "carmelized onions"]);
console.log("pizza4:", pizza4);


//random pizza
    var pizza = {};
    pizza.crustType = ["thin", "deep dish", "extra thin", "flatbread", "normal"];
    pizza.sauceType = ["pesto", "marinara", "white", "No sauce!", "oil only"];
    pizza.cheeses = ["parmesan", "asagio", "mozarella", "goat cheese", "feta"];
    pizza.toppings = ["pineapple", "bacon", "roasted garlic", "carmelized onions", "pepperoni"];
    function randomPizza() {
        console.log("Crust:", pizza.crustType[Math.floor(Math.random() * 5)]);
        console.log("Sauce:", pizza.sauceType[Math.floor(Math.random() * 5)]);
        
        var random = Math.floor(Math.random() * 5);
        if(random == 0){
            console.log("Cheese: No cheese!")
        }
        else if(random == 1){
            console.log("Cheese:", pizza.cheeses[Math.floor(Math.random() * 5)]);
        }
        else if(random == 2){
            console.log("Cheese:", pizza.cheeses[Math.floor(Math.random() * 5)] +', ' + pizza.cheeses[Math.floor(Math.random() * 5)]);
        }
        else if(random == 3){
            console.log("Cheese:", pizza.cheeses[Math.floor(Math.random() * 5)] +', ' + pizza.cheeses[Math.floor(Math.random() * 5)] +', ' + pizza.cheeses[Math.floor(Math.random() * 5)]);
        }
        else if(random == 4){
            console.log("Cheese:", pizza.cheeses[Math.floor(Math.random() * 5)] +', ' + pizza.cheeses[Math.floor(Math.random() * 5)] +', ' + pizza.cheeses[Math.floor(Math.random() * 5)] +', ' + pizza.cheeses[Math.floor(Math.random() * 5)]);
        }
        var random2 = Math.floor(Math.random() * 5);
        if(random2 == 0){
            console.log("Toppings: No toppings!")
        }
        else if(random2 == 1){
            console.log("Toppings:", pizza.toppings[Math.floor(Math.random() * 5)]);
        }
        else if(random2 == 2){
            console.log("Toppings:", pizza.toppings[Math.floor(Math.random() * 5)] +', ' + pizza.toppings[Math.floor(Math.random() * 5)]);
        }
        else if(random2 == 3){
            console.log("toppings:", pizza.toppings[Math.floor(Math.random() * 5)] +', ' + pizza.toppings[Math.floor(Math.random() * 5)] +', ' + pizza.toppings[Math.floor(Math.random() * 5)]);
        }
        else if(random2 == 4){
            console.log("Toppings:", pizza.toppings[Math.floor(Math.random() * 5)] +', ' + pizza.toppings[Math.floor(Math.random() * 5)] +', ' + pizza.toppings[Math.floor(Math.random() * 5)] +', ' + pizza.toppings[Math.floor(Math.random() * 5)]);
        }
}
randomPizza();
