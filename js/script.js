$(document).ready(function () {
  function Pizza(Size, pizzaCrust, pizzaToppings, PizzaNumber) {
    this.pizzaSize = pizzaSize;
    this.pizzaCrust = pizzaCrust;
    this.pizzaToppings = pizzaTopping;
    this.PizzaNumber = PizzaNumber;
  }
  //size
   {
    this.size = size;
    this.price = price;
  }
  var small = new Size("small", 500);
  var medium = new Size("medium", 1000);
  var large = new Size("large", 1500);

  //crust
  function PizaCrust(crust, price) {
    this.crust = crust;
    this.price = price;
  }
  var crispy = new PizaCrust("crispy", 300); //asumtion prices for small
  var stuffed = new PizaCrust("stuffed", 250);
  var gluttenFree = new PizaCrust("glutten free", 200);
  //toppings
  function PizaToppings(toppings, price) {
    this.toppings = toppings;
    this.price = price;
  }
  var Pepperoni = new PizaToppings("pepperoni", 300); //asumtion prices for small
  var Mushroom = new PizaToppings("mushroom", 250);
  var Onion = new PizaToppings("onion", 200);
  var Tomato = new PizaToppings("tomato", 200);
  var FreshGarlic = new PizaToppings("freshGarlic", 200);
  var FreshBasil = new PizaToppings("freshBasil", 200);
  let deliveryFee = 500;


  $("#radio_bn").click(function () {
    var radioValue = $("input[name='psize']:checked").val();
    if (radioValue == "large") {
      var pricePerSize = large.price;

      //return pricePerSize;
      //alert(pricePerSize);
    } else if (radioValue == "medium") {
      var pricePerSize = medium.price;
      //return pricePerSize;
      //alert(pricePerSize)
    } else if (radioValue == "small") {
      var pricePerSize = small.price;
      //return pricePerSize;
      //alert(pricePerSize)
    } else {
      //alert("sellect your pizza size");
    }

    //crust
    var selectedcrusttype = $("input[name='pcrust']:checked").val();
    if (selectedcrusttype == "crispy") {
      var pricePerCrust = crispy.price;
      //return pricePerCrust;
      //alert(pricePerCrust);
    } else if (selectedcrusttype == "stuffed") {
      var pricePerCrust = stuffed.price;
      //return pricePerCrust;
      //alert(pricePerCrust)
    } else if (selectedcrusttype == "gluttenfree") {
      var pricePerCrust = gluttenFree.price;
      //return pricePerCrust;
      //alert(pricePerSize)
    } else {
      alert("sellect your pizza crust");
    }
    //toppings
    var selectedtoppings = $("input[name='ptoppings']:checked").val();
    if (selectedtoppings == "pepperoni") {
      var pricePerToppings = Pepperoni.price;
      //alert(pricePerToppings)
      //return pricePerToppings;
    } else if (selectedtoppings == "mushroom") {
      var pricePerToppings = Mushroom.price;
      //return pricePerToppings;
      //alert(pricePerToppings)
    } else if (selectedtoppings == "onion") {
      var pricePerToppings = Onion.price;
      //alert(pricePerToppings)
      //return pricePerToppings;
      //alert(pricePerToppings)
    } else if (selectedtoppings == "tomato") {
      var pricePerToppings = Tomato.price;
      alert(pricePerToppings)
      //return pricePerToppings;
      //alert(pricePerToppings)
    } else if (selectedtoppings == "freshgarlic") {
      var pricePerToppings = FreshGarlic.price;
      //alert(pricePerToppings)
      //return pricePerToppings;
      //alert(pricePerToppings)
    } else if (selectedtoppings == "freshbasil") {
      var pricePerToppings = FreshBasil.price;
      //alert(pricePerToppings)
      //return pricePerToppings;
    } else {
      alert("sellect your preffered toppongs");
    }
    var pizzaNumber = $("#number").val();
    //alert(pizzaNumber)
    //prototype
    var totalAmount = function () {
      return (pricePerSize + pricePerToppings + pricePerCrust) * pizzaNumber
    };
    totalAmount();
    var totalAmount1 = totalAmount()
    // alert(totalAmount1)
    $(".size1").append(radioValue + "</br>");
    $(".type").append(selectedcrusttype + "</br>");
    $(".topping").append(selectedtoppings + "</br>");
    $(".numb").append(pizzaNumber + "</br>");
    $(".amnt").append(totalAmount1 + "</br>");
    var delivery = $("input[name='delivery']:checked").val();
    if (delivery == "delivered") {
      let charges = totalAmount1 + deliveryFee
      //alert(charges)
      $(".message").show();
    } else if (delivery == "pick-up") {
      alert("your order has been recieved, thank you for shopping with us, please collect your order within the hour")
    }
    else {
      alert("select your delivery mode")
    }
    //
    //  $(".your_location").show( slow, swing)
  });


});