function counter(){
    return {
      scope: {},
      template: `
            <div class="counter">
            <p>Counter: {{ counter.count }}</p>
            <a href="" ng-click="counter.increment();">+</a>
            <a href="" ng-click="counter.decrement();">-</a>      
            </div>
            <div>
            <a href="" ng-click="counter.updateName()">Update name</a>
            </div>
            </div>
        `,
        controller: 'CounterController as counter',
        link: function ($scope, $element, $attrs) {
            $attrs.$observe('name', function(value){
                console.log(value);
                if(value === 'Food counter'){
                    $attrs.$updateClass('counter--food','counter--drink');
                } else if(value === 'Drink counter'){
                    $attrs.$updateClass('counter--drink','counter--food');
                }
        });
    }
 }
}

angular 
 .module('app')
 .directive('counter', counter);
    