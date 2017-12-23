
const _ = require('underscore');



//------------
// Shopping
let view = [ date, ingredient_name, department_name ];

// Ideas
let view = [ title, priority, monetization ];

// Cookbook
let view = [ recipe_title, recipe_image, order_sort ];

// Restaurant
let view = [ menu_name, {category_name, { dishes_list }} ];

// Dietary
let view = [ month, actions, department_name ];
let view2 = [ calories, {cooking_list_name, {calorie, item}} ];

// Expenses
let view = [ month, {sum_list} ];

// Video
let view = [ date, who_send, link_to_browser];

// Recipes
let view = [ id, title, description, steps, date ];

// Search
let view = [ link, items, ULR ];

// Fitness
let view  = [ date, {calories_list} ];
let view2 = [ type_name, {date, result, calories_burn} ];

// Measurement
let view  = [ name, plurals ]; //[kg, g, ml]
let view2 = [ how_much_items_we_have(sum), sum_of_ingredients ]; // [3, 1,6 kg, salt]
let view3 = [name, {list of converted sub_names}]
