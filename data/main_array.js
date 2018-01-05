
// This is toSave arrays....


const _ = require('underscore');



//------------
// Shopping
// let array = {
//
// };
// let array = [
//    "gl_id", { "ingredient_name", "department_name"}
//  ];
 let array = [
    "gl_id", "ingredient_name", "department_name",
    "settings"
  ];
console.log(array);
console.log(view);
let view = required('views_array')['shop'];
let types = ["finished", "purchased", "available", "draft"];
// [gl_id, dep_id, ingredient_name]
// "gl_id": {ingredient_name, department_name}

// Ideas
let array = [ "id", "date", "title", "monetization", "priority", "settings" ];
// let view = [ title, priority, monetization ];
let view = required('views_array')['shop'];
// this can be similar to priority
let types = ["high", "middle", "explain-more", "low", "super"];
// "ideas": {id, date, title, monetization -> yes or no, priority}
console.log(array);
console.log(view);

// Cookbook
// "cookbook name": {recipe_id, recipe_title, recipe_image}
let array = [
  "cookbook name", "cookbook_id", "recipe_id", "recipe_title", "recipe_image",
  "settings"
];
// let view = [ recipe_title, recipe_image, order_sort ];
let view = required('views_array')['shop'];

// this is recipe types
let types = ["slow-cooker", "fast", "easy", "complex"];

console.log(array);
console.log(view);

// Restaurant
// "menu": ["category_name", {dish_name, weight, price}]
let array = [
  "menu_id","category_id", "category_name", "dish_name", "weight",
  "price", "notes", "settings"
];
// let view = [ menu_name, {category_name, { dishes_list }} ];
let view = required('views_array')['shop'];
let types = ["appertisers", "drinks", "coffee", "other"];

console.log(array);
console.log(view);

// Dietary is equal to menu
// {
//
// 		title: "string",
//
// 		date: prev_month,
// 		description: "string",
// 		// recipes: [],
// 		notes: "This is notes6",
//
// 		// groceryId: ""
//
// 	},
// "menus": {
//   "1": "{ \"customerId\": \"2\", \"id\": \"6\", \"rec\": [\"1989\",\"1990\"], \"title\": \"string\", \"date\": \"December 17, 2003 03:24:00\", \"desc\": \"string\", \"recipes\": \"{}\", \"created_at\":\"December 17, 2003 03:24:00\",\"updated_at\":\"December 17, 2003 03:24:00\"}",
//   "2": "{ \"customerId\": \"1\", \"id\": \"10\",\"rec\": [\"1980\", \"1990\"], \"title\": \"string\", \"date\": \"December 17, 2003 03:24:00\", \"desc\": \"string\", \"recipes\": \"{}\", \"created_at\":\"December 17, 2003 03:24:00\",\"updated_at\":\"December 17, 2003 03:24:00\"}",
//   "3": "{\"title\":\"string1\",\"date\":\"2003-12-17T11:24:00.000Z\",\"desc\":\"string1\",\"recipes\":\"{}\",\"created_at\":\"2003-12-17T11:24:00.000Z\",\"updated_at\":\"2003-12-17T11:24:00.000Z\",\"customerId\":2,\"id\":3}",
//   "4": "{\"title\":\"string2\",\"date\":\"2003-12-17T11:24:00.000Z\",\"desc\":\"string2\",\"recipes\":\"{}\",\"created_at\":\"2003-12-17T11:24:00.000Z\",\"updated_at\":\"2003-12-17T11:24:00.000Z\",\"customerId\":1,\"id\":4}",
//   "5": "{\"title\":\"string2\",\"date\":\"2003-12-17T11:24:00.000Z\",\"desc\":\"string2\",\"recipes\":\"{}\",\"created_at\":\"2003-12-17T11:24:00.000Z\",\"updated_at\":\"2003-12-17T11:24:00.000Z\",\"customerId\":1,\"id\":5}"
// },
let array = [
  "title", "date", "description", "recipes", "notes", "grocery_id", "settings"
];
// let view = [ month, actions, department_name ];
let view = required('views_array')['shop'];
// let view2 = [ calories, {cooking_list_name, {calorie, item}} ];
let types = ["low-fat", "carbs", "paleontology", "dont-eath-whole-thing"];

console.log(array);
console.log(view);

// calendar
// [
//     {
//         "id":"123",
//         "title":"foo1",
//         "start":"2016-02-12T10:30:00",
//         "end":"2016-02-12T12:30:00"
//     },
//
//     {
//         "id":"456",
//         "title":"foo2",
//         "start":"2016-02-14T10:30:00",
//         "end":"2016-02-14T12:30:00"
//     }
// ];
let calendar = [
  "id", "title", "start", "end", "url"
];

// "month": [{date, action, calories}]
let month = [
  "date", "action", "calories"
];
let types = ["morning", "dinner", "late-night", "after-train"];

console.log(calendar);
console.log(month);




// Expenses
let array = [
  "expenses", "types", "settings",
];
let sum_list = [
  [ "sum", "date" ]
];
let types = ["beer", "apartment", "glow", "wifi"];

// {
//   month name: [ [sum, date],[sum, date] ]
// };
let month = [ "name", sum_list ];
let view = [ month, {sum_list} ];
let view = required('views_array')['shop'];

console.log(array);
console.log(view);


// Video
let array = ["id", "date", "url", "time short", "who send"];
let view = [ date, who_send, link_to_browser];
// [id, date, url, time short, who send]
let view = required('views_array')['shop'];
let types = ["entertaiment", "games", "shooters", "music"];

console.log(array);
console.log(view);

// Recipes
// {
//   recipe_id, image, title, description,
//   ingredients:[ing1, ing2, ing3], steps:[step1, step2, step3], settings:[settingA, settingB],
//   date
// };
// "menus": {
//   "1": "{ \"customerId\": \"2\", \"id\": \"6\", \"rec\": [\"1989\",\"1990\"], \"title\": \"string\", \"date\": \"December 17, 2003 03:24:00\", \"desc\": \"string\", \"recipes\": \"{}\", \"created_at\":\"December 17, 2003 03:24:00\",\"updated_at\":\"December 17, 2003 03:24:00\"}",
//   "2": "{ \"customerId\": \"1\", \"id\": \"10\",\"rec\": [\"1980\", \"1990\"], \"title\": \"string\", \"date\": \"December 17, 2003 03:24:00\", \"desc\": \"string\", \"recipes\": \"{}\", \"created_at\":\"December 17, 2003 03:24:00\",\"updated_at\":\"December 17, 2003 03:24:00\"}",
//   "3": "{\"title\":\"string1\",\"date\":\"2003-12-17T11:24:00.000Z\",\"desc\":\"string1\",\"recipes\":\"{}\",\"created_at\":\"2003-12-17T11:24:00.000Z\",\"updated_at\":\"2003-12-17T11:24:00.000Z\",\"customerId\":2,\"id\":3}",
//   "4": "{\"title\":\"string2\",\"date\":\"2003-12-17T11:24:00.000Z\",\"desc\":\"string2\",\"recipes\":\"{}\",\"created_at\":\"2003-12-17T11:24:00.000Z\",\"updated_at\":\"2003-12-17T11:24:00.000Z\",\"customerId\":1,\"id\":4}",
//   "5": "{\"title\":\"string2\",\"date\":\"2003-12-17T11:24:00.000Z\",\"desc\":\"string2\",\"recipes\":\"{}\",\"created_at\":\"2003-12-17T11:24:00.000Z\",\"updated_at\":\"2003-12-17T11:24:00.000Z\",\"customerId\":1,\"id\":5}"
// },
let array = [
  "recipe_id", "image",
  "title", "description",
  "ingredients", "steps",
  "settings", "date"
];
let view = required('views_array')['shop'];
let ingredients = ["ingredient", "calories"];
//@todo add stuff from nutrition scheme
let nutrition   = [];
let types = ["allergies-free", "cooking-for-two", "gluthen-free", "sugar-free"];

// [id, date, url, time short, who send]

// Search
// at this array we're specilying fields, that can be passed into API
// @todo complete this with logic of rapi
// note that allergies must exclude recipes
// @todo maybe change from _yes, _no to objects with yes, no option
// {
//   ingredients: [A1, B1, C1, D1]
// };
// {
//   categories: [2, 21, 22]
// };
// {
//   cousine: [A, B, C]
// };
// {
//   cook times: [0.5 hour, 1 hour, 10 mins]
// };
// {
//   small settings: [{name, value}, {name, value}]
// };
let array = [
  "title",
  "allergies",
  "diets"
  "ingredients_yes", "ingredients_no",
  "cuisines_yes" ,"cuisines_no",
  "courses_yes", "courses_no",
  "holidays_yes", "holidays_no",
  "cook_times",
  "settings"
];

let view  = [ link, items, ULR ];
let view  = required('views_array')['shop'];


console.log(array);
console.log(view);

// Fitness
let array
let view  = [ date, {calories_list} ];
let view = required('views_array')['shop'];
let view2 = [ type_name, {date, result, calories_burn} ];
let types = [
  "jogging", "hike", "joga", "weight",
  "workout", "steps", "calories"
];

// "jogging": [{date, how much, calories}, {date, how much, calories}]
// "hike": [{date, time, calories}]
// "joga": [{date, yes or no}]
// "weight": [{date, time, amount}]
// "workout": [{date, time, yes or no}]
let report_by_types = ["date", "how much", "calories"];

console.log(array);
console.log(view);

// Measurement
// @todo dig into measurement theme again
let array = [ "item", "type",  "settings"]
//in different plurals
what measurement have inside: 1 kg have 1000 grams
let item = [
  "name", "kilo", "kilogramm", "kg"
];
// "can be configured": "yes"
// "converted_to": ["gramms":"1000", "litres":"800ml"]
let advanced_item = [
    "can be configured",
    "converted_to"
];
// let type = [];
let types = ["water", "solid", "sipuchee", "complex"];
// "name" : "kilo, kilogramm, kg"



let view  = [ name, plurals ]; //[kg, g, ml]
let view = required('views_array')['shop'];

let view2 = [ how_much_items_we_have(sum), sum_of_ingredients ]; // [3, 1,6 kg, salt]
let view3 = [name, {list of converted sub_names}]


console.log(array);
console.log(view);
