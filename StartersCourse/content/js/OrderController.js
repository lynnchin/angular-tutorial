function OrderController(){
    this.customerOrder = {
      name: '',
      email: '',
      location: '',
      product: {
          label: '',
          id: ''
      },
      comments: ''
    };
    
    this.submitOrder = function(){
        
    };
}

angular
 .module('app')
 .controller('OrderController',OrderController);