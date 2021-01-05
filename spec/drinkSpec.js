describe("whatCanIDrink", function(){
    describe("zero test", function(){
        it("should return sorry age incorrect", function(age){
            age < 0;
            expect(age).toBe('Sorry. I can’t tell what drink because that age is incorrect!');
        })
    })
})