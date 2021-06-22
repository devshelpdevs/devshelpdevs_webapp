import sum from'../helper/sum';

describe('sum test',() => {
    it("Should add two numbers together", () => {
        expect(sum(1,2)).toBe(3);
    });
});