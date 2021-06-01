
class VisionInsurance {
    /**
     * define selectors using getter methods
     */
    // atributos
    get pageTitle () { return '/vision-insurance'};
    
    // elementos o selectors
    get btnFindMyBenefits () { return $('button=Find my benefits') }
    get btnStarOrder () { return $('//a[contains(text(),"Start your order")]') }
    get cardSearch () { return $('.search-card') };

    // inputs
    get inputFirstName () { return $('[fieldname=firstName] input') };
    get inputLastName () { return $('[fieldname=lastName] input') };
    get inputZipCode () { return $('[fieldname=zipCode] input') };
    get selectMonth () { return $('[name=month]') };
    get selectDay () { return $('[name=day]') };
    get selectYear () { return $('[name=year]') };


    // validations
    get wrapperFirstName () { return $("//div[contains(@class,'form-element-wrapper') and contains(.,'First name')]") };
    get wrapperLastName () { return $("//div[contains(@class,'form-element-wrapper') and contains(.,'Last name')]") };
    get wrapperZipCode () { return $("//div[contains(@class,'form-element-wrapper') and contains(.,'Zip code')]") };


}

module.exports = new VisionInsurance();
