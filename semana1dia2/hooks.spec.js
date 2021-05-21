
describe('suite 1', () => {

    afterEach(() => {
        console.log('after test case');
    });

    before(() => {
        console.log('before all test cases');
    })

    after(() => {
        console.log('after all test cases');
    })

    beforeEach(() => {
        console.log('before test case');
    });

    it('test 1', ()=> {
        console.log('suite 1 test 1');
    })

    it('test 2', ()=> {
        console.log('suite 1 test 2');
    })
});