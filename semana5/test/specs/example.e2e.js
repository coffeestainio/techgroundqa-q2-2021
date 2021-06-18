
const assert = require('assert');

class Elements {
    get btAdd() { return $('[name=Add]')} 
    get inputRow1() { return $('#row1 input')}
    get inputRow2() { return $('#row2 input')}
    get saveLocator() { return $('[name=Save]')}
    get editLocator() { return $('[name=Edit]')}
    get saveLocatorOk() { return $('#row2 [name=Save]')}
    get instrucctions() { return $('#instructions')}
};

const elements = new Elements();

describe('My Login application', () => {

    beforeEach( ()=> {
        browser.url('/practice-test-exceptions/');
    });

    describe('Exception 1 ', () => {
        it('Failure', async () => {
            await browser.setTimeout({ implicit: 500 })
            await (await elements.btAdd).click();
            const element2 = await elements.inputRow2;
            await element2.isDisplayed();
        });

        it('Success', async () => {
            await (await elements.btAdd).click();
            const element2 = await elements.inputRow2;
            await element2.waitForExist({timeout: 6000});
            await element2.click();
        });
    })

    describe('Exception 2 ', () => {
        it('Failure', async () => {
            await (await elements.btAdd).click();
            const element2 = await elements.inputRow2;
            await element2.waitForExist({timeout: 6000});
            await element2.setValue('something');

            await (await elements.saveLocator).click();
        });

        it('Success', async () => {
            await (await elements.btAdd).click();
            const element2 = await elements.inputRow2;
            await element2.waitForExist({timeout: 6000});
            await element2.setValue('something');

            await (await elements.saveLocatorOk).click();
        });
    })

    describe('Exception 3 ', () => {
        it('Failure', async () => {
            await (await elements.inputRow1).setValue();
        });

        it('Success', async () => {
            await (await elements.editLocator).click();
            await (await elements.editLocator).waitForEnabled();
            await (await elements.inputRow1).setValue('');

            await expect(await elements.inputRow1).toHaveText('');
            await expect(await elements.inputRow1).toBeVisble();
            
        });
    })

    describe.only('Exception 4 ', () => {
        it('Failure', async () => {
            const ins = await elements.instrucctions;
            await (await elements.btAdd).click();
            console.log(await ins.getText());
        });

        it('Success', async () => {
            const ins = await elements.instrucctions;
            await (await elements.btAdd).click();       
            await expect(await elements.instrucctions).not.toExist();
            
        });
    })
});

