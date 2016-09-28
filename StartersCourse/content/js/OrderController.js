function OrderController(){
    this.orderName = 'Coke';
    this.orderQuantity = 5;
}

angular
 .module('app')
 .controller('OrderController',OrderController);