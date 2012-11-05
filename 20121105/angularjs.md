# 
AngularJS tutorial angular-phonecat
==========

Kiyoshi Nomo  
at 社内勉強会 2012/11/05

AngularJS tutorial
----------

[angular-phonecat](https://github.com/angular/angular-phonecat)


index.html
----------

* js/app.js
* js/controllers.js
* js/filters.js
* js/services.js


ngView
----------

ngView is a directive that complements the [$route](http://docs.angularjs.org/api/ng.$route) service by including the rendered template of the current route into the main layout (index.html) file. Every time the current route changes, the included view changes with it according to the configuration of the $route service.

[http://docs.angularjs.org/api/ng.directive:ngView](http://docs.angularjs.org/api/ng.directive:ngView)


Filter
----------

Custom Filter
In order to create a new filter, you are going to create a phonecatFilters module and register your custom filter with this module:

app/js/filters.js:

```
angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
```


Service
----------

app/js/services.js.

```
angular.module('phonecatServices', ['ngResource']).
    factory('Phone', function($resource){
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
});
```

We used the module API to register a custom service using a factory function. We passed in the name of the service - 'Phone' - and the factory function. The factory function is similar to a controller's constructor in that both can declare dependencies via function arguments. The Phone service declared a dependency on the [$resource](http://docs.angularjs.org/api/ngResource.$resource) service.


Reference 
----------

[Developer Guide](http://docs.angularjs.org/guide/index)

[Cookbook](http://docs.angularjs.org/cookbook/index)


Other Resouces 
----------

* 他 JavaScript Framework との比較

[The Top 10 Javascript MVC Frameworks Reviewed](http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/)	

[Hello Backbone.js](http://arturadib.com/hello-backbonejs/)

[ember.js](http://emberjs.com/)

* Jasmine standalone 実行

[A simple project](https://github.com/pivotal/jasmine/wiki/A-simple-project)

[Jasmineでテスティング](http://tech.feedforce.jp/jasmine.html)

* Testacular

[Testacularで行こう](http://node.ws/translate/2012/11/03/testacular/)

* Testacular に似たテストフレームワーク

[Testem: Interactive JS Test Runner](http://tobyho.com/2012/06/24/testem-interactive-js-test-runner/)


Thank you!
----------
