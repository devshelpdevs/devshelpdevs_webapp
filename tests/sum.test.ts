import sum from'../helper/sum';

describe('sum test',() => {
    it("Should add two numbers together", () => {
        expect(sum(1,2)).toBe(3);
    });
    it("The sum should be falsy", () => {
        expect(sum(0,0)).toBeFalsy();
    });
});

// describe("Test for all get routes ", () => {
//     describe("GET /", () => {
//         it("It should load the homepage successfully", (done) => {
//             // 
//             done();
//         });
//     });
// });