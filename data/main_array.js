
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
    "gl_id", "ingredient_name", "department_name"
  ];

let view = required('views_array')['shop'];
// [gl_id, dep_id, ingredient_name]
// "gl_id": {ingredient_name, department_name}

// Ideas
let array = [ "id", "date", "title", "monetization", "priority" ];
// let view = [ title, priority, monetization ];
let view = required('views_array')['shop'];
// "ideas": {id, date, title, monetization -> yes or no, priority}

// Cookbook
let array = [
  "cookbook name", "cookbook_id", "recipe_id", "recipe_title", "recipe_image"
];
// let view = [ recipe_title, recipe_image, order_sort ];
let view = required('views_array')['shop'];
// "cookbook name": {recipe_id, recipe_title, recipe_image}

// Restaurant
let array = [
  "menu_id","category_id", "category_name", "dish_name", "weight", "price", "notes"
];
// let view = [ menu_name, {category_name, { dishes_list }} ];
let view = required('views_array')['shop'];
// "menu": ["category_name", {dish_name, weight, price}]

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
let array = [
  "title", "date", "description", "recipes", "notes", "grocery_id"
]
// let view = [ month, actions, department_name ];
let view = required('views_array')['shop'];
// let view2 = [ calories, {cooking_list_name, {calorie, item}} ];

let calendar = []
"calendar":

[
    {
        "id":"123",
        "title":"foo1",
        "start":"2016-02-12T10:30:00",
        "end":"2016-02-12T12:30:00"
    },

    {
        "id":"456",
        "title":"foo2",
        "start":"2016-02-14T10:30:00",
        "end":"2016-02-14T12:30:00"
    }
];



    "properties": {
        "dtstart": {
            "format": "date-time",
            "type": "string",
            "description": "Event starting time"
        },
        "dtend": {
            "format": "date-time",
            "type": "string",
            "description": "Event ending time"
        },
        "summary": { "type": "string" },
        "location": { "type": "string" },
        "url": { "type": "string", "format": "uri" },
        "duration": {
            "format": "time",
            "type": "string",
            "description": "Event duration"
        },
        "rdate": {
            "format": "date-time",
            "type": "string",
            "description": "Recurrence date"
        },

        "category": { "type": "string" },
        "description": { "type": "string" },
      }


"month": [{date, action, calories}]



// Expenses
let array
let view = [ month, {sum_list} ];
let view = required('views_array')['shop'];
{
  month name: [ [sum, date],[sum, date] ]
};
{
  payment types: ["beer", "apartment", "glow", "wifi"]
};


// Video
let array
let view = [ date, who_send, link_to_browser];
let view = required('views_array')['shop'];
[id, date, url, time short, who send]


// Recipes
let array
let view = required('views_array')['shop'];
ingredients with [ingredient, calories]
{
  recipe_id, image, title, description,
  ingredients:[ing1, ing2, ing3], steps:[step1, step2, step3], settings:[settingA, settingB],
  date
};

// Search
let array
let view = [ link, items, ULR ];
let view = required('views_array')['shop'];

{
  ingredients: [A1, B1, C1, D1]
};
{
  categories: [2, 21, 22]
};
{
  cousine: [A, B, C]
};
{
  cook times: [0.5 hour, 1 hour, 10 mins]
};
{
  small settings: [{name, value}, {name, value}]
};

// Fitness
let array
let view  = [ date, {calories_list} ];
let view = required('views_array')['shop'];
let view2 = [ type_name, {date, result, calories_burn} ];

"jogging": [{date, how much, calories}, {date, how much, calories}]
"hike": [{date, time, calories}]
"joga": [{date, yes or no}]
"weight": [{date, time, amount}]
"workout": [{date, time, yes or no}]
"steps"
"calories"

// Measurement
let array
"name" : "kilo, kilogramm, kg" //in different plurals
what measurement have inside: 1 kg have 1000 grams
"can be configured": "yes"
"converted_to": ["gramms":"1000", "litres":"800ml"]

let view  = [ name, plurals ]; //[kg, g, ml]
let view = required('views_array')['shop'];

let view2 = [ how_much_items_we_have(sum), sum_of_ingredients ]; // [3, 1,6 kg, salt]
let view3 = [name, {list of converted sub_names}]
