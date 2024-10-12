const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "APFTUYzI#BMxRowrfS54pslQMsqAmvqWQuOxSgTmHOGWlWl937J8",
MONGODB: process.env.MONGODB || "mongodb://mongo:nCNtvmpZQfbmQyteQXzHtYWyzpjMSpcp@autorack.proxy.rlwy.net:55349",
};


