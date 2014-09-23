'use strict';

//Utilities
// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}

// Constructors              
// Only add code to *THIS* section!

function Dog (a) {
if (!a){ a={} };
this.color = a.color || 'No Color';
this.hungry = a.hungry === undefined ? true : a.hungry;
this.status = a.status || 'normal';
this.owner = a.owner || undefined;
}

function Human (b) {
if (!b){ b={} };
this.cool = b.cool === undefined ? false : b.cool;
}

Human.prototype.pet = function (dogName) {
  dogName.status = 'happy';
}

Human.prototype.feed = function (food) {
  food.hungry = false;
}

//Dogs  

var sadie = new Dog({
  color: "black",
  hungry: false
});

var moonshine = new Dog({
  color: "blue-red"
});

var atticus = new Dog();

//Humans

var mason = new Human();

var julia = new Human({
  cool: true
});

//Make this work - DONE!
// Don't edit this section. Instead make these tests pass by writing 
// constructors in the constructor section above ;D

it("should make Sadie happy when Mason pets her", function(){
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function(){
  expect(sadie.color).toBe('black');
});

it("should make Moonshine hungry and Sadie not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function(){
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});

it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function(){
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function(){
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});

