var total=0;

var Pizzaorder = function(flavor, size, crust, topping, number){
  this.flavor = flavor;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.number = number;
}


function checkout(flavor,size,crust,topping,number){

  switch (size){
    case ("small"):
      total=(total+600)*number;
      break;
    case ("medium"):
      total=(total+800)*number;
      
      break;
    case ("large"):
      total=(total+1000)*number;
      break;
  }
  switch (crust){
    case ("Crispy"):
      total=(total+60)*number;
      break;
    case ("Stuffed"):
      total=(total+80)*number;
      
      break;
    case ("Glutten-free"):
      total=(total+120)*number;
      break;
  }
  switch (topping){
    case ("Pepperoni"):
      total=(total+160)*number;
      break;
    case ("Mushrooms"):
      total=(total+180)*number;
      
      break;
    case ("Sausage"):
      total=(total+85)*number;
      break;
    case ("Bacon"):
      total=(total+35)*number;
      break;
    case ("Extra cheese"):
      total=(total+40)*number;
      
      break;
    case ("Onions"):
      total=(total+55)*number;
      break;
      case ("Black olives"):
    total=(total+90)*number;
    break;
    case ("Green peppers"):
      total=(total+75)*number;
      
      break;

  }
  
  


}


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
  
  
  
  $("#checkout").click(function(event){
    event.preventDefault();
     var size=$("input[name='size']:checked").val();
     var flavor=$("#flavor").val();
     var crust=$("input[name='crust']:checked").val();
     var topping=$("#toppings").val();
     var number=$("#quantity-field").val();    
     
     
     var newPizza= new Pizzaorder(flavor,size,crust,topping,number);
     checkout(flavor,size,crust,topping,number);

     $(".showflavor").text(newPizza.flavor);
     $(".showsize").text(newPizza.size);
     $(".showcrust").text(newPizza.crust);
     $(".showToppings").text(newPizza.topping);
     $("showquantity").text(newPizza.number);
     $(".showTotal").text(total);
     
     

     total=0;


     $("form#pizzaorder1").trigger("reset");

  });

$("#delivery").click(function(event, deliver){
 event.preventDefault();
 var deliver = $(prompt("Enter Your Name:")).val();
 var address = $(prompt("Enter Your Address:")).val();

 confirm("Your Order will be ready. Order is " + newPizza);
});

$("#pick").click(function(event, deliver){
  event.preventDefault();
  alert("Pick up in 15 mins. Cheers!")
 });


})

