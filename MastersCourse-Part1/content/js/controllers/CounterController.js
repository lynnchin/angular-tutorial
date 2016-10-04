function CounterController($scope){
    this.count = 0;
    this.name = 'Drink counter';
    this.countList = [];
    this.updateName = function() {
        this.name = 'Food counter';
    };
    
    this.increment = function increment() {
        this.count++;
        this.countList.unshift({id: this.count});
    };
    
    this.decrement = function decrement() {
        this.count--;
        this.countList.unshift({id: this.count});
    };
    
    $scope.$watchCollection(angular.bind(this,function(){
        return this.countList;
    }), function(newValue, oldValue) {
        if(newValue === oldValue){
            return;
        }
        console.log(newValue,oldValue);   
    });
}

angular
    .module('app')
    .controller('CounterController', CounterController);