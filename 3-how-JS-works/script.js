///////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1999);

function calculateAge(year) {
  console.log(2016 - year);
}


// retirement(1956);
var retirement = function(year) {
  console.log(65 - (2016 - year));
}

retirement(1990);


// variables
console.log(age);
var age = 34;
console.log(age);

function foo() {
  var age = 65;
  console.log(age)
}
foo();
console.log(age)


///////////////////////////////////////
// Lecture: Scoping


// First scoping example
// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//
//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }


// Example to show the differece between execution stack and scope chain
var examA = 'Hello!';
first();

function first() {
    var examB = 'Hi!';
    second();

    function second() {
        var examC = 'Hey!';
        third()
    }
}

function third() {
    var examD = 'John';
    console.log(examA + examD);
}




///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1985);

function calculateAge(year) {
  console.log(2018 - year);
  console.log('Year: ', this);
}

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log('Object: ', this);
    console.log('Object Year Of Birth: ', 2018 - this.yearOfBirth);
    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
