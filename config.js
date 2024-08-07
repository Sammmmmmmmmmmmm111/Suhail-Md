const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349157408873";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_51_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICAzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg3LFxuICAgICAgICA4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYm96Qnpnbjd1eEdiaEF6VGI3UmxYc1NpMkMraERZRXRaU2VzRTlRMmo5RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTU3NDA4ODczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NDI5NkI4QkE2MEU4MjFDNzQwMUIyOUJCMjg5MTkyOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0NDEwOTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTU3NDA4ODczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQzgxODI3MDE4MjI1QjlBNDY1NDVEMjIyRTAwOTMwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0NDEwOTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTU3NDA4ODczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyN0EwNUY3MkRCMkM0OUUzQzdBQzQ4MUVCREUwNkU4OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0NDExMDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTU3NDA4ODczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NEM5NkU5RjMxMkFBM0JDODY4NUM1MTFBODA4MUYzRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0NDExMDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidnZYUlNqN1lUOGV5ZHN4enl4M2FWZ1wiLFxuICBcInBob25lSWRcIjogXCI0MGNlMjAwYS05NWUxLTQ0MDUtYjgzZS1hNmU4N2NiMTVkMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTQwLFxuICAgICAgODMsXG4gICAgICAxODUsXG4gICAgICA5NyxcbiAgICAgIDIzNixcbiAgICAgIDExMSxcbiAgICAgIDY2LFxuICAgICAgMTE1LFxuICAgICAgMTI3LFxuICAgICAgMTkxLFxuICAgICAgMTI5LFxuICAgICAgMjQyLFxuICAgICAgNzQsXG4gICAgICAyLFxuICAgICAgMzAsXG4gICAgICA5MixcbiAgICAgIDM2LFxuICAgICAgMTk5LFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAyNDIsXG4gICAgICA3NCxcbiAgICAgIDc2LFxuICAgICAgMjQ4LFxuICAgICAgODMsXG4gICAgICAyMTgsXG4gICAgICAxODMsXG4gICAgICAxOTksXG4gICAgICAxNTIsXG4gICAgICAxNDcsXG4gICAgICA4NCxcbiAgICAgIDg0LFxuICAgICAgNDAsXG4gICAgICAyMzksXG4gICAgICA1NSxcbiAgICAgIDk0LFxuICAgICAgMTUxLFxuICAgICAgNzgsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDQ1lOUkVBUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NzQwODg3MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FtbWllXCIsXG4gICAgXCJsaWRcIjogXCI0MDE4NDIzNDExOTMwNToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09Hajhkb0JFSU83cWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicUlrVVozaGZvMUhVMHN5U2d4STV1SlBiTStjczFWQjBRZ1M2VUd0TWRrOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpOG82VFpVM0RKUmgrVS9YU2xRTXF4YW14elcvVzJQdkYwd3ZtNS81YlVZQVBHMXdCaEpjdXkzOXZmbS9HRTJSVFdmaE5ha29CNHpFeXArUXFma2hCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjNHlUZXRjNVpxRHViQlFmTFo1NnlqVDhNWjhaRFVIN201cmdlQUtzL2doRWdjcE44d0UramVlcUp5ZnN2Wi9HUGdGY01qaHhDVXpVeGZVYWFBcHpqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU3NDA4ODczOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDQxMDk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTR4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNNHguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2RkVhQjI2K00wNWsxQXQxaVZsb1VOOTNrak9xK0J5NWYxZjNBWVBmRmZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1OTAzNTEwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNDQxMDk5NzU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
