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
      console.log('Submitted', this.customerOrder);  
    };
}

angular
 .module('app')
 .controller('OrderController',OrderController);