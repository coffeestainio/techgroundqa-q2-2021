const { remote } = require('webdriverio');
const colors = require('colors');
async function run(){

    // crear el browser o sesion
    const browser = await remote({
        logLevel: 'error',
        automationProtocol: 'webdriver',
        path:'/wd/hub',
        devtoolsProtocol: 'devtools',
        capabilities: {
            browserName: 'chrome'
        }
    })

    // navegar a webdriverIO
    await browser.url('https://webdriver.io');
    // encontrar elemento
    const linkBlog = await browser.$('=Blog');
    // hacer clicck
    await linkBlog.click(); 
    // verificar que estoy en la pagina correcta
    await (await browser.$('.blog-list-page')).isExisting();
    
    console.log("These are the articles:")

    // encotnrar articulos
    const articulos = await browser.$$('article');
    for (let i = 0; i < articulos.length; i ++) {
        let article = articulos[i];
        let title = await article.$('//header//h2//a');
        let titleText = await title.getText();
        let author = await article.$('//h4[@class="avatar__name"]//a');
        let authorText = await author.getText();
        let time = await article.$('time');
        let timeText = (await time.getText()).split(" · ")[0];      
        console.log(`${colors.green(titleText)} - ${colors.yellow(authorText)} - ${colors.bgBlue(timeText)}`)
    };

    await browser.deleteSession();
}
run()