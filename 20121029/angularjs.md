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