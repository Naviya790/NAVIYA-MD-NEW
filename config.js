const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3Lw1wCzL#BHXt1pGBsn4mqAgXMeVaErluxgJ1fmrA7WDlxP2yPGE",
MONGODB: process.env.MONGODB || "mongodb://mongo:KTXIMlPMonISLOhVIjWvetvwuVWkuctg@autorack.proxy.rlwy.net:33344",
};

