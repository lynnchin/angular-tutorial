var counter = {
    bindings: {
     count: '='
    },
//    require: {
//        '^^parent'
//    },
    controller: function(){
          this.increment = function() {
              this.count++;
          };
          
          this.decrement = function(){
              this.count--;
          };
      },
      template: `
            <div class="todo">
                <button type="button" ng-click="$ctrl.decrement();">-</button>
                <input type="text" ng-model="$ctrl.count"></input>
                <button type="button" ng-click="$ctrl.increment();">+</button>
            </div>
      `
};


angular 
 .module('app')
 .component('counter', counter);