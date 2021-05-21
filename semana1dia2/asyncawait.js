const axios = require('axios');

function makeRequest() {
    const res = axios.get('https://stanfordhealthcare.org');
    return res;
}

async function main(){
    console.log(1);
    const response = await makeRequest();
    console.log(response);
    console.log(2);
}

main();