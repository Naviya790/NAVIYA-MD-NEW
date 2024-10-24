const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PZszgCCa#7Wdd06khcAEsj5uSuB-7k6DNTyz0C5plaGv84EFAFPw",
MONGODB: process.env.MONGODB || "mongodb://mongo:KTXIMlPMonISLOhVIjWvetvwuVWkuctg@autorack.proxy.rlwy.net:33344",
};

