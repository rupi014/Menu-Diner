// MENU
const menu = {
    breakfast: { 
        entrees: { eggs: { name: 'Eggs', price: 6 }, bacon: { name: 'Bacon', price: 5 } }, 
        sides: { toast: { name: 'Toast', price: 2 }, fruit: { name: 'Fruit', price: 3 }, croissant: { name: 'Croissant', price: 4 }, none: { name: 'None', price: 0 } } 
    }, 
    lunch: { 
        entrees: { burger: { name: 'Burger', price: 10 }, sandwich: { name: 'Sandwich', price: 8 } }, 
        sides: { fries: { name: 'Fries', price: 3 }, salad: { name: 'Salad', price: 4 }, chips: { name: 'Chips', price: 2 }, none: { name: 'None', price: 0 } } 
    }, 
    dinner: { 
        entrees: { burger: { name: 'Burger', price: 12 }, sandwich: { name: 'Sandwich', price: 10 } }, 
        sides: { fries: { name: 'Fries', price: 5 }, salad: { name: 'Salad', price: 6 }, chips: { name: 'Chips', price: 4 }, none: { name: 'None', price: 0 } } 
    }
};

// INGREDIENTES EXTRA
const extraIngredients = { cheese: { name: 'Cheese', price: 2 }, bacon: { name: 'Bacon', price: 3 }, onion: { name: 'Onion', price: 1 }, none: { name: 'None', price: 0 }};

// FUNCION GENERAL PARA PEDIR Y CREAR FACTURA
function orderAndCreateBill(meal) {
    showMenu(meal);
    const entree = orderMeal(meal);
    const extraIng = orderExtraIngredient();
    const side1 = orderSide1(meal);
    const side2 = orderSide2(meal);
    createBill(meal, entree, side1, side2, extraIng);
}

// FUNCION PARA PEDIR MENU MANUALMENTE
function userSelect() {
    const meal = prompt("What would you like to order? (Breakfast, Lunch, or Dinner)").toLowerCase();
    if (["breakfast", "lunch", "dinner"].includes(meal)) {
        orderAndCreateBill(meal);
    } else {
        alert("Invalid input. Please try again.");
        userSelect();
    }
}

// FUNCION PARA PEDIR MENU SEGUN LA HORA DEL DIA
function mealTime(meal) {
    orderAndCreateBill(meal);
}


// FUNCION PARA GENERAR COMENTARIOS ALEATORIOS
function generateComment() {
    const comments = ["Great choice!", "Good choice!", "Excellent choice!", "You're going to love it!", "You're going to enjoy it!", "You're going to like it!"];
    return comments[Math.floor(Math.random() * comments.length)];
}

// FUNNCION PARA MOSTRAR EL MENU
function showMenu(meal) {
    const mealMenu = menu[meal];                      
    const entreeKeys = Object.keys(mealMenu.entrees); 
    const sidesKeys = Object.keys(mealMenu.sides);

    alert(`
${meal.toUpperCase()} MENU:
---------------
Entrees:
${entreeKeys.map((key, index) => `${index + 1}. ${mealMenu.entrees[key].name} - $${mealMenu.entrees[key].price}`).join("\n")}
             
Sides:
${sidesKeys.map((key, index) => `${index + 1}. ${mealMenu.sides[key].name} - $${mealMenu.sides[key].price}`).join("\n")}
`)
}

// FUNCION PARA PEDIR EL ENTREE
function orderMeal(meal) {
    const mealMenu = menu[meal];                      
    const entreeKeys = Object.keys(mealMenu.entrees); 
    const sidesKeys = Object.keys(mealMenu.sides);

        let entreeIndex = parseInt(prompt(`
What entree would you like to order? (enter a number)\n${entreeKeys.map((key, index) => `${index + 1}. ${mealMenu.entrees[key].name} - $${mealMenu.entrees[key].price}`).join("\n")}`)) - 1;
    if (isNaN(entreeIndex) || entreeIndex < 0 || entreeIndex >= entreeKeys.length) {                                                                   
        alert("Invalid input. Please try again.");                                                        
        return orderMeal(meal);
    } else {
        let entree = entreeKeys[entreeIndex];
        alert(`You ordered ${mealMenu.entrees[entree].name}. ${generateComment()}. The price is $${mealMenu.entrees[entree].price}.`);
        return entree;
    }
}

// FUNCION PARA PEDIR EL EXTRA
function orderExtraIngredient() {
    const extraKeys = Object.keys(extraIngredients);  
    let extraIndex = parseInt(prompt(`
What extra ingredient would you like to add? (enter a number)\n${extraKeys.map((key, index) => `${index + 1}. ${extraIngredients[key].name} - $${extraIngredients[key].price}`).join("\n")}`)) - 1;
    if (isNaN(extraIndex) || extraIndex < 0 || extraIndex >= extraKeys.length) {
        alert("Invalid input. Please try again.");
        return orderExtraIngredient();
    } else {
        let extraIng = extraKeys[extraIndex];
        if (extraIng === "none") {
            alert("You haven't selected an extra ingredient.");
        } else {
            alert(`You ordered ${extraIngredients[extraIng].name}. ${generateComment()}. The price is $${extraIngredients[extraIng].price}.`);
        }
        return extraIng;
    }
}

// FUNCION PARA PEDIR EL PRIMER SIDE
function orderSide1(meal) {
    const mealMenu = menu[meal];
    const sidesKeys = Object.keys(mealMenu.sides);
    let sideIndex = parseInt(prompt(`
What first side would you like to order? (enter a number)\n${sidesKeys.map((key, index) => `${index + 1}. ${mealMenu.sides[key].name} - $${mealMenu.sides[key].price}`).join("\n")}`)) - 1; 
    if (isNaN(sideIndex) || sideIndex < 0 || sideIndex >= sidesKeys.length) {                                                                        
        alert("Invalid input. Please try again.");
        return orderSide1(meal);
    } else {
        let side1 = sidesKeys[sideIndex];
        if (side1 === "none") {
            alert("You haven't selected a first side.");
        } else {
            alert(`You ordered ${mealMenu.sides[side1].name}. ${generateComment()}. The price is $${mealMenu.sides[side1].price}.`);
        }
        return side1;
    }
}

// FUNCION PARA PEDIR EL SEGUNDO SIDE
function orderSide2(meal) {
    const mealMenu = menu[meal];
    const sidesKeys = Object.keys(mealMenu.sides);  
    let sideIndex = parseInt(prompt(`
What second side would you like to order? (enter a number)\n${sidesKeys.map((key, index) => `${index + 1}. ${mealMenu.sides[key].name} - $${mealMenu.sides[key].price}`).join("\n")}`)) - 1;   
    if (isNaN(sideIndex) || sideIndex < 0 || sideIndex >= sidesKeys.length) {
        alert("Invalid input. Please try again.");
        return orderSide2(meal);
    } else {
        let side2 = sidesKeys[sideIndex];
        if (side2 === "none") {
            alert("You haven't selected a second side.");
        } else {
            alert(`You ordered ${mealMenu.sides[side2].name}. ${generateComment()}. The price is $${mealMenu.sides[side2].price}.`);
        }
        return side2;
    }
}

// FUNCION PARA CREAR FACTURA
function createBill(meal, entree, side1, side2, extraIng) {
    const mealMenu = menu[meal];                      
    let bill = `BILL\n-----`
    bill += `\n${mealMenu.entrees[entree].name} with ${extraIngredients[extraIng].name} - $${mealMenu.entrees[entree].price + extraIngredients[extraIng].price}`;
    if (side1 !== "none") {
        bill += `\n${mealMenu.sides[side1].name} - $${mealMenu.sides[side1].price}`;
    }
    if (side2 !== "none") {
        bill += `\n${mealMenu.sides[side2].name} - $${mealMenu.sides[side2].price}`;
    }
    let total = (mealMenu.entrees[entree].price + extraIngredients[extraIng].price) + (side1 !== "none" ? mealMenu.sides[side1].price : 0) + (side2 !== "none" ? mealMenu.sides[side2].price : 0);
    bill += `\n-----\nTOTAL: $${total}.`;

    alert(bill);
}

// EJECUCION DEL SCRIPT
let sistem_hour = true; // Cambiar a false para probar el menu manualmente
let date = new Date();
if (sistem_hour) {
    alert("Welcome to Bottega Diner!");
    if (date.getHours() >=8 && date.getHours() < 12) {
        alert("You can order breakfast until 12:00.");
        mealTime("breakfast");
        alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");   
    } else if (date.getHours() >= 12 && date.getHours() < 17) {
        alert("You can order lunch until 17:00.");
        mealTime("lunch");
        alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
    } else if (date.getHours() >= 17 && date.getHours() <= 23) {
        alert("You can order dinner until 23:00.");
        mealTime("dinner");
        alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
    } else {
        alert("We are closed now. Please come back tomorrow.")
      }  
} else {
    alert("Welcome to Bottega Diner!");
    let ask = prompt("Do you want to order something? (Yes, No)").toLowerCase();          
    if (ask === "yes") {  
        userSelect();
    } else {
        alert("Thank you for visiting Bottega Diner!")                                        
    }
    alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
}
