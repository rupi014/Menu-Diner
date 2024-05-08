// MENU COMPLETO
const menu = {
    breakfast: {
        entrees: {
            eggs: {name: 'Eggs', price: 6},
            bacon: {name: 'Bacon', price: 5},
        },

        sides: {
            toast: {name: 'Toast', price: 2},
            fruit: {name: 'Fruit', price: 3},
            croissant: {name: 'Croissant', price: 4},
        }
    },

    lunch: {
        entrees: {
            burger: {name: 'Burger', price: 10},
            sandwich: {name: 'Sandwich', price: 8},
        },

        sides: {
            fries: {name: 'Fries', price: 3},
            salad: {name: 'Salad', price: 4},
            chips: {name: 'Chips', price: 2},
        }
    },

    dinner: {
        entrees: {
            burger: {name: 'Burger', price: 12},
            sandwich: {name: 'Sandwich', price: 10},
        },

        sides: {
            fries: {name: 'Fries', price: 5},
            salad: {name: 'Salad', price: 6},
            chips: {name: 'Chips', price: 4},
        }
    }
}


// FUNCION PARA ELEGIR DESAYUNO, ALMUERZO O CENA
function userSelect() {
    let meal = prompt("What would you like to order? (Breakfast, Lunch, or Dinner)").toLowerCase();
    if (meal === 'breakfast') {
        breakfastOrder();
    } else if (meal === 'lunch') {
        lunchOrder();
    } else if (meal === 'dinner') {
        dinnerOrder();
    } else {
        alert("Invalid input. Please try again.");
        userSelect();
    }
}

// FUNCION COMENTARIO ALEATORIO
function generateComment() {
    const coment = [
        "Great choice!",
        "Good choice!",
        "Excellent choice!",
        "You're going to love it!",
        "You're going to enjoy it!",
        "You're going to like it!",
    ] 

    return coment[Math.floor(Math.random() * coment.length)];
}


// FUNCIONES PARA ELEGIR DESAYUNO
function breakfastOrder() {
    alert(`
    BREAKFAST MENU:
    ---------------
    Entrees:
    Eggs - $6, Bacon - $5
    
    Sides:
    Toast - $2, Fruit - $3, Croissant - $4`);
    let entreeBreakfast = prompt("What entree would you like to order? (Eggs or Bacon)").toLowerCase();
    if (entreeBreakfast !== "eggs" && entreeBreakfast !== "bacon") {
        alert("Invalid input. Please try again.");
        return breakfastOrder();
    }

    alert(`You ordered the ${entreeBreakfast}. ${generateComment()}. The price is $${menu.breakfast.entrees[entreeBreakfast].price}.`);


    let sideBreakfast1 = prompt("What first side would you like to order? (Toast, Fruit, or Croissant)").toLowerCase();
    if (sideBreakfast1 !== "toast" && sideBreakfast1 !== "fruit" && sideBreakfast1 !== "croissant") {
        alert("Invalid input. Please try again.");
        return breakfastOrder();
    }

    alert(`You ordered the ${sideBreakfast1}. ${generateComment()}. The price is $${menu.breakfast.sides[sideBreakfast1].price}.`);


    let sideBreakfast2 = prompt("What second side would you like to order? (Toast, Fruit, or Croissant)").toLowerCase();
    if (sideBreakfast1 === sideBreakfast2) {
        alert("You can't repeat the same side. Please try again.");
        return breakfastOrder();
    } else if (sideBreakfast2 !== "toast" && sideBreakfast2 !== "fruit" && sideBreakfast2 !== "croissant") {
        alert("Invalid input. Please try again.");
        return breakfastOrder();
    }

    alert(`You ordered the ${sideBreakfast2}. ${generateComment()}. The price is $${menu.breakfast.sides[sideBreakfast2].price}.`);

    totalBreakfast(entreeBreakfast, sideBreakfast1, sideBreakfast2);
}


// FUNCION PARA CALCULAR EL PRECIO TOTAL DEL DESAYUNO
function totalBreakfast(entreeBreakfast, sideBreakfast1, sideBreakfast2) {
    let totalBF = 0;
    if (entreeBreakfast === "eggs") {
        totalBF += menu.breakfast.entrees.eggs.price;
    } else if (entreeBreakfast === "bacon") {
        totalBF += menu.breakfast.entrees.bacon.price;
    }
    if (sideBreakfast1 === "toast") {
        totalBF += menu.breakfast.sides.toast.price;
    } else if (sideBreakfast1 === "fruit") {
        totalBF += menu.breakfast.sides.fruit.price;
    } else if (sideBreakfast1 === "croissant") {
        totalBF += menu.breakfast.sides.croissant.price;
    }
    if (sideBreakfast2 === "toast") {
        totalBF += menu.breakfast.sides.toast.price;
    } else if (sideBreakfast2 === "fruit") {
        totalBF += menu.breakfast.sides.fruit.price;
    } else if (sideBreakfast2 === "croissant") {
        totalBF += menu.breakfast.sides.croissant.price;
    }
    alert(`
    BILL
    ----- 
    
    ${entreeBreakfast.toUpperCase()} : $${menu.breakfast.entrees[entreeBreakfast].price}
    ${sideBreakfast1.toUpperCase()}: $${menu.breakfast.sides[sideBreakfast1].price}
    ${sideBreakfast2.toUpperCase()}: $${menu.breakfast.sides[sideBreakfast2].price}
    ------
    Total: $${totalBF}.`);

}

// FUNCION PARA ELEGIR ALMUERZO
function lunchOrder() {
    alert(`
    LUNCH MENU:
    ---------------
    Entrees: 
    Burger - $10, Sandwich - $8

    Sides: 
    Fries - $3, Salad - $4, Chips - $2`);
    let entreeLunch = prompt("What entree would you like to order? (Burger or Sandwich)").toLowerCase();
    if (entreeLunch !== "burger" && entreeLunch !== "sandwich") {
        alert("Invalid input. Please try again.");
        return lunchOrder();
    }

    let extra = prompt(`
    Do you want extra ingredients? 

    - Cheese - $2
    - Bacon - $3
    - Onion - $1
    - No extra - $0
    `).toLowerCase();
    let extraCost = 0;
    if (extra === "cheese") {
        alert("You added cheese to your order.");
        extraCost += 2;
        let totalPrice = menu.lunch.entrees[entreeLunch].price + extraCost;
        alert(`You ordered the ${entreeLunch} with ${extra}. ${generateComment()}. The price is $${totalPrice}.`);
    } else if (extra === "bacon") {
        alert("You added bacon to your order.");
        extraCost += 3;
        let totalPrice = menu.lunch.entrees[entreeLunch].price + extraCost;
        alert(`You ordered the ${entreeLunch} with ${extra}. ${generateComment()}. The price is $${totalPrice}.`);
    } else if (extra === "onion") {
        alert("You added onion to your order.");
        extraCost += 1;
        let totalPrice = menu.lunch.entrees[entreeLunch].price + extraCost;
        alert(`You ordered the ${entreeLunch} with ${extra}. ${generateComment()}. The price is $${totalPrice}.`);
    } else if (extra === "no extra") {
        alert("You didn't add any extra ingredients.");
    } 
    else {
        alert("You didn't add any extra ingredients.");
    }

    
    let sideLunch1 = prompt("What first side would you like to order? (Fries, Salad, or Chips)").toLowerCase();
    if (sideLunch1 !== "fries" && sideLunch1 !== "salad" && sideLunch1 !== "chips") {
        alert("Invalid input. Please try again.");
        return lunchOrder();
    }
    alert(`You ordered the ${sideLunch1}. ${generateComment()}. The price is $${menu.lunch.sides[sideLunch1].price}.`);

    
    let sideLunch2 = prompt("What second side would you like to order? (Fries, Salad, or Chips)").toLowerCase();
    if (sideLunch1 === sideLunch2) {
        alert("You can't repeat the same side. Please try again.");
        return lunchOrder();
    } else if  (sideLunch2 !== "fries" && sideLunch2 !== "salad" && sideLunch2 !== "chips") {
        alert("Invalid input. Please try again.");
        return lunchOrder();
    }
    alert(`You ordered the ${sideLunch2}. ${generateComment()}. The price is $${menu.lunch.sides[sideLunch2].price}.`);

    
    totalLunch(entreeLunch, sideLunch1, sideLunch2, extra, extraCost);
}

// FUNCION PARA CALCULAR EL PRECIO TOTAL DEL ALMUERZO
function totalLunch(entreeLunch, sideLunch1, sideLunch2, extra, extraCost) {
    let totalLN = 0;
    let entreePrice = 0;
    if (entreeLunch === "burger") {
        entreePrice = menu.lunch.entrees.burger.price;
        if (extra === "cheese" || extra === "bacon" || extra === "onion") {
            entreePrice += extraCost;
        }
        totalLN += entreePrice;
    } else if (entreeLunch === "sandwich") {
        entreePrice = menu.lunch.entrees.sandwich.price;
        if (extra === "cheese" || extra === "bacon" || extra === "onion") {
            entreePrice += extraCost;
        }
        totalLN += entreePrice;
    }

    if (sideLunch1 === "fries") {
        totalLN += menu.lunch.sides.fries.price;
    } else if (sideLunch1 === "salad") {
        totalLN += menu.lunch.sides.salad.price;
    } else if (sideLunch1 === "chips") {
        totalLN += menu.lunch.sides.chips.price;
    }

    if (sideLunch2 === "fries") {
        totalLN += menu.lunch.sides.fries.price;
    } else if (sideLunch2 === "salad") {
        totalLN += menu.lunch.sides.salad.price;
    } else if (sideLunch2 === "chips") {
        totalLN += menu.lunch.sides.chips.price;
    }
    alert(`
    BILL
    ----- 
    
    ${entreeLunch.toUpperCase()} with ${extra.toUpperCase()}: $${entreePrice}
    ${sideLunch1.toUpperCase()}: $${menu.lunch.sides[sideLunch1].price}
    ${sideLunch2.toUpperCase()}: $${menu.lunch.sides[sideLunch2].price}
    ------
    Total: $${totalLN}.`);
}


// FUNCION PARA ELEGIR CENA
function dinnerOrder() {
    alert(`
    DINNER MENU:
    ---------------
    Entrees:
    Burger - $12, Sandwich - $10
    
    Sides:
    Fries - $5, Salad - $6, Chips - $4
    * Dinner dishes have an extra cost of $2.`);
    let entreeDinner = prompt("What entree would you like to order? (Burger or Sandwich)").toLowerCase();
    if (entreeDinner !== "burger" && entreeDinner !== "sandwich") {
        alert("Invalid input. Please try again.");
        return dinnerOrder();
    }

    let extra = prompt(`
    Do you want extra ingredients? 

    - Tomato - $2
    - Egg - $3
    - Lettuce - $1
    - No extra - $0
    `).toLowerCase();
    let extraCost = 0;
    if (extra === "tomato") {
        alert("You added tomato to your order.");
        extraCost += 2;
        let totalPrice = menu.dinner.entrees[entreeDinner].price + extraCost;
        alert(`You ordered the ${entreeDinner} with ${extra}. ${generateComment()}. The price is $${totalPrice}.`);
    } else if (extra === "egg") {
        alert("You added egg to your order.");
        extraCost += 3;
        let totalPrice = menu.dinner.entrees[entreeDinner].price + extraCost;
        alert(`You ordered the ${entreeDinner} with ${extra}. ${generateComment()}. The price is $${totalPrice}.`);
    } else if (extra === "lettuce") {
        alert("You added lettuce to your order.");
        extraCost += 1;
        let totalPrice = menu.dinner.entrees[entreeDinner].price + extraCost;
        alert(`You ordered the ${entreeDinner} with ${extra}. ${generateComment()}. The price is $${totalPrice}.`);
    } else if (extra === "no extra") {
        alert("You didn't add any extra ingredients.");
    } 
    else {
        alert("You didn't add any extra ingredients.");
    }


    let sideDinner1 = prompt("What first side would you like to order? (Fries, Salad, or Chips)").toLowerCase();
    if (sideDinner1 !== "fries" && sideDinner1 !== "salad" && sideDinner1 !== "chips") {
        alert("Invalid input. Please try again.");
        return dinnerOrder();
    }
    alert(`You ordered the ${sideDinner1}. ${generateComment()}. The price is $${menu.dinner.sides[sideDinner1].price}.`);


    let sideDinner2 = prompt("What second side would you like to order? (Fries, Salad, or Chips)").toLowerCase();
    if (sideDinner1 === sideDinner2) {
        alert("You can't repeat the same side. Please try again.");
        return dinnerOrder();
    } else if (sideDinner2 !== "fries" && sideDinner2 !== "salad" && sideDinner2 !== "chips") {
        alert("Invalid input. Please try again.");
        return dinnerOrder();
    }
    alert(`You ordered the ${sideDinner2}. ${generateComment()}. The price is $${menu.dinner.sides[sideDinner2].price}.`);

    
    totalDinner(entreeDinner, sideDinner1, sideDinner2, extra, extraCost);
}

// FUNCION PARA CALCULAR EL PRECIO TOTAL DE LA CENA
function totalDinner(entreeDinner, sideDinner1, sideDinner2, extra, extraCost) {
    let totalDN = 0;
    let entreePrice = 0;
    if (entreeDinner === "burger") {
        entreePrice = menu.dinner.entrees.burger.price;
        if (extra === "tomato" || extra === "egg" || extra === "lettuce") {
            entreePrice += extraCost;
        }
        totalDN += entreePrice;
    } else if (entreeDinner === "sandwich") {
        entreePrice = menu.dinner.entrees.sandwich.price;
        if (extra === "tomato" || extra === "egg" || extra === "lettuce") {
            entreePrice += extraCost;
        }
        totalDN += entreePrice;
    }
    if (sideDinner1 === "fries") {
        totalDN += menu.dinner.sides.fries.price;
    } else if (sideDinner1 === "salad") {
        totalDN += menu.dinner.sides.salad.price;
    } else if (sideDinner1 === "chips") {
        totalDN += menu.dinner.sides.chips.price;
    }
    if (sideDinner2 === "fries") {
        totalDN += menu.dinner.sides.fries.price;
    } else if (sideDinner2 === "salad") {
        totalDN += menu.dinner.sides.salad.price;
    } else if (sideDinner2 === "chips") {
        totalDN += menu.dinner.sides.chips.price;
    }
    alert(`
    BILL
    ----- 
    
    ${entreeDinner.toUpperCase()} with ${extra.toUpperCase()}: $${entreePrice}
    ${sideDinner1.toUpperCase()}: $${menu.dinner.sides[sideDinner1].price}
    ${sideDinner2.toUpperCase()}: $${menu.dinner.sides[sideDinner2].price}
    ------
    Total: $${totalDN}.`);
}



// EJECUTAR EL SCRIPT (COMENTAR ESTE BLOQUE Y DESCOMENTAR EL SIGUIETE)
// PARA PODER USAR EL METODO DE MENU SEGUN LA HORA DEL DIA

alert("Welcome to Bottega Diner!");
let menuStr = `
MENU
---------
Breakfast:
- Entrees: Eggs - $6, Bacon - $5
- Sides: Toast - $2, Fruit - $3, Croissant - $4

Lunch & Dinner:
- Entrees: Burger - $10, Sandwich - $8
- Sides: Fries - $3, Salad - $4, Chips - $2
---------
* Dinner dishes have an extra cost of $2.`;

let ask = prompt("\n\nDo you want to order something? (Yes, No)").toLowerCase();
if (ask === "yes") {
    alert(menuStr);
    userSelect();
} else {
  alert("Thank you for visiting Bottega Diner!")
}

alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");




// //METODO PARA ELEGIR MENU SEGUN LA HORA DEL DIA

// alert("Welcome to Bottega Diner!");

// // FECHA ACTUAL DONDE SE REGISTRA LA HORA
// let date = new Date();

// // CONDICIONALES PARA ELEGIR MENU SEGUN LA HORA
// if (date.getHours() >=8 && date.getHours() < 12) {
//     alert("You can order breakfast until 12:00.");
//     breakfastOrder();
//     alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");

// } else if (date.getHours() >= 12 && date.getHours() < 17) {
//     alert("You can order lunch until 17:00.");
//     lunchOrder();
//     alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");

// } else if (date.getHours() >= 17 && date.getHours() <= 23) {
//     alert("You can order dinner until 23:00.");
//     dinnerOrder();
//     alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");

// } else {
//   alert("We are closed now. Please come back tomorrow.")
// }
