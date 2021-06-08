const HomePage = require('../pageobjects/home.page');
const VisionInsurance = require('../pageobjects/vision-insurance.page');

let userData =  {}

describe('Find my benefits',() => {

    before(async ()=> {
        // leer datos de un archivo
        userData =  {
            firsName: 'Juan',
            lastName: 'Gutierrez',
            zipCode: 84001,
            birthDate: {
                day: 8,
                month: 'Apr',
                year: 1989
            }
        }
        
        // vaya al home page
        await browser.url('/');
    });

    it('should be able to navigate to find my benefits from the home page', async () => {       
        // acciones
        // const routerLink = await ;
        await (await HomePage.linkFindMyBenefits).click();
        
        // verificacion
        await expect(browser).toHaveUrlContaining(VisionInsurance.pageTitle);
        await expect(await VisionInsurance.cardSearch).toBeDisplayed();

        // this is to avoid conflicts with page refresh
        await browser.pause('3000');
    });

    it('should be able to enter user data' , async () => {
        const firstName = await VisionInsurance.inputFirstName;
        const lastName = await VisionInsurance.inputLastName; 
        const zipCode = await VisionInsurance.inputZipCode;

        await firstName.click();
        await firstName.setValue(userData.firsName);
        await lastName.setValue(userData.lastName);
        await zipCode.setValue(userData.zipCode);

        await firstName.click();

        const firstNameWrapper = await VisionInsurance.wrapperFirstName;
        const lastNameWrapper = await VisionInsurance.wrapperLastName;
        const zipCodeWrapper = await VisionInsurance.wrapperZipCode;

        const classToShowIsValid = 'is-good';
        
        await expect(firstNameWrapper).toHaveElementClass(classToShowIsValid);
        await expect(lastNameWrapper).toHaveElementClass(classToShowIsValid);
        await expect(zipCodeWrapper).toHaveElementClass(classToShowIsValid);

    });

    it ('should be able to select the birth date' , async () => {

        // acciones
        const selectMonth = await VisionInsurance.selectMonth;
        const selectDay = await VisionInsurance.selectDay;
        const selectYear = await VisionInsurance.selectYear;

        await selectMonth.selectByVisibleText(userData.birthDate.month);
        await selectDay.selectByAttribute('value', userData.birthDate.day);
        await selectYear.selectByAttribute('value', userData.birthDate.year);

        // validaciones

    });

    it ('should be able to continue to review benefits' , async () => {
        // datos
        // selector unico de webdriverIO
        const findButton = await VisionInsurance.btnFindMyBenefits;
        await findButton.click();

        // validaciones
        await expect(VisionInsurance.btnStarOrder).toBeDisplayed();

    });

});