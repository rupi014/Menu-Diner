// MENU

const menu = {
    breakfast: { entrees: { eggs: { name: 'Eggs', price: 6 }, bacon: { name: 'Bacon', price: 5 } }, sides: { toast: { name: 'Toast', price: 2 }, fruit: { name: 'Fruit', price: 3 }, croissant: { name: 'Croissant', price: 4 } } }, 
    
    lunch: { entrees: { burger: { name: 'Burger', price: 10 }, sandwich: { name: 'Sandwich', price: 8 } }, sides: { fries: { name: 'Fries', price: 3 }, salad: { name: 'Salad', price: 4 }, chips: { name: 'Chips', price: 2 } } }, 

    dinner: { entrees: { burger: { name: 'Burger', price: 12 }, sandwich: { name: 'Sandwich', price: 10 } }, sides: { fries: { name: 'Fries', price: 5 }, salad: { name: 'Salad', price: 6 }, chips: { name: 'Chips', price: 4 } } } };


// INGREDIENTES EXTRA

const extraIngredients = { cheese: { name: 'Cheese', price: 2 }, bacon: { name: 'Bacon', price: 3 }, onion: { name: 'Onion', price: 1 }, none: { name: 'None', price: 0 }};

// FUNCION PARA ELEGIR MENU Y EMPEZAR A PEDIR
function userSelect() {
    let meal = prompt("What would you like to order? (Breakfast, Lunch, or Dinner)").toLowerCase();
    if (["breakfast", "lunch", "dinner"].includes(meal)) {                                             // UTILIZA .INCLUDES() PARA VERIFICAR SI EL MENU ELEGIDO ESTA EN EL MENU
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
    const mealMenu = menu[meal];                      // SELECCIONA EL MENU QUE EL USUARIO ELIGIO
    const entreeKeys = Object.keys(mealMenu.entrees); // OBTIENE UN ARRAY CON LAS KEYS DE LOS ENTREES Y LO ASIGNA A LA VARIABLE entreeKeys
    const sidesKeys = Object.keys(mealMenu.sides);    // OBTIENE UN ARRAY CON LAS KEYS DE LOS SIDES Y LO ASIGNA A LA VARIABLE sidesKeys
    const extraKeys = Object.keys(extraIngredients);  // OBTIENE UN ARRAY CON LAS KEYS DE LOS INGREDIENTES EXTRA Y LO ASIGNA A LA VARIABLE extraKeys
    let extraIng = "";                                // VARIABLE PARA GUARDAR EL INGREDIENTE EXTRA QUE EL USUARIO ELIJA
    
    // CON LA FUNCION .MAP() SE RECORRE EL ARRAY DE KEYS DE LOS ENTREES Y SE MUESTRA EL NOMBRE Y PRECIO DE CADA ENTREE
    alert(`
        ${meal.toUpperCase()} MENU:
        ---------------
        Entrees:
        ${entreeKeys.map(key => `${mealMenu.entrees[key].name} - $${mealMenu.entrees[key].price}`).join(", ")}  
        
        Sides:
        ${sidesKeys.map(key => `${mealMenu.sides[key].name} - $${mealMenu.sides[key].price}`).join(", ")}
    `);

    let entree = prompt(`What entree would you like to order? (${entreeKeys.join(", ")})`).toLowerCase(); // PIDE AL USUARIO QUE ELIJA UN ENTREE
    if (!entreeKeys.includes(entree)) {                                                                   // UTILIZA .INCLUDES() PARA VERIFICAR SI EL ENTREE ESTA EN EL MENU
        alert("Invalid input. Please try again.");                                                        // SI EL ENTREE NO ESTA EN EL MENU, MUESTRA UN MENSAJE DE ERROR
        return orderMeal(meal);
    } else if (entreeKeys.includes(entree)) {                                                             // SI EL ENTREE ESTA EN EL MENU, PIDE UN EXTRA Y CONFIRMA EL PEDIDO                  
        extraIng = prompt(`What extra ingredient would you like to add? (${extraKeys.join(", ")})`).toLowerCase();
        if (!extraKeys.includes(extraIng)) {
            alert("Invalid input. Please try again.");
            return orderMeal(meal);
        }  else if (extraKeys.includes(extraIng)) {
            alert(`You ordered ${mealMenu.entrees[entree].name} with ${extraIngredients[extraIng].name}. ${generateComment()}. The price is $${mealMenu.entrees[entree].price + extraIngredients[extraIng].price}.`);
        } 
    }
    

    let side1 = prompt(`What first side would you like to order? (${sidesKeys.join(", ")})`).toLowerCase();  // PIDE AL USUARIO QUE ELIJA UN SIDE
    if (!sidesKeys.includes(side1)) {                                                                        // COMO ANTES UTILIZA .INCLUDES() PARA VERIFICAR SI EL SIDE ESTA EN EL MENU
        alert("Invalid input. Please try again.");
        return orderMeal(meal);
    } else if (sidesKeys.includes(side1)) {
        alert(`You ordered ${mealMenu.sides[side1].name}. ${generateComment()}. The price is $${mealMenu.sides[side1].price}.`);
    }

    let side2 = prompt(`What second side would you like to order? (${sidesKeys.join(", ")})`).toLowerCase();  // PIDE AL USUARIO QUE ELIJA UN SEGUNDO SIDE
    if (!sidesKeys.includes(side2)) {
        alert("Invalid input. Please try again.");
        return orderMeal(meal);
    } else if (sidesKeys.includes(side2)) {
        alert(`You ordered ${mealMenu.sides[side2].name}. ${generateComment()}. The price is $${mealMenu.sides[side2].price}.`);
    }


    // MUESTRA EL TOTAL DEL PEDIDO
    alert(`
    BILL
    -----
    ${mealMenu.entrees[entree].name} with ${extraIngredients[extraIng].name} - $${mealMenu.entrees[entree].price + extraIngredients[extraIng].price}
    ${mealMenu.sides[side1].name} - $${mealMenu.sides[side1].price}
    ${mealMenu.sides[side2].name} - $${mealMenu.sides[side2].price} 
    -----
    TOTAL: $${mealMenu.entrees[entree].price + mealMenu.sides[side1].price + mealMenu.sides[side2].price}.`);
}

// METODO PARA EJECUTAR EL SCRIPT DE FORMA NORMAL

alert("Welcome to Bottega Diner!");
let ask = prompt("\n\nDo you want to order something? (Yes, No)").toLowerCase();          // PREGUNTA AL USUARIO SI QUIERE PEDIR ALGO
if (ask === "yes") {                                                                      // SI EL USUARIO DICE QUE SI, EJECUTA LA FUNCION userSelect() PARA EMPEZAR A PEDIR
    userSelect();
} else {
    alert("Thank you for visiting Bottega Diner!")                                        // SI EL USUARIO DICE QUE NO, MUESTRA UN MENSAJE DE DESPEDIDA
}
alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");



//METODO PARA ASIGNAR EL MENU EN FUNCION DE LA HORA ACTUAL A LA QUE SE EJECUTE EL SCRIPT

alert("Welcome to Bottega Diner!");

let date = new Date();                                                       // FECHA ACTUAL DONDE SE REGISTRA LA HORA                                                              
if (date.getHours() >=8 && date.getHours() < 12) {                           // SI LA HORA ES MAYOR O IGUAL A 8 Y MENOR A 12, SE PUEDE PEDIR DESAYUNO
    alert("You can order breakfast until 12:00.");
    let meal = "breakfast";
    orderMeal(meal);
    alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
} else if (date.getHours() >= 12 && date.getHours() < 17) {                  // SI LA HORA ES MAYOR O IGUAL A 12 Y MENOR A 17, SE PUEDE PEDIR ALMUERZO
    alert("You can order lunch until 17:00.");
    let meal = "lunch"; 
    orderMeal(meal);
    alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
} else if (date.getHours() >= 17 && date.getHours() <= 23) {                  // SI LA HORA ES MAYOR O IGUAL A 17 Y MENOR O IGUAL A 23, SE PUEDE PEDIR CENA
    alert("You can order dinner until 23:00.");
    let meal = "dinner";
    orderMeal(meal);
    alert("Hope you enjoyed your meal! Come back soon to Bottega Diner!");
} else {                                                                      // SI LA HORA NO ESTA EN NINGUNO DE LOS RANGOS ANTERIORES, MUESTRA UN MENSAJE DE QUE ESTAN CERRADOS
  alert("We are closed now. Please come back tomorrow.")
}
