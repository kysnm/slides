# Javascript MVC framework AngularJS


Kiyoshi Nomo  
at in-house workshop 2012/10/29

//

## What is AngularJS
	
* AngularJS by Google
* Backbone.js
* Ember.js
* spine.js
* and more…

http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/

//

> **Is AngularJS a library, framework, plugin or a browser extension?**

> AngularJS fits the definition of a framework the best, even though it's much more lightweight than a typical framework and that's why many confuse it with a library.

//

> AngularJS is 100% JavaScript, 100% client side and compatible with both desktop and mobile browsers. So it's definitely not a plugin or some other native browser extension.

http://docs.angularjs.org/misc/faq	

//

## Why AngularJS

> **Why is this project called "AngularJS"? Why is the namespace called "ng"?**

> Because HTML has Angular brackets and "ng" sounds like "Angular".

http://docs.angularjs.org/misc/faq	

//

## Internet Explorer ?

> This document describes the Internet Explorer (IE) idiosyncrasies when dealing with custom HTML attributes and tags. Read this document if you are planning on deploying your angular application on IE v8.0 or earlier.

http://docs.angularjs.org/guide/ie

//

## tutorial

### You will need Node.js and Testacular

### You can follow this tutorial and hack on the code in either the Mac/Linux or the Windows environment. 

//

* Node.js v0.8 or better 
* npm install -g testacular
* git clone git://github.com/angular/angular-phonecat.git
* cd angular-phonecat
* ./scripts/web-server.js

//

## git checkout -f step-0

//

## ng-app directive

> The ng-app attribute is represents an Angular directive (named ngApp; Angular uses name-with-dashes for attribute names and camelCase for the corresponding directive name)

//

## Double-curly binding with an expression

[Angular expression](http://docs.angularjs.org/guide/expression)

//

## git checkout -f step-1

https://github.com/angular/angular-phonecat/compare/step-0...step-1

//

## git checkout -f step-2

https://github.com/angular/angular-phonecat/compare/step-1...step-2

* The ng-repeat="phone in phones" statement in the <li> tag is an Angular repeater.

//

## PhoneListCtrl controller

<iframe width="677px" height="423px" src="http://docs.angularjs.org/img/tutorial/tutorial_02.png" frameborder="0"></iframe>

//

## Model and Controller

> The data model (a simple array of phones in object literal notation) is instantiated within the PhoneListCtrl controller.

>  This controller scope is available to all bindings located within the <body ng-controller="PhoneListCtrl"> tag.

[angular scope documentation](http://docs.angularjs.org/api/ng.$rootScope.Scope)

//

## Tests

> The "Angular way" makes it easy to test code as it is being developed.

> Angular developers prefer the syntax of [Jasmine](http://pivotal.github.com/jasmine/)'s Behavior-driven Development (BDD) framework when writing tests.

//

## ./scripts/test.sh

[test.sh](https://github.com/angular/angular-phonecat/blob/master/scripts/test.sh)

[testacular.conf.js](https://github.com/angular/angular-phonecat/blob/master/config/testacular.conf.js)

//

## ./scripts/test.sh

* --browsers Chrome,ChromeCanary,Firefox,Opera,  
Safari,PhantomJS,IE

https://github.com/vojtajina/testacular/blob/master/test/client/testacular.conf.js

//

## Testacular

> **Why am I doing this?**

>Throughout the development of AngularJS, we've been using JSTD for testing. I really think that JSTD is a great idea. Unfortunately, we had many problems with JSTD, so we decided to write our own test runner based on the same idea. We wanted a simple tool just for executing JavaScript tests that is both stable and fast. That's why we use the awesome Socket.io library and Node.js.

https://github.com/vojtajina/testacular
<br />
<br />
\* JSTD: [js-test-driver](http://code.google.com/p/js-test-driver/)

//

## git checkout -f step-3

https://github.com/angular/angular-phonecat/compare/step-2...step-3

> we will add full text search (yes, it will be simple!). 

> We will also write an end-to-end test

//

## filter

<iframe width="677px" height="423px" src="http://docs.angularjs.org/img/tutorial/tutorial_03.png" frameborder="0"></iframe>

//

## end-to-end test

[Angular's end-to-end test runner](http://docs.angularjs.org/guide/dev_guide.e2e-testing)

//

[./scripts/e2e-test.sh](https://github.com/angular/angular-phonecat/blob/master/scripts/e2e-test.sh)

[testacular-e2e.conf.js](https://github.com/angular/angular-phonecat/blob/master/config/testacular-e2e.conf.js)

//

http://localhost:8000/test/e2e/runner.html

//

## git checkout -f step-4

https://github.com/angular/angular-phonecat/compare/step-3...step-4

> let your users control the order of the items in the phone list. 
> The dynamic ordering is implemented by creating a new model property

//

## orderBy filter

<iframe width="677px" height="423px" src="http://docs.angularjs.org/img/tutorial/tutorial_04.png" frameborder="0"></iframe>

//

## Test

./scripts/test.sh

//

http://angular.github.com/angular-phonecat/step-4/test/e2e/runner.html

//

## git checkout -f step-5

https://github.com/angular/angular-phonecat/compare/step-4...step-5

> fetch a larger dataset from our server using one of angular's built-in [services](http://docs.angularjs.org/api/ng) called [$http](http://docs.angularjs.org/api/ng.$http)

//

## dependency injector

<iframe width="677px" height="423px" src="http://docs.angularjs.org/img/tutorial/xhr_service_final.png" frameborder="0"></iframe>

//

## '$' Prefix Naming Convention

> As a naming convention, angular's built-in services, Scope methods and a few other angular APIs have a '$' prefix in front of the name.

//

> Don't use a '$' prefix when naming your services and models, in order to avoid any possible naming collisions.

//

## A Note on Minification

```
PhoneListCtrl.$inject = ['$scope', '$http'];
```

//

```
var PhoneListCtrl = ['$scope', '$http', function($scope, $http) { /* constructor body */ }];
```

//

> Both of these methods work with any function that can be injected by Angular, so it's up to your project's style guide to decide which one you use.

//

## Test

> Note: Because we loaded Jasmine and angular-mocks.js in our test environment, we got two helper methods [module](http://docs.angularjs.org/api/angular.mock.module) and [inject](http://docs.angularjs.org/api/angular.mock.inject) that we'll use to access and configure the injector. 

//

> We used the inject helper method to inject instances of [$rootScope](http://docs.angularjs.org/api/ng.$rootScope), [$controller](http://docs.angularjs.org/api/ng.$controller) and [$httpBackend](http://docs.angularjs.org/api/ng.$httpBackend) services into the Jasmine's beforeEach function.

//

> We created a new scope for our controller by calling $rootScope.$new()

//

> We called the injected $controller function passing the PhoneListCtrl function and the created scope as parameters.

//

> Request $httpBackend service to be injected into our beforeEach function. This is a mock version of the service that in a production environment facilitates all XHR and JSONP requests. The mock version of this service allows you to write tests without having to deal with native APIs and the global state associated with them — both of which make testing a nightmare.

//

> Use the $httpBackend.expectGET method to train the $httpBackend service to expect an incoming HTTP request and tell it what to respond with. Note that the responses are not returned until we call the $httpBackend.flush method.

//

## git checkout -f step-6

https://github.com/angular/angular-phonecat/compare/step-5...step-6

> you will add thumbnail images for the phones in the phone list, and links that, for now, will go nowhere.

//

## Test

> We added a new end-to-end test to verify that the app is generating correct links to the phone views that we will implement in the upcoming steps.

test/e2e/scenarios.js

http://angular.github.com/angular-phonecat/step-6/test/e2e/runner.html

//

## git checkout -f step-7

https://github.com/angular/angular-phonecat/compare/step-6...step-7

> you will learn how to create a layout template and how to build an app that has multiple views by adding routing.

//

## Multiple Views, Routing and Layout Template

> Application routes in Angular are declared via the [$routeProvider](http://docs.angularjs.org/api/ng.$routeProvider), which is the provider of the [$route service](http://docs.angularjs.org/api/ng.$route). This service makes it easy to wire together controllers, view templates, and the current URL location in the browser.

//

## The App Module

> We call this module phonecatApp and using the config API we request the $routeProvider to be injected into our config function and use $routeProvider.when API to define our routes.

//

> Note the use of the :phoneId parameter in the second route declaration. The $route service uses the route declaration — '/phones/:phoneId' — as a template that is matched against the current URL. All variables defined with the : notation are extracted into the [$routeParams](http://docs.angularjs.org/api/ng.$routeParams) object.

//

In order for our application to bootstrap with our newly created module we'll also need to specify the module name as the value of the [ngApp](http://docs.angularjs.org/api/ng.directive:ngApp) directive:

<pre>&lt;html lang="en" ng-app="phonecat"&gt;&lt;/pre&gt;</pre>

//

## Controllers

<pre>
function PhoneDetailCtrl($scope, $routeParams) {  
  $scope.phoneId = $routeParams.phoneId;  
}
</pre>

//

## Template

> The $route service is usually used in conjunction with the [ngView](http://docs.angularjs.org/api/ng.directive:ngView) directive. The role of the ngView directive is to include the view template for the current route into the layout template, which makes it a perfect fit for our index.html template.

//

## app/partials/phone-list.html

> The code that we removed was placed into the phone-list.html template

//

## app/partials/phone-detail.html

> Note how we are using phoneId model defined in the PhoneDetailCtrl controller.

//

## Test

> navigate to various URLs and verify that the correct view was rendered.

test/e2e/scenarios.js

http://angular.github.com/angular-phonecat/step-7/test/e2e/runner.html

//

## git checkout -f step-8

https://github.com/angular/angular-phonecat/compare/step-7...step-8

> implement the phone details view, which is displayed when a user clicks on a phone in the phone list.

//

## Data

> In addition to phones.json, the app/phones/ directory also contains one json file for each phone

//
## Controller

> To construct the URL for the HTTP request, we use $routeParams.phoneId extracted from the current route by the $route service.

//

## Template

> The TBD placeholder line has been replaced with lists and bindings that comprise the phone details

//

## Test

test/unit/controllersSpec.js

./scripts/test.sh

//

test/e2e/scenarios.js

http://angular.github.com/angular-phonecat/step-8/test/e2e/runner.html

//

[Angular's end-to-end test runner API](http://docs.angularjs.org/guide/dev_guide.e2e-testing)

//

## git checkout -f step-9

https://github.com/angular/angular-phonecat/compare/step-8...step-9

> how to create your own custom display filter.

//

## Custom Filter

you are going to create a phonecatFilters module and register your custom filter with this module:

app/js/filters.js

//

app/js/app.js

```
angular.module('phonecat', ['phonecatFilters']).
```

//

## Template

> we need to include this file in our layout template.

app/index.html


//

> The syntax for using filters in Angular templates is as follows:

```
{{ expression | filter }}
```

app/partials/phone-detail.html

//

## Test

test/unit/filtersSpec.js

./scripts/test.sh

//

[built-in Angular filters](http://docs.angularjs.org/api/ng.$filter)

//

## git checkout -f step-10

https://github.com/angular/angular-phonecat/compare/step-9...step-10

> add a clickable phone image swapper to the phone details page.

//

## Controller

app/js/controllers.js

> created the mainImageUrl model property and set its default value to the first phone image URL.

> created a setImage event handler function that will change the value of mainImageUrl.

//

## Template

app/partials/phone-detail.html

> bound the ngSrc directive of the large image to the mainImageUrl property

> registered an [ngClick](http://docs.angularjs.org/api/ng.directive:ngClick) handler with thumbnail images.

//

## Test

test/e2e/scenarios.js

> One verifies that the main image is set to the first phone image by default. 

> The second test clicks on several thumbnail images and verifies that the main image changed appropriately.

//

http://angular.github.com/angular-phonecat/step-8/test/e2e/runner.html

//

## git checkout -f step-11

https://github.com/angular/angular-phonecat/compare/step-10...step-11

> improve the way our app fetches data.

//

## Template

> The custom service is defined in app/js/services.js so we need to include this file in our layout template. 

> Additionally, we also need to load the angular-resource.js file, which contains the ngResource module and in it the $resource service, that we'll soon use.

app/index.html

//

## Service

app/js/services.js.

>  the module API to register a custom service using a factory function.

//

The [$resource](http://docs.angularjs.org/api/ngResource.$resource) service makes it easy to create a [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) client with just a few lines of code. This client can then be used in our application, instead of the lower-level [$http](http://docs.angularjs.org/api/ng.$http) service.

//

app/js/app.js

> We need to add 'phonecatServices' to 'phonecat' application's requires array.

//

## Controller

> We simplified our sub-controllers (PhoneListCtrl and PhoneDetailCtrl) by factoring out the lower-level [$http](http://docs.angularjs.org/api/ng.$http) service, replacing it with a new service called Phone.

app/js/controllers.js

//

## Test

> The [$resource](http://docs.angularjs.org/api/ngResource.$resource) service augments the response object with methods for updating and deleting the resource. If we were to use the standard toEqual matcher, our tests would fail because the test values would not match the responses exactly. To solve the problem, we use a newly-defined toEqualData [Jasmine matcher](http://pivotal.github.com/jasmine/jsdoc/symbols/jasmine.Matchers.html).

test/unit/controllersSpec.js

./scripts/test.sh

//

## Reference 

[Developer Guide](http://docs.angularjs.org/guide/index)

[Cookbook](http://docs.angularjs.org/cookbook/index)

//

## Thank you!
