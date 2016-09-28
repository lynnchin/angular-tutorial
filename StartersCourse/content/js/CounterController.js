function CounterController(){
    this.count=0;
    this.decrement = function(){
        this.count--;
    }
    
    this.increment = function(){
        this.count++;
    }
}

angular
.module('app')
.controller('CounterController', CounterController);