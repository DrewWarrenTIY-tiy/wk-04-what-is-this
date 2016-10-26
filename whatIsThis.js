/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
    console.log('This is...', this);
    console.log('a = ', a);
    console.log('b = ', b);
};

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
};

var inAFunction = function(a, b) {
    this.name = 'Sally';
    whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
};

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

/* Instructions:
   You are a scientist who has just discovered a *mysterious* new element in your lab. Since creativity isn't your strong suit, you name the element `this`. Your job is to figure out the properties of this new element as well as how it interacts with its environment. Run through each of the examples in whatIsThis.js, one by one (commenting out the previous example and uncomment the current example as necessary). In the comments section below each example fill in what `this` is referencing inside of the whatIsThis function. Why? If it throws an error, why is it throwing an error?

   Create an index.html and link this file.  Open index.html in your browser and view your console to get started.
*/

// Problem 1
// whatIsThis('hello', 'world');

// "this" is default location. (Window in browser)

// because as the whatIsThis function is not housed within any other object, the closest element 'above' it that 'this' can refer to is the Window object.

// (because it isn't otherwise specified, therefore uses the default binding, in this case Window)






// * Problem 2
 //window.whatIsThis('hello', 'world');
/*
- "this" is Window or not defined

- because window.whatIsThis is functionally the same as just calling whatIsThis.

// (because implicitly bound to 'window' through the call site)

*/




// * Problem 3
//inAnObject.test1('face', 'book');
/*
- "this" is Object

- because test1 is a method of Object

this is inAnObject because implicitly bound to 'inAnObject' through the call site

*/




// * Problem 4
//inAnObject.anotherObject.test1('twitter', 'book');
/*
- "this" is I received an Error message saying test1 was not a function...

- because ...  I'm assuming it was supposed to point to isAnObject because test1 is a methor of isAnObject

this is an error because .test1 doesn't exist in 'anotherObject'


*/




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
/*
- "this" is anotherObject

- because test2 is a method of anotherObject

this is 'anotherObject' because implicitly bound to 'inAnObject.anotherOBject' through the call site.

*/




// * Problem 6
// whatIsThis.call();
/*
- "this" is Window

- because whatIsThis is at a high level, so the only thing containing it is the Window. The call() method calls a function with a given this value and arguments provided individually.. Whatever that means! :D

this is Window or global without an 'a' or 'b' defined because it isn't otherwie specified, therefore uses the default binding, in this case Window; since no 'a' or 'b' parameter, they're undefined
*/




// * Problem 7
// whatIsThis.call(trickyTricky);
/*
- "this" is prototype Object with values passed in my trickytricky

- because tricky wasn't called on its own, it was called through whatIsThis. "A different this object can be assigned when calling an existing function. this refers to the current object, the calling object"

this is trickytricky without an 'a' or 'b' defined because trickytricky is passed through .call and therefore hard bound; since no a or b parameter, they're undefined

*/




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
/*
- "this" is proto Object with values reassigned by the parameters passed in through the call method.

- because the object is still called through the same method even though the parameters are being changed.

"this" is 'trickyTricky' with an a or b defined through .call parameters beacuse trickytricky and parameters are passed through .call and therefore hard bound
*/




// * Problem 9
 // whatIsThis.call(confusing);
/*
- "this" is proto Object with name value 'confusing'

- because same as trickyTricky so far

this is confusing without an a or b defined because confusing is passed through .call and therefore hard bound. since no a or b parameters are given, they are undefined

*/




// * Problem 10
// whatIsThis.call(confusing, 'hello');
/*
- "this" is proto Obj with name value confusing

- because the object is still called through the same method even though the parameters are being changed.

this is confusing with a defined and b undefined because confusing and one parameter are passed through .call and therefore hard bound. since no b parameter its undefined

*/




// * Problem 11
//whatIsThis.apply(trickyTricky);
/*
- "this" is proto Object with name value trickyTricky

- because trickyTricky called through whatisthis via the apply method

this is trickytricky without an a or b defined because trickytricky is passed through .apply and therefore hard bound; since no a or b parameter, they're undefined

*/




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
/*
- "this" is proto Obj with name value confusing with params passed as array

- because "The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).""

this is confusing with an a and b defined through .apply parameters because confusing and parameters are passed through .apply and therefore hard bound - even though they are passed as an array (the array is necessary to pass additional parameters through the .apply)

*/




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
/*
- "this" is I got an error message.

- because because params were passed as strings and not an array of strings.

this is an error because .apply requires an array for additional parameters (i.e. everything but the object being bound)

*/




// * Problem 14
// inAFunction('what will', 'happen?');
/*
- "this" is Window proto object

- because even though whatIsThis is called as a method, it is defined as a global function, so the this still refers to the Window.

this is Window or global because it was implicitly bound to 'window' through its call site

*/




// * Problem 15
// inAFunction.test3('A', 'B');
/*
- "this" is ... I received an error message saying test3 is not a function.

- because ... whatIsThis is not called with any parameters

this is an error because test3 is not a function

*/




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
/*
- "this" is proto Window obj.

- because newObject is being treated the same as inAFunction was.

this is Window or global because it was default bound to window through its call site. new doesnt apply because the function is simply called within the new function

*/




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
/*
- "this" is first this is proto Window obj, second is obj inAFunction with name value Sally

- because newObject is instantiated with the test3 method as defined on line 24, and passed parameters for the whatIsThis callback.

this is initially Window or global then it's 'inAFunction' because it was initially default bound to 'window' through its call site; then it was bound via an implicit binding to 'inAFunction'

*/




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
/*
- "this" is proto Obj with name value trickyTricky

- because .call is passing tricky Obj into test1 method of inAnObject object.

this is trickytricky with an a or b defined through .call parameters because trickytricky and parameters are passed through .call and therefore hard bound

*/




// * Problem 19
//inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
/*
- "this" is proto Obj with name value confusing.

- because apply method is passing confusing obj into the test2 method of anotherObject referenced by inAnObject object.

this is confusing with an a and b defined through .apply parameters because confusing and parameters are passed through .apply and therefore hard bound even though they are passed as an array

*/
