const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ɴᴀᴠɪʏᴀ-ᴍᴅ=3dkE0K5Y#FMPUQDAKvCIY5w4P0vDZlck920dXcAei3zzq0d1nZg8",
MONGODB: process.env.MONGODB || "mongodb://mongo:BklkgmkJmnXvnlxLSChccDiHGGvWHylD@autorack.proxy.rlwy.net:25578",
};





