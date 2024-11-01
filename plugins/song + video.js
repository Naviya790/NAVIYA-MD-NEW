const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "play",
    desc: "download songs",
    category: "download",
    react: "📍",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("Give me yt url ")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
◤ɴᴀᴠɪʏᴀ ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ◥

> ᴛɪᴛʟᴇ: ${data.title}



> ➣ᴛɪᴍᴇ: ${data.timestamp}

> ➣ᴀɢᴏ: ${data.ago}

> ➣vɪᴇᴡꜱ: ${data.views}

> ᴍᴀᴅᴇ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🖤
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});


//dawonload audio 

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document  message 
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"ᴍᴀᴅᴇ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🙂🖤"},{quoted:mek})



    
   
 
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//==============video=========================

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("give me video url ")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*◤ɴᴀᴠɪʏᴀ ᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ◥*

> ᴛɪᴛʟᴇ: ${data.title}




> ➣ᴛɪᴍᴇ: ${data.timestamp}

> ➣ᴀɢᴏ: ${data.ago}

> ➣vɪᴇᴡꜱ: ${data.views}

> ᴍᴀᴅᴇ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🖤
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});


//dawonload video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document  message 
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek});
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"ᴍᴀᴅᴇ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🙂🖤"},{quoted:mek});


    
   
 
}catch(e){
console.log(e)
reply(`${e}`)
}
})

