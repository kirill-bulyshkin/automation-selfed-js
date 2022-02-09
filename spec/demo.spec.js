describe('example', function () {
    let x;
    let y;
    beforeAll(() => {
        x = 5;
        y = 3;
        console.log('beforeAll');
    });

    beforeEach(() => {
        console.log('beforeEach');
    });

    it('demo test', function () {
        const x = 5;
        const y = 3;
        expect(x > y).toBe(true);
        // expect(x < y).withContext('x < y').toBeTrue();
    });

    afterEach(() => {
        console.log('afterEach');
    });

    beforeAll(() => {
        console.log('afterAll');
    });
});