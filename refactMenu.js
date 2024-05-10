// MENU
const menu = {
    breakfast: { 
        entrees: { eggs: { name: 'Eggs', price: 6 }, bacon: { name: 'Bacon', price: 5 } }, 
        sides: { toast: { name: 'Toast', price: 2 }, fruit: { name: 'Fruit', price: 3 }, croissant: { name: 'Croissant', price: 4 }, none: { name: 'None', price: 0 } } 
    }, 
    lunch: { 
        entrees: { burger: { name: 'Burger', price: 10 }, sandwich: { name: 'Sandwich', price: 8 } }, 
        sides: { fries: { name: 'Fries', price: 3 }, salad: { name: 'Salad', price: 4 }, chips: { name: 'Chips', price: 2 }, none: { name: 'none', price: 0 } } 
    }, 
    dinner: { 
        entrees: { burger: { name: 'Burger', price: 12 }, sandwich: { name: 'Sandwich', price: 10 } }, 
        sides: { fries: { name: 'Fries', price: 5 }, salad: { name: 'Salad', price: 6 }, chips: { name: 'Chips', price: 4 }, none: { name: 'none', price: 0 } } 
    }
};

// INGREDIENTES EXTRA
const extraIngredients = { cheese: { name: 'Cheese', price: 2 }, bacon: { name: 'Bacon', price: 3 }, onion: { name: 'Onion', price: 1 }, none: { name: 'None', price: 0 }};

// FUNCION PARA ELEGIR MENU MANUALMENTE
function userSelect() {
    let meal = prompt("What would you like to order? (Breakfast, Lunch, or Dinner)").toLowerCase();
    if (["breakfast", "lunch", "dinner"].includes(meal)) {                                             
        let entree = orderMeal(meal);
        let extraIng = orderExtraIngredient();
        let side1 = orderSide1(meal);
        let side2 = orderSide2(meal);
        createBill(meal, entree, side1, side2, extraIng);
    } else {
        alert("Invalid input. Please try again.");
        userSelect();
    }
}

// FUNCION PARA ELEGIR MENU SEGUN LA HORA DEL DIA
function mealTime(meal) {
        let entree = orderMeal(meal);
        let extraIng = orderExtraIngredient();
        let side1 = orderSide1(meal);
        let side2 = orderSide2(meal);
        createBill(meal, entree, side1, side2, extraIng);
    }

    
// FUNCION PARA GENERAR COMENTARIOS ALEATORIOS
function generateComment() {
    const comments = ["Great choice!", "Good choice!", "Excellent choice!", "You're going to love it!", "You're going to enjoy it!", "You're going to like it!"];
    return comments[Math.floor(Math.random() * comments.length)];
}

// FUNCION COMIDA
function orderMeal(meal) {
    const mealMenu = menu[meal];                      
    const entreeKeys = Object.keys(mealMenu.entrees); 
    const sidesKeys = Object.keys(mealMenu.sides);

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
        return orderEntree(meal);
    } else if (entreeKeys.includes(entree)) {
        alert(`You ordered ${mealMenu.entrees[entree].name}. ${generateComment()}. The price is $${mealMenu.entrees[entree].price}.`);
        return entree;
   
    }
}

// FUNCION EXTRA
function orderExtraIngredient() {
    const extraKeys = Object.keys(extraIngredients);  
    let extraIng = prompt(`What extra ingredient would you like to add? (${extraKeys.join(", ")})`).toLowerCase();
    if (!extraKeys.includes(extraIng)) {
        alert("Invalid input. Please try again.");
        return orderExtraIngredient();
    } else if (extraKeys.includes(extraIng)) {
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
    let side1 = prompt(`What first side would you like to order? (${sidesKeys.join(", ")})`).toLowerCase();  
    if (!sidesKeys.includes(side1)) {                                                                        
        alert("Invalid input. Please try again.");
        return orderSide1(meal);
    } else {
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
    let side2 = prompt(`What second side would you like to order? (${sidesKeys.join(", ")})`).toLowerCase();  
    if (!sidesKeys.includes(side2)) {
        alert("Invalid input. Please try again.");
        return orderSide2(meal);
    } else {
        if (side2 === "none") {
            alert("You haven't selected a second side.");
        } else {
            alert(`You ordered ${mealMenu.sides[side2].name}. ${generateComment()}. The price is $${mealMenu.sides[side2].price}.`);
        }
        return side2;
    }
}

// FUNCION PARA CREAR FACTURA SEGUN LO PEDIDO POR EL USUARIO
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

//METODO PARA ELEGIR MENU SEGUN LA HORA DEL DIA
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