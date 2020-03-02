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
    size = 600;
  }

  else if( checksize =='medium'){
    size = 850;
  }

  else if( checksize== 'large'){
    size = 1000
  }
});

$('#')




});