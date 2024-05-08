# Bottega Diner Ordering System

Welcome to the Bottega Diner Ordering System! This system allows users to place orders for breakfast, lunch, or dinner items from the Bottega Diner menu.

## Features

- **Ordering**: Users can select from a variety of breakfast, lunch, and dinner options.
- **Random Comments**: Users receive random comments about their choices to enhance the user experience.
- **Error Handling**: The system handles invalid inputs gracefully, prompting users to re-enter their choices.
- **Customization Options**: Users can add extra ingredients to their orders, such as cheese, bacon, or lettuce.
- **Total Calculation**: Calculates the total cost of the order based on the selected items and any additional ingredients.

## Time-Based Menu Selection

At the end of the code, there is a block that will allow us to select the menu based on the current time, and I have implemented this using the JavaScript global Date object.

- **Breakfast Menu**: Available until 12:00.
- **Lunch Menu**: Available from 12:00 to 17:00.
- **Dinner Menu**: Available from 17:00 to 23:00.
- **Closed**: The system displays a message if it's outside of business hours.

This feature ensures that users are presented with the appropriate menu options based on the time of day.

## How to Use

1. **Running the Program**: Open the provided JavaScript file (`menu.js`) in a JavaScript runtime environment, such as a web browser console or Node.js.
2. **Ordering**: Follow the prompts to select your desired meal (breakfast, lunch, or dinner) and choose from the available options.
3. **Completing the Order**: After completing your order, the system will display a summary including the items selected and the total cost.
4. **Exiting the Program**: Once you're finished ordering, simply close the program or follow any on-screen prompts.

## Menu

The menu includes the following options:

### Breakfast

-  **Entrees**: Eggs, Bacon
	- **Extras**: Cheese, Bacon, Onion.
-  **Sides**: Toast, Fruit, Croissant

### Lunch 
- **Entrees**: Burger, Sandwich
    - **Extras**: Tomato, Egg, Lettuce.
- **Sides**: Fries, Salad, Chips

### Dinner
- **Entrees**: Burger, Sandwich
- **Sides**: Fries, Salad, Chips

*Dinner dishes have an extra cost of $2.*

## Contributions

Contributions to this project are welcome! If you have any suggestions for improvements or additional features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using the Bottega Diner Ordering System! Enjoy your meal!

