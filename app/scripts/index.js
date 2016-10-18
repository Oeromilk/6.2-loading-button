var PizzaCollection = require('./models/submit.js').PizzaCollection;
var $ = require('jquery');

$(function(){

  var $submitButton = $('#submit-button');

  var pizzas = new PizzaCollection();

  pizzas.on("add", function(pizza){
    $('#pizza-container').append('<tr>' +'<td>' + pizza.get('ingredient') + '</td>' + '<td>' + pizza.get('name') + '</td>' + '<td>' + pizza.get('type') + '</td>' + '</tr>');
  });

  $submitButton.on('click', function(event){
    event.preventDefault();
    $submitButton.html('loading...');

    pizzas.fetch().then(function(){
      $submitButton.html('Submit');
    });
  })

  $('#post-button').on('click', function(event){
    event.preventDefault();

    pizzas.create({ingredient: $('#ingredient').val(), name: $('#name').val(), type: $('#type').val()});
    $('#ingredient').val('');
    $('#name').val('');
    $('#type').val('');
  })

});
