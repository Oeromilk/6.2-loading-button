var Backbone = require('backbone');

var Pizza = Backbone.Model.extend({

});

var PizzaCollection = Backbone.Collection.extend({
  model: Pizza,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/domspizza'
});

module.exports = {
  Pizza: Pizza,
  PizzaCollection: PizzaCollection
};
