const axios = require("axios");
let api_key;

const getApiKey = async () => {
    try {
        const getResponse = await axios.get("https://interns.bcgdvsydney.com/api/v1/key");
        api_key = await getResponse.data.key;
        console.log(`HTTP Status: ${getResponse.status} ${getResponse.statusText}`);
        
        const postResponse = await axios.post(`https://interns.bcgdvsydney.com/api/v1/submit?apiKey=${api_key}`, {
            name: "Natasha Khatri",
            email: "tashk85@gmail.com"
        });
        console.log(`HTTP Status: ${postResponse.status} ${postResponse.statusText}`);
    } catch (error) {
        console.log(error);
    }  
}

getApiKey();