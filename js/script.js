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











var sizeAmount, flavortype, crustAmount, toppingsAmount;


var Pizzaorder = function(flavor, size, crust, topping, price){
  this.flavor = flavor;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price;
}






$('#small').click(function(){
  var checksize = $("input[name='size']:checked").val();
  if (checksize == 'small'){
    sizeAmount = parseInt(600);
  }

  else if( checksize =='medium'){
    sizeAmount = parseInt(800);
  }

  else if( checksize== 'large'){
    sizeAmount = parseInt(1000);
  }

  
})



$('#flavor').click(function(){
  var checkflavor = $("input[name =='flavor]:checked").val();
  if (checkflavor == 'Chicken Hawaiian'){
      flavortype = 'Chicken Hawaiian'
  }

  else if (checkflavor == 'Cheese Burger'){
    flavortype = 'Cheese Burger'
  }
  else if (checkflavor == 'Meat Deluxe'){
    flavortype = 'Meat Deluxe'
  }
  else if (checkflavor == 'Chicken Macon BBQ'){
    flavortype = 'Chicken Macon BBQ'
  }
  else if (checkflavor == 'Beef Pepperoni'){
    flavortype = 'Beef Pepperoni'
  }
  else if (checkflavor == 'Veg Feast'){
    flavortype = 'Veg Feast'
  }
});

$('#crust').click(function(){
  var checkcrust = $("input[name='crust']:checked").val();
  if (checkcrust == 'Crispy'){
    crustAmount = parseInt(60);
  }

  else if( checkcrust =='Stuffed'){
    crustAmount = parseInt(80);
  }

  else if( checkcrust =='glutten-free'){
    crustAmount = parseInt(120);
  }

  
})


$('#toppings').click(function(){
  var checktopping = $("input[name='toppings']:checked").val();
  if (checktopping == 'Pepperoni'){
    toppingsAmount = parseInt(160);
  }

  else if( checktopping =='mushroom'){
    toppingsAmount = parseInt(180);
  }

  else if( checktopping =='sausage'){
    toppingsAmount = parseInt(85);
  }

  else if( checktopping =='bacon'){
    toppingsAmount = parseInt(35);
  }
  else if( checktopping =='Extra cheese'){
    toppingsAmount = parseInt(40);
  }

  else if( checktopping =='Onions'){
    toppingsAmount = parseInt(55);
  }

  else if( checktopping =='Black olives'){
    toppingsAmount = parseInt(90);
  }

  else if( checktopping =='Green peppers'){
    toppingsAmount = parseInt(75);
  }


})


$('#quantity').click(function(){
  var myquantity= document.getElementsByName('quantity').val();
})


$("#checkout").click(function () {
  var sizeAmount = $("select#size option:selected").val();
  var flavorType =   document.getElementById("flavor").value;
  var crustAmount = document.getElementById("crust").value;
  var toppingsAmount =  $("select#toppings option:selected").val();
  var sumTotal = sizeAmount + crustAmount + toppingsAmount;
  var quantity = $("select#quantity option:selected").val();
  var totalPrice = sumTotal * quantity;
  alert("Your Total Cost is: " + totalPrice);
})





$("#delivery").click(function(){
  var name = prompt("Enter Your name:");
  var address = prompt("Enter Your Address:");

});

$("#showflavor").append(totalPrice);



});