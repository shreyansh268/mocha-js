
describe('Hooks', function(){
before('Before hook', function (){
console.log("before each describe");
});

beforeEach('Before Each hook', function(){
console.log("before each it");
});


it("Mocha hook test", function(){
    console.log("test for mocha hooks");
}
)

});