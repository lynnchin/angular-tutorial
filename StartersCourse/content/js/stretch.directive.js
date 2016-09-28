function stretch(){
  return {
      restrict: 'A', // A === attribute
                    // E === element <input stretch>
      link: function($scope, $element, $attrs){
        var element = $element[0];
        element.addEventListener('focus', function(){
            this.style.width=250;
        });
        element.addEventListener('blur', function(){
            this.style.width=120;
        });
      }
  };  
}

angular 
 .module('app')
 // my stretch - capital letter creates hypen in angular JS
 .directive('myStretch',stretch);