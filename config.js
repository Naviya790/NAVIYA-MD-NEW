const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yFFDAYCY#HinBUxW2jSTpF1dkaxCinDxzvCnEdqZZx-LtUGU7aww",
MONGODB: process.env.MONGODB || "mongodb://mongo:KTXIMlPMonISLOhVIjWvetvwuVWkuctg@autorack.proxy.rlwy.net:33344",
};

