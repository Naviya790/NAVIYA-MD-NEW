const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "YOFHkLLK#S1vwp3BIoymZY3hlsBvmaFhhklKGzoECTM9KSI1Co3w",
MONGODB: process.env.MONGODB || "mongodb://mongo:rrQTfFWvxVSIXOYVmumTFKuTkahWbaJS@junction.proxy.rlwy.net:46641",
};
