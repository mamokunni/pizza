$(document).ready(function(){
function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.input-group').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
  decrementValue(e);
});

});






//
$(document).ready(function(){
//get inputs 


function (){
  alert("Welcome, Kindly order your pizza")
};


var pizza = {flavor, size, crust, topping, quantity};
var flavor = ['Chicken Hawaiian','Cheese Burger', 'Meat Deluxe', 'Chicken Macon BBQ', 'Beef Pepperoni', 'Veg Feast'];
var size =['small', 'medium', 'large'];
var crust = ['crispy', 'stuffed', 'glutten-free'];
var topping = ['Pepperoni', 'Mushrooms', 'Sausage', 'Bacon', 'Extra cheese', 'Black olives','Onions', 'Green peppers']

var Pizzaorder = function(flavor, size, crust, topping, price){
  this.flavor = flavor;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price;
};

var totalprice = function(){
  return size() + crust() + topping()*quantity()
}




$('#small').click(function(){
  var checksize = $("input[name='size']:checked").val();
  if (checksize == 'small'){
    size = parseInt(600);
  }

  else if( checksize =='medium'){
    size = parseInt(800);
  }

  else if( checksize== 'large'){
    size = parseInt(1000);
  }

  else {
    alert ("Please select size");
  }
});

$('#flavor').click(function(){
  var checkflavor = $("input[name =='flavor]:checked").val();
  if (checkflavor == 'Chicken Hawaiian'){
      flavor = 'Chicken Hawaiian'
  }

  else if (checkflavor == 'Cheese Burger'){
    flavor = 'Cheese Burger'
  }
  else if (checkflavor == 'Meat Deluxe'){
    flavor = 'Meat Deluxe'
  }
  else if (checkflavor == 'Chicken Macon BBQ'){
    flavor = 'Chicken Macon BBQ'
  }
  else if (checkflavor == 'Beef Pepperoni'){
    flavor = 'Beef Pepperoni'
  }
  else if (checkflavor == 'Veg Feast'){
    flavor = 'Veg Feast'
  }
});

$('#crust').click(function(){
  var checkcrust = $("input[name='crust']:checked").val();
  if (checkcrust == 'Crispy'){
    crust = parseInt(60);
  }

  else if( checkcrust =='Stuffed'){
    crust = parseInt(80);
  }

  else if( checkcrust =='glutten-free'){
    crust = parseInt(120);
  }

  else {
    alert ("Please select crust");
  }
});


$('#toppings').click(function(){
  var checktopping = $("input[name='toppings']:checked").val();
  if (checktopping == 'Pepperoni'){
    toppings = parseInt(160);
  }

  else if( checktopping =='mushroom'){
    toppings = parseInt(180);
  }

  else if( checktopping =='sausage'){
    toppings = parseInt(85);
  }

  else if( checktopping =='bacon'){
    toppings = parseInt(35);
  }
  else if( checktopping =='Extra cheese'){
    toppings = parseInt(40);
  }

  else if( checktopping =='Onions'){
    toppings = parseInt(55);
  }

  else if( checktopping =='Black olives'){
    toppings = parseInt(90);
  }

  else if( checktopping =='Green peppers'){
    toppings = parseInt(75);
  }

  else {
    alert ("Please select Toppings");
  }
});


$("#checkout").click(function () {
  var sizeAmount = parseInt($("#size").val());
  var crustAmount = parseInt($("#crust").val());
  var toppingsAmount = parseInt($("#toppings").val());
  var sumTotal = sizeAmount + crustAmount + toppingsAmount;
  var quantity = parseInt($("#number").val());
  var totalPrice = sumTotal * quantity;
  alert("This is your total cost thank you for ordering " + totalPrice);
});





});