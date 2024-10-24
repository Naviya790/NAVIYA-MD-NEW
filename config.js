const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RDNHWahL#j_Ayhc90KpN5GDs94LuTCUzHt8Uu6JGIa9Cz1-bK4Qc",
MONGODB: process.env.MONGODB || "mongodb://mongo:KTXIMlPMonISLOhVIjWvetvwuVWkuctg@autorack.proxy.rlwy.net:33344",
};

