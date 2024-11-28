const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ɴᴀᴠɪʏᴀ-ᴍᴅ=TRtnla6L#7wthQXd_xRsSK5gEV3urv0GNKkrAiCIrkJ7orgwrsYg",
MONGODB: process.env.MONGODB || "mongodb://mongo:BklkgmkJmnXvnlxLSChccDiHGGvWHylD@autorack.proxy.rlwy.net:25578",
};





