const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mfYyxCBT#Ujx71fmi6-gBqoH-owY3acz0NjeJm7Sh9nn4sRTvDAg",
MONGODB: process.env.MONGODB || "mongodb://mongo:rrQTfFWvxVSIXOYVmumTFKuTkahWbaJS@junction.proxy.rlwy.net:46641",
};
