function orderForm(){
    return {
       restrict: 'E',
       scope: {},
       bindToController: {
         data: '=',
         submit: '&'
       },
       controller: 'OrderFormController as form',
       template: `
         <pre>{{ form.data | json }}</pre>
         <form novalidate ng-submit="form.onSubmit();">
            <input type="text" ng-model="form.data.name" placeholder="Your name">
            <input type="email" ng-model="form.data.email" placeholder="Your email">
            <input type="text" ng-model="form.data.location" placeholder="Your location">
            <select>
                <option value="">Select...</option>
            </select>
            <textarea placeholder="Any messages (optional)" ng-model="form.data.comments" />
            <button type="submit">
                Order
            </button>
         </form>
        `
    };
}

angular
 .module('app')
 .directive('orderForm',orderForm);