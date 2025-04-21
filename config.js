const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUVmUTF5V2pxUWZhMWFwK3JlZ1dRYU1kWE11VXJwMFV0NndiVXhmMnRGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiek9ZN29UTlNBQ3k3NWZTUGRZcmJLZnJ6T1N6S3F5NzFBbTROL256REd5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQ3JMQm5ib1doWjMxd1Z3eDEyamRBZ0dZOXZSVXErcUVWc1RpMTRpa0ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTVAxTlZ6bjMyd1RkVW8ybHh3dS84dnFNT1cyS29pbEVvd2UwWWV0YXpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPVDFGZU0xS0FTaytaYy9JNEJuWS9EbzhGck5ncTEvZFQ4MStTbmw3VW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ3aTJBQmVaQnJCb1NFUnZPcVhYaWFjNkRZdHJJMXQ2OHkyaUFMK3E5MDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0w0QWZCNXpWeTlaaXFsV0tjaFBWN2tiNm1tWmIycEpVQXlhOXh0eGZFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnFjOHc2SHNGNVVlYS9TZ1VSZDNZditESEFwM3p4YlVLdXlkZlRTQktTOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhQVG9yYm8ydlFiQ2tuS09GWFFCOU5OdTczdVY5aUF5QWppb3c3NUc5eVNXYU5ZQVVvYTNmVzluMHZSODFVWmpXSkVVU3hJRERiOHVKUk5mbnpRTkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6IkVzZlE4V2czSHJqVzlpcGhYMHFhVW1ockJWbUxnaHFVeXNZbjJOdktKcU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZWcWgydFo3UTNhYlpnbk1DRVEzNHciLCJwaG9uZUlkIjoiNjRlOWI1YTAtOGM1YS00ZmIwLTlmM2YtM2Q4MTI4Yzk1NmExIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRGelNiaGp3dnZZMWtxeHhlQVNYeGNQK1hsbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTMGFGZVk0NmwyeU5GM25WSHRCNVlNSFM1VDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlE1R0FNS0YiLCJtZSI6eyJpZCI6IjI1NDc5NjIzODU5MDoxMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT21QdG80QkVKWHptTUFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0V6M0htN0ZmcERRaGJXODI4OW9iVDBnYms4cWFHZ3pBQVQ2Z2xVTTcyUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibHZhMGp2TFZlUjRna2pqVUU5NkNFQk12ODZsQ1M0c1lINDNpYWJBN0RYTS8vcjRsTHZReE9nVmZNVWxUQ0JGWldmZkMyUDNDUC9naUJWNHZPaVJ5RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjJUN3pLQWtyWUh1YzZCNk82RitpTFE2Lzc4Rkk5Vk5ZWERvcUlmRU5yT1ZUOHJqdS9LWElaSWFrMTVwbVJsYk9SclE4RE5XZENaWGxveU0rQXlRV0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk2MjM4NTkwOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRoTTl4NXV4WDZRMElXMXZOdlBhRzA5SUc1UEttaG9Nd0FFK29KVkRPOWsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDUyMzg0MzR9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "237677224245",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
