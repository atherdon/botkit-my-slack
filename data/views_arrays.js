
const _ = require('underscore');



//------------
// shopping
let view = [ "date", "ingredient_name", "department_name" ];

// ideas
let view = [ "title", "priority", "monetization" ];

// cookbook
let view = [ "recipe_title", "recipe_image", "order_sort" ];

// restaurant
let view = [ "menu_name", { [id:"category_name", value:false], { id:"dishes_list", value: false } } ];

// dietary
let view = [ "month", "actions", "department_name" ];
let view2 = [ "calories", { id: "cooking_list_name", { id:"calorie", value:"item" } } ];

// Expenses
let view = [ "month", {sum_list} ];

// video
let view = [ "date", "who_send", "link_to_browser"];

// recipes
let view = [ "id", "title", "description", "steps", "date" ];

// search
let view = [ "link", "items", "ULR" ];

// fitness
let view  = [ "date", {calories_list} ];
let view2 = [ "type_name", {
   [ id:"date", value: false ],
   [ id:"result", value: false ],
   [ id:"calories_burn", value: false ]
 } ];

// measurement
let view  = [ "name", "plurals" ]; //[kg, g, ml]
let view2 = [ how_much_items_we_have(sum), sum_of_ingredients ]; // [3, 1,6 kg, salt]
let view3 = ["name", {list of converted sub_names}]
