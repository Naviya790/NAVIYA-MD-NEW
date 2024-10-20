const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3K5khaKD#D4jqtd1W52WWleS2ruGMTUFcBZ_7j8y7ibtYaiite0M",
MONGODB: process.env.MONGODB || "mongodb://mongo:rrQTfFWvxVSIXOYVmumTFKuTkahWbaJS@junction.proxy.rlwy.net:46641",
};
