//Add test
//Subraction

//Multiplication

//Division
var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

    it('Addition of 2 numbers', function(){
        var a = 10;
        var b = 10;

        var c = a+b;
        assert.equal(c, 20);
    });

    it('Subtraction of 2 numbers', function(){
        var a = 10;
        var b = 10;

        var c = a-b;
        assert.equal(c, 0);
    });

    it('Multiplication of 2 numbers', function(){
        var a = 10;
        var b = 10;

        var c = a*b;
        assert.equal(c, 100);
    });

    it('Division of 2 numbers', function(){
        var a = 10;
        var b = 10;

        var c = a/b;
        assert.equal(c, 1);
    });

});

