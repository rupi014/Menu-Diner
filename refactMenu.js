// MENU

const menu = {
    breakfast: { entrees: { eggs: { name: 'Eggs', price: 6 }, bacon: { name: 'Bacon', price: 5 } }, sides: { toast: { name: 'Toast', price: 2 }, fruit: { name: 'Fruit', price: 3 }, croissant: { name: 'Croissant', price: 4 } } }, 
    
    lunch: { entrees: { burger: { name: 'Burger', price: 10 }, sandwich: { name: 'Sandwich', price: 8 } }, sides: { fries: { name: 'Fries', price: 3 }, salad: { name: 'Salad', price: 4 }, chips: { name: 'Chips', price: 2 } } }, 

    dinner: { entrees: { burger: { name: 'Burger', price: 12 }, sandwich: { name: 'Sandwich', price: 10 } }, sides: { fries: { name: 'Fries', price: 5 }, salad: { name: 'Salad', price: 6 }, chips: { name: 'Chips', price: 4 } } } };


// INGREDIENTES EXTRA

const extraIngredients = { eggs: { name: 'Eggs', price: 2 }, bacon: { name: 'Bacon', price: 3 }, onion: { name: 'Onion', price: 1 }, no: { name: 'No extra', price: 0 }};

// FUNCION PARA ELEGIR MENU Y EMPEZAR A PEDIR
function userSelect() {
    let meal = prompt("What would you like to order? (Breakfast, Lunch, or Dinner)").toLowerCase();
    if (["breakfast", "lunch", "dinner"].includes(meal)) {
        orderMeal(meal);
    } else {
        alert("Invalid input. Please try again.");
        userSelect();
    }
}

// FUNCION PARA GENERAR COMENTARIOS ALEATORIOS

function generateComment() {
    const comments = ["Great choice!", "Good choice!", "Excellent choice!", "You're going to love it!", "You're going to enjoy it!", "You're going to like it!"];
    return comments[Math.floor(Math.random() * comments.length)];
}


// FUNCION PARA PEDIR LA COMIDA

function orderMeal(meal) {
    const mealMenu = menu[meal];
    const entreeKeys = Object.keys(mealMenu.entrees);
    const sidesKeys = Object.keys(mealMenu.sides);
    const extraKeys = Object.keys(extraIngredients);
    let extraIng = "";
    

    alert(`
        ${meal.toUpperCase()} MENU:
        ---------------
        Entrees:
        ${entreeKeys.map(key => `${mealMenu.entrees[key].name} - $${mealMenu.entrees[key].price}`).join(", ")}
        
        Sides:
        ${sidesKeys.map(key => `${mealMenu.sides[key].name} - $${mealMenu.sides[key].price}`).join(", ")}
    `);

    let entree = prompt(`What entree would you like to order? (${entreeKeys.join(", ")})`).toLowerCase();
    if (!entreeKeys.includes(entree)) {
        alert("Invalid input. Please try again.");
        return orderMeal(meal);
    } else if (entreeKeys.includes(entree)) {
        extraIng = prompt(`What extra ingredient would you like to add? (${extraKeys.join(", ")})`).toLowerCase();
        if (!extraKeys.includes(extraIng)) {
            alert("Invalid input. Please try again.");
            return orderMeal(meal);
        }  else if (extraKeys.includes(extraIng)) {
            alert(`You ordered ${mealMenu.entrees[entree].name} with ${extraIngredients[extraIng].name}. ${generateComment()}. The price is $${mealMenu.entrees[entree].price + extraIngredients[extraIng].price}.`);
        } 
    }
    

    let side1 = prompt(`What first side would you like to order? (${sidesKeys.join(", ")})`).toLowerCase();
    if (!sidesKeys.includes(side1)) {
        alert("Invalid input. Please try again.");
        return orderMeal(meal);
    } else if (sidesKeys.includes(side1)) {
        alert(`You ordered ${mealMenu.sides[side1].name}. ${generateComment()}. The price is $${mealMenu.sides[side1].price}.`);
    }

    let side2 = prompt(`What second side would you like to order? (${sidesKeys.join(", ")})`).toLowerCase();
    if (!sidesKeys.includes(side2)) {
        alert("Invalid input. Please try again.");
        return orderMeal(meal);
    } else if (sidesKeys.includes(side2)) {
        alert(`You ordered ${mealMenu.sides[side2].name}. ${generateComment()}. The price is $${mealMenu.sides[side2].price}.`);
    }

    alert(`
    BILL
    -----
    ${mealMenu.entrees[entree].name} with ${extraIngredients[extraIng].name} - $${mealMenu.entrees[entree].price + extraIngredients[extraIng].price}
    ${mealMenu.sides[side1].name} - $${mealMenu.sides[side1].price}
    ${mealMenu.sides[side2].name} - $${mealMenu.sides[side2].price} 
    -----
    TOTAL: $${mealMenu.entrees[entree].price + mealMenu.sides[side1].price + mealMenu.sides[side2].price}.`);
}

// METODO PARA EJECUTAR EL SCRIPT

alert("Welcome to Bottega Diner!");
let ask = prompt("\n\nDo you want to order something? (Yes, No)").toLowerCase();
if (ask === "yes") {
    userSelect();
} else {
    alert("Thank you for visiting Bottega Diner!")
}
alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");



//METODO PARA EJECUTAR EL SCRIPT SEGUN LA HORA DEL DIA

alert("Welcome to Bottega Diner!");

// FECHA ACTUAL DONDE SE REGISTRA LA HORA
let date = new Date();

// CONDICIONALES PARA ELEGIR MENU SEGUN LA HORA
if (date.getHours() >=8 && date.getHours() < 12) {
    alert("You can order breakfast until 12:00.");
    let meal = "breakfast";
    orderMeal(meal);
    alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
} else if (date.getHours() >= 12 && date.getHours() < 17) {
    alert("You can order lunch until 17:00.");
    let meal = "lunch"; 
    orderMeal(meal);
    alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
} else if (date.getHours() >= 17 && date.getHours() <= 23) {
    alert("You can order dinner until 23:00.");
    let meal = "dinner";
    orderMeal(meal);
    alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
} else {
  alert("We are closed now. Please come back tomorrow.")
}
