const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gvdAQAiL#R4gH-xwYlM8uepgbzd8b58QbTBfHXWaXT44cU6PNIcs",
MONGODB: process.env.MONGODB || "mongodb://mongo:nCNtvmpZQfbmQyteQXzHtYWyzpjMSpcp@autorack.proxy.rlwy.net:55349",
};


